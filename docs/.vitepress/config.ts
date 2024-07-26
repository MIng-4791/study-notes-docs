import { defineConfig } from "vitepress";
// 支持区块内的方式展示 demo 和示例代码
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  title: "Sedii-Common",
  description: "公共组件库使用说明文档",
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [
      { text: "指南", link: "/guild/index" },
      { text: "组件", link: "/components/index" },
    ],
    sidebar: [
      {
        text: "展示",
        items: [
          { text: "accessItem", link: "/components/accessItem" },
          { text: "manageSum", link: "/components/manageSum" },
          { text: "alarmNumber", link: "/components/alarmNumber" },
          { text: "floatWindow", link: "/components/floatWindow" },
        ],
      },
    ],
    //   socialLinks: [],
    //   logo: "",
  },
  markdown: {
    config(md) {
      // 支持区块内的方式展示 demo 和示例代码
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  base: "/",
});
