import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home.jsx'
import HomeArPage from './pages/HomeAr.jsx'

/* ─── Nav ───────────────────────────────────────────────────── */

function Nav() {
  const { pathname } = useLocation()
  const isAr = pathname.startsWith('/ar')

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to={isAr ? '/ar' : '/'} className="nav__logo">
          <span className="nav__logo-text">SiteDZ</span>
        </Link>

        <div className="nav__links">
          {isAr ? (
            <>
              <a href="/ar#services">الخدمات</a>
              <a href="/ar#process">المنهجية</a>
              <a href="/ar#pricing">الأسعار</a>
              <a href="/ar#projects">المشاريع</a>
              <a href="/ar#contact">تواصل معنا</a>
            </>
          ) : (
            <>
              <a href="/#services">Services</a>
              <a href="/#process">Process</a>
              <a href="/#pricing">Pricing</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <Link to={isAr ? '/' : '/ar'} className="nav__lang-toggle">
            {isAr ? 'EN' : 'ع'}
          </Link>
          <a href={isAr ? '/ar#contact' : '/#contact'} className="nav__cta">
            {isAr ? 'احصل على عرض' : 'Get a Quote'}
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
  const isAr = pathname.startsWith('/ar')

  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to={isAr ? '/ar' : '/'} className="footer__logo">
          <span className="footer__logo-text">SiteDZ</span>
        </Link>
        <div className="footer__links">
          {isAr ? (
            <>
              <a href="/ar#services">الخدمات</a>
              <a href="/ar#process">المنهجية</a>
              <a href="/ar#pricing">الأسعار</a>
              <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer">واتساب</a>
              <a href="mailto:hello@sitedz.com">hello@sitedz.com</a>
            </>
          ) : (
            <>
              <a href="/#services">Services</a>
              <a href="/#process">Process</a>
              <a href="/#pricing">Pricing</a>
              <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="mailto:hello@sitedz.com">hello@sitedz.com</a>
            </>
          )}
        </div>
        <p className="footer__copy">
          {isAr ? '© 2025 SiteDZ. جميع الحقوق محفوظة.' : '© 2025 SiteDZ. All rights reserved.'}
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
          <Route path="/"   element={<HomePage />} />
          <Route path="/ar" element={<HomeArPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
