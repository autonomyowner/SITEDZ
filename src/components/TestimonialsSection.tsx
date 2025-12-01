'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type Project = {
  id: string
  name: string
  type: string
  url: string
  description: string
}

const projects: Project[] = [
  {
    id: '1',
    name: 'ZSST Marketplace',
    type: 'E-commerce B2B/B2C',
    url: 'zsst.xyz',
    description: 'Marketplace complete avec gestion vendeurs et acheteurs',
  },
  {
    id: '2',
    name: 'El Ghella',
    type: 'Plateforme Agricole',
    url: 'elghella.com',
    description: '1ere plateforme agricole algerienne',
  },
  {
    id: '3',
    name: 'Cuisine Alger',
    type: 'Site Vitrine Premium',
    url: 'cuisinealger.com',
    description: 'Site vitrine haut de gamme pour cuisiniste',
  },
]

const clientLogos = [
  { name: 'ZSST', url: 'zsst.xyz' },
  { name: 'El Ghella', url: 'elghella.com' },
  { name: 'Cuisine Alger', url: 'cuisinealger.com' },
  { name: 'Allouani', url: '' },
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
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set())
  const statsRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const projectsCount = useCountUpAnimation(50, 2000, isVisible)
  const supportCount = useCountUpAnimation(24, 1500, isVisible)

  useEffect(() => {
    const currentRef = statsRef.current
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

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  useEffect(() => {
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute('data-project-id')
            if (projectId) {
              setVisibleProjects((prev) => new Set(prev).add(projectId))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    Object.values(projectRefs.current).forEach((ref) => {
      if (ref) {
        projectObserver.observe(ref)
      }
    })

    return () => {
      projectObserver.disconnect()
    }
  }, [])

  const getAnimationClasses = (projectId: string): string => {
    const isProjectVisible = visibleProjects.has(projectId)

    return `transition-all duration-[1000ms] ease-out ${
      isProjectVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-12'
    }`
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#1a1a1a] px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.06),_transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#c9a962]">
            Portfolio
          </p>
          <h2 className="mt-4 font-elegant text-4xl font-semibold text-white sm:text-5xl">
            Nos realisations recentes
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Decouvrez quelques-uns des projets que nous avons livres pour nos clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-2 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="font-elegant text-4xl font-bold text-[#c9a962]">
              {projectsCount}+
            </p>
            <p className="mt-2 text-sm text-white/60">Projets livres</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="font-elegant text-4xl font-bold text-blue-400">
              {supportCount}/7
            </p>
            <p className="mt-2 text-sm text-white/60">Support disponible</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => {
                projectRefs.current[project.id] = el
              }}
              data-project-id={project.id}
              className={`group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#c9a962]/30 hover:bg-white/10 ${getAnimationClasses(project.id)}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Type Badge */}
              <div className="mb-4">
                <span className="inline-block rounded-full border border-[#c9a962]/30 bg-[#c9a962]/10 px-3 py-1 text-xs font-medium text-[#c9a962]">
                  {project.type}
                </span>
              </div>

              {/* Project Name */}
              <h3 className="font-elegant text-2xl font-semibold text-white">
                {project.name}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm text-white/60">
                {project.description}
              </p>

              {/* URL */}
              <div className="mt-6 flex items-center gap-2 text-sm text-white/40 group-hover:text-[#c9a962]">
                <span>{project.url}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <p className="mb-8 text-center text-xs uppercase tracking-[0.4em] text-white/40">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="group flex items-center gap-2 text-lg font-semibold text-white/30 transition-colors hover:text-[#c9a962]"
              >
                <span>{client.name}</span>
                {client.url && (
                  <svg className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="mb-4 text-white/60">Pret a lancer votre projet?</p>
          <Link
            href="/pricing"
            className="btn-premium inline-flex items-center gap-3 rounded-full bg-[#c9a962] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-[#d4b673] hover:shadow-lg hover:shadow-[#c9a962]/25"
          >
            <span>Voir nos offres</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
