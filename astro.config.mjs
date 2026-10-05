import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output: deploys to Cloudflare Pages with no adapter.
// When a custom domain is connected, change `site` and public/robots.txt.
export default defineConfig({
  site: 'https://congiovanniodv.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
