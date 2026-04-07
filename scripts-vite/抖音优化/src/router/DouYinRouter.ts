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
  isLive() {
    return RouterUtil.hostName("live.douyin.com").r() || this.isFollowLive() || this.isRootLive();
  },
  /**
   * 创作者中心
   */
  isCreator() {
    return RouterUtil.hostName("creator.douyin.com").r();
  },
  /**
   * 关注
   *
   * + /follow
   */
  isFollow() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/follow").r();
  },
  /**
   * 关注-直播
   *
   * + /follow/live/
   */
  isFollowLive() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/follow/live/").r();
  },
  /**
   * 刷视频时的点击进去的直播
   *
   * + /root/live/
   */
  isRootLive() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/root/live/").r();
  },
  /**
   * 推荐视频
   *
   * + /?recommend=1
   */
  isRecommend() {
    return this.isIndex() && RouterUtil.pathname("/").r() && RouterUtil.seachParams("recommend").r();
  },
  /**
   * 搜索
   *
   * + /search/
   * + /root/search/
   */
  isSearch(href?: string) {
    return this.isIndex(href) && (this.isRootSearch(href) || RouterUtil.builder().pathnameStartsWith("/search/").r());
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
  isChannel() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/channel/").r();
  },
  /**
   * 精选
   *
   * + /discover/
   */
  isDiscover() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/discover/").r();
  },
  /**
   * 用户主页
   *
   * + /user/
   */
  isUser() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/user/").r();
  },
  /**
   * 单个视频，一般是分享的视频链接
   *
   * + /video/
   */
  isVideo() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/video/").r();
  },
  /**
   * 笔记图文
   *
   * + /note/
   */
  isNote() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/note/").r();
  },
  /**
   * 精选
   *
   * + /jingxuan/
   */
  isJingXuan() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/jingxuan").r();
  },
  /**
   * 朋友
   *
   * + /friend
   */
  isFriend() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/friend").r();
  },
  /**
   * 私信
   *
   * + /chat
   */
  isChat() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/chat").r();
  },
  /**
   * AI抖音
   */
  isAISearch() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/aisearch").r();
  },
  /**
   * 热点榜
   */
  isHot() {
    return this.isIndex() && RouterUtil.builder().pathnameStartsWith("/hot").r();
  },
};
