import { useState } from 'react'
import { API_CONFIG } from '../config/api'
import { trackAddToCart, trackInitiateCheckout, trackButtonClick, trackAdvancedPurchase, trackHighValueAction } from '../utils/facebookPixel'

const EcommerceTemplate = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedPackage, setSelectedPackage] = useState('single')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const productImages = [
    "/pics/templates/template 1.jpg",
    "/pics/templates/teplate 2.jpg", 
    "/pics/templates/perfum store template clean.jpg",
    "/pics/templates/clininc template.png"
  ]


  const packages = [
    {
      id: 'single',
      name: 'Template واحد',
      price: 15000,
      originalPrice: 15000,
      description: 'قالب واحد كامل'
    },
    {
      id: 'double',
      name: 'Template اثنين',
      price: 24000,
      originalPrice: 30000,
      discount: 20,
      description: 'قالبين مع خصم 20%'
    },
    {
      id: 'triple',
      name: 'Template ثلاثة',
      price: 36000,
      originalPrice: 45000,
      discount: 20,
      description: 'ثلاثة قوالب مع خصم 20%'
    }
  ]

  const selectedPackageData = packages.find(pkg => pkg.id === selectedPackage) || packages[0]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId)
    const selectedPkg = packages.find(pkg => pkg.id === packageId)
    if (selectedPkg) {
      // Track AddToCart event when package is selected
      trackAddToCart(
        `E-commerce Template - ${selectedPkg.name}`, 
        selectedPkg.price, 
        'DZD'
      )
      trackButtonClick(`Select Package - ${selectedPkg.name}`, 'template_packages')
    }
  }

  const handleOrder = async () => {
    // Validate required fields
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.email) {
      alert('يرجى ملء جميع الحقول المطلوبة')
      return
    }

    // Track InitiateCheckout event before processing
    trackInitiateCheckout(
      `E-commerce Template - ${selectedPackageData.name}`, 
      selectedPackageData.price, 
      'DZD'
    )
    trackButtonClick('Buy Now - Template Purchase', 'template_purchase')

    setIsSubmitting(true)
    try {
      // Prepare order data
      const orderData = {
        timestamp: new Date().toISOString(),
        firstName: customerInfo.name.split(' ')[0] || customerInfo.name,
        lastName: customerInfo.name.split(' ').slice(1).join(' ') || '',
        email: customerInfo.email,
        phone: customerInfo.phone,
        projectType: `E-commerce Template - ${selectedPackageData.name}`,
        budget: `${selectedPackageData.price} DA`,
        description: `Order Details:
Package: ${selectedPackageData.name}
Price: ${selectedPackageData.price.toLocaleString()} DA
${selectedPackageData.discount ? `Discount: ${selectedPackageData.discount}%` : ''}
Customer Email: ${customerInfo.email}
Phone: ${customerInfo.phone}`
      }

      // Send to Google Apps Script using form data to avoid CORS issues
      const formData = new FormData()
      formData.append('timestamp', orderData.timestamp)
      formData.append('firstName', orderData.firstName)
      formData.append('lastName', orderData.lastName)
      formData.append('email', orderData.email)
      formData.append('phone', orderData.phone)
      formData.append('projectType', orderData.projectType)
      formData.append('budget', orderData.budget)
      formData.append('description', orderData.description)

      const response = await fetch(API_CONFIG.GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        // Track successful purchase with enhanced data
        trackAdvancedPurchase({
          value: selectedPackageData.price,
          currency: 'DZD',
          productName: `E-commerce Template - ${selectedPackageData.name}`,
          userData: {
            email: customerInfo.email,
            phone: customerInfo.phone,
            firstName: customerInfo.name.split(' ')[0] || customerInfo.name,
            lastName: customerInfo.name.split(' ').slice(1).join(' ') || ''
          },
          templateType: 'ecommerce',
          businessType: 'web_development'
        })
        
        // Track high-value action for optimization
        trackHighValueAction(
          'Template Purchase Completed',
          selectedPackageData.price,
          'DZD',
          {
            template_package: selectedPackageData.name,
            customer_email: customerInfo.email,
            purchase_method: 'form_submission'
          }
        )
        
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتأكيد الطلب.')
        // Reset form
        setCustomerInfo({
          name: '',
          phone: '',
          email: ''
        })
        setSelectedPackage('single')
      } else {
        throw new Error('Failed to submit order')
      }
    } catch (error) {
      console.error('Order submission error:', error)
      alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Product Images Section */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img 
                  src={productImages[selectedImage]} 
                  alt="E-commerce Template"
                  className="w-full h-full object-cover"
                />
                {/* Feature Highlight Overlay */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✨</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-4 ring-amber-500 scale-105' 
                      : 'hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Template ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                قالب متجر إلكتروني احترافي
              </h1>
              <p className="text-lg text-gray-600">
                Professional E-commerce Website Template
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-amber-600">
                {selectedPackageData.price.toLocaleString()} DA
              </span>
              {selectedPackageData.discount && (
                <div className="flex items-center gap-2">
                  <span className="text-xl text-gray-500 line-through">
                    {selectedPackageData.originalPrice.toLocaleString()} DA
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    خصم {selectedPackageData.discount}%
                  </span>
                </div>
              )}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-600 font-semibold">متوفر</span>
            </div>

            {/* Product Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">وصف المنتج</h3>
              <p className="text-gray-700 leading-relaxed">
                قالب موقع إلكتروني احترافي ومتجاوب مع جميع الأجهزة. يحتوي على تصميم عصري وجذاب 
                مع إمكانيات متقدمة لإدارة المحتوى. سهل التخصيص والتعديل حسب احتياجاتك. 
                تسليم فوري بعد الدفع.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  تصميم متجاوب مع جميع الأجهزة
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  لوحة تحكم سهلة الاستخدام
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  تسليم فوري بعد الدفع
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  SEO محسن لمحركات البحث
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  دعم فني مجاني
                </li>
              </ul>
            </div>

            {/* Package Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">اختر الباقة</h3>
              <div className="grid gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => handlePackageSelect(pkg.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'border-amber-500 bg-amber-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-right">
                        <h4 className="font-bold text-gray-900">{pkg.name}</h4>
                        <p className="text-sm text-gray-600">{pkg.description}</p>
                      </div>
                      <div className="text-left">
                        <div className="text-xl font-bold text-amber-600">
                          {pkg.price.toLocaleString()} DA
                        </div>
                        {pkg.discount && (
                          <div className="text-sm text-gray-500 line-through">
                            {pkg.originalPrice.toLocaleString()} DA
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">معلومات العميل</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم واللقب
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      👤
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="05xxxxxxxx"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      📱
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      📧
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ملخص الطلب</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">الباقة المختارة:</span>
                  <span className="font-semibold">{selectedPackageData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">السعر:</span>
                  <span className="font-semibold">{selectedPackageData.price.toLocaleString()} DA</span>
                </div>
                {selectedPackageData.discount && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">الخصم:</span>
                    <span className="font-semibold text-green-600">{selectedPackageData.discount}%</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-700">التسليم:</span>
                  <span className="font-semibold text-green-600">رقمي فوري</span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between text-lg">
                  <span className="font-bold text-gray-900">المبلغ الإجمالي:</span>
                  <span className="font-bold text-amber-600">{selectedPackageData.price.toLocaleString()} DA</span>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrder}
              disabled={isSubmitting}
              className={`w-full font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <span>🛒</span>
                  <span>شراء الآن</span>
                </>
              )}
            </button>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>دفع آمن</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚡</span>
                <span>تسليم فوري</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <span>دعم 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcommerceTemplate
