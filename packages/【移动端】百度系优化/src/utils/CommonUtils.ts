import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { GM_getResourceText } from "ViteGM";

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
	 * 设置GM_getResourceText的style内容
	 * @param resourceMapData 资源数据
	 */
	setGMResourceCSS(resourceMapData: { keyName: string; url: string }) {
		let cssText =
			typeof GM_getResourceText === "function"
				? GM_getResourceText(resourceMapData.keyName)
				: "";
		if (typeof cssText === "string" && cssText) {
			addStyle(cssText);
		} else {
			CommonUtils.addLinkNode(resourceMapData.url);
		}
	},
	/**
	 * 添加<link>标签
	 * @param url
	 */
	async addLinkNode(url: string) {
		let $link = document.createElement("link");
		$link.rel = "stylesheet";
		$link.type = "text/css";
		$link.href = url;
		DOMUtils.ready(() => {
			document.head.appendChild($link);
		});
	},
	/**
	 * 将url修复，例如只有search的链接/sss/xxx?sss=xxxx
	 * @param url 需要修复的链接
	 */
	fixUrl(url: string) {
		url = url.trim();
		if (url.match(/^http(s|):\/\//i)) {
			return url;
		} else {
			if (!url.startsWith("/")) {
				url += "/";
			}
			url = window.location.origin + url;
			return url;
		}
	},
};
