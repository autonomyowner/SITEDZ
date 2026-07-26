import { Rich } from '@/components/Rich'
import { ArrowUpRight, OFFER_ICONS } from '@/components/icons'
import { whatsappHref } from '@/content/data/site'
import type { Dictionary } from '@/content/types'

export function TechOffer({ d }: { d: Dictionary['techOffer'] }) {
  return (
    <section className="techoffer" id="tech-offer">
      <div className="techoffer__inner">
        <span className="techoffer__badge">
          <span className="techoffer__badge-dot" aria-hidden="true" />
          {d.badge}
        </span>

        <div className="techoffer__header">
          <div>
            <p className="section-label">{d.label}</p>
            <h2 className="techoffer__headline">
              <Rich text={d.headline} />
            </h2>
          </div>
          <p className="techoffer__sub">{d.sub}</p>
        </div>

        <div className="techoffer__grid">
          {d.items.map((item) => (
            <div key={item.name} className="offer-card">
              <span className="offer-card__icon">{OFFER_ICONS[item.icon]}</span>
              <h3 className="offer-card__name">{item.name}</h3>
              <p className="offer-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="techoffer__cta">
          <p className="techoffer__cta-text">
            {d.ctaTitle}
            <span>{d.ctaSub}</span>
          </p>
          <a
            href={whatsappHref(d.wa)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            {d.ctaBtn}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
