import { RouterUtil } from "@components/utils/RouterUtil";

export const MTRouter = {
  /**
   * 克米签到页面
   */
  isKMiSign() {
    return RouterUtil.builder().pathnameStartsWith("/k_misign-sign.html").r();
  },
  /**
   * 帖子
   */
  isPost() {
    return (
      RouterUtil.builder().pathnameStartsWith("/thread-").r() ||
      RouterUtil.builder().pathnameStartsWith("/forum.php").searchParams("mod", "viewthread").r()
    );
  },
  /**
   * 首页、精华
   */
  isPage() {
    return RouterUtil.builder()
      .pathnameMatch(/^\/page-([0-9]+).html/g)
      .r();
  },
  /**
   * 导读链接
   */
  isGuide() {
    return RouterUtil.builder().pathnameStartsWith("/forum.php").searchParams("mod", "guide").r();
  },
  /**
   * 板块
   */
  isPlate() {
    return RouterUtil.builder()
      .pathnameMatch(/\/forum-[0-9]{1,2}-[0-9]{1,2}.html/g)
      .r();
  },
  /**
   * 搜索页面
   */
  isSearch() {
    return RouterUtil.builder().pathnameStartsWith("/search.php").r();
  },
  /**
   * 空间
   */
  isSpace() {
    return RouterUtil.builder().pathnameStartsWith("/home.php").searchParams("mod", "space").r();
  },
  /**
   * 我的个人空间
   */
  isMySpace() {
    return RouterUtil.builder()
      .pathnameStartsWith("/home.php")
      .searchParams("mod", "space")
      .searchParams("do", "profile")
      .searchParams("mycenter")
      .r();
  },
  /**
   * 个人空间页的@点进去
   */
  isSpaceWithAt() {
    return RouterUtil.builder().pathnameStartsWith("/space-uid-").r();
  },
  /**
   * 社区列表
   */
  isForumList() {
    return RouterUtil.builder().pathnameStartsWith("/forum.php").searchParams("forumlist").r();
  },
  /**
   * 消息提醒
   */
  isMessage() {
    return RouterUtil.builder()
      .pathnameStartsWith("/home.php")
      .searchParams("mod", "space")
      .searchParams("do", "notice")
      .r();
  },
  /**
   * 消息提醒列表
   */
  isMessageList() {
    return RouterUtil.builder()
      .pathnameStartsWith("/home.php")
      .searchParams("mod", "space")
      .searchParams("do", "pm")
      .r();
  },
  /**
   * 积分商城
   */
  isPointsMall() {
    return RouterUtil.builder()
      .pathnameStartsWith("/keke_integralmall-keke_integralmall.html")
      .or()
      .pathnameStartsWith("/plugin.php")
      .searchParams("id", "keke_integralmal")
      .r();
  },
  /**
   * 帖子发布/回复页面
   */
  isPostPublish() {
    return RouterUtil.builder().pathnameStartsWith("/forum.php").searchParams("mod", "post").r();
  },
  /**
   * 投票页面
   */
  isPostPublish_voting() {
    return RouterUtil.builder()
      .pathnameStartsWith("/forum.php")
      .searchParams("special", "1")
      .or()
      .searchParams("fid", "42")
      .r();
  },
  /**
   * 帖子编辑页面
   */
  isPostPublish_edit() {
    return this.isPostPublish() && RouterUtil.seachParams("action", "edit").r();
  },
  /**
   * 发帖页面，该页面是尚未存入草稿
   */
  isPostPublish_newthread() {
    return this.isPostPublish() && RouterUtil.seachParams("action", "newthread").r();
  },
  /**
   * 回复编辑页面
   */
  isPostPublish_reply() {
    return this.isPostPublish() && RouterUtil.seachParams("action", "reply").r();
  },
};
