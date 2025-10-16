'use client'

import { useState, useEffect, useRef } from 'react'
import ImagePreview from './ui/ImagePreview'

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
    name: 'Allouani Parfumerie',
    event: 'Site E-commerce',
    content:
      "Notre collaboration avec vous a été une expérience réussie à tous les égards. Nous sommes fiers de ce partenariat et nous vous souhaitons encore plus de succès, de prospérité et de leadership dans le domaine de la création de sites web.\n\nAvec nos salutations distinguées,\nSociété Allouani",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    name: 'elghella startup',
    event: 'STARTUP',
    content:
      "Votre confiance, votre engagement et votre excellente collaboration ont été des facteurs déterminants dans la réussite de cette étape. Nous apprécions grandement votre sens des responsabilités et votre dévouement exemplaire tout au long du processus de développement.\n\nRecevez toute notre reconnaissance et nos remerciements les plus sincères, accompagnés de nos vœux de succès et de réussite continue dans votre parcours professionnel.\n\nAvec nos salutations les plus distinguées,\nL'équipe El Ghella",
    rating: '5/5 satisfaction',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
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
  const [visibleTestimonials, setVisibleTestimonials] = useState<Set<string>>(
    new Set(),
  )
  const statsRef = useRef<HTMLDivElement>(null)
  const testimonialRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

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

  useEffect(() => {
    const testimonialObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialId = entry.target.getAttribute('data-testimonial-id')
            if (testimonialId) {
              setVisibleTestimonials((prev) => new Set(prev).add(testimonialId))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    Object.values(testimonialRefs.current).forEach((ref) => {
      if (ref) {
        testimonialObserver.observe(ref)
      }
    })

    return () => {
      testimonialObserver.disconnect()
    }
  }, [])

  const getAnimationClasses = (testimonialId: string): string => {
    const isTestimonialVisible = visibleTestimonials.has(testimonialId)

    if (testimonialId === '1') {
      // Allouani - from left to right
      return `transition-all duration-[1200ms] ease-out ${
        isTestimonialVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-16'
      }`
    }

    if (testimonialId === '2') {
      // elghella - from bottom to top
      return `transition-all duration-[1200ms] ease-out ${
        isTestimonialVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16'
      }`
    }

    // Default animation for other testimonials
    return `transition-all duration-[1200ms] ease-out ${
      isTestimonialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`
  }

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
              ref={(el) => {
                testimonialRefs.current[testimonial.id] = el
              }}
              data-testimonial-id={testimonial.id}
              className={`flex h-full flex-col rounded-3xl border border-neutral-200 bg-white/90 p-8 shadow-sm hover:-translate-y-1 hover:shadow-md ${getAnimationClasses(testimonial.id)}`}
            >
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-full border border-neutral-200">
                  <ImagePreview
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="object-cover cursor-pointer hover:opacity-80 transition-opacity rounded-full"
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
