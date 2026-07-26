import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '../types'
import { fr } from './fr'
import { en } from './en'
import { ar } from './ar'

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en, ar }

export function getDictionary(lang: Locale): Dictionary {
  return DICTIONARIES[lang]
}
