import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.projectType) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Use the same Google Apps Script endpoint as contact page
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcTJsZzOps9jtqm-fcQS0sEIeofbTht101LwWYhGjtmorVt1a4tQpv-QmhEdHfLiVotg/exec'
      
      // Create form data to avoid CORS issues
      const formDataToSend = new FormData()
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('lastName', formData.lastName)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('projectType', formData.projectType)
      formDataToSend.append('budget', 'À discuter')
      formDataToSend.append('description', formData.message)
      formDataToSend.append('timestamp', new Date().toISOString())
      formDataToSend.append('source', 'homepage_contact_form')

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Semi-circular background */}
      <div className="absolute inset-0 semi-circle-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="text-center md:text-left px-8 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {t('contact.hero.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {t('contact.hero.subtitle')}
            </p>
            
            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-green-600 mr-3">📞</span>
                <span className="text-gray-700">+213 797 339 451</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-green-600 mr-3">📧</span>
                <span className="text-gray-700">contact@sitedz.store</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-green-600 mr-3">💬</span>
                <span className="text-gray-700">WhatsApp 24/7</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                className="maroon-button"
                onClick={() => window.open('/contact', '_self')}
              >
                {t('contact.hero.freeQuote')}
              </button>
              <a 
                href="https://wa.me/213797339451?text=Bonjour! Je suis intéressé par vos services de développement web."
                target="_blank"
                rel="noopener noreferrer"
                className="luxora-button text-center"
              >
                {t('contact.hero.whatsappLink')}
              </a>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="luxora-card p-8">
            <h3 className="text-2xl font-bold luxora-text mb-6 text-center">{t('contact.form.title')}</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl ml-2">✅</span>
                  <div>
                    <strong>Message envoyé avec succès !</strong>
                    <p className="text-sm mt-1">Nous vous répondrons dans les 24 heures.</p>
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
                    <strong>Échec de l'envoi du message</strong>
                    <p className="text-sm mt-1">Veuillez réessayer ou nous contacter directement.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.firstName')}</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder={t('contact.form.firstName')} 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.lastName')}</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder={t('contact.form.lastName')} 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder={t('contact.form.email')} 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder={t('contact.form.phone')} 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.projectType')}</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">{t('contact.form.projectTypePlaceholder')}</option>
                  <option value="site-vitrine">{t('contact.form.projectTypes.showcase')}</option>
                  <option value="boutique-en-ligne">{t('contact.form.projectTypes.ecommerce')}</option>
                  <option value="application-web">{t('contact.form.projectTypes.webapp')}</option>
                  <option value="autre">{t('contact.form.projectTypes.other')}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.description')}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder={t('contact.form.description')}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full luxora-green-button ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 