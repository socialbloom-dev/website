import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { StructuredText } from 'react-datocms'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-data'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Social Bloom',
    }
  }

  return {
    title: `${post.title} - Social Bloom Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] via-[#3d3b7a] to-[#0a0a18] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back to Blog Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-[#2DE6C4] hover:text-white transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <article className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-3xl p-8 lg:p-12">
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/70 mb-6">
              <span className="font-medium">{post.author}</span>
              <span>•</span>
              <time className="text-sm">{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
              {post.readTime && (
                <>
                  <span>•</span>
                  <span className="text-sm">{post.readTime} min read</span>
                </>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-[#2DE6C4]/20 text-[#2DE6C4] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div className="dato-rich-text">
            {post.content?.value ? (
              <div className="structured-text-content">
                <StructuredText 
                  data={post.content}
                  renderBlock={({ record }) => {
                    // Handle image blocks
                    if (record._modelApiKey === 'image' || record.__typename === 'ImageRecord') {
                      const imageUrl = record.image?.url || record.url
                      const imageAlt = record.image?.alt || record.alt || record.caption || 'Blog image'
                      const imageWidth = record.image?.width || 800
                      const imageHeight = record.image?.height || 400
                      
                      if (!imageUrl) return null
                      
                      return (
                        <div className="my-8">
                          <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={imageWidth}
                            height={imageHeight}
                            className="rounded-lg w-full h-auto border border-white/10"
                            priority={false}
                          />
                          {record.caption && (
                            <p className="text-sm text-white/60 italic mt-3 text-center">
                              {record.caption}
                            </p>
                          )}
                        </div>
                      )
                    }
                    
                    return null
                  }}
                  renderInlineRecord={({ record }) => {
                    // Handle inline images
                    if (record._modelApiKey === 'image' || record.__typename === 'ImageRecord') {
                      const imageUrl = record.image?.url || record.url
                      const imageAlt = record.image?.alt || record.alt || 'Inline image'
                      
                      if (!imageUrl) return null
                      
                      return (
                        <span className="inline-block mx-1">
                          <Image
                            src={imageUrl}
                            alt={imageAlt}
                            width={200}
                            height={150}
                            className="rounded-lg inline-block max-w-full h-auto"
                          />
                        </span>
                      )
                    }
                    
                    return null
                  }}
                  renderLinkToRecord={({ record, children }) => {
                    // Handle linked records
                    return <span>{children}</span>
                  }}
                />
              </div>
            ) : (
              <p className="text-white/70 italic">No content available</p>
            )}
          </div>
        </article>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Implement These Strategies?
            </h3>
            <p className="text-white/70 mb-6">
              Let's discuss how Social Bloom can help you achieve similar results for your business.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 text-[#2DE6C4] bg-white/15 hover:bg-white/25 border border-[#2DE6C4] rounded-full font-semibold transition-all duration-300"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 