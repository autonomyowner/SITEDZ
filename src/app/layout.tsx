import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { MetaPixel } from '@/components/MetaPixel'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SiteDZ Store - Agence Web en Algerie',
  description:
    'SITEDZ Store est votre agence web de confiance en Algerie. Nous creons des sites web modernes, rapides et professionnels pour developper votre entreprise en ligne. Specialises dans le marche algerien avec des solutions adaptees a vos besoins locaux.',
  keywords:
    'agence web algerie, creation site web, developpement web, site internet algerie, web design, ecommerce algerie, sites professionnels',
  authors: [{ name: 'SiteDZ Store' }],
  creator: 'SiteDZ Store',
  publisher: 'SiteDZ Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.sitedz.store'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SiteDZ Store - Agence Web en Algerie',
    description:
      'SITEDZ Store est votre agence web de confiance en Algerie. Nous creons des sites web modernes, rapides et professionnels pour developper votre entreprise en ligne.',
    url: 'https://www.sitedz.store',
    siteName: 'SiteDZ Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SiteDZ Store - Agence Web en Algerie',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteDZ Store - Agence Web en Algerie',
    description:
      'SITEDZ Store est votre agence web de confiance en Algerie. Nous creons des sites web modernes, rapides et professionnels pour developper votre entreprise en ligne.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body
        className={`${inter.className} bg-gradient-elegant min-h-screen text-slate-900`}
      >
        <MetaPixel />
        <Navbar />
        <main className="pt-20 md:pt-24 pb-20">{children}</main>
        <footer className="bg-slate-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm">
                Copyright 2025 SiteDZ Store - Agence Web en Algerie
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/site.dz.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/sitedz.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                <a
                  href="https://www.sitedz.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors text-sm"
                >
                  www.sitedz.store
                </a>
              </div>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  )
}
