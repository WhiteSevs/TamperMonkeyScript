import { DOMUtils } from "@/env";

export const Tag = {
	success: "√ ",
	error: "× ",
	warn: "!!! ",
	info: "",
};

export type TagName = keyof typeof Tag;

export const TagUtil = {
	/**
	 * 设置tag（自动清除旧tag）
	 */
	setTag($el: HTMLElement, tag: keyof typeof Tag, text?: string) {
		TagUtil.clearTag($el);
		DOMUtils.addClass($el, tag);
		if (typeof text === "string") {
			DOMUtils.html($el, text);
		}
	},
	/**
	 * 除旧tag
	 */
	clearTag($el: HTMLElement) {
		Object.keys(Tag).forEach((tagName) => {
			DOMUtils.removeClass($el, tagName);
		});
	},
};
