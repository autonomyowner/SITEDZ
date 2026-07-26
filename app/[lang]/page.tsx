import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { Featured } from '@/components/sections/Featured'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { TechOffer } from '@/components/sections/TechOffer'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { getDictionary } from '@/content/locales'
import { buildMetadata } from '@/lib/seo'
import { isLocale, LOCALES } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const d = getDictionary(lang)
  return buildMetadata({
    lang,
    title: d.meta.title,
    description: d.meta.description,
  })
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const d = getDictionary(lang)

  return (
    <>
      <Hero d={d.hero} lang={lang} />
      <Featured d={d.featured} />
      <Marquee d={d.marquee} />
      <Services d={d.services} lang={lang} />
      <TechOffer d={d.techOffer} />
      <Process d={d.process} />
      <Pricing d={d.pricing} lang={lang} />
      <Projects d={d.projects} lang={lang} />
      <Contact d={d.contact} />
    </>
  )
}
