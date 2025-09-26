import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  const services = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
      title: t('services.showcase.title'),
      description: t('services.showcase.description')
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center",
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description')
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center",
      title: t('services.webapps.title'),
      description: t('services.webapps.description')
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop&crop=center",
      title: t('services.branding.title'),
      description: t('services.branding.description')
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop&crop=center",
      title: t('services.seo.title'),
      description: t('services.seo.description')
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop&crop=center",
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description')
    }
  ]

  return (
    <section id="services" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            {t('services.title')}
          </h2>
          
          {/* Professional Mission Statement */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
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

        {/* Notre Stratégie Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold luxora-text mb-4">
              Notre <span className="text-green-600">Stratégie</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche méthodique et professionnelle pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Analyse approfondie des besoins clients */}
            <div className="luxora-card p-6 lg:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold luxora-text mb-3">Analyse approfondie des besoins clients</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Notre équipe chez SITEDZ excelle dans l'analyse approfondie des besoins clients pour votre projet de développement web.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Identification des exigences spécifiques du client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Évaluation des objectifs à court et à long terme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Analyse des préférences et attentes des utilisateurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Examen des tendances du marché</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Collecte de données sur la concurrence</span>
                </li>
              </ul>
            </div>

            {/* Définition des objectifs de développement web */}
            <div className="luxora-card p-6 lg:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold luxora-text mb-3">Définition des objectifs de développement web</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Chez SITEDZ, nous croyons en des objectifs clairs et mesurables pour assurer le succès de votre projet.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Établissement d'objectifs SMART</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Priorisation des fonctionnalités essentielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Détermination des indicateurs de performance clés (KPI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Alignement avec la vision de l'entreprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Validation des objectifs avec les parties prenantes</span>
                </li>
              </ul>
            </div>

            {/* Stratégie de conception et d'expérience utilisateur */}
            <div className="luxora-card p-6 lg:p-8 md:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold luxora-text mb-3">Stratégie de conception et d'expérience utilisateur (UX)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SITEDZ excelle dans la création de sites web esthétiquement plaisants et fonctionnels.
                </p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Création de wireframes et de maquettes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Définition de la structure de navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Optimisation de l'expérience utilisateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Intégration des principes de conception responsives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Test de convivialité et ajustements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* E-commerce Section */}
        <div className="mt-16">
          <div className="luxora-card p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold luxora-text mb-4">Solutions E-commerce Complètes</h3>
              <p className="text-lg text-gray-600">Des boutiques en ligne professionnelles qui convertissent</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* E-commerce Features */}
              <div className="space-y-6">
                <div className="luxora-card p-6">
                  <h4 className="text-xl font-bold luxora-text mb-4">Fonctionnalités E-commerce</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <span className="text-green-500 mr-3">•</span>
                      Catalogue produits illimité
                    </div>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <span className="text-green-500 mr-3">•</span>
                      Gestion des stocks en temps réel
                    </div>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <span className="text-green-500 mr-3">•</span>
                      Paiements sécurisés (PayPal, Carte bancaire)
                    </div>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <span className="text-green-500 mr-3">•</span>
                      Système de commandes avancé
                    </div>
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <span className="text-green-500 mr-3">•</span>
                      Analytics et rapports détaillés
                    </div>
                  </div>
                </div>

                <div className="luxora-card p-6">
                  <h4 className="text-xl font-bold luxora-text mb-4">Avantages Concurrentiels</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-3">•</span>
                      Design responsive et moderne
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-3">•</span>
                      SEO optimisé pour le marché algérien
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-3">•</span>
                      Support technique 24/7
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-3">•</span>
                      Formation à l'utilisation incluse
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="luxora-card p-6 md:p-8 rounded-2xl text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold luxora-text mb-2">À partir de</div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-600 mb-2">25,000 DA</div>
                <div className="text-lg text-gray-600 mb-6">Site E-commerce Complet</div>
                <ul className="space-y-3 text-left text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Design personnalisé
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Gestion des produits
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Paiements intégrés
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Formation incluse
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Support 6 mois
                  </li>
                </ul>
                <button className="w-full mt-6 luxora-green-button py-3 px-6 rounded-lg font-bold">
                  Demander un Devis
                </button>
              </div>
            </div>
          </div>
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