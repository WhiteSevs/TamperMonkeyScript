import type { PopsIframeDetails } from "../components/iframe/types";
import type { PopsMode } from "./main";

/**
 * 事件配置
 */
export interface PopsIframeEventDetails {
	/**
	 * 唯一id
	 */
	guid: string;
	/**
	 * 当前弹窗类型
	 */
	mode: PopsMode;
	/**
	 * 动画层
	 */
	animElement: HTMLElement;
	/**
	 * 主元素
	 */
	popsElement: HTMLElement;
	/**
	 * 遮罩层
	 */
	maskElement: HTMLElement;
	/**
	 * 当前配置
	 */
	config: PopsIframeDetails;
}
/**
 * 事件配置
 */
export interface PopsEventDetails {
	/** 最外层包裹的元素 */
	$shadowContainer: HTMLDivElement;
	/** ShadowRoot */
	$shadowRoot: ShadowRoot | HTMLElement;
	/** -> 动画层 */
	element: HTMLDivElement;
	/** 动画层 */
	animElement: HTMLDivElement;
	/** 主元素 */
	popsElement: HTMLDivElement;
	/** 遮罩层 */
	maskElement?: HTMLDivElement;
	/** 当前弹窗类型 */
	mode: PopsMode;
	guid: string;
	close: () => Promise<void>;
	hide: () => Promise<void>;
	show: () => Promise<void>;
}

/**
 * 处理过的事件配置
 */
export interface PopsHandlerEventDetails extends PopsEventDetails {
	/** 当前按钮类型 */
	type: "cancel" | "close" | "ok" | "other";
}
