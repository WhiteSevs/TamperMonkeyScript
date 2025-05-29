import type { PopsAlertDetails } from "../alert/indexType";
import type { PopsPanelCommonDetails } from "./commonType";

export interface PopsPanelSelectMultipleDataOption<T> {
	/**
	 * 真正的值
	 */
	value: T;
	/**
	 * 显示的文字
	 */
	text:
		| string
		| ((
				/** 当前的值 */
				value: T,
				/** 所有选中的配置信息 */
				allSelectedInfo: PopsPanelSelectMultipleDataOption<T>[]
		  ) => string);
	/**
	 * 显示的文字是否是html
	 * @default false
	 */
	isHTML?: boolean;
	/**
	 * （可选）是否禁用项
	 * 触发条件：
	 * + 点击select元素
	 * + select元素触发change事件
	 * @param value 当前的值
	 * @param allSelectedInfo 所有选中的配置信息
	 */
	disable?(
		value: T,
		allSelectedInfo: PopsPanelSelectMultipleDataOption<T>[]
	): boolean;
}
/**
 * pops.panel的 select
 */
export interface PopsPanelSelectMultipleDetails<T = any>
	extends PopsPanelCommonDetails<PopsPanelSelectMultipleDetails> {
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
	 * 类型
	 */
	type: "select-multiple";
	/**
	 * （可选）是否禁用
	 */
	disabled?: boolean | ((value: T) => boolean);
	/**
	 * 提示文字
	 */
	placeholder?: string | (() => string);
	/**
	 * 获取该项的值的回调函数
	 */
	getValue(): T[];
	/**
	 * 弹出的下拉列表弹窗的配置
	 */
	selectConfirmDialogDetails?: Partial<PopsAlertDetails>;
	/**
	 * 选择器的值改变触发的回调函数
	 * @param event 事件
	 * @param isSelectedValue 当前选中的值，也就是元素属性上的__value__
	 * @param isSelectedText 当前选中的文本
	 */
	callback?(
		/** 当前已选中的信息 */
		isSelectedInfo: PopsPanelSelectMultipleDataOption<any>[]
	): void;
	/**
	 * 点击某个项的元素触发该回调
	 * @param event 点击事件
	 * @param selectElement 当前的选中的元素
	 * @returns 如果返回boolean为false，则不会触发默认的点击事件
	 */
	clickCallBack?(
		event: PointerEvent | MouseEvent,
		/** 当前已选中的信息 */
		isSelectedInfo: PopsPanelSelectMultipleDataOption<any>[]
	): void | boolean;
	/**
	 * 点击标签tag的关闭图标触发该回调
	 * 如果返回boolean类型且为false，则阻止默认的事件
	 */
	closeIconClickCallBack?: (
		event: PointerEvent | MouseEvent,
		data: {
			/** 标签元素 */
			$tag: HTMLElement;
			/** 关闭图标元素 */
			$closeIcon: HTMLElement;
			/** 值 */
			value: T;
			/** 显示的文字 */
			text: PopsPanelSelectMultipleDataOption<T>["text"];
		}
	) => void | boolean;
	/**
	 * 选择器内的数据组
	 */
	data: PopsPanelSelectMultipleDataOption<T>[];
}
