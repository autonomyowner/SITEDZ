import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !consent) {
      setMessage('Veuillez remplir tous les champs et accepter les conditions.')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      // Use the existing form submission endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Newsletter',
          lastName: 'Subscriber',
          email: email,
          phone: 'N/A',
          projectType: 'newsletter',
          budget: 'N/A',
          description: 'Newsletter subscription request'
        })
      })

      if (response.ok) {
        setMessage('Merci ! Vous êtes maintenant abonné à notre newsletter.')
        setEmail('')
        setConsent(false)
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer.')
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
              Restez informé
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Recevez nos conseils exclusifs pour développer votre entreprise en ligne en Algérie. 
              Tendances digitales, conseils SEO, et nouveautés technologiques.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Votre adresse email"
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
                {isSubmitting ? 'Envoi...' : 'S\'abonner'}
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
                J'accepte de recevoir des emails marketing et des offres spéciales
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
              <h4 className="font-semibold luxora-text mb-2">Conseils exclusifs</h4>
              <p className="text-sm text-gray-600">Stratégies digitales pour l'Algérie</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">Tendances 2025</h4>
              <p className="text-sm text-gray-600">Dernières innovations web</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <h4 className="font-semibold luxora-text mb-2">Offres spéciales</h4>
              <p className="text-sm text-gray-600">Tarifs préférentiels réservés</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Rejoignez plus de 500 entrepreneurs algériens qui nous font confiance
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <span>✓ Pas de spam</span>
              <span>✓ Désabonnement facile</span>
              <span>✓ Données protégées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
