/**
 * AiTraid — the one asset in the portfolio that is actually for sale.
 * Facts only: domain, stack, numbers. Every sentence lives in content/locales/.
 *
 * Stack strings are technology names, so they are identical in all three
 * locales; only the layer *label* is translated, keyed by the ids below.
 */

export const AITRAID_DOMAIN = 'aitraid.com'
export const AITRAID_HREF = 'https://aitraid.com'

export const AITRAID_STACK = [
  { id: 'frontend', tech: 'React 19 · TypeScript · Vite' },
  { id: 'styling', tech: 'Tailwind CSS v4' },
  { id: 'routing', tech: 'React Router v7' },
  { id: 'backend', tech: 'Hono on Bun' },
  { id: 'database', tech: 'PostgreSQL 16 · Drizzle ORM' },
  { id: 'cache', tech: 'Redis 7' },
  { id: 'auth', tech: 'Better Auth' },
  { id: 'infra', tech: 'Docker Compose · any VPS' },
] as const

export type StackLayerId = (typeof AITRAID_STACK)[number]['id']

/** Headline numbers from the build. Labels are translated, digits are not. */
export const AITRAID_STATS = [
  { id: 'pages', num: '9' },
  { id: 'endpoints', num: '18+' },
  { id: 'tables', num: '7' },
  { id: 'fee', num: '10%' },
] as const

export type AitraidStatId = (typeof AITRAID_STATS)[number]['id']
