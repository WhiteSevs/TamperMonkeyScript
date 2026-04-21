import { RouterUtil } from "@components/utils/RouterUtil";

export const DouYinRouter = {
  /**
   * 是否是抖音主站
   */
  isIndex(href?: string) {
    return RouterUtil.builder(href).hostName("www.douyin.com").or(href).hostName("douyin.com").r();
  },
  /**
   * 直播
   */
  isLive(href?: string) {
    return RouterUtil.hostName("live.douyin.com").r() || this.isFollowLive(href) || this.isRootLive(href);
  },
  /**
   * 创作者中心
   */
  isCreator(href?: string) {
    return RouterUtil.hostName("creator.douyin.com").r();
  },
  /**
   * 关注
   *
   * + /follow
   */
  isFollow(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/follow").r();
  },
  /**
   * 关注-直播
   *
   * + /follow/live/
   */
  isFollowLive(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/follow/live/").r();
  },
  /**
   * 刷视频时的点击进去的直播
   *
   * + /root/live/
   */
  isRootLive(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/root/live/").r();
  },
  /**
   * 推荐视频
   *
   * + /?recommend=1
   */
  isRecommend(href?: string) {
    return this.isIndex(href) && RouterUtil.pathname("/").r() && RouterUtil.seachParams("recommend").r();
  },
  /**
   * 搜索
   *
   * + /search/
   * + /root/search/
   * + /user/用户id/search/搜索内容
   */
  isSearch(href?: string) {
    return (
      this.isIndex(href) &&
      (this.isRootSearch(href) ||
        RouterUtil.builder(href).pathnameStartsWith("/search/").r() ||
        this.isUserSearch(href))
    );
  },
  /**
   * 其它地方进去的搜索
   *
   * + /root/search/
   */
  isRootSearch(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/root/search/").r();
  },
  /**
   * 例如：知识、二次元、游戏、美食等
   *
   * + /channel/
   */
  isChannel(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/channel/").r();
  },
  /**
   * 精选
   *
   * + /discover/
   */
  isDiscover(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/discover/").r();
  },
  /**
   * 用户主页
   *
   * + /user/
   */
  isUser(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/user/").r();
  },
  /**
   * 用户主页顶部进去的搜索
   *
   * + /user/用户id/search/搜索内容
   */
  isUserSearch(href?: string) {
    return this.isUser(href) && RouterUtil.builder(href).pathnameIncludes("/search/").r();
  },
  /**
   * 单个视频，一般是分享的视频链接
   *
   * + /video/
   */
  isVideo(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/video/").r();
  },
  /**
   * 笔记图文
   *
   * + /note/
   */
  isNote(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/note/").r();
  },
  /**
   * 精选
   *
   * + /jingxuan/
   */
  isJingXuan(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/jingxuan").r();
  },
  /**
   * 朋友
   *
   * + /friend
   */
  isFriend(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/friend").r();
  },
  /**
   * 私信
   *
   * + /chat
   */
  isChat(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/chat").r();
  },
  /**
   * AI抖音
   */
  isAISearch(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/aisearch").r();
  },
  /**
   * 热点榜
   */
  isHot(href?: string) {
    return this.isIndex(href) && RouterUtil.builder(href).pathnameStartsWith("/hot").r();
  },
};
