const WeiBoRouter = {
  /**
   * 移动端微博
   * @returns
   */
  isMWeiBo() {
    return window.location.hostname === "m.weibo.cn";
  },
  /**
   * 移动端微博-首页
   */
  isMWeiBoHome() {
    return this.isMWeiBo() && window.location.pathname === "/";
  },
  /**
   * 移动端微博-微博正文
   */
  isMWeiBo_detail() {
    return this.isMWeiBo() && window.location.pathname.startsWith("/detail/");
  },
  /**
   * 移动端微博-微博正文
   */
  isMWeiBo_status() {
    return this.isMWeiBo() && window.location.pathname.startsWith("/status/");
  },
  /**
   * 移动端微博-用户主页
   */
  isMWeiBo_userHome() {
    return this.isMWeiBo() && window.location.pathname.startsWith("/u/");
  },
  /**
   * 移动端微博-搜索
   */
  isMWeiBo_search() {
    return this.isMWeiBo() && window.location.pathname.startsWith("/search");
  },
  /**
   * 移动端微博-微博热搜
   */
  isMWeiBo_HotSearch() {
    let searchParams = new URLSearchParams(globalThis.location.search);
    let containerid = searchParams.get("containerid");
    return (
      this.isMWeiBo() &&
      window.location.pathname.startsWith("/p/index") &&
      typeof containerid === "string" &&
      containerid.startsWith("106003")
    );
  },
  /**
   * 话题
   */
  isHuaTi() {
    return window.location.hostname === "huati.weibo.cn";
  },
  /**
   * 视频页
   */
  isVideo() {
    return window.location.hostname === "h5.video.weibo.com";
  },
  /**
   * 头条
   */
  isCard() {
    return window.location.hostname === "card.weibo.com";
  },
  /**
   * 头条文章
   */
  isCardArticle() {
    return this.isCard() && window.location.pathname.startsWith("/article/");
  },
  /**
   * 微博直播页面
   */
  isLive() {
    return window.location.hostname === "weibo.com" && window.location.pathname.startsWith("/l/wblive/m/show/");
  },
};

export { WeiBoRouter };
