import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content - Image */}
          <div className="relative order-2 md:order-1">
            <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center"
                alt="متجر إلكتروني احترافي"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
          </div>

          {/* Left Content */}
          <div className="text-center md:text-right order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            <button 
              className="luxora-green-button"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('about.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 