import { Rich } from '@/components/Rich'
import { ArrowCard, StarOutline, StarSolid } from '@/components/icons'
import { PROJECTS, PROJECT_NAME_AR } from '@/content/data/projects'
import type { Dictionary } from '@/content/types'
import type { Locale } from '@/lib/i18n'

export function Projects({ d, lang }: { d: Dictionary['projects']; lang: Locale }) {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <div className="projects__header">
          <p className="section-label">{d.label}</p>
          <h2 className="projects__headline">
            <Rich text={d.headline} />
          </h2>
        </div>

        <div className="projects__award-banner">
          <div className="projects__award-icon">
            <StarOutline />
          </div>
          <div>
            <p className="projects__award-title">{d.awardTitle}</p>
            <p className="projects__award-sub">{d.awardSub}</p>
          </div>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p) => {
            const c = d.items[p.id]
            const name = (lang === 'ar' && PROJECT_NAME_AR[p.id]) || p.name
            const href = 'href' in p ? p.href : undefined
            const url = 'url' in p ? p.url : undefined
            const award = 'award' in p && p.award
            const playstore = 'playstore' in p && p.playstore

            const inner = (
              <>
                {award && (
                  <span className="project-card__award">
                    <StarSolid />
                    {d.awardBadge}
                  </span>
                )}
                <div className="project-card__top">
                  <h3 className="project-card__name">{name}</h3>
                  {href && <ArrowCard />}
                </div>
                <span className="project-card__tag">{c.tag}</span>
                <p className="project-card__desc">{c.desc}</p>
                {url && <span className="project-card__url" dir="ltr">{url}</span>}
                {playstore && <span className="project-card__playstore">{d.playstore}</span>}
              </>
            )

            // Client sites are third-party destinations, not endorsements we
            // want to pass ranking signal to from every page of the site.
            return href ? (
              <a
                key={p.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="project-card"
              >
                {inner}
              </a>
            ) : (
              <div key={p.id} className="project-card">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
