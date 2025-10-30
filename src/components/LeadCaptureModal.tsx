'use client'

import { useState, FormEvent, useEffect } from 'react'
import { trackMetaEvent } from '@/lib/metaPixel'

const phoneNumber = '213797339451'

const businessTypes = [
  'Restaurant ou Café',
  'Boutique de vêtements',
  'Services professionnels',
  'E-commerce / Vente en ligne',
  'Immobilier',
  'Santé et bien-être',
  'Éducation et formation',
  'Autre',
]

type LeadCaptureModalProps = {
  isOpen: boolean
  onClose: () => void
  planName: string
  planPrice: string
}

export const LeadCaptureModal = ({
  isOpen,
  onClose,
  planName,
  planPrice,
}: LeadCaptureModalProps): JSX.Element => {
  const [clientName, setClientName] = useState<string>('')
  const [clientPhone, setClientPhone] = useState<string>('')
  const [businessType, setBusinessType] = useState<string>('')
  const [customBusinessType, setCustomBusinessType] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleReset = (): void => {
    setClientName('')
    setClientPhone('')
    setBusinessType('')
    setCustomBusinessType('')
    setError('')
    setIsSubmitting(false)
  }

  const handleClose = (): void => {
    if (!isSubmitting) {
      handleReset()
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault()
    setError('')

    if (!clientName.trim()) {
      setError('Veuillez entrer votre nom')
      return
    }

    if (!clientPhone.trim()) {
      setError('Veuillez entrer votre numéro de téléphone')
      return
    }

    if (!businessType) {
      setError('Veuillez sélectionner le type de votre activité')
      return
    }

    if (businessType === 'Autre' && !customBusinessType.trim()) {
      setError('Veuillez préciser le type de votre activité')
      return
    }

    setIsSubmitting(true)

    const finalBusinessType = businessType === 'Autre' ? customBusinessType : businessType

    trackMetaEvent('Lead', {
      source: 'lead_capture_modal',
      content_name: planName,
      content_category: businessType,
    })

    const message = `Bonjour SiteDZ Store! 👋

Je souhaite commander: ${planName}
Prix: ${planPrice}

Mes informations:
📝 Nom: ${clientName}
📞 Téléphone: ${clientPhone}
🏢 Type d'activité: ${finalBusinessType}

Je suis prêt(e) à discuter des détails et procéder au paiement.`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')

    setTimeout(() => {
      handleClose()
    }, 500)
  }

  if (!isOpen) return <></>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-8 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          type="button"
          aria-label="Fermer"
          disabled={isSubmitting}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-elegant font-semibold text-neutral-900">
              Commander maintenant
            </h2>
            <p className="text-sm text-neutral-600">
              Remplissez vos informations et nous vous contacterons sur WhatsApp pour finaliser votre commande.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
              Votre offre sélectionnée
            </p>
            <p className="mt-2 text-lg font-semibold text-neutral-900">
              {planName}
            </p>
            <p className="text-sm text-neutral-600">
              {planPrice}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="client-name" className="mb-2 block text-sm font-semibold text-neutral-900">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="Votre nom"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <label htmlFor="client-phone" className="mb-2 block text-sm font-semibold text-neutral-900">
                Numéro de téléphone <span className="text-red-500">*</span>
              </label>
              <input
                id="client-phone"
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                placeholder="+213 XXX XX XX XX"
                disabled={isSubmitting}
                required
              />
              <p className="mt-1 text-xs text-neutral-500">
                Format international recommandé: +213 XXX XX XX XX
              </p>
            </div>

            <div>
              <label htmlFor="business-type" className="mb-2 block text-sm font-semibold text-neutral-900">
                Type d&apos;activité <span className="text-red-500">*</span>
              </label>
              <select
                id="business-type"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                disabled={isSubmitting}
                required
              >
                <option value="">Sélectionnez votre type d&apos;activité</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              {businessType === 'Autre' && (
                <input
                  type="text"
                  value={customBusinessType}
                  onChange={(e) => setCustomBusinessType(e.target.value)}
                  className="mt-3 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/20"
                  placeholder="Précisez votre type d&apos;activité"
                  disabled={isSubmitting}
                />
              )}
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-amber-500 disabled:bg-neutral-300 disabled:text-neutral-500"
            >
              {isSubmitting ? 'Redirection...' : 'Ouvrir WhatsApp'}
            </button>

            <p className="text-center text-xs text-neutral-500">
              En cliquant, vous serez redirigé vers WhatsApp pour finaliser votre commande
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

