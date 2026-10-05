import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.synergia.website',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
