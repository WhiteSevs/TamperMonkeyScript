import BlogShieldCSS from "./css/shield.css?raw";
import BlogCSS from "./css/CSDNBlog.css?raw";
import BlogArticleCenterCSS from "./css/articleCenter.css?raw";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { CSDNBlogRightToolBar } from "./CSDNBlogRightToolBar";
import { CSDNUtils } from "@/utils/CSDNUtils";

const CSDNBlog = {
	init() {
		this.addCSS();
		CSDNBlogRightToolBar.init();
		PopsPanel.execMenu("csdn-blog-articleCenter", () => {
			this.articleCenter();
		});
		PopsPanel.execMenu("csdn-blog-shieldLoginDialog", () => {
			this.shieldLoginDialog();
		});
		PopsPanel.execMenu("csdn-blog-autoExpandContent", () => {
			this.autoExpandContent();
		});
		PopsPanel.execMenu("csdn-blog-autoExpandCodeContent", () => {
			this.autoExpandCodeContent();
		});
		PopsPanel.execMenu("csdn-blog-blockComment", () => {
			this.blockComment();
		});
		PopsPanel.execMenu("csdn-blog-shieldBottomRecommendArticle", () => {
			this.shieldBottomRecommendArticle();
		});
		PopsPanel.execMenu("csdn-blog-shieldBottomSkillTree", () => {
			this.shieldBottomSkillTree();
		});
		PopsPanel.execMenu("csdn-blog-shieldBottomFloatingToolbar", () => {
			this.shieldBottomFloatingToolbar();
		});
		PopsPanel.execMenu("csdn-blog-shieldLeftBlogContainerAside", () => {
			this.shieldLeftBlogContainerAside();
		});
		PopsPanel.execMenu("csdn-blog-shieldRightDirectoryInformation", () => {
			this.shieldRightDirectoryInformation();
		});
		PopsPanel.execMenu("csdn-blog-shieldTopToolbar", () => {
			this.shieldTopToolbar();
		});
		PopsPanel.execMenu("csdn-blog-shieldArticleSearchTip", () => {
			this.shieldArticleSearchTip();
		});
		PopsPanel.execMenu("csdn-blog-allowSelectContent", () => {
			this.allowSelectContent();
		});
		DOMUtils.ready(() => {
			PopsPanel.execMenu("csdn-blog-removeClipboardHijacking", () => {
				this.removeClipboardHijacking();
			});
			PopsPanel.execMenuOnce("csdn-blog-unBlockCopy", () => {
				this.unBlockCopy();
			});
			PopsPanel.execMenu("csdn-blog-identityCSDNDownload", () => {
				this.identityCSDNDownload();
			});
			PopsPanel.execMenuOnce("csdn-blog-clickPreCodeAutomatically", () => {
				this.clickPreCodeAutomatically();
			});
			PopsPanel.execMenu("csdn-blog-restoreComments", () => {
				this.restoreComments();
			});
		});
	},
	/**
	 * 添加屏蔽CSS和功能CSS
	 */
	addCSS() {
		log.info("添加屏蔽CSS和功能CSS");
		addStyle(BlogShieldCSS);
		addStyle(BlogCSS);
	},
	/**
	 * 去除剪贴板劫持
	 */
	removeClipboardHijacking() {
		log.info("去除剪贴板劫持");
		document.querySelector<HTMLDivElement>(".article-copyright")?.remove();
		if ((unsafeWindow as any).articleType) {
			(unsafeWindow as any).articleType = 0;
		}
		if (
			(unsafeWindow as any).csdn &&
			(unsafeWindow as any).csdn.copyright &&
			(unsafeWindow as any).csdn.copyright.textData
		) {
			(unsafeWindow as any).csdn.copyright.textData = "";
		}
		if (
			(unsafeWindow as any).csdn &&
			(unsafeWindow as any).csdn.copyright &&
			(unsafeWindow as any).csdn.copyright.htmlData
		) {
			(unsafeWindow as any).csdn.copyright.htmlData = "";
		}
	},
	/**
	 * 取消禁止复制
	 */
	unBlockCopy() {
		log.info("取消禁止复制");
		DOMUtils.on(
			document,
			"click",
			function (event) {
				let $click = event.target as HTMLElement;
				let $parent = $click.parentElement as HTMLElement;
				if (!$click.classList.contains("hljs-button")) {
					return;
				}
				utils.preventEvent(event);
				/* 需要复制的文本 */
				let copyText = (
					$parent.innerText ||
					$parent.textContent ||
					""
				).toString();
				log.info(
					"点击复制按钮复制内容：" +
						(copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText)
				);
				utils.setClip(copyText);
				$click.setAttribute("data-title", "复制成功");
			},
			{
				capture: true,
			}
		);
		/* 修改点击复制按钮后修改悬浮的文字 */
		let changeDataTitle = new utils.LockFunction(function (event: Event) {
			let $mouse = event.target as HTMLElement;
			if ($mouse.localName !== "pre") {
				return;
			}
			let $hljsBtn = $mouse.querySelector<HTMLDivElement>(".hljs-button");
			if ($hljsBtn) {
				$hljsBtn.setAttribute("data-title", "复制");
			}
		});
		DOMUtils.on(
			document,
			["mouseenter", "mouseleave"],
			function (event) {
				changeDataTitle.run(event);
			},
			{
				capture: true,
			}
		);
		/* 取消Ctrl+C的禁止 */
		utils.waitNode<HTMLDivElement>("#content_views").then(($content_views) => {
			if ((unsafeWindow as any).$) {
				(unsafeWindow as any).$("#content_views")?.unbind("copy");
			}
			DOMUtils.on(
				$content_views,
				"copy",
				function (event) {
					utils.preventEvent(event);
					let selectText = unsafeWindow.getSelection()!;
					let copyText = selectText?.toString();
					log.info(
						"Ctrl+C复制内容：" +
							(copyText.length > 8
								? copyText.substring(0, 8) + "..."
								: copyText)
					);
					utils.setClip(copyText);
					return false;
				},
				{
					capture: true,
				}
			);
		});
		/* 删除所有复制按钮的原有的复制事件 */
		utils.waitNode(".hljs-button").then(() => {
			setTimeout(() => {
				document
					.querySelectorAll<HTMLDivElement>(".hljs-button")
					.forEach((element) => {
						element.removeAttribute("onclick");
						element.removeAttribute("data-report-click");
						element.setAttribute("data-title", "复制");
					});
			}, 250);
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
		utils.waitNode(".first-recommend-box").then(($firstRecommendBox) => {
			let recommendBoxElement = document.querySelector(
				".recommend-box.insert-baidu-box.recommend-box-style"
			) as HTMLDivElement;
			recommendBoxElement.insertBefore(
				$firstRecommendBox,
				recommendBoxElement.firstChild
			);
		});
		log.info("恢复评论到正确位置-第二条评论");
		/* 第二条评论 */
		utils.waitNode(".second-recommend-box").then(($secondRecommendBox) => {
			let recommendBoxElement = document.querySelector(
				".recommend-box.insert-baidu-box.recommend-box-style"
			) as HTMLDivElement;
			recommendBoxElement.insertBefore(
				$secondRecommendBox,
				recommendBoxElement.firstChild
			);
		});
	},
	/**
	 * 标识CSDN下载的链接
	 */
	identityCSDNDownload() {
		log.info("标识CSDN下载的链接");
		document
			.querySelectorAll<HTMLDivElement>(
				".recommend-item-box[data-url*='https://download.csdn.net/']"
			)
			.forEach((item) => {
				if (PopsPanel.getValue("csdn-blog-removeResourceDownloadArticle")) {
					item.remove();
				} else {
					(
						item.querySelector(".content-box") as HTMLDivElement
					).style.setProperty("border", "2px solid red");
				}
			});
	},
	/**
	 * 全文居中
	 */
	articleCenter() {
		log.info("全文居中");
		addStyle(BlogArticleCenterCSS);
	},
	/**
	 * 屏蔽登录弹窗
	 */
	shieldLoginDialog() {
		log.info("屏蔽登录弹窗");
		CSDNUtils.addBlockCSS(`.passport-login-container`);
	},
	/**
	 * 自动展开代码块
	 */
	autoExpandCodeContent() {
		log.info("自动展开代码块");
		CSDNUtils.addBlockCSS("pre.set-code-hide .hide-preCode-box");
		addStyle(`
		pre.set-code-hide{
			height: auto !important;
		}
		/* 自动展开代码块 */
		.comment-list-box,
		main div.blog-content-box pre {
			max-height: none !important;
		}
        `);
	},
	/**
	 * 自动展开全文
	 */
	autoExpandContent() {
		log.info("自动展开全文");
		addStyle(`
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
		CSDNUtils.addBlockCSS(`#pcCommentBox`);
	},
	/**
	 * 屏蔽底部推荐文章
	 */
	shieldBottomRecommendArticle() {
		log.info("屏蔽底部推荐文章");
		CSDNUtils.addBlockCSS(`main > div.recommend-box`);
	},
	/**
	 * 屏蔽底部xx技能树
	 */
	shieldBottomSkillTree() {
		log.info("屏蔽底部xx技能树");
		CSDNUtils.addBlockCSS(`#treeSkill`);
	},
	/**
	 * 屏蔽底部悬浮工具栏
	 */
	shieldBottomFloatingToolbar() {
		log.info("屏蔽底部悬浮工具栏");
		CSDNUtils.addBlockCSS(`#toolBarBox`);
	},
	/**
	 * 屏蔽左侧博客信息
	 */
	shieldLeftBlogContainerAside() {
		log.info("【屏蔽】左侧博客信息");
		CSDNUtils.addBlockCSS(`aside.blog_container_aside`);
	},
	/**
	 * 【屏蔽】右侧目录信息
	 */
	shieldRightDirectoryInformation() {
		log.info("【屏蔽】右侧目录信息");
		CSDNUtils.addBlockCSS("#rightAsideConcision", "#rightAside");
	},
	/**
	 * 屏蔽顶部Toolbar
	 */
	shieldTopToolbar() {
		log.info("屏蔽顶部Toolbar");
		CSDNUtils.addBlockCSS(`#toolbarBox`);
	},
	/**
	 * 屏蔽文章内的选中搜索悬浮提示
	 */
	shieldArticleSearchTip() {
		log.info("屏蔽文章内的选中搜索悬浮提示");
		CSDNUtils.addBlockCSS(`#articleSearchTip`);
	},
	/**
	 * 允许选择内容
	 */
	allowSelectContent() {
		log.info("允许选择内容");
		addStyle(`
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`);
	},
};

export { CSDNBlog };
