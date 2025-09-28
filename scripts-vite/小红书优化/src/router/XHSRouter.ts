/* 小红书router */
export const XHSRouter = {
  /**
   * 判断是否是笔记页面
   */
  isArticle() {
    return (
      globalThis.location.pathname.startsWith("/discovery/item/") ||
      globalThis.location.pathname.startsWith("/explore/")
    );
  },
  /**
   * 判断是否是用户主页页面
   */
  isUserHome() {
    return globalThis.location.pathname.startsWith("/user/profile/");
  },
  /**
   * 判断是否是主页
   */
  isHome() {
    return (
      globalThis.location.href === "https://www.xiaohongshu.com/" ||
      globalThis.location.href === "https://www.xiaohongshu.com"
    );
  },
  /**
   * 判断是否是搜索页面
   */
  isSearch() {
    return globalThis.location.pathname.startsWith("/search_result/");
  },
};
