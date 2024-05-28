import BlogShieldCSS from "./css/shield.css?raw";
import BlogExpandContentCSS from "./css/expandContent.css?raw";
import BlogArticleCenterCSS from "./css/articleCenter.css?raw";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle, unsafeWindow } from "ViteGM";
import { CSDNBlogRightToolBar } from "./CSDNBlogRightToolBar";

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
		PopsPanel.execMenu("m-csdn-blog-autoExpandContent", () => {
			this.autoExpandContent();
			this.clickPreCodeAutomatically();
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
		DOMUtils.ready(() => {
			PopsPanel.execMenu("ccsdn-blog-removeClipboardHijacking", () => {
				this.removeClipboardHijacking();
			});
			PopsPanel.execMenu("csdn-blog-unBlockCopy", () => {
				this.unBlockCopy();
			});
			PopsPanel.execMenu("csdn-blog-identityCSDNDownload", () => {
				this.identityCSDNDownload();
			});
			PopsPanel.execMenu("csdn_pc_clickPreCodeAutomatically", () => {
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
		GM_addStyle(BlogShieldCSS);
		GM_addStyle(BlogExpandContentCSS);
	},
	/**
	 * 去除剪贴板劫持
	 */
	removeClipboardHijacking() {
		log.info("去除剪贴板劫持");
		document.querySelector(".article-copyright")?.remove();
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
		document.addEventListener(
			"click",
			function (event) {
				let $click = event.target as HTMLElement;
				let $parent = $click.parentElement as HTMLElement;
				if (!$click.classList.contains("hljs-button")) {
					return;
				}
				utils.preventEvent(event);
				/* 需要复制的文本 */
				let copyText = $parent.innerText || $parent.textContent;
				utils.setClip(copyText);
				$click.setAttribute("data-title", "复制成功");
			},
			{
				capture: true,
			}
		);
		let changeDataTitle = new utils.LockFunction(function (event: Event) {
			let $mouse = event.target as HTMLElement;
			if ($mouse.localName !== "pre") {
				return;
			}
			$mouse.querySelector(".hljs-button")?.setAttribute("data-title", "复制");
		});
		document.addEventListener(
			"mouseenter",
			function (event: MouseEvent) {
				changeDataTitle.run(event);
			},
			{
				capture: true,
			}
		);
		document.addEventListener(
			"mouseleave",
			function (event: MouseEvent) {
				changeDataTitle.run(event);
			},
			{
				capture: true,
			}
		);
		/* 取消Ctrl+C的禁止 */
		utils.waitNode("#content_views").then((element) => {
			(unsafeWindow as any).$("#content_views")?.unbind("copy");
			element.addEventListener("copy", function (event) {
				utils.preventEvent(event);
				let selectText = unsafeWindow.getSelection()?.toString();
				utils.setClip(selectText);
				return false;
			});
		});
		/* 删除所有复制按钮的原有的复制事件 */
		utils.waitNode(".hljs-button").then(() => {
			setTimeout(() => {
				document.querySelectorAll(".hljs-button").forEach((element) => {
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
		utils.waitNode(".first-recommend-box").then((element) => {
			let recommendBoxElement = document.querySelector(
				".recommend-box.insert-baidu-box.recommend-box-style"
			) as HTMLDivElement;
			recommendBoxElement.insertBefore(element, recommendBoxElement.firstChild);
		});
		log.info("恢复评论到正确位置-第二条评论");
		/* 第二条评论 */
		utils.waitNode(".second-recommend-box").then((element) => {
			let recommendBoxElement = document.querySelector(
				".recommend-box.insert-baidu-box.recommend-box-style"
			) as HTMLDivElement;
			recommendBoxElement.insertBefore(element, recommendBoxElement.firstChild);
		});
	},
	/**
	 * 标识CSDN下载的链接
	 */
	identityCSDNDownload() {
		log.info("标识CSDN下载的链接");
		(
			document.querySelectorAll(
				".recommend-item-box[data-url*='https://download.csdn.net/']"
			) as NodeListOf<HTMLDivElement>
		).forEach((item) => {
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
		GM_addStyle(BlogArticleCenterCSS);
	},
	/**
	 * 屏蔽登录弹窗
	 */
	shieldLoginDialog() {
		log.info("屏蔽登录弹窗");
		GM_addStyle(`.passport-login-container{display: none !important;}`);
	},
	/**
	 * 自动展开内容块
	 */
	autoExpandContent() {
		log.info("自动展开内容块");
		GM_addStyle(`
          pre.set-code-hide{height: auto !important;}
          pre.set-code-hide .hide-preCode-box{display: none !important;}
        `);
	},
	/**
	 * 屏蔽评论区
	 */
	blockComment() {
		log.info("屏蔽评论区");
		GM_addStyle(`#pcCommentBox{display: none !important;}`);
	},
	/**
	 * 屏蔽底部推荐文章
	 */
	shieldBottomRecommendArticle() {
		log.info("屏蔽底部推荐文章");
		GM_addStyle(`main > div.recommend-box {display: none !important;}`);
	},
	/**
	 * 屏蔽底部xx技能树
	 */
	shieldBottomSkillTree() {
		GM_addStyle(`#treeSkill{display: none !important;}`);
	},
	/**
	 * 屏蔽底部悬浮工具栏
	 */
	shieldBottomFloatingToolbar() {
		log.info("屏蔽底部悬浮工具栏");
		GM_addStyle(`#toolBarBox{display: none !important;}`);
	},
	/**
	 * 屏蔽左侧博客信息
	 */
	shieldLeftBlogContainerAside() {
		log.success("【屏蔽】左侧博客信息");
		GM_addStyle(`aside.blog_container_aside{display: none !important;}`);
	},
	/**
	 * 【屏蔽】右侧目录信息
	 */
	shieldRightDirectoryInformation() {
		log.success("【屏蔽】右侧目录信息");
		GM_addStyle(`
        #rightAsideConcision,
        #rightAside{
          display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽顶部Toolbar
	 */
	shieldTopToolbar() {
		GM_addStyle(`#toolbarBox{display: none !important;}`);
	},
	/**
	 * 屏蔽文章内的选中搜索悬浮提示
	 */
	shieldArticleSearchTip() {
		GM_addStyle(`#articleSearchTip{display: none !important;}`);
	},
};

export { CSDNBlog };
