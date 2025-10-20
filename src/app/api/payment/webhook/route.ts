import { NextRequest, NextResponse } from 'next/server'
import { verifySignature } from '@/lib/epay'
import type { WebhookPayload } from '@/lib/epay'

export async function POST(request: NextRequest) {
  try {
    const body: WebhookPayload = await request.json()
    const signature = request.headers.get('X-Signature')
    
    if (!signature) {
      console.error('Missing signature in webhook request')
      return NextResponse.json(
        { detail: 'Missing signature' },
        { status: 400 }
      )
    }
    
    // Verify signature
    const secretKey = process.env.EPAY_SECRET_KEY
    if (!secretKey) {
      console.error('Missing EPAY_SECRET_KEY')
      return NextResponse.json(
        { detail: 'Configuration error' },
        { status: 500 }
      )
    }
    
    // Use 'epay_amount' for signature verification
    const totalAmount = body.epay_amount || '0'
    const isValid = verifySignature(
      signature,
      body.invoice_id,
      totalAmount,
      secretKey
    )
    
    if (!isValid) {
      console.error('Invalid signature in webhook request')
      return NextResponse.json(
        { detail: 'Invalid signature' },
        { status: 400 }
      )
    }
    
    // Log webhook data for processing
    console.log('Payment webhook received:', {
      invoice_id: body.invoice_id,
      status: body.status,
      amount: body.epay_amount,
      approval_code: body.approval_code,
      satim_order_id: body.satim_order_id,
    })
    
    // Here you would typically:
    // 1. Update your database with payment status
    // 2. Send confirmation email to customer
    // 3. Trigger any business logic (e.g., activate service)
    
    // For now, we'll just acknowledge receipt
    if (body.status === 'S') {
      // Payment successful
      console.log(`Payment successful for invoice ${body.invoice_id}`)
      
      // TODO: Add your business logic here
      // Example:
      // - Update order status in database
      // - Send confirmation email
      // - Activate customer account/service
      
    } else if (body.status === 'F') {
      // Payment failed
      console.log(`Payment failed for invoice ${body.invoice_id}: ${body.description}`)
      
      // TODO: Add failure handling logic
      // Example:
      // - Update order status to failed
      // - Send notification to customer
    }
    
    return NextResponse.json(
      { detail: 'Webhook processed successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    )
  }
}

