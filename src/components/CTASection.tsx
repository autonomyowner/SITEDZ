'use client'

import { useState, useEffect } from 'react'
import { trackMetaEvent } from '@/lib/metaPixel'

export const CTASection = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 } // Reset
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleWhatsAppClick = (): void => {
    const phoneNumber = '+213797339451'
    const message =
      'Bonjour! Je souhaite profiter de votre offre speciale et obtenir un devis gratuit pour mon projet de site web.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    trackMetaEvent('Contact', { source: 'cta_whatsapp' })
    window.open(whatsappUrl, '_blank')
  }

  const handlePhoneClick = (): void => {
    trackMetaEvent('Contact', { source: 'cta_phone' })
    window.open('tel:+213797339451', '_self')
  }

  const handleEmailClick = (): void => {
    trackMetaEvent('Contact', { source: 'cta_email' })
    window.open('mailto:autonomy.owner@gmail.com', '_self')
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#1a1a1a] px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(201,169,98,0.15),_transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Main CTA Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-sm sm:p-16">
          {/* Urgency Timer */}
          <div className="mb-8 inline-flex items-center gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-6 py-4">
            <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="flex items-center gap-2">
              <span className="text-sm text-amber-200">Offre expire dans:</span>
              <div className="flex gap-1 font-mono text-lg font-bold text-amber-400">
                <span className="rounded bg-amber-500/20 px-2 py-1">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-amber-200">:</span>
                <span className="rounded bg-amber-500/20 px-2 py-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-amber-200">:</span>
                <span className="rounded bg-amber-500/20 px-2 py-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">
            Offre speciale limitee
          </p>
          <h2 className="mt-4 font-elegant text-4xl font-semibold text-white sm:text-5xl">
            Lancez votre site web aujourd hui
            <span className="block text-[#c9a962]">et economisez 30%</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Profitez de notre offre de lancement: site web professionnel livre en 72h,
            hebergement inclus, et garantie satisfaction 100%.
          </p>

          {/* Value Stack */}
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-elegant text-3xl font-bold text-emerald-400">72h</p>
              <p className="mt-1 text-sm text-white/60">Livraison express</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-elegant text-3xl font-bold text-[#c9a962]">-30%</p>
              <p className="mt-1 text-sm text-white/60">Reduction speciale</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-elegant text-3xl font-bold text-blue-400">100%</p>
              <p className="mt-1 text-sm text-white/60">Satisfaction garantie</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="mt-10">
            <button
              onClick={handleWhatsAppClick}
              className="btn-premium group inline-flex items-center gap-3 rounded-full bg-[#c9a962] px-10 py-5 text-base font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-[#d4b673] hover:shadow-xl hover:shadow-[#c9a962]/30"
              type="button"
            >
              <span>Obtenir mon devis gratuit</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="mt-4 text-sm text-white/40">Reponse garantie en moins de 2 heures</p>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 text-sm text-white/50">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Paiement securise</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Remboursement garanti</span>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <button
            onClick={handleWhatsAppClick}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#c9a962]/30 hover:bg-white/10"
            type="button"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
              <svg className="h-7 w-7 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">WhatsApp</p>
            <p className="mt-2 text-lg font-semibold text-white">+213 797 339 451</p>
            <p className="mt-2 text-xs text-emerald-400 transition-colors group-hover:text-emerald-300">
              Reponse instantanee
            </p>
          </button>

          <button
            onClick={handlePhoneClick}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#c9a962]/30 hover:bg-white/10"
            type="button"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20">
              <svg className="h-7 w-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Telephone</p>
            <p className="mt-2 text-lg font-semibold text-white">+213 797 339 451</p>
            <p className="mt-2 text-xs text-blue-400 transition-colors group-hover:text-blue-300">
              Appel gratuit
            </p>
          </button>

          <button
            onClick={handleEmailClick}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-[#c9a962]/30 hover:bg-white/10"
            type="button"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a962]/20">
              <svg className="h-7 w-7 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/50">Email</p>
            <p className="mt-2 text-lg font-semibold text-white">autonomy.owner@gmail.com</p>
            <p className="mt-2 text-xs text-[#c9a962] transition-colors group-hover:text-[#d4b673]">
              Reponse sous 2h
            </p>
          </button>
        </div>

        {/* Availability */}
        <p className="mt-10 text-center text-sm text-white/50">
          Disponibles <span className="font-semibold text-white">7j/7</span> pour vous accompagner dans votre projet digital
        </p>
      </div>
    </section>
  )
}
