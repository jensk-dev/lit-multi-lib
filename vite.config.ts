import { defineConfig } from "vitest/config";

/**
 * The below code configures the project in page mode.
 * This bundles all assets into modules and imports them into an html file which can be served to the user.
 * Currently this config has 1 entry point, for a multi page app see: https://vitejs.dev/guide/build.html#multi-page-app
 * This method includes lit.
 */

export default defineConfig({
  build: {},
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    include: ["test/**/*.spec.ts"],
  },
});
