import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import HomeAr from './pages/HomeAr.jsx'
import { Nav as NavEn, Footer as FooterEn } from './components/sections.jsx'
import { Nav as NavAr, Footer as FooterAr } from './components/sections_ar.jsx'

function Shell() {
  const { pathname } = useLocation()
  const isAr = pathname.startsWith('/ar')
  return (
    <>
      {isAr ? <NavAr /> : <NavEn />}
      <main>
        <Routes>
          <Route path="/ar" element={<HomeAr />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {isAr ? <FooterAr /> : <FooterEn />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
