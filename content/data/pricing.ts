/**
 * The public price ladder — one source of truth.
 *
 * These are the PLAN-10K numbers. They deliberately replace the EUR tiers that
 * were previously on /fr (€1,400–€7,500) and are ~10x the DZD floor the
 * business actually sells at. The old site, offre-sitedz-fr.html, PLAN-10K and
 * the outreach playbook each quoted a different number; this file is now the
 * only one the website reads.
 */

export const PLANS = [
  { id: 'starter', amountDZD: 100_000 },
  { id: 'business', amountDZD: 250_000 },
  { id: 'boutique', amountDZD: 150_000, monthlyDZD: 8_000 },
  { id: 'care', monthlyDZD: 15_000 },
] as const

export type PlanId = (typeof PLANS)[number]['id']

/**
 * Street rate used across PLAN-10K. Only rendered on /fr, as a secondary
 * figure for European leads — DZD is always the headline number.
 */
export const DZD_PER_EUR = 150

export function formatDZD(amount: number): string {
  // Narrow no-break spaces as thousands separators, matching the proposals.
  return `${amount.toLocaleString('fr-FR').replace(/ | /g, ' ')} DA`
}

export function approxEUR(amountDZD: number): string {
  return `≈ ${Math.round(amountDZD / DZD_PER_EUR).toLocaleString('fr-FR').replace(/ | /g, ' ')} €`
}
