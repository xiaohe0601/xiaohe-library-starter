import { defaultExclude, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...defaultExclude],
    coverage: {
      include: [
        "packages/**"
      ]
    }
  }
});