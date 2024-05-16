import { GM_addStyle } from "ViteGM";
import { DOMUtils, utils } from "@/env";

const DouYinElement = {
	/**
	 * 观察 #slidelist的加载每条视频
	 * @param callback
	 */
	watchVideDataListChange(callback: (osElement: HTMLDivElement) => void) {
		DOMUtils.ready(() => {
			utils.waitAnyNode("#slidelist").then((slidelist) => {
				let osElement = this.getOSElement();
				utils.mutationObserver(slidelist, {
					config: {
						childList: true,
						subtree: true,
					},
					callback: () => {
						callback(osElement);
					},
				});
			});
		});
	},
	getOSElement() {
		return (document.querySelector("#root div[class*='-os']") ||
			document.querySelector("#douyin-right-container")) as HTMLDivElement;
	},
	/**
	 * 添加屏蔽CSS
	 * @param args
	 */
	addShieldStyle(...args: (string | string[])[]) {
		let selectorList: string[] = [];
		if (args.length === 0) {
			return;
		}
		if (
			args.length === 1 &&
			typeof args[0] === "string" &&
			args[0].trim() === ""
		) {
			return;
		}
		args.forEach((selector) => {
			if (Array.isArray(selector)) {
				selectorList.push(...selector);
			} else {
				selectorList.push(selector);
			}
		});
		GM_addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
	},
};

export { DouYinElement };
