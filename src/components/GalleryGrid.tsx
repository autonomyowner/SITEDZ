'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type GalleryItem = {
  id: string
  title: string
  category: string
  image: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Gran Turismo',
    category: 'Transport de luxe',
    image: '/projects/gran-turismo.webp',
    description:
      'Chauffeur prive haut de gamme. Discretion, confort et excellence pour vos trajets sur la Cote d Azur et en Italie du Nord.',
  },
  {
    id: '2',
    title: 'El Ghella',
    category: 'Agriculture',
    image: '/projects/elghella.webp',
    description:
      'Produits agricoles et services. Alliance d innovation et de nature pour un avenir agricole durable.',
  },
  {
    id: '3',
    title: 'Parfumerie Allouani',
    category: 'Luxe & Beaute',
    image: '/projects/allouani.webp',
    description:
      'Parfums de luxe. Elegance, raffinement et senteurs exclusives venues du monde entier.',
  },
  {
    id: '4',
    title: 'Planete Nutrition',
    category: 'Sante & Bien-etre',
    image: '/projects/nutrition.webp',
    description:
      'Sante & bien-etre. Supplements de qualite pour performance, equilibre et vitalite au quotidien.',
  },
  {
    id: '5',
    title: 'Triomphe',
    category: 'Decoration',
    image: '/projects/triomphe.webp',
    description:
      'Decoration interieure. Pieces raffinees et modernes pour sublimer vos espaces de vie.',
  },
  {
    id: '6',
    title: 'El Wakil Immobilier',
    category: 'Immobilier',
    image: '/projects/elwakil.png',
    description:
      'Immobilier de prestige. Expertise locale et service premium pour des biens d exception en Algerie.',
  },
]

export const GalleryGrid = (): JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  useEffect(() => {
    if (!selectedImage) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
        return
      }

      const currentIndex = galleryItems.findIndex(
        (item) => item.id === selectedImage.id,
      )

      if (event.key === 'ArrowRight') {
        const nextIndex =
          currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
        setSelectedImage(galleryItems[nextIndex])
      }

      if (event.key === 'ArrowLeft') {
        const previousIndex =
          currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
        setSelectedImage(galleryItems[previousIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const handleImageClick = (item: GalleryItem): void => {
    setSelectedImage(item)
  }

  const handlePrevious = (): void => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id,
    )
    const previousIndex =
      currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1
    setSelectedImage(galleryItems[previousIndex])
  }

  const handleNext = (): void => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(
      (item) => item.id === selectedImage.id,
    )
    const nextIndex =
      currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1
    setSelectedImage(galleryItems[nextIndex])
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleImageClick(item)}
            className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/80 text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                  {item.category}
                </p>
                <p className="text-lg font-elegant font-semibold text-white">
                  {item.title}
                </p>
                <p className="text-sm text-white/80">{item.description}</p>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 underline underline-offset-4">
                  Voir le projet
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl my-8 rounded-3xl border border-neutral-700 bg-neutral-900/80 p-4 sm:p-6 backdrop-blur">
            <div className="flex justify-between gap-4 text-xs uppercase tracking-[0.3em] text-neutral-300">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="underline underline-offset-4 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                Fermer
              </button>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="underline underline-offset-4 hover:text-white transition-colors"
                  aria-label="Image precedente"
                >
                  Precedent
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="underline underline-offset-4 hover:text-white transition-colors"
                  aria-label="Image suivante"
                >
                  Suivant
                </button>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 overflow-hidden rounded-2xl">
              <div className="relative w-full max-h-[50vh] sm:max-h-[60vh]">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  width={1200}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
                  className="w-full h-full object-contain"
                  quality={90}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-6 rounded-2xl bg-neutral-900/70 px-4 sm:px-6 py-4 sm:py-5 text-neutral-100">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-300">
                {selectedImage.category}
              </p>
              <p className="mt-2 sm:mt-3 text-xl sm:text-2xl font-elegant font-semibold">
                {selectedImage.title}
              </p>
              <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-neutral-200">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
