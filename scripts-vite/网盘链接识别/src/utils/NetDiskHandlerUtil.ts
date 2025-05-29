import { log } from "@/env";

export const NetDiskHandlerUtil = {
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
};
