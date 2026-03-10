import { addStyle, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { Panel } from "@components/setting/panel";

export const M_CSDNBlogArticleComment = {
  init() {
    Panel.execMenuOnce("m-csdn-blog-blockComment", () => {
      return this.blockComment();
    });
    Panel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
      return this.notLimitCommentMaxHeight();
    });
  },
  /**
   * 【屏蔽】评论区
   */
  blockComment() {
    log.info("【屏蔽】评论区");
    return CommonUtil.addBlockCSS("#comment");
  },
  /**
   * 不限制评论区的最大高度
   */
  notLimitCommentMaxHeight() {
    log.info("不限制评论区的最大高度");
    return addStyle(/*css*/ `
        #comment{
          max-height: none !important;
        }
      `);
  },
};
