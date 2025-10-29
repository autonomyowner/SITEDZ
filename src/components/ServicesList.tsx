'use client'

import Image from 'next/image'

type Service = {
  id: string
  title: string
  description: string
  features: string[]
  image: string
  signature: string
  whatsappMessage: string
}

const services: Service[] = [
  {
    id: 'websites',
    title: 'Sites Vitrine Professionnels',
    description:
      'Sites web elegants et modernes pour presenter votre entreprise, vos services et renforcer votre credibilite en ligne.',
    features: [
      'Design moderne et responsive adapte a tous les ecrans',
      'Optimisation SEO pour etre visible sur Google',
      'Formulaires de contact et integration WhatsApp',
      'Galerie photos et videos pour vos realisations',
      'Hebergement securise et nom de domaine inclus',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    signature: 'Presence professionnelle',
    whatsappMessage:
      'Bonjour! Je suis intéressé(e) par un Site Vitrine Professionnel. J\'aimerais avoir plus d\'informations et un devis personnalisé.',
  },
  {
    id: 'ecommerce',
    title: 'Boutiques E-commerce',
    description:
      'Solutions de vente en ligne completes pour transformer votre entreprise et vendre vos produits 24h/24 et 7j/7.',
    features: [
      'Catalogue produits avec gestion des stocks',
      'Panier et processus de commande optimise',
      'Integration paiement en ligne securise (CCP, Baridi Mob)',
      'Tableau de bord pour gerer vos commandes',
      'Options de livraison et suivi des expeditions',
    ],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    signature: 'Vente en ligne',
    whatsappMessage:
      'Bonjour! Je souhaite créer une Boutique E-commerce pour vendre mes produits en ligne. Pourriez-vous me fournir plus de détails et un devis?',
  },
  {
    id: 'landing',
    title: 'Pages de Destination (Landing Pages)',
    description:
      'Pages web optimisees pour convertir vos visiteurs en clients, ideales pour vos campagnes marketing et publicites.',
    features: [
      'Design attractif centre sur la conversion',
      'Appels a l action strategiquement places',
      'Formulaires optimises pour capturer des leads',
      'Integration avec vos outils marketing',
      'Chargement ultra-rapide pour maximiser les conversions',
    ],
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    signature: 'Performance marketing',
    whatsappMessage:
      'Bonjour! Je suis intéressé(e) par la création d\'une Landing Page pour ma campagne marketing. Pouvez-vous me donner plus d\'informations?',
  },
  {
    id: 'portfolio',
    title: 'Sites Portfolio',
    description:
      'Mettez en valeur votre travail et vos competences avec un portfolio professionnel qui impressionne vos clients potentiels.',
    features: [
      'Galeries photos et videos haute qualite',
      'Presentation de vos projets et realisations',
      'Section a propos et competences',
      'Formulaire de contact et devis en ligne',
      'Design unique qui reflete votre style',
    ],
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    signature: 'Mise en valeur',
    whatsappMessage:
      'Bonjour! J\'aimerais créer un Site Portfolio professionnel pour mettre en valeur mon travail. Pouvez-vous m\'aider avec un devis?',
  },
  {
    id: 'restaurant',
    title: 'Sites pour Restaurants',
    description:
      'Sites web specialises pour restaurants, cafes et services alimentaires avec menu en ligne et systeme de reservation.',
    features: [
      'Menu interactif avec photos appetissantes',
      'Systeme de reservation de tables en ligne',
      'Integration commande et livraison',
      'Galerie photos de votre etablissement',
      'Avis clients et reseaux sociaux integres',
    ],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    signature: 'Gastronomie digitale',
    whatsappMessage:
      'Bonjour! Je cherche à créer un Site Web pour mon restaurant/café avec menu en ligne et système de réservation. J\'aimerais discuter des options disponibles.',
  },
  {
    id: 'custom',
    title: 'Solutions Sur Mesure',
    description:
      'Projets web personnalises adaptes a vos besoins specifiques, quelle que soit la complexite de votre demande.',
    features: [
      'Analyse detaillee de vos besoins et objectifs',
      'Architecture et fonctionnalites personnalisees',
      'Integration avec vos systemes existants',
      'Formation complete a l utilisation',
      'Support technique et maintenance continues',
    ],
    image: '/sulittions.png',
    signature: 'Solution unique',
    whatsappMessage:
      'Bonjour! J\'ai un projet web personnalisé avec des besoins spécifiques. J\'aimerais discuter de mes exigences et obtenir un devis sur mesure.',
  },
]

export const ServicesList = (): JSX.Element => {
  const handleWhatsAppClick = (message: string): void => {
    const phoneNumber = '+213797339451'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="space-y-20">
      {services.map((service, index) => {
        const isReversed = index % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
          >
            <div
              className={`relative overflow-hidden rounded-[32px] border border-neutral-200 bg-lightOrange-500/85 shadow-lg ${
                isReversed ? 'lg:order-2' : ''
              }`}
            >
            <div className="relative aspect-[4/3]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lightOrange-500/35 via-transparent to-lightOrange-500/10" />
            </div>
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                {service.signature}
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                SiteDZ Store
              </span>
            </div>
            </div>

            <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
            <div>
              <h2 className="text-3xl font-elegant font-semibold text-neutral-900">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {service.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Compris dans la prestation
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                className="rounded-full border border-neutral-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-700 transition-colors duration-200 hover:border-neutral-700 hover:text-neutral-900"
              >
                Demander un devis
              </button>
            </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
