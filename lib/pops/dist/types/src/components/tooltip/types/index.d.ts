import type { PopsGeneralConfig } from "../../../types/components";
import type { PopsPanelGeneralConfig } from "../../panel/types/components-common";
/** tooltip的出现位置 */
export type PopsTooltipPosition = "top" | "right" | "bottom" | "left" | "follow";
/**
 * pops.tooltip
 */
export interface PopsToolTipConfig extends Pick<PopsGeneralConfig, "useShadowRoot" | "only" | "zIndex" | "style" | "lightStyle" | "darkStyle" | "beforeAppendToPageCallBack"> {
    /**
     * 目标元素
     */
    $target: HTMLElement;
    /**
     * 显示的文字
     */
    content: string | (() => string);
    /**
     * 是否比较获取到的`content`的内容是否改变
     *
     * 如果未改变，则在触发`.show`时不修改内容
     * @default false
     */
    isDiffContent?: boolean;
    /**
     * 位置
     * + `follow` 跟随（鼠标|触摸）的位置而移动
     * @default "top"
     */
    position?: PopsTooltipPosition;
    /**
     * 自定义className
     *
     * + `github-tooltip`：github的样式
     * @default ""
     */
    className?: PopsPanelGeneralConfig<any>["className"];
    /**
     * 是否使用`fixed`定位，`false`则是`absolute`定位
     * @default false
     */
    isFixed?: boolean;
    /**
     * 是否总是显示，默认为false
     * + true 设置的`onShowEventName`、`onCloseEventName`将无效
     *        返回提供`show`和`close`函数，取消`on`和`off`
     * + false 事件触发才显示
     */
    alwaysShow?: boolean;
    /**
     * 延迟xxms关闭tooltip
     * @default 100
     */
    delayCloseTime?: number;
    /**
     * 触发显示事件的名称，默认`mouseenter`、`touchstart`，如果是多个事件，按空格分割
     *
     * 如果`position`为`follow`，则添加`mousemove`、`touchmove`事件监听
     * @default  "mouseenter touchstart"
     */
    onShowEventName?: string;
    /**
     * 触发关闭事件的名称，默认`mouseleave`、`touchend`、`touchcancel`，如果是多个事件，按空格分割
     * @default  "mouseleave touchend touchcancel"
     */
    onCloseEventName?: string;
    /**
     * 监听的事件配置
     */
    eventOption?: {
        once?: boolean;
        passive?: boolean;
        capture?: boolean;
    };
    /**
     * 触发显示前的回调
     * @returns
     * + false 可阻止显示
     */
    showBeforeCallBack?: ($toolTip: HTMLElement) => false | void;
    /**
     * 触发显示后的回调
     */
    showAfterCallBack?: ($toolTip: HTMLElement) => void;
    /**
     * 触发关闭前的回调
     */
    closeBeforeCallBack?: (
    /**
     *
     * @returns
     * + false 可阻止关闭
     */
    $toolTip: HTMLElement) => false | void;
    /**
     * 触发关闭后的回调
     */
    closeAfterCallBack?: ($toolTip: HTMLElement) => void;
    /**
     * 是否显示箭头
     * @default true
     */
    showArrow?: boolean;
    /**
     * 箭头与目标的的距离(px)
     *
     * @default 12.5
     */
    arrowDistance?: number;
    /**
     * 其它的距离(px)
     * + 当`position`为`left`或者`right`，这个距离是上、下距离
     * + 当`position`为`top`或者`bottom`，这个距离是左、右距离
     * + 当`position`为`follow`，这个距离是上、左距离
     * @default 0
     */
    otherDistance?: number;
}
