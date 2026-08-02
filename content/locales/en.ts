import type { Dictionary } from '../types'
import { WILAYA_COUNT } from '../data/site'

export const en: Dictionary = {
  meta: {
    title: 'SiteDZ — Web design and development in Algeria',
    description:
      'Algerian web agency. Business websites, online stores and mobile apps in French, Arabic and English. Delivered in 7 days, from 100,000 DA. Quote within 24 hours.',
    ogLine: 'Web design and development in Algeria',
  },

  nav: {
    services: 'Services',
    offer: 'Tech Offer',
    process: 'Process',
    projects: 'Projects',
    contact: 'Contact',
    cta: 'WhatsApp',
    switchTo: 'Change language',
  },

  footer: {
    services: 'Services',
    offer: 'Tech Offer',
    process: 'Process',
    pricing: 'Pricing',
    whatsapp: 'WhatsApp',
    copy: '© 2025 SiteDZ. All rights reserved.',
  },

  hero: {
    lines: ['Your _vision_,', 'our _code_.'],
    tagline:
      'SiteDZ is a premier digital agency — building exceptional web and mobile experiences that combine local expertise with international standards.',
    ctaPrimary: 'Start a Project',
    ctaGhost: 'See Services',
  },

  featured: {
    label: 'PREMIER DIGITAL AGENCY',
    title: 'BUILDING THE\nDIGITAL *future*',
    stats: [
      { num: '30+', label: 'Projects Delivered' },
      { num: '24h', label: 'Response Time' },
      { num: '2025', label: 'Founded' },
    ],
  },

  marquee: { ariaLabel: 'Our partners and technologies' },

  services: {
    label: 'Our Services',
    items: {
      web: {
        tag: 'Core Service',
        name: 'Web Development',
        desc: 'Custom websites, dynamic platforms with control panels, landing pages, and complex systems built with modern technology.',
      },
      mobile: {
        tag: 'Core Service',
        name: 'Mobile Applications',
        desc: 'Native and cross-platform apps for iOS and Android — delivery systems, booking platforms, and e-commerce.',
      },
      design: {
        tag: 'Design',
        name: 'UI/UX Design',
        desc: 'User-focused design combining aesthetics with functionality for memorable digital experiences.',
      },
      bots: {
        tag: 'Automation',
        name: 'Bot Integration',
        desc: 'Telegram bots, WhatsApp automation, and intelligent chatbot solutions tailored to your business.',
      },
    },
  },

  capabilities: {
    label: 'Our services',
    headline: 'Our *services*',
    sub: 'A complete ecosystem of digital and technical services.',
    items: {
      web: {
        name: 'Websites and platforms',
        desc: 'Professional websites and platforms — fast, secure, and built around your objectives.',
      },
      systems: {
        name: 'Information systems',
        desc: 'Custom management systems that automate your operations and raise your efficiency.',
      },
      ai: {
        name: 'Artificial intelligence',
        desc: 'AI inside your business: smart assistants, data analysis, and automation.',
      },
      brand: {
        name: 'Brand identity and design',
        desc: 'Complete visual identities that carry your brand’s character and set it apart.',
      },
      mobile: {
        name: 'Mobile applications',
        desc: 'Modern, fluid mobile apps on Android and iOS.',
      },
      marketing: {
        name: 'Digital marketing',
        desc: 'Digital strategy and campaign management that put your brand in front of its audience.',
      },
      training: {
        name: 'Training',
        desc: 'On-site and remote training courses and learning material through the SiteDZ academy.',
      },
      consulting: {
        name: 'Technical consulting',
        desc: 'Guidance and technical advice on choosing the right solutions for your projects.',
      },
    },
    cta: 'Contact us',
    wa: 'Hello, I would like a quote for: {service}',
  },

  techOffer: {
    label: 'Special Offer',
    badge: 'For tech sellers',
    headline: 'Sell more *hardware*,\nonline.',
    sub: `A complete package for computer shops, PC builders, and phone & accessory sellers — everything you need to turn a storefront into a machine that sells across all ${WILAYA_COUNT} wilayas.`,
    items: [
      { icon: 'store', name: 'Custom Store', desc: 'A fast, mobile-first store built around a tech catalogue — specs, variants, live stock, and side-by-side comparison.' },
      { icon: 'seo', name: 'SEO Boost', desc: 'Rank for what buyers actually type. Technical SEO plus product pages tuned to bring in search traffic that converts.' },
      { icon: 'brand', name: 'Branding', desc: 'Logo, colours, and a social kit so your shop reads as the reference in your city — not just another reseller.' },
      { icon: 'landing', name: 'Landing Page Generator', desc: 'Launch a dedicated page for every promo, brand, or new drop in minutes. No developer, no waiting.' },
      { icon: 'delivery', name: 'Delivery Integration', desc: 'Yalidine, ZR Express, Noest and more, wired in. Orders go straight to the courier and tracking comes back automatically.' },
      { icon: 'builder', name: 'PC Builder', desc: 'Customers assemble their own build with live compatibility checks and instant pricing. Bigger baskets, fewer questions.' },
    ],
    ctaTitle: 'Want this for your shop?',
    ctaSub: "Tell us what you sell and we'll send a scoped quote within 24 hours.",
    ctaBtn: 'Get a quote',
    wa: "Hi SiteDZ — I sell tech and I'm interested in your offer for tech sellers.",
  },

  process: {
    label: 'The Process',
    headline: 'Built with\n*clarity*,\ncode, and care',
    body: [
      'Every project starts with a deep understanding of your business — who your customers are, what they need, and how your digital product fits into their lives.',
      'We combine clean architecture with pixel-perfect design to deliver solutions that are fast, reliable, and built to grow with you.',
    ],
    steps: [
      { num: '01', title: 'Discovery', desc: 'We learn your business goals, target audience, and the problem you need solved.' },
      { num: '02', title: 'Design', desc: 'We craft wireframes and UI prototypes aligned with your brand and user expectations.' },
      { num: '03', title: 'Development', desc: 'Built with modern technology — clean, fast, scalable, and maintainable code.' },
      { num: '04', title: 'Launch & Support', desc: 'Deployment, rigorous testing, and ongoing maintenance to keep you running smoothly.' },
    ],
  },

  pricing: {
    headline: 'Clear,\nhonest pricing',
    sub: 'Published prices, in dinars, all inclusive. No hidden fees and no surprise quotes — you know what you are paying before we start.',
    perMonth: '/month',
    plans: {
      starter: {
        tag: 'Starter',
        desc: 'A 5-page business website, bilingual French/Arabic, delivered in 7 days. Domain and first-year hosting included.',
      },
      business: {
        tag: 'Business',
        desc: 'Full redesign, up to 15 pages, admin dashboard, Google Business Profile and baseline SEO. For established companies.',
      },
      boutique: {
        tag: 'Online Store',
        desc: 'Catalogue, cart, cash on delivery, and Yalidine or ZR Express integration. Setup fee then a monthly subscription.',
      },
      care: {
        tag: 'Care Plan',
        desc: 'Hosting, backups, updates, content edits, and WhatsApp support. Optional, cancel any time.',
      },
    },
  },

  projects: {
    label: 'Our Projects',
    headline: 'Built to\n*scale*',
    awardTitle: 'Proud developers of 2 Label Projet Innovants',
    awardSub: "ElGhella & AItridi — awarded by Algeria's innovation programme",
    awardBadge: 'Projet Innovant',
    playstore: 'Live on Play Store',
    items: {
      zed: { tag: 'E-Commerce / Tech', desc: `Trusted partner for all your tech needs — premium components, laptops, and accessories delivered across all ${WILAYA_COUNT} wilayas.` },
      elghella: { tag: 'AgriTech', desc: 'Integrated marketplace for Algerian farmers to trade agricultural products, equipment, and advisory services.' },
      aitraid: { tag: 'AI Marketplace', desc: 'Two-sided marketplace for buying, selling and trading autonomous AI agents, with transactions, reviews and seller dashboards built in.' },
      aitridi: { tag: 'Marketplace', desc: 'B2B, B2C, and freelancer marketplace connecting buyers and sellers across Algeria.' },
      ma5zani: { tag: 'E-Commerce SaaS', desc: 'The Shopify alternative for Algerian sellers — launch your online store in minutes.' },
      postaify: { tag: 'AI SaaS', desc: 'Generate 30 days of content for 5 platforms in under 15 minutes with AI automation.' },
      tabra: { tag: 'HealthTech', desc: 'Algerian healthcare platform making medical services easier to access nationwide.' },
      hasio: { tag: 'Travel', desc: 'Travel guide and booking platform — your journey made easier.' },
      travoices: { tag: 'AI / Voice', desc: 'Real-time AI voice translation breaking language barriers across the globe.' },
      biogrenagold: { tag: 'Health & Wellness', desc: 'Natural pomegranate-based health supplements — la puissance de la grenade.' },
      cuisinealger: { tag: 'Interior Design', desc: 'Modern kitchen design and manufacturing crafted for Algerian homes.' },
      reachfood: { tag: 'Food', desc: 'Platform connecting food producers and consumers for smarter distribution.' },
      mbsx: { tag: 'Media', desc: 'Data journalism institution advancing data-driven reporting in Algeria.' },
      walidfermeture: { tag: 'Security / Signage', desc: 'Paris-based 24/7 installation and maintenance for metal shutters, reinforced doors, storefronts, and illuminated signage across Île-de-France.' },
      acquisitionpro: { tag: 'Lead Generation', desc: 'Lead generation platform helping businesses make customer acquisition consistent and predictable.' },
    },
  },

  forSale: {
    label: 'Asset for sale',
    badge: 'Startup for sale',
    headline: 'A finished startup,\n*ready to own*',
    sub: 'AiTraid is a complete two-sided marketplace for buying, selling and trading autonomous AI agents. Built, deployed and running — sold with the domain, the full source code and the infrastructure.',
    domainLabel: 'Domain included in the sale',
    domainNote: 'Transferred to the buyer with the full codebase, database schema and deployment setup.',
    includes: [
      'Full source code — frontend, API and database schema',
      'Auth, transactions, reviews and seller dashboards already working',
      '10% platform fee built into every transaction',
      'Stripe-ready schema — wire up the payment flow and collect',
      'Self-hosted: no Vercel, Supabase or Firebase lock-in',
      'One-command Docker deployment on any VPS',
    ],
    stackTitle: 'Tech stack',
    stack: {
      frontend: 'Frontend',
      styling: 'Styling',
      routing: 'Routing',
      backend: 'Backend',
      database: 'Database',
      cache: 'Cache',
      auth: 'Auth',
      infra: 'Infrastructure',
    },
    stats: {
      pages: 'Pages built',
      endpoints: 'API endpoints',
      tables: 'Database tables',
      fee: 'Platform fee',
    },
    ctaTitle: 'Interested in acquiring AiTraid?',
    ctaSub: 'Message us on WhatsApp and we will discuss the price and what the handover includes.',
    ctaBtn: 'Discuss the price',
    wa: 'Hello SiteDZ, I saw AiTraid (aitraid.com) is for sale. I would like to discuss the price.',
  },

  contact: {
    title: 'Your project,\n*our expertise*',
    sub: "Ready to build something great? Tell us about your idea and we'll get back to you within 24 hours.",
    whatsapp: 'WhatsApp',
  },

  servicePages: {},
}
