import { Figtree, Cormorant, Cairo } from 'next/font/google'
import type { Locale } from './i18n'

export const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

// Italic is required — the brand's accent device is a Cormorant-italic <em>.
export const cormorant = Cormorant({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

// Arabic subset only. Figtree still covers Latin glyphs on /ar.
export const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

/** Cairo is attached only on the Arabic locale, never on /fr or /en. */
export function fontClass(lang: Locale): string {
  return [figtree.variable, cormorant.variable, lang === 'ar' && cairo.variable]
    .filter(Boolean)
    .join(' ')
}
