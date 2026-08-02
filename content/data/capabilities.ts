/**
 * The agency capability grid shown on /[lang]/services.
 *
 * These are the *disciplines* we sell — deliberately broader than
 * HOME_SERVICES (four homepage cards) and than SERVICE_SLUGS (the SEO landing
 * pages, which are queries buyers type). A capability is a conversation
 * starter: every card ends on the same "contact us" action rather than a page,
 * because the scoping happens on WhatsApp, not in a funnel.
 */
export const CAPABILITIES = [
  { id: 'web', num: '01', icon: 'web' },
  { id: 'systems', num: '02', icon: 'systems' },
  { id: 'ai', num: '03', icon: 'ai' },
  { id: 'brand', num: '04', icon: 'brand' },
  { id: 'mobile', num: '05', icon: 'mobile' },
  { id: 'marketing', num: '06', icon: 'marketing' },
  { id: 'training', num: '07', icon: 'training' },
  { id: 'consulting', num: '08', icon: 'consulting' },
] as const

export type CapabilityId = (typeof CAPABILITIES)[number]['id']
