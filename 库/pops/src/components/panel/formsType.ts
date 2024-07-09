import type { PopsPanelCommonDetails } from "./commonType";
import type { PopsPanelFormsTotalDetails } from "./indexType";

/**
 * pops.panel的 forms
 */
export interface PopsPanelFormsDetails extends PopsPanelCommonDetails {
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
	 * 显示在左边的文字
	 */
	text: string;
	/**
	 * 类型
	 */
	type: "forms";
	/**
	 * 子配置
	 */
	forms: PopsPanelFormsTotalDetails[];
}
