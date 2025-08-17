import type { PopsCommonConfig } from "../../../types/components";
import type { PopsIconType } from "../../../types/icon";

/**
 * pops.rightClickMenu的右键菜单配置
 */
export interface PopsRightClickMenuDataDetails {
	/**
	 * svg图标，留空则是没图标
	 * @default ""
	 */
	icon?: PopsIconType | string;
	/**
	 * 图标是否旋转
	 * @default false
	 */
	iconIsLoading?: boolean;
	/**
	 * 文字
	 */
	text: string | (() => string);
	/**
	 * 点击的回调函数
	 * @param clickEvent 点击菜单的click事件
	 * @param contextMenuEvent 触发的contextmenu事件
	 * @param liElement <li>元素
	 * @param menuListenerRootNode 右键菜单监听的元素
	 * @returns
	 * + true(默认) 关闭菜单
	 * + false 不关闭菜单
	 *
	 */
	callback?: (
		clickEvent: PointerEvent,
		contextMenuEvent: PointerEvent,
		liElement: HTMLLIElement,
		menuListenerRootNode: HTMLElement
	) => boolean | void | Promise<boolean | void>;
	/**
	 * 子项配置
	 */
	item?: PopsRightClickMenuDataDetails[] | null;
}

/**
 * pops.rightClickMenu
 */
export interface PopsRightClickMenuDetails
	extends Pick<
		PopsCommonConfig,
		"useShadowRoot" | "beforeAppendToPageCallBack" | "zIndex" | "style" | "only"
	> {
	/**
	 * 目标元素
	 * @default document.documentElement
	 */
	target?: HTMLElement | Window | EventTarget | Node;
	/**
	 * 目标的子元素选择器，默认为空
	 */
	targetSelector?: string | null;
	/**
	 * 右键菜单数据
	 */
	data: PopsRightClickMenuDataDetails[];
	/**
	 * 子菜单的左右偏移距离
	 * @default 0
	 */
	chileMenuLeftOrRightDistance?: number;
	/**
	 * 子菜单的上下偏移距离
	 * @default 0
	 */
	childMenuTopOrBottomDistance?: number;
	/**
	 * 自定义className，默认为空
	 * @default ""
	 */
	className?: string;
	/**
	 * 是否启用动画，默认true
	 *
	 * 该动画为从上往下展开
	 * @default true
	 */
	isAnimation?: boolean;
	/**
	 * 是否使用打开动画，默认true
	 *
	 * 该动画为放大动画
	 * @default true
	 */
	useScaleAnimation?: boolean;
	/**
	 * 是否阻止默认contextmenu事件
	 * @default false
	 */
	preventDefault?: boolean;
}
