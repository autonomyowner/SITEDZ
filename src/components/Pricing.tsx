import { useEffect } from 'react'
import PayPalCheckout from './PayPalCheckout'
import { trackViewContent, trackAddToCart, trackInitiateCheckout, trackButtonClick, trackSchedule } from '../utils/facebookPixel'

const Pricing = () => {
  useEffect(() => {
    // Track that user viewed the pricing page
    trackViewContent('Pricing Page', 'pricing_page')
  }, [])

  const handlePlanClick = (planName: string, planPrice: string) => {
    const priceValue = parseFloat(planPrice.replace(',', ''))
    trackAddToCart(planName, priceValue, 'DZD')
    trackButtonClick(`Select ${planName} Plan`, 'pricing_plans')
  }

  const handlePayPalClick = (planName: string, amount: string) => {
    trackInitiateCheckout(planName, parseFloat(amount), 'USD')
    trackButtonClick(`PayPal Checkout ${planName}`, 'pricing_plans')
  }
  const plans = [
    {
      name: "Site Vitrine",
      price: "15,000",
      currency: "DA",
      period: "Paiement unique",
      description: "Parfait pour les petites entreprises",
      features: [
        "Site web professionnel et responsive",
        "Design moderne et personnalisé",
        "Nom de domaine .com inclus (1 an)",
        "Hébergement rapide et sécurisé",
        "Optimisation SEO de base",
        "Intégration réseaux sociaux",
        "Support WhatsApp 24/7",
        "Formation à l'utilisation",
        "Garantie 30 jours"
      ],
      popular: false,
      cta: "Commencer",
      color: "border-blue-500"
    },
    {
      name: "Boutique en Ligne",
      price: "35,000",
      currency: "DA",
      period: "Paiement unique",
      description: "Idéal pour l'e-commerce en Algérie",
      features: [
        "Tout du Site Vitrine",
        "Boutique en ligne complète",
        "Gestion des commandes",
        "Paiements locaux (CIB, EDAHABIA, CCP)",
        "Paiements internationaux (PayPal, Stripe)",
        "Gestion des stocks",
        "Analytics et rapports",
        "Mode sombre inclus",
        "Sauvegardes automatiques",
        "Support 3 mois inclus"
      ],
      popular: true,
      cta: "Lancer ma boutique",
      color: "border-green-500"
    },
    {
      name: "Solution Entreprise",
      price: "75,000",
      currency: "DA",
      period: "Paiement unique",
      description: "Solution complète pour grandes entreprises",
      features: [
        "Tout de la Boutique en Ligne",
        "Application web sur mesure",
        "Multi-utilisateurs et rôles",
        "Intégrations avancées",
        "API personnalisées",
        "Sécurité renforcée",
        "Performance optimisée",
        "Support prioritaire",
        "Formation équipe complète",
        "Maintenance 6 mois incluse"
      ],
      popular: false,
      cta: "Solution complète",
      color: "border-purple-500"
    }
  ]

  const addons = [
    {
      name: "Pack Marketing Digital",
      price: "8,000",
      description: "Optimisation complète pour Google et réseaux sociaux",
      features: ["Google Business optimisé", "Facebook Pixel", "Instagram Shopping", "Analytics avancées"]
    },
    {
      name: "Nom de Domaine Premium",
      price: "5,000",
      description: "Nom de domaine personnalisé pour votre marque",
      features: ["Domaine .com personnalisé", "Configuration automatique", "Certificat SSL", "Support technique"]
    },
    {
      name: "Page d'Accueil Premium",
      price: "12,000",
      description: "Page d'accueil optimisée pour maximiser les conversions",
      features: ["Design sur mesure", "Optimisation conversion", "Tests A/B", "Analytics détaillées"]
    },
    {
      name: "Maintenance Mensuelle",
      price: "4,000",
      description: "Maintenance continue pour garder votre site performant",
      features: ["Mises à jour sécurité", "Monitoring performance", "Sauvegardes quotidiennes", "Support 24/7"]
    }
  ]

  return (
    <section id="pricing" className="py-16 px-4 luxora-bg pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="ml-2">Tarifs transparents - Aucun frais caché</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold luxora-text mb-6 leading-tight">
            Choisissez
            <span className="block luxora-green-text">votre solution idéale</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Tarifs transparents avec tout ce dont vous avez besoin pour réussir en ligne. 
            Tous les plans incluent l'hébergement, le domaine et le support continu.
          </p>

          {/* Special Offers */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="luxora-card p-6 text-center">
              <div className="text-2xl font-bold luxora-green-text mb-3">Maquette gratuite</div>
              <p className="text-gray-600 text-sm mb-4">
                Obtenez une maquette de votre site gratuitement avant de vous engager
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Offre gratuite
              </div>
            </div>
            <div className="luxora-card p-6 text-center">
              <div className="text-2xl font-bold luxora-green-text mb-3">Paiement après satisfaction</div>
              <p className="text-gray-600 text-sm mb-4">
                Payez seulement après être entièrement satisfait du résultat final
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Garantie satisfaction
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`luxora-card p-6 md:p-8 relative ${plan.popular ? 'ring-2 ring-green-500 md:scale-105' : ''}`}
              >
                
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold luxora-text mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 md:mb-6">{plan.description}</p>
                  
                  <div className="mb-2 md:mb-4">
                    <span className="text-3xl md:text-4xl font-bold luxora-green-text">{plan.price}</span>
                    <span className="text-gray-600 text-lg ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.period}</p>
                  {plan.name === 'Boutique en Ligne' && (
                    <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                      <span className="ml-1">Économisez 40,000 DA vs Solution Entreprise</span>
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-1 gap-1">
                    <div className="text-green-600 text-xs sm:text-sm">Livré en 5 jours</div>
                    <div className="text-green-600 text-xs sm:text-sm">Support WhatsApp 24/7</div>
                  </div>
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 text-sm md:text-base">
                      <span className="text-green-600 mr-3 flex-shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`luxora-green-button w-full text-center ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  onClick={() => {
                    handlePlanClick(plan.name, plan.price)
                    window.open('/contact', '_self')
                  }}
                >
                  {plan.cta}
                </button>
                {/* PayPal checkout - fixed USD per plan */}
                <div className="mt-3">
                  {(() => {
                    const amountMap = { 'Site Vitrine': '1.50', 'Boutique en Ligne': '3.50', 'Solution Entreprise': '7.50' } as const
                    const amount = amountMap[plan.name as keyof typeof amountMap]
                    if (!amount) return null
                    return (
                      <>
                        <PayPalCheckout
                          amount={amount}
                          currency="USD"
                          description={`${plan.name} - Paiement complet`}
                          className="flex justify-center"
                          onSuccess={() => handlePayPalClick(plan.name, amount)}
                        />
                      </>
                    )
                  })()}
                </div>
                <div className="mt-3">
                  <button 
                    className="luxora-button w-full text-center text-sm"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    Réserver un devis gratuit
                  </button>
                </div>

                <div className="mt-4 text-gray-500 text-xs sm:text-sm">
                  <div>Paiement unique. Propriété à vie. Aucun frais caché.</div>
                  <div>Pas sûr ? Obtenez une consultation gratuite de 30 minutes avant de vous engager.</div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold luxora-text text-center mb-8">Services Additionnels</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-base">
              Renforcez votre site avec ces services puissants. Idéal pour les entreprises qui ont besoin de fonctionnalités supplémentaires.
            </p>
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <span className="ml-2">Tarifs 2025 bloqués - Les prix augmentent en 2026</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="luxora-card p-6 text-left">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="mb-2 md:mb-0">
                      <h3 className="text-xl font-bold luxora-text mb-2">{addon.name}</h3>
                      <p className="text-gray-600 text-sm">{addon.description}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-2xl font-bold luxora-green-text">{addon.price}</div>
                      <div className="text-gray-500 text-sm">DA</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <span className="text-green-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="luxora-button w-full text-center text-sm"
                    onClick={() => window.open('/contact', '_self')}
                  >
                    Bloquer prix 2025
                  </button>
                </div>
              ))}
            </div>
          </div>


          {/* FAQ Section */}
          <div className="luxora-card p-6 md:p-8 mb-12">
            <h2 className="text-3xl font-bold luxora-text text-center mb-8">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="luxora-text font-semibold mb-2">Combien de temps faut-il pour créer mon site ?</h4>
                  <p className="text-gray-600 text-sm">Généralement 5-7 jours selon la complexité et le plan choisi.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">Incluez-vous l'hébergement et le domaine ?</h4>
                  <p className="text-gray-600 text-sm">Oui ! Tous les plans incluent un an d'hébergement et l'enregistrement du domaine.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">Puis-je faire des modifications après le lancement ?</h4>
                  <p className="text-gray-600 text-sm">Bien sûr ! Nous fournissons le support et pouvons effectuer les mises à jour selon vos besoins.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="luxora-text font-semibold mb-2">Quels modes de paiement acceptez-vous ?</h4>
                  <p className="text-gray-600 text-sm">Nous acceptons les virements bancaires, paiement en espèces, et les paiements électroniques locaux (CIB, EDAHABIA, CCP).</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">Proposez-vous de la formation ?</h4>
                  <p className="text-gray-600 text-sm">Oui ! Nous fournissons une formation complète sur la gestion du contenu de votre site.</p>
                </div>
                <div>
                  <h4 className="luxora-text font-semibold mb-2">Y a-t-il des frais de maintenance ?</h4>
                  <p className="text-gray-600 text-sm">La maintenance de base est incluse. La maintenance avancée est disponible comme service additionnel.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold luxora-text mb-6">Prêt à lancer votre projet ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Obtenez une consultation gratuite et un devis personnalisé selon vos besoins spécifiques. 
              Sans engagement, juste des conseils d'experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="luxora-green-button text-base px-8 py-3"
                onClick={() => {
                  trackSchedule('Free Consultation')
                  trackButtonClick('Get Free Consultation', 'pricing_cta')
                  window.open('/contact', '_self')
                }}
              >
                Consultation gratuite
              </button>
              <a 
                href="https://wa.me/213797339451?text=Bonjour! Je suis intéressé par vos services de développement web. Pouvez-vous me donner plus d'informations sur vos tarifs?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="luxora-button text-base px-8 py-3"
              >
                <span className="ml-2">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
