'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from '@/components/icons'
import { whatsappHref } from '@/content/data/site'
import type { Dictionary } from '@/content/types'
import { LOCALES, localePath, type Locale } from '@/lib/i18n'

const LANG_LABELS: Record<Locale, string> = { en: 'EN', ar: 'ع', fr: 'FR' }

function nextLang(lang: Locale): Locale {
  return LOCALES[(LOCALES.indexOf(lang) + 1) % LOCALES.length]
}

export function Nav({ d, lang }: { d: Dictionary['nav']; lang: Locale }) {
  // localePath() always yields a leading slash, so these resolve from any page
  // — a bare `#services` would silently do nothing outside the homepage.
  const base = localePath(lang)
  const next = nextLang(lang)

  // Transparent while the hero artwork is behind the bar; solid once the page
  // scrolls, so the links never sit on top of moving content.
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${solid ? ' nav--solid' : ''}`}>
      <div className="nav__inner">
        <div className="nav__links">
          <Link href={localePath(lang, 'services')}>{d.services}</Link>
          <a href={`${base}#tech-offer`} className="nav__link-accent">{d.offer}</a>
          <a href={`${base}#process`}>{d.process}</a>
          <a href={`${base}#projects`}>{d.projects}</a>
          <a href={`${base}#contact`}>{d.contact}</a>
        </div>

        <Link href={base} className="nav__logo">
          <span className="nav__logo-text">SiteDZ</span>
        </Link>

        <div className="nav__end">
          <Link
            href={localePath(next)}
            className="nav__lang-toggle"
            title={d.switchTo}
            hrefLang={next}
          >
            {LANG_LABELS[next]}
          </Link>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="nav__cta"
          >
            {d.cta}
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </nav>
  )
}
