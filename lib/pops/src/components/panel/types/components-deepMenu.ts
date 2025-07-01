import type { PopsPanelFormsTotalDetails } from ".";
import type { PopsPanelFormsDetails } from "./components-forms";
import type { PopsPanelCommonDetails } from "./components-common";
/**
 * pops.panel的 深层菜单
 */
export interface PopsPanelDeepMenuDetails
	extends PopsPanelCommonDetails<PopsPanelDeepMenuDetails> {
	/**
	 * 类型
	 */
	type: "deepMenu";
	/**
	 * （可选）className属性
	 */
	className?: string;
	/**
	 * （可选）自定义元素属性
	 */
	attributes?: {
		[key: string]: any;
	};
	/**
	 * （可选）自定义属性
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
	 */
	description?: string;
	/**
	 * （可选）右侧的文字
	 */
	rightText?: string;
	/**
	 * （可选）右侧的箭头图标，默认启用
	 */
	arrowRightIcon?: boolean;
	/**
	 * 点击整行触发的事件，可为异步函数
	 * @param event click事件
	 * @returns
	 * + true 表示阻止进入深层菜单
	 * + false （默认）表示允许进入深层菜单
	 */
	clickCallBack?: (
		event: MouseEvent | PointerEvent,
		formConfig: PopsPanelDeepMenuDetails
	) => boolean | void | Promise<boolean | void>;
	/**
	 * 进入深层菜单后触发的回调
	 * @param formConfig
	 */
	afterEnterDeepMenuCallBack?: (
		formConfig: PopsPanelDeepMenuDetails,
		container: {
			/** 右侧的总容器 */
			sectionContainer: HTMLElement;
			/** 右侧的总容器的标题头容器 */
			sectionContainerHeaderContainer: HTMLUListElement;
			/** 右侧的总容器的标题头 */
			sectionContainerHeader: HTMLDivElement;
			/** 右侧的内容容器 */
			sectionBodyContainer: HTMLUListElement;
		}
	) => void;
	/**
	 * 菜单配置
	 */
	forms?: (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[];
	/**
	 * （可选）头部的标题文字，没有的话默认是text
	 */
	headerTitle?: string;
}
