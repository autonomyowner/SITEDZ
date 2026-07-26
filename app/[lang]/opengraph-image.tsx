import { ImageResponse } from 'next/og'
import { getDictionary } from '@/content/locales'
import { isLocale, LOCALES } from '@/lib/i18n'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'SiteDZ'

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const d = getDictionary(isLocale(lang) ? lang : 'fr')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B0B0D',
          color: '#F3F1EC',
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, letterSpacing: '-0.02em', fontWeight: 700 }}>
          SiteDZ
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 62,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            maxWidth: 900,
          }}
        >
          {d.meta.ogLine}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', width: 120, height: 4, background: '#FF6A1A' }} />
          <div style={{ display: 'flex', fontSize: 26, color: 'rgba(243,241,236,0.58)' }}>
            sitedz.com
          </div>
        </div>
      </div>
    ),
    size,
  )
}
