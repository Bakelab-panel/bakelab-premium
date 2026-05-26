import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bakelab-premium.example.com',
  devToolbar: {
    enabled: false
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
