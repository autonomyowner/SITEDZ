type ValueItem = {
  title: string
  description: string
}

const values: ValueItem[] = [
  {
    title: 'Excellence',
    description:
      'Une exigence constante dans le choix des technologies, du design et des fonctionnalites.',
  },
  {
    title: 'Innovation',
    description:
      'Des solutions modernes qui respectent votre identite et l esprit de votre entreprise.',
  },
  {
    title: 'Transparence',
    description:
      'Un dialogue clair a chaque etape pour avancer sereinement ensemble.',
  },
  {
    title: 'Reactivite',
    description:
      'Une organisation precise pour garantir des livraisons rapides et un support immediat.',
  },
  {
    title: 'Personnalisation',
    description:
      'Chaque site web est concu sur mesure a partir de vos besoins et objectifs.',
  },
  {
    title: 'Expertise',
    description:
      'Une equipe qualifiee qui veille a ce que votre projet web soit parfaitement realise.',
  },
]

export const ValuesSection = (): JSX.Element => {
  return (
    <section className="border-t border-neutral-200 bg-white/70 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Notre approche
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Des valeurs qui guident chaque projet
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-600">
            Innovation, qualite et sens du service structurent notre facon
            de creer des sites web. Nous cultivons des relations solides
            et durables avec nos clients.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-neutral-900">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-neutral-200 bg-white/85 px-6 py-12 text-center shadow-sm sm:px-12">
          <h3 className="text-2xl font-elegant font-semibold text-neutral-900">
            Notre engagement
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-neutral-600">
            Assurer une experience fluide et respectueuse de vos delais. Nous
            orchestrons le developpement, le design et le deploiement avec la
            meme attention que pour la phase de conception.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 text-sm uppercase tracking-[0.3em] text-neutral-500 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-6">
              Qualite
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-6">
              Service
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white/80 px-6 py-6">
              Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
