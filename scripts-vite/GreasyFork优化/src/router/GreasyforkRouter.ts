export const GreasyforkRouter = {
  /**
   * 主页
   *
   * + /zh-CN
   */
  isHome() {
    return window.location.pathname.split("/").length <= 2 && window.location.search === "";
  },
  /**
   * 代码页面
   *
   * + /code...
   */
  isCode() {
    return Boolean(window.location.pathname.split("/")?.includes("code"));
  },
  /**
   * 代码页面
   *
   * （严格比较）
   *
   * + /code
   * + /code/
   */
  isCodeStrict() {
    return Boolean(window.location.pathname.match(/\/code(\/|)$/));
  },
  /**
   * 版本页面
   *
   * （严格比较）
   *
   * + /version
   * + /version/
   */
  isVersion() {
    return Boolean(window.location.pathname.match(/\/versions(\/|)$/));
  },
  /**
   * 用户
   *
   * + /users/...
   */
  isUsers() {
    return Boolean(window.location.pathname.match(/\/.+\/users\/.+/gi));
  },
  /**
   * 私聊用户页面，可能是全部私信页面，也可能是某个用户的私信页面
   *
   * + /conversations...
   */
  isUsersConversations() {
    return this.isUsers() && Boolean(window.location.pathname.includes("/conversations"));
  },
  /**
   * 私聊xxx用户页面
   *
   * + /conversations/111...
   */
  isUsersConversationsWithSomeUser() {
    return this.isUsersConversations() && Boolean(window.location.pathname.match(/\/conversations\/[\d]+/));
  },
  /**
   * 脚本页面(单个脚本的页面)
   *
   * + /scripts/111...
   */
  isScript() {
    return Boolean(window.location.pathname.match(/\/scripts\/[\d+]/));
  },
  /**
   * 脚本管理页面
   *
   * + /scripts/.../admin
   */
  isScriptAdmin() {
    return Boolean(window.location.pathname.endsWith("/admin"));
  },
  /**
   * 脚本列表页面
   *
   * （严格比较）
   *
   * + /scripts
   * + /scripts/
   */
  isScriptList() {
    return Boolean(window.location.pathname.match(/\/scripts(\/|)$/));
  },
  /**
   * 脚本列表-按域名
   *
   * + /scripts/by-site...
   */
  isScriptsBySite() {
    return Boolean(window.location.pathname.match("/scripts/by-site"));
  },
  /**
   * 脚本反馈
   *
   * + /scripts/xxxx/feedback
   */
  isScriptsFeedback() {
    return this.isScript() && window.location.pathname.match(/\/feedback(\/|)$/i);
  },
  /**
   * 库列表页面
   *
   * （严格比较）
   *
   * + /libraries
   * + /libraries/
   */
  isScriptLibraryList() {
    return Boolean(window.location.pathname.match(/\/libraries(\/|)$/));
  },
  /**
   * 脚本搜索结果页面
   *
   * + /scripts?q=
   */
  isScriptSearch() {
    let searchParams = new URLSearchParams(window.location.search);
    return this.isScriptList() && searchParams.has("q");
  },
  /**
   * 脚本代码搜索页面
   *
   * （严格比较）
   *
   * + /code-search
   * + /code-search/
   */
  isScriptCodeSearch() {
    return Boolean(window.location.pathname.match(/\/code-search(\/|)$/));
  },
  /**
   * 库列表搜索
   *
   * + /scripts/libraries?q=
   */
  isScriptLibraryListSearch() {
    let searchParams = new URLSearchParams(window.location.search);
    return this.isScriptLibraryList() && searchParams.has("q");
  },
  /**
   * 讨论页面
   *
   * （严格比较）
   *
   * + /discussions
   * + /discussions/
   */
  isDiscuessions() {
    return Boolean(window.location.pathname.match(/\/discussions(\/|)$/));
  },
  /**
   * 图片资源页面
   */
  isImageSource() {
    return window.location.pathname.startsWith("/vite/assets");
  },
};
