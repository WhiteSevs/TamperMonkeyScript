import { log, utils } from "@/env";

/**
 * 规则的工具
 */
export const NetDiskRuleUtils = {
	/**
	 * 参数替换，区分大小写
	 *
	 * 例如
	 * + {#shareCode#} => xxxx
	 * + {#accessCode#} => xxxx
	 * + {#$1#} => xxxx
	 * @param text
	 * @param data
	 */
	replaceParam(
		text: string,
		data: {
			[key: string]: string;
		} = {}
	): string {
		if (typeof text !== "string") {
			return text;
		}
		Object.keys(data).forEach((key) => {
			let replacedText = data[key];
			if (utils.isNotNull(replacedText)) {
				try {
					text = text.replaceAll(
						`{#encodeURI-${key}#}`,
						encodeURI(replacedText)
					);
				} catch (error) {
					log.error(["encodeURI-替换的文本失败", [replacedText]]);
				}

				try {
					text = text.replaceAll(
						`{#encodeURIComponent-${key}#}`,
						encodeURIComponent(replacedText)
					);
				} catch (error) {
					log.error(["encodeURIComponent-替换的文本失败", [replacedText]]);
				}
				try {
					text = text.replaceAll(
						`{#decodeURI-${key}#}`,
						decodeURI(replacedText)
					);
				} catch (error) {
					log.error(["decodeURI-替换的文本失败", [replacedText]]);
				}
				try {
					text = text.replaceAll(
						`{#decodeURIComponent-${key}#}`,
						decodeURIComponent(replacedText)
					);
				} catch (error) {
					log.error(["encodeURIComponent-替换的文本失败", [replacedText]]);
				}
				text = text.replaceAll(`{#${key}#}`, replacedText);
			}
		});
		return text;
	},
	/**
	 * 删除掉所有中文
	 * @param text
	 */
	replaceChinese(text: string) {
		return text.replace(/[\u4e00-\u9fa5]/g, "");
	},
	/**
	 * 获取已解码的当前url
	 * @param decodeUrl 当前url
	 */
	getDecodeComponentUrl(decodeUrl = window.location.href): string {
		try {
			decodeUrl = decodeURIComponent(decodeUrl);
		} catch (error) {
			// 当前url解码失败
		}
		return decodeUrl;
	},
};
