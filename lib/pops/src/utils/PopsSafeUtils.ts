export const PopsSafeUtils = {
	/**
	 * 设置安全的html
	 */
	setSafeHTML($el: Element, text: string) {
		// 创建 TrustedHTML 策略（需 CSP 允许）
		try {
			$el.innerHTML = text;
		} catch (error) {
			// @ts-ignore
			if (globalThis.trustedTypes) {
				// @ts-ignore
				const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
					createHTML: (html: string) => html,
				});
				$el.innerHTML = policy.createHTML(text);
			} else {
				throw new Error("trustedTypes is not defined");
			}
		}
	},
};
