import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PaymentPageContent } from '@/components/PaymentPageContent'

export const metadata: Metadata = {
  title: 'Paiement securise | SiteDZ Store',
  description: 'Effectuez votre paiement de maniere securisee via TAMAYYUZ ePay',
  robots: 'noindex, nofollow',
}

export default function PaymentPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PaymentPageContent />
    </Suspense>
  )
}

