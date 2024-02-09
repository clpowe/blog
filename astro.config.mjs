import { defineConfig } from 'astro/config';

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [qwikdev()]
});