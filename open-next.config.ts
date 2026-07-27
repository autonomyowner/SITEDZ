import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

/**
 * Every page on this site is prerendered at build time (`generateStaticParams`
 * plus `dynamicParams = false`), so the prerendered HTML can be read straight
 * off the Workers Static Assets binding — no KV or R2 namespace, no per-read
 * cost. Without an incrementalCache the Worker has nowhere to read those pages
 * from and every route 404s with NoFallbackError.
 *
 * The tradeoff: this cache is read-only, so ISR and on-demand revalidation do
 * not work. If a page ever needs to revalidate after deploy, swap this for the
 * R2 or KV incremental cache.
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  // Serves cached pages from the edge without booting the full Next server.
  enableCacheInterception: true,
})
