import Link from 'next/link'
import { EMAIL, whatsappHref } from '@/content/data/site'
import type { Dictionary } from '@/content/types'
import { localePath, type Locale } from '@/lib/i18n'

export function Footer({ d, lang }: { d: Dictionary['footer']; lang: Locale }) {
  const base = localePath(lang)

  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link href={base} className="footer__logo">
          <span className="footer__logo-text">SiteDZ</span>
        </Link>
        <div className="footer__links">
          <Link href={localePath(lang, 'services')}>{d.services}</Link>
          <a href={`${base}#tech-offer`}>{d.offer}</a>
          <a href={`${base}#process`}>{d.process}</a>
          {/* No pricing link: the homepage section is gone and plans now live
              on the per-service pages, already reachable via "Services". */}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            {d.whatsapp}
          </a>
          <a href={`mailto:${EMAIL}`} dir="ltr">{EMAIL}</a>
        </div>
        <p className="footer__copy">{d.copy}</p>
      </div>
    </footer>
  )
}
