'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
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

export const PaymentFailedContent = (): JSX.Element => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const invoiceId = searchParams.get('id')
    
    if (invoiceId) {
      fetchPaymentStatus(invoiceId)
    } else {
      setIsLoading(false)
    }
  }, [searchParams])

  const fetchPaymentStatus = async (invoiceId: string) => {
    try {
      const response = await fetch('/api/payment/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoice_id: invoiceId,
        }),
      })
      
      const data = await response.json()
      
      if (response.ok && data.success) {
        const paymentData = data.payment_details
        setPaymentDetails({
          invoice_id: paymentData.invoice_id || invoiceId,
          satim_order_id: paymentData.satim_order_id || 'N/A',
          tamayyuz_epay_id: paymentData.tamayyuz_epay_id,
          epay_amount: paymentData.epay_amount || paymentData.total || '0',
          approval_code: paymentData.approval_code || 'N/A',
          date: paymentData.date || new Date().toISOString(),
          status: paymentData.status || 'F',
          description: paymentData.description || 'Payment failed',
          cardholder_name: paymentData.cardholder_name,
          satim_description: paymentData.satim_description || paymentData.description,
          refunded: paymentData.refunded || false,
          refund_amount: paymentData.refund_amount,
          return_url: paymentData.return_url,
          fail_url: paymentData.fail_url,
        })
      }
      
      setIsLoading(false)
    } catch (err) {
      console.error('Error fetching payment status:', err)
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    // Go back to pricing to start a new payment
    router.push('/pricing')
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-lightOrange-500">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-red-600" />
          <p className="mt-4 text-sm text-neutral-600">
            Chargement des details...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center bg-lightOrange-500/90 py-12">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.12),_transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-lightOrange-500/95 p-8 shadow-lg sm:p-12">
          {/* Company header */}
          <div className="mb-6 text-center border-b border-neutral-200 pb-6">
            <div className="text-2xl font-bold text-neutral-900">SiteDZ</div>
            <div className="mt-1 text-sm text-neutral-600">Creation de sites web professionnels</div>
          </div>

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <span className="text-4xl">✗</span>
          </div>
          
          <h1 className="mt-6 text-3xl font-elegant font-semibold text-red-600 sm:text-4xl text-center">
            Paiement echoue
          </h1>
          
          <p className="mt-4 text-base text-neutral-600 text-center">
            {paymentDetails?.satim_description || 'Votre paiement n\'a pas pu etre complete. Veuillez reessayer ou contacter notre support.'}
          </p>

          {paymentDetails && (
            <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-sm font-semibold text-neutral-900 mb-4">Details de la transaction</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">ID Facture:</span>
                  <span className="font-mono font-semibold text-neutral-900">{paymentDetails.invoice_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">ID Transaction SATIM:</span>
                  <span className="font-mono font-semibold text-neutral-900">{paymentDetails.satim_order_id}</span>
                </div>
                {paymentDetails.tamayyuz_epay_id && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600">ID Tamayyuz ePay:</span>
                    <span className="font-mono font-semibold text-neutral-900">{paymentDetails.tamayyuz_epay_id}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-600">Montant:</span>
                  <span className="font-semibold text-neutral-900">
                    {Number.parseFloat(paymentDetails.epay_amount || '0').toLocaleString('fr-DZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} DZD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Date:</span>
                  <span className="font-semibold text-neutral-900">
                    {new Date(paymentDetails.date).toLocaleString('fr-DZ', { dateStyle: 'medium', timeStyle: 'short' })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Statut:</span>
                  <span className="font-semibold text-red-600">Echec</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-left">
            <h2 className="text-lg font-semibold text-neutral-900">
              Raisons possibles :
            </h2>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Solde de carte insuffisant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Informations de carte incorrectes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Carte expiree ou bloquee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Probleme de connexion reseau</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
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
              <div className="flex-1 text-left">
                <p className="text-sm leading-relaxed text-blue-900">
                  En cas de problème de paiement, veuillez contacter le service client de SATIM au <span className="font-semibold">3020</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={handleRetry}
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-amber-500"
            >
              Nouvelle tentative
            </button>
            
            <a
              href="https://wa.me/213797339451?text=Bonjour!%20J%27ai%20eu%20un%20probleme%20avec%20mon%20paiement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-lightOrange-500 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors duration-200 hover:bg-lightOrange-400"
            >
              Contacter le support
            </a>
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

