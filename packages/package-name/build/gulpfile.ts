import { parallel } from "gulp";
import {
  buildFullCssStyles,
  buildGlobalCssStyles,
  buildGlobalScssStyles,
  buildModuleCssStyles,
  buildModuleScssStyles
} from "./tasks/build-styles";

export default parallel(
  buildModuleScssStyles,
  buildModuleCssStyles,
  buildFullCssStyles,
  buildGlobalScssStyles,
  buildGlobalCssStyles
);