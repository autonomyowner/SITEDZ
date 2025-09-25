const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et performants adaptés à vos besoins spécifiques.",
      features: ["Design responsive", "SEO optimisé", "Performance élevée", "Sécurité renforcée"]
    },
    {
      title: "E-commerce",
      description: "Solutions de boutiques en ligne complètes avec gestion des commandes et paiements.",
      features: ["Boutique en ligne", "Gestion des stocks", "Paiements sécurisés", "Analytics avancées"]
    },
    {
      title: "Maintenance & Support",
      description: "Maintenance continue et support technique pour assurer le bon fonctionnement de votre site.",
      features: ["Maintenance préventive", "Support 24/7", "Mises à jour", "Sauvegardes"]
    }
  ]

  return (
    <section id="services" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos <span className="premium-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solutions digitales complètes pour propulser votre entreprise vers le succès en ligne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <div key={index} className="premium-card p-4 sm:p-6 md:p-8 hover:transform hover:scale-105">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="premium-text mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Notre Stratégie Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Notre <span className="premium-text">Stratégie</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Une approche méthodique et professionnelle pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Analyse approfondie des besoins clients */}
            <div className="premium-card p-6 lg:p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Analyse approfondie des besoins clients</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Notre équipe chez SITEDZ excelle dans l'analyse approfondie des besoins clients pour votre projet de développement web.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Identification des exigences spécifiques du client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Évaluation des objectifs à court et à long terme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Analyse des préférences et attentes des utilisateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Examen des tendances du marché</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Collecte de données sur la concurrence</span>
                </li>
              </ul>
            </div>

            {/* Définition des objectifs de développement web */}
            <div className="premium-card p-6 lg:p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Définition des objectifs de développement web</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Chez SITEDZ, nous croyons en des objectifs clairs et mesurables pour assurer le succès de votre projet.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Établissement d'objectifs SMART</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Priorisation des fonctionnalités essentielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Détermination des indicateurs de performance clés (KPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Alignement avec la vision de l'entreprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Validation des objectifs avec les parties prenantes</span>
                </li>
              </ul>
            </div>

            {/* Stratégie de conception et d'expérience utilisateur */}
            <div className="premium-card p-6 lg:p-8 md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Stratégie de conception et d'expérience utilisateur (UX)</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  SITEDZ excelle dans la création de sites web esthétiquement plaisants et fonctionnels.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Création de wireframes et de maquettes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Définition de la structure de navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Optimisation de l'expérience utilisateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Intégration des principes de conception responsives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="premium-text mt-1">•</span>
                  <span>Test de convivialité et ajustements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Background Image Section */}
        <div 
          className="w-full h-96 bg-cover bg-center bg-no-repeat rounded-2xl mb-8 sm:mb-12 md:mb-16"
          style={{
            backgroundImage: `url('/pics/templates/safar-safarov-LKsHwgzyk7c-unsplash.jpg')`
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transformez Votre Vision en Réalité</h3>
              <p className="text-lg md:text-xl">Des solutions digitales sur mesure pour votre entreprise</p>
            </div>
          </div>
        </div>

        {/* E-commerce Section */}
        <div className="premium-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Solutions E-commerce Complètes</h3>
            <p className="text-gray-300">Des boutiques en ligne professionnelles qui convertissent</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* E-commerce Features */}
            <div className="space-y-6">
              <div className="premium-card p-6">
                <h4 className="text-xl font-bold text-white mb-4">Fonctionnalités E-commerce</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Catalogue produits illimité
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Gestion des stocks en temps réel
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Paiements sécurisés (PayPal, Carte bancaire)
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Système de commandes avancé
                  </div>
                  <div className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="premium-text mr-3">•</span>
                    Analytics et rapports détaillés
                  </div>
                </div>
              </div>

              <div className="premium-card p-6">
                <h4 className="text-xl font-bold text-white mb-4">Avantages Concurrentiels</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    Design responsive et moderne
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    SEO optimisé pour le marché algérien
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    Support technique 24/7
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="premium-text mr-3">•</span>
                    Formation à l'utilisation incluse
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="premium-gradient p-6 md:p-8 rounded-2xl text-center shadow-2xl">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2">À partir de</div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-2">25,000 DA</div>
              <div className="text-slate-900 text-base sm:text-lg mb-6">Site E-commerce Complet</div>
              <ul className="space-y-3 text-slate-900 text-left">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Design personnalisé
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Gestion des produits
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Paiements intégrés
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Formation incluse
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Support 6 mois
                </li>
              </ul>
              <button className="w-full mt-6 bg-slate-900 text-white py-3 px-6 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                Demander un Devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 