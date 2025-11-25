export const BaiduRouter = {
  /**
   * 百度搜索
   */
  isSearch() {
    return Boolean(window.location.hostname.match(/^(m[0-9]{0,2}|www).baidu.com$/g));
  },
  /**
   * 百度搜索 - /bh
   * 百度健康
   */
  isSearchBh() {
    return this.isSearch() && window.location.pathname.startsWith("/bh");
  },
  /**
   * 百度搜索 - /video/page
   * 视频页
   */
  isSearchVideo() {
    return this.isSearch() && window.location.pathname.startsWith("/video/page");
  },
  /**
   * 百度搜索主页
   */
  isSearchHome() {
    return (
      this.isSearch() &&
      ((window.location.pathname === "/" && window.location.search === "") ||
        (window.location.pathname === "/" && window.location.search.startsWith("?")))
    );
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * /sf/vsearch
   * 例如：视频、笔记、贴吧、图片、资讯、问答、文库...等
   */
  isSearchVSearch() {
    return this.isSearch() && window.location.pathname.startsWith("/sf/vsearch");
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * 图片
   * /sf/vsearch?pd=image_content
   */
  isSearchVSearch_image_content() {
    let searchParams = new URLSearchParams(window.location.search);
    return this.isSearchVSearch() && searchParams.has("pd", "image_content");
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * 笔记
   * /sf/vsearch?pd=note
   */
  isSearchVSearch_note() {
    let searchParams = new URLSearchParams(window.location.search);
    return this.isSearchVSearch() && searchParams.has("pd", "note");
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * 问答
   * /sf/vsearch?pd=wenda_tab
   */
  isSearchWenDaTab() {
    let searchParams = new URLSearchParams(window.location.search);
    return this.isSearchVSearch() && searchParams.has("pd", "wenda_tab");
  },
  /**
   * 百度健康
   */
  isHealth() {
    return window.location.hostname === "health.baidu.com" || this.isSearchBh();
  },
  /**
   * 百家号
   */
  isBaiJiaHao() {
    return window.location.hostname === "baijiahao.baidu.com";
  },
  /**
   * 贴吧
   */
  isTieBa() {
    return (
      Boolean(window.location.hostname.match(/^(tieba|ala|static.tieba|nba|fexclick|youhua|tiebaswan).baidu.com$/g)) ||
      window.location.hostname === "jump2.bdimg.com" ||
      window.location.hostname === "www.tieba.com"
    );
  },
  /**
   * 贴吧 - 帖子
   */
  isTieBaPost() {
    return this.isTieBa() && window.location.pathname.startsWith("/p/");
  },
  /**
   * 贴吧 - 热帖
   */
  isTieBaNewTopic() {
    return this.isTieBa() && window.location.pathname.startsWith("/mo/q/newtopic/topicTemplate");
  },
  /**
   * 贴吧 - 热搜榜
   */
  isTieBaHottopic() {
    return this.isTieBa() && window.location.pathname.startsWith("/hottopic/browse/hottopic");
  },
  /**
   * 贴吧 - 搜索结果界面
   */
  isTieBaHybrid() {
    return this.isTieBa() && window.location.pathname.startsWith("/mo/q/hybrid/search");
  },
  /**
   * 贴吧 - 评论聚合页面
   */
  isTieBaHybridUserGrowBase() {
    return this.isTieBa() && window.location.pathname.startsWith("/mo/q/hybrid-usergrow-base/commentFocus");
  },
  /**
   * 贴吧 - 中转链接验证页面
   */
  isTieBaCheckUrl() {
    return this.isTieBa() && window.location.pathname.startsWith("/mo/q/checkurl");
  },
  /**
   * 贴吧 - 吧内
   */
  isTieBaNei() {
    return this.isTieBa() && window.location.pathname === "/f";
  },
  /**
   * 贴吧 - 首页
   */
  isTieBaIndex() {
    return this.isTieBa() && window.location.pathname.startsWith("/index");
  },
  /**
   * 贴吧 - 主页
   */
  isTieBaHome() {
    return this.isTieBa() && window.location.pathname.startsWith("/home/main");
  },
  /**
   * 贴吧 - 合辑
   */
  isTieBaCollectionCenter() {
    return this.isTieBa() && window.location.pathname.startsWith("/mo/q/hybrid-main-user/collectionCenter");
  },
  /**
   * 百度文库
   */
  isWenKu() {
    return window.location.hostname === "wk.baidu.com" || window.location.hostname === "tanbi.baidu.com";
  },
  /**
   * 百度经验
   */
  isJingYan() {
    return window.location.hostname === "jingyan.baidu.com";
  },
  /**
   * 百度百科
   */
  isBaiKe() {
    return window.location.hostname === "baike.baidu.com" || window.location.hostname === "wapbaike.baidu.com";
  },
  /**
   * 百度百科 - 他说
   */
  isBaiKeTaShuo() {
    return this.isBaiKe() && window.location.pathname.startsWith("/tashuo");
  },
  /**
   * 百度知道
   */
  isZhiDao() {
    return window.location.hostname === "zhidao.baidu.com";
  },
  /**
   * 百度翻译
   */
  isFanYi() {
    return window.location.hostname === "fanyi.baidu.com";
  },
  /**
   * 百度翻译 - App
   */
  isFanYiApp() {
    return window.location.hostname === "fanyi-app.baidu.com";
  },
  /**
   * 百度图片
   */
  isImage() {
    return window.location.hostname === "image.baidu.com";
  },
  /**
   * 百度地图
   */
  isMap() {
    return window.location.hostname === "map.baidu.com";
  },
  /**
   *
   */
  isMbd() {
    return window.location.hostname === "mbd.baidu.com";
  },
  /**
   * 百度好学
   */
  isXue() {
    return window.location.hostname === "xue.baidu.com";
  },
  /**
   * 爱企查
   */
  isAiQiCha() {
    return window.location.hostname === "aiqicha.baidu.com";
  },
  /**
   * 百度网盟
   */
  isPos() {
    return window.location.hostname === "pos.baidu.com";
  },
  /**
   * 好看视频
   */
  isHaoKan() {
    return window.location.hostname === "haokan.baidu.com";
  },
  /**
   * 百度图片搜索
   */
  isGraph() {
    return window.location.hostname === "graph.baidu.com";
  },
  /**
   * 百度网盘
   */
  isPan() {
    return window.location.hostname === "pan.baidu.com";
  },
  /**
   * 文心一言
   */
  isYiYan() {
    return window.location.hostname === "yiyan.baidu.com";
  },
  /**
   * 搜索AI伙伴
   */
  isChat() {
    return window.location.hostname === "chat.baidu.com";
  },
  /**
   * 百度教育
   */
  isMiniJiaoYu() {
    return window.location.hostname === "uf9kyh.smartapps.cn";
  },
  /**
   * 百度教育
   */
  isEasyLearn() {
    return window.location.hostname === "easylearn.baidu.com";
  },
  /**
   * 百度基木鱼
   */
  isISite() {
    return window.location.hostname === "isite.baidu.com" && window.location.pathname.startsWith("/site/wjz2tdly");
  },
  /**
   * 百度爱学
   */
  isAiStudy() {
    return window.location.hostname === "aistudy.baidu.com";
  },
  /**
   * 贴吧 - 小程序
   */
  isSmartApps_Tieba() {
    return window.location.hostname === "byokpg.smartapps.baidu.com";
  },
};
