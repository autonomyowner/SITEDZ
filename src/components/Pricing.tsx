import { useEffect } from 'react'
import PayPalCheckout from './PayPalCheckout'
import { trackViewContent, trackAddToCart, trackInitiateCheckout, trackButtonClick, trackSchedule } from '../utils/facebookPixel'

const Pricing = () => {
  useEffect(() => {
    // Track that user viewed the pricing page
    trackViewContent('Pricing Page', 'pricing_page')
  }, [])

  const handlePlanClick = (planName: string, planPrice: string) => {
    const priceValue = parseFloat(planPrice.replace(',', ''))
    trackAddToCart(planName, priceValue, 'DZD')
    trackButtonClick(`Select ${planName} Plan`, 'pricing_plans')
  }

  const handlePayPalClick = (planName: string, amount: string) => {
    trackInitiateCheckout(planName, parseFloat(amount), 'USD')
    trackButtonClick(`PayPal Checkout ${planName}`, 'pricing_plans')
  }
  const plans = [
    {
      name: "المتجر المجاني",
      price: "6,000",
      currency: "DA",
      period: "دفعة واحدة",
      description: "للمبتدئين في التجارة الإلكترونية",
      features: [
        "متجر إلكتروني كامل",
        "تصميم احترافي ومتجاوب",
        "اسم دومين لمدة 3 سنوات",
        "ربط مع وسائل التواصل الاجتماعي",
        "دعم فني باللغة العربية",
        "تحديثات أمنية مستمرة",
        "دعم لمدة شهر واحد"
      ],
      popular: false,
      cta: "ابدأ الآن",
      color: "border-blue-500"
    },
    {
      name: "المتجر المتقدم",
      price: "25,000",
      currency: "DA",
      period: "دفعة واحدة",
      description: "الأفضل للشركات النامية",
      features: [
        "كل ما في المتجر المجاني",
        "اسم دومين مخصص",
        "ربط مع Facebook Pixel و Instagram",
        "تحليلات متقدمة للمبيعات",
        "نظام دفع آمن ومتعدد",
        "إدارة المخزون التلقائية",
        "تسويق بالعمولة",
        "دعم لمدة 3 أشهر"
      ],
      popular: true,
      cta: "طور متجري",
      color: "border-yellow-500"
    },
    {
      name: "المتجر الاحترافي",
      price: "50,000",
      currency: "DA",
      period: "دفعة واحدة",
      description: "الحل الكامل للشركات الكبيرة",
      features: [
        "كل ما في المتجر المتقدم",
        "صفحات هبوط مخصصة",
        "ربط مع Google Analytics و Tag Manager",
        "نظام حجز متقدم",
        "دعم متعدد اللغات",
        "أمان متقدم لحماية البيانات",
        "تكامل مع أدواتك الحالية",
        "مراقبة الأداء والتحسين",
        "نسخ احتياطية تلقائية",
        "دعم أولوية - مساعدة سريعة",
        "دعم لمدة 6 أشهر"
      ],
      popular: false,
      cta: "هيمن على السوق",
      color: "border-purple-500"
    }
  ]

  const addons = [
    {
      name: "حزمة التسويق الرقمي",
      price: "5,000",
      description: "ربط مع Facebook Pixel و Instagram و Google Analytics",
      features: ["ربط Facebook Pixel", "ربط Instagram", "Google Tag Manager", "تحليلات متقدمة"]
    },
    {
      name: "اسم دومين مخصص",
      price: "3,000",
      description: "احصل على اسم دومين احترافي لموقعك",
      features: ["اسم دومين .com", "ربط تلقائي", "شهادة SSL", "دعم فني"]
    },
    {
      name: "صفحة هبوط مخصصة",
      price: "8,000",
      description: "صفحة هبوط لزيادة المبيعات والتحويلات",
      features: ["تصميم مخصص", "تحسين التحويل", "اختبار A/B", "تحليلات مفصلة"]
    },
    {
      name: "خطة الصيانة الشهرية",
      price: "2,500",
      description: "حافظ على موقعك سريعاً وآمناً ومحدثاً",
      features: ["تحديثات أمنية", "مراقبة الأداء", "نسخ احتياطية", "دعم 24/7"]
    }
  ]

  return (
    <section id="pricing" className="py-16 px-4 luxora-bg pt-24 md:pt-28" dir="rtl">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="ml-2">أسعار شفافة - بدون رسوم مخفية</span>
          </div>

          {/* Free Store Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-8">
            <span className="ml-2">متجرك المجاني على الإنترنت ببضع نقرات</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold luxora-text mb-6 leading-tight">
            اختر
            <span className="block luxora-green-text">خطتك المثالية</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            أسعار شفافة مع كل ما تحتاجه للنجاح أون لاين. 
            جميع الخطط تشمل الاستضافة والدومين والدعم المستمر.
          </p>

          {/* Pricing Plans */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`luxora-card p-6 md:p-8 relative ${plan.popular ? 'ring-2 ring-green-500 md:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      الأفضل قيمة
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold luxora-text mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 md:mb-6">{plan.description}</p>
                  
                  <div className="mb-2 md:mb-4">
                    <span className="text-3xl md:text-4xl font-bold luxora-green-text">{plan.price}</span>
                    <span className="text-gray-600 text-lg ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.period}</p>
                  {plan.name === 'المتجر المتقدم' && (
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      <span className="ml-1">وفر 25,000 دج مقابل الاحترافي</span>
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-1 gap-1">
                    <div className="text-green-600 text-xs sm:text-sm">جاهز في 5 أيام</div>
                    <div className="text-green-600 text-xs sm:text-sm">دعم واتساب 24/7</div>
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 text-sm md:text-base">
                      <span className="text-green-600 mr-3 flex-shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`luxora-green-button w-full text-center ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  onClick={() => {
                    handlePlanClick(plan.name, plan.price)
                    window.open('/contact', '_self')
                  }}
                >
                  {plan.cta}
                </button>
                {/* PayPal checkout - fixed USD per plan */}
                <div className="mt-3">
                  {(() => {
                    const amountMap = { 'المتجر المجاني': '0.60', 'المتجر المتقدم': '2.50', 'المتجر الاحترافي': '5.00' } as const
                    const amount = amountMap[plan.name as keyof typeof amountMap]
                    if (!amount) return null
                    return (
                      <>
                        <div className="text-gray-600 text-xs mb-2">ادفع {plan.name} عبر PayPal ({amount} USD):</div>
                        <PayPalCheckout
                          amount={amount}
                          currency="USD"
                          description={`${plan.name} - الدفع الكامل`}
                          className="flex justify-center"
                          onSuccess={() => handlePayPalClick(plan.name, amount)}
                        />
                      </>
                    )
                  })()}
                </div>
                <div className="mt-3">
                  <button 
                    className="luxora-button w-full text-center text-sm"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    احجز عرض مجاني
                  </button>
                </div>

                <div className="mt-4 text-gray-500 text-xs sm:text-sm">
                  <div>ادفع مرة واحدة. ملكية مدى الحياة. بدون رسوم مخفية.</div>
                  <div>لست متأكداً؟ احصل على استشارة مجانية لمدة 30 دقيقة قبل الالتزام.</div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold luxora-text text-center mb-8">خدمات إضافية</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-base">
              عزز موقعك بهذه الخدمات القوية. مثالية للشركات التي تحتاج وظائف إضافية.
            </p>
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <span className="ml-2">أقفل أسعار 2025 - الأسعار ترتفع في 2026</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="luxora-card p-6 text-left">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl font-bold luxora-text mb-2">{addon.name}</h3>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-2xl font-bold luxora-green-text">{addon.price}</div>
                      <div className="text-gray-500 text-sm">DA</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="luxora-button w-full text-center text-sm"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    أقفل سعر 2025
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold luxora-text text-center mb-8">لماذا تختار أسعارنا؟</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">ج</span>
                </div>
                <h4 className="luxora-text font-semibold mb-2 text-base">جودة عالية</h4>
                <p className="text-gray-600 text-sm">جميع المواقع مبنية بتقنيات حديثة وأفضل الممارسات</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">ش</span>
                </div>
                <h4 className="luxora-text font-semibold mb-2 text-base">أسعار شفافة</h4>
                <p className="text-gray-600 text-sm">أسعار واضحة مع كل شيء مشمول مقدماً</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl font-bold">ن</span>
                </div>
                <h4 className="luxora-text font-semibold mb-2 text-base">نتائج مضمونة</h4>
                <p className="text-gray-600 text-sm">مواقع مصممة لتحويل الزوار إلى عملاء</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold luxora-text text-center mb-8">الأسئلة الشائعة</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-right">
              <div className="space-y-6">
                <div>
                  <h4 className="luxora-text font-semibold mb-2">كم من الوقت يستغرق بناء موقعي؟</h4>
                  <p className="text-gray-600 text-sm">عادة 2-4 أسابيع حسب التعقيد والخطة المختارة.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">هل توفرون الاستضافة والدومين؟</h4>
                  <p className="text-gray-600 text-sm">نعم! جميع الخطط تشمل سنة واحدة من الاستضافة وتسجيل الدومين.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">هل يمكنني إجراء تغييرات بعد الإطلاق؟</h4>
                  <p className="text-gray-600 text-sm">بالطبع! نوفر الدعم ويمكننا إجراء التحديثات حسب الحاجة.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="luxora-text font-semibold mb-2">ما هي طرق الدفع التي تقبلونها؟</h4>
                  <p className="text-gray-600 text-sm">نقبل التحويلات البنكية والدفع النقدي والدفع الإلكتروني.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">هل توفرون التدريب؟</h4>
                  <p className="text-gray-600 text-sm">نعم! نوفر التدريب على كيفية إدارة محتوى موقعك.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">هل هناك رسوم صيانة؟</h4>
                  <p className="text-gray-600 text-sm">الصيانة الأساسية مشمولة. الصيانة المتقدمة متاحة كخدمة إضافية.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold luxora-text mb-6">مستعد لبدء مشروعك؟</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك الخاصة. 
              بدون التزام، فقط نصيحة خبيرة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="luxora-green-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Get Free Consultation', 'pricing_cta')
                  window.open('/contact', '_self')
                }}
              >
                احصل على استشارة مجانية
              </button>
              <a 
                href="https://wa.me/213797339451?text=مرحباً! أنا مهتم بخدمات تطوير المواقع. هل يمكنك إخباري بالمزيد عن أسعاركم؟" 
                target="_blank" 
                rel="noopener noreferrer"
                className="luxora-button text-base px-8 py-3"
              >
                <span className="ml-2">واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
