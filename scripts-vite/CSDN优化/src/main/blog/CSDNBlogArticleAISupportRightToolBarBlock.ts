import { CommonUtil } from "@/utils/CommonUtil";
import { log } from "@/env";
import { Panel } from "@components/setting/panel";

export const CSDNBlogArticleAISupportRightToolBarBlock = {
  init() {
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbar", () => {
      return this.blockRightToolbar();
    });
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarCatalogue", () => {
      return this.blockRightToolbarCatalogue();
    });
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarLike", () => {
      return this.blockRightToolbarLike();
    });
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarComment", () => {
      return this.blockRightToolbarComment();
    });
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarCollect", () => {
      return this.blockRightToolbarCollect();
    });
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarShare", () => {
      return this.blockRightToolbarShare();
    });
    Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarMore", () => {
      return this.blockRightToolbarMore();
    });
  },
  /**
   * 【屏蔽】右侧工具栏
   */
  blockRightToolbar() {
    log.info("【屏蔽】右侧工具栏");
    return CommonUtil.addBlockCSS(".article-aside-container");
  },
  /**
   * 【屏蔽】目录
   */
  blockRightToolbarCatalogue() {
    log.info("【屏蔽】目录");
    return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item.groupfile");
  },
  /**
   * 【屏蔽】点赞
   */
  blockRightToolbarLike() {
    log.info("【屏蔽】点赞");
    return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item.islike");
  },
  /**
   * 【屏蔽】评论
   */
  blockRightToolbarComment() {
    log.info("【屏蔽】评论");
    return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item.go-side-comment");
  },
  /**
   * 【屏蔽】收藏
   */
  blockRightToolbarCollect() {
    log.info("【屏蔽】收藏");
    return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item#sidebar-collect");
  },
  /**
   * 【屏蔽】分享
   */
  blockRightToolbarShare() {
    log.info("【屏蔽】分享");
    return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item#tool-share");
  },
  /**
   * 【屏蔽】...
   */
  blockRightToolbarMore() {
    log.info("【屏蔽】...");
    return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item#sidebar-more");
  },
};
