import { defineConfig } from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { XhResolver } from "package-name/resolver";

export default defineConfig({
  plugins: [
    VuePlugin(),
    Components({
      dts: "types/components.d.ts",
      dirs: ["src/components"],
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      resolvers: [XhResolver()]
    })
  ]
});