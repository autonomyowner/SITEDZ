import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-amber-200 shadow-sm" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="luxora-text font-bold text-xl sm:text-2xl">SITEDZ Store</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-amber-600 border-b-2 border-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              الرئيسية
            </Link>
            <Link 
              to="/services" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-amber-600 border-b-2 border-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              الخدمات
            </Link>
            <Link 
              to="/pricing" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/pricing' ? 'text-amber-600 border-b-2 border-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              الأسعار
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-amber-600 border-b-2 border-amber-600' : 'luxora-text hover:text-amber-600'}`}
            >
              اتصل بنا
            </Link>
            <button 
              className="maroon-button text-sm px-4 py-2"
              onClick={() => window.open('/contact', '_self')}
            >
              احصل على عرض سعر
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="luxora-text hover:text-amber-600 transition-colors p-2"
            >
              <span className="sr-only">فتح القائمة</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${location.pathname === '/' ? 'text-amber-600 bg-amber-50' : 'luxora-text hover:text-amber-600 hover:bg-amber-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${location.pathname === '/services' ? 'text-amber-600 bg-amber-50' : 'luxora-text hover:text-amber-600 hover:bg-amber-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                الخدمات
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${location.pathname === '/pricing' ? 'text-amber-600 bg-amber-50' : 'luxora-text hover:text-amber-600 hover:bg-amber-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                الأسعار
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 text-base font-medium transition-colors rounded-md ${location.pathname === '/contact' ? 'text-amber-600 bg-amber-50' : 'luxora-text hover:text-amber-600 hover:bg-amber-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
              <div className="pt-2">
                <button 
                  className="block w-full maroon-button text-center py-3"
                  onClick={() => {
                    window.open('/contact', '_self')
                    setIsMenuOpen(false)
                  }}
                >
                  احصل على عرض سعر
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 