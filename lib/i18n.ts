export const LOCALES = ['fr', 'en', 'ar'] as const
export type Locale = (typeof LOCALES)[number]

/** French is primary and is served un-prefixed at the site root. */
export const DEFAULT_LOCALE: Locale = 'fr'

export const RTL: ReadonlySet<Locale> = new Set<Locale>(['ar'])

/** BCP 47 tags for <html lang>, hreflang, and og:locale. */
export const HTML_LANG: Record<Locale, string> = {
  fr: 'fr-DZ',
  en: 'en',
  ar: 'ar-DZ',
}

export const OG_LOCALE: Record<Locale, string> = {
  fr: 'fr_DZ',
  en: 'en_US',
  ar: 'ar_DZ',
}

export const SITE_URL = 'https://sitedz.com'

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function dirFor(lang: Locale): 'ltr' | 'rtl' {
  return RTL.has(lang) ? 'rtl' : 'ltr'
}

/**
 * The single place URL shape is decided. French is un-prefixed, so `/` is a
 * real prerendered French page rather than a redirect.
 *
 * Always returns a leading slash — never the empty string. A bare `#services`
 * anchor works on the homepage and silently does nothing anywhere else, so
 * `localePath('fr')` must yield `/`, not ``.
 */
export function localePath(lang: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '')
  const base = lang === DEFAULT_LOCALE ? '' : `/${lang}`
  return clean ? `${base}/${clean}` : base || '/'
}

export function absUrl(lang: Locale, path = ''): string {
  return new URL(localePath(lang, path), SITE_URL).toString()
}
