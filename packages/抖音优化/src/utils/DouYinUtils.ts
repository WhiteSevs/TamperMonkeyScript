import { utils } from "@/env";

export const DouYinUtils = {
	/**
	 * 判断是否是竖屏
	 *
	 * window.screen.orientation.type
	 * + landscape-primary 横屏
	 * + portrait-primary 竖屏
	 */
	isVerticalScreen() {
		return !window.screen.orientation.type.includes("landscape");
	},
	/**
	 * 添加屏蔽CSS
	 * @param args
	 * @example
	 * addBlockCSS("")
	 * addBlockCSS("","")
	 * addBlockCSS(["",""])
	 */
	addBlockCSS(...args: (string | string[])[]) {
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
				selectorList = selectorList.concat(selector);
			} else {
				selectorList.push(selector);
			}
		});
		utils.addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
	},
};
