import type { PopsPanelCommonDetails } from "./components-common";

/**
 * pops.panel的 own
 * 自定义的
 */
export interface PopsPanelOwnDetails extends PopsPanelCommonDetails<PopsPanelOwnDetails> {
	/**
	 * （可选）className属性
	 */
	className?: string;
	/**
	 * （可选）自定义元素属性
	 */
	attributes?: any;
	/**
	 * （可选）自定义属性
	 */
	props?: {
		[K in keyof HTMLElement]?: HTMLElement[K];
	};
	/**
	 * 类型
	 */
	type: "own";
	/**
	 * 获取自定义<li>标签元素
	 */
	getLiElementCallBack: (liElement: HTMLLIElement) => HTMLLIElement;
}
