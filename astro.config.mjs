import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.synergia.website',
  base: '/',
  build: { format: 'directory' }
});
