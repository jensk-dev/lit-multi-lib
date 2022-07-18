import { defineConfig } from "vitest/config";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import packageProcess from "@jensk/rollup-plugin-package-process";

export default defineConfig({
  publicDir: "static",
  build: {
    lib: {
      entry: resolve(__dirname, "src"),
      formats: ["es"],
    },
    target: "es2020",
    rollupOptions: {
      output: {
        preserveModules: true,
        entryFileNames: "[name].js",
        format: "es",
      },
      external: [/^lit/],
      plugins: [
        packageProcess({
          output: {
            replaceExisting: true,
          },
          process: inputPackage => {
            inputPackage.type = "module";
            inputPackage.module = inputPackage.main;
            inputPackage.peerDependencies = inputPackage.dependencies;

            delete inputPackage.devDependencies;
            delete inputPackage.dependencies;
            delete inputPackage.scripts;

            return inputPackage;
          },
        }),
      ],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
    include: ["test/**/*.spec.ts"],
  },
  plugins: [dts({ exclude: ["**/vite-env.d.ts"] }) as Plugin],
});
