export const NetDiskHandlerUtil = {
	/**
	 * 替换文字
	 * @param matchText 需要替换的文字
	 * @param pattern 需要替换的文字的正则表达式
	 * @param newText 替换为的文字
	 */
	replaceText(matchText: string, pattern: RegExp | RegExp[] | string | string[], newText: string) {
		if (Array.isArray(pattern)) {
			for (const patternItem of pattern) {
				matchText = this.replaceText(matchText, patternItem, newText);
			}
		} else {
			if (typeof pattern === "string") {
				matchText = matchText.replaceAll(pattern, newText);
			} else {
				matchText = matchText.replace(pattern, newText);
			}
		}
		return matchText;
	},
};
