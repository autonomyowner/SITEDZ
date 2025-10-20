import { NextRequest, NextResponse } from 'next/server'
import { initiatePayment } from '@/lib/epay'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log('Payment initiation request received:', body)
    
    const { plan_name, client_name, client_email, client_phone, amount } = body
    
    // Validate required fields
    if (!plan_name || !client_name || !client_email || !amount) {
      const missingFields = []
      if (!plan_name) missingFields.push('plan_name')
      if (!client_name) missingFields.push('client_name')
      if (!client_email) missingFields.push('client_email')
      if (!amount) missingFields.push('amount')
      
      console.error('Missing required fields:', missingFields)
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }
    
    // Validate amount is a valid number
    if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      console.error('Invalid amount:', amount)
      return NextResponse.json(
        { success: false, error: 'Invalid amount value' },
        { status: 400 }
      )
    }
    
    // Generate unique invoice ID
    const invoice_id = `INV-${Date.now()}-${Math.random().toString(36).substring(7)}`
    
    // Get the base URL for return/fail URLs
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || request.headers.get('origin') || 'http://localhost:3000'
    
    // Prepare payment data according to TAMAYYUZ API specs
    const paymentData = {
      invoice_id,
      amount: amount.toString(),
      returnUrl: `${baseUrl}/payment/confirmation?id=${invoice_id}&plan=${encodeURIComponent(plan_name)}`,
      failUrl: `${baseUrl}/payment/failed?id=${invoice_id}`,
      webhook_url: `${baseUrl}/api/payment/webhook`,
      language: 'fr', // Default language
    }
    
    console.log('Initiating payment with data:', paymentData)
    console.log('Client metadata (for internal use):', {
      client_name,
      client_email,
      client_phone,
      plan_name,
    })
    
    // TODO: Store client metadata and invoice in database for later retrieval
    
    // Initiate payment
    const result = await initiatePayment(paymentData)
    
    console.log('Payment initiation result:', result)
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      )
    }
    
    return NextResponse.json({
      success: true,
      payment_url: result.payment_url,
      invoice_id,
    })
  } catch (error) {
    console.error('Payment initiation error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

