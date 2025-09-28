import { addStyle, log } from "@/env";

export const M_XHSArticleVideo = {
  /**
   * 优化视频笔记的描述（可滚动）
   */
  optimizeVideoNoteDesc() {
    log.info("优化视频笔记的描述（可滚动）");
    return addStyle(/*css*/ `
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`);
  },
};
