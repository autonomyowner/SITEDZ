import { useEffect, useState } from 'react'
import { trackContact, trackViewContent, trackFormSubmission, trackSchedule, trackButtonClick } from '../utils/facebookPixel'
import { logger } from '../utils/logger'

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
    logger.log('=== FORM SUBMISSION STARTED ===')
    logger.log('Form data:', formData)
    logger.log('All required fields filled:', {
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
      
      logger.log('Sending request to:', GOOGLE_SCRIPT_URL)
      
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

      logger.log('Response status:', response.status)
      logger.log('Response ok:', response.ok)
      
      if (response.ok) {
        logger.log('Form submitted successfully!')
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
        logger.log('Form submission failed with status:', response.status)
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      logger.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactMethods = [
    {
      title: "Email",
      value: "contact@sitedz.store",
      description: "Envoyez-nous vos exigences de projet",
      link: "mailto:contact@sitedz.store"
    },
    {
      title: "Téléphone",
      value: "0797339451",
      description: "Parlez directement avec notre équipe",
      link: "tel:+213797339451"
    },
    {
      title: "WhatsApp",
      value: "0797339451",
      description: "Discussion rapide sur votre projet",
      link: "https://wa.me/+213797339451"
    },
    {
      title: "Localisation",
      value: "Algérie",
      description: "Nous servons les clients dans tout le pays",
      link: "#"
    }
  ]

  return (
    <section id="contact-page" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 luxora-card rounded-full luxora-text text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="text-center">Contactez-nous - Nous sommes là pour vous aider</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold luxora-text mb-4 sm:mb-6 leading-tight">
            Contactez
            <span className="block luxora-green-text">notre agence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Prêt à lancer votre projet de développement web ? Contactez notre agence. 
            Nous sommes là pour discuter de vos besoins et transformer votre vision en réalité.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold luxora-text mb-4 sm:mb-6 text-center">Envoyez-nous un message</h2>
              
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

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block luxora-text font-semibold mb-2">Prénom</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                  <div>
                    <label className="block luxora-text font-semibold mb-2">Nom</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block luxora-text font-semibold mb-2">Adresse email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="votre.email@exemple.com"
                    required
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Numéro de téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Type de projet</label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400"
                    required
                  >
                    <option value="">Choisissez le type de projet</option>
                    <option value="site-vitrine">Site vitrine</option>
                    <option value="ecommerce">Boutique en ligne</option>
                    <option value="application">Application web</option>
                    <option value="branding">Branding & Design</option>
                    <option value="seo">SEO & Marketing</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Budget estimé</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-gray-400"
                    required
                  >
                    <option value="">Choisissez votre budget</option>
                    <option value="5k-15k">5,000 - 15,000 DA</option>
                    <option value="15k-30k">15,000 - 30,000 DA</option>
                    <option value="30k-100k">30,000 - 100,000 DA</option>
                    <option value="100k+">100,000+ DA</option>
                    <option value="discuss">Discutons ensemble</option>
                  </select>
                </div>

                <div>
                  <label className="block luxora-text font-semibold mb-2">Description du projet</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
                    placeholder="Décrivez-nous vos exigences de projet, vos objectifs et toute fonctionnalité spécifique dont vous avez besoin..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`luxora-green-button w-full text-base sm:text-lg py-3 sm:py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    logger.log('Button clicked!')
                    logger.log('Form data before submit:', formData)
                    trackButtonClick('Send Message', 'contact_form')
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin ml-2">⏳</span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                    </>
                  )}
                </button>
                
                {/* Debug buttons - remove in production */}
                {import.meta.env.DEV && (
                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        logger.log('Debug: Form data:', formData)
                        logger.log('Debug: Is submitting:', isSubmitting)
                        logger.log('Debug: Submit status:', submitStatus)
                      }}
                      className="w-full bg-gray-500 text-white py-2 px-4 rounded text-sm"
                    >
                      🔍 Debug Info (Dev Only)
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => {
                        logger.log('=== TEST SUBMISSION ===')
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
                        logger.log('Form filled with test data')
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold luxora-text mb-4 sm:mb-6 text-center">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Localisation</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Algérie - Nous servons les clients dans tout le pays
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Heures d'ouverture</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Lundi - Vendredi: 9h00 - 18h00
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Services</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Sites sur mesure, e-commerce, systèmes de réservation
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="luxora-text font-semibold mb-1 text-sm sm:text-base">Temps de réponse</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Dans les 24 heures pour toutes les demandes
                    </p>
                  </div>
                </div>
              </div>

              <div className="luxora-green-bg p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Pourquoi choisir notre agence ?</h3>
                <ul className="space-y-2 sm:space-y-3 text-white text-sm sm:text-base">
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    Équipe experte de développeurs professionnels
                  </li>
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    Approche de design moderne et responsive
                  </li>
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    Gestion complète de projets
                  </li>
                  <li className="flex items-center">
                    <span className="ml-3">•</span>
                    Support et maintenance continus
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold luxora-text mb-6">Prêt à lancer votre projet ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Pas encore sûr ? Obtenez une consultation gratuite de 30 minutes — sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@sitedz.store?subject=Demande de consultation gratuite" 
                className="luxora-green-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Book Free Consultation', 'cta_section')
                }}
              >
                Réserver une consultation gratuite
              </a>
              <a 
                href="/pricing" 
                className="luxora-button text-base px-8 py-3"
              >
                Voir nos tarifs
              </a>
            </div>
            <div className="mt-4 text-gray-600 text-sm">Livré en 5 jours · Support WhatsApp 24/7</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
