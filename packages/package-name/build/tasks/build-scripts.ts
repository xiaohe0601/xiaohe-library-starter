import { resolve } from "node:path";
import type { OutputOptions } from "rollup";
import type { PluginOption } from "vite";
import { build } from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import DtsPlugin from "vite-plugin-dts";
import type { OutputFormat } from "../helpers";
import { cjsDist, esmDist, root, srcRoot, umdDist } from "../helpers";

function buildPlugins(format: OutputFormat): PluginOption[] {
  const plugins: PluginOption[] = [
    VuePlugin()
  ];

  switch (format) {
    case "umd": {
      plugins.push(DtsPlugin({
        root,
        outDir: umdDist,
        staticImport: true,
        rollupTypes: true,
        include: [srcRoot]
      }));
      break;
    }
    case "esm": {
      plugins.push(DtsPlugin({
        root,
        outDir: esmDist,
        staticImport: true,
        rollupTypes: false,
        include: [srcRoot]
      }));
      break;
    }
    case "cjs": {
      plugins.push(DtsPlugin({
        root,
        outDir: cjsDist,
        staticImport: true,
        rollupTypes: false,
        include: [srcRoot]
      }));
      break;
    }
  }

  return plugins;
}

function buildOutputs(format: OutputFormat): OutputOptions[] {
  const outputs: OutputOptions[] = [];

  switch (format) {
    case "umd": {
      outputs.push({
        format: "umd",
        dir: umdDist,
        exports: "named",
        name: "PackageName",
        entryFileNames: "[name].js",
        globals: {
          "vue": "Vue",
          "@vue/shared": "VueShared"
        }
      });
      break;
    }
    case "esm": {
      outputs.push({
        format: "esm",
        dir: esmDist,
        exports: "auto",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].mjs"
      });
      break;
    }
    case "cjs": {
      outputs.push({
        format: "cjs",
        dir: cjsDist,
        exports: "named",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].cjs"
      });
      break;
    }
  }

  return outputs;
}

export interface BuildScriptsOptions {
  format: OutputFormat;
}

export async function buildScripts({ format }: BuildScriptsOptions) {
  await build({
    root,
    plugins: buildPlugins(format),
    build: {
      lib: {
        entry: resolve(srcRoot, "index.ts")
      },
      sourcemap: true,
      rollupOptions: {
        external: ["vue", "@vue/shared"],
        output: buildOutputs(format)
      }
    }
  });
}

export async function buildUmdScripts() {
  await buildScripts({
    format: "umd"
  });
}

export async function buildEsmScripts() {
  await buildScripts({
    format: "esm"
  });
}

export async function buildCjsScripts() {
  await buildScripts({
    format: "cjs"
  });
}