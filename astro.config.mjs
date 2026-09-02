import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://balbasera.jnpplus.org',
  integrations: [sitemap()],
  vite: {
    preview: {
      allowedHosts: true
    },
    server: {
      allowedHosts: true
    }
  }
});
