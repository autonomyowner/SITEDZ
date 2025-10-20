'use client'

import { useRouter } from 'next/navigation'

export const PaymentFailedContent = (): JSX.Element => {
  const router = useRouter()

  return (
    <div className="relative isolate flex min-h-screen items-center justify-center bg-white/90">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="pointer-events-none h-full w-full bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.12),_transparent_70%)]" />
      </div>

      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-red-200 bg-white/95 p-8 text-center shadow-lg sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <span className="text-4xl">✗</span>
          </div>
          
          <h1 className="mt-6 text-3xl font-elegant font-semibold text-neutral-900 sm:text-4xl">
            Paiement echoue
          </h1>
          
          <p className="mt-4 text-base text-neutral-600">
            Votre paiement n&apos;a pas pu etre complete. Veuillez reessayer ou
            contacter notre support.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-left">
            <h2 className="text-lg font-semibold text-neutral-900">
              Raisons possibles :
            </h2>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Solde de carte insuffisant</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Informations de carte incorrectes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Carte expiree ou bloquee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>Probleme de connexion reseau</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="h-12 w-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="#1e40af" stroke="#1e40af" strokeWidth="2"/>
                  <path d="M35 55 L45 65 L65 40" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm leading-relaxed text-blue-900">
                  En cas de probleme de paiement, veuillez contacter le numero vert{' '}
                  <a
                    href="tel:3020"
                    className="font-semibold underline hover:no-underline"
                  >
                    3020
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-amber-500"
            >
              Reessayer le paiement
            </button>
            
            <a
              href="https://wa.me/213797339451?text=Bonjour!%20J%27ai%20eu%20un%20probleme%20avec%20mon%20paiement"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-900 transition-colors duration-200 hover:bg-neutral-50"
            >
              Contacter le support
            </a>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/pricing')}
              className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
            >
              ← Retour aux offres
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

