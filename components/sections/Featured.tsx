import { Rich } from '@/components/Rich'
import type { Dictionary } from '@/content/types'

export function Featured({ d }: { d: Dictionary['featured'] }) {
  return (
    <section className="featured-wrap">
      <div className="featured__card featured__card--stats">
        <span className="featured__label">{d.label}</span>
        <h2 className="featured__title">
          <Rich text={d.title} />
        </h2>
        <div className="featured__stats">
          {d.stats.map((s, i) => (
            <div key={i} className="featured__stat">
              <span className="featured__stat-num">{s.num}</span>
              <span className="featured__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
