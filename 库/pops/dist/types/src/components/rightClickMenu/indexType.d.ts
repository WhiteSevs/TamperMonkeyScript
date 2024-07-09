import type { PopsIcon } from "../../types/icon";
/**
 * pops.rightClickMenu的右键菜单配置
 */
export interface PopsRightClickMenuDataDetails {
    /**
     * svg图标
     */
    icon: PopsIcon | string;
    /**
     * 图标是否旋转
     */
    iconIsLoading: boolean;
    /**
     * 文字
     */
    text: string | (() => string);
    /**
     * 点击的回调函数
     * @param clickEvent 点击菜单的click事件
     * @param contextMenuEvent 触发的contextmenu事件
     * @param liElement <li>元素
     *
     */
    callback: (clickEvent: PointerEvent, contextMenuEvent: PointerEvent, liElement: HTMLLIElement) => boolean | void;
    /**
     * 子项配置
     */
    item?: PopsRightClickMenuDataDetails[] | null;
}
/**
 * pops.rightClickMenu
 */
export interface PopsRightClickMenuDetails {
    /**
     * 目标，默认为document.documentElement
     */
    target?: HTMLElement | undefined;
    /**
     * 目标的子元素选择器，默认为空
     */
    targetSelector?: string | null;
    /**
     * 右键菜单数据
     */
    data: PopsRightClickMenuDataDetails[];
    /**
     * 自定义className，默认为空
     */
    className?: string;
    /**
     * 是否是唯一的弹窗，默认false
     */
    only?: boolean;
    /**
     * 是否启用动画，默认true
     */
    isAnimation?: boolean;
    /**
     * 弹窗的显示层级，默认10000
     */
    zIndex?: number;
    /**
     * 是否阻止默认contextmenu事件
     */
    preventDefault?: boolean;
    /**
     * （可选）自定义style
     */
    style?: string | null;
    /**
     * 在元素添加到页面前的事件
     * @param $shadowRoot 根元素
     * @param $shadowContainer 容器
     */
    beforeAppendToPageCallBack?: ($shadowRoot: ShadowRoot, $shadowContainer: HTMLDivElement) => void;
}
