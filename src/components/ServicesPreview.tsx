'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { trackMetaEvent } from '@/lib/metaPixel'

type ServiceCard = {
  id: string
  title: string
  description: string
  highlight: string
  price: string
  delivery: string
  features: string[]
  href: string
  popular?: boolean
}

const services: ServiceCard[] = [
  {
    id: 'websites',
    title: 'Site Vitrine',
    description:
      'Site web professionnel et elegant pour presenter votre entreprise avec impact.',
    highlight: 'Ideal pour debuter',
    price: '25 000 DA',
    delivery: '72h',
    features: ['Design personnalise', 'Responsive mobile', 'Hebergement 1 an', 'Support 1 mois'],
    href: '/pricing',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description:
      'Boutique en ligne complete pour vendre vos produits 24/7 avec paiement securise.',
    highlight: 'Le plus populaire',
    price: '67 000 DA',
    delivery: '10 jours',
    features: ['Catalogue produits', 'Panier & checkout', 'Hebergement 3 ans', 'Notifications auto'],
    href: '/pricing',
    popular: true,
  },
  {
    id: 'custom',
    title: 'SaaS Sur Mesure',
    description:
      'Application web personnalisee avec fonctionnalites avancees pour votre business.',
    highlight: 'Solutions enterprise',
    price: 'Sur devis',
    delivery: '21 jours',
    features: ['Interface premium', 'Gestion abonnements', 'Dashboard analytics', 'Support continu'],
    href: '/pricing',
  },
]

export const ServicesPreview = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const handleServiceClick = (serviceId: string): void => {
    trackMetaEvent('ViewContent', {
      content_name: serviceId,
      content_category: 'services',
    })
  }

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-lightOrange-500 px-4 py-24 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.08),_transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">
            Nos Offres
          </p>
          <h2 className="mt-4 font-elegant text-4xl font-semibold text-neutral-900 sm:text-5xl">
            Choisissez la solution
            <span className="block text-[#c9a962]">qui vous convient</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Des solutions web professionnelles adaptees a chaque budget et chaque objectif.
            Livraison rapide et garantie satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              onClick={() => handleServiceClick(service.id)}
              className={`group relative flex flex-col rounded-3xl border transition-all duration-500 ${
                service.popular
                  ? 'border-[#c9a962]/50 bg-white shadow-xl scale-105'
                  : 'border-neutral-200 bg-white/80 hover:border-[#c9a962]/30 hover:shadow-lg'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-[#c9a962] px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#1a1a1a] shadow-lg">
                    Le plus choisi
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                {/* Header */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c9a962]">
                    {service.highlight}
                  </p>
                  <h3 className="mt-2 font-elegant text-2xl font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6 border-b border-neutral-100 pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-neutral-900">{service.price}</span>
                    {service.price !== 'Sur devis' && (
                      <span className="text-sm text-neutral-500">paiement unique</span>
                    )}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs font-medium text-emerald-700">Livraison en {service.delivery}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm text-neutral-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c9a962]/20">
                        <svg className="h-3 w-3 text-[#c9a962]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`rounded-full py-4 text-center text-sm font-semibold uppercase tracking-wider transition-all ${
                  service.popular
                    ? 'bg-[#c9a962] text-[#1a1a1a] group-hover:bg-[#d4b673]'
                    : 'bg-neutral-900 text-white group-hover:bg-neutral-800'
                }`}>
                  {service.price === 'Sur devis' ? 'Demander un devis' : 'Choisir cette offre'}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="mb-4 text-neutral-600">Besoin d aide pour choisir?</p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-3 rounded-full border-2 border-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white"
          >
            <span>Comparer toutes les offres</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Trust Bar */}
        <div className={`mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-neutral-200 pt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>50+ projets livres</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Livraison garantie</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Paiement securise</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Support 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
