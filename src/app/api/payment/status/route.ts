import { NextRequest, NextResponse } from 'next/server'
import { checkPaymentStatus, verifySignature } from '@/lib/epay'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { invoice_id, hash } = body
    
    if (!invoice_id) {
      return NextResponse.json(
        { success: false, error: 'Missing invoice_id' },
        { status: 400 }
      )
    }
    
    console.log('Payment status check requested for invoice:', invoice_id)
    
    // Call TAMAYYUZ API to get payment status
    const paymentStatus = await checkPaymentStatus(invoice_id, 'fr')
    
    console.log('Payment status received:', paymentStatus)
    
    // Verify signature if hash is provided
    if (hash && paymentStatus.total) {
      const secretKey = process.env.EPAY_SECRET_KEY
      if (!secretKey) {
        console.error('Missing EPAY_SECRET_KEY')
        return NextResponse.json(
          { success: false, error: 'Configuration error' },
          { status: 500 }
        )
      }
      
      const isValid = verifySignature(
        hash,
        invoice_id,
        paymentStatus.total,
        secretKey
      )
      
      if (!isValid) {
        console.error('Invalid signature for payment verification')
        return NextResponse.json(
          { success: false, error: 'Invalid signature' },
          { status: 400 }
        )
      }
    }
    
    // TODO: Update your database with payment status
    // Example:
    // if (paymentStatus.status === 'S') {
    //   await db.orders.update({
    //     where: { invoice_id },
    //     data: { status: 'PAID', payment_details: paymentStatus }
    //   })
    // }
    
    return NextResponse.json({
      success: true,
      payment_details: paymentStatus,
    })
  } catch (error) {
    console.error('Payment status check error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to check payment status' 
      },
      { status: 500 }
    )
  }
}

