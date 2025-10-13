'use client'

declare global {
  interface Window {
    fbq?: (...args: Array<unknown>) => void
  }
}

const isBrowser = typeof window !== 'undefined'

export const trackMetaEvent = (
  event: string,
  parameters?: Record<string, unknown>,
): void => {
  if (!isBrowser) return
  if (typeof window.fbq !== 'function') return

  try {
    window.fbq('track', event, parameters)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('Meta Pixel tracking error', error)
    }
  }
}
