import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4172472430,3982376451&fm=26&gp=0.jpg",
    siteTitle: "我的个人空间",
    github: "https://github.com/Ji-github",
    qq: "861813667",
    weixin: "15164572568",
    mail: "861813667@qq.com",
    icp: "黑ICP备17001719号",
    githubName: "Ji-github",
    favicon: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4172472430,3982376451&fm=26&gp=0.jpg",
  },
});
