import type { PopsIframeDetails } from "../components/iframe/indexType";

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
	$shadowRoot: ShadowRoot;
	/** -> 动画层 */
	element: HTMLDivElement;
	/** 动画层 */
	animElement: HTMLDivElement;
	/** 主元素 */
	popsElement: HTMLDivElement;
	/** 遮罩层 */
	maskElement?: HTMLDivElement;
	/** 当前弹窗类型 */
	mode: mode;
	guid: guid;
	close: () => void;
	hide: () => void;
	show: () => void;
}

/**
 * 处理过的事件配置
 */
export interface PopsHandlerEventDetails extends PopsEventDetails {
	/** 当前按钮类型 */
	type: "cancel" | "close" | "ok" | "other";
}
