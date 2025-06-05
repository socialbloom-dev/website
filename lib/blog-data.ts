import type { BlogPost } from '@/types/data'
import { request, gql } from 'graphql-request'

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

// Updated GraphQL query using the actual field names from DatoCMS
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
        blocks
        links
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
    console.log('Extracted plain text:', text.substring(0, 200) + '...')
    return text
  } catch (e) {
    console.error('Error extracting plain text:', e)
    return ''
  }
}

// Helper function to convert DatoCMS rich text to simple HTML
function convertRichTextToHTML(richTextValue: any): string {
  console.log('Converting rich text to HTML:', JSON.stringify(richTextValue, null, 2))
  
  if (!richTextValue || !richTextValue.document || !richTextValue.document.children) {
    console.log('No rich text document found')
    return '<p>No content available</p>'
  }

  function convertNodeToHTML(node: any): string {
    console.log('Processing node:', node.type, node)
    
    if (node.type === 'span') {
      let text = node.value || ''
      
      // Apply formatting marks in the correct order
      if (node.marks && Array.isArray(node.marks)) {
        // Sort marks to ensure consistent nesting
        const sortedMarks = [...node.marks].sort()
        for (const mark of sortedMarks) {
          switch (mark) {
            case 'strong':
              text = `<strong>${text}</strong>`
              break
            case 'emphasis':
              text = `<em>${text}</em>`
              break
            case 'underline':
              text = `<u>${text}</u>`
              break
            case 'code':
              text = `<code>${text}</code>`
              break
            case 'strikethrough':
              text = `<del>${text}</del>`
              break
          }
        }
      }
      
      return text
    }
    
    if (node.type === 'paragraph') {
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      // Don't render empty paragraphs with just whitespace
      if (content.trim() === '' || content.trim() === '\n' || /^\s*$/.test(content)) {
        return ''
      }
      return `<p>${content}</p>`
    }
    
    if (node.type === 'heading') {
      const level = Math.max(1, Math.min(6, node.level || 2)) // Ensure level is between 1-6
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      return `<h${level}>${content}</h${level}>`
    }
    
    if (node.type === 'list') {
      const tag = node.style === 'numbered' ? 'ol' : 'ul'
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      return `<${tag}>${content}</${tag}>`
    }
    
    if (node.type === 'listItem') {
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      return `<li>${content}</li>`
    }
    
    if (node.type === 'link') {
      const url = node.url || '#'
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      const title = node.title ? ` title="${node.title}"` : ''
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"${title}>${content}</a>`
    }
    
    if (node.type === 'blockquote') {
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      return `<blockquote>${content}</blockquote>`
    }
    
    if (node.type === 'codeBlock') {
      const content = node.children ? node.children.map(convertNodeToHTML).join('') : ''
      const language = node.language ? ` class="language-${node.language}"` : ''
      return `<pre><code${language}>${content}</code></pre>`
    }
    
    if (node.type === 'thematicBreak' || node.type === 'hr') {
      return '<hr>'
    }
    
    if (node.children && Array.isArray(node.children)) {
      return node.children.map(convertNodeToHTML).join('')
    }
    
    return ''
  }

  try {
    const html = richTextValue.document.children
      .map(convertNodeToHTML)
      .filter((content: string) => content.trim() !== '') // Remove empty content
      .join('')
    
    console.log('Generated HTML:', html.substring(0, 300) + '...')
    return html || '<p>No content available</p>'
  } catch (e) {
    console.error('Error converting rich text to HTML:', e)
    return '<p>Content parsing error</p>'
  }
}

// Transform DatoCMS data to our BlogPost interface
function transformDatoCMSPost(post: DatoCMSBlogPost, index: number): BlogPost {
  console.log('=== TRANSFORMING POST ===')
  console.log('Post ID:', post.id)
  console.log('Post headings:', post.headings)
  console.log('Rich text exists:', !!post.richText)
  console.log('Rich text value exists:', !!post.richText?.value)
  
  // Extract data from the actual DatoCMS fields
  const title = post.headings || post.seo?.title || `Blog Post ${index + 1}`
  const slug = post.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `post-${index + 1}`
  const publishedAt = post.date || post._firstPublishedAt
  
  // Convert rich text to HTML
  let content = '<p>No content available</p>'
  let plainTextContent = ''
  
  if (post.richText?.value) {
    console.log('Processing rich text...')
    try {
      // Convert to HTML
      content = convertRichTextToHTML(post.richText.value)
      
      // Extract plain text for excerpt
      plainTextContent = extractPlainTextFromRichText(post.richText.value)
      
      console.log('Final content length:', content.length)
      console.log('Final plain text length:', plainTextContent.length)
    } catch (e) {
      console.error('Error processing rich text:', e)
      content = '<p>Content parsing error</p>'
      plainTextContent = 'Content parsing error'
    }
  } else {
    console.log('No rich text value found')
  }
  
  // Create excerpt from SEO description, plain text content, or fallback
  const excerpt = post.seo?.description || 
    (plainTextContent ? plainTextContent.substring(0, 150) + '...' : 'No excerpt available')

  const result = {
    slug: slug,
    title: title,
    excerpt: excerpt,
    content: content,
    author: 'Social Bloom Team',
    publishedAt: publishedAt,
    tags: ['datocms']
  }
  
  console.log('=== FINAL POST RESULT ===')
  console.log('Title:', result.title)
  console.log('Excerpt:', result.excerpt)
  console.log('Content length:', result.content.length)
  console.log('Content preview:', result.content.substring(0, 100))
  
  return result
}

// Function to get all blog posts from DatoCMS
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('Fetching blog posts from DatoCMS...')
    
    const data = await request<AllBlogPostsResponse>(
      DATOCMS_API_URL,
      GET_ALL_BLOG_POSTS,
      {},
      {
        Authorization: `Bearer ${DATOCMS_API_TOKEN}`,
      }
    )

    console.log('DatoCMS Response received, posts count:', data.allBlogPosts?.length || 0)

    if (!data.allBlogPosts || data.allBlogPosts.length === 0) {
      console.log('No blog posts found in DatoCMS. Please create some blog posts in your DatoCMS admin panel.')
      return []
    }

    console.log(`Found ${data.allBlogPosts.length} blog posts in DatoCMS`)

    return data.allBlogPosts
      .filter((post: DatoCMSBlogPost) => post._status === 'published')
      .map(transformDatoCMSPost)
      .sort((a: BlogPost, b: BlogPost) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
  } catch (error) {
    console.error('Error fetching blog posts from DatoCMS:', error)
    return []
  }
}

// Function to get a single blog post by slug from DatoCMS
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // First get all posts and find the one with matching slug
    const allPosts = await getAllBlogPosts()
    return allPosts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Error fetching blog post from DatoCMS:', error)
    return null
  }
} 