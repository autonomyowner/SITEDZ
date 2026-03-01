import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './index.css'
import HomePage from './pages/Home.jsx'
import PuzzlesPage from './pages/Puzzles.jsx'
import ARPage from './pages/AR.jsx'

/* ─── Nav ───────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          <img src="/logo.png" alt="Origawood" className="nav__logo-img" />
        </Link>

        <div className="nav__links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Collection</NavLink>
          <NavLink to="/puzzles" className={({ isActive }) => isActive ? 'nav-active' : ''}>Puzzles</NavLink>
          <NavLink to="/ar" className={({ isActive }) => isActive ? 'nav-active' : ''}>AR Preview</NavLink>
          <a href="/#craft">Craft</a>
          <a href="/#materials">Materials</a>
          <a href="/#gallery">Gallery</a>
        </div>

        <a href="/#commission" className="nav__cta">
          Commission
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
          <img src="/logo.png" alt="Origawood" className="footer__logo-img" />
        </Link>
        <div className="footer__links">
          <Link to="/">Collection</Link>
          <Link to="/puzzles">Puzzles</Link>
          <Link to="/ar">AR Preview</Link>
          <a href="/#craft">Craft</a>
          <a href="/#gallery">Gallery</a>
          <a href="mailto:hello@origawood.com">Contact</a>
        </div>
        <p className="footer__copy">© 2025 Origawood. All rights reserved.</p>
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
          <Route path="/puzzles" element={<PuzzlesPage />} />
          <Route path="/ar"      element={<ARPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
