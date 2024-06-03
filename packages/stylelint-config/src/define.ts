import type { Config } from "stylelint";
import { castArray, get, merge, omit } from "lodash-es";
import type { ConfigExtend, ConfigPlugin, ConfigPresets, ConfigRules } from "./types";
import {
  basicExtends,
  basicPlugins,
  basicRules,
  defaultOverrides,
  scssExtends,
  scssPlugins,
  scssRules,
  uniappExtends,
  uniappPlugins,
  uniappRules,
  vueExtends,
  vuePlugins,
  vueRules
} from "./presets";

export function defineConfig(presets: ConfigPresets = {}, config?: Config): Config {
  const {
    basic = true,
    scss = false,
    vue = false,
    uniapp = false
  } = presets;

  const extendz: ConfigExtend[] = [];
  const plugins: ConfigPlugin[] = [];
  const rules: ConfigRules = {};

  if (basic) {
    extendz.push(...basicExtends);
    plugins.push(...basicPlugins);
    merge(rules, basicRules);
  }

  if (scss) {
    extendz.push(...scssExtends);
    plugins.push(...scssPlugins);
    merge(rules, scssRules);
  }

  if (vue) {
    extendz.push(...vueExtends);
    plugins.push(...vuePlugins);
    merge(rules, vueRules);
  }

  if (uniapp) {
    extendz.push(...uniappExtends);
    plugins.push(...uniappPlugins);
    merge(rules, uniappRules);
  }

  extendz.push(...castArray(get(config, "extends", [])));
  plugins.push(...castArray(get(config, "plugins", [])));
  merge(rules, get(config, "rules"));

  return merge({
    defaultSeverity: "error",
    extends: extendz,
    plugins,
    rules,
    overrides: [...defaultOverrides, ...castArray(get(config, "overrides", []))]
  }, omit(config, ["extends", "plugins", "rules", "overrides"]));
}