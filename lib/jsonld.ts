import { SITE_URL, absUrl, HTML_LANG, type Locale } from './i18n'
import {
  ADDRESS,
  EMAIL,
  FOUNDED_YEAR,
  LEGAL_NAME,
  PHONE_E164,
  whatsappHref,
} from '@/content/data/site'
import { PLANS, formatDZD } from '@/content/data/pricing'

export const ORG_ID = `${SITE_URL}/#organization`
export const SITE_ID = `${SITE_URL}/#website`

/**
 * Emitted ONCE, from app/[lang]/layout.tsx. Every other page references it by
 * @id rather than repeating the node — repeating a full Organization on 60
 * pages dilutes entity consolidation.
 */
export function organization() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: LEGAL_NAME,
    url: SITE_URL,
    description:
      'Agence web algérienne : sites vitrines, boutiques en ligne et applications mobiles en français, arabe et anglais.',
    telephone: PHONE_E164,
    email: EMAIL,
    foundingDate: FOUNDED_YEAR,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.region,
      addressCountry: ADDRESS.country,
    },
    areaServed: { '@type': 'Country', name: 'Algeria' },
    priceRange: `${formatDZD(PLANS[0].amountDZD)}–${formatDZD(PLANS[1].amountDZD)}`,
    currenciesAccepted: 'DZD',
    knowsLanguage: ['fr', 'ar', 'en'],
    sameAs: [whatsappHref()],
  }
}

export function website(lang: Locale) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: SITE_URL,
    name: LEGAL_NAME,
    inLanguage: HTML_LANG[lang],
    publisher: { '@id': ORG_ID },
  }
}

export function offerCatalog(lang: Locale, names: Record<string, string>) {
  return {
    '@type': 'OfferCatalog',
    name: 'Tarifs SiteDZ',
    url: absUrl(lang, 'tarifs'),
    itemListElement: PLANS.map((plan) => ({
      '@type': 'Offer',
      name: names[plan.id],
      price: 'amountDZD' in plan ? plan.amountDZD : plan.monthlyDZD,
      priceCurrency: 'DZD',
      availability: 'https://schema.org/InStock',
      seller: { '@id': ORG_ID },
    })),
  }
}

export function service({
  lang,
  name,
  description,
  path,
}: {
  lang: Locale
  name: string
  description: string
  path: string
}) {
  return {
    '@type': 'Service',
    name,
    description,
    url: absUrl(lang, path),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Algeria' },
    inLanguage: HTML_LANG[lang],
  }
}

/**
 * The capability grid on /services as an ItemList of Services. These are
 * disciplines with no page of their own, so each item carries the /services
 * URL rather than a dead link.
 */
export function serviceList(
  lang: Locale,
  items: { name: string; desc: string }[],
) {
  return {
    '@type': 'ItemList',
    url: absUrl(lang, 'services'),
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.desc,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: 'Algeria' },
        inLanguage: HTML_LANG[lang],
      },
    })),
  }
}

export function faqPage(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function breadcrumbs(lang: Locale, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absUrl(lang, item.path),
    })),
  }
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
