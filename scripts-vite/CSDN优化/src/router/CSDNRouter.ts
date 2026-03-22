import { RouterUtil } from "@components/utils/RouterUtil";

export const CSDNRouter = {
  /**
   * 判断是否是华为云联盟
   * + huaweicloud.csdn.net
   */
  isHuaWeiCloudBlog() {
    return RouterUtil.builder().originIncludes("huaweicloud.csdn.net").r();
  },
  /**
   * 判断是否是博客
   * + blog.csdn.net
   */
  isBlog() {
    return RouterUtil.builder().originIncludes("blog.csdn.net").r();
  },
  /**
   * 博客帖子
   */
  isBlogArticle() {
    return this.isBlog() && RouterUtil.builder().pathnameIncludes("/article/details/").r();
  },
  /**
   * 判断是否是文库
   * + wenku.csdn.net
   */
  isWenKu() {
    return RouterUtil.builder().originIncludes("wenku.csdn.net").r();
  },
  /**
   * 判断是否是链接
   * + link.csdn.net
   */
  isLink() {
    return RouterUtil.hostName("link.csdn.net").r();
  },
  /**
   * 判断是否是搜索
   * + so.csdn.net
   */
  isSo() {
    return RouterUtil.hostName("so.csdn.net").r();
  },
  /**
   * 判断是否是C知道
   * + so.csdn.net/know
   * + /chat
   * + /so/ai
   */
  isSoCKnow() {
    return this.isSo() && RouterUtil.builder().pathnameStartsWith("/chat").or().pathnameStartsWith("/so/ai").r();
  },
  /**
   * 判断是否是资源页面
   * + download.csdn.net
   */
  isDownload() {
    return RouterUtil.hostName("download.csdn.net").r();
  },
};
