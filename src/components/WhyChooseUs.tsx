const WhyChooseUs = () => {
  const features = [
    {
      title: "الخصوصية وسرية المعلومات",
      description: "يضمن لكم فريق SITEDZ Store سرية وخصوصية الأشخاص الذين وضعوا بين أيدينا بياناتهم الشخصية وبيانات زبائنهم. كما تحمي عمليات اتصال المستخدمين بموقعك الإلكتروني وتعزيز سلامته باستخدام بروتوكول Https."
    },
    {
      title: "السرعة",
      description: "حوالي 73% ممن يتسوقون أونلاين يقولون أن عنصر سرعة التحميل مهم جداً في إتمام عملية الشراء لذلك حرصت منصة SITEDZ Store على توفير نظام LAZYLOAD الذي يعمل على سرعة تحميل موقعك الإلكتروني بالإضافة إلى معالجة صورك بتقليص الحجم مع المحافظة على الجودة."
    },
    {
      title: "التصميم",
      description: "هل تريد أن تجعل من زوار موقعك زبائن، وتجعلهم يقضون المزيد من الوقت على موقعك؟ نوفر لكم نوعية مميزة من التصاميم المرنة والحديثة التي تتلاءم مع مجال عملك والتي تجعلك زبائنك يستمتعون أثناء تصفحهم لموقعك."
    },
    {
      title: "خدمة الزبائن",
      description: "تعتبر SITEDZ Store خدمة الزبائن العمود الفقري لها، ولهذا السبب وفرنا لخدمتكم فريقاً يمتلك الخبرة والقدرة اللازمتين لتلبية توقعاتكم بالكامل."
    }
  ]

  return (
    <section id="why-choose-us" className="py-16 px-4 luxora-bg" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            لماذا الاختيار
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            SITEDZ Store - الحل الأمثل لجميع احتياجاتك في التجارة الإلكترونية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="luxora-card p-8">
              <h3 className="text-xl font-bold luxora-text mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs
