const Portfolio = () => {
  const projects = [
    {
      name: "Parfumerie Allouani",
      description: "Site e-commerce premium pour une parfumerie algérienne établie, transformant leur présence digitale et augmentant leurs ventes en ligne de 300%",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop&crop=center",
      features: [
        "Catalogue produits premium avec filtres avancés",
        "Système de paiement sécurisé (CIB, EDAHABIA)",
        "Gestion des stocks en temps réel",
        "Interface mobile optimisée pour l'Algérie"
      ],
      url: "https://parfumerie-allouani.vercel.app/",
      category: "E-commerce Premium",
      story: "Parfumerie Allouani, une institution de 20 ans à Alger, cherchait à moderniser sa présence en ligne. Nous avons créé une boutique e-commerce sophistiquée qui reflète l'élégance de leurs parfums de luxe, avec une expérience utilisateur fluide adaptée au marché algérien."
    },
    {
      name: "Triomphe Design",
      description: "Plateforme de décoration maison moderne pour une entreprise algérienne, créant une expérience d'achat immersive et augmentant la conversion de 250%",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center",
      features: [
        "Galerie produits interactive et immersive",
        "Système de commande personnalisé",
        "Intégration réseaux sociaux pour inspiration",
        "Design responsive premium"
      ],
      url: "https://triomphe-lite-design.vercel.app/",
      category: "Décoration & Design",
      story: "Triomphe Design, spécialisé dans la décoration moderne, avait besoin d'une plateforme qui capture l'essence de leur esthétique. Nous avons développé un site qui met en valeur leurs créations uniques, avec une navigation intuitive et des visuels époustouflants qui convertissent les visiteurs en clients."
    }
  ]

  return (
    <section id="portfolio" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            Nos Réalisations
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos projets réussis pour des entreprises algériennes. 
            Des solutions web modernes qui transforment les entreprises.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              Solutions éprouvées pour le marché algérien
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="luxora-card overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Image */}
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold luxora-text">{project.name}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Story Section */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold luxora-text mb-2 text-sm">Notre approche :</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.story}
                  </p>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold luxora-text mb-3">Fonctionnalités clés :</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxora-green-button text-center text-sm flex-1"
                  >
                    Visiter le site
                  </a>
                  <button 
                    className="luxora-button text-center text-sm flex-1"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    Projet similaire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="luxora-card p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold luxora-text mb-4">Nos Chiffres</h3>
            <p className="text-gray-600">Des résultats concrets pour nos clients</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">50+</div>
              <div className="text-gray-600 text-sm">Sites créés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">100%</div>
              <div className="text-gray-600 text-sm">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">5</div>
              <div className="text-gray-600 text-sm">Jours de livraison</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support disponible</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold luxora-text mb-6">Votre projet sera le prochain</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Rejoignez nos clients satisfaits et transformez votre entreprise avec une solution web moderne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-base px-8 py-3"
              onClick={() => window.open('/contact', '_self')}
            >
              Démarrer mon projet
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

export default Portfolio
