import { dest, src } from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import gulpAutoprefixer from "gulp-autoprefixer";
import gulpCleanCSS from "gulp-clean-css";
import { stylesDist, stylesRoot } from "../helpers";

export interface BuildStylesOptions {
  scope: "module" | "full" | "global";
  format: "scss" | "css";
  dir: string;
}

export function buildStyles({ scope, format, dir }: BuildStylesOptions) {
  return new Promise((resolve, reject) => {
    const stream = (() => {
      switch (scope) {
        case "module":
          return src(`${stylesRoot}/*/*.scss`);
        case "full":
          return src(`${stylesRoot}/index.scss`);
        case "global":
          return src(`${stylesRoot}/global.scss`);
      }
    })();

    if (format === "css") {
      const sass = gulpSass(dartSass);

      stream.pipe(sass())
        .pipe(gulpAutoprefixer())
        .pipe(gulpCleanCSS());
    }

    stream.pipe(dest(dir))
      .on("end", resolve)
      .on("error", reject);
  });
}

export async function buildModuleScssStyles() {
  await buildStyles({
    scope: "module",
    format: "scss",
    dir: stylesDist
  });
}

export async function buildModuleCssStyles() {
  await buildStyles({
    scope: "module",
    format: "css",
    dir: stylesDist
  });
}

export async function buildFullCssStyles() {
  await buildStyles({
    scope: "full",
    format: "css",
    dir: stylesDist
  });
}

export async function buildGlobalScssStyles() {
  await buildStyles({
    scope: "global",
    format: "scss",
    dir: stylesDist
  });
}

export async function buildGlobalCssStyles() {
  await buildStyles({
    scope: "global",
    format: "css",
    dir: stylesDist
  });
}