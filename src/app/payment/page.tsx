import type { Metadata } from 'next'
import { PaymentPageContent } from '@/components/PaymentPageContent'

export const metadata: Metadata = {
  title: 'Paiement securise | SiteDZ Store',
  description: 'Effectuez votre paiement de maniere securisee via TAMAYYUZ ePay',
  robots: 'noindex, nofollow',
}

export default function PaymentPage(): JSX.Element {
  return <PaymentPageContent />
}

