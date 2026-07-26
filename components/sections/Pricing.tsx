import { Rich } from '@/components/Rich'
import { PLANS, formatDZD, approxEUR } from '@/content/data/pricing'
import type { Dictionary } from '@/content/types'
import type { Locale } from '@/lib/i18n'

export function Pricing({ d, lang }: { d: Dictionary['pricing']; lang: Locale }) {
  return (
    <section className="materials" id="pricing">
      <div className="materials__inner">
        <div className="materials__header">
          <h2 className="materials__headline">
            <Rich text={d.headline} />
          </h2>
          <p className="materials__sub">{d.sub}</p>
        </div>
        <div className="materials__grid">
          {PLANS.map((plan) => {
            const c = d.plans[plan.id]
            const setup = 'amountDZD' in plan ? plan.amountDZD : undefined
            const monthly = 'monthlyDZD' in plan ? plan.monthlyDZD : undefined
            return (
              <div key={plan.id} className="material-card">
                <span className="material-card__tag">{c.tag}</span>
                <h3 className="material-card__name" dir="ltr">
                  {setup !== undefined ? formatDZD(setup) : formatDZD(monthly!)}
                  {setup === undefined && d.perMonth}
                  {setup !== undefined && monthly !== undefined && (
                    <> + {formatDZD(monthly)}{d.perMonth}</>
                  )}
                </h3>
                {/* EUR is a secondary figure for European leads — /fr only. */}
                {lang === 'fr' && setup !== undefined && (
                  <span className="material-card__tag" dir="ltr">{approxEUR(setup)}</span>
                )}
                <p className="material-card__desc">{c.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
