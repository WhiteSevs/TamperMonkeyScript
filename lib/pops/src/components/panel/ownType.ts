import type { PopsPanelCommonDetails } from "./commonType";

/**
 * pops.panel的 own
 * 自定义的
 */
export interface PopsPanelOwnDetails extends PopsPanelCommonDetails {
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
	props?: HTMLElement;
	/**
	 * 类型
	 */
	type: "own";
	/**
	 * 获取自定义<li>标签元素
	 */
	getLiElementCallBack: (liElement: HTMLLIElement) => HTMLLIElement;
}
