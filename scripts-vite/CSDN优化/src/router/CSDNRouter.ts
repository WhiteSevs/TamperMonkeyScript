export const CSDNRouter = {
  /**
   * 判断是否是华为云联盟
   * + huaweicloud.csdn.net
   */
  isHuaWeiCloudBlog() {
    return Boolean(/huaweicloud.csdn.net/i.test(window.location.origin));
  },
  /**
   * 判断是否是博客
   * + blog.csdn.net
   */
  isBlog() {
    return Boolean(/blog.csdn.net/i.test(window.location.origin));
  },
  /**
   * 博客帖子
   */
  isBlogArticle() {
    return this.isBlog() && window.location.pathname.includes("/article/details/");
  },
  /**
   * 判断是否是文库
   * + wenku.csdn.net
   */
  isWenKu() {
    return Boolean(/wenku.csdn.net/i.test(window.location.origin));
  },
  /**
   * 判断是否是链接
   * + link.csdn.net
   */
  isLink() {
    return window.location.hostname === "link.csdn.net";
  },
  /**
   * 判断是否是搜索
   * + so.csdn.net
   */
  isSo() {
    return window.location.hostname === "so.csdn.net";
  },
  /**
   * 判断是否是C知道
   * + so.csdn.net/know
   * + /chat
   * + /so/ai
   */
  isSoCKnow() {
    return (
      this.isSo() && (window.location.pathname.startsWith("/chat") || window.location.pathname.startsWith("/so/ai"))
    );
  },
  /**
   * 判断是否是资源页面
   * + download.csdn.net
   */
  isDownload() {
    return window.location.hostname === "download.csdn.net";
  },
};
