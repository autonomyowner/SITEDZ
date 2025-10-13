import type { Metadata } from 'next'
import { PricingPageContent } from '@/components/PricingPageContent'

export const metadata: Metadata = {
  title: 'Tarifs 2025 - Creations de sites web | SiteDZ Store',
  description:
    'Decouvrez nos offres web pretes a convertir : site vitrine, e-commerce et SaaS sur mesure. Livraison rapide, maintenance incluse et accompagnement WhatsApp immediat.',
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingPage(): JSX.Element {
  return <PricingPageContent />
}
