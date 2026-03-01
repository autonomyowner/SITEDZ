import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home.jsx'

/* ─── Nav ───────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-text">SiteDZ</span>
        </Link>

        <div className="nav__links">
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#contact">Contact</a>
        </div>

        <a href="/#contact" className="nav__cta">
          Get a Quote
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </nav>
  )
}

/* ─── Footer ────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/" className="footer__logo">
          <span className="footer__logo-text">SiteDZ</span>
        </Link>
        <div className="footer__links">
          <a href="/#services">Services</a>
          <a href="/#process">Process</a>
          <a href="/#pricing">Pricing</a>
          <a href="https://wa.me/213697339450" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:hello@sitedz.com">hello@sitedz.com</a>
        </div>
        <p className="footer__copy">© 2025 SiteDZ. All rights reserved.</p>
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
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
