import { useEffect, useState } from 'react'
import { trackContact, trackViewContent, trackFormSubmission, trackSchedule, trackButtonClick } from '../utils/facebookPixel'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  })

  useEffect(() => {
    // Track that user viewed the contact page
    trackViewContent('Contact Page', 'contact_page')
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('=== FORM SUBMISSION STARTED ===')
    console.log('Form data:', formData)
    console.log('All required fields filled:', {
      firstName: !!formData.firstName,
      lastName: !!formData.lastName,
      email: !!formData.email,
      phone: !!formData.phone,
      projectType: !!formData.projectType,
      budget: !!formData.budget
    })
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Track form submission
      trackFormSubmission('Contact Form', {
        project_type: formData.projectType,
        budget_range: formData.budget,
        has_description: formData.description.length > 0
      })
      
      // Track lead generation
      trackFormSubmission('Lead Generation', {
        lead_source: 'contact_form',
        project_type: formData.projectType,
        budget_range: formData.budget
      })
      
      // Submit directly to Google Apps Script using form data (avoids CORS)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcTJsZzOps9jtqm-fcQS0sEIeofbTht101LwWYhGjtmorVt1a4tQpv-QmhEdHfLiVotg/exec'
      
      console.log('Sending request to:', GOOGLE_SCRIPT_URL)
      
      // Create form data to avoid CORS issues
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('projectType', formData.projectType)
      formDataToSend.append('budget', formData.budget)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('timestamp', new Date().toISOString())
      formDataToSend.append('source', 'website_contact_form')
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      
      if (response.ok) {
        console.log('Form submitted successfully!')
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          description: ''
        })
      } else {
        console.log('Form submission failed with status:', response.status)
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactMethods = [
    {
      title: "راسلنا بالبريد",
      value: "autonomy.owner@gmail.com",
      description: "أرسل لنا متطلبات مشروعك",
      link: "mailto:autonomy.owner@gmail.com"
    },
    {
      title: "اتصل بنا",
      value: "0797339451",
      description: "تحدث مباشرة مع فريقنا",
      link: "tel:+213797339451"
    },
    {
      title: "واتساب",
      value: "0797339451",
      description: "محادثة سريعة حول مشروعك",
      link: "https://wa.me/+213797339451"
    },
    {
      title: "الموقع",
      value: "الجزائر",
      description: "نخدم العملاء في جميع أنحاء البلاد",
      link: "#"
    }
  ]

  return (
    <section id="contact-page" className="py-16 px-4 luxora-bg" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 luxora-card rounded-full luxora-text text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="text-center">تواصل معنا - نحن هنا لمساعدتك</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold luxora-text mb-4 sm:mb-6 leading-tight">
            تواصل مع
            <span className="block luxora-green-text">وكالتنا</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            مستعد لبدء مشروع تطوير المواقع الخاص بك؟ تواصل مع وكالتنا. 
            نحن هنا لمناقشة احتياجاتك وتحويل رؤيتك إلى واقع.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 md:mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? "_blank" : undefined}
                rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="luxora-card p-4 sm:p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  trackContact({ method: method.title, value: method.value })
                  trackButtonClick(`Contact ${method.title}`, 'contact_methods_grid')
                }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold luxora-text mb-1 sm:mb-2">{method.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">{method.description}</p>
                <div className="luxora-green-text font-semibold text-sm sm:text-base">{method.value}</div>
              </a>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
            {/* Contact Form */}
            <div className="luxora-card p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold luxora-text mb-4 sm:mb-6 text-center">أرسل لنا رسالة</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-green-600 text-xl ml-2">✅</span>
                    <div>
                      <strong>تم إرسال الرسالة بنجاح!</strong>
                      <p className="text-sm mt-1">سنرد عليك خلال 24 ساعة.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <div className="flex items-center">
                    <span className="text-red-600 text-xl ml-2">❌</span>
                    <div>
                      <strong>فشل في إرسال الرسالة</strong>
                      <p className="text-sm mt-1">يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.</p>
                    </div>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block luxora-text font-semibold mb-2">الاسم الأول</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="اسمك الأول"
                      required
                    />
                  </div>
                  <div>
                    <label className="block luxora-text font-semibold mb-2">الاسم الأخير</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="اسمك الأخير"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block luxora-text font-semibold mb-2">عنوان البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="رقم هاتفك"
                    required
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">نوع المشروع</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400"
                    required
                  >
                    <option value="">اختر نوع المشروع</option>
                    <option value="clinic">موقع عيادة</option>
                    <option value="travel">موقع وكالة سفر</option>
                    <option value="real-estate">موقع عقاري</option>
                    <option value="ecommerce">موقع تجارة إلكترونية</option>
                    <option value="custom">موقع مخصص</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">نطاق الميزانية</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400"
                    required
                  >
                    <option value="">اختر نطاق الميزانية</option>
                    <option value="5k-15k">5,000 - 15,000 دج</option>
                    <option value="15k-30k">15,000 - 30,000 دج</option>
                    <option value="30k-100k">30,000 - 100,000 دج</option>
                    <option value="100k+">100,000+ دج</option>
                    <option value="discuss">دعنا نناقش</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">وصف المشروع</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="أخبرنا عن متطلبات مشروعك وأهدافه وأي ميزات محددة تحتاجها..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`luxora-green-button w-full text-base sm:text-lg py-3 sm:py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    console.log('Button clicked!')
                    console.log('Form data before submit:', formData)
                    trackButtonClick('Send Message', 'contact_form')
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin ml-2">⏳</span>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      أرسل الرسالة
                    </>
                  )}
                </button>
                
                {/* Debug buttons - remove in production */}
                {import.meta.env.DEV && (
                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        console.log('Debug: Form data:', formData)
                        console.log('Debug: Is submitting:', isSubmitting)
                        console.log('Debug: Submit status:', submitStatus)
                      }}
                      className="w-full bg-gray-500 text-white py-2 px-4 rounded text-sm"
                    >
                      🔍 Debug Info (Dev Only)
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        console.log('=== TEST SUBMISSION ===')
                        // Fill form with test data
                        setFormData({
                          firstName: 'Test',
                          lastName: 'User',
                          email: 'test@example.com',
                          phone: '1234567890',
                          projectType: 'clinic',
                          budget: '200k-400k',
                          description: 'Test submission'
                        })
                        console.log('Form filled with test data')
                      }}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded text-sm"
                    >
                      📝 Fill Test Data
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="luxora-card p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold luxora-text mb-4 sm:mb-6 text-center">معلومات الاتصال</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">الموقع</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      الجزائر - نخدم العملاء في جميع أنحاء البلاد
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">ساعات العمل</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">الخدمات</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      مواقع مخصصة، تجارة إلكترونية، أنظمة حجز
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">وقت الاستجابة</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      خلال 24 ساعة لجميع الاستفسارات
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxora-green-bg p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">لماذا تختار وكالتنا؟</h3>
                <ul className="space-y-2 sm:space-y-3 text-white text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    فريق خبير من المطورين المحترفين
                  </li>
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    نهج تصميم حديث ومتجاوب
                  </li>
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    إدارة مشاريع كاملة
                  </li>
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    دعم وصيانة مستمرة
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold luxora-text mb-6">مستعد لبدء مشروعك؟</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              لست متأكداً بعد؟ احصل على استشارة مجانية لمدة 30 دقيقة — بدون التزام.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:autonomy.owner@gmail.com?subject=Free Consultation Request" 
                className="luxora-green-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Book Free Consultation', 'cta_section')
                }}
              >
                احجز استشارة مجانية
              </a>
              <a 
                href="/pricing" 
                className="luxora-button text-base px-8 py-3"
              >
                <span className="ml-2">ن</span>
                نمي عملي
              </a>
            </div>
            <div className="mt-4 text-gray-600 text-sm">جاهز في 5 أيام · دعم واتساب 24/7</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
