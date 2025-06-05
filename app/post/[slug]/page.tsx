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
            </div>
            {post.tags && (
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
          
          <div 
            className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-8
            prose-h1:text-4xl prose-h2:text-3xl prose-h2:border-b prose-h2:border-white/20 prose-h2:pb-3
            prose-h3:text-2xl prose-h3:text-[#2DE6C4] prose-h4:text-xl prose-h5:text-lg prose-h6:text-base
            prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-white prose-strong:font-semibold
            prose-em:text-white/90 prose-em:italic
            prose-u:text-white prose-u:underline prose-u:decoration-[#2DE6C4]/50
            prose-code:text-[#2DE6C4] prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-ul:text-white/80 prose-ul:mb-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:text-white/80 prose-ol:mb-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-white/80 prose-li:mb-2 prose-li:leading-relaxed prose-li:marker:text-[#2DE6C4]
            prose-a:text-[#2DE6C4] prose-a:underline prose-a:decoration-[#2DE6C4]/50 prose-a:hover:decoration-[#2DE6C4] prose-a:transition-all
            prose-blockquote:border-l-4 prose-blockquote:border-[#2DE6C4] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-white/70
            prose-hr:border-white/20 prose-hr:my-8
            first:prose-p:text-xl first:prose-p:text-white/90 first:prose-p:font-medium first:prose-p:leading-relaxed
            [&>*:first-child]:mt-0"
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