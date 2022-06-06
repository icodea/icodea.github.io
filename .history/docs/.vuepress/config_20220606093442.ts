
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "iCode",
  description: "Learning to Coding",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,

  plugins: [
    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "0W2BTKIM6W",
      apiKey: "010263e6e839168368a7df709a2445ce",
      indexName: "icodea",
    }),
  ],


});
