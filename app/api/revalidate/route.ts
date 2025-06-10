import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Check for secret to confirm this is a valid request
    const body = await request.json()
    const secret = body.secret || request.headers.get('x-revalidate-secret')
    
    if (secret !== process.env.REVALIDATE_SECRET) {
      console.log('Invalid revalidation secret')
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Log the webhook for debugging
    console.log('DatoCMS webhook received:', {
      timestamp: new Date().toISOString(),
      payload: body
    })

    // Revalidate the blog pages
    revalidatePath('/blog')
    revalidatePath('/post')
    
    // Also revalidate the homepage if blog content is shown there
    revalidatePath('/')

    console.log('Successfully revalidated blog paths')
    
    return NextResponse.json({ 
      revalidated: true,
      timestamp: new Date().toISOString(),
      paths: ['/blog', '/post', '/']
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidation webhook endpoint is active',
    usage: 'POST to this endpoint to trigger cache revalidation'
  })
} 