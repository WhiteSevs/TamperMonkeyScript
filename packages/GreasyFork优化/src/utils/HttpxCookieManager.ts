import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import type { HttpxDetails } from "@whitesev/utils/dist/src/Httpx";

interface HttpxCookieManagerRule {
	/** PopsPanel存储的键名 */
	key: string;
	/** 匹配url的hostname的正则或字符串 */
	hostname: RegExp | string;
}

export const HttpxCookieManager = {
	$data: {
		/** 是否启用 */
		get enable() {
			return PopsPanel.getValue<boolean>("httpx-use-cookie-enable");
		},
		/** 是否使用document.cookie */
		get useDocumentCookie() {
			return PopsPanel.getValue<boolean>("httpx-use-document-cookie");
		},
		cookieRule: <HttpxCookieManagerRule[]>[],
	},
	/**
	 * 补充cookie末尾分号
	 */
	fixCookieSplit(str: string) {
		if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
			// 补充;
			str += ";";
		}
		return str;
	},
	/**
	 * 合并两个cookie
	 */
	concatCookie(targetCookie: string, newCookie: string) {
		if (utils.isNull(targetCookie)) {
			return newCookie;
		}
		targetCookie = targetCookie.trim();
		newCookie = newCookie.trim();
		targetCookie = this.fixCookieSplit(targetCookie);
		if (newCookie.startsWith(";")) {
			newCookie = newCookie.substring(1);
		}
		return targetCookie.concat(newCookie);
	},
	/**
	 * 处理cookie
	 * @param details
	 * @returns
	 */
	handle(details: Required<HttpxDetails>) {
		if (details.fetch) {
			// fetch不做处理
			return;
		}

		if (!this.$data.enable) {
			// 未启用
			return;
		}
		let ownCookie = "";

		let url = details.url;
		// 完善Url
		if (url.startsWith("//")) {
			url = window.location.protocol + url;
		}
		let urlObj = new URL(url);
		if (
			this.$data.useDocumentCookie &&
			urlObj.hostname.endsWith(
				window.location.hostname.split(".").slice(-2).join(".")
			)
		) {
			// 通过document.cookie获取添加
			ownCookie = this.concatCookie(ownCookie, document.cookie.trim());
		}
		this.$data.cookieRule.forEach((rule) => {
			// 正则不要使用test匹配
			if (urlObj.hostname.match(rule.hostname)) {
				// 域名匹配成功
				let cookie = PopsPanel.getValue(rule.key) as string;
				if (utils.isNull(cookie)) {
					return;
				}
				ownCookie = this.concatCookie(ownCookie, cookie);
			}
		});

		if (utils.isNotNull(ownCookie)) {
			if (details.headers && details.headers["Cookie"]) {
				details.headers.Cookie = this.concatCookie(
					details.headers.Cookie,
					ownCookie
				);
			} else {
				details.headers["Cookie"] = ownCookie;
			}
			log.info(["Httpx => 设置cookie:", details]);
		}

		if (
			details.headers &&
			details.headers.Cookie != null &&
			utils.isNull(details.headers.Cookie)
		) {
			// 有cookie，但是cookie是空的
			// 删除该设置
			delete details.headers.Cookie;
		}
	},
};
