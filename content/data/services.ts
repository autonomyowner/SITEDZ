import type { Locale } from '@/lib/i18n'
import type { PlanId } from './pricing'

/**
 * The four homepage service cards. These are the top-level taxonomy, not the
 * SEO landing pages — see SERVICE_SLUGS below for those.
 */
export const HOME_SERVICES = [
  { id: 'web', num: '01' },
  { id: 'mobile', num: '02' },
  { id: 'design', num: '03' },
  { id: 'bots', num: '04' },
] as const

export type HomeServiceId = (typeof HOME_SERVICES)[number]['id']

/**
 * SEO landing pages. Slugs are per-locale on purpose — the French slug IS the
 * query Algerian buyers type, and that is where the ranking value sits. The
 * ServiceId is the stable join key used by dictionaries, hreflang and sitemap.
 */
export const SERVICE_SLUGS = {
  vitrine: {
    fr: 'creation-site-web-algerie',
    en: 'business-website-algeria',
    ar: 'tasmim-mawaqi-aljazair',
  },
  boutique: {
    fr: 'boutique-en-ligne-algerie',
    en: 'online-store-algeria',
    ar: 'matjar-electroni-aljazair',
  },
  mobile: {
    fr: 'application-mobile-algerie',
    en: 'mobile-app-development-algeria',
    ar: 'tatwir-tatbiqat-jawal',
  },
  livraison: {
    fr: 'integration-livraison-yalidine-zr-express',
    en: 'delivery-integration-yalidine-zr-express',
    ar: 'rabt-sharikat-tawsil',
  },
  paiement: {
    fr: 'paiement-en-ligne-cib-edahabia',
    en: 'online-payment-cib-edahabia',
    ar: 'dafe-electroni-cib-edahabia',
  },
  bilingue: {
    fr: 'site-bilingue-francais-arabe',
    en: 'bilingual-french-arabic-website',
    ar: 'mawqi-thunai-allugha',
  },
  gmb: {
    fr: 'fiche-google-maps-etablissement',
    en: 'google-business-profile-algeria',
    ar: 'bitaqat-google-maps',
  },
  refonte: {
    fr: 'refonte-site-web',
    en: 'website-redesign',
    ar: 'iadat-tasmim-mawqi',
  },
  maintenance: {
    fr: 'maintenance-site-web',
    en: 'website-maintenance',
    ar: 'siyanat-almawqi',
  },
  techsellers: {
    fr: 'site-web-vendeurs-informatique',
    en: 'tech-sellers-website',
    ar: 'mawqi-tujjar-almalumatiya',
  },
} as const

export type ServiceId = keyof typeof SERVICE_SLUGS

export const SERVICE_IDS = Object.keys(SERVICE_SLUGS) as ServiceId[]

/** Which price tier each landing page anchors to, if any. */
export const SERVICE_PLAN: Partial<Record<ServiceId, PlanId>> = {
  vitrine: 'starter',
  boutique: 'boutique',
  refonte: 'business',
  maintenance: 'care',
  techsellers: 'boutique',
}

export function serviceIdFromSlug(lang: Locale, slug: string): ServiceId | null {
  return SERVICE_IDS.find((id) => SERVICE_SLUGS[id][lang] === slug) ?? null
}

/** Locale-relative path for a service page, e.g. `services/creation-site-web-algerie`. */
export function servicePath(lang: Locale, id: ServiceId): string {
  return `services/${SERVICE_SLUGS[id][lang]}`
}
