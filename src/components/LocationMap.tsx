const serviceAreas = [
  'Alger',
  'Oran',
  'Constantine',
  'Tlemcen',
  'Annaba',
  'Partout en Algerie',
]

export const LocationMap = (): JSX.Element => {
  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-neutral-200 bg-white/90 px-6 py-10 shadow-sm">
        <h2 className="text-2xl font-elegant font-semibold text-neutral-900">
          Zone de service
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Nous travaillons avec des clients partout en Algerie. Nos services
          sont accessibles a distance, avec possibilite de rendez-vous en ligne
          pour discuter de votre projet.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-neutral-600 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3"
            >
              {area}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Services disponibles partout en Algerie
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-10 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Notre localisation
        </h3>
        <div className="mt-6 h-64 rounded-2xl border border-neutral-200 bg-neutral-100/70">
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-neutral-500">
            Carte interactive bientot disponible
          </div>
        </div>
        <div className="mt-6 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">Localisation</p>
            <p className="mt-1">
              Algerie
              <br />
              Services disponibles a distance
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Accessibilite</p>
            <p className="mt-1">
              Consultation en ligne via WhatsApp, appel ou visioconference.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Couverture</p>
            <p className="mt-1">
              Services web disponibles dans toute l Algerie, sans limitation
              geographique.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white/80 px-6 py-8 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Informations pratiques
        </h3>
        <div className="mt-4 grid gap-4 text-sm text-neutral-600">
          <div>
            <p className="font-semibold text-neutral-900">Consultation</p>
            <p className="mt-1">
              Consultation gratuite en ligne pour discuter de votre projet et
              definir vos besoins.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Livraison</p>
            <p className="mt-1">
              Livraison rapide de votre site web avec formation complete a
              l utilisation.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Support</p>
            <p className="mt-1">
              Pour toute assistance technique, contactez-nous via WhatsApp pour
              une reponse rapide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
