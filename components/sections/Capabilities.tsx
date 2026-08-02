import { CAPABILITIES } from '@/content/data/capabilities'
import { CAPABILITY_ICONS, ArrowUpRight } from '@/components/icons'
import { whatsappHref } from '@/content/data/site'
import type { Dictionary } from '@/content/types'

export function Capabilities({ d }: { d: Dictionary['capabilities'] }) {
  return (
    <div className="caps__grid" id="capabilities">
      {CAPABILITIES.map((cap) => {
        const c = d.items[cap.id]
        return (
          <article key={cap.id} className="cap-card">
            <span className="cap-card__icon">{CAPABILITY_ICONS[cap.icon]}</span>
            <span className="cap-card__num">{cap.num}</span>
            <h3 className="cap-card__name">{c.name}</h3>
            <p className="cap-card__desc">{c.desc}</p>
            <a
              // Prefilled per card so the first WhatsApp message already says
              // which discipline the lead is asking about.
              href={whatsappHref(d.wa.replace('{service}', c.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="cap-card__cta"
            >
              {d.cta}
              <ArrowUpRight />
            </a>
          </article>
        )
      })}
    </div>
  )
}
