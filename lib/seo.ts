import type { Metadata } from 'next'
import { LOCALES, absUrl, HTML_LANG, OG_LOCALE, type Locale } from './i18n'

type BuildMetadataArgs = {
  lang: Locale
  /** Locale-relative path, e.g. `services/creation-site-web-algerie`. */
  path?: string
  /**
   * Per-locale paths for hreflang. Omit a locale entirely when that page does
   * not exist yet — pointing hreflang at a 404 is a self-inflicted Search
   * Console error. Defaults to the same path in every locale.
   */
  alternates?: Partial<Record<Locale, string>>
  title: string
  description: string
  type?: 'website' | 'article'
  publishedTime?: string
  noindex?: boolean
}

export function buildMetadata({
  lang,
  path = '',
  alternates,
  title,
  description,
  type = 'website',
  publishedTime,
  noindex,
}: BuildMetadataArgs): Metadata {
  const canonical = absUrl(lang, path)

  const map: Partial<Record<Locale, string>> =
    alternates ?? Object.fromEntries(LOCALES.map((l) => [l, path]))

  const languages: Record<string, string> = {}
  for (const l of LOCALES) {
    const p = map[l]
    if (p === undefined) continue
    languages[HTML_LANG[l]] = absUrl(l, p)
  }
  // French is x-default: it is the primary locale and lives at the root.
  if (map.fr !== undefined) languages['x-default'] = absUrl('fr', map.fr)

  return {
    title,
    description,
    alternates: { canonical, languages },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: 'SiteDZ',
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang && map[l] !== undefined).map(
        (l) => OG_LOCALE[l],
      ),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
