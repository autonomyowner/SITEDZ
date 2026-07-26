/**
 * The partner/technology marquee. These render as styled text or inline SVG,
 * never as image files — `kind` picks which treatment the Marquee applies.
 */
export const LOGOS = [
  { key: 'ma5zani', label: 'ma5zani', kind: 'bold' },
  { key: 'djezzy', label: 'Djezzy', kind: 'bold' },
  { key: 'mobilis', label: 'mobilis', kind: 'dot' },
  { key: 'at', label: 'Algérie Télécom', kind: 'badge', badge: 'AT' },
  { key: 'ooredoo', label: 'ooredoo', kind: 'track' },
  { key: 'convex', label: 'Convex', kind: 'icon', icon: 'convex' },
  { key: 'cloudflare', label: 'Cloudflare', kind: 'icon', icon: 'cloudflare' },
  { key: 'whatsapp', label: 'WhatsApp', kind: 'icon', icon: 'whatsapp' },
] as const

export type LogoEntry = (typeof LOGOS)[number]
