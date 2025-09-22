const LandingPage = () => {
  return (
    <section id="landing-page" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-right">
            <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
              صفحة الهبوط
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              هل حصل زبائنك على كل ما يحتاجونه بعد زيارة الموقع الخاص بك؟
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              قد يدخل زوار موقعك في حالة من الفوضى أثناء التنقل، وقد لا يعثرون على الزر المطلوب، 
              وبذلك يتعذر عليهم إجراء عملية شراء.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              لذلك نوفر لكم تقنية صفحة الهبوط التي تساعدك في زيادة مبيعاتك، 
              لفت انتباه زوارك وتوجيههم مباشرة إلى موقعك الإلكتروني.
            </p>
            
            {/* Conversion Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center luxora-card p-4">
                <div className="text-3xl font-bold luxora-green-text mb-2">75%</div>
                <div className="text-gray-600 text-sm">تحويل الطلبات بمنتج بسيط</div>
              </div>
              <div className="text-center luxora-card p-4">
                <div className="text-3xl font-bold luxora-green-text mb-2">100%</div>
                <div className="text-gray-600 text-sm">تحويل طلبات بصفحة الهبوط</div>
              </div>
            </div>

          </div>

          {/* Right Content - Image */}
          <div className="relative order-2 md:order-1">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop&crop=center"
                alt="صفحة هبوط احترافية"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
