// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-movie-blog.netlify.app',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
