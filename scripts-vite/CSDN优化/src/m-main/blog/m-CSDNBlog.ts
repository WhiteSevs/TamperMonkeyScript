import { DOMUtils, addStyle, log, utils } from "@/env";
import { CSDNBlog } from "@/main/blog/CSDNBlog";
import { PopsPanel } from "@/setting/setting";
import ShieldCSS from "./css/shield.css?raw";
import MBlogCSS from "./css/blog.css?raw";
import { CommonUtil } from "@/utils/CommonUtil";
import { M_CSDNBlogRightToolBar } from "./m-CSDNBlogRightToolBar";

export const M_CSDNBlog = {
	init() {
		this.addCSS();
		// M_CSDNBlogRightToolBar.init();
		PopsPanel.execMenuOnce(
			"m-csdn-blog-shieldTopToolbar",
			() => {
				return this.shieldTopToolbar();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight", () => {
			return this.notLimitCodePreMaxHeight();
		});
		PopsPanel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
			return this.notLimitCommentMaxHeight();
		});
		PopsPanel.execMenuOnce("m-csdn-blog-allowSelectText", () => {
			return this.allowSelectText();
		});
		PopsPanel.execMenuOnce("m-csdn-blog-autoExpandContent", () => {
			return this.autoExpandContent();
		});
		PopsPanel.execMenuOnce(
			"m-csdn-blog-bottomArticleEnable",
			() => {
				return this.blockBottomArticle();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce(
			"m-csdn-blog-comment-enable",
			() => {
				return this.blockComment();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce(
			"m-csdn-blog-bottom-toolbar-enable",
			() => {
				return this.blockBottomToolBar();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom", () => {
			return this.bottomToolBarAlwaysShow();
		});

		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("m-csdn-blog-removeAds", () => {
				return this.removeAds();
			});
			PopsPanel.execMenuOnce("m-csdn-blog-refactoringRecommendation", () => {
				this.refactoringRecommendation();
			});
			PopsPanel.execMenuOnce("m-csdn-blog-unBlockCopy", () => {
				CSDNBlog.unBlockCopy();
			});
		});
	},
	addCSS() {
		addStyle(ShieldCSS);
		addStyle(MBlogCSS);
	},
	/**
	 * 屏蔽顶部Toolbar
	 */
	shieldTopToolbar() {
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
	 * 重构底部推荐
	 */
	refactoringRecommendation() {
		function refactoring() {
			/* 反复执行的重构函数 */
			log.info("重构底部推荐");
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
		utils.waitNode<HTMLDivElement>("#recommend").then(($recommend) => {
			log.info("重构底部推荐");
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
		log.info("屏蔽底部文章");
		return CommonUtil.addBlockCSS("#recommend");
	},
	/**
	 * 屏蔽评论
	 */
	blockComment() {
		log.info("屏蔽评论");
		return CommonUtil.addBlockCSS("#comment");
	},
	/**
	 * 去除广告
	 */
	removeAds() {
		log.info("去除广告");
		/* 登录窗口 */
		CommonUtil.waitRemove(".passport-login-container");
		/* 打开APP */
		CommonUtil.waitRemove(".btn_open_app_prompt_box.detail-open-removed");
		/* 广告 */
		CommonUtil.waitRemove(".add-firstAd");
		/* 打开CSDN APP 小程序看全文 */
		CommonUtil.waitRemove("div.feed-Sign-weixin");
		/* ios版本提示 */
		CommonUtil.waitRemove("div.ios-shadowbox");
	},
	/**
	 * 不限制代码块最大高度
	 */
	notLimitCodePreMaxHeight() {
		log.info("不限制代码块最大高度");
		return addStyle(/*css*/ `
        pre{
            max-height: unset !important;
        }
        `);
	},
	/**
	 * 不限制评论区最大高度
	 */
	notLimitCommentMaxHeight() {
		log.info("不限制评论区最大高度");
		return addStyle(/*css*/ `
        #comment{
          max-height: none !important;
        }
      `);
	},
	/**
	 * 允许选择文字
	 */
	allowSelectText() {
		log.info("允许选择文字");
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
	 * 自动展开内容
	 */
	autoExpandContent() {
		log.info("自动展开内容");
		return addStyle(/*css*/ `
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `);
	},
	/**
	 * 屏蔽底部工具栏
	 */
	blockBottomToolBar() {
		log.info(`屏蔽底部工具栏`);
		return CommonUtil.addBlockCSS("#operate");
	},
	/**
	 * 底部工具栏常驻
	 */
	bottomToolBarAlwaysShow() {
		log.info(`底部工具栏常驻`);
		return addStyle(/*css*/ `
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`);
	},
};
