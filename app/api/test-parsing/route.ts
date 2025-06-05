import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog-data'

export async function GET() {
  try {
    console.log('=== TESTING BLOG PARSING ===')
    
    const posts = await getAllBlogPosts()
    
    console.log('Number of posts:', posts.length)
    
    if (posts.length > 0) {
      const firstPost = posts[0]
      console.log('First post:', {
        title: firstPost.title,
        slug: firstPost.slug,
        excerpt: firstPost.excerpt,
        contentLength: firstPost.content.length,
        contentPreview: firstPost.content.substring(0, 300),
        publishedAt: firstPost.publishedAt
      })
    }
    
    return NextResponse.json({
      success: true,
      postsCount: posts.length,
      posts: posts.map(p => ({
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        contentLength: p.content.length,
        contentPreview: p.content.substring(0, 100) + '...'
      }))
    })
  } catch (error) {
    console.error('Test parsing error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
} 