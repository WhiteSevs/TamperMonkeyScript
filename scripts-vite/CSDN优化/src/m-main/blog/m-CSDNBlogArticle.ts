import { DOMUtils, addStyle, log } from "@/env";
import { CSDNBlog } from "@/main/blog/CSDNBlog";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { M_CSDNBlogArticleBottomRecommend } from "./m-CSDNBlogArticleBottomRecommend";
import { M_CSDNBlogArticleBottomToolBar } from "./m-CSDNBlogArticleBottomToolBar";
import { M_CSDNBlogArticleComment } from "./m-CSDNBlogArticleComment";

export const M_CSDNBlogArticle = {
  init() {
    // M_CSDNBlogRightToolBar.init();
    M_CSDNBlogArticleComment.init();
    M_CSDNBlogArticleBottomRecommend.init();
    M_CSDNBlogArticleBottomToolBar.init();
    Panel.execMenuOnce("m-csdn-blog-blockTopToolbar", () => {
      return this.blockTopToolbar();
    });
    Panel.execMenuOnce("m-csdn-blog-removeAds", () => {
      return this.removeAds();
    });
    Panel.execMenuOnce("m-csdn-blog-allowSelectText", () => {
      return this.allowSelectText();
    });
    Panel.execMenuOnce("m-csdn-blog-autoExpandContent", () => {
      return this.autoExpandContent();
    });
    Panel.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight", () => {
      return this.notLimitCodePreMaxHeight();
    });

    DOMUtils.onReady(() => {
      Panel.execMenuOnce("m-csdn-blog-unBlockCopy", () => {
        CSDNBlog.unBlockCopy();
      });
    });
  },
  /**
   * 屏蔽顶部Toolbar
   */
  blockTopToolbar() {
    log.info("屏蔽顶部Toolbar");
    return [
      CommonUtil.addBlockCSS("#csdn-toolbar"),
      addStyle(/*css*/ `
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`),
    ];
  },
  /**
   * 去除广告
   */
  removeAds() {
    log.info("去除广告");
    return [
      /* 登录窗口 */
      CommonUtil.waitRemove(".passport-login-container"),
      /* 打开APP */
      CommonUtil.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),
      /* 广告 */
      CommonUtil.waitRemove(".add-firstAd"),
      /* 打开CSDN APP 小程序看全文 */
      CommonUtil.waitRemove("div.feed-Sign-weixin"),
      /* ios版本提示 */
      CommonUtil.waitRemove("div.ios-shadowbox"),
    ];
  },
  /**
   * 允许选择内容
   */
  allowSelectText() {
    log.info("允许选择内容");
    return addStyle(/*css*/ `
    #content_views,
    #content_views pre,
    #content_views pre code{
      webkit-touch-callout: text !important;
      -webkit-user-select: text !important;
      -khtml-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
    `);
  },
  /**
   * 自动展开
   */
  autoExpandContent() {
    log.info("自动展开");
    return addStyle(/*css*/ `
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `);
  },
  /**
   * 不限制代码块的最大高度
   */
  notLimitCodePreMaxHeight() {
    log.info("不限制代码块的最大高度");
    return addStyle(/*css*/ `
    pre{
        max-height: unset !important;
    }
    `);
  },
};
