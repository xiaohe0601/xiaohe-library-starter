import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  clean: false,
  declaration: true,
  externals: ["@antfu/eslint-config", "eslint", "lodash-es"],
  rollup: {
    emitCJS: true
  }
});