import type { PopsPanelCommonDetails } from "./components-common";

/**
 * pops.panel的 switch
 */
export interface PopsPanelSwitchDetails extends PopsPanelCommonDetails<PopsPanelSwitchDetails> {
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
	type: "switch";
	/**
	 * （可选）是否禁用
	 * @default false
	 */
	disabled?: boolean | (() => boolean);
	/**
	 * 获取该项的值的回调函数
	 */
	getValue(): boolean;
	/**
	 * switch开启/关闭触发的回调函数
	 */
	callback(event: MouseEvent | PointerEvent, value: boolean): void;
}
