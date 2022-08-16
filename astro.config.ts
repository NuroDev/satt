import solidJS from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

/**
 * @see https://astro.build/config
 */
export default defineConfig({
  integrations: [solidJS(), tailwind()],
});
