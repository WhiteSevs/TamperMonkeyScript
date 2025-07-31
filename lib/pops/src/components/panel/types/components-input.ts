import type { PopsPanelCommonDetails } from "./components-common";

/**
 * pops.panel的 input
 */
export interface PopsPanelInputDetails extends PopsPanelCommonDetails<PopsPanelInputDetails> {
	/**
	 * （可选）className属性
	 * @default ""
	 */
	className?: string;
	/**
	 * （可选）自定义元素属性
	 * @default {}
	 */
	attributes?:
		| {
				[key: string]: any;
		  }
		| {
				[key: string]: any;
		  }[];
	/**
	 * （可选）自定义属性
	 * @default {}
	 */
	props?: {
		[K in keyof HTMLElement]?: HTMLElement[K];
	};
	/**
	 * 显示在左边的文字
	 */
	text: string;
	/**
	 * （可选）左边的文字下面的描述
	 * @default ""
	 */
	description?: string;
	/**
	 * 类型
	 */
	type: "input";
	/**
	 * （可选）是否禁用
	 * @default false
	 */
	disabled?: boolean | (() => boolean);
	/**
	 * 获取该项的值的回调函数
	 */
	getValue(): string;
	/**
	 * 输入框的值改变触发的回调函数
	 * @param event 输入事件
	 * @param value 输入框的值
	 * @param valueAsNumber 当isNumber为true时，有该值，它可能是NaN
	 */
	callback(event: InputEvent, value: string, valueAsNumber?: number): void;
	/**
	 * （可选）输入框内的提示
	 * @default ""
	 */
	placeholder?: string;
	/**
	 * （可选）是否是密码框
	 * @default false
	 */
	isPassword?: boolean;
	/**
	 * （可选）是否是数字框
	 * @default false
	 */
	isNumber?: boolean;
	/**
	 * （可选）自己调用的处理回调函数
	 */
	handlerCallBack?(liElement: HTMLLIElement, inputElement: HTMLInputElement): void;
}
