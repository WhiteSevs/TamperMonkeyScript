import { DOMUtils, log, utils } from "@/env";
import { CSDNBlog } from "@/main/blog/CSDNBlog";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import ShieldCSS from "./css/shield.css?raw";
import MBlogCSS from "./css/blog.css?raw";
import { waitForElementToRemove } from "@/utils/CSDNUtils";

const M_CSDNBlog = {
	init() {
		this.addCSS();
		PopsPanel.execMenu("m-csdn-blog-shieldTopToolbar", () => {
			this.shieldTopToolbar();
		});
		PopsPanel.execMenu("m-csdn-blog-notLimitCodePreMaxHeight", () => {
			this.notLimitCodePreMaxHeight();
		});
		PopsPanel.execMenu("m-csdn-blog-notLimitCommentMaxHeight", () => {
			this.notLimitCommentMaxHeight();
		});
		PopsPanel.execMenu("m-csdn-blog-allowSelectText", () => {
			this.allowSelectText();
		});
		PopsPanel.execMenu("m-csdn-blog-autoExpandContent", () => {
			this.autoExpandContent();
		});
		PopsPanel.execMenu("m-csdn-blog-blockBottomArticle", () => {
			this.blockBottomArticle();
		});
		PopsPanel.execMenu("m-csdn-blog-blockComment", () => {
			this.blockComment();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenu("m-csdn-blog-removeAds", () => {
				this.removeAds();
			});
			PopsPanel.execMenu("m-csdn-blog-refactoringRecommendation", () => {
				this.refactoringRecommendation();
			});
			PopsPanel.execMenu("m-csdn-blog-unBlockCopy", () => {
				CSDNBlog.unBlockCopy();
			});
		});
	},
	addCSS() {
		GM_addStyle(ShieldCSS);
		GM_addStyle(MBlogCSS);
	},
	/**
	 * 屏蔽顶部Toolbar
	 */
	shieldTopToolbar() {
		log.success("屏蔽顶部Toolbar");
		GM_addStyle(`
        #csdn-toolbar{
          display: none !important;
        }
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
        `);
	},
	/**
	 * 重构底部推荐
	 */
	refactoringRecommendation() {
		function refactoring() {
			/* 反复执行的重构函数 */
			log.success("重构底部推荐");
			(
				document.querySelectorAll(
					".container-fluid"
				) as NodeListOf<HTMLDivElement>
			).forEach((item) => {
				/* 链接 */
				let url = "";
				/* 标题 */
				let title = "";
				/* 内容 */
				let content = "";
				/* 图片 */
				let img = "";
				/* 判断是否是CSDN资源下载 */
				let isCSDNDownload = false;
				/* 判断是否是CSDN-学院资源下载 */
				let isCSDNEduDownload = false;
				if (item.hasAttribute("data-url")) {
					/* 存在真正的URL */
					url = item.getAttribute("data-url") as string;
					title = item.querySelector(".recommend_title div.left")
						?.innerHTML as string;
					if (!item.querySelector(".text")) {
						return;
					}
					content = item.querySelector(".text")?.innerHTML as string;
					if (item.querySelectorAll(".recommend-img").length) {
						/* 如果有图片就加进去 */
						item.querySelectorAll(".recommend-img").forEach((item2) => {
							img += item2.innerHTML;
						});
					}
				} else {
					log.info("节点上无data-url");
					url = (
						item.querySelector("a[data-type]") as HTMLAnchorElement
					).getAttribute("href") as string;
					title = (
						item.querySelector(".recommend_title div.left") as HTMLDivElement
					).innerHTML;
					content = (item.querySelector(".text") as HTMLDivElement).innerHTML;
				}
				var _URL_ = new URL(url);
				if (
					_URL_.host === "download.csdn.net" ||
					(_URL_.host === "www.iteye.com" &&
						_URL_.pathname.match(/^\/resource/gi))
				) {
					/* 该链接为csdn资源下载 */
					log.info("该链接为csdn资源下载");
					isCSDNDownload = true;
					title =
						`<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` +
						title;
				} else if (_URL_.origin.match(/edu.csdn.net/gi)) {
					/* 该链接为csdn学院下载 */
					isCSDNEduDownload = true;
					log.info("该链接为csdn学院下载");
					title =
						`<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` +
						title;
				}
				item.setAttribute("class", "GM-csdn-dl");
				item.setAttribute("data-url", url);
				item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
				item.addEventListener("click", function () {
					if (PopsPanel.getValue("m-csdn-blog-openNewTab")) {
						window.open(url, "_blank");
					} else {
						window.location.href = url;
					}
				});
				if (
					(isCSDNDownload || isCSDNEduDownload) &&
					PopsPanel.getValue("m-csdn-blog-removeResourceArticle")
				) {
					item.remove();
				}
			});
		}
		let lockFunction = new utils.LockFunction(refactoring, 50);
		utils.waitNode("#recommend").then(($recommend) => {
			log.success("重构底部推荐");
			lockFunction.run();
			utils.mutationObserver($recommend, {
				callback: () => {
					lockFunction.run();
				},
				config: { childList: true, subtree: true, attributes: true },
			});
		});
	},
	/**
	 * 屏蔽底部文章
	 */
	blockBottomArticle() {
		log.success("屏蔽底部文章");
		GM_addStyle("#recommend{display:none !important;}");
	},
	/**
	 * 屏蔽评论
	 */
	blockComment() {
		log.success("屏蔽评论");
		GM_addStyle("#comment{display:none !important;}");
	},
	/**
	 * 去除广告
	 */
	removeAds() {
		log.info("去除广告");
		/* 登录窗口 */
		waitForElementToRemove(".passport-login-container");
		/* 打开APP */
		waitForElementToRemove(".btn_open_app_prompt_box.detail-open-removed");
		/* 广告 */
		waitForElementToRemove(".add-firstAd");
		/* 打开CSDN APP 小程序看全文 */
		waitForElementToRemove("div.feed-Sign-weixin");
		/* ios版本提示 */
		waitForElementToRemove("div.ios-shadowbox");
	},
	/**
	 * 不限制代码块最大高度
	 */
	notLimitCodePreMaxHeight() {
		log.success("不限制代码块最大高度");
		GM_addStyle(`
        pre{
            max-height: unset !important;
        }
        `);
	},
	/**
	 * 不限制评论区最大高度
	 */
	notLimitCommentMaxHeight() {
		log.success("不限制评论区最大高度");
		GM_addStyle(`
        #comment{
          max-height: none !important;
        }
      `);
	},
	/**
	 * 允许选择文字
	 */
	allowSelectText() {
		log.success("允许选择文字");
		GM_addStyle(`
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
	 * 自动展开内容
	 */
	autoExpandContent() {
		log.success("自动展开内容");
		GM_addStyle(`
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `);
	},
};

export { M_CSDNBlog };
