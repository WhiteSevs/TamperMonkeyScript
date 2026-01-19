import { addStyle, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import { Panel } from "@components/setting/panel";

export const M_CSDNBlogArticleComment = {
  init() {
    Panel.exec(
      "m-csdn-blog-comment-enable",
      () => {
        return this.blockComment();
      },
      (keyList) => {
        return !Panel.getValue(keyList[0]);
      },
      true
    );
    Panel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
      return this.notLimitCommentMaxHeight();
    });
  },
  /**
   * 启用/关闭 评论区
   */
  blockComment() {
    log.info("启用/关闭 评论区");
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
