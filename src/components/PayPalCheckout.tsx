import { useEffect, useRef, useState } from 'react'
import { trackPurchase } from '../utils/facebookPixel'
import { logger } from '../utils/logger'

type PayPalCheckoutProps = {
  amount: string
  currency?: string
  description?: string
  onSuccess?: (details: unknown) => void
  onError?: (error: Error) => void
  className?: string
}

interface PayPalSDK {
  Buttons: (config: {
    style: { layout: string; shape: string; color: string }
    createOrder: () => Promise<string>
    onApprove: (data: { orderID: string }) => Promise<void>
    onError: (err: unknown) => void
  }) => {
    render: (container: HTMLElement) => void
    close?: () => void
  }
}

declare global {
  interface Window {
    paypal?: PayPalSDK
  }
}

const loadPayPalSdk = (clientId: string, currency: string) => {
  return new Promise<void>((resolve, reject) => {
    if (window.paypal) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=${encodeURIComponent(currency)}`
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load PayPal SDK'))
    document.body.appendChild(script)
  })
}

const PayPalCheckout = ({ amount, currency = 'USD', description, onSuccess, onError, className }: PayPalCheckoutProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [ready, setReady] = useState(false)
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined

  useEffect(() => {
    let isMounted = true
    if (!clientId) return
    loadPayPalSdk(clientId, currency)
      .then(() => {
        if (!isMounted) return
        setReady(true)
      })
      .catch((err) => {
        logger.error(err)
        onError?.(err)
      })
    return () => {
      isMounted = false
    }
  }, [clientId, currency, onError])

  useEffect(() => {
    if (!ready || !window.paypal || !containerRef.current) return

    const Buttons = window.paypal.Buttons({
      style: { layout: 'vertical', shape: 'rect', color: 'gold' },
      createOrder: async () => {
        const res = await fetch('/api/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount, currency, description })
        })
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data?.error || 'Failed to create order')
        }
        return data.id
      },
      onApprove: async (data: { orderID: string }) => {
        const res = await fetch('/api/capture-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderID: data.orderID })
        })
        const json = await res.json()
        if (!res.ok) {
          throw new Error(json?.error || 'Payment capture failed')
        }
        // Track purchase event with enhanced data
        trackPurchase(parseFloat(amount), currency, description)
        onSuccess?.(json)
      },
      onError: (err: unknown) => {
        const error = err instanceof Error ? err : new Error('PayPal error')
        onError?.(error)
      }
    })

    Buttons.render(containerRef.current)
    return () => {
      try {
        Buttons.close?.()
      } catch {
        // Ignore errors when closing PayPal buttons
      }
    }
  }, [ready, amount, currency, description, onSuccess, onError])

  if (!clientId) {
    return (
      <div className={className}>
        <div className="text-xs text-gray-400">Set VITE_PAYPAL_CLIENT_ID to enable PayPal checkout.</div>
      </div>
    )
  }

  return <div ref={containerRef} className={className} />
}

export default PayPalCheckout


