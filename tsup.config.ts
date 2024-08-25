import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/app.ts"], // Adjust the entry point as necessary
  format: ["cjs"], // Output format (CommonJS)
  target: "node14", // Target environment
  minify: true, // Enable minification
  sourcemap: false, // Optional: generate source maps for debugging
  dts: false, // Optional: generate TypeScript declaration files
  outDir: "dist", // Output directory
  clean: true, // Clean the output directory before building
});
