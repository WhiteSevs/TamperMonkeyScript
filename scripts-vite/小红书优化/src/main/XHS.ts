import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { XHSBlock } from "./XHSBlock";
import { XHS_Hook } from "@/hook/hook";
import { XHS_Article } from "./article/XHS_Article";
import Qmsg from "qmsg";
import { ScriptRouter } from "@/router/router";

export const XHS = {
	init() {
		PopsPanel.execMenuOnce("pc-xhs-hook-vue", () => {
			XHS_Hook.webPackVue();
		});
		PopsPanel.execMenuOnce("pc-xhs-allowCopy", () => {
			XHS.allowPCCopy();
		});
		PopsPanel.execMenuOnce("pc-xhs-open-blank-article", () => {
			XHS.openBlankArticle();
		});
		XHSBlock.init();
		PopsPanel.execMenuOnce("pc-xhs-article-showPubsliushTime", () => {
			XHS_Article.transformPublishTime();
		});
		if (ScriptRouter.isArticle()) {
			log.info("Router: 笔记页面");
			XHS_Article.init();
		}
	},
	/**
	 * 允许复制
	 */
	allowPCCopy() {
		log.success("允许复制文字");
		DOMUtils.on(
			unsafeWindow,
			"copy",
			void 0,
			function (event) {
				utils.preventEvent(event);
				let selectText = unsafeWindow.getSelection();
				if (selectText) {
					utils.setClip(selectText.toString());
				} else {
					log.error("未选中任何内容");
				}
				return false;
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 新标签页打开文章
	 */
	openBlankArticle() {
		log.success("新标签页打开文章");
		DOMUtils.on(
			document,
			"click",
			".feeds-container .note-item",
			function (event) {
				utils.preventEvent(event);
				let $click = event.target as HTMLDivElement;
				let $url = $click.querySelector<HTMLAnchorElement>("a.cover[href]");
				let url = $url?.href;
				if (url) {
					log.info("跳转文章: " + url);
					// 修复访问 收藏夹里的链接出现安全访问限制异常的问题
					let urlInstance = new URL(url);
					urlInstance.pathname = urlInstance.pathname.replace(
						/^\/user\/profile\/[a-z0-9A-Z]+\//i,
						"/discovery/item/"
					);
					url = urlInstance.toString();
					window.open(url, "_blank");
				} else {
					Qmsg.error("未找到文章链接");
				}
			},
			{
				capture: true,
			}
		);
	},
};
