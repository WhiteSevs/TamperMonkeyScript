import { $$, DOMUtils, addStyle, log } from "@/env";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
import { CSDNBlogBlock } from "./CSDNBlogBlock";
import { CSDNBlogArticleBlock } from "./CSDNBlogArticleBlock";
import BlogArticleCenterCSS from "./css/articleCenter.css?raw";
import { CSDNBlogArticleComment } from "./CSDNBlogArticleComment";
import { CSDNBlogArticleBottomRecommend } from "./CSDNBlogArticleBottomRecommend";
import { CSDNBlogArticleRightToolBar } from "./CSDNBlogArticleRightToolBar";

export const CSDNBlogArticle = {
  init() {
    CSDNBlogArticleBlock.init();
    CSDNBlogArticleComment.init();
    CSDNBlogArticleBottomRecommend.init();
    CSDNBlogArticleRightToolBar.init();
    Panel.execMenuOnce("csdn-blog-articleCenter", () => {
      return this.articleCenter();
    });
    Panel.execMenuOnce("csdn-blog-autoExpandContent", () => {
      return this.autoExpandContent();
    });
    Panel.execMenuOnce("csdn-blog-autoExpandCodeContent", () => {
      return this.autoExpandCodeContent();
    });
    Panel.execMenuOnce("csdn-blog-allowSelectContent", () => {
      return this.allowSelectContent();
    });
    DOMUtils.onReady(() => {
      Panel.execMenuOnce("csdn-blog-clickPreCodeAutomatically", () => {
        this.clickPreCodeAutomatically();
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
   * 全文居中
   */
  articleCenter() {
    log.info("全文居中");
    let result: any[] = [addStyle(BlogArticleCenterCSS)];
    result.push(CSDNBlogBlock.shieldRightDirectoryInformation());
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
    result.push(CSDNBlogBlock.shieldLeftBlogContainerAside());
    result.push(
      addStyle(/*css*/ `
      #mainBox {
        margin-left: 0px;
      }`)
    );
    return result;
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
