import type { NextConfig } from 'next'

/**
 * French route prefixes served un-prefixed at the root. Add a segment here when
 * a new French-canonical section ships.
 */
const FR_PREFIXES = ['services', 'tarifs', 'projets', 'blog']

const nextConfig: NextConfig = {
  // TypeScript 7 dropped the legacy compiler API Next reaches for by default.
  experimental: { useTypeScriptCli: true },

  async redirects() {
    return [
      // /fr consolidates onto the root, which is the strongest URL on the site.
      // Redirects are evaluated before rewrites and a rewrite destination is
      // not re-checked against redirects, so this does NOT loop with the `/`
      // rewrite below.
      { source: '/fr', destination: '/', permanent: true },
      { source: '/fr/:path*', destination: '/:path*', permanent: true },
    ]
  },

  async rewrites() {
    return {
      // `beforeFiles` because there is no app/page.tsx to match `/`.
      beforeFiles: [{ source: '/', destination: '/fr' }],

      // `afterFiles` runs before dynamic routes, so `/tarifs` is captured here
      // and never reaches app/[lang]/page.tsx as lang="tarifs". In `fallback`
      // these would run after dynamic routes and break.
      // `/en/tarifs` and `/ar/tarifs` are untouched — these sources don't match.
      afterFiles: [
        ...FR_PREFIXES.map((p) => ({ source: `/${p}`, destination: `/fr/${p}` })),
        ...FR_PREFIXES.map((p) => ({ source: `/${p}/:slug`, destination: `/fr/${p}/:slug` })),
      ],

      fallback: [],
    }
  },
}

export default nextConfig
