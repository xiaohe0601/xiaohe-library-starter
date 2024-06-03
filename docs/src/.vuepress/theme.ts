import { hopeTheme } from "vuepress-theme-hope";
import { EnUsNavbar, ZhCnNavbar } from "./navbar";
import { EnUsSidebar, ZhCnSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://xiaohe.ink",
  docsDir: "docs/src",
  repo: "https://github.com/xiaohe0601/package-name",
  logo: "/logo.svg",
  fullscreen: true,
  darkmode: "toggle",
  iconAssets: "iconfont",
  locales: {
    "/": {
      author: {
        name: "小何同学",
        url: "https://github.com/xiaohe0601",
        email: "HeDianGeng0601@outlook.com"
      },
      navbar: ZhCnNavbar,
      sidebar: ZhCnSidebar,
      displayFooter: true,
      copyright: `MIT License | Copyright (c) 2024-PRESENT <a href="https://github.com/xiaohe0601" target="_blank">小何同学</a>`,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页"
      }
    },
    "/en-us/": {
      author: {
        name: "xiaohe0601",
        url: "https://github.com/xiaohe0601",
        email: "HeDianGeng0601@outlook.com"
      },
      navbar: EnUsNavbar,
      sidebar: EnUsSidebar,
      displayFooter: true,
      copyright: `MIT License | Copyright (c) 2024-PRESENT <a href="https://github.com/xiaohe0601" target="_blank">xiaohe0601</a>`,
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    }
  },
  plugins: {
    searchPro: true
  }
});