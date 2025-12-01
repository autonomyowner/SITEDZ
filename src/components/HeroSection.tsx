'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackMetaEvent } from '@/lib/metaPixel'

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [activeClients, setActiveClients] = useState<number>(3)
  const [spotsLeft, setSpotsLeft] = useState<number>(2)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timeout)
  }, [])

  // Simulate live activity
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClients(prev => Math.max(1, Math.min(7, prev + (Math.random() > 0.5 ? 1 : -1))))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleContactClick = (): void => {
    const phoneNumber = '+213797339451'
    const message =
      'Bonjour! Je veux lancer mon site web professionnel. Pouvez-vous me rappeler?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    trackMetaEvent('Contact', { source: 'hero_primary_whatsapp' })
    window.open(whatsappUrl, '_blank')
  }

  const handlePricingClick = (): void => {
    trackMetaEvent('ViewContent', { source: 'hero_pricing_cta' })
  }

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2069&q=80"
          alt="Professional workspace"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/90 via-[#1a1a1a]/80 to-[#2d2418]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,98,0.15),_transparent_50%)]" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Live Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#c9a962]/30 bg-[#c9a962]/10 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-[#c9a962]">
                {activeClients} entreprises consultent nos offres en ce moment
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-elegant text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Votre site web
                <span className="block text-[#c9a962]">
                  qui vend pour vous
                </span>
                <span className="block text-white/90">
                  24h/24, 7j/7
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              Nous creons des sites web <span className="text-white font-medium">optimises pour la conversion</span> qui transforment vos visiteurs en clients.
              Plus de <span className="text-[#c9a962] font-semibold">50 projets</span> livres avec succes.
            </p>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 border-y border-white/10 py-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-[#c9a962] to-[#b87333]"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/60">+50 projets</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm text-white/60">Livraison garantie</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={handleContactClick}
                className="btn-premium group inline-flex items-center justify-center gap-3 rounded-full bg-[#c9a962] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-[#d4b673] hover:shadow-lg hover:shadow-[#c9a962]/25"
                type="button"
              >
                <span>Devis gratuit en 2h</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <Link
                href="/pricing"
                onClick={handlePricingClick}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                Voir les tarifs
              </Link>
            </div>

            {/* Urgency Element */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-3">
              <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-amber-200">
                <span className="font-semibold">Offre Decembre:</span> Livraison en 72h garantie - Plus que <span className="font-bold text-amber-400">{spotsLeft} places</span>
              </span>
            </div>
          </div>

          {/* Right Side - Stats & Trust */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Main Stats Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-6 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Resultats prouves</p>
                  <h3 className="mt-2 font-elegant text-2xl font-semibold text-white">Ce que nos clients obtiennent</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#c9a962]/20 bg-[#c9a962]/5 p-5 text-center">
                    <p className="font-elegant text-4xl font-bold text-[#c9a962]">+340%</p>
                    <p className="mt-1 text-xs text-white/60">de visibilite en ligne</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-center">
                    <p className="font-elegant text-4xl font-bold text-emerald-400">72h</p>
                    <p className="mt-1 text-xs text-white/60">delai de livraison</p>
                  </div>
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
                    <p className="font-elegant text-4xl font-bold text-blue-400">24/7</p>
                    <p className="mt-1 text-xs text-white/60">support reactif</p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5 text-center">
                    <p className="font-elegant text-4xl font-bold text-purple-400">100%</p>
                    <p className="mt-1 text-xs text-white/60">clients satisfaits</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                      <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">Nouveau projet lance</p>
                      <p className="text-xs text-white/50">Site e-commerce pour une parfumerie - Il y a 2h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-4 -top-4 animate-float rounded-2xl border border-[#c9a962]/30 bg-[#1a1a1a] px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c9a962]">
                    <svg className="h-4 w-4 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Agence Certifiee</p>
                    <p className="text-[10px] text-white/50">Meta Business Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Ils nous font confiance</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Allouani', 'El Ghella', 'Cuisine Alger', 'Transport Pro', 'Deco Luxe'].map((client, i) => (
              <span key={client} className="text-sm font-medium text-white/30 transition-colors hover:text-white/60">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
