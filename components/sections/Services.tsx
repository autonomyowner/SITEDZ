import { HOME_SERVICES } from '@/content/data/services'
import type { Dictionary } from '@/content/types'
import { localePath, type Locale } from '@/lib/i18n'

export function Services({ d, lang }: { d: Dictionary['services']; lang: Locale }) {
  const base = localePath(lang)
  return (
    <section className="collection" id="services">
      <p className="section-label">{d.label}</p>
      <div className="services__grid">
        {HOME_SERVICES.map((s) => {
          const c = d.items[s.id]
          return (
            <a key={s.id} href={`${base}#contact`} className="service-card">
              <span className="service-card__num">{s.num}</span>
              <span className="service-card__tag">{c.tag}</span>
              <h3 className="service-card__name">{c.name}</h3>
              <p className="service-card__desc">{c.desc}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
