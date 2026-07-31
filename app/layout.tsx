import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/lib/i18n'
import './globals.css'

// The <html> and <body> elements are emitted by app/[lang]/layout.tsx, because
// both lang and dir depend on the locale segment. This root layout exists only
// to satisfy Next's requirement and to carry metadataBase.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-TileImage': '/ms-icon-144x144.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
