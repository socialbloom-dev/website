import type { BlogPost } from '@/types/data'
import { request, gql } from 'graphql-request'
import { unstable_cache } from 'next/cache'

const DATOCMS_API_TOKEN = process.env.DATOCMS_API_TOKEN || '26a1da4041330b18f894f4e25db08f'
const DATOCMS_API_URL = 'https://graphql.datocms.com/'

// DatoCMS API response types
interface DatoCMSBlogPost {
  id: string
  _status: string
  _firstPublishedAt: string
  slug?: string
  headings?: string
  richText?: {
    value: any
    blocks: any[]
    links: any[]
  }
  date?: string
  media?: {
    url: string
    alt?: string
  }[]
  numbering?: number
  seo?: {
    title?: string
    description?: string
  }
  [key: string]: any
}

interface AllBlogPostsResponse {
  allBlogPosts: DatoCMSBlogPost[]
}

// Updated GraphQL query to fetch image data from blocks
const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    allBlogPosts {
      id
      _status
      _firstPublishedAt
      _createdAt
      _updatedAt
      _modelApiKey
      slug
      headings
      richText {
        value
        blocks {
          ... on ImageRecord {
            id
            _modelApiKey
            __typename
            image {
              url
              alt
              width
              height
              title
            }
            caption
          }
          ... on GalleryRecord {
            id
            _modelApiKey
            __typename
            images {
              url
              alt
              width
              height
              title
            }
          }
        }
        links {
          ... on ImageRecord {
            id
            _modelApiKey
            __typename
            image {
              url
              alt
              width
              height
              title
            }
            caption
          }
        }
      }
      date
      media {
        url
        alt
      }
      numbering
      seo {
        title
        description
      }
    }
  }
`

// Helper function to extract plain text from rich text for excerpts
function extractPlainTextFromRichText(richTextValue: any): string {
  if (!richTextValue || !richTextValue.document || !richTextValue.document.children) {
    return ''
  }

  function extractTextFromNode(node: any): string {
    if (node.type === 'span' && node.value) {
      return node.value
    }
    
    if (node.children && Array.isArray(node.children)) {
      return node.children.map(extractTextFromNode).join(' ')
    }
    
    return ''
  }

  try {
    const text = richTextValue.document.children.map(extractTextFromNode).join(' ').trim()
    return text
  } catch (e) {
    console.error('Error extracting plain text:', e)
    return ''
  }
}

// Transform DatoCMS blog post to our BlogPost interface
function transformDatoCMSPost(post: DatoCMSBlogPost, index: number): BlogPost {
  console.log(`Transforming DatoCMS post ${index + 1}:`, {
    id: post.id,
    slug: post.slug,
    headings: post.headings,
    hasRichText: !!post.richText,
    richTextKeys: post.richText ? Object.keys(post.richText) : [],
    blocksCount: post.richText?.blocks?.length || 0,
    linksCount: post.richText?.links?.length || 0,
    status: post._status,
    publishedAt: post._firstPublishedAt
  })

  // Create a proper slug from headings if slug is missing
  const slug = post.slug || 
    (post.headings ? post.headings.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') : '') ||
    `post-${index + 1}`

  // Extract plain text for excerpt
  const excerpt = post.richText ? extractPlainTextFromRichText(post.richText.value) : ''
  const shortExcerpt = excerpt.length > 150 ? excerpt.substring(0, 150) + '...' : excerpt

  // Get title from headings or SEO title
  const title = post.headings || post.seo?.title || `Blog Post ${index + 1}`

  // Parse date
  const publishedAt = post.date || post._firstPublishedAt || new Date().toISOString()

  return {
    id: post.id,
    title,
    slug,
    excerpt: shortExcerpt,
    content: post.richText || { value: null }, // Return raw DatoCMS rich text structure with blocks
    author: 'Social Bloom Team',
    publishedAt,
    tags: [],
    featured: index === 0,
    readTime: Math.max(1, Math.ceil(excerpt.split(' ').length / 200)),
  }
}

// Cached function to fetch all blog posts
export const getAllBlogPosts = unstable_cache(
  async (): Promise<BlogPost[]> => {
    try {
      console.log('Fetching blog posts from DatoCMS...')
      console.log('API URL:', DATOCMS_API_URL)
      console.log('API Token present:', !!DATOCMS_API_TOKEN)
      
      const data = await request<AllBlogPostsResponse>(DATOCMS_API_URL, GET_ALL_BLOG_POSTS, {}, {
        Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
      })
      
      console.log('DatoCMS Response:', {
        totalPosts: data.allBlogPosts?.length || 0,
        posts: data.allBlogPosts?.map(p => ({
          id: p.id,
          slug: p.slug,
          headings: p.headings,
          status: p._status,
          blocksCount: p.richText?.blocks?.length || 0,
          linksCount: p.richText?.links?.length || 0
        })) || []
      })
      
      if (!data.allBlogPosts || data.allBlogPosts.length === 0) {
        console.log('No blog posts found in DatoCMS')
        return []
      }
      
      const transformedPosts = data.allBlogPosts
        .filter(post => post._status === 'published')
        .map(transformDatoCMSPost)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      
      console.log(`Successfully transformed ${transformedPosts.length} published blog posts`)
      return transformedPosts
      
    } catch (error) {
      console.error('Error fetching blog posts from DatoCMS:', error)
      return []
    }
  },
  ['blog-posts'],
  { revalidate: 60 }
)

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    console.log(`Blog post not found for slug: ${slug}`)
    console.log('Available slugs:', posts.map(p => p.slug))
  }
  
  return post || null
} 