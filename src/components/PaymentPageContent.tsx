'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { trackMetaEvent } from '@/lib/metaPixel'

export const PaymentPageContent = (): JSX.Element => {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [planName, setPlanName] = useState('')
  const [amount, setAmount] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Get parameters from URL
    const plan = searchParams.get('plan') || ''
    const price = searchParams.get('amount') || ''
    
    console.log('Payment page loaded with params:', { plan, price })
    
    setPlanName(plan)
    setAmount(price)
    
    if (!plan || !price) {
      console.error('Missing plan or amount in URL')
      router.push('/pricing')
    }
  }, [searchParams, router])

  const handleSimpleCaptcha = () => {
    const answer = prompt('Combien font 5 + 3 ?')
    if (answer === '8') {
      setCaptchaVerified(true)
    } else {
      alert('Reponse incorrecte. Veuillez reessayer.')
      setCaptchaVerified(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!acceptTerms) {
      setError('Veuillez accepter les conditions generales de paiement en ligne')
      return
    }
    
    if (!captchaVerified) {
      setError('Veuillez verifier le captcha')
      return
    }
    
    setIsProcessing(true)
    setError('')
    
    try {
      const amountNumber = parseFloat(amount)
      
      console.log('Submitting payment with:', {
        plan_name: planName,
        client_name: clientName,
        client_email: clientEmail,
        client_phone: clientPhone,
        amount: amountNumber,
      })
      
      if (isNaN(amountNumber)) {
        setError('Montant invalide')
        setIsProcessing(false)
        return
      }
      
      trackMetaEvent('InitiateCheckout', {
        value: amountNumber,
        currency: 'DZD',
        content_name: planName,
      })
      
      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan_name: planName,
          client_name: clientName,
          client_email: clientEmail,
          client_phone: clientPhone,
          amount: amountNumber,
        }),
      })
      
      const data = await response.json()
      
      console.log('Payment initiation response:', data)
      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      if (!response.ok || !data.success) {
        const errorMsg = data.error || 'Erreur lors de l\'initiation du paiement'
        console.error('Payment initiation failed:', errorMsg)
        setError(errorMsg)
        setIsProcessing(false)
        return
      }
      
      // Redirect to SATIM payment page
      console.log('Redirecting to payment URL:', data.payment_url)
      window.location.href = data.payment_url
    } catch (err) {
      console.error('Payment error:', err)
      setError(err instanceof Error ? err.message : 'Une erreur est survenue. Veuillez reessayer.')
      setIsProcessing(false)
    }
  }

  return (
    <div className="relative isolate min-h-screen bg-white/90">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.12),_transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-white/95 p-8 shadow-lg sm:p-12">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
              Paiement securise
            </p>
            <h1 className="mt-3 text-3xl font-elegant font-semibold text-neutral-900 sm:text-4xl">
              Finaliser votre commande
            </h1>
            <p className="mt-4 text-sm text-neutral-600">
              Paiement securise par SATIM - Cartes EDAHABIA et CIB acceptees
            </p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Offre selectionnee
              </p>
              <p className="mt-2 text-xl font-semibold text-neutral-900">
                {planName}
              </p>
            </div>
            <div className="h-12 w-px bg-neutral-300" />
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Montant total
              </p>
              <p className="mt-2 text-2xl font-semibold text-amber-600">
                {amount} DZD
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="clientName"
                className="block text-sm font-medium text-neutral-700"
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label
                htmlFor="clientEmail"
                className="block text-sm font-medium text-neutral-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="clientEmail"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                required
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="clientPhone"
                className="block text-sm font-medium text-neutral-700"
              >
                Telephone (optionnel)
              </label>
              <input
                type="tel"
                id="clientPhone"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="mt-2 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="+213 XXX XXX XXX"
              />
            </div>

            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <button
                type="button"
                onClick={handleSimpleCaptcha}
                className={`w-full rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                  captchaVerified
                    ? 'border-green-600 bg-green-50 text-green-700'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-amber-600'
                }`}
              >
                {captchaVerified ? 'Captcha verifie ✓' : 'Verifier le captcha'}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-neutral-300 text-amber-600 focus:ring-2 focus:ring-amber-600/20"
              />
              <label htmlFor="acceptTerms" className="text-sm text-neutral-600">
                J&apos;accepte les conditions generales de paiement en ligne et
                j&apos;autorise le traitement de mes informations de paiement de
                maniere securisee via SATIM
              </label>
            </div>

            <div className="flex items-center justify-center gap-4 py-4">
              <div className="text-sm text-neutral-500">Paiement securise par</div>
              <div className="flex items-center gap-3">
                {/* Real brand icons from public/cards */}
                <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 flex items-center">
                  <img
                    src="/unnamed.png"
                    alt="BaridiMob"
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </div>
                <span className="text-neutral-300">&</span>
                <div className="rounded-lg border border-neutral-200 bg-white px-3 py-2 flex items-center">
                  <img
                    src="/image.png"
                    alt="CIB"
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-semibold text-red-900">Erreur:</p>
                <p className="mt-1 text-sm text-red-700">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full rounded-full bg-amber-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isProcessing ? 'Redirection en cours...' : 'Proceder au paiement'}
            </button>

            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center text-xs text-blue-700">
              <p className="font-medium">Paiement 100% securise</p>
              <p className="mt-1">
                Vos informations sont protegees par le protocole SSL et traitees de
                maniere securisee par SATIM
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

