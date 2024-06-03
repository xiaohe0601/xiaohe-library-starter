declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    XhHello: typeof import("package-name")["XhHello"];
    XhWorld: typeof import("package-name")["XhWorld"];
  }
}

export {};