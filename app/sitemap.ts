import type { MetadataRoute } from 'next'
import { LOCALES, absUrl, HTML_LANG, type Locale } from '@/lib/i18n'
import { SERVICE_IDS, SERVICE_SLUGS, servicePath } from '@/content/data/services'
import { getDictionary } from '@/content/locales'

/**
 * Reciprocal hreflang set for a route, including the URL's own locale. Locales
 * whose page does not exist are omitted rather than pointed at a 404.
 */
function alternates(paths: Partial<Record<Locale, string>>) {
  return {
    languages: Object.fromEntries(
      LOCALES.filter((l) => paths[l] !== undefined).map((l) => [
        HTML_LANG[l],
        absUrl(l, paths[l]!),
      ]),
    ),
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = []

  // Routes that share the same path across locales.
  const shared: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: 'services', priority: 0.8 },
  ]

  for (const { path, priority } of shared) {
    const paths = Object.fromEntries(LOCALES.map((l) => [l, path]))
    for (const lang of LOCALES) {
      out.push({
        url: absUrl(lang, path),
        priority,
        changeFrequency: 'monthly',
        alternates: alternates(paths),
      })
    }
  }

  // Service landing pages — per-locale slugs, joined by ServiceId. Only emitted
  // for locales that have actually written the copy.
  for (const id of SERVICE_IDS) {
    const present = LOCALES.filter((l) => getDictionary(l).servicePages[id])
    if (present.length === 0) continue

    const paths = Object.fromEntries(
      present.map((l) => [l, `services/${SERVICE_SLUGS[id][l]}`]),
    ) as Partial<Record<Locale, string>>

    for (const lang of present) {
      out.push({
        url: absUrl(lang, servicePath(lang, id)),
        priority: 0.9,
        changeFrequency: 'monthly',
        alternates: alternates(paths),
      })
    }
  }

  return out
}
