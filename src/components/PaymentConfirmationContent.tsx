'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { verifySignature } from '@/lib/epay'
import { trackMetaEvent } from '@/lib/metaPixel'

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

  useEffect(() => {
    const invoiceId = searchParams.get('id')
    const hash = searchParams.get('hash')
    
    if (!invoiceId) {
      setError('ID de facture manquant')
      setIsLoading(false)
      return
    }
    
    // In production, verify the hash
    // For now, we'll fetch payment status
    fetchPaymentStatus(invoiceId)
  }, [searchParams])

  const fetchPaymentStatus = async (invoiceId: string) => {
    try {
      const hash = searchParams.get('hash')
      
      console.log('Fetching payment status for invoice:', invoiceId)
      
      // Call our backend API to verify payment status
      const response = await fetch('/api/payment/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoice_id: invoiceId,
          hash: hash || undefined,
        }),
      })
      
      const data = await response.json()
      
      console.log('Payment status response:', data)
      
      if (!response.ok || !data.success) {
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
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // In production, you would generate a proper PDF
    alert('Fonctionnalite de telechargement PDF en cours de developpement')
  }

  const handleSendEmail = () => {
    // In production, you would send via email
    alert('Le recu sera envoye a votre adresse email sous peu')
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
    <div className="relative isolate min-h-screen bg-white/90 py-12">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.12),_transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white/95 p-8 shadow-lg sm:p-12">
          {/* Company Logo/Header */}
          <div className="mb-8 text-center border-b border-neutral-200 pb-6">
            <h2 className="text-2xl font-elegant font-bold text-neutral-900">
              SiteDZ Store
            </h2>
            <p className="mt-1 text-sm text-neutral-600">
              Votre partenaire digital en Algérie
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <span className="text-4xl">✓</span>
            </div>
            <h1 className="mt-6 text-3xl font-elegant font-semibold text-neutral-900 sm:text-4xl">
              Paiement confirme !
            </h1>
            <p className="mt-4 text-sm text-neutral-600">
              Votre paiement a ete accepte avec succes
            </p>
          </div>

          <div className="mt-10 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Détails de la transaction ePay
            </h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  ID Facture
                </span>
                <span className="font-mono text-sm font-semibold text-neutral-900">
                  {paymentDetails.invoice_id}
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  ID Transaction
                </span>
                <span className="font-mono text-sm font-semibold text-neutral-900">
                  {paymentDetails.satim_order_id}
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  ID TAMAYYUZ ePay
                </span>
                <span className="font-mono text-sm font-semibold text-neutral-900">
                  {paymentDetails.tamayyuz_epay_id || 'N/A'}
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Montant ePay
                </span>
                <span className="text-lg font-semibold text-amber-600">
                  {paymentDetails.epay_amount} DZD
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Code d&apos;approbation
                </span>
                <span className="font-mono text-sm font-semibold text-neutral-900">
                  {paymentDetails.approval_code}
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Date
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  {new Date(paymentDetails.date).toLocaleString('fr-DZ', {
                    dateStyle: 'long',
                    timeStyle: 'short',
                  })}
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Statut
                </span>
                <span className="text-sm font-semibold text-green-600">
                  {paymentDetails.status === 'S' ? 'Succès' : paymentDetails.status}
                </span>
              </div>
              
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Titulaire carte
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  {paymentDetails.cardholder_name || 'N/A'}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="text-sm">
                <span className="font-medium text-neutral-700">Description SATIM:</span>
                <p className="mt-1 text-neutral-600">{paymentDetails.satim_description || paymentDetails.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={handlePrint}
              className="w-full rounded-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-neutral-700"
            >
              Imprimer le recu
            </button>
            
            <button
              onClick={handleDownloadPDF}
              className="w-full rounded-full border border-neutral-900 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Telecharger en PDF
            </button>
            
            <button
              onClick={handleSendEmail}
              className="w-full rounded-full border border-neutral-900 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Envoyer par email
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="h-12 w-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#1e40af" stroke="#1e40af" strokeWidth="2"/>
                  <path d="M35 55 L45 65 L65 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-blue-900">
                  En cas de probleme de paiement, veuillez contacter le numero vert{' '}
                  <a
                    href="tel:3020"
                    className="font-semibold underline hover:no-underline"
                  >
                    3020
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4 rounded-2xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-lg font-semibold text-green-900">
              Prochaines etapes
            </h2>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Vous recevrez un email de confirmation avec tous les details de
                  votre commande
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Notre equipe vous contactera sous 24h pour demarrer votre projet
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>
                  Vous pouvez nous contacter sur WhatsApp au +213 797 339 451 pour
                  toute question
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              ← Retour à l&apos;accueil
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

