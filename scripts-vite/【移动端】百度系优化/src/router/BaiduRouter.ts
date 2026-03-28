import { RouterUtil } from "@components/utils/RouterUtil";

export const BaiduRouter = {
  /**
   * 百度搜索
   */
  isSearch() {
    return RouterUtil.builder()
      .hostNameMatch(/^(m[0-9]{0,2}|www).baidu.com$/g)
      .r();
  },
  /**
   * 百度搜索 - /bh
   * 百度健康
   */
  isSearchBh() {
    return this.isSearch() && RouterUtil.builder().pathnameStartsWith("/bh").r();
  },
  /**
   * 百度搜索 - /video/page
   * 视频页
   */
  isSearchVideo() {
    return this.isSearch() && RouterUtil.builder().pathnameStartsWith("/video/page").r();
  },
  /**
   * 百度搜索主页
   */
  isSearchHome() {
    return (
      this.isSearch() &&
      RouterUtil.pathname("/").r() &&
      (RouterUtil.search("").r() || RouterUtil.builder().searchStartsWith("?").r())
    );
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * /sf/vsearch
   * 例如：视频、笔记、贴吧、图片、资讯、问答、文库...等
   */
  isSearchVSearch() {
    return this.isSearch() && RouterUtil.builder().pathnameStartsWith("/sf/vsearch").r();
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * 图片
   * /sf/vsearch?pd=image_content
   */
  isSearchVSearch_image_content() {
    return this.isSearch() && RouterUtil.builder().searchParams("pd", "image_content").r();
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * 笔记
   * /sf/vsearch?pd=note
   */
  isSearchVSearch_note() {
    return this.isSearchVSearch() && RouterUtil.builder().searchParams("pd", "note").r();
  },
  /**
   * 百度搜索其它卡片搜索结果页面
   * 问答
   * /sf/vsearch?pd=wenda_tab
   */
  isSearchWenDaTab() {
    return this.isSearchVSearch() && RouterUtil.builder().searchParams("pd", "wenda_tab").r();
  },
  /**
   * 百度健康
   */
  isHealth() {
    return this.isSearchBh() || RouterUtil.hostName("health.baidu.com").r();
  },
  /**
   * 百家号
   */
  isBaiJiaHao() {
    return RouterUtil.hostName("baijiahao.baidu.com").r();
  },
  /**
   * 贴吧
   */
  isTieBa() {
    return (
      RouterUtil.builder()
        .hostNameMatch(/^(tieba|ala|static.tieba|nba|fexclick|youhua|tiebaswan).baidu.com$/g)
        .r() ||
      RouterUtil.hostName("jump2.bdimg.com").r() ||
      RouterUtil.hostName("www.tieba.com").r()
    );
  },
  /**
   * 贴吧 - 帖子
   */
  isTieBaPost() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/p/").r();
  },
  /**
   * 贴吧 - 热帖
   */
  isTieBaNewTopic() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/mo/q/newtopic/topicTemplate").r();
  },
  /**
   * 贴吧 - 热搜榜
   */
  isTieBaHottopic() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/hottopic/browse/hottopic").r();
  },
  /**
   * 贴吧 - 搜索结果界面
   */
  isTieBaHybrid() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/mo/q/hybrid/search").r();
  },
  /**
   * 贴吧 - 评论聚合页面
   */
  isTieBaHybridUserGrowBase() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/mo/q/hybrid-usergrow-base/commentFocus").r();
  },
  /**
   * 贴吧 - 中转链接验证页面
   */
  isTieBaCheckUrl() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/mo/q/checkurl").r();
  },
  /**
   * 贴吧 - 吧内
   */
  isTieBaNei() {
    return this.isTieBa() && RouterUtil.pathname("/f").r();
  },
  /**
   * 贴吧 - 首页
   */
  isTieBaIndex() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/index").r();
  },
  /**
   * 贴吧 - 主页
   */
  isTieBaHome() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/home/main").r();
  },
  /**
   * 贴吧 - 合辑
   */
  isTieBaCollectionCenter() {
    return this.isTieBa() && RouterUtil.builder().pathnameStartsWith("/mo/q/hybrid-main-user/collectionCenter").r();
  },
  /**
   * 百度文库
   */
  isWenKu() {
    return RouterUtil.hostName("wk.baidu.com").or().hostName("tanbi.baidu.com").r();
  },
  /**
   * 百度经验
   */
  isJingYan() {
    return RouterUtil.hostName("jingyan.baidu.com").r();
  },
  /**
   * 百度百科
   */
  isBaiKe() {
    return RouterUtil.hostName("baike.baidu.com").or().hostName("wapbaike.baidu.com").r();
  },
  /**
   * 百度百科 - 他说
   */
  isBaiKeTaShuo() {
    return this.isBaiKe() && RouterUtil.builder().pathnameStartsWith("/tashuo").r();
  },
  /**
   * 百度知道
   */
  isZhiDao() {
    return RouterUtil.hostName("zhidao.baidu.com").r();
  },
  /**
   * 百度翻译
   */
  isFanYi() {
    return RouterUtil.hostName("fanyi.baidu.com").r();
  },
  /**
   * 百度翻译 - App
   */
  isFanYiApp() {
    return RouterUtil.hostName("fanyi-app.baidu.com").r();
  },
  /**
   * 百度图片
   */
  isImage() {
    return RouterUtil.hostName("image.baidu.com").r();
  },
  /**
   * 百度地图
   */
  isMap() {
    return RouterUtil.hostName("map.baidu.com").r();
  },
  /**
   *
   */
  isMbd() {
    return RouterUtil.hostName("mbd.baidu.com").r();
  },
  /**
   * 百度好学
   */
  isXue() {
    return RouterUtil.hostName("xue.baidu.com").r();
  },
  /**
   * 爱企查
   */
  isAiQiCha() {
    return RouterUtil.hostName("aiqicha.baidu.com").r();
  },
  /**
   * 百度网盟
   */
  isPos() {
    return RouterUtil.hostName("pos.baidu.com").r();
  },
  /**
   * 好看视频
   */
  isHaoKan() {
    return RouterUtil.hostName("haokan.baidu.com").r();
  },
  /**
   * 百度图片搜索
   */
  isGraph() {
    return RouterUtil.hostName("graph.baidu.com").r();
  },
  /**
   * 百度网盘
   */
  isPan() {
    return RouterUtil.hostName("pan.baidu.com").r();
  },
  /**
   * 文心一言
   */
  isYiYan() {
    return RouterUtil.hostName("yiyan.baidu.com").r();
  },
  /**
   * 搜索AI伙伴
   */
  isChat() {
    return RouterUtil.hostName("chat.baidu.com").r();
  },
  /**
   * 百度教育
   */
  isMiniJiaoYu() {
    return RouterUtil.hostName("uf9kyh.smartapps.cn").r();
  },
  /**
   * 百度教育
   */
  isEasyLearn() {
    return RouterUtil.hostName("easylearn.baidu.com").r();
  },
  /**
   * 百度基木鱼
   */
  isISite() {
    return RouterUtil.hostName("isite.baidu.com").pathnameStartsWith("/site/wjz2tdly").r();
  },
  /**
   * 百度爱学
   */
  isAiStudy() {
    return RouterUtil.hostName("aistudy.baidu.com").r();
  },
  /**
   * 贴吧 - 小程序
   */
  isSmartApps_Tieba() {
    return RouterUtil.hostName("byokpg.smartapps.baidu.com").r();
  },
  /**
   * 百度安全验证
   */
  isWappass() {
    return RouterUtil.hostName("wappass.baidu.com").r();
  },
};
