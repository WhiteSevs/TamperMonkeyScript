import { addStyle, DOMUtils, log } from "@/env";
import { GM_getResourceText } from "ViteGM";

export const CommonUtils = {
	/**
	 * 替换文字
	 * @param text 需要替换的文字
	 * @param pattern 需要替换的文字的正则表达式
	 * @param newText 替换为的文字
	 */
	replaceText(
		text: string,
		pattern: RegExp | RegExp[] | string | string[],
		newText: string
	) {
		if (Array.isArray(pattern)) {
			for (const patternItem of pattern) {
				text = text.replace(patternItem, newText);
			}
		} else {
			text = text.replace(pattern, newText);
		}
		return text;
	},
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
			CommonUtils.addLinkNode(resourceMapData.url);
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
	 * 获取剪贴板文本
	 */
	async getClipboardText(): Promise<string> {
		/** 读取剪贴板 */
		function readClipboardText(resolve: Function) {
			navigator.clipboard
				.readText()
				.then((clipboardText) => {
					resolve(clipboardText);
				})
				.catch((error: TypeError) => {
					log.error("读取剪贴板内容失败👉", error);
					resolve("");
				});
		}
		/** 申请读取剪贴板的权限 */
		function requestPermissionsWithClipboard(resolve: Function) {
			navigator.permissions
				.query({
					// @ts-ignore
					name: "clipboard-read",
				})
				.then((permissionStatus) => {
					readClipboardText(resolve);
				})
				.catch((error: TypeError) => {
					log.error(
						"申请剪贴板权限失败，尝试直接读取👉",
						error.message ?? error.name ?? error.stack
					);
					/* 该权限申请Api可能在该环境下不生效，尝试直接读取剪贴板 */
					readClipboardText(resolve);
				});
		}
		function checkClipboardApi() {
			if (typeof navigator?.clipboard?.readText !== "function") {
				return false;
			}
			if (typeof navigator?.permissions?.query !== "function") {
				return false;
			}
			return true;
		}
		return new Promise((resolve) => {
			if (!checkClipboardApi()) {
				resolve("");
				return;
			}
			if (document.hasFocus()) {
				requestPermissionsWithClipboard(resolve);
			} else {
				window.addEventListener(
					"focus",
					() => {
						requestPermissionsWithClipboard(resolve);
					},
					{
						once: true,
					}
				);
			}
		});
	},
};
