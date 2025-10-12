'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

type Testimonial = {
  id: string
  name: string
  event: string
  content: string
  rating: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Benali',
    event: 'Site E-commerce',
    content:
      "SiteDZ Store a cree notre boutique en ligne avec un design moderne et professionnel. Les ventes ont augmente de 300% depuis le lancement!",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'Yasmine Meziane',
    event: 'Site Vitrine',
    content:
      "Un site web elegant et rapide qui represente parfaitement notre entreprise. L equipe est professionnelle et a l ecoute.",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    name: 'Karim Hadj',
    event: 'Site Restaurant',
    content:
      "Notre nouveau site web a transforme notre activite. Les reservations en ligne fonctionnent parfaitement. Service excellent!",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
  },
]

const useCountUpAnimation = (
  endValue: number,
  duration: number = 2000,
  isVisible: boolean,
): number => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number): void => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * endValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [endValue, duration, isVisible])

  return count
}

export const TestimonialsSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const projectsCount = useCountUpAnimation(50, 2000, isVisible)
  const satisfactionCount = useCountUpAnimation(100, 2000, isVisible)
  const supportCount = useCountUpAnimation(24, 1500, isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  return (
    <section className="border-y border-neutral-200 bg-white/80 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
            Temoignages clients
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-neutral-900 sm:text-5xl">
            Des sites web qui transforment les entreprises
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
            Chaque projet est accompagne avec professionnalisme et expertise pour offrir
            une experience web exceptionnelle aux entreprises qui nous font confiance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-neutral-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    {testimonial.rating}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">{testimonial.event}</p>
                </div>
              </div>

              <p className="mt-6 flex-1 text-sm leading-relaxed text-neutral-600">
                {`"${testimonial.content}"`}
              </p>
            </article>
          ))}
        </div>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-1 gap-6 text-center sm:grid-cols-3"
        >
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              {projectsCount}+
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Projets web realises
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              {satisfactionCount}%
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Clients satisfaits
            </p>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 px-6 py-8">
            <p className="text-4xl font-elegant font-semibold text-neutral-900">
              {supportCount}/7
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Support technique
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
