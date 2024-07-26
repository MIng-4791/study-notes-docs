import DefaultTheme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "element-plus/dist/index.css";
import "sedii-common/dist/style.css";
import "./style.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", ElementPlusContainer);
  },
};
