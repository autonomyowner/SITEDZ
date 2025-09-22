import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/OfferForYou'
import Pricing from './components/Pricing'
import ContactPage from './components/ContactPage'
import EcommerceTemplate from './components/EcommerceTemplate'
import ProductDetail from './components/ProductDetail'
import Footer from './components/Footer'
import FacebookPixelTracker from './components/FacebookPixelTracker'
import PixelInitializer from './components/PixelInitializer'
import PixelDebugger from './components/PixelDebugger'
import FacebookPixelTest from './components/FacebookPixelTest'
import ScrollTracker from './components/ScrollTracker'
import TimeTracker from './components/TimeTracker'
import { SpeedInsights } from '@vercel/speed-insights/react'

function App() {
  return (
    <Router>
      <PixelInitializer />
      <FacebookPixelTracker />
      <PixelDebugger />
      <FacebookPixelTest />
      <ScrollTracker />
      <TimeTracker />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" dir="rtl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ecommerce-template" element={<EcommerceTemplate />} />
          <Route path="/template/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
        <SpeedInsights />
      </div>
    </Router>
  )
}

export default App
