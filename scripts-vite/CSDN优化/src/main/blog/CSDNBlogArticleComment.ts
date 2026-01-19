import { $, DOMUtils, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { Panel } from "@components/setting/panel";

export const CSDNBlogArticleComment = {
  init() {
    Panel.exec(
      "csdn-blog-blockComment",
      () => {
        return this.blockComment();
      },
      (keyList) => !Panel.getValue(keyList[0]),
      true
    );
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("csdn-blog-restoreComments", () => {
        this.restoreComments();
      });
    });
  },

  /**
   * 屏蔽评论区
   */
  blockComment() {
    log.info("屏蔽评论区");
    return CommonUtil.addBlockCSS(`#pcCommentBox`);
  },
  /**
   * 优化评论区的位置
   */
  restoreComments() {
    /* 第一条评论 */
    log.info("恢复评论到正确位置-第一条评论");
    DOMUtils.waitNode(".first-recommend-box").then(($firstRecommendBox) => {
      const $recommendBox = $(".recommend-box.insert-baidu-box.recommend-box-style")!;
      $recommendBox.insertBefore($firstRecommendBox, $recommendBox.firstChild);
    });
    log.info("恢复评论到正确位置-第二条评论");
    /* 第二条评论 */
    DOMUtils.waitNode(".second-recommend-box").then(($secondRecommendBox) => {
      const $recommendBox = $(".recommend-box.insert-baidu-box.recommend-box-style")!;
      $recommendBox.insertBefore($secondRecommendBox, $recommendBox.firstChild);
    });
  },
};
