import { addStyle } from "@/env";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";

export const CommonUtils = {
	/**
	 * 获取vue实例
	 * @param element
	 * @returns
	 */
	getVue(element: Element | null | EventTarget) {
		if (element == null) {
			return;
		}
		return ((element as NestedObjectWithToString)["__vue__"] ||
			(element as NestedObjectWithToString)["__Ivue__"] ||
			(element as NestedObjectWithToString)["__IVue__"]) as Vue2Context;
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
		addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
	},
};
