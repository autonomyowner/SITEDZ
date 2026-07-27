import type { Dictionary } from '../types'
import { WILAYA_COUNT } from '../data/site'
import { frServicePages } from './fr-services'
import { frServicePages2 } from './fr-services-2'

export const fr: Dictionary = {
  meta: {
    title: 'SiteDZ — Création de sites web en Algérie',
    description:
      `Agence web algérienne. Sites vitrines, boutiques en ligne et applications mobiles en français, arabe et anglais. Livraison en 7 jours, à partir de 100 000 DA. Devis sous 24 h.`,
    ogLine: 'Création de sites web en Algérie',
  },

  nav: {
    services: 'Services',
    offer: 'Offre Tech',
    process: 'Méthode',
    projects: 'Projets',
    contact: 'Contact',
    cta: 'WhatsApp',
    switchTo: 'Changer de langue',
  },

  footer: {
    services: 'Services',
    offer: 'Offre Tech',
    process: 'Méthode',
    pricing: 'Tarifs',
    whatsapp: 'WhatsApp',
    copy: '© 2025 SiteDZ. Tous droits réservés.',
  },

  hero: {
    lines: ['Votre _vision_,', 'notre _code_.'],
    tagline:
      "SiteDZ est une agence digitale de référence — nous créons des expériences web et mobiles d'exception, alliant expertise locale et standards internationaux.",
    ctaPrimary: 'Démarrer un projet',
    ctaGhost: 'Voir les services',
  },

  featured: {
    label: "L'AGENCE DIGITALE DE RÉFÉRENCE",
    title: 'BÂTIR LE\n*futur* DIGITAL',
    stats: [
      { num: '30+', label: 'Projets livrés' },
      { num: '24h', label: 'Temps de réponse' },
      { num: '2025', label: 'Fondée en' },
    ],
  },

  marquee: { ariaLabel: 'Nos partenaires et technologies' },

  services: {
    label: 'Nos Services',
    items: {
      web: {
        tag: 'Service principal',
        name: 'Développement Web',
        desc: 'Sites sur mesure, plateformes dynamiques avec tableaux de bord, landing pages et systèmes complexes bâtis avec des technologies modernes.',
      },
      mobile: {
        tag: 'Service principal',
        name: 'Applications Mobiles',
        desc: 'Applications natives et multiplateformes iOS et Android — livraison, réservation et e-commerce.',
      },
      design: {
        tag: 'Design',
        name: 'Design UI/UX',
        desc: 'Un design centré utilisateur qui allie esthétique et fonctionnalité pour des expériences digitales mémorables.',
      },
      bots: {
        tag: 'Automatisation',
        name: 'Intégration de Bots',
        desc: 'Bots Telegram, automatisation WhatsApp et chatbots intelligents adaptés à votre activité.',
      },
    },
  },

  techOffer: {
    label: 'Offre Spéciale',
    badge: 'Pour les vendeurs tech',
    headline: 'Vendez plus de *matériel*,\nen ligne.',
    sub: `Un pack complet pour les magasins informatiques, monteurs PC et vendeurs de téléphones & accessoires — tout ce qu'il faut pour transformer votre boutique en machine à vendre dans les ${WILAYA_COUNT} wilayas.`,
    items: [
      { icon: 'store', name: 'Site sur mesure', desc: "Une boutique rapide, pensée mobile, construite autour d'un catalogue tech — fiches techniques, variantes, stock en direct et comparateur." },
      { icon: 'seo', name: 'Boost SEO', desc: 'Se positionner sur ce que les acheteurs tapent vraiment. SEO technique et fiches produits optimisées pour convertir.' },
      { icon: 'brand', name: 'Branding', desc: 'Logo, couleurs et kit réseaux sociaux pour que votre magasin devienne la référence de votre ville.' },
      { icon: 'landing', name: 'Générateur de landing pages', desc: 'Créez une page dédiée pour chaque promo, marque ou nouveauté en quelques minutes. Sans développeur.' },
      { icon: 'delivery', name: 'Intégration livraison', desc: 'Yalidine, ZR Express, Noest et plus, intégrés. Les commandes partent directement au livreur et le suivi revient automatiquement.' },
      { icon: 'builder', name: 'PC Builder', desc: 'Vos clients montent leur configuration avec vérification de compatibilité et prix en temps réel. Panier plus élevé, moins de questions.' },
    ],
    ctaTitle: 'Vous voulez ça pour votre magasin ?',
    ctaSub: 'Dites-nous ce que vous vendez — devis détaillé sous 24 heures.',
    ctaBtn: 'Demander un devis',
    wa: 'Bonjour SiteDZ — je vends du matériel informatique et je suis intéressé par votre offre pour les vendeurs tech.',
  },

  process: {
    label: 'La Méthode',
    headline: 'Conçu avec\n*clarté*,\ncode et soin',
    body: [
      "Chaque projet commence par une compréhension profonde de votre activité — qui sont vos clients, ce dont ils ont besoin, et comment votre produit digital s'inscrit dans leur quotidien.",
      'Nous combinons une architecture propre avec un design pixel-perfect pour livrer des solutions rapides, fiables et conçues pour évoluer avec vous.',
    ],
    steps: [
      { num: '01', title: 'Découverte', desc: 'Nous comprenons vos objectifs, votre audience cible et le problème à résoudre.' },
      { num: '02', title: 'Design', desc: 'Wireframes et prototypes UI alignés avec votre marque et les attentes utilisateurs.' },
      { num: '03', title: 'Développement', desc: 'Construit avec des technologies modernes — du code propre, rapide, scalable et maintenable.' },
      { num: '04', title: 'Lancement & Support', desc: 'Déploiement, tests rigoureux et maintenance continue pour une activité fluide.' },
    ],
  },

  pricing: {
    headline: 'Tarifs clairs\net honnêtes',
    sub: 'Des prix affichés, en dinars, tout compris. Pas de frais cachés, pas de devis surprise — vous savez ce que vous payez avant de commencer.',
    perMonth: '/mois',
    plans: {
      starter: {
        tag: 'Starter',
        desc: 'Site vitrine 5 pages, bilingue français/arabe, livré en 7 jours. Nom de domaine et hébergement inclus la première année.',
      },
      business: {
        tag: 'Business',
        desc: 'Refonte complète, jusqu’à 15 pages, tableau de bord, fiche Google d’établissement et référencement de base. Pour les entreprises déjà établies.',
      },
      boutique: {
        tag: 'Boutique en ligne',
        desc: 'Catalogue, panier, paiement à la livraison et intégration Yalidine ou ZR Express. Installation puis abonnement mensuel.',
      },
      care: {
        tag: 'Pack Sérénité',
        desc: 'Hébergement, sauvegardes, mises à jour, modifications de contenu et support WhatsApp. Optionnel, résiliable à tout moment.',
      },
    },
  },

  projects: {
    label: 'Nos Projets',
    headline: 'Conçus pour\n*évoluer*',
    awardTitle: 'Fiers développeurs de 2 Labels Projet Innovant',
    awardSub: "ElGhella & AItraid — distingués par le programme d'innovation algérien",
    awardBadge: 'Projet Innovant',
    playstore: 'Disponible sur Play Store',
    items: {
      zed: { tag: 'E-Commerce / Tech', desc: `Partenaire de confiance pour vos besoins tech — composants premium, laptops et accessoires livrés dans les ${WILAYA_COUNT} wilayas.` },
      elghella: { tag: 'AgriTech', desc: 'Marketplace intégrée pour les agriculteurs algériens : produits, équipements et services agricoles.' },
      aitraid: { tag: 'Marketplace', desc: "Marketplace B2B, B2C et freelance reliant acheteurs et vendeurs à travers l'Algérie." },
      ma5zani: { tag: 'SaaS E-Commerce', desc: "L'alternative Shopify pour les vendeurs algériens — lancez votre boutique en quelques minutes." },
      postaify: { tag: 'SaaS IA', desc: "Générez 30 jours de contenu pour 5 plateformes en moins de 15 minutes grâce à l'IA." },
      tabra: { tag: 'HealthTech', desc: "Plateforme de santé algérienne facilitant l'accès aux services médicaux dans tout le pays." },
      hasio: { tag: 'Voyage', desc: 'Guide de voyage et plateforme de réservation — votre voyage simplifié.' },
      travoices: { tag: 'IA / Voix', desc: 'Traduction vocale par IA en temps réel pour briser les barrières linguistiques.' },
      biogrenagold: { tag: 'Santé & Bien-être', desc: 'Compléments naturels à base de grenade — la puissance de la grenade.' },
      cuisinealger: { tag: "Design d'intérieur", desc: 'Design et fabrication de cuisines modernes pensées pour les foyers algériens.' },
      reachfood: { tag: 'Food', desc: 'Plateforme reliant producteurs et consommateurs pour une distribution plus intelligente.' },
      mbsx: { tag: 'Médias', desc: 'Institution de journalisme de données portant le reportage data-driven en Algérie.' },
      walidfermeture: { tag: 'Sécurité / Enseignes', desc: 'Installation et maintenance 24/7 à Paris pour rideaux métalliques, portes blindées, vitrines et enseignes lumineuses en Île-de-France.' },
      acquisitionpro: { tag: 'Génération de leads', desc: "Plateforme de génération de leads rendant l'acquisition client constante et prévisible." },
    },
  },

  forSale: {
    label: 'Actif à vendre',
    badge: 'Startup à vendre',
    headline: 'Une startup finie,\n*prête à reprendre*',
    sub: "AiTraid est une marketplace complète pour acheter, vendre et échanger des agents IA autonomes. Développée, déployée et fonctionnelle — cédée avec le nom de domaine, l'intégralité du code source et l'infrastructure.",
    domainLabel: 'Nom de domaine inclus dans la vente',
    domainNote: "Transféré à l'acquéreur avec le code source complet, le schéma de base de données et la configuration de déploiement.",
    includes: [
      'Code source complet — frontend, API et schéma de base de données',
      'Authentification, transactions, avis et tableaux de bord vendeurs déjà opérationnels',
      'Commission de 10 % intégrée à chaque transaction',
      'Schéma prêt pour Stripe — branchez le paiement et encaissez',
      'Auto-hébergé : aucune dépendance à Vercel, Supabase ou Firebase',
      'Déploiement Docker en une commande sur n’importe quel VPS',
    ],
    stackTitle: 'Stack technique',
    stack: {
      frontend: 'Frontend',
      styling: 'Design',
      routing: 'Routage',
      backend: 'Backend',
      database: 'Base de données',
      cache: 'Cache',
      auth: 'Authentification',
      infra: 'Infrastructure',
    },
    stats: {
      pages: 'Pages développées',
      endpoints: 'Endpoints API',
      tables: 'Tables en base',
      fee: 'Commission plateforme',
    },
    ctaTitle: 'Intéressé par le rachat d’AiTraid ?',
    ctaSub: 'Écrivez-nous sur WhatsApp : nous discutons du prix et de ce que comprend la cession.',
    ctaBtn: 'Discuter du prix',
    wa: 'Bonjour SiteDZ, j’ai vu qu’AiTraid (aitraid.com) est à vendre. Je souhaite discuter du prix.',
  },

  contact: {
    title: 'Votre projet,\n*notre expertise*',
    sub: 'Prêt à bâtir quelque chose de grand ? Parlez-nous de votre idée et nous reviendrons vers vous sous 24 heures.',
    whatsapp: 'WhatsApp',
  },

  servicePages: { ...frServicePages, ...frServicePages2 },
}
