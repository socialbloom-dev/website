import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-data'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
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
  const post = getBlogPostBySlug(params.slug)

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

        <article className="bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-3xl p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-white/70 mb-4">
              <span>{post.author}</span>
              <span>•</span>
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-[#2DE6C4]/20 text-[#2DE6C4] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
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