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
  // 2.代码复制
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: { content: "复制成功" },
  },
};
