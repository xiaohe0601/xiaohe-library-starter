import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "package-name",
      description: "__description__"
    },
    "/en-us/": {
      lang: "en-US",
      title: "package-name",
      description: "__description__"
    }
  },
  theme
});