import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    console.log('=== REVALIDATION WEBHOOK TRIGGERED ===')
    
    // Get the request body
    const body = await request.json()
    console.log('Webhook payload:', JSON.stringify(body, null, 2))
    
    // Check if this is from DatoCMS
    const isDatoCMS = request.headers.get('x-datocms-webhook-signature')
    console.log('Is DatoCMS webhook:', !!isDatoCMS)
    
    // Revalidate blog-related paths
    revalidatePath('/blog')
    revalidatePath('/post/[slug]', 'page')
    
    // You can also revalidate specific tags if you use them
    revalidateTag('blog-posts')
    
    console.log('Cache revalidated for blog paths')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Cache revalidated',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation webhook error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
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