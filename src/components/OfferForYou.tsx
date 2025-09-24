const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
      title: "Sites Vitrine",
      description: "Créez une présence en ligne professionnelle avec nos sites vitrine modernes. Parfait pour présenter votre entreprise, vos services et attirer de nouveaux clients en Algérie."
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center",
      title: "Boutiques en Ligne",
      description: "Lancez votre e-commerce avec nos boutiques en ligne optimisées. Gestion des commandes, paiements locaux (CIB, EDAHABIA, CCP) et international, tout intégré pour le marché algérien."
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center",
      title: "Applications Web",
      description: "Développons des applications web sur mesure pour automatiser vos processus métier. Solutions adaptées aux besoins spécifiques des entreprises algériennes."
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center",
      title: "Branding & Design",
      description: "Identité visuelle complète : logo, charte graphique, supports marketing. Donnez une image professionnelle et cohérente à votre entreprise."
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center",
      title: "SEO & Marketing",
      description: "Optimisation pour Google, Google Business, réseaux sociaux. Augmentez votre visibilité en ligne et attirez plus de clients locaux."
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
      title: "Maintenance & Support",
      description: "Maintenance continue, mises à jour de sécurité, sauvegardes automatiques. Support WhatsApp 24/7 pour une tranquillité d'esprit totale."
    }
  ]

  return (
    <section id="services" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            Nos Services
          </h2>
          
          {/* Professional Mission Statement */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            SITEDZ Store est votre partenaire digital de confiance en Algérie. Nous créons des solutions web modernes, 
            rapides et adaptées au marché algérien pour faire grandir votre entreprise en ligne.
          </p>
          
          {/* Awards Winners Badge */}
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              Solutions éprouvées pour le marché algérien
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center luxora-card p-6 hover:shadow-lg transition-shadow">
              {/* Circular Image */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold luxora-text mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
              
              {/* Button */}
              <button 
                className="luxora-green-button text-sm"
                onClick={() => window.open('/contact', '_self')}
              >
                En savoir plus
              </button>
            </div>
          ))}
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold luxora-text mb-6">Prêt à digitaliser votre entreprise ?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Nous adaptons nos solutions à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-base px-8 py-3"
              onClick={() => window.open('/contact', '_self')}
            >
              Devis gratuit
            </button>
            <button 
              className="luxora-button text-base px-8 py-3"
              onClick={() => window.open('/pricing', '_self')}
            >
              Voir nos tarifs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 