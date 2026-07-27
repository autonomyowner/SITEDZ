import type { AitraidStatId, StackLayerId } from './data/aitraid'
import type { ProjectId } from './data/projects'
import type { HomeServiceId, ServiceId } from './data/services'
import type { PlanId } from './data/pricing'
import type { OfferIconId } from '@/components/icons'

/**
 * Copy strings support a two-token mini-markup, rendered by <Rich>:
 *   \n        → <br />
 *   *word*    → <em>word</em>              (Cormorant italic — the brand device)
 *   _word_    → <span class="hero__underline">word</span>
 *
 * Dictionaries hold strings only, never JSX. That keeps them diffable and one
 * JSON.stringify away from a translation service, and it handles the fact that
 * English and French put the <em> on different words in the same sentence.
 */
export type Rich = string

export interface TechOfferCopy {
  label: string
  badge: string
  headline: Rich
  sub: string
  items: { icon: OfferIconId; name: string; desc: string }[]
  ctaTitle: string
  ctaSub: string
  ctaBtn: string
  /** Prefilled WhatsApp message. */
  wa: string
}

export interface ForSaleCopy {
  label: string
  badge: string
  headline: Rich
  sub: string
  /** Sits above the domain wordmark, e.g. "Domain included". */
  domainLabel: string
  domainNote: string
  /** Bullet list of what the buyer receives. */
  includes: string[]
  stackTitle: string
  /** Every layer must be covered — adding one breaks all three locales. */
  stack: Record<StackLayerId, string>
  stats: Record<AitraidStatId, string>
  ctaTitle: string
  ctaSub: string
  ctaBtn: string
  /** Prefilled WhatsApp message. */
  wa: string
}

export interface ServicePageCopy {
  metaTitle: string
  metaDescription: string
  h1: Rich
  intro: string
  /** Body paragraphs, rendered in order. */
  body: string[]
  deliverablesTitle: string
  deliverables: { name: string; desc: string }[]
  faqTitle: string
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaSub: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
    /**
     * Latin-script line for the generated OG card. Kept separate from `title`
     * because next/og's text shaper cannot render Arabic without an explicitly
     * supplied Arabic font file, which would mean a build-time font fetch.
     */
    ogLine: string
  }
  nav: {
    services: string
    offer: string
    process: string
    projects: string
    contact: string
    cta: string
    switchTo: string
  }
  footer: {
    services: string
    offer: string
    process: string
    pricing: string
    whatsapp: string
    copy: string
  }
  hero: {
    /** Two lines, one per .hero__line; stagger is applied by the component. */
    lines: [Rich, Rich]
    tagline: string
    ctaPrimary: string
    ctaGhost: string
  }
  featured: {
    label: string
    title: Rich
    stats: { num: string; label: string }[]
  }
  marquee: {
    ariaLabel: string
  }
  services: {
    label: string
    items: Record<HomeServiceId, { tag: string; name: string; desc: string }>
  }
  techOffer: TechOfferCopy
  process: {
    label: string
    headline: Rich
    body: [string, string]
    steps: { num: string; title: string; desc: string }[]
  }
  /**
   * Non-optional on purpose. /ar silently shipped without a pricing section
   * for months; making this required means that can no longer compile.
   */
  pricing: {
    headline: Rich
    sub: string
    /** Every plan must be covered — adding a tier breaks all three locales. */
    plans: Record<PlanId, { tag: string; desc: string }>
    /** Suffix on recurring tiers, e.g. "/mois". */
    perMonth: string
  }
  projects: {
    label: string
    headline: Rich
    awardTitle: string
    awardSub: string
    awardBadge: string
    playstore: string
    /** Every project must be covered — adding one breaks all three locales. */
    items: Record<ProjectId, { tag: string; desc: string }>
  }
  forSale: ForSaleCopy
  contact: {
    title: Rich
    sub: string
    whatsapp: string
  }
  /**
   * SEO landing pages. Partial while translations are still landing — a locale
   * that lacks a page is omitted from hreflang rather than pointing at a 404.
   */
  servicePages: Partial<Record<ServiceId, ServicePageCopy>>
}
