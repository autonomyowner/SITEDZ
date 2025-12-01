import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { MetaPixel } from '@/components/MetaPixel'
import { ExitIntentPopup } from '@/components/ExitIntentPopup'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
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
    <html lang="fr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body
        className={`${dmSans.className} bg-gradient-elegant min-h-screen text-slate-900`}
      >
        <MetaPixel />
        <Navbar />
        <main className="pt-20 md:pt-24 pb-20">{children}</main>
        <ExitIntentPopup />
        {/* Pre-footer CTA Bar */}
        <section className="bg-[#1a1a1a] border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c9a962]">Pret a demarrer?</p>
                <h3 className="mt-2 font-elegant text-2xl font-semibold text-white">
                  Lancez votre projet digital aujourd hui
                </h3>
              </div>
              <a
                href="https://wa.me/213797339451?text=Bonjour!%20Je%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#c9a962] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#1a1a1a] transition-all hover:bg-[#d4b673] hover:shadow-lg hover:shadow-[#c9a962]/25"
              >
                <span>Obtenir un devis gratuit</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1a1a1a] border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              {/* Top Row - Logo & Navigation */}
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-xl font-semibold uppercase tracking-wide text-white">
                    SiteDZ Store
                  </span>
                  <span className="mt-1 text-xs text-white/50">
                    Agence Web en Algerie
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Link
                    href="/"
                    className="text-sm text-white/60 transition-colors hover:text-[#c9a962]"
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-[#c9a962]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm text-white/60 transition-colors hover:text-[#c9a962]"
                  >
                    Tarifs
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-sm text-white/60 transition-colors hover:text-[#c9a962]"
                  >
                    Galerie
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm text-white/60 transition-colors hover:text-[#c9a962]"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10" />

              {/* Bottom Row - Copyright & Social */}
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                  <p className="text-sm text-white/40">
                    © 2025 SiteDZ Store. Tous droits reserves.
                  </p>
                  <Link
                    href="/privacy"
                    className="text-sm text-white/40 transition-colors hover:text-[#c9a962]"
                  >
                    Politique de confidentialite
                  </Link>
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.instagram.com/site.dz.store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-colors hover:text-[#c9a962]"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/sitedz.store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-colors hover:text-[#c9a962]"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/213797339451"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 transition-colors hover:text-[#c9a962]"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  )
}
