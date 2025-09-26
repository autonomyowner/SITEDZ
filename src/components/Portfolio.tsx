import { useTranslation } from 'react-i18next'

const Portfolio = () => {
  const { t } = useTranslation()
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
      url: "https://www.allouani.com/",
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
    },
    {
      name: "Elite Dental Clinic",
      description: "Site web premium pour un cabinet dentaire d'exception à Ouled Fayet, avec système de réservation intégré et augmentation des rendez-vous de 200%",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&crop=center",
      features: [
        "Système de réservation Google Calendar intégré",
        "Présentation des spécialités dentaires premium",
        "Tarifs transparents et devis en ligne",
        "Interface patient intuitive et moderne"
      ],
      url: "https://eliteclinicouledfayet.vercel.app/",
      category: "Santé & Médical",
      story: "Elite Dental Clinic, cabinet dentaire d'exception à Ouled Fayet, souhaitait moderniser sa prise de rendez-vous et améliorer sa communication avec les patients. Nous avons créé une plateforme élégante qui reflète leur excellence médicale, avec un système de réservation fluide qui a transformé leur gestion des rendez-vous."
    },
    {
      name: "24 Clinic Ben Aknoun",
      description: "Plateforme médicale moderne pour une clinique dentaire à Ben Aknoun, optimisant la prise de rendez-vous et améliorant l'expérience patient de 180%",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
      features: [
        "Interface de réservation 24/7",
        "Présentation des services dentaires",
        "Système de notifications automatiques",
        "Design responsive pour tous appareils"
      ],
      url: "https://24clinic.vercel.app/",
      category: "Santé & Médical",
      story: "24 Clinic Ben Aknoun, clinique dentaire moderne, avait besoin d'une présence digitale forte pour faciliter la prise de rendez-vous de ses patients. Notre solution a créé une expérience fluide qui permet aux patients de réserver facilement, améliorant significativement leur satisfaction."
    },
    {
      name: "Perfect Events",
      description: "Site événementiel élégant pour une entreprise de décoration à Tlemcen, créant une expérience immersive et augmentant les réservations de 220%",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop&crop=center",
      features: [
        "Galerie d'événements avec filtres par type",
        "Système de réservation personnalisé",
        "Témoignages clients intégrés",
        "Design élégant reflétant l'art événementiel"
      ],
      url: "https://perfe-dun.vercel.app/",
      category: "Événementiel & Décoration",
      story: "Perfect Events, spécialiste de la décoration événementielle à Tlemcen, cherchait à digitaliser ses services et attirer de nouveaux clients. Nous avons créé une plateforme qui capture la magie de leurs créations, avec une galerie immersive et un système de réservation qui facilite la prise de contact."
    },
    {
      name: "SPEA Cup",
      description: "Plateforme éducative innovante pour l'apprentissage de l'anglais à Alger, créant une communauté d'apprenants et augmentant les inscriptions de 150%",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      features: [
        "Système d'inscription aux sessions",
        "Présentation des méthodes d'apprentissage",
        "Interface communautaire pour les apprenants",
        "Design chaleureux et accueillant"
      ],
      url: "https://spea-cup.vercel.app/",
      category: "Éducation & Formation",
      story: "SPEA Cup, initiative d'apprentissage de l'anglais à Alger, voulait créer une communauté d'apprenants autour de sessions conviviales. Notre plateforme facilite l'inscription aux sessions 'Learn English Over Coffee', créant une expérience d'apprentissage unique et engageante dans l'atmosphère chaleureuse des cafés algérois."
    }
  ]

  return (
    <section id="portfolio" className="py-16 px-4 luxora-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            {t('portfolio.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
          
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              {t('portfolio.badge')}
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  <h4 className="font-semibold luxora-text mb-2 text-sm">{t('portfolio.story')}:</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.story}
                  </p>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold luxora-text mb-3">{t('portfolio.features')}:</h4>
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
                    {t('portfolio.viewProject')}
                  </a>
                  <button 
                    className="luxora-button text-center text-sm flex-1"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    {t('portfolio.viewProject')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="luxora-card p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold luxora-text mb-4">{t('portfolio.stats.title')}</h3>
            <p className="text-gray-600">{t('portfolio.stats.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">50+</div>
              <div className="text-gray-600 text-sm">{t('portfolio.stats.sitesCreated')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">100%</div>
              <div className="text-gray-600 text-sm">{t('portfolio.stats.satisfiedClients')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">5</div>
              <div className="text-gray-600 text-sm">{t('portfolio.stats.deliveryDays')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold luxora-green-text mb-2">24/7</div>
              <div className="text-gray-600 text-sm">{t('portfolio.stats.supportAvailable')}</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold luxora-text mb-6">{t('portfolio.cta.title')}</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('portfolio.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-base px-8 py-3"
              onClick={() => window.open('/contact', '_self')}
            >
              {t('portfolio.cta.startProject')}
            </button>
            <button 
              className="luxora-button text-base px-8 py-3"
              onClick={() => window.open('/pricing', '_self')}
            >
              {t('portfolio.cta.viewPricing')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
