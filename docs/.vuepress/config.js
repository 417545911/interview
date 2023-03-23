module.exports = {
  title: "网站标题",
  description: "网站描述",
  theme: "reco",
  base: "/interview/", // 仓库名
  locales: { "/": { lang: "zh-CN" } },
  // subSidebar: "auto",
  themeConfig: {
    nav: [
      { text: "前端算法", link: "/algorithm/" }, // 内部链接以docs为根目录
      { text: "博客", link: "http://obkoro1.com" },
      {
        text: "GitHub",
        items: [
          { text: "GitHub地址", link: "https://github.com/OBKorol" },
          {
            text: "算法仓库",
            link: "https://github.com/OBKorol/Brush_algorithm",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/1" },
          { title: "第二篇", path: "/handbook/2" },
        ],
      },
    ],
  },
};
