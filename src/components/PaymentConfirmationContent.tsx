'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { verifySignature } from '@/lib/epay'
import { trackMetaEvent } from '@/lib/metaPixel'
import Image from 'next/image'

interface PaymentDetails {
  invoice_id: string
  satim_order_id: string
  tamayyuz_epay_id?: number
  epay_amount: string
  approval_code: string
  date: string
  status: string
  description: string
  cardholder_name?: string
  satim_description?: string
  refunded?: boolean
  refund_amount?: string | null
  return_url?: string
  fail_url?: string
}

export const PaymentConfirmationContent = (): JSX.Element => {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchPaymentStatus = useCallback(async (invoiceId: string, hash: string) => {
    try {
      console.log('Fetching payment status for invoice:', invoiceId)
      
      // Call our backend API to verify payment status with hash validation
      const response = await fetch('/api/payment/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoice_id: invoiceId,
          hash: hash,
        }),
      })
      
      const data = await response.json()
      
      console.log('Payment status response:', data)
      
      if (!response.ok || !data.success) {
        // Check if it's a security validation error
        if (data.error && data.error.includes('signature')) {
          throw new Error('Acces non autorise - verification de securite echouee')
        }
        throw new Error(data.error || 'Failed to verify payment')
      }
      
      const paymentData = data.payment_details
      
      // Set the real payment details from TAMAYYUZ API
      setPaymentDetails({
        invoice_id: paymentData.invoice_id || invoiceId,
        satim_order_id: paymentData.satim_order_id || 'N/A',
        tamayyuz_epay_id: paymentData.tamayyuz_epay_id,
        epay_amount: paymentData.epay_amount || paymentData.total || '0',
        approval_code: paymentData.approval_code || 'N/A',
        date: paymentData.date || new Date().toISOString(),
        status: paymentData.status || 'U',
        description: paymentData.description || 'Payment processed',
        cardholder_name: paymentData.cardholder_name,
        satim_description: paymentData.satim_description || paymentData.description,
        refunded: paymentData.refunded || false,
        refund_amount: paymentData.refund_amount,
        return_url: paymentData.return_url,
        fail_url: paymentData.fail_url,
      })
      
      // Track successful purchase with real amount
      if (paymentData.status === 'S') {
        const amount = parseFloat(paymentData.epay_amount || paymentData.total || '0')
        trackMetaEvent('Purchase', {
          value: amount,
          currency: 'DZD',
          content_name: searchParams.get('plan') || 'Website Package',
          transaction_id: invoiceId,
        })
      }
      
      setIsLoading(false)
    } catch (err) {
      console.error('Error fetching payment status:', err)
      setError(err instanceof Error ? err.message : 'Erreur lors de la verification du paiement')
      setIsLoading(false)
    }
  }, [searchParams])

  useEffect(() => {
    const invoiceId = searchParams.get('id')
    const hash = searchParams.get('hash')
    
    if (!invoiceId) {
      setError('ID de facture manquant')
      setIsLoading(false)
      return
    }
    
    // Verify hash is provided for security
    if (!hash) {
      setError('Acces non autorise - parametre de securite manquant')
      setIsLoading(false)
      return
    }
    
    // Fetch payment status with hash validation
    fetchPaymentStatus(invoiceId, hash)
  }, [searchParams, fetchPaymentStatus])

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = async () => {
    if (!paymentDetails) return
    
    try {
      // Use browser's built-in PDF generation
      const printWindow = window.open('', '_blank')
      if (!printWindow) {
        alert('Veuillez autoriser les pop-ups pour telecharger le PDF')
        return
      }
      
      // Create a clean receipt HTML for PDF
      const receiptHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Recu de paiement - ${paymentDetails.invoice_id}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              padding: 40px; 
              max-width: 800px; 
              margin: 0 auto;
              color: #1a1a1a;
            }
            .header { 
              border-bottom: 3px solid #f59e0b; 
              padding-bottom: 20px; 
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: start;
            }
            .company { font-size: 28px; font-weight: bold; color: #1a1a1a; }
            .company-tagline { font-size: 14px; color: #666; margin-top: 5px; }
            .status-success { 
              background: #d1fae5; 
              color: #065f46; 
              padding: 15px; 
              border-radius: 8px; 
              text-align: center;
              font-weight: bold;
              margin-bottom: 30px;
            }
            .status-failed { 
              background: #fee2e2; 
              color: #991b1b; 
              padding: 15px; 
              border-radius: 8px; 
              text-align: center;
              font-weight: bold;
              margin-bottom: 30px;
            }
            .details { 
              background: #f9fafb; 
              padding: 20px; 
              border-radius: 8px;
              margin-bottom: 30px;
            }
            .detail-row { 
              display: flex; 
              justify-content: space-between; 
              padding: 12px 0; 
              border-bottom: 1px solid #e5e7eb;
            }
            .detail-row:last-child { border-bottom: none; }
            .detail-label { color: #6b7280; font-size: 14px; }
            .detail-value { font-weight: bold; color: #1a1a1a; }
            .footer { 
              text-align: center; 
              color: #6b7280; 
              font-size: 12px; 
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
            }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="company">SiteDZ</div>
              <div class="company-tagline">Creation de sites web professionnels</div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 14px; font-weight: 600;">Recu de transaction</div>
              <div style="font-size: 12px; color: #666; margin-top: 4px;">TAMAYYUZ ePay</div>
            </div>
          </div>
          
          <div class="${paymentDetails.status === 'S' ? 'status-success' : 'status-failed'}">
            ${paymentDetails.status === 'S' ? '✓ Paiement reussi' : '✗ Paiement echoue'}
          </div>
          
          <div class="details">
            <div class="detail-row">
              <span class="detail-label">ID Facture</span>
              <span class="detail-value">${paymentDetails.invoice_id}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">ID Transaction SATIM</span>
              <span class="detail-value">${paymentDetails.satim_order_id}</span>
            </div>
            ${paymentDetails.tamayyuz_epay_id ? `
            <div class="detail-row">
              <span class="detail-label">ID Tamayyuz ePay</span>
              <span class="detail-value">${paymentDetails.tamayyuz_epay_id}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Numero d'Autorisation</span>
              <span class="detail-value">${paymentDetails.approval_code}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date</span>
              <span class="detail-value">${new Date(paymentDetails.date).toLocaleString('fr-DZ', { dateStyle: 'long', timeStyle: 'short' })}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Montant</span>
              <span class="detail-value" style="font-size: 18px; color: #f59e0b;">
                ${Number.parseFloat(paymentDetails.epay_amount || '0').toLocaleString('fr-DZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DZD
              </span>
            </div>
          </div>
          
          <div class="footer">
            <p>Ce recu a ete genere electroniquement par SiteDZ</p>
            <p>Pour toute question, contactez-nous au +213 797 339 451</p>
            <p style="margin-top: 10px;">© ${new Date().getFullYear()} SiteDZ - Tous droits reserves</p>
          </div>
        </body>
        </html>
      `
      
      printWindow.document.write(receiptHTML)
      printWindow.document.close()
      
      // Wait for content to load, then trigger print dialog
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print()
        }, 250)
      }
    } catch (err) {
      console.error('PDF generation error:', err)
      alert('Erreur lors de la generation du PDF')
    }
  }

  const handleSendEmail = async () => {
    if (!paymentDetails) return
    
    try {
      // Call email API endpoint
      const response = await fetch('/api/payment/send-receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoice_id: paymentDetails.invoice_id,
          email: searchParams.get('email'), // Get email from URL params if available
        }),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        alert('Le recu a ete envoye a votre adresse email')
      } else {
        alert('Erreur lors de l\'envoi de l\'email. Veuillez reessayer.')
      }
    } catch (err) {
      console.error('Email send error:', err)
      alert('Erreur lors de l\'envoi de l\'email. Veuillez utiliser l\'option d\'impression.')
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-amber-600" />
          <p className="mt-4 text-sm text-neutral-600">
            Verification du paiement en cours...
          </p>
        </div>
      </div>
    )
  }

  if (error || !paymentDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <span className="text-3xl">✗</span>
          </div>
          <h1 className="mt-6 text-2xl font-semibold text-neutral-900">
            Erreur de verification
          </h1>
          <p className="mt-4 text-sm text-neutral-600">{error}</p>
          <button
            onClick={() => router.push('/pricing')}
            className="mt-6 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-neutral-700"
          >
            Retour aux offres
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          /* Hide all layout elements */
          header, nav, footer, .navbar, .footer, .header {
            display: none !important;
          }
          
          /* Hide website branding and navigation */
          .site-header, .site-footer, .main-nav, .top-bar {
            display: none !important;
          }
          
          /* Hide page title and metadata */
          title, meta, .page-title, .breadcrumb {
            display: none !important;
          }
          
          /* Reset body and html */
          html, body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 12px !important;
            overflow: visible !important;
          }
          
          /* Hide all elements except our receipt */
          body > *:not(.receipt-container) {
            display: none !important;
          }
          
          .receipt-container {
            display: block !important;
            background: white !important;
            margin: 0 !important;
            padding: 15px !important;
            width: 100% !important;
            max-width: none !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          .print-only {
            display: block !important;
          }
          
          .relative {
            background: white !important;
            padding: 0 !important;
          }
          
          section {
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .rounded-3xl {
            border-radius: 0 !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 15px !important;
          }
          
          .bg-white\/95 {
            background: white !important;
          }
          
          .border {
            border: 1px solid #e5e7eb !important;
          }
          
          .shadow-lg {
            box-shadow: none !important;
          }
          
          .mb-6 {
            margin-bottom: 12px !important;
          }
          
          .mt-6 {
            margin-top: 12px !important;
          }
          
          .mt-8 {
            margin-top: 16px !important;
          }
          
          .p-5 {
            padding: 12px !important;
          }
          
          .p-3 {
            padding: 8px !important;
          }
          
          .text-2xl {
            font-size: 18px !important;
          }
          
          .text-lg {
            font-size: 14px !important;
          }
          
          .text-sm {
            font-size: 11px !important;
          }
          
          .text-xs {
            font-size: 10px !important;
          }
          
          .gap-4 {
            gap: 8px !important;
          }
          
          .space-y-2 > * + * {
            margin-top: 4px !important;
          }
          
          .space-y-3 > * + * {
            margin-top: 6px !important;
          }
          
          .space-y-4 > * + * {
            margin-top: 8px !important;
          }
          
          .h-12 {
            height: 24px !important;
          }
          
          .w-12 {
            width: 24px !important;
          }
          
          .rounded-2xl {
            border-radius: 4px !important;
          }
          
          .rounded-lg {
            border-radius: 2px !important;
          }
          
          .grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          
          @page {
            margin: 0.5in !important;
            size: A4 !important;
          }
        }
        
        .print-only {
          display: none;
        }
      `}</style>
      <div className="relative isolate min-h-screen bg-white/90 py-12">
        <div className="absolute inset-0 -z-10 opacity-70 no-print">
          <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.12),_transparent_70%)]" />
        </div>

        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="receipt-container rounded-3xl border border-neutral-200 bg-white/95 p-8 shadow-lg sm:p-10">
          {/* Receipt header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-2xl font-bold text-neutral-900">SiteDZ</div>
              <div className="mt-1 text-sm text-neutral-600">Creation de sites web professionnels</div>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-neutral-800">Recu de transaction</div>
              <div className="mt-1 text-xs text-neutral-500">TAMAYYUZ ePay</div>
            </div>
          </div>

          {/* Status banner */}
          <div className={`mb-6 rounded-2xl p-4 text-center ${paymentDetails.status === 'S' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className={`text-lg font-semibold ${paymentDetails.status === 'S' ? 'text-green-800' : 'text-red-800'}`}>
              {paymentDetails.status === 'S'
                ? '✓ Paiement reussi'
                : '✗ Paiement echoue'}
            </div>
            <div className={`mt-1 text-sm ${paymentDetails.status === 'S' ? 'text-green-700' : 'text-red-700'}`}>
              {paymentDetails.status === 'S'
                ? 'Votre paiement a ete traite avec succes'
                : paymentDetails.satim_description || 'Votre transaction a ete rejetee'}
            </div>
          </div>

          {/* Details grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
              <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-neutral-500">ID</div>
              <div className="font-mono text-sm font-semibold text-neutral-900">{paymentDetails.invoice_id}</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
              <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-neutral-500">ID de transaction</div>
              <div className="font-mono text-sm font-semibold text-neutral-900">{paymentDetails.satim_order_id}</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
              <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-neutral-500">ID Tamayyuz Epay</div>
              <div className="font-mono text-sm font-semibold text-neutral-900">{paymentDetails.tamayyuz_epay_id ?? 'N/A'}</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
              <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-neutral-500">Numéro d&apos;Autorisation</div>
              <div className="font-mono text-sm font-semibold text-neutral-900">{paymentDetails.approval_code}</div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
              <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-neutral-500">Date</div>
              <div className="text-sm font-semibold text-neutral-900">
                {new Date(paymentDetails.date).toLocaleString('fr-DZ', { dateStyle: 'long', timeStyle: 'short' })}
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
              <div className="text-[12px] font-medium uppercase tracking-[0.25em] text-neutral-500">Montant</div>
              <div className="text-lg font-semibold text-neutral-900">
                {Number.parseFloat(paymentDetails.epay_amount || '0').toLocaleString('fr-DZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DZD
              </div>
            </div>
          </div>

          {/* Support box */}
          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/satim3020.png"
                  alt="SATIM 3020"
                  width={80}
                  height={60}
                  className="h-12 w-auto"
                  priority={false}
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-blue-900 mb-1">
                  Support paiement SATIM
                </div>
                <div className="text-sm leading-relaxed text-blue-800">
                  En cas de probleme de paiement, contactez le numero vert SATIM:{' '}
                  <span className="font-bold text-blue-900">3020</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3 no-print">
            <button
              onClick={handleDownloadPDF}
              className="w-full rounded-full border border-neutral-900 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Telecharger en PDF
            </button>
          </div>

          {paymentDetails.status === 'S' && (
            <div className="mt-8 space-y-4 rounded-2xl border border-green-200 bg-green-50 p-6 no-print">
              <h2 className="text-lg font-semibold text-green-900">
                Prochaines etapes
              </h2>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>
                    Vous recevrez un email de confirmation avec tous les details de
                    votre commande
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>
                    Notre equipe vous contactera sous 24h pour demarrer votre projet
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>
                    Vous pouvez nous contacter sur WhatsApp au +213 797 339 451 pour
                    toute question
                  </span>
                </li>
              </ul>
            </div>
          )}

          <div className="mt-8 text-center no-print">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              ← Retour à l&apos;accueil
            </button>
          </div>

          <div className="print-only mt-8 text-center text-xs text-neutral-600">
            <p>Recu genere le {new Date().toLocaleString('fr-DZ', { dateStyle: 'long', timeStyle: 'short' })}</p>
            <p className="mt-2">Pour toute question: +213 797 339 451 | contact@sitedz.com</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

