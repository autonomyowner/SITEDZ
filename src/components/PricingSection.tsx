'use client'

export const PricingSection = (): JSX.Element => {
  const handleContactClick = (): void => {
    const phoneNumber = '+213797339451'
    const message =
      'Bonjour! Je souhaite obtenir un devis pour mon projet de site web.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="mt-24 rounded-3xl border border-neutral-200 bg-lightOrange-500/85 px-6 py-16 shadow-sm sm:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
          Tarification
        </p>
        <h2 className="mt-4 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
          Des devis personnalises selon vos besoins
        </h2>
        <p className="mt-6 text-base leading-relaxed text-neutral-600">
          Chaque projet est unique. Nous construisons des offres modulables en
          fonction de vos besoins, des fonctionnalites requises et de votre
          budget.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: 'Site Vitrine',
            description: 'Presence professionnelle pour votre entreprise en ligne.',
            points: [
              'Design moderne et responsive',
              'Optimisation SEO incluse',
              'Hebergement et domaine 1 an',
            ],
          },
          {
            title: 'E-commerce',
            description: 'Boutique en ligne complete pour vendre vos produits.',
            points: [
              'Gestion produits et stocks',
              'Paiement en ligne securise',
              'Tableau de bord complet',
            ],
          },
          {
            title: 'Sur Mesure',
            description: 'Solution personnalisee adaptee a vos besoins specifiques.',
            points: [
              'Fonctionnalites personnalisees',
              'Integration systemes existants',
              'Formation et support continu',
            ],
          },
        ].map((offer) => (
          <div
            key={offer.title}
            className="flex flex-col rounded-3xl border border-neutral-200 bg-lightOrange-500/90 px-6 py-8 text-left shadow-sm"
          >
            <h3 className="text-xl font-semibold text-neutral-900">
              {offer.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {offer.description}
            </p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-neutral-600">
              {offer.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Sur devis
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
          Parlons de votre projet
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous ecoutons vos besoins, analysons vos objectifs et composons une
          proposition detaillee pour garantir un site web qui depasse vos
          attentes.
        </p>
        <button
          onClick={handleContactClick}
          className="mt-7 rounded-full bg-neutral-900 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:bg-neutral-700"
          type="button"
        >
          Demander un devis
        </button>
      </div>
    </section>
  )
}
