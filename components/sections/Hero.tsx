import type { CSSProperties } from 'react'
import Image from 'next/image'
import heroImage from '@/public/hero.png'
import { Rich } from '@/components/Rich'
import { ArrowUpRight } from '@/components/icons'
import type { Dictionary } from '@/content/types'
import { localePath, type Locale } from '@/lib/i18n'

export function Hero({ d, lang }: { d: Dictionary['hero']; lang: Locale }) {
  const base = localePath(lang)
  return (
    <section className="hero">
      <div className="hero__frame">
        {/* Static import gives Next the intrinsic size + a blur placeholder, and
            `priority` keeps this LCP image out of the lazy-load queue. */}
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="hero__bg"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <div>
            <h1 className="hero__headline">
              {d.lines.map((line, i) => (
                <span
                  key={i}
                  className="hero__line"
                  style={{ '--d': `${i * 120}ms` } as CSSProperties}
                >
                  <Rich text={line} />
                </span>
              ))}
            </h1>
          </div>
          <div className="hero__tagline-col">
            <p className="hero__tagline">{d.tagline}</p>
            <div className="hero__actions">
              <a href={`${base}#contact`} className="hero__btn-primary">
                {d.ctaPrimary}
                <ArrowUpRight />
              </a>
              <a href={`${base}#services`} className="hero__btn-ghost">
                {d.ctaGhost}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
