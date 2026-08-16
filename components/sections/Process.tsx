import { Rich } from '@/components/Rich'
import type { Dictionary } from '@/content/types'

export function Process({ d }: { d: Dictionary['process'] }) {
  return (
    <section className="craft seam-top" id="process">
      <div className="craft__inner">
        <div>
          <p className="craft__section-label">{d.label}</p>
          <h2 className="craft__headline">
            <Rich text={d.headline} />
          </h2>
        </div>
        <div>
          <div className="craft__text">
            {d.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="craft__steps">
            {d.steps.map((s) => (
              <div key={s.num} className="craft__step">
                <span className="craft__step-num">{s.num}</span>
                <div className="craft__step-body">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
