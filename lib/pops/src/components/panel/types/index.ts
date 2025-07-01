import type {
	PopsTitleConfig,
	PopsDragConfig,
	PopsCommonConfig,
} from "../../../types/components";
import type { PopsPanelFormsDetails } from "./components-forms";
import type { PopsPanelSwitchDetails } from "./components-switch";
import type { PopsPanelSliderDetails } from "./components-slider";
import type { PopsPanelInputDetails } from "./components-input";
import type { PopsPanelTextAreaDetails } from "./components-textarea";
import type { PopsPanelSelectDetails } from "./components-select";
import type { PopsPanelButtonDetails } from "./components-button";
import type { PopsPanelDeepMenuDetails } from "./components-deepMenu";
import type { PopsPanelOwnDetails } from "./components-own";
import type { PopsHeaderCloseButtonDetails } from "../../../types/button";
import { PopsPanelSelectMultipleDetails } from "./components-selectMultiple";

/** panel的各种类型的配置项 */
export type PopsPanelFormsTotalDetails =
	| PopsPanelSwitchDetails
	| PopsPanelSliderDetails
	| PopsPanelInputDetails
	| PopsPanelTextAreaDetails
	| PopsPanelSelectDetails<any>
	| PopsPanelSelectMultipleDetails<any>
	| PopsPanelButtonDetails
	| PopsPanelDeepMenuDetails
	| PopsPanelOwnDetails;

/**
 * panel的内部事件
 */
export type PopsPanelEventType = {
	/**
	 * 该事件在右侧容器内的元素改变时触发
	 */
	"pops:renderRightContainer": {
		/**
		 * 菜单配置
		 */
		formConfig: PopsPanelContentConfig[] | PopsPanelDeepMenuDetails;
	};
};

/**
 * pops.panel的content配置信息
 */
export interface PopsPanelContentConfig {
	/**
	 * 元素属性id
	 */
	id: string;
	/**
	 * 元素的className
	 */
	className?: string | string[];
	/**
	 * 左侧的标题，可以是html格式
	 */
	title: string;
	/**
	 * （可选）中间顶部的标题
	 */
	headerTitle?: string;
	/**
	 * （可选）内容高度是否自动适应（与headerTitle的高度有关）
	 */
	autoAdaptionContentHeight?: string;
	/**
	 * （可选）是否是默认的，指打开弹窗的先显示出来的内容
	 */
	isDefault?: boolean | (() => boolean);
	/**
	 * （可选）是否自动滚动到默认的项
	 */
	scrollToDefaultView?: boolean;
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
	 * 子配置
	 */
	forms: (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[];
	/**
	 * 左侧容器的点击回调
	 */
	callback?: (
		event: MouseEvent | PointerEvent,
		rightHeaderElement: HTMLUListElement,
		rightContainerElement: HTMLUListElement
	) => void;
	/**
	 * 左侧容器添加到panel后的回调
	 * @param rightHeaderElement
	 * @param rightContainerElement
	 */
	afterRender?: (data: {
		/** 容器配置 */
		asideConfig: PopsPanelContentConfig;
		/** 左侧容器的元素 */
		$asideLiElement: HTMLLIElement;
	}) => void;
}

/**
 * pops.panel
 */
export interface PopsPanelDetails
	extends PopsTitleConfig,
		PopsDragConfig,
		PopsCommonConfig {
	/**
	 * 内容配置
	 */
	content: PopsPanelContentConfig[];
	/**
	 * 按钮配置
	 */
	btn?: {
		/**
		 * 右上角的关闭按钮
		 */
		close?: PopsHeaderCloseButtonDetails;
	};
	/**
	 * 移动端适配的的className，默认为pops-panel-is-mobile
	 */
	mobileClassName?: string;
	/**
	 * 是否强制是移动端，默认false
	 * + true 强制为移动端
	 * + false 自动根据UA判断是否是移动端
	 * @default false
	 */
	isMobile?: boolean;
}
