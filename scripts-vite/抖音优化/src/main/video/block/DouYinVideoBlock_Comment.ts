import { log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";

/**
 * 评论区
 */
export const DouYinVideoBlock_Comment = {
  init() {
    Panel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
      return this.shieldUserCommentToolBar();
    });
    Panel.execMenuOnce("dy-video-shieldUserCommentEveryOneAllSearch", () => {
      return this.shieldUserCommentEveryOneAllSearch();
    });
  },

  /**
   * 【屏蔽】评论工具栏
   */
  shieldUserCommentToolBar() {
    log.info("【屏蔽】评论工具栏");
    return [CommonUtil.addBlockCSS(".comment-input-container")];
  },
  /**
   * 【屏蔽】大家都在搜
   */
  shieldUserCommentEveryOneAllSearch() {
    log.info("【屏蔽】大家都在搜");
    return [CommonUtil.addBlockCSS(".comment-header-with-search")];
  },
};
