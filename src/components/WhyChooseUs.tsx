import { useTranslation } from 'react-i18next'

const WhyChooseUs = () => {
  const { t } = useTranslation()
  const features = [
    {
      title: t('whyChooseUs.privacy.title'),
      description: t('whyChooseUs.privacy.description')
    },
    {
      title: t('whyChooseUs.speed.title'),
      description: t('whyChooseUs.speed.description')
    },
    {
      title: t('whyChooseUs.design.title'),
      description: t('whyChooseUs.design.description')
    },
    {
      title: t('whyChooseUs.support.title'),
      description: t('whyChooseUs.support.description')
    }
  ]

  return (
    <section id="why-choose-us" className="py-16 px-4 luxora-bg" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('whyChooseUs.subtitle')}
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
