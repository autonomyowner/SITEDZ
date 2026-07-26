import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Rich } from '@/components/Rich'
import { JsonLd } from '@/components/JsonLd'
import { ArrowUpRight, OFFER_ICONS } from '@/components/icons'
import { getDictionary } from '@/content/locales'
import {
  SERVICE_IDS,
  SERVICE_SLUGS,
  SERVICE_PLAN,
  serviceIdFromSlug,
  servicePath,
} from '@/content/data/services'
import { PLANS, formatDZD } from '@/content/data/pricing'
import { whatsappHref } from '@/content/data/site'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbs, faqPage, graph, service } from '@/lib/jsonld'
import { LOCALES, localePath, isLocale, type Locale } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    SERVICE_IDS.filter((id) => getDictionary(lang).servicePages[id]).map((id) => ({
      lang,
      slug: SERVICE_SLUGS[id][lang],
    })),
  )
}

/**
 * hreflang for a service page. Slugs differ per locale, so the map must be
 * computed from the shared ServiceId — and locales that have not written the
 * copy yet are omitted rather than pointed at a 404.
 */
function alternatesFor(id: ReturnType<typeof serviceIdFromSlug>) {
  if (!id) return undefined
  const map: Partial<Record<Locale, string>> = {}
  for (const l of LOCALES) {
    if (getDictionary(l).servicePages[id]) map[l] = servicePath(l, id)
  }
  return map
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const id = serviceIdFromSlug(lang, slug)
  const copy = id ? getDictionary(lang).servicePages[id] : undefined
  if (!id || !copy) return {}

  return buildMetadata({
    lang,
    path: servicePath(lang, id),
    alternates: alternatesFor(id),
    title: copy.metaTitle,
    description: copy.metaDescription,
  })
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()

  const id = serviceIdFromSlug(lang, slug)
  const d = getDictionary(lang)
  const copy = id ? d.servicePages[id] : undefined
  if (!id || !copy) notFound()

  const base = localePath(lang)
  const planId = SERVICE_PLAN[id]
  const plan = planId ? PLANS.find((p) => p.id === planId) : undefined
  const planCopy = planId ? d.pricing.plans[planId] : undefined

  return (
    <>
      <section className="svc">
        <div className="svc__inner">
          <nav className="svc__crumbs" aria-label="Breadcrumb">
            <Link href={base}>SiteDZ</Link>
            <span>/</span>
            <Link href={localePath(lang, 'services')}>{d.services.label}</Link>
          </nav>

          <h1 className="svc__headline">
            <Rich text={copy.h1} />
          </h1>
          <p className="svc__intro">{copy.intro}</p>

          <div className="svc__body">
            {copy.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {plan && planCopy && (
            <div className="svc__price">
              <span className="svc__price-label">{planCopy.tag}</span>
              <span className="svc__price-amount" dir="ltr">
                {'amountDZD' in plan ? formatDZD(plan.amountDZD) : formatDZD(plan.monthlyDZD)}
                {!('amountDZD' in plan) && d.pricing.perMonth}
              </span>
              <span className="svc__price-note">{planCopy.desc}</span>
            </div>
          )}

          <div className="svc__block">
            <h2 className="svc__block-title">{copy.deliverablesTitle}</h2>
            <div className="techoffer__grid">
              {copy.deliverables.map((item, i) => (
                <div key={item.name} className="offer-card">
                  <span className="offer-card__icon">
                    {Object.values(OFFER_ICONS)[i % 6]}
                  </span>
                  <h3 className="offer-card__name">{item.name}</h3>
                  <p className="offer-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="svc__block">
            <h2 className="svc__block-title">{copy.faqTitle}</h2>
            <div className="svc__faq">
              {copy.faq.map((item) => (
                <div key={item.q} className="svc__faq-item">
                  <h3 className="svc__faq-q">{item.q}</h3>
                  <p className="svc__faq-a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="commission">
        <div className="commission__inner">
          <h2 className="commission__title">
            <Rich text={copy.ctaTitle} />
          </h2>
          <p className="commission__sub">{copy.ctaSub}</p>
          <div className="commission__actions">
            <a
              href={whatsappHref(copy.metaTitle)}
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
          service({
            lang,
            name: copy.metaTitle,
            description: copy.metaDescription,
            path: servicePath(lang, id),
          }),
          faqPage(copy.faq),
          breadcrumbs(lang, [
            { name: 'SiteDZ', path: '' },
            { name: d.services.label, path: 'services' },
            { name: copy.metaTitle, path: servicePath(lang, id) },
          ]),
        )}
      />
    </>
  )
}
