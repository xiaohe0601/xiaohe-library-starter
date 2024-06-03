import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  clean: false,
  declaration: true,
  externals: ["stylelint", "lodash-es"],
  rollup: {
    emitCJS: true
  }
});