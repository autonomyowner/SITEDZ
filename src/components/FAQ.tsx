import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useTranslation()

  const faqs = [
    {
      question: t('faq.questions.timing'),
      answer: t('faq.answers.timing')
    },
    {
      question: t('faq.questions.payment'),
      answer: t('faq.answers.payment')
    },
    {
      question: t('faq.questions.hosting'),
      answer: t('faq.answers.hosting')
    },
    {
      question: t('faq.questions.modifications'),
      answer: t('faq.answers.modifications')
    },
    {
      question: t('faq.questions.google'),
      answer: t('faq.answers.google')
    },
    {
      question: t('faq.questions.support'),
      answer: t('faq.answers.support')
    },
    {
      question: t('faq.questions.satisfaction'),
      answer: t('faq.answers.satisfaction')
    },
    {
      question: t('faq.questions.mobile'),
      answer: t('faq.answers.mobile')
    },
    {
      question: t('faq.questions.features'),
      answer: t('faq.answers.features')
    },
    {
      question: t('faq.questions.performance'),
      answer: t('faq.answers.performance')
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4 luxora-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            {t('faq.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('faq.subtitle')}
          </p>
          
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              {t('faq.badge')}
            </span>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="luxora-card overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold luxora-text pr-4">
                  {faq.question}
                </h3>
                <span className={`text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center luxora-card p-8">
          <h3 className="text-2xl font-bold luxora-text mb-4">
            {t('faq.cta.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('faq.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-base px-8 py-3"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('faq.cta.askQuestion')}
            </button>
            <a 
              href="https://wa.me/213797339451?text=Bonjour! J'ai une question sur vos services de création de sites web."
              target="_blank"
              rel="noopener noreferrer"
              className="luxora-button text-base px-8 py-3 text-center"
            >
              {t('faq.cta.whatsapp')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
