import { addStyle, DOMUtils, httpx, log, utils } from "@/env";

export const CommonUtils = {
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
	/**
	 * 添加<link>标签
	 * @param url
	 */
	async addLinkNode(url: string) {
		let getResp = await httpx.get(url, {
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
		});
		if (getResp.status && getResp.data.responseText) {
			addStyle(getResp.data.responseText);
		} else {
			let $link = document.createElement("link");
			$link.rel = "stylesheet";
			$link.type = "text/css";
			$link.href = url;
			DOMUtils.ready(() => {
				document.head.appendChild($link);
			});
		}
	},
};
