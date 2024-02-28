import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*'],
    }),
    tailwind({ configFile: './tailwind.config.mjs' }),
  ],
  output: 'hybrid',
  adapter: vercel(),
});
