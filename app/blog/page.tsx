import { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog - Social Bloom | Digital Marketing Insights',
  description: 'Latest insights on digital marketing, lead generation, and business growth strategies from Social Bloom experts.',
}

export default async function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a18] via-[#3d3b7a] to-[#0a0a18] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Social Bloom <span className="text-[#2DE6C4]">Blog</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Latest insights on digital marketing, lead generation, and proven strategies to grow your business.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/post/${post.slug}`}
              className="group bg-[#16213e]/60 backdrop-blur-[30px] border border-[#4a5568]/30 rounded-3xl p-6 hover:border-[#2DE6C4]/50 transition-all duration-300"
            >
              <article>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#2DE6C4] transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>{post.author}</span>
                  <span>•</span>
                  <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
                </div>
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-[#2DE6C4]/20 text-[#2DE6C4] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 