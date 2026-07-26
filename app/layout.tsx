import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/i18n'
import './globals.css'

// The <html> and <body> elements are emitted by app/[lang]/layout.tsx, because
// both lang and dir depend on the locale segment. This root layout exists only
// to satisfy Next's requirement and to carry metadataBase.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
