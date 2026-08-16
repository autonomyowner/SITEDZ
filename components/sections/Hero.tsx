import Image from 'next/image'
import heroImage from '@/public/hero.webp'
import { ArrowUpRight } from '@/components/icons'
import type { Dictionary } from '@/content/types'
import { localePath, type Locale } from '@/lib/i18n'

/** Drops the *em* / _underline_ mini-markup so the copy reads clean to a screen reader. */
const stripMarks = (line: string) => line.replace(/[*_\n]/g, ' ').replace(/\s+/g, ' ').trim()

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
        {/* The artwork carries the wordmark and tagline, so the only visible copy
            here is the CTA pair. The h1 stays for a11y/SEO, visually hidden. */}
        <h1 className="sr-only">{d.lines.map((line) => stripMarks(line)).join(' ')}</h1>
        <div className="hero__inner">
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
    </section>
  )
}
