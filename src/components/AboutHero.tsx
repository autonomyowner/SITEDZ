import Image from 'next/image'

export const AboutHero = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                A propos
              </p>
              <h1 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
                SiteDZ Store cultive l excellence digitale
              </h1>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Basee en Algerie, SiteDZ Store cree des sites web modernes et performants
                qui transforment votre presence en ligne. Nous donnons vie a vos projets
                digitaux grace a un design soigne, des technologies modernes et une expertise
                adaptee au marche algerien.
              </p>
            </div>

            <div className="grid gap-8">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre mission
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Depuis plusieurs annees, nous aidons les entreprises algeriennes
                  a reussir en ligne avec des sites web professionnels, rapides et
                  optimises pour le marche local.
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Notre promesse
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Livrer des sites web de qualite professionnelle, du premier brief
                  au lancement final, pour une presence en ligne sans compromis et
                  parfaitement adaptee a vos besoins.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  50+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Projets
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Satisfaction
                </p>
              </div>
              <div>
                <p className="text-3xl font-elegant font-semibold text-neutral-900">
                  24/7
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Support
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/80 shadow-lg">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Equipe SiteDZ Store"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/10" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 w-60 -translate-x-1/2 rounded-3xl border border-neutral-200 bg-white/95 px-6 py-5 text-center shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Expertise technique
              </p>
              <p className="mt-3 text-sm text-neutral-600">
                Technologies modernes et design sur mesure pour chaque projet web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
