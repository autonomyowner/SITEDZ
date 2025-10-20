import crypto from 'crypto'

export interface PaymentInitiationData {
  invoice_id: string
  amount: string
  returnUrl: string
  failUrl: string
  webhook_url?: string
  language?: string
}

export interface PaymentMetadata {
  plan_name: string
  client_name: string
  client_email: string
  client_phone: string
}

export interface PaymentResponse {
  success: boolean
  payment_url?: string
  error?: string
  invoice_id?: string
}

export interface WebhookPayload {
  invoice_id: number
  satim_order_id: string
  tamayyuz_epay_id: number
  epay_amount: string
  date: string
  refunded: boolean
  refund_amount: string | null
  status: string
  description: string
  cardholder_name: string
  satim_description: string
  approval_code: number
  return_url: string
  fail_url: string
}

/**
 * Calculate HMAC signature for payment verification
 * @param data - Object containing invoice_id and total
 * @param secretKey - API secret key
 * @returns Calculated signature in uppercase
 */
export function calculateSignature(
  data: { invoice_id: string | number; total: string },
  secretKey: string
): string {
  // Ensure consistent formatting - sort keys and use separators like the examples
  const jsonString = JSON.stringify(
    data,
    Object.keys(data).sort(),
    0
  )
  
  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(jsonString)
    .digest('hex')
    .toUpperCase()
  
  return signature
}

/**
 * Verify signature from webhook or redirect
 * @param receivedSignature - Signature received from gateway
 * @param invoiceId - Invoice ID
 * @param total - Total amount
 * @param secretKey - API secret key
 * @returns Boolean indicating if signature is valid
 */
export function verifySignature(
  receivedSignature: string,
  invoiceId: string | number,
  total: string,
  secretKey: string
): boolean {
  const calculatedSignature = calculateSignature(
    { invoice_id: invoiceId, total },
    secretKey
  )
  
  return calculatedSignature === receivedSignature
}

/**
 * Initiate payment with TAMAYYUZ ePay
 * @param paymentData - Payment initiation data
 * @returns Payment response with payment URL
 */
export async function initiatePayment(
  paymentData: PaymentInitiationData
): Promise<PaymentResponse> {
  const apiKey = process.env.NEXT_PUBLIC_EPAY_API_KEY
  const apiUrl = process.env.NEXT_PUBLIC_EPAY_API_URL

  if (!apiKey || !apiUrl) {
    return {
      success: false,
      error: 'Payment gateway configuration missing',
    }
  }

  try {
    console.log('Calling TAMAYYUZ API:', `${apiUrl}/gateway/epay/`)
    console.log('With headers:', {
      'Content-Type': 'application/json',
      'X-Authorization': `${apiKey?.substring(0, 10)}...`,
      'Accept': 'application/json',
    })
    console.log('With body:', paymentData)
    
    const response = await fetch(`${apiUrl}/gateway/epay/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': apiKey,
        'Accept': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })

    console.log('TAMAYYUZ API Response status:', response.status)
    console.log('TAMAYYUZ API Response headers:', Object.fromEntries(response.headers.entries()))
    
    // Try to get the response text first
    const responseText = await response.text()
    console.log('TAMAYYUZ API Response text (first 500 chars):', responseText.substring(0, 500))

    if (!response.ok) {
      // Try to parse as JSON, but handle HTML responses
      let errorMessage = 'Payment initiation failed'
      try {
        const errorData = JSON.parse(responseText)
        errorMessage = errorData.detail || errorData.message || errorMessage
      } catch {
        // Response is not JSON (probably HTML error page)
        if (responseText.includes('<!DOCTYPE') || responseText.includes('<html')) {
          errorMessage = `API returned HTML error page (Status: ${response.status}). Check API credentials and endpoint.`
        } else {
          errorMessage = `API error (Status: ${response.status}): ${responseText.substring(0, 200)}`
        }
      }
      
      return {
        success: false,
        error: errorMessage,
      }
    }

    // Parse successful response
    const data = JSON.parse(responseText)
    
    return {
      success: true,
      payment_url: data.checkout_url, // API returns 'checkout_url'
      invoice_id: paymentData.invoice_id,
    }
  } catch (error) {
    console.error('Payment initiation error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error occurred',
    }
  }
}

/**
 * Check payment status
 * @param invoiceId - Invoice ID to check
 * @param language - Language for response (ar, fr, en)
 * @returns Payment status information
 */
export async function checkPaymentStatus(
  invoiceId: string,
  language: string = 'fr'
): Promise<any> {
  const apiKey = process.env.NEXT_PUBLIC_EPAY_API_KEY
  const apiUrl = process.env.NEXT_PUBLIC_EPAY_API_URL

  if (!apiKey || !apiUrl) {
    throw new Error('Payment gateway configuration missing')
  }

  try {
    const url = new URL(`${apiUrl}/gateway/status/details/`)
    url.searchParams.append('invoice_id', invoiceId)
    url.searchParams.append('language', language)
    
    console.log('Checking payment status:', url.toString())
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-Authorization': apiKey,
        'Accept': 'application/json',
      },
    })

    console.log('Status check response:', response.status, response.statusText)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Status check failed:', errorText)
      throw new Error(`Failed to check payment status: ${errorText}`)
    }

    const data = await response.json()
    console.log('Status check data:', data)
    
    return data
  } catch (error) {
    console.error('Status check error:', error)
    throw error
  }
}

