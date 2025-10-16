'use client'

import { trackMetaEvent } from '@/lib/metaPixel'

export const ContactInfo = (): JSX.Element => {
  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213797339451'
    const message =
      'Bonjour! Je souhaite discuter de mon projet de site web.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    trackMetaEvent('Contact', { source: 'contact_whatsapp' })
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    trackMetaEvent('Contact', { source: 'contact_phone' })
    window.open('tel:+213797339451', '_self')
  }

  const handleEmailClick = (): void => {
    trackMetaEvent('Contact', { source: 'contact_email' })
    window.open('mailto:autonomy.owner@gmail.com', '_self')
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Coordonnees
        </p>
        <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
          Discutons de votre projet web
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous sommes disponibles pour discuter de votre projet, definir un
          devis personnalise et planifier les prochaines etapes.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
        <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          WhatsApp
        </h3>
        <p className="mt-2 text-lg font-semibold text-neutral-900">
          +213 797 339 451
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Reponse rapide et partage de maquettes.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 underline underline-offset-4"
          type="button"
        >
          Ouvrir WhatsApp
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Telephone
          </h3>
          <p className="mt-2 text-lg font-semibold text-neutral-900">
            +213 797 339 451
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Pour un briefing rapide ou un suivi de projet.
          </p>
          <button
            onClick={handlePhoneClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 underline underline-offset-4"
            type="button"
          >
            Appeler
          </button>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-white/85 px-6 py-8 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Email
          </h3>
          <p className="mt-2 text-lg font-semibold text-neutral-900">
            autonomy.owner@gmail.com
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Pour partager vos idees et documents.
          </p>
          <button
            onClick={handleEmailClick}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 underline underline-offset-4"
            type="button"
          >
            Ecrire un message
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-8 text-sm uppercase tracking-[0.3em] text-neutral-500 shadow-sm">
        Disponible 7j/7 - Support technique et assistance
      </div>
    </div>
  )
}
