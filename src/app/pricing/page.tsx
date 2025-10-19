import type { Metadata } from 'next'
import { PricingPageContent } from '@/components/PricingPageContent'

export const metadata: Metadata = {
  title: 'Nos Offres - Devis personnalises | SiteDZ Store',
  description:
    'Decouvrez nos solutions web sur mesure : site vitrine, e-commerce et SaaS personnalises. Obtenez un devis adapte a votre projet avec accompagnement WhatsApp immediat.',
  alternates: {
    canonical: '/pricing',
  },
}

export default function PricingPage(): JSX.Element {
  return <PricingPageContent />
}
