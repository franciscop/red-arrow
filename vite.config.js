import { defineConfig } from "vite";

export default defineConfig({
  oxc: { jsx: { runtime: "classic" } },
  build: {
    lib: {
      entry: "index.jsx",
      formats: ["es"],
      fileName: () => "index.min.js",
    },
    // Lib mode keeps whitespace in ES output by default
    rollupOptions: { external: ["react"], output: { minify: true } },
  },
});
