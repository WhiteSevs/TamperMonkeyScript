import BlogArticleCenterCSS from "./css/articleCenter.css?raw";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { unsafeWindow } from "ViteGM";
import { CSDNBlogRightToolBar } from "./CSDNBlogArticleRightToolBar";
import { CommonUtil } from "@components/utils/CommonUtil";

export const CSDNBlogArticle = {
  init() {
    CSDNBlogRightToolBar.init();
    Panel.execMenuOnce("csdn-blog-articleCenter", () => {
      return this.articleCenter();
    });
    Panel.execMenuOnce("csdn-blog-shieldLoginDialog", () => {
      return this.shieldLoginDialog();
    });
    Panel.execMenuOnce("csdn-blog-autoExpandContent", () => {
      return this.autoExpandContent();
    });
    Panel.execMenuOnce("csdn-blog-autoExpandCodeContent", () => {
      return this.autoExpandCodeContent();
    });
    Panel.exec(
      "csdn-blog-blockComment",
      () => {
        return this.blockComment();
      },
      (keyList) => !Panel.getValue(keyList[0]),
      true
    );
    Panel.exec(
      "csdn-blog-bottomRecommendArticleEnable",
      () => {
        return this.shieldBottomRecommendArticle();
      },
      (keyList) => !Panel.getValue(keyList[0]),
      true
    );
    Panel.execMenuOnce("csdn-blog-shieldBottomSkillTree", () => {
      return this.shieldBottomSkillTree();
    });
    Panel.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar", () => {
      return this.shieldBottomFloatingToolbar();
    });
    Panel.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside", () => {
      return this.shieldLeftBlogContainerAside();
    });
    Panel.execMenuOnce("csdn-blog-shieldRightDirectoryInformation", () => {
      return this.shieldRightDirectoryInformation();
    });
    Panel.execMenuOnce("csdn-blog-shieldArticleSearchTip", () => {
      return this.shieldArticleSearchTip();
    });
    Panel.execMenuOnce("csdn-blog-allowSelectContent", () => {
      return this.allowSelectContent();
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("csdn-blog-identityCSDNDownload", () => {
        this.identityCSDNDownload();
      });
      Panel.execMenuOnce("csdn-blog-clickPreCodeAutomatically", () => {
        this.clickPreCodeAutomatically();
      });
      Panel.execMenuOnce("csdn-blog-restoreComments", () => {
        this.restoreComments();
      });
    });
  },
  /**
   * 点击代码块自动展开
   */
  clickPreCodeAutomatically() {
    log.info("点击代码块自动展开");
    document.addEventListener("click", function (event) {
      let $click = event.target as HTMLElement;
      if ($click.localName !== "pre") {
        return;
      }
      $click.style.setProperty("height", "auto");
      $click.querySelector(".hide-preCode-box")?.remove();
    });
  },
  /**
   * 恢复评论到正确位置
   */
  restoreComments() {
    /* 第一条评论 */
    log.info("恢复评论到正确位置-第一条评论");
    DOMUtils.waitNode(".first-recommend-box").then(($firstRecommendBox) => {
      let recommendBoxElement = document.querySelector(
        ".recommend-box.insert-baidu-box.recommend-box-style"
      ) as HTMLDivElement;
      recommendBoxElement.insertBefore($firstRecommendBox, recommendBoxElement.firstChild);
    });
    log.info("恢复评论到正确位置-第二条评论");
    /* 第二条评论 */
    DOMUtils.waitNode(".second-recommend-box").then(($secondRecommendBox) => {
      let recommendBoxElement = document.querySelector(
        ".recommend-box.insert-baidu-box.recommend-box-style"
      ) as HTMLDivElement;
      recommendBoxElement.insertBefore($secondRecommendBox, recommendBoxElement.firstChild);
    });
  },
  /**
   * 标识CSDN下载的链接
   */
  identityCSDNDownload() {
    log.info("标识CSDN下载的链接");
    document
      .querySelectorAll<HTMLDivElement>(".recommend-item-box[data-url*='https://download.csdn.net/']")
      .forEach((item) => {
        if (Panel.getValue("csdn-blog-removeResourceDownloadArticle")) {
          item.remove();
        } else {
          (item.querySelector(".content-box") as HTMLDivElement).style.setProperty("border", "2px solid red");
        }
      });
  },
  /**
   * 全文居中
   */
  articleCenter() {
    log.info("全文居中");
    let result: any[] = [addStyle(BlogArticleCenterCSS)];
    result.push(this.shieldRightDirectoryInformation());
    // 【屏蔽】右侧目录信息
    // 去除margin偏移
    result.push(
      addStyle(/*css*/ `
      #mainBox {
        margin-right: 0px;
      }
      `)
    );
    // 【屏蔽】左侧博客信息
    // 去除margin偏移
    result.push(this.shieldLeftBlogContainerAside());
    result.push(
      addStyle(/*css*/ `
      #mainBox {
        margin-left: 0px;
      }`)
    );
    return result;
  },
  /**
   * 屏蔽登录弹窗
   */
  shieldLoginDialog() {
    log.info("屏蔽登录弹窗");
    return CommonUtil.addBlockCSS(`.passport-login-container`);
  },
  /**
   * 自动展开代码块
   */
  autoExpandCodeContent() {
    log.info("自动展开代码块");
    return [
      CommonUtil.addBlockCSS("pre.set-code-hide .hide-preCode-box"),
      addStyle(/*css*/ `
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `),
    ];
  },
  /**
   * 自动展开全文
   */
  autoExpandContent() {
    log.info("自动展开全文");
    return addStyle(/*css*/ `
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `);
  },
  /**
   * 屏蔽评论区
   */
  blockComment() {
    log.info("屏蔽评论区");
    return CommonUtil.addBlockCSS(`#pcCommentBox`);
  },
  /**
   * 屏蔽底部推荐文章
   */
  shieldBottomRecommendArticle() {
    log.info("屏蔽底部推荐文章");
    return CommonUtil.addBlockCSS(`main > div.recommend-box`);
  },
  /**
   * 屏蔽底部xx技能树
   */
  shieldBottomSkillTree() {
    log.info("屏蔽底部xx技能树");
    return CommonUtil.addBlockCSS(`#treeSkill`);
  },
  /**
   * 屏蔽底部悬浮工具栏
   */
  shieldBottomFloatingToolbar() {
    log.info("屏蔽底部悬浮工具栏");
    return CommonUtil.addBlockCSS(`#toolBarBox`);
  },
  /**
   * 屏蔽左侧博客信息
   */
  shieldLeftBlogContainerAside() {
    log.info("【屏蔽】左侧博客信息");
    return CommonUtil.addBlockCSS(`aside.blog_container_aside`);
  },
  /**
   * 【屏蔽】右侧目录信息
   */
  shieldRightDirectoryInformation() {
    log.info("【屏蔽】右侧目录信息");
    return CommonUtil.addBlockCSS("#rightAsideConcision", "#rightAside");
  },
  /**
   * 屏蔽文章内的选中搜索悬浮提示
   */
  shieldArticleSearchTip() {
    log.info("屏蔽文章内的选中搜索悬浮提示");
    return CommonUtil.addBlockCSS(`#articleSearchTip`);
  },
  /**
   * 允许选择内容
   */
  allowSelectContent() {
    log.info("允许选择内容");
    return addStyle(/*css*/ `
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`);
  },
};
