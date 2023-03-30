module.exports = {
  title: "小铁匠",
  description: "向着星辰与深渊",
  base: "/interview/", // 仓库名
  locales: { "/": { lang: "zh-CN" } },
  theme: "reco",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    noFoundPageByTencent: false, // vuepress-theme-reco 关闭404腾讯公益
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      { text: "关于", link: "/about/", icon: "reco-account" },
      {
        text: "博客",
        items: [
          { text: "GitHub", link: "https://github.com/417545911" },
          { text: "掘金", link: "https://juejin.cn/user/396238350190397" },
        ],
      },
    ],
    lastUpdated: "Last Updated",
    author: "班尼特",
    authorAvatar: "/avatar.jpg",
    type: "blog",
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "文章", // 默认 “分类”Category
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”Tag
      },
    },
  },
};
