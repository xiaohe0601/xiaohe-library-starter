import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from "@antfu/eslint-config";
import define from "@antfu/eslint-config";
import { merge } from "lodash-es";
import type { ConfigPresets, ConfigRules } from "./types";
import { basicRules, vueRules } from "./presets";

export function defineConfig(
  presets: ConfigPresets = {},
  options?: OptionsConfig & TypedFlatConfigItem,
  ...configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
): ReturnType<typeof define> {
  const {
    basic = true,
    vue = false
  } = presets;

  const rules: ConfigRules = {};

  if (basic) {
    merge(rules, basicRules);
  }

  if (vue) {
    merge(rules, vueRules);
  }

  return define(options, { rules }, ...configs);
}