import { defineConfig } from "@package-name/stylelint-config";

export default defineConfig({
  basic: true,
  scss: true,
  vue: true
}, {
  ignoreFiles: [
    "**/dist/**",
    "**/node_modules/**",
    "**/public/**",
    "coverage/**"
  ]
});