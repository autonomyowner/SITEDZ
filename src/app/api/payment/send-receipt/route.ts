import { NextRequest, NextResponse } from 'next/server'
import { checkPaymentStatus } from '@/lib/epay'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { invoice_id, email } = body
    
    if (!invoice_id) {
      return NextResponse.json(
        { success: false, error: 'Missing invoice_id' },
        { status: 400 }
      )
    }
    
    console.log('Receipt email requested for invoice:', invoice_id, 'email:', email)
    
    // Get payment details
    const paymentDetails = await checkPaymentStatus(invoice_id, 'fr')
    
    if (!paymentDetails) {
      return NextResponse.json(
        { success: false, error: 'Payment not found' },
        { status: 404 }
      )
    }
    
    // TODO: Implement actual email sending
    // You can use services like:
    // - Resend (resend.com) - Simple and modern
    // - SendGrid
    // - Amazon SES
    // - Nodemailer with SMTP
    
    // Example with Resend (you would need to install it):
    // const { Resend } = require('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // 
    // const emailHTML = generateReceiptHTML(paymentDetails)
    // 
    // await resend.emails.send({
    //   from: 'SiteDZ <noreply@sitedz.com>',
    //   to: email || paymentDetails.client_email,
    //   subject: `Recu de paiement - ${invoice_id}`,
    //   html: emailHTML,
    // })
    
    console.log('Email would be sent to:', email || 'client email')
    console.log('Payment details:', paymentDetails)
    
    // For now, return success (you need to implement actual email sending)
    return NextResponse.json({
      success: true,
      message: 'Email will be sent when email service is configured',
    })
  } catch (error) {
    console.error('Send receipt error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send receipt' 
      },
      { status: 500 }
    )
  }
}

// Helper function to generate receipt HTML for email
function generateReceiptHTML(paymentDetails: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Recu de paiement</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f7fafc;
        }
        .container {
          background: white;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #f59e0b;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .company-name {
          font-size: 28px;
          font-weight: bold;
          color: #1a1a1a;
        }
        .status-success {
          background: #d1fae5;
          color: #065f46;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          font-weight: bold;
          margin: 20px 0;
        }
        .details {
          background: #f9fafb;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          color: #6b7280;
        }
        .detail-value {
          font-weight: bold;
          color: #1a1a1a;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="company-name">SiteDZ</div>
          <div style="color: #666; font-size: 14px; margin-top: 5px;">
            Creation de sites web professionnels
          </div>
        </div>
        
        <div class="status-success">
          ✓ Paiement reussi
        </div>
        
        <p>Bonjour,</p>
        <p>Votre paiement a ete traite avec succes. Voici les details de votre transaction:</p>
        
        <div class="details">
          <div class="detail-row">
            <span class="detail-label">ID Facture</span>
            <span class="detail-value">${paymentDetails.invoice_id}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">ID Transaction SATIM</span>
            <span class="detail-value">${paymentDetails.satim_order_id || 'N/A'}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Montant</span>
            <span class="detail-value" style="color: #f59e0b; font-size: 18px;">
              ${Number.parseFloat(paymentDetails.epay_amount || paymentDetails.total || '0').toLocaleString('fr-DZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DZD
            </span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Date</span>
            <span class="detail-value">${new Date(paymentDetails.date).toLocaleString('fr-DZ', { dateStyle: 'long', timeStyle: 'short' })}</span>
          </div>
        </div>
        
        <p>Notre equipe vous contactera sous 24h pour demarrer votre projet.</p>
        
        <div class="footer">
          <p><strong>SiteDZ</strong></p>
          <p>+213 797 339 451 | contact@sitedz.com</p>
          <p style="margin-top: 15px; color: #9ca3af; font-size: 12px;">
            © ${new Date().getFullYear()} SiteDZ - Tous droits reserves
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

