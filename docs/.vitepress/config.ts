import { defineConfig } from "vitepress";
// 支持区块内的方式展示 demo 和示例代码
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  title: "个人学习笔记",
  description: "记录学习之路",
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
        items: [],
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
