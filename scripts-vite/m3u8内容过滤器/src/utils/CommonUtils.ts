import { DOMUtils } from "@/env";

export const CommonUtils = {
	/**
	 * 把时长转为字符串文本
	 *
	 * @example
	 * 126
	 * > 02:06:00
	 */
	duration2Text(duration: number) {
		const hours = Math.floor(duration / 3600);
		const minutes = Math.floor((duration % 3600) / 60);
		const secs = parseInt((duration % 60).toString());

		return [
			hours.toString().padStart(2, "0"),
			minutes.toString().padStart(2, "0"),
			secs.toString().padStart(2, "0"),
		].join(":");
	},
	/**
	 * 计算字符串的相似度
	 * @param sourceText 源文本
	 * @param targetText 比较文本
	 */
	similar(sourceText: string, targetText: string) {
		if (!sourceText || !targetText) {
			return 0;
		}
		var l =
			sourceText.length > targetText.length
				? sourceText.length
				: targetText.length;
		var n = sourceText.length;
		var m = targetText.length;
		var d: any[] = [];
		var min = function (a: number, b: number, c: number) {
			return a < b ? (a < c ? a : c) : b < c ? b : c;
		};
		var i, j, si, tj, cost;
		if (n === 0) return m;
		if (m === 0) return n;
		for (i = 0; i <= n; i++) {
			d[i] = [];
			d[i][0] = i;
		}
		for (j = 0; j <= m; j++) {
			d[0][j] = j;
		}
		for (i = 1; i <= n; i++) {
			si = sourceText.charAt(i - 1);
			for (j = 1; j <= m; j++) {
				tj = targetText.charAt(j - 1);
				if (si === tj) {
					cost = 0;
				} else {
					cost = 1;
				}
				d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
			}
		}
		let res = 1 - d[n][m] / l;
		// return res.toFixed(f);
		return res;
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
	 * 将url修复，例如只有search的链接修复为
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
};
