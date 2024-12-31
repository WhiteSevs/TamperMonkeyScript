import { addStyle, DOMUtils } from "@/env";
import { GM_download, GM_getResourceText } from "ViteGM";

export const CommonUtil = {
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
	/**
	 * 设置GM_getResourceText的style内容
	 * @param resourceMapData 资源数据
	 * @example
	 * setGMResourceCSS({
	 *   keyName: "ViewerCSS",
	 *   url: "https://example.com/example.css",
	 * })
	 */
	setGMResourceCSS(resourceMapData: {
		/** 使用@resource定义的名字 */
		keyName: string;
		/** 使用@resource引用的地址 */
		url: string;
	}) {
		let cssText =
			typeof GM_getResourceText === "function"
				? GM_getResourceText(resourceMapData.keyName)
				: "";
		if (typeof cssText === "string" && cssText) {
			addStyle(cssText);
		} else {
			CommonUtil.loadStyleLink(resourceMapData.url);
		}
	},
	/**
	 * 添加<link>标签
	 * @param url
	 * @example
	 * loadStyleLink("https://example.com/example.css")
	 */
	async loadStyleLink(url: string) {
		let $link = document.createElement("link");
		$link.rel = "stylesheet";
		$link.type = "text/css";
		$link.href = url;
		DOMUtils.ready(() => {
			document.head.appendChild($link);
		});
	},
	/**
	 * 添加<script>标签
	 * @param url
	 * @example
	 * loadStyleLink("https://example.com/example.js")
	 */
	async loadScript(url: string) {
		let $script = document.createElement("script");
		$script.src = url;
		return new Promise<null>((resolve) => {
			$script.onload = () => {
				resolve(null);
			};
			(document.head || document.documentElement).appendChild($script);
		});
	},
	/**
	 * 将url修复，例如只有search的链接修复为完整的链接
	 *
	 * 注意：不包括http转https
	 * @param url 需要修复的链接
	 * @example
	 * 修复前：`/xxx/xxx?ss=ssss`
	 * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
	 * @example
	 * 修复前：`//xxx/xxx?ss=ssss`
	 * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
	 * @example
	 * 修复前：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
	 * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
	 * @example
	 * 修复前：`xxx/xxx?ss=ssss`
	 * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
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
	/**
	 * http转https
	 * @param url 需要修复的链接
	 * @example
	 * 修复前：
	 * 修复后：
	 * @example
	 * 修复前：
	 * 修复后：
	 */
	fixHttps(url: string) {
		if (url.startsWith("https://")) {
			// 已经是https
			return url;
		}
		if (!url.startsWith("http://")) {
			// 不是http链接
			return url;
		}
		let urlObj = new URL(url);
		urlObj.protocol = "https:";
		return urlObj.toString();
	},
	/**
	 * 测试是否支持GM_download
	 */
	isSupport_GM_download() {
		try {
			return typeof GM_download === "function";
		} catch (error) {
			console.error(error);
			return false;
		}
	},
};
