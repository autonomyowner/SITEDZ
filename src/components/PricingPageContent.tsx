'use client'

import { useEffect, useState, useRef } from 'react'
import { trackMetaEvent } from '@/lib/metaPixel'
import { LeadCaptureModal } from './LeadCaptureModal'

const phoneNumber = '213797339451'
const displayPhoneNumber = '+213 797 339 451'

const createWhatsAppLink = (subject: string): string => {
  const message = `Bonjour! Je suis interesse par l'offre ${subject} de SiteDZ Store. Pourriez-vous me fournir un devis personnalise pour mon projet ?`
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

type Plan = {
  name: string
  tagline: string
  price: string
  originalPrice?: string
  delivery: string
  idealFor: string
  highlights: string[]
  whatsappUrl: string
  popular?: boolean
  savings?: string
}

const plans: Plan[] = [
  {
    name: 'Site vitrine moderne',
    tagline: 'FR/AR + RTL',
    price: '25 000 DA',
    originalPrice: '35 000 DA',
    delivery: 'Livraison 72h',
    idealFor: 'PME, professions liberales et artisans',
    savings: '-29%',
    highlights: [
      'Site vitrine (1 a 3 pages) avec design personnalise et responsive',
      'Integration de contenu de base (textes, images, logos)',
      'Formulaire de contact simple avec boite mail automatique',
      'Hebergement 1 an inclus + nom de domaine gratuit',
      'SSL gratuit + support technique 1 mois apres livraison',
      'Processus de vente automatise: client commande → notification email',
    ],
  },
  {
    name: 'E-commerce propulse',
    tagline: 'Pret pour la croissance',
    price: '67 000 DA',
    originalPrice: '95 000 DA',
    delivery: 'Livraison 10 jours',
    idealFor: 'Boutiques en ligne, franchises et retail',
    popular: true,
    savings: '-30%',
    highlights: [
      'Site vitrine (1 a 3 pages) + fonctionnalites e-commerce completes',
      'Design personnalise et responsive + integration contenu de base',
      'Formulaire de contact + systeme de commande automatise',
      'Hebergement 3 ans inclus + nom de domaine .com 3 ans gratuit',
      'SSL gratuit + support technique 1 mois apres livraison',
      'Processus de vente automatise: client commande → notification email',
    ],
  },
  {
    name: 'SaaS sur-mesure',
    tagline: 'Abonnement & automation',
    price: 'Sur devis',
    delivery: 'Livraison 21 jours',
    idealFor: 'Startups, edtech, plateformes B2B',
    highlights: [
      'Interface utilisateur premium adaptee a votre secteur',
      'Gestion abonnements, paiements locaux & internationaux',
      'Workflows automatisee (emails, WhatsApp, notifications)',
      'Tableau de bord analytics + export reporting',
      'Maintenance evolutive + 25 mises a jour/mois',
      'Processus de vente automatise: client commande → notification email',
    ],
  },
].map((plan) => ({
  ...plan,
  whatsappUrl: createWhatsAppLink(plan.name),
}))

const processSteps = [
  {
    title: 'Choisissez votre offre',
    description:
      'Selectionnez la formule qui correspond a votre objectif (site vitrine, e-commerce ou SaaS).',
  },
  {
    title: 'Envoyez votre validation',
    description:
      'Confirmez par WhatsApp ou email et partagez vos contenus, inspirations et contraintes.',
  },
  {
    title: 'Valider le devis et regler l acompte',
    description:
      'Des reception de votre accord sur le devis, nous reservons votre planning et envoyons la check-list projet.',
  },
  {
    title: 'Recevez maquette et logo',
    description:
      'Nous livrons un mockup sur-mesure + une proposition de logo adaptee a votre activite.',
  },
  {
    title: 'Build et ajustements',
    description:
      'Apres votre validation, nous developpons le site complet, testons et corrigeons les derniers details.',
  },
]

const faqItems = [
  {
    question: 'Combien de temps faut-il pour creer mon site web?',
    answer: 'Pour un site vitrine, nous livrons en 72h maximum. Pour un e-commerce, comptez 10 jours ouvrés. Les projets SaaS prennent environ 21 jours. Ces délais sont garantis et inclus dans nos engagements contractuels.',
  },
  {
    question: 'Que se passe-t-il si je ne suis pas satisfait du resultat?',
    answer: 'Nous offrons des revisions illimitees jusqu\'a votre satisfaction complete. Si apres cela vous n\'etes toujours pas satisfait, nous vous remboursons integralement. C\'est notre garantie 100% satisfaction.',
  },
  {
    question: 'Est-ce que je peux modifier mon site moi-meme apres la livraison?',
    answer: 'Absolument! Nous vous formons a l\'utilisation de votre site et vous fournissons un guide complet. Pour les modifications complexes, notre support reste disponible 1 mois apres livraison.',
  },
  {
    question: 'Quels moyens de paiement acceptez-vous?',
    answer: 'Nous acceptons les cartes CIB et EDAHABIA via notre passerelle securisee, ainsi que les virements bancaires. Un acompte de 50% est demande pour demarrer le projet.',
  },
  {
    question: 'Mon site sera-t-il optimise pour Google (SEO)?',
    answer: 'Oui, tous nos sites incluent une optimisation SEO de base: meta tags, structure semantique, vitesse optimisee, et compatibilite mobile. Pour un SEO avance, nous proposons des forfaits dedies.',
  },
  {
    question: 'Proposez-vous un support apres la livraison?',
    answer: 'Oui, chaque offre inclut 1 mois de support technique gratuit. Ensuite, nous proposons des forfaits de maintenance mensuelle adaptes a vos besoins.',
  },
]

const portfolioProjects = [
  {
    name: 'ZSST Marketplace',
    type: 'E-commerce B2B/B2C',
    url: 'www.zsst.xyz',
    description: 'Marketplace complete avec gestion des vendeurs et acheteurs',
  },
  {
    name: 'El Ghella',
    type: 'Plateforme Agricole',
    url: 'www.elghella.com',
    description: '1ere plateforme agricole algerienne',
  },
  {
    name: 'Cuisine Alger',
    type: 'Site Vitrine Premium',
    url: 'www.cuisinealger.com',
    description: 'Site vitrine haut de gamme pour cuisiniste',
  },
]

const headerWhatsAppUrl = createWhatsAppLink('Tarifs')
const depositWhatsAppUrl = createWhatsAppLink('Consultation projet')

export const PricingPageContent = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [activeViewers, setActiveViewers] = useState<number>(4)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'pricing_page',
      content_category: 'services',
    })
    setIsVisible(true)
  }, [])

  // Simulate live viewers
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveViewers(prev => Math.max(2, Math.min(8, prev + (Math.random() > 0.5 ? 1 : -1))))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleOpenModal = (planName: string, planPrice: string): void => {
    const priceNumber = planPrice.replace(/\D/g, '')
    trackMetaEvent('InitiateCheckout', {
      source: 'pricing_plan_modal',
      content_name: planName,
      value: priceNumber ? parseFloat(priceNumber) : undefined,
      currency: 'DZD',
    })

    setSelectedPlan({ name: planName, price: planPrice })
    setIsModalOpen(true)
  }

  const handleCloseModal = (): void => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  return (
    <div ref={sectionRef} className="relative isolate bg-[#1a1a1a]">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(184,115,51,0.06),_transparent_50%)]" />
      </div>

      {/* Hero Header */}
      <section className={`mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center">
          {/* Live Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400">
              {activeViewers} personnes consultent cette page
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">
            Offres Speciales Decembre 2025
          </p>
          <h1 className="mt-4 font-elegant text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Investissez dans votre
            <span className="block text-[#c9a962]">presence digitale</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Des solutions web sur-mesure qui generent des resultats mesurables.
            <span className="text-white font-medium"> Plus de 50 projets</span> livres avec succes.
          </p>

          {/* Urgency Banner */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-6 py-4">
            <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <p className="text-sm font-semibold text-amber-300">Offre limitee - Decembre 2025</p>
              <p className="text-xs text-amber-200/70">Jusqu a -30% sur tous nos forfaits + livraison prioritaire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative flex h-full flex-col rounded-3xl border transition-all duration-500 ${
                plan.popular
                  ? 'border-[#c9a962]/50 bg-gradient-to-b from-[#c9a962]/10 to-transparent scale-105 shadow-2xl shadow-[#c9a962]/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-[#c9a962] px-6 py-2 text-xs font-bold uppercase tracking-wider text-[#1a1a1a] shadow-lg">
                    Le plus populaire
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -right-3 top-6">
                  <div className="rounded-lg bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                    {plan.savings}
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c9a962]">
                      {plan.tagline}
                    </p>
                    <h2 className="mt-2 font-elegant text-2xl font-semibold text-white">
                      {plan.name}
                    </h2>
                  </div>

                  {/* Price */}
                  <div className="border-b border-white/10 pb-6">
                    {plan.price === 'Sur devis' ? (
                      <div>
                        <p className="text-3xl font-bold text-white">Sur devis</p>
                        <p className="mt-1 text-sm text-white/50">Prix personnalise selon votre projet</p>
                      </div>
                    ) : (
                      <div>
                        {plan.originalPrice && (
                          <p className="text-sm text-white/40 line-through">{plan.originalPrice}</p>
                        )}
                        <p className="text-4xl font-bold text-white">{plan.price}</p>
                        <p className="mt-1 text-sm text-white/50">Paiement unique</p>
                      </div>
                    )}
                  </div>

                  {/* Delivery Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                    <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs font-medium text-emerald-400">{plan.delivery}</span>
                  </div>

                  <p className="text-sm text-white/60">{plan.idealFor}</p>
                </div>

                {/* Features */}
                <ul className="mt-8 flex-1 space-y-4">
                  {plan.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#c9a962]/20">
                        <svg className="h-3 w-3 text-[#c9a962]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm leading-relaxed text-white/70">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 space-y-3">
                  {plan.price !== 'Sur devis' ? (
                    <button
                      onClick={() => handleOpenModal(plan.name, plan.price)}
                      className={`btn-premium w-full rounded-full py-4 text-sm font-semibold uppercase tracking-wider transition-all ${
                        plan.popular
                          ? 'bg-[#c9a962] text-[#1a1a1a] hover:bg-[#d4b673] hover:shadow-lg hover:shadow-[#c9a962]/25'
                          : 'bg-white text-[#1a1a1a] hover:bg-white/90'
                      }`}
                    >
                      Commander maintenant
                    </button>
                  ) : (
                    <a
                      href={plan.whatsappUrl}
                      onClick={() =>
                        trackMetaEvent('Lead', {
                          source: 'pricing_plan_whatsapp',
                          content_name: plan.name,
                        })
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium block w-full rounded-full bg-white py-4 text-center text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-white/90"
                    >
                      Demander un devis
                    </a>
                  )}
                  <p className="text-center text-xs text-white/40">
                    Garantie satisfaction 100% ou rembourse
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm text-white/70">Paiement securise</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-white/70">Remboursement garanti</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-sm text-white/70">Support 24/7</span>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">Portfolio</p>
            <h2 className="mt-4 font-elegant text-3xl font-semibold text-white sm:text-4xl">
              Nos realisations recentes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Decouvrez quelques-uns de nos projets les plus reussis
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {portfolioProjects.map((project, i) => (
              <a
                key={project.name}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 transition-all hover:border-[#c9a962]/30 hover:bg-white/5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#c9a962]">{project.type}</p>
                    <h3 className="mt-2 font-elegant text-xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{project.description}</p>
                  </div>
                  <svg className="h-5 w-5 text-white/30 transition-all group-hover:text-[#c9a962] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/40 group-hover:text-[#c9a962]">
                  <span>{project.url}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">Processus</p>
          <h2 className="mt-4 font-elegant text-3xl font-semibold text-white sm:text-4xl">
            De la commande au lancement en 5 etapes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#c9a962]/30 hover:bg-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a962] text-lg font-bold text-[#1a1a1a]">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/60">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:block">
                  <svg className="h-6 w-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">FAQ</p>
            <h2 className="mt-4 font-elegant text-3xl font-semibold text-white sm:text-4xl">
              Questions frequentes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Tout ce que vous devez savoir avant de commencer
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#1a1a1a] transition-all hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-white">{item.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-[#c9a962] transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="border-t border-white/10 px-6 pb-6 pt-4">
                    <p className="text-white/70">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
            <svg className="h-8 w-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="font-elegant text-3xl font-semibold text-white">
            Garantie 100% Satisfaction
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Nous sommes tellement confiants dans la qualite de notre travail que nous offrons une garantie complete.
            Si vous n etes pas satisfait du resultat final, nous vous remboursons integralement. Sans questions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Revisions illimitees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Remboursement complet si insatisfait</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Support 1 mois inclus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#c9a962]/20 via-[#b87333]/20 to-[#c9a962]/20 p-px">
          <div className="rounded-3xl bg-[#1a1a1a] px-8 py-16 text-center sm:px-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">
              Pret a transformer votre business?
            </p>
            <h2 className="mt-4 font-elegant text-3xl font-semibold text-white sm:text-4xl">
              Obtenez votre devis gratuit en 2 heures
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Discutez avec notre equipe et recevez une proposition personnalisee adaptee a vos objectifs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={headerWhatsAppUrl}
                onClick={() => trackMetaEvent('Contact', { source: 'pricing_footer_whatsapp' })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center gap-3 rounded-full bg-[#c9a962] px-10 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-[#d4b673] hover:shadow-lg hover:shadow-[#c9a962]/25"
              >
                <span>Discuter sur WhatsApp</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-sm text-white/50">ou appelez {displayPhoneNumber}</span>
            </div>
            <p className="mt-6 text-xs text-white/40">
              Disponible 7j/7 - Reponse garantie sous 2 heures
            </p>
          </div>
        </div>
      </section>

      {selectedPlan && (
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          planName={selectedPlan.name}
          planPrice={selectedPlan.price}
        />
      )}
    </div>
  )
}
