const MarketingTools = () => {
  return (
    <section id="marketing-tools" className="py-16 px-4 luxora-bg" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content - Image */}
          <div className="relative order-2 md:order-1">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop&crop=center"
                alt="أدوات التسويق الرقمي"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
          </div>

          {/* Left Content */}
          <div className="text-center md:text-right order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
              ضاعف فرصك في النجاح
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold luxora-green-text mb-6">
              أدوات التسويق
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              هل تريد معرفة كيفية تحقيق الربح من موقعك الإلكتروني؟ 
              استفد من أهم وأقوى أدوات التسويق وضاعف فرصك للنجاح في التجارة الإلكترونية 
              بربط موقعك مع SITEDZ Store بكل من:
            </p>
            
            {/* Marketing Tools List */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="flex items-center justify-center md:justify-end">
                <span className="text-gray-600 text-lg">Facebook, Facebook Pixel & Messenger</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <span className="text-gray-600 text-lg">Instagram & Twitter & TikTok</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <span className="text-gray-600 text-lg">WhatsApp & Viber</span>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <span className="text-gray-600 text-lg">Google Tag Manager & Google Analytics</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-semibold">
              لتعزيز مكانتك في محركات البحث.
            </p>

            <button 
              className="luxora-green-button"
              onClick={() => window.open('/contact', '_self')}
            >
              ابدأ التسويق الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketingTools
