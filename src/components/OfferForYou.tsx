const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
      title: "ربح الوقت",
      description: "ليس لديك الوقت الكافي لتجهيز كل الطلبيات؟ تم حل المشكلة! اربح وقتك بفضل نظامنا الذي يسمح لك بتأكيد، متابعة وتوصيل طلبيات زبائنك بكل ارتياحية وفي أسرع وقت ممكن."
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center",
      title: "زبون راضي، زبون مخلص",
      description: "هل تستقبل عدد كبير من الرسائل في مواقع التواصل الاجتماعي لتأكيد طلبيات زبائنك؟ صنف منتجاتك على حسب الفئة، العلامة التجارية والمتغيرات وسهل عملية الشراء لزبائنك."
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center",
      title: "تتبع المبيعات والإحصائيات",
      description: "إدارة المخزون وتتبع المبيعات أصبحت تلقائية! SITEDZ Store توفر لكم كل ما يخص إدارة متجرك سواء تتبع المبيعات أو تتبع عدد عمليات الشراء والكثير من التفاصيل الأخرى."
    }
  ]

  return (
    <section id="services" className="py-16 px-4 luxora-bg" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            ما يمكننا القيام به من أجلك
          </h2>
          
          {/* Professional Mission Statement */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            منصة SITEDZ Store رتبت كل شيء وفقاً لراحة المستخدم فهي توفر لكم موقع إلكتروني يتيح لكم التنقل السهل ويتوافق مع جميع الأجهزة اللوحية، الهاتف والحاسوب.
          </p>
          
          {/* Awards Winners Badge */}
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              فخورون بكوننا جزء من إنشاء مواقع ناجحة للشركات الجزائرية
            </span>
          </div>
        </div>

          {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
            <div key={index} className="text-center">
              {/* Circular Image */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
          </div>

              {/* Content */}
              <h3 className="text-xl font-bold luxora-text mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Button */}
              <button 
                className="luxora-green-button"
                onClick={() => window.open('/contact', '_self')}
              >
                اعرف المزيد
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 