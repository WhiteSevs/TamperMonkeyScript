import { log } from "@/env";
import { addBlockCSS } from "@components/env.base";
import { Panel } from "@components/setting/panel";

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
    Panel.execMenuOnce("dy-video-comment-blockDetails", () => {
      return this.blockDetails();
    });
    Panel.execMenuOnce("dy-video-comment-blockTAWork", () => {
      return this.blockTAWork();
    });
    Panel.execMenuOnce("dy-video-comment-blockComment", () => {
      return this.blockComment();
    });
    Panel.execMenuOnce("dy-video-comment-blockAskAI", () => {
      return this.blockAskAI();
    });
    Panel.execMenuOnce("dy-video-comment-blockRelatedRecommend", () => {
      return this.blockRelatedRecommend();
    });
  },

  /**
   * 【屏蔽】评论工具栏
   */
  shieldUserCommentToolBar() {
    log.info("【屏蔽】评论工具栏");
    return [addBlockCSS(".comment-input-container")];
  },
  /**
   * 【屏蔽】大家都在搜
   */
  shieldUserCommentEveryOneAllSearch() {
    log.info("【屏蔽】大家都在搜");
    return [addBlockCSS(".comment-header-with-search")];
  },
  /**
   * 【屏蔽】详情
   */
  blockDetails() {
    log.info("【屏蔽】详情");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPaneldetail_tab"][aria-selected="false"]'
    );
  },
  /**
   * 【屏蔽】TA的作品
   */
  blockTAWork() {
    log.info("【屏蔽】TA的作品");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPanelauthor_card"][aria-selected="false"]'
    );
  },
  /**
   * 【屏蔽】评论
   */
  blockComment() {
    log.info("【屏蔽】评论");
    return addBlockCSS('#videoSideCard [role="tablist"] [aria-controls="semiTabPanelcomment"][aria-selected="false"]');
  },
  /**
   * 【屏蔽】问AI
   */
  blockAskAI() {
    log.info("【屏蔽】问AI");
    return addBlockCSS('#videoSideCard [role="tablist"] [aria-controls="semiTabPanelai_card"][aria-selected="false"]');
  },
  /**
   * 【屏蔽】相关推荐
   */
  blockRelatedRecommend() {
    log.info("【屏蔽】相关推荐");
    return addBlockCSS(
      '#videoSideCard [role="tablist"] [aria-controls="semiTabPanelrelated_card"][aria-selected="false"]'
    );
  },
};
