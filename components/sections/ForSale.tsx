import { Rich } from '@/components/Rich'
import { ArrowUpRight } from '@/components/icons'
import {
  AITRAID_DOMAIN,
  AITRAID_HREF,
  AITRAID_STACK,
  AITRAID_STATS,
} from '@/content/data/aitraid'
import { whatsappHref } from '@/content/data/site'
import type { Dictionary } from '@/content/types'

export function ForSale({ d }: { d: Dictionary['forSale'] }) {
  return (
    <section className="forsale" id="for-sale">
      <div className="forsale__inner">
        <span className="forsale__badge">
          <span className="forsale__badge-dot" aria-hidden="true" />
          {d.badge}
        </span>

        <div className="forsale__header">
          <div>
            <p className="section-label">{d.label}</p>
            <h2 className="forsale__headline">
              <Rich text={d.headline} />
            </h2>
          </div>
          <p className="forsale__sub">{d.sub}</p>
        </div>

        <div className="forsale__body">
          <div className="forsale__panel forsale__panel--domain">
            <span className="forsale__panel-label">{d.domainLabel}</span>
            {/* dir=ltr: the domain stays Latin-script even on /ar. */}
            <a
              href={AITRAID_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="forsale__domain"
              dir="ltr"
            >
              {AITRAID_DOMAIN}
              <ArrowUpRight />
            </a>
            <p className="forsale__domain-note">{d.domainNote}</p>

            <ul className="forsale__includes">
              {d.includes.map((item) => (
                <li key={item} className="forsale__include">
                  {item}
                </li>
              ))}
            </ul>

            <div className="forsale__stats">
              {AITRAID_STATS.map((s) => (
                <div key={s.id} className="forsale__stat">
                  <span className="forsale__stat-num" dir="ltr">
                    {s.num}
                  </span>
                  <span className="forsale__stat-label">{d.stats[s.id]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="forsale__panel forsale__panel--stack">
            <span className="forsale__panel-label">{d.stackTitle}</span>
            <dl className="forsale__stack">
              {AITRAID_STACK.map((layer) => (
                <div key={layer.id} className="forsale__stack-row">
                  <dt className="forsale__stack-layer">{d.stack[layer.id]}</dt>
                  <dd className="forsale__stack-tech" dir="ltr">
                    {layer.tech}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="forsale__cta">
          <p className="forsale__cta-text">
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
