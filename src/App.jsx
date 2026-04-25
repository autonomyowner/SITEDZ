import { BrowserRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home.jsx'
import HomeArPage from './pages/HomeAr.jsx'

/* ─── Language detection ────────────────────────────────────── */

const LANG_KEY = 'sitedz_lang'

function detectLang() {
  if (typeof window === 'undefined') return 'ar'
  const saved = window.localStorage.getItem(LANG_KEY)
  if (saved === 'ar' || saved === 'en') return saved
  const browser = (navigator.language || navigator.userLanguage || '').toLowerCase()
  return browser.startsWith('ar') ? 'ar' : 'en'
}

function persistLang(lang) {
  try { window.localStorage.setItem(LANG_KEY, lang) } catch (_) {}
}

function RootRedirect() {
  return <Navigate to={detectLang() === 'ar' ? '/ar' : '/en'} replace />
}

/* ─── Nav ───────────────────────────────────────────────────── */

function Nav() {
  const { pathname } = useLocation()
  const isEn = pathname.startsWith('/en')

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to={isEn ? '/en' : '/ar'} className="nav__logo">
          <span className="nav__logo-text">SiteDZ</span>
        </Link>

        <div className="nav__links">
          {isEn ? (
            <>
              <a href="/en#services">Services</a>
              <a href="/en#process">Process</a>
              <a href="/en#projects">Projects</a>
              <a href="/en#contact">Contact</a>
            </>
          ) : (
            <>
              <a href="/ar#services">الخدمات</a>
              <a href="/ar#process">المنهجية</a>
              <a href="/ar#projects">المشاريع</a>
              <a href="/ar#contact">تواصل معنا</a>
            </>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <Link
            to={isEn ? '/ar' : '/en'}
            onClick={() => persistLang(isEn ? 'ar' : 'en')}
            className="nav__lang-toggle"
          >
            {isEn ? 'ع' : 'EN'}
          </Link>
          <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer" className="nav__cta">
            {isEn ? 'WhatsApp' : 'تواصل معنا'}
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

function Footer() {
  const { pathname } = useLocation()
  const isEn = pathname.startsWith('/en')

  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to={isEn ? '/en' : '/ar'} className="footer__logo">
          <span className="footer__logo-text">SiteDZ</span>
        </Link>
        <div className="footer__links">
          {isEn ? (
            <>
              <a href="/en#services">Services</a>
              <a href="/en#process">Process</a>
              <a href="/en#pricing">Pricing</a>
              <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="mailto:hello@sitedz.com">hello@sitedz.com</a>
            </>
          ) : (
            <>
              <a href="/ar#services">الخدمات</a>
              <a href="/ar#process">المنهجية</a>
              <a href="/ar#pricing">الأسعار</a>
              <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer">واتساب</a>
              <a href="mailto:hello@sitedz.com">hello@sitedz.com</a>
            </>
          )}
        </div>
        <p className="footer__copy">
          {isEn ? '© 2025 SiteDZ. All rights reserved.' : '© 2025 SiteDZ. جميع الحقوق محفوظة.'}
        </p>
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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
