import { GalleryGrid } from '@/components/GalleryGrid'

export default function GalleryPage(): JSX.Element {
  return (
    <div className="min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Galerie
          </p>
          <h1 className="mt-4 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Nos realisations
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-neutral-600">
            Un apercu de nos projets web : sites vitrine, boutiques e-commerce,
            portfolios et solutions sur mesure concus pour repondre aux besoins
            de nos clients.
          </p>
        </div>

        <div className="mt-16">
          <GalleryGrid />
        </div>
      </div>
    </div>
  )
}
