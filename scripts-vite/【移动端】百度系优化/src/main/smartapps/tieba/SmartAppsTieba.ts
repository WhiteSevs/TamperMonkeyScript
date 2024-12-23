import { addStyle, log, utils } from "@/env";
import blockCSS from "./css/block.css?raw";
import { PopsPanel } from "@/setting/setting";
import DOMUtils from "@whitesev/domutils";

export const SmartAppsTieba = {
	init() {
		PopsPanel.onceExec("smartapps-tieba-blockAds", () => {
			return this.removeAds();
		});
	},
	/**
	 * 屏蔽广告
	 */
	removeAds() {
		log.info(`屏蔽广告`);
		let result: HTMLStyleElement[] = [addStyle(blockCSS)];
		let selectorList: string[] = [
			"swan-wake-app:has(swan-view):contains('App内看更多评论')",
			"swan-wake-app:has(swan-view):contains('App内查看')",
			"swan-wake-app:has(swan-view):contains('来贴吧参与讨论')",
			"swan-wake-app:has(swan-view):contains('打开App查看高清大图')",
		];
		let lockFn = new utils.LockFunction(() => {
			selectorList.forEach((selector) => {
				DOMUtils.selectorAll(selector).forEach(($el) => {
					$el.remove();
				});
			});
		});
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFn.run();
			},
		});
		return result;
	},
};
