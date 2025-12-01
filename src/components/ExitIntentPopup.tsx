'use client'

import { useState, useEffect, useCallback } from 'react'
import { trackMetaEvent } from '@/lib/metaPixel'

const phoneNumber = '213797339451'

export const ExitIntentPopup = (): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [hasShown, setHasShown] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Trigger when mouse moves to top of viewport (exit intent)
    if (e.clientY <= 5 && !hasShown) {
      // Check if user has seen this popup before (stored in localStorage)
      const lastSeen = localStorage.getItem('exitPopupLastSeen')
      const now = Date.now()

      // Show popup only once per 24 hours
      if (!lastSeen || now - parseInt(lastSeen) > 24 * 60 * 60 * 1000) {
        setIsVisible(true)
        setHasShown(true)
        localStorage.setItem('exitPopupLastSeen', now.toString())
        trackMetaEvent('ViewContent', {
          content_name: 'exit_intent_popup',
          content_category: 'lead_capture'
        })
      }
    }
  }, [hasShown])

  useEffect(() => {
    // Add delay before enabling exit intent (don't trigger immediately)
    const enableTimeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000) // 5 second delay

    return () => {
      clearTimeout(enableTimeout)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseLeave])

  const handleClose = (): void => {
    setIsVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track lead event
    trackMetaEvent('Lead', {
      source: 'exit_intent_popup',
      content_name: 'email_capture',
    })

    // Simulate API call (in production, connect to your email service)
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSuccess(true)
    setIsSubmitting(false)

    // Open WhatsApp with personalized message after 2 seconds
    setTimeout(() => {
      const message = `Bonjour! J'ai laisse mon email (${email}) pour recevoir votre offre speciale. Je suis interesse par vos services de creation de sites web.`
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      setIsVisible(false)
    }, 2000)
  }

  const handleWhatsAppDirect = (): void => {
    trackMetaEvent('Contact', { source: 'exit_intent_whatsapp' })
    const message = 'Bonjour! Je suis interesse par votre offre speciale de -30%. Pouvez-vous me donner plus de details?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg animate-fade-in-scale rounded-3xl bg-[#1a1a1a] p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
          aria-label="Fermer"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <>
            {/* Urgency Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="text-xs font-medium text-amber-400">Offre Exclusive - Ne Partez Pas!</span>
            </div>

            {/* Content */}
            <h2 className="font-elegant text-3xl font-semibold text-white">
              Attendez! <span className="text-[#c9a962]">-30%</span> sur votre premier projet
            </h2>
            <p className="mt-4 text-white/60">
              Ne manquez pas cette opportunite unique. Recevez un devis gratuit personnalise
              et beneficiez de notre offre speciale de lancement.
            </p>

            {/* Benefits */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg className="h-3.5 w-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-white/80">Devis gratuit en moins de 2 heures</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg className="h-3.5 w-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-white/80">Livraison prioritaire en 72h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg className="h-3.5 w-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-white/80">Garantie satisfaction 100%</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email professionnel"
                  required
                  className="flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-[#c9a962]/50 focus:bg-white/10"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium rounded-full bg-[#c9a962] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition-all hover:bg-[#d4b673] disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi...' : 'Recevoir'}
                </button>
              </div>
            </form>

            {/* Alternative CTA */}
            <div className="mt-6 text-center">
              <p className="mb-3 text-xs text-white/40">Ou contactez-nous directement</p>
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500/20"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Discuter sur WhatsApp
              </button>
            </div>

            {/* Trust */}
            <p className="mt-6 text-center text-xs text-white/30">
              Vos donnees sont protegees. Pas de spam, promis.
            </p>
          </>
        ) : (
          /* Success State */
          <div className="py-8 text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
              <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-elegant text-2xl font-semibold text-white">Merci!</h3>
            <p className="mt-3 text-white/60">
              Vous allez etre redirige vers WhatsApp pour finaliser votre demande de devis gratuit.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#c9a962]">
              <svg className="h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Redirection en cours...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
