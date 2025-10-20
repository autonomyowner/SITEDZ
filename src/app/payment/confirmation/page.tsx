import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PaymentConfirmationContent } from '@/components/PaymentConfirmationContent'

export const metadata: Metadata = {
  title: 'Confirmation de paiement | SiteDZ Store',
  description: 'Votre paiement a ete traite avec succes',
  robots: 'noindex, nofollow',
}

export default function PaymentConfirmationPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PaymentConfirmationContent />
    </Suspense>
  )
}

