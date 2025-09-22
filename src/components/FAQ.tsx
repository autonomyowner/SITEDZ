import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer mon site web ?",
      answer: "Généralement, nous livrons votre site en 5-7 jours selon la complexité du projet. Pour un site vitrine simple, comptez 5 jours. Pour une boutique en ligne complète, 7 jours. Nous vous tenons informé de l'avancement quotidiennement."
    },
    {
      question: "Quels modes de paiement acceptez-vous en Algérie ?",
      answer: "Nous acceptons tous les modes de paiement locaux : virements bancaires, paiement en espèces, CIB, EDAHABIA, CCP, et les paiements internationaux via PayPal. Nous nous adaptons à votre préférence de paiement."
    },
    {
      question: "Incluez-vous l'hébergement et le nom de domaine ?",
      answer: "Oui ! Tous nos plans incluent un an d'hébergement rapide et sécurisé, ainsi que l'enregistrement du nom de domaine .com. Pas de frais cachés, tout est inclus dans le prix affiché."
    },
    {
      question: "Puis-je modifier mon site après la livraison ?",
      answer: "Absolument ! Nous fournissons une formation complète pour que vous puissiez gérer votre contenu. Pour les modifications techniques importantes, nous offrons un support continu et des mises à jour selon vos besoins."
    },
    {
      question: "Mon site sera-t-il visible sur Google en Algérie ?",
      answer: "Oui ! Nous optimisons tous nos sites pour le SEO local en Algérie. Votre site sera optimisé pour apparaître dans les recherches Google des internautes algériens, avec une attention particulière aux mots-clés en français et en arabe."
    },
    {
      question: "Proposez-vous un support technique ?",
      answer: "Oui, nous offrons un support WhatsApp 24/7. Vous pouvez nous contacter à tout moment pour toute question technique. Nous répondons généralement dans l'heure qui suit."
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait ?",
      answer: "Nous offrons une garantie de satisfaction de 30 jours. Si vous n'êtes pas entièrement satisfait du résultat, nous remboursons intégralement votre investissement. Votre satisfaction est notre priorité."
    },
    {
      question: "Mon site sera-t-il adapté aux mobiles ?",
      answer: "Bien sûr ! Tous nos sites sont 100% responsives et optimisés pour tous les appareils : ordinateurs, tablettes et smartphones. L'expérience utilisateur est parfaite sur tous les écrans."
    },
    {
      question: "Puis-je ajouter des fonctionnalités plus tard ?",
      answer: "Oui, nous proposons des services d'extension et de maintenance. Vous pouvez ajouter de nouvelles fonctionnalités, intégrer des systèmes de paiement supplémentaires, ou étendre votre site selon l'évolution de votre entreprise."
    },
    {
      question: "Comment puis-je suivre les performances de mon site ?",
      answer: "Nous intégrons Google Analytics et Google Business à tous nos sites. Vous recevrez des rapports mensuels sur les performances, le trafic, et les conversions. Nous vous expliquons comment interpréter ces données."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 px-4 luxora-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold luxora-text mb-6">
            Questions Fréquentes
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur la création de sites web en Algérie. 
            Des réponses claires à vos questions les plus courantes.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 luxora-card rounded-full luxora-text text-sm font-medium mb-8">
            <span className="text-center">
              Expertise locale pour le marché algérien
            </span>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="luxora-card overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold luxora-text pr-4">
                  {faq.question}
                </h3>
                <span className={`text-2xl transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center luxora-card p-8">
          <h3 className="text-2xl font-bold luxora-text mb-4">
            Vous avez d'autres questions ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous aider. Contactez-nous pour une consultation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="luxora-green-button text-base px-8 py-3"
              onClick={() => window.open('/contact', '_self')}
            >
              Poser une question
            </button>
            <a 
              href="https://wa.me/213797339451?text=Bonjour! J'ai une question sur vos services de création de sites web."
              target="_blank"
              rel="noopener noreferrer"
              className="luxora-button text-base px-8 py-3 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
