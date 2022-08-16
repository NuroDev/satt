import solidJS from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

/**
 * @see https://astro.build/config
 */
export default defineConfig({
  adapter: vercel(),
  integrations: [solidJS(), tailwind()],
  output: "server",
});
