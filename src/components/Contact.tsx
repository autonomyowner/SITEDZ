const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden" dir="rtl">
      {/* Semi-circular background */}
      <div className="absolute inset-0 semi-circle-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content - Text */}
          <div className="text-center md:text-right px-8 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              دعنا نتحدث
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              مستعد لتحويل عملك بموقع احترافي؟ نحب أن نناقش مشروعك ونساعدك في إنشاء حضور رقمي قوي. 
              تواصل معنا اليوم ولنبدأ في بناء قصة نجاحك معاً.
            </p>
            <button 
              className="maroon-button"
              onClick={() => window.open('/contact', '_self')}
            >
              احصل على عرض سعر
            </button>
          </div>

          {/* Left Content - Empty space for design balance */}
          <div className="hidden md:block">
            {/* This space is intentionally left empty to match the Luxora design */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 