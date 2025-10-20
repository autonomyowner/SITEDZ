import type { Metadata } from 'next'
import { PaymentFailedContent } from '@/components/PaymentFailedContent'

export const metadata: Metadata = {
  title: 'Paiement echoue | SiteDZ Store',
  description: 'Le paiement n\'a pas pu etre complete',
  robots: 'noindex, nofollow',
}

export default function PaymentFailedPage(): JSX.Element {
  return <PaymentFailedContent />
}

