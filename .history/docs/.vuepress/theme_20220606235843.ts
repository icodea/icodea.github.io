import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "iCode",
    url: "https://icodex.vercel.app",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "icodea/icodea.github.io",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Hello World! Hello Code!",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: "iCode",
    avatar: "/logo.svg",
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      // Baidu: "https://example.com",
      GitHub: "https://github.com/icodea",
      Gmail: "https://icodexu@gmail.com",
      Wechat: "https://example.com",
      QQ: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "https://icodexu@icloud.com",
      // Evernote: "https://example.com",
      Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      
      Gitlab: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // Qzone: "https://example.com",
      Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  themeColor: {
    VeryPeri: "#6667AB",
    pink: "#F58E9D",
    green: "#44B5A9",
    pure: "#1B41B2",
    purple: "#F7E00D",
    
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      provider: "Giscus",
      repo: "icodea/icodea.github.io",
      repoId: "R_kgDOHc5-NQ",
      category: "General",
      categoryId: "DIC_kwDOHc5-Nc4CPen_",

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
