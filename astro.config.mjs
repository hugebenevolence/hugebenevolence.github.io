import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://hugebenevolence.github.io",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
