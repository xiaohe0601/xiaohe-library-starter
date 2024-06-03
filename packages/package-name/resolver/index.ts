import type { ComponentResolver, SideEffectsInfo } from "unplugin-vue-components";
import { kebabCase } from "unplugin-vue-components";

const COMPONENT_PREFIX = "Xh";

export interface ResolverOptions {
  importStyle?: false | "css" | "scss";
  exclude?: RegExp;
}

function getSideEffects(
  partialName: string,
  { importStyle = "css" }: ResolverOptions
): SideEffectsInfo | undefined {
  if (!importStyle) {
    return undefined;
  }

  return [
    `package-name/styles/${kebabCase(partialName)}/index.${importStyle}`
  ];
}

export function XhResolver(options: ResolverOptions = {}): ComponentResolver {
  return {
    type: "component",
    resolve: (name) => {
      if (options.exclude && name.match(options.exclude)) {
        return undefined;
      }

      if (RegExp(`^${COMPONENT_PREFIX}[A-Z]`).test(name)) {
        const partialName = name.slice(COMPONENT_PREFIX.length);

        return {
          name,
          from: "package-name",
          sideEffects: getSideEffects(partialName, options)
        };
      }
    }
  };
}