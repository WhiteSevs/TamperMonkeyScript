import { addStyle, log, utils } from "@/env";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";

interface WaitSetVuePropOption {
	/**
	 * 在检测前输出日志
	 */
	msg?: string;
	/**
	 * 检测属性的函数
	 */
	check(vueObj: Vue2Context): boolean;
	/**
	 * 进行设置
	 */
	set(vueObj: Vue2Context): void;
}

export const CommonUtils = {
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

	/**
	 * 等待vue属性并进行设置
	 */
	waitVuePropToSet(
		$target: HTMLElement | (() => HTMLElement | null) | string,
		needSetList: WaitSetVuePropOption[]
	) {
		function getTarget() {
			let __target__ = null;
			if (typeof $target === "string") {
				__target__ = document.querySelector($target);
			} else if (typeof $target === "function") {
				__target__ = $target();
			} else if ($target instanceof HTMLElement) {
				__target__ = $target;
			}
			return __target__;
		}
		needSetList.forEach((needSetOption) => {
			if (typeof needSetOption.msg === "string") {
				log.info(needSetOption.msg);
			}
			function checkVue() {
				let target = getTarget();
				if (target == null) {
					return false;
				}
				let vueObj = CommonUtils.getVue(target);
				if (vueObj == null) {
					return false;
				}
				let needOwnCheck = needSetOption.check(vueObj);
				return Boolean(needOwnCheck);
			}
			utils
				.waitVueByInterval(
					() => {
						return getTarget();
					},
					checkVue,
					250,
					10000
				)
				.then((result) => {
					if (!result) {
						return;
					}
					let target = getTarget();
					let vueObj = CommonUtils.getVue(target as HTMLElement);
					if (vueObj == null) {
						return;
					}
					needSetOption.set(vueObj);
				});
		});
	},
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
		addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
	},
};
