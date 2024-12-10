import { addStyle, DOMUtils } from "@/env";
import { GM_getResourceText } from "ViteGM";

export const CommonUtil = {
	/**
	 * 添加屏蔽CSS
	 * @param args
	 * @example
	 * addBlockCSS("")
	 * addBlockCSS("","")
	 * addBlockCSS(["",""])
	 */
	addBlockCSS(...args: (string | string[])[]): HTMLStyleElement | void {
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
			CommonUtil.addLinkNode(resourceMapData.url);
		}
	},
	/**
	 * 添加<link>标签
	 * @param url
	 */
	async addLinkNode(url: string): Promise<HTMLLinkElement> {
		let $link = document.createElement("link");
		$link.rel = "stylesheet";
		$link.type = "text/css";
		$link.href = url;
		DOMUtils.ready(() => {
			document.head.appendChild($link);
		});
		return $link;
	},
	/**
	 * 将url修复，例如只有search的链接/sss/xxx?sss=xxxx
	 * @param url 需要修复的链接
	 */
	fixUrl(url: string): string {
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
	/**
	 * html转义
	 * @param unsafe
	 */
	escapeHtml(unsafe: string): string {
		return unsafe
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;")
			.replace(/©/g, "&copy;")
			.replace(/®/g, "&reg;")
			.replace(/™/g, "&trade;")
			.replace(/→/g, "&rarr;")
			.replace(/←/g, "&larr;")
			.replace(/↑/g, "&uarr;")
			.replace(/↓/g, "&darr;")
			.replace(/—/g, "&mdash;")
			.replace(/–/g, "&ndash;")
			.replace(/…/g, "&hellip;")
			.replace(/ /g, "&nbsp;")
			.replace(/\r\n/g, "<br>") // 转义 Windows 换行符
			.replace(/\r/g, "<br>") // 转义 Mac 换行符
			.replace(/\n/g, "<br>")
			.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;"); // 转义制表符，用四个空格表示
	},
};
