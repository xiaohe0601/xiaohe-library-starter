import { build } from "unbuild";
import { esmDist, root } from "../helpers";

export async function buildResolver() {
  await build(root, false, {
    entries: [
      "resolver/index.ts"
    ],
    clean: false,
    declaration: true,
    outDir: esmDist,
    externals: ["unplugin-vue-components"]
  });
}