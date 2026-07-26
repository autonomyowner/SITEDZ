import { Rich } from '@/components/Rich'
import { ArrowUpRight } from '@/components/icons'
import { PHONE_DISPLAY, PHONE_E164, whatsappHref } from '@/content/data/site'
import type { Dictionary } from '@/content/types'

export function Contact({ d }: { d: Dictionary['contact'] }) {
  return (
    <section className="commission" id="contact">
      <div className="commission__inner">
        <h2 className="commission__title">
          <Rich text={d.title} />
        </h2>
        <p className="commission__sub">{d.sub}</p>
        <div className="commission__actions">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
          >
            {d.whatsapp}
            <ArrowUpRight />
          </a>
          <a href={`tel:${PHONE_E164}`} className="commission__phone" dir="ltr">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
