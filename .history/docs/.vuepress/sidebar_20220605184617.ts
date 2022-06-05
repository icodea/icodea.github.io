import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  "/home",
  "/slide",
  {
    text: "Git",
    icon: "git",
    prefix: "Git/",
    collapsable: true,
    //link: "Git/",
    children: ["article1", "article2", "article3"]
  }, 
  {
    text: "macOS",
    icon: "chrome",
    prefix: "posts/",
    collapsable: true,
    children: [
      {
        text: "文章 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      },
      {
        text: "文章 5-12",
        icon: "note",
        children: [
          {
            text: "文章 5-8",
            icon: "note",
            collapsable: true,
            prefix: "article/",
            children: ["article5", "article6", "article7", "article8"],
          },
          {
            text: "文章 9-12",
            icon: "note",
            children: ["article9", "article10", "article11", "article12"],
          },
        ],
      },
    ],
  },
  {
    text: "Web 前端学习",
    icon: "vue",
    prefix: "webfront/",
    collapsable: true,
    children: [
      /* {
        text: "HTML",
        icon: "html",
        collapsable: true,
        //prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      }, */
      {
        text: "HTML",
        icon: "html",
        prefix: "HTML/",
        collapsable: true,
        children: [
          {
            text: "HTML 01",
            icon: "html",
            link: "article1",
          },
          {
            text: "HTML 02",
            icon: "html",
            link: "article2",
          },
          {
            text: "HTML 03",
            icon: "html",
            link: "article3",
          },
        ],
      },
      {
        text: "CSS",
        icon: "css",
        prefix: "CSS/",
        collapsable: true,
        children: [
          {
            text: "CSS 01",
            icon: "css",
            link: "article1",
          },
          {
            text: "CSS 02",
            icon: "css",
            link: "article2",
          },
          {
            text: "CSS 03",
            icon: "css",
            link: "article3",
          },
        ],
      },
      {
        text: "JavaScript",
        icon: "javascript",
        prefix: "JavaScript/",
        collapsable: true,
        children: [
          {
            text: "JavaScript 01",
            icon: "javascript",
            link: "article1",
          },
          {
            text: "JavaScript 02",
            icon: "javascript",
            link: "article2",
          },
          {
            text: "JavaScript 03",
            icon: "javascript",
            link: "article3",
          },
        ],
      },
      {
        text: "Node.js",
        icon: "nodeJS",
        prefix: "Nodejs/",
        collapsable: true,
        children: [
          {
            text: "Node.js 01",
            icon: "node",
            link: "article1",
          },
          {
            text: "Node.js 02",
            icon: "node",
            link: "article2",
          },
          {
            text: "Node.js 03",
            icon: "node",
            link: "article3",
          },
        ],
      },
      {
        text: "Vue.js",
        icon: "vue",
        prefix: "Vuejs/",
        collapsable: true,
        children: [
          {
            text: "Vue.js 01",
            icon: "vue",
            link: "article1",
          },
          {
            text: "Vue.js 02",
            icon: "vue",
            link: "article2",
          },
          {
            text: "Vue.js 03",
            icon: "vue",
            link: "article3",
          },
        ],
      },
      {
        text: "TypeScript",
        icon: "typescript",
        prefix: "TypeScript/",
        collapsable: true,
        children: [
          {
            text: "TypeScript 01",
            icon: "typescript",
            link: "article1",
          },
          {
            text: "TypeScript 02",
            icon: "typescript",
            link: "article2",
          },
          {
            text: "TypeScript 03",
            icon: "typescript",
            link: "article3",
          },
        ],
      },
      
    ],
  },
  {
    text: "操作系统",
    icon: "windows",
    prefix: "/zh/OS/",
    collapsable: true,
    children: [
      {
        text: "文章 1-8",
        icon: "note",
        collapsable: true,
        //prefix: "article/",
        children: ["article1", "article2", "article3", "article4","article5", "article6", "article7", "article8"],
      },
      
    ],
  },
]);
