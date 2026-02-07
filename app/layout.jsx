import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './rtl.css';
import { LanguageProvider } from '@/context/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://sitedz.com'),
  title: {
    default: 'SiteDZ | Your Vision, Our Code',
    template: '%s | SiteDZ',
  },
  description: "SiteDZ - Algeria's premier digital agency crafting exceptional web and mobile experiences. Web development, mobile apps, UI/UX design, and tech consulting.",
  keywords: [
    'SiteDZ',
    'web development Algeria',
    'mobile apps Algeria',
    'digital agency Algeria',
    'UI/UX design',
    'tech consulting',
    'Algerian developers',
    'website development',
    'app development Algeria',
    'تطوير المواقع الجزائر',
    'وكالة رقمية',
    'إنشاء موقع إلكتروني',
    'تصميم مواقع الجزائر',
  ],
  authors: [{ name: 'SiteDZ' }],
  creator: 'SiteDZ',
  publisher: 'SiteDZ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sitedz.com',
    siteName: 'SiteDZ',
    title: 'SiteDZ | Your Vision, Our Code',
    description: "Algeria's premier digital agency crafting exceptional web and mobile experiences.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SiteDZ - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteDZ | Your Vision, Our Code',
    description: "Algeria's premier digital agency crafting exceptional web and mobile experiences.",
    images: ['/og-image.png'],
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
  verification: {},
  alternates: {
    canonical: 'https://sitedz.com',
  },
};

export const viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
