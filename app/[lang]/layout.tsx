import { notFound } from 'next/navigation'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/JsonLd'
import { getDictionary } from '@/content/locales'
import { fontClass } from '@/lib/fonts'
import { graph, organization, website } from '@/lib/jsonld'
import { LOCALES, HTML_LANG, dirFor, isLocale } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

/**
 * <html> lives here rather than in the root layout because both `lang` and
 * `dir` depend on the locale segment. Setting them server-side is the fix for
 * the old useEffect, which only applied after hydration — meaning crawlers and
 * first paint saw Arabic as lang="en" with no dir, so the entire [dir="rtl"]
 * block (including the Cairo font swap) never applied.
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const d = getDictionary(lang)

  return (
    <html lang={HTML_LANG[lang]} dir={dirFor(lang)} className={fontClass(lang)}>
      <body>
        <Nav d={d.nav} lang={lang} />
        <main>{children}</main>
        <Footer d={d.footer} lang={lang} />
        <JsonLd data={graph(organization(), website(lang))} />
      </body>
    </html>
  )
}
