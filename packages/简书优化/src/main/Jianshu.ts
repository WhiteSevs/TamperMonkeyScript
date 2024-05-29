import { GM_addStyle } from "ViteGM";
import ShieldCSS from "./shield.css?raw";
import { PopsPanel } from "@/setting/setting";
import { log, utils } from "@/env";
import { JianshuRouter } from "@/router/JianshuRouter";

/**
 * 移除元素（未出现也可以等待出现）
 * @param selectorText 元素选择器
 */
const waitForElementToRemove = function (selectorText = "") {
	utils.waitNodeList(selectorText).then((nodeList) => {
		(nodeList as any).forEach((item: any) => {
			item.remove();
		});
	});
};
const Jianshu = {
	init() {
		this.addCSS();
		PopsPanel.execMenu("JianShuAutoJumpRedirect_PC", () => {
			this.jumpRedirect();
		});
		PopsPanel.execMenu("JianShuRemoveClipboardHijacking", () => {
			this.removeClipboardHijacking();
		});
		PopsPanel.execMenu("JianShuAutoExpandFullText", () => {
			this.autoExpandFullText();
		});
		PopsPanel.execMenu("JianShuArticleCenter", () => {
			this.articleCenter();
		});
		PopsPanel.execMenu("JianShuShieldRelatedArticles", () => {
			this.shieldRelatedArticles();
		});
		PopsPanel.execMenu("jianshu-shieldClientDialog", () => {
			this.shieldClientDialog();
		});
		PopsPanel.execMenu("JianShuShieldUserComments", () => {
			this.shieldUserComments();
		});
		PopsPanel.execMenu("JianShuShieldRecommendedReading", () => {
			this.shieldRecommendedReading();
		});
		PopsPanel.execMenu("jianshu-shieldTopNav", () => {
			this.shieldTopNav();
		});
		PopsPanel.execMenu("jianshu-shieldBottomToolbar", () => {
			this.shieldBottomToolbar();
		});
	},
	/**
	 * 添加屏蔽CSS
	 */
	addCSS() {
		log.info("添加屏蔽CSS");
		GM_addStyle(ShieldCSS);
	},
	/**
	 * 全文居中
	 */
	articleCenter() {
		log.info("全文居中");
		GM_addStyle(`
        div[role=main] aside,
        div._3Pnjry{
          display: none !important;
        }
        div._gp-ck{
          width: 100% !important;
        }`);
		waitForElementToRemove("div[role=main] aside");
		waitForElementToRemove("div._3Pnjry");
		utils.waitNodeList<HTMLElement[]>("div._gp-ck").then((nodeList) => {
			nodeList.forEach((item) => {
				item.style["width"] = "100%";
			});
		});
	},
	/**
	 * 去除剪贴板劫持
	 */
	removeClipboardHijacking() {
		log.info("去除剪贴板劫持");
		const stopNativePropagation = (event: Event) => {
			event.stopPropagation();
		};
		window.addEventListener("copy", stopNativePropagation, true);
		document.addEventListener("copy", stopNativePropagation, true);
	},
	/**
	 * 自动展开全文
	 */
	autoExpandFullText() {
		utils.waitNode(`div#homepage div[class*="dialog-"]`).then((element) => {
			element.style["visibility"] = "hidden";
			log.info("自动展开全文");
			utils.mutationObserver(element, {
				callback: (mutations) => {
					if (mutations.length == 0) {
						return;
					}
					mutations.forEach((mutationItem) => {
						if (
							(mutationItem.target as HTMLElement).style["display"] != "none"
						) {
							log.success("自动展开全文-自动点击");
							document
								.querySelector<HTMLElement>(
									'div#homepage div[class*="dialog-"] .cancel'
								)
								?.click();
						}
					});
				},
				config: {
					/* 子节点的变动（新增、删除或者更改） */
					childList: false,
					/* 属性的变动 */
					attributes: true,
					/* 节点内容或节点文本的变动 */
					characterData: true,
					/* 是否将观察器应用于该节点的所有后代节点 */
					subtree: true,
				},
			});
		});
	},
	/**
	 * 去除简书拦截其它网址的url并自动跳转
	 */
	jumpRedirect() {
		if (JianshuRouter.isGoWild()) {
			/* 禁止简书拦截跳转 */
			log.success("去除简书拦截其它网址的url并自动跳转");
			window.stop();
			let search = window.location.href.replace(
				window.location.origin + "/",
				""
			);
			search = decodeURIComponent(search);
			let newURL = search
				.replace(/^go-wild\?ac=2&url=/gi, "")
				.replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
			window.location.href = newURL;
		}
	},
	/**
	 * 屏蔽相关文章
	 */
	shieldRelatedArticles() {
		log.info("屏蔽相关文章");
		GM_addStyle(`
        div[role="main"] > div > section:nth-child(2){
          display: none !important;
        }
        `);
	},
	/**
	 * 【屏蔽】客户端弹窗
	 */
	shieldClientDialog() {
		log.info("【屏蔽】客户端弹窗");
		GM_addStyle(`
        div:has(>div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]){
            display: none !important;
        }`);
		utils
			.waitNode(
				`div[class*="-mask"]:not([class*="-mask-hidden"]) + div[tabindex="-1"][role="dialog"]`
			)
			.then((element) => {
				log.success("弹窗出现");
				utils
					.waitPropertyByInterval(
						element,
						() => {
							let react = utils.getReactObj(element);
							return react?.reactInternalInstance?.return?.return?.memoizedProps
								?.onClose;
						},
						250,
						10000
					)
					.then(() => {
						let react = utils.getReactObj(element);
						react.reactInternalInstance!.return.return.memoizedProps.onClose(
							new Event("click")
						);
						log.success("调用函数关闭弹窗");
					});
			});
	},
	/**
	 * 屏蔽评论区
	 */
	shieldUserComments() {
		log.info("屏蔽评论区");
		GM_addStyle(`
        div#note-page-comment{
          display: none !important;
        }
        `);
	},
	/**
	 * 屏蔽底部推荐阅读
	 */
	shieldRecommendedReading() {
		log.info("屏蔽底部推荐阅读");
		GM_addStyle(`
        div[role="main"] > div > section:last-child{
          display: none !important;
        }
        `);
	},
	/**
	 * 【屏蔽】顶部导航栏
	 */
	shieldTopNav() {
		log.info("【屏蔽】顶部导航栏");
		GM_addStyle(`
        header{
          display: none !important;
        }
        `);
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldBottomToolbar() {
		log.info("【屏蔽】底部工具栏");
		GM_addStyle(`
        footer{
          display: none !important;
        }
        `);
	},
};

export { Jianshu, waitForElementToRemove };
