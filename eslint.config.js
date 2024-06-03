import { defineConfig } from "@package-name/eslint-config";

export default defineConfig({
  basic: true,
  vue: true
}, {
  ignores: [
    ".github/",
    "packages/*/esm",
    "packages/*/lib"
  ]
});