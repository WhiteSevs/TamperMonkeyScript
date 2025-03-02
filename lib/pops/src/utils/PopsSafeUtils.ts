export const PopsSafeUtils = {
	/**
	 * 获取安全的html
	 */
	getSafeHTML(text: string) {
		// @ts-ignore
		if (globalThis.trustedTypes) {
			// @ts-ignore
			const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
				createHTML: (html: string) => html,
			});
			return policy.createHTML(text);
		} else {
			return text;
		}
	},
	/**
	 * 设置安全的html
	 */
	setSafeHTML($el: Element, text: string) {
		// 创建 TrustedHTML 策略（需 CSP 允许）
		$el.innerHTML = this.getSafeHTML(text);
	},
};
