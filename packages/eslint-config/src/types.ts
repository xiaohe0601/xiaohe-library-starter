import type { Rules } from "@antfu/eslint-config";
import type { Linter } from "eslint";

export type ConfigRules = {
  [key: string]: Linter.RuleEntry;
} & Rules;

export interface ConfigPresets {
  basic?: boolean;
  vue?: boolean;
}