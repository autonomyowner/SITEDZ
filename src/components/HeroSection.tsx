'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const HeroSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timeout)
  }, [])

  const handleContactClick = (): void => {
    const phoneNumber = '+213797339451'
    const message =
      'Bonjour! Je suis interesse(e) par vos services de creation de sites web.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2069&q=80"
          alt="Decoration evennementielle elegante"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/72 backdrop-blur-xl" />
      </div>

      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
        <div
          className={`max-w-3xl space-y-8 transition-all duration-700 ease-out ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Agence Web Professionnelle
          </p>

          <h1 className="text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl lg:text-6xl">
            Sites web modernes et performants pour votre entreprise en Algerie
          </h1>

          <p className="text-lg leading-relaxed text-neutral-600 sm:text-xl">
            SITEDZ Store est votre agence web de confiance en Algerie. Nous creons des sites web modernes, rapides et professionnels pour developper votre entreprise en ligne. Specialises dans le marche algerien avec des solutions adaptees a vos besoins locaux.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:bg-neutral-700"
              type="button"
            >
              Prendre contact
            </button>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center rounded-full border border-neutral-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-700 transition-all duration-200 hover:border-neutral-700 hover:text-neutral-900"
            >
              Voir nos realisations
            </Link>
          </div>

          <div className="flex flex-col gap-4 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Partout en Algerie
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="whitespace-nowrap">Design moderne</span>
              <span className="whitespace-nowrap">SEO optimise</span>
              <span className="whitespace-nowrap">Support dedie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
