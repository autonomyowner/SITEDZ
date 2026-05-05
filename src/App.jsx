import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home.jsx'
import HomeArPage from './pages/HomeAr.jsx'
import HomeFrPage from './pages/HomeFr.jsx'

/* ─── Language detection ────────────────────────────────────── */

const LANG_KEY = 'sitedz_lang'
const LANGS = ['en', 'ar', 'fr']

function detectLang() {
  if (typeof window === 'undefined') return 'ar'
  const saved = window.localStorage.getItem(LANG_KEY)
  if (LANGS.includes(saved)) return saved
  const browser = (navigator.language || navigator.userLanguage || '').toLowerCase()
  if (browser.startsWith('ar')) return 'ar'
  if (browser.startsWith('fr')) return 'fr'
  return 'en'
}

function persistLang(lang) {
  try { window.localStorage.setItem(LANG_KEY, lang) } catch (_) {}
}

function currentLang(pathname) {
  if (pathname.startsWith('/ar')) return 'ar'
  if (pathname.startsWith('/fr')) return 'fr'
  return 'en'
}

function nextLang(lang) {
  const i = LANGS.indexOf(lang)
  return LANGS[(i + 1) % LANGS.length]
}

const LANG_LABELS = { en: 'EN', ar: 'ع', fr: 'FR' }

function RootRedirect() {
  const l = detectLang()
  return <Navigate to={`/${l}`} replace />
}

/* ─── Nav ───────────────────────────────────────────────────── */

const NAV_STRINGS = {
  en: { services: 'Services', process: 'Process', projects: 'Projects', contact: 'Contact', cta: 'WhatsApp' },
  ar: { services: 'الخدمات', process: 'المنهجية', projects: 'المشاريع', contact: 'تواصل معنا', cta: 'تواصل معنا' },
  fr: { services: 'Services', process: 'Méthode', projects: 'Projets', contact: 'Contact', cta: 'WhatsApp' },
}

function Nav() {
  const { pathname } = useLocation()
  const lang = currentLang(pathname)
  const t = NAV_STRINGS[lang]
  const base = `/${lang}`
  const next = nextLang(lang)

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to={base} className="nav__logo">
          <span className="nav__logo-text">SiteDZ</span>
        </Link>

        <div className="nav__links">
          <a href={`${base}#services`}>{t.services}</a>
          <a href={`${base}#process`}>{t.process}</a>
          <a href={`${base}#projects`}>{t.projects}</a>
          <a href={`${base}#contact`}>{t.contact}</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <Link
            to={`/${next}`}
            onClick={() => persistLang(next)}
            className="nav__lang-toggle"
            title={`Switch to ${next.toUpperCase()}`}
          >
            {LANG_LABELS[next]}
          </Link>
          <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer" className="nav__cta">
            {t.cta}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ─── Footer ────────────────────────────────────────────────── */

const FOOTER_STRINGS = {
  en: {
    services: 'Services', process: 'Process', pricing: 'Pricing', whatsapp: 'WhatsApp',
    copy: '© 2025 SiteDZ. All rights reserved.',
  },
  ar: {
    services: 'الخدمات', process: 'المنهجية', pricing: 'الأسعار', whatsapp: 'واتساب',
    copy: '© 2025 SiteDZ. جميع الحقوق محفوظة.',
  },
  fr: {
    services: 'Services', process: 'Méthode', pricing: 'Tarifs', whatsapp: 'WhatsApp',
    copy: '© 2025 SiteDZ. Tous droits réservés.',
  },
}

function Footer() {
  const { pathname } = useLocation()
  const lang = currentLang(pathname)
  const t = FOOTER_STRINGS[lang]
  const base = `/${lang}`

  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to={base} className="footer__logo">
          <span className="footer__logo-text">SiteDZ</span>
        </Link>
        <div className="footer__links">
          <a href={`${base}#services`}>{t.services}</a>
          <a href={`${base}#process`}>{t.process}</a>
          <a href={`${base}#pricing`}>{t.pricing}</a>
          <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer">{t.whatsapp}</a>
          <a href="mailto:hello@sitedz.com">hello@sitedz.com</a>
        </div>
        <p className="footer__copy">{t.copy}</p>
      </div>
    </footer>
  )
}

/* ─── App ───────────────────────────────────────────────────── */

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/"   element={<RootRedirect />} />
          <Route path="/ar" element={<HomeArPage />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="/fr" element={<HomeFrPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
