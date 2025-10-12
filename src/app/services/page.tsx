import { ServicesList } from '@/components/ServicesList'
import { PricingSection } from '@/components/PricingSection'

export default function ServicesPage(): JSX.Element {
  return (
    <div className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Prestations
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Nos services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-600">
            Explorez nos solutions web pour concevoir, developper et lancer votre
            site internet avec une approche professionnelle et personnalisee.
          </p>
        </div>

        <div className="mt-16">
          <ServicesList />
        </div>

        <PricingSection />
      </div>
    </div>
  )
}
