import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Rich } from '@/components/Rich'
import { JsonLd } from '@/components/JsonLd'
import { ArrowUpRight } from '@/components/icons'
import { getDictionary } from '@/content/locales'
import { SERVICE_IDS, servicePath } from '@/content/data/services'
import { whatsappHref } from '@/content/data/site'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbs, graph } from '@/lib/jsonld'
import { LOCALES, localePath, isLocale } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

const INDEX_COPY = {
  fr: {
    h1: 'Nos *services*',
    intro:
      "Sites vitrines, boutiques en ligne, applications mobiles et intégrations pensées pour le marché algérien. Prix affichés, délais annoncés, devis sous 24 heures.",
    metaTitle: 'Services — Création de sites web et applications en Algérie | SiteDZ',
    metaDescription:
      "Tous les services SiteDZ : site vitrine, boutique en ligne, application mobile, intégration Yalidine et ZR Express, paiement CIB et Edahabia, fiche Google. Prix en dinars.",
  },
  en: {
    h1: 'Our *services*',
    intro:
      'Business websites, online stores, mobile apps, and integrations built for the Algerian market. Published prices, stated timelines, quote within 24 hours.',
    metaTitle: 'Services — Web and mobile development in Algeria | SiteDZ',
    metaDescription:
      'All SiteDZ services: business websites, online stores, mobile apps, Yalidine and ZR Express integration, CIB and Edahabia payments, Google Business Profile.',
  },
  ar: {
    h1: '*خدماتنا*',
    intro:
      'مواقع تعريفية، متاجر إلكترونية، تطبيقات جوال وتكاملات مصممة للسوق الجزائرية. أسعار معلنة، آجال محددة، وعرض سعر خلال 24 ساعة.',
    metaTitle: 'الخدمات — تصميم المواقع والتطبيقات في الجزائر | SiteDZ',
    metaDescription:
      'كل خدمات SiteDZ: موقع تعريفي، متجر إلكتروني، تطبيق جوال، ربط ياليدين وZR Express، الدفع عبر CIB وEdahabia، بطاقة Google للأعمال.',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const c = INDEX_COPY[lang]
  return buildMetadata({
    lang,
    path: 'services',
    title: c.metaTitle,
    description: c.metaDescription,
  })
}

export default async function ServicesIndex({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const d = getDictionary(lang)
  const c = INDEX_COPY[lang]
  const base = localePath(lang)
  const available = SERVICE_IDS.filter((id) => d.servicePages[id])

  return (
    <>
      <section className="svc">
        <div className="svc__inner">
          <nav className="svc__crumbs" aria-label="Breadcrumb">
            <Link href={base}>SiteDZ</Link>
            <span>/</span>
            {d.services.label}
          </nav>

          <h1 className="svc__headline">
            <Rich text={c.h1} />
          </h1>
          <p className="svc__intro">{c.intro}</p>

          <div className="svc-index__grid">
            {available.map((id) => {
              const page = d.servicePages[id]!
              return (
                <Link
                  key={id}
                  href={localePath(lang, servicePath(lang, id))}
                  className="svc-index__card"
                >
                  <p className="svc-index__name">{page.metaTitle.split('—')[0].trim()}</p>
                  <p className="svc-index__desc">{page.intro}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="commission">
        <div className="commission__inner">
          <h2 className="commission__title">
            <Rich text={d.contact.title} />
          </h2>
          <p className="commission__sub">{d.contact.sub}</p>
          <div className="commission__actions">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              {d.contact.whatsapp}
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <JsonLd
        data={graph(
          breadcrumbs(lang, [
            { name: 'SiteDZ', path: '' },
            { name: d.services.label, path: 'services' },
          ]),
        )}
      />
    </>
  )
}
