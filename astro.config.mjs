import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    tailwind(),
  ],
});

// {
// 	// Example: Provide a custom path to a Tailwind config file
// 	configFile: './tailwind.config.mjs'
// }
