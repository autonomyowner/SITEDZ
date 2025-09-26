import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Newsletter = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !consent) {
      setMessage(t('newsletter.required'))
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      // Use the same Google Apps Script endpoint as contact page
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcTJsZzOps9jtqm-fcQS0sEIeofbTht101LwWYhGjtmorVt1a4tQpv-QmhEdHfLiVotg/exec'
      
      // Create form data to avoid CORS issues
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', 'Newsletter')
      formDataToSend.append('lastName', 'Subscriber')
      formDataToSend.append('email', email)
      formDataToSend.append('phone', 'N/A')
      formDataToSend.append('projectType', 'newsletter')
      formDataToSend.append('budget', 'N/A')
      formDataToSend.append('description', 'Newsletter subscription request')
      formDataToSend.append('timestamp', new Date().toISOString())
      formDataToSend.append('source', 'newsletter_signup')

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setMessage(t('newsletter.success'))
        setEmail('')
        setConsent(false)
      } else {
        setMessage(t('newsletter.error'))
      }
    } catch (error) {
      setMessage(t('newsletter.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="luxora-card p-8 md:p-12">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold luxora-text mb-4">
              {t('newsletter.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('newsletter.subtitle')}
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="luxora-green-button px-6 py-3 whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? t('newsletter.subscribing') : t('newsletter.subscribe')}
              </button>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <input 
                type="checkbox" 
                id="newsletter-consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mr-2"
                required
              />
              <label htmlFor="newsletter-consent" className="text-sm text-gray-600">
                {t('newsletter.consent')}
              </label>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                message.includes('Merci') 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {message}
              </div>
            )}
          </form>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">{t('newsletter.features.exclusive.title')}</h4>
              <p className="text-sm text-gray-600">{t('newsletter.features.exclusive.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">{t('newsletter.features.trends.title')}</h4>
              <p className="text-sm text-gray-600">{t('newsletter.features.trends.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">{t('newsletter.features.offers.title')}</h4>
              <p className="text-sm text-gray-600">{t('newsletter.features.offers.description')}</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {t('newsletter.trust.text')}
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>✓ {t('newsletter.trust.noSpam')}</span>
              <span>✓ {t('newsletter.trust.easyUnsubscribe')}</span>
              <span>✓ {t('newsletter.trust.dataProtected')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
