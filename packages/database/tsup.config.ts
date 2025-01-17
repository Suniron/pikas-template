import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  minify: !options.watch,
  entry: ["src/index.ts"],
  sourcemap: true,
  dts: true,
  format: ["cjs", "esm"],
}));
