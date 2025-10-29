'use client'

import { useEffect } from 'react'
import { trackMetaEvent } from '@/lib/metaPixel'

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
  delivery: string
  idealFor: string
  highlights: string[]
  whatsappUrl: string
}

const plans: Plan[] = [
  {
    name: 'Site vitrine moderne',
    tagline: 'FR/AR + RTL',
    price: '25 000 DA',
    delivery: 'Livraison 72h',
    idealFor: 'PME, professions liberales et artisans',
    highlights: [
      'Site vitrine (1 à 3 pages) avec design personnalisé et responsive',
      'Intégration de contenu de base (textes, images, logos)',
      'Formulaire de contact simple avec boîte mail automatique',
      'Hébergement 1 an inclus + nom de domaine gratuit',
      'SSL gratuit + support technique 1 mois après livraison',
      'Processus de vente automatisé: client commande → notification email',
    ],
  },
  {
    name: 'E-commerce propulse',
    tagline: 'Pret pour la croissance',
    price: '67 000 DA',
    delivery: 'Livraison 10 jours ouvres',
    idealFor: 'Boutiques en ligne, franchises et retail',
    highlights: [
      'Site vitrine (1 à 3 pages) + fonctionnalités e-commerce complètes',
      'Design personnalisé et responsive + intégration contenu de base',
      'Formulaire de contact + système de commande automatisé',
      'Hébergement 3 ans inclus + nom de domaine .com 3 ans gratuit',
      'SSL gratuit + support technique 1 mois après livraison',
      'Processus de vente automatisé: client commande → notification email',
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
      'Processus de vente automatisé: client commande → notification email',
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

const headerWhatsAppUrl = createWhatsAppLink('Tarifs')
const depositWhatsAppUrl = createWhatsAppLink('Consultation projet')

export const PricingPageContent = (): JSX.Element => {
  useEffect(() => {
    trackMetaEvent('ViewContent', {
      content_name: 'pricing_page',
      content_category: 'services',
    })
  }, [])

  return (
    <div className="relative isolate bg-lightOrange-500/90">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.12),_transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Nos Offres 2025
          </p>
          <h1 className="text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Boostez Votre Présence sociale, engagez votre audience. Votre transformation Digitale, étape par étape.
          </h1>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
            Chaque projet est unique. Nous proposons des solutions personnalisees
            adaptees a vos besoins specifiques. Contactez-nous pour obtenir un devis
            sur mesure incluant votre Meta Pixel, une experience utilisateur optimisee
            pour la conversion et un accompagnement direct via WhatsApp.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={headerWhatsAppUrl}
              onClick={() =>
                trackMetaEvent('Contact', {
                  source: 'pricing_header_whatsapp',
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-neutral-700"
            >
              Demander un devis sur WhatsApp
            </a>
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Hotline WhatsApp {displayPhoneNumber}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-lightOrange-500/95 p-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                      {plan.tagline}
                    </p>
                    <h2 className="mt-3 text-2xl font-elegant font-semibold text-neutral-900">
                      {plan.name}
                    </h2>
                  </div>
                  <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-amber-700">
                    {plan.delivery}
                  </div>
                </div>
                <div className="space-y-2">
                  {plan.price === 'Sur devis' ? (
                    <>
                      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                        Tarif sur devis
                      </p>
                      <p className="text-sm text-neutral-600">
                        Prix personnalise selon votre projet
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                        A partir de
                      </p>
                      <p className="text-2xl font-semibold text-amber-600">
                        {plan.price}
                      </p>
                    </>
                  )}
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {plan.idealFor}
                </p>
                <ul className="space-y-3 pt-2">
                  {plan.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600"
                    >
                      <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        +
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {plan.price !== 'Sur devis' ? (
                  <>
                    <a
                      href={`/payment?plan=${encodeURIComponent(plan.name)}&amount=${plan.price.replace(/\D/g, '')}`}
                      onClick={() =>
                        trackMetaEvent('InitiateCheckout', {
                          source: 'pricing_plan_payment',
                          content_name: plan.name,
                        })
                      }
                      className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-amber-500"
                    >
                      Payer maintenant
                    </a>
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
                      className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-lightOrange-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors duration-200 hover:bg-lightOrange-400"
                    >
                      Demander un devis
                    </a>
                    <p className="text-xs text-neutral-500">
                      Payez directement en ligne ou demandez un devis personnalise
                      adapte a votre projet.
                    </p>
                  </>
                ) : (
                  <>
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
                      className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-amber-500"
                    >
                      Demander un devis personnalise
                    </a>
                    <p className="text-xs text-neutral-500">
                      Contactez-nous sur WhatsApp pour obtenir un devis adapte a vos besoins specifiques.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-lightOrange-500/80 p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Processus client
          </p>
          <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
            De la reservation au lancement sans friction
          </h2>
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex min-w-full snap-x snap-mandatory gap-6 lg:grid lg:grid-cols-5 lg:gap-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative min-w-[240px] flex-1 snap-center rounded-2xl border border-neutral-200 bg-lightOrange-500/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg lg:min-w-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                      Etape {index + 1}
                    </div>
                  </div>
                  <div className="mt-6 text-lg font-semibold text-neutral-900">
                    {step.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="absolute right-[-20px] top-1/2 hidden -translate-y-1/2 lg:flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-neutral-300 transition-colors duration-300 group-hover:text-neutral-900"
                      >
                        <path
                          d="M5 12h14M13 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-600">
            Demarrer votre projet
          </p>
          <h3 className="mt-3 text-2xl font-elegant font-semibold text-neutral-900">
            Discutons de votre projet et obtenez un devis personnalise
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-700">
            Partagez-nous vos besoins, vos objectifs et votre budget. Nous vous
            proposerons un devis detaille incluant la maquette, le logo et toutes
            les fonctionnalites adaptees a votre activite.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={depositWhatsAppUrl}
              onClick={() =>
                trackMetaEvent('Contact', {
                  source: 'pricing_consultation',
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-neutral-700"
            >
              Discuter sur WhatsApp
            </a>
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
              Appelez-nous {displayPhoneNumber}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200 bg-lightOrange-500/70 p-10 text-center shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Pourquoi nous choisir
          </p>
          <h2 className="mt-4 text-3xl font-elegant font-semibold text-neutral-900">
            Chaque projet est pilote pour la conversion et le suivi client
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-lg font-semibold text-neutral-900">
                Meta Pixel inclus
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                Campagnes Meta pretes a l&apos;emploi: audiences de remarketing et
                suivi des conversions sans perdre les visiteurs.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-lg font-semibold text-neutral-900">
                Parcours WhatsApp
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                Chaque appel a l&apos;action dirige vos prospects vers WhatsApp pour
                finaliser la vente meme sans passerelle de paiement locale.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-lg font-semibold text-neutral-900">
                Support continu
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">
                Maintenance mensuelle incluse, ajustements rapides et accompagnement
                marketing pour optimiser vos campagnes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-neutral-800 bg-neutral-900 px-8 py-12 text-center text-white sm:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Pret a lancer ?
          </p>
          <h2 className="text-3xl font-elegant font-semibold sm:text-4xl">
            Transformons vos visiteurs en clients en moins de 7 jours
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">
            Envoyez-nous un message sur WhatsApp et nous livrons un plan
            d&apos;action detaille: calendrier, maquettes, integration du Pixel et
            scripts de vente pour votre equipe.
          </p>
          <a
            href={headerWhatsAppUrl}
            onClick={() =>
              trackMetaEvent('Contact', {
                source: 'pricing_footer_whatsapp',
              })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-lightOrange-500 px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors duration-200 hover:bg-amber-200"
          >
            Ouvrir WhatsApp maintenant
          </a>
          <p className="text-[12px] uppercase tracking-[0.3em] text-white/60">
            Disponible 7j/7 - Support {displayPhoneNumber}
          </p>
        </div>
      </section>
    </div>
  )
}
