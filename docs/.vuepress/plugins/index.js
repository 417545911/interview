module.exports = {
  // 1. 公告栏弹窗
  "@vuepress-reco/vuepress-plugin-bulletin-popover": {
    width: "300px",
    title: "消息提示",
    body: [
      { type: "title", content: "添加小铁匠好友", style: "text-aligin:center" },
      { type: "image", src: "/makeFriends.jpg" },
    ],
    footer: [{ type: "button", text: "打赏", link: "/donate" }],
  },
  // 2.看板娘添加
  "vuepress-plugin-live2d": {
    modelName: ["hijiki"],
    mobileShow: true,
  },
  // 3.优化代码展示
  "@vuepress-reco/extract-code": {},
};
