import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";

const CommonUtil = {
	/**
	 * 获取vue实例
	 * @param element
	 * @returns
	 */
	getVue(element: Element | null | EventTarget) {
		if (element == null) {
			return;
		}
		return ((element as NestedObjectWithToString)["__vue__"] ||
			(element as NestedObjectWithToString)["__Ivue__"] ||
			(element as NestedObjectWithToString)["__IVue__"]) as Vue2Context;
	},
};

export { CommonUtil };
