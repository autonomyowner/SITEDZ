import { IcoCloudflare, IcoConvex, IcoWhatsApp } from '@/components/icons'
import { LOGOS, type LogoEntry } from '@/content/data/logos'
import type { Dictionary } from '@/content/types'

const LOGO_ICONS = {
  convex: IcoConvex,
  cloudflare: IcoCloudflare,
  whatsapp: IcoWhatsApp,
} as const

function Logo({ logo }: { logo: LogoEntry }) {
  switch (logo.kind) {
    case 'bold':
      return <span className="wm wm--bold">{logo.label}</span>
    case 'track':
      return <span className="wm wm--track">{logo.label}</span>
    case 'dot':
      return (
        <>
          <span className="wm-dot" aria-hidden="true" />
          <span className="wm">{logo.label}</span>
        </>
      )
    case 'badge':
      return (
        <>
          <span className="wm-badge">{logo.badge}</span>
          <span className="wm wm--sm">{logo.label}</span>
        </>
      )
    case 'icon': {
      const Icon = LOGO_ICONS[logo.icon]
      return (
        <>
          <Icon />
          <span className="wm">{logo.label}</span>
        </>
      )
    }
  }
}

export function Marquee({ d }: { d: Dictionary['marquee'] }) {
  // Doubled so the CSS keyframe loop is seamless.
  const doubled = [...LOGOS, ...LOGOS]
  return (
    <div className="marquee-strip seam-y" aria-label={d.ariaLabel}>
      <div className="marquee-track">
        {doubled.map((logo, i) => (
          <div key={i} className="marquee-logo">
            <Logo logo={logo} />
          </div>
        ))}
      </div>
    </div>
  )
}
