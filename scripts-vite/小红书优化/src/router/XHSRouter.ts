import { RouterUtil } from "@components/utils/RouterUtil";

/* 小红书router */
export const XHSRouter = {
  /**
   * 判断是否是笔记页面
   */
  isArticle() {
    return RouterUtil.builder().pathnameStartsWith("/discovery/item/").or().pathnameStartsWith("/explore/").r();
  },
  /**
   * 判断是否是用户主页页面
   */
  isUserHome() {
    return RouterUtil.builder().pathnameStartsWith("/user/profile/").r();
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
    return this.isSearchResult() || this.isAISearch();
  },
  /**
   *
   *
   * 判断是否是搜索结果页面
   */
  isSearchResult() {
    return RouterUtil.builder().pathnameStartsWith("/search_result/").r();
  },
  /**
   * 判断是否是AI搜索页面
   */
  isAISearch() {
    return RouterUtil.builder().pathname("/search_result_ai").r();
  },
};
