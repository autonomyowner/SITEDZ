/**
 * Portfolio facts. No prose, no locale — names, URLs and badges only.
 * Display order is array order. Copy lives in content/locales/*.ts keyed by id.
 */

export const PROJECTS = [
  /**
   * Two similarly-named, entirely separate products. `aitraid` is the AI agent
   * marketplace at aitraid.com — the one currently for sale, see the ForSale
   * section. `aitridi` is the Algerian B2B/B2C marketplace at aitridi.com and
   * is the one that carries the Projet Innovant award. Do not merge them.
   */
  { id: 'aitraid', name: 'AiTraid', url: 'aitraid.com', href: 'https://aitraid.com' },
  { id: 'zed', name: 'Zed Informatique', url: 'zed-informatique.com', href: 'https://zed-informatique.com' },
  { id: 'elghella', name: 'ElGhella', award: true },
  { id: 'aitridi', name: 'AItridi', url: 'aitridi.com', href: 'https://aitridi.com', award: true, playstore: true },
  { id: 'ma5zani', name: 'Ma5zani', url: 'ma5zani.com', href: 'https://ma5zani.com' },
  { id: 'postaify', name: 'Postaify', url: 'postaify.com', href: 'https://postaify.com' },
  { id: 'tabra', name: 'Tabra', url: 'tabra.space', href: 'https://tabra.space' },
  { id: 'hasio', name: 'Hasio', url: 'hasio.xyz', href: 'https://hasio.xyz', playstore: true },
  { id: 'travoices', name: 'TRAVoices', url: 'travoices.xyz', href: 'https://travoices.xyz' },
  { id: 'biogrenagold', name: 'BioGrenaGold', url: 'biogrenagold.com', href: 'https://www.biogrenagold.com' },
  { id: 'cuisinealger', name: 'Cuisine Alger', url: 'cuisinealger.com', href: 'https://www.cuisinealger.com' },
  { id: 'reachfood', name: 'ReachFood', url: 'reachfood.co', href: 'https://reachfood.co' },
  { id: 'mbsx', name: 'MBSx', url: 'mbsx.org', href: 'https://mbsx.org' },
  { id: 'walidfermeture', name: 'Walid Fermeture', url: 'walidfermeture.com', href: 'https://walidfermeture.com' },
  { id: 'acquisitionpro', name: 'AcquisitionPro', url: 'acquisitionpro.net', href: 'https://acquisitionpro.net' },
] as const

export type ProjectId = (typeof PROJECTS)[number]['id']

/**
 * Arabic localises three project names; the rest keep their Latin wordmark.
 * Anything absent falls back to PROJECTS[].name.
 */
export const PROJECT_NAME_AR: Partial<Record<ProjectId, string>> = {
  elghella: 'الغلة',
  ma5zani: 'مخزني',
  tabra: 'تبرا',
}
