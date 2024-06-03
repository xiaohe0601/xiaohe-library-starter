import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const root = resolve(__dirname, "..", "..");
export const srcRoot = resolve(root, "src");
export const stylesRoot = resolve(srcRoot, "styles");

export const umdDist = resolve(root, "dist");
export const esmDist = resolve(root, "esm");
export const cjsDist = resolve(root, "lib");
export const stylesDist = resolve(root, "styles");