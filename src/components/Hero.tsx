import Typewriter from './Typewriter'

const Hero = () => {
  const typewriterWords = [
    "sites vitrine",
    "boutiques en ligne", 
    "applications web",
    "solutions digitales",
    "plateformes e-commerce"
  ]

  return (
    <section 
      id="home" 
      className="relative py-16 px-4 min-h-screen flex items-center" 
      style={{
        backgroundImage: 'url(/pics/templates/safar-safarov-LKsHwgzyk7c-unsplash.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 text-sm font-medium mb-8 shadow-lg">
            Solutions digitales modernes pour les entreprises algériennes
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Solutions digitales modernes pour les entreprises algériennes
            <span className="block" style={{ color: 'var(--luxora-luxury-green)' }}>
              <Typewriter 
                words={typewriterWords}
                typeSpeed={150}
                deleteSpeed={75}
                pauseTime={2500}
                className="inline-block"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            SITEDZ Store est votre agence web de confiance en Algérie. Nous créons des sites web modernes, 
            rapides et professionnels pour faire grandir votre entreprise en ligne. 
            Spécialisés dans le marché algérien avec des solutions adaptées à vos besoins locaux.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open('/pricing', '_self')}
            >
              Découvrir nos services
            </button>
            <button 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open('/contact', '_self')}
            >
              Devis gratuit
            </button>
          </div>

          {/* Speed & Support Promises */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30 shadow-lg">
              Livré en 5 jours
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30 shadow-lg">
              Support WhatsApp 24/7
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm border border-white/30 shadow-lg">
              Paiement local accepté
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 