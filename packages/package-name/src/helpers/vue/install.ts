import type { App, Directive, Plugin } from "vue";
import { NOOP } from "@vue/shared";
import { GLOBAL_INSTALLED_KEY } from "../../constants";
import type { SFCInstallWithContext, SFCWithInstall } from "./types";

export function withInstall<T, E extends Record<string, any>>(main: T, extra?: E) {
  (main as SFCWithInstall<T>).install = (app: App) => {
    for (const component of [main, ...Object.values(extra ?? {})]) {
      app.component(component.name, component);
    }
  };

  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      (main as any)[key] = value;
    }
  }

  return main as SFCWithInstall<T> & E;
}

export function withInstallFunction<T>(fn: T, name: string) {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context;
    app.config.globalProperties[name] = fn;
  };

  return fn as SFCInstallWithContext<T>;
}

export function withInstallDirective<T extends Directive>(directive: T, name: string) {
  (directive as SFCWithInstall<T>).install = (app: App): void => {
    app.directive(name, directive);
  };

  return directive as SFCWithInstall<T>;
}

export function withNoopInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = NOOP;

  return component as SFCWithInstall<T>;
}

export function makeInstaller(components: Plugin[] = []) {
  const install = (app: App) => {
    if ((app as any)[GLOBAL_INSTALLED_KEY]) {
      return;
    }

    (app as any)[GLOBAL_INSTALLED_KEY] = true;

    components.forEach((component) => app.use(component));
  };

  return {
    install
  };
}