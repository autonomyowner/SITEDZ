const Footer = () => {
  return (
    <footer className="luxora-bg border-t border-amber-200" dir="rtl">
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-right mb-6 md:mb-0">
            <h3 className="text-3xl font-bold luxora-text mb-2">SITEDZ Store</h3>
            <p className="text-gray-600">الحل الأمثل للتجارة الإلكترونية في الجزائر</p>
          </div>
          <div className="text-center md:text-left">
            <p className="luxora-text mb-4">الاثنين إلى الجمعة من 9 صباحاً إلى 6 مساءً</p>
            <button 
              className="maroon-button"
              onClick={() => window.open('/contact', '_self')}
            >
              احصل على عرض سعر
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-amber-200 pt-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="https://www.instagram.com/site.dz.store/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white text-xs font-bold">IG</span>
              </a>
              <a href="https://www.facebook.com/sitedz.store/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-white text-xs font-bold">FB</span>
              </a>
              <a href="https://wa.me/213797339451" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <span className="text-white text-xs font-bold">W</span>
              </a>
            </div>
            <div className="text-gray-600 text-sm">
              واتساب: 0797339451
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 