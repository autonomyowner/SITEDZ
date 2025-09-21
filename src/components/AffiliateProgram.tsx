const AffiliateProgram = () => {
  return (
    <section id="affiliate-program" className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
              كن شريكاً معنا
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold luxora-green-text mb-6">
              برنامج الشراكة
            </h3>
            
            {/* Partnership Program */}
            <div className="space-y-6 mb-8">
              <div className="luxora-card p-6">
                <h4 className="text-xl font-bold luxora-text mb-3">
                  برنامج الشراكة مع SITEDZ Store
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  كن شريكاً معنا واحصل على 1000 دج لكل شخص يأتي لاستخدام خدماتنا من خلالك. 
                  كلما أحضرت عملاء أكثر، كلما ربحت أكثر!
                </p>
              </div>
              
              <div className="luxora-card p-6">
                <h4 className="text-xl font-bold luxora-text mb-3">
                  كيف يعمل البرنامج؟
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  احصل على رابطك الخاص، شاركه مع أصدقائك وعملائك، 
                  واحصل على 1000 دج لكل شخص يسجل ويستخدم خدماتنا من خلال رابطك.
                </p>
              </div>
            </div>

            <button 
              className="luxora-green-button"
              onClick={() => window.open('/contact', '_self')}
            >
              انضم كشريك الآن
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-2 md:order-1">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop&crop=center"
                alt="برنامج التسويق بالعمولة"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AffiliateProgram
