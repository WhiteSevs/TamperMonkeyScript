import { utils } from "@/env";

export const DouYinUtils = {
	/**
	 * 判断是否是竖屏
	 *
	 * window.screen.orientation.type
	 * + landscape-primary 横屏
	 * + portrait-primary 竖屏
	 */
	isVerticalScreen() {
		return !window.screen.orientation.type.includes("landscape");
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
		return utils.addStyle(
			`${selectorList.join(",\n")}{display: none !important;}`
		);
	},
	/**
	 * 深度获取对象属性
	 * @param obj 待获取的对象
	 * @param getPropertiesCallBack 获取属性的回调
	 */
	getObjectPropertiesInDepth(
		obj: any,
		getPropertiesCallBack: (obj: any) => {
			/**
			 * 是否找到目标
			 * + true 找到目标，data的值就是目标值
			 * + false 未找到目标，data的值就是深入判断的下一个的对象
			 */
			isFind: boolean;
			/**
			 * 对象/目标值
			 */
			data: any;
		}
	): any {
		if (obj == null) {
			return;
		}
		let value = getPropertiesCallBack(obj);
		if (typeof value?.isFind === "boolean" && value.isFind) {
			return value?.data;
		}
		return this.getObjectPropertiesInDepth(value.data, getPropertiesCallBack);
	},
};
