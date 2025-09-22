const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 relative overflow-hidden">
      {/* Semi-circular background */}
      <div className="absolute inset-0 semi-circle-bg"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="text-center md:text-left px-8 py-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Prêt à transformer votre entreprise avec un site web professionnel ? 
              Nous aimons discuter de votre projet et vous aider à créer une présence digitale forte. 
              Contactez-nous aujourd'hui et commençons à construire votre succès ensemble.
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
                Devis gratuit
              </button>
              <a 
                href="https://wa.me/213797339451?text=Bonjour! Je suis intéressé par vos services de développement web."
                target="_blank"
                rel="noopener noreferrer"
                className="luxora-button text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Content - Contact Form Preview */}
          <div className="luxora-card p-8">
            <h3 className="text-2xl font-bold luxora-text mb-6 text-center">Contactez-nous</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Site vitrine</option>
                  <option>Boutique en ligne</option>
                  <option>Application web</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Décrivez votre projet..."></textarea>
              </div>
              <button className="w-full luxora-green-button">
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 