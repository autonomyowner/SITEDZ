import Typewriter from './Typewriter'

const Hero = () => {
  const typewriterWords = [
    "متاجر إلكترونية",
    "مواقع تجارية", 
    "صفحات هبوط",
    "حلول رقمية",
    "منصات بيع"
  ]

  return (
    <section id="home" className="py-16 px-4 luxora-bg" dir="rtl">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            الحل الأمثل للتجارة الإلكترونية في الجزائر
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold luxora-text mb-6 leading-tight">
            هل تريد الاحتراف في التجارة الإلكترونية
            <span className="block luxora-green-text">
              <Typewriter 
                words={typewriterWords}
                typeSpeed={150}
                deleteSpeed={75}
                pauseTime={2500}
                className="inline-block"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            منصة SITEDZ Store توفر لكم كل الوسائل التي تحتاج إليها لتسهيل بيع منتجاتك وتعزيز مصداقيتك أون لاين وإنشاء متجر إلكتروني احترافي. 
            بدون أي معرفة في البرمجة - إيميل، كلمة مرور، وانطلق!
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center luxora-card p-6">
              <div className="text-2xl md:text-3xl font-bold luxora-green-text mb-2">سهولة الاستعمال</div>
              <div className="text-gray-600 text-sm md:text-base">موقعك جاهز في 5 أيام بدون برمجة</div>
            </div>
            <div className="text-center luxora-card p-6">
              <div className="text-2xl md:text-3xl font-bold luxora-green-text mb-2">ربح الوقت</div>
              <div className="text-gray-600 text-sm md:text-base">إدارة تلقائية للطلبات والمخزون</div>
            </div>
            <div className="text-center luxora-card p-6">
              <div className="text-2xl md:text-3xl font-bold luxora-green-text mb-2">دعم محلي</div>
              <div className="text-gray-600 text-sm md:text-base">فريق جزائري، دعم بالعربية والفرنسية</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button"
              onClick={() => window.open('/contact', '_self')}
            >
              سجل مجاناً
            </button>
            <button 
              className="luxora-button"
              onClick={() => window.open('/pricing', '_self')}
            >
              عرض الأسعار
            </button>
          </div>

          {/* Speed & Support Promises */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
              جاهز في 5 أيام
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              دعم واتساب 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 