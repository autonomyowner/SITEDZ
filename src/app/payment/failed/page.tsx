import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PaymentFailedContent } from '@/components/PaymentFailedContent'

export const metadata: Metadata = {
  title: 'Paiement echoue | SiteDZ Store',
  description: 'Le paiement n\'a pas pu etre complete',
  robots: 'noindex, nofollow',
}

export default function PaymentFailedPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <PaymentFailedContent />
    </Suspense>
  )
}

