import { addStyle, utils } from "@/env";

/**
 * 移除元素（未出现也可以等待出现）
 * @param selectorText 元素选择器
 */
export function waitForElementToRemove(selectorText = "") {
	utils.waitNodeList<NodeListOf<HTMLElement>>(selectorText).then((nodeList) => {
		nodeList.forEach((item) => item.remove());
	});
}

export const CSDNUtils = {
	/**
	 * 移除元素（未出现也可以等待出现）
	 * @param selectorText 元素选择器
	 */
	waitForElementToRemove(selectorText = "") {
		utils
			.waitNodeList<NodeListOf<HTMLElement>>(selectorText)
			.then((nodeList) => {
				nodeList.forEach((item) => item.remove());
			});
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
		return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
	},
};
