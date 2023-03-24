module.exports = {
  title: "小铁匠的博客",
  description: "XXXXXXXXX",
  base: "/interview/", // 仓库名
  locales: { "/": { lang: "zh-CN" } },
  theme: "reco",
  themeConfig: {
    noFoundPageByTencent: false, // vuepress-theme-reco 关闭404腾讯公益
    nav: [
      { text: "首页", link: "/" },
      {
        text: "博客",
        items: [
          { text: "GitHub", link: "https://github.com/417545911" },
          { text: "掘金", link: "https://juejin.cn/user/396238350190397" },
        ],
      },
    ],
  },
};
