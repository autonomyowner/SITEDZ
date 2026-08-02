/**
 * Locale-invariant facts about the business. Anything that is a *fact* lives
 * here exactly once; anything that is a *sentence* lives in content/locales/.
 */

export const PHONE_E164 = '+213697339450'
export const PHONE_DISPLAY = '06 97 33 94 50'

/**
 * Deliberately NOT the same line as PHONE_E164 — WhatsApp moved to 07 97 33 94
 * 51 while calls still land on 06 97 33 94 50. Deriving one from the other
 * would silently route every wa.me link back to the wrong number.
 */
export const WHATSAPP_NUMBER = '213797339451'
export const EMAIL = 'hello@sitedz.com'

export const LEGAL_NAME = 'SiteDZ'
export const FOUNDED_YEAR = '2025'

/**
 * Algeria has had 58 wilayas since the 2019 reorganisation. The old pages
 * said 69 in five places and 58 in one — normalised here to the correct
 * number so it can never drift again.
 */
export const WILAYA_COUNT = 58

export const ADDRESS = {
  street: 'Bureau Mohamad Khmisti',
  city: 'Médéa',
  region: 'Médéa',
  country: 'DZ',
} as const

export function whatsappHref(prefilledText?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return prefilledText
    ? `${base}?text=${encodeURIComponent(prefilledText)}`
    : base
}
