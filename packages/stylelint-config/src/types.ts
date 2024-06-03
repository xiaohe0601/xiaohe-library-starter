import type { ConfigRuleSettings, Plugin } from "stylelint";

export type ConfigExtend = string;

export type ConfigPlugin = string | Plugin;

export type ConfigRule = ConfigRuleSettings<any, object>;

export interface ConfigRules {
  [name: string]: ConfigRule;
}

export interface ConfigPresets {
  basic?: boolean;
  scss?: boolean;
  vue?: boolean;
  uniapp?: boolean;
}