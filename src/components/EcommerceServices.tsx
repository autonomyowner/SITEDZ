const EcommerceServices = () => {
  const ecommerceFeatures = [
    {
      title: "Boutique en Ligne Complète",
      description: "Créez votre boutique en ligne professionnelle avec toutes les fonctionnalités nécessaires",
      features: [
        "Catalogue produits illimité",
        "Gestion des stocks en temps réel", 
        "Système de commandes avancé",
        "Paiements sécurisés",
        "Analytics et rapports"
      ],
      icon: "🛒"
    },
    {
      title: "Design Responsive",
      description: "Interface utilisateur moderne et adaptée à tous les appareils",
      features: [
        "Design mobile-first",
        "Interface intuitive",
        "Navigation optimisée",
        "Chargement rapide",
        "Expérience utilisateur fluide"
      ],
      icon: "📱"
    },
    {
      title: "SEO & Marketing",
      description: "Optimisation pour les moteurs de recherche et outils marketing intégrés",
      features: [
        "SEO optimisé",
        "Intégration réseaux sociaux",
        "Email marketing",
        "Système de fidélité",
        "Coupons et promotions"
      ],
      icon: "📈"
    },
    {
      title: "Sécurité & Performance",
      description: "Sécurité renforcée et performances optimisées pour votre boutique",
      features: [
        "Certificat SSL",
        "Sauvegardes automatiques",
        "Protection contre les fraudes",
        "CDN intégré",
        "Monitoring 24/7"
      ],
      icon: "🔒"
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "25,000 DA",
      description: "Parfait pour débuter",
      features: [
        "Jusqu'à 50 produits",
        "Design responsive",
        "Paiement PayPal",
        "Support 3 mois",
        "Formation de base"
      ],
      popular: false
    },
    {
      name: "Professional", 
      price: "45,000 DA",
      description: "Le plus populaire",
      features: [
        "Produits illimités",
        "Design personnalisé",
        "Multiples moyens de paiement",
        "Support 6 mois",
        "Formation complète",
        "Analytics avancées"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "75,000 DA", 
      description: "Pour les grandes entreprises",
      features: [
        "Tout du Professional",
        "Intégrations personnalisées",
        "Support prioritaire 12 mois",
        "Formation avancée",
        "Consulting marketing",
        "Maintenance incluse"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Solutions <span className="text-blue-600">E-commerce</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Créez votre boutique en ligne professionnelle avec nos solutions complètes et sur mesure
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ecommerceFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tarifs E-commerce</h3>
            <p className="text-lg text-gray-600">Choisissez le plan qui correspond à vos besoins</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-2xl scale-105' 
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
                      Plus Populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h4>
                  <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                    {plan.price}
                  </div>
                  <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className={`mr-3 ${plan.popular ? 'text-green-300' : 'text-green-500'}`}>✓</span>
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-colors ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Choisir ce Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Prêt à Lancer Votre Boutique en Ligne ?</h3>
            <p className="text-xl mb-6">Contactez-nous pour une consultation gratuite et personnalisée</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Demander un Devis Gratuit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors">
                Voir nos Réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcommerceServices
