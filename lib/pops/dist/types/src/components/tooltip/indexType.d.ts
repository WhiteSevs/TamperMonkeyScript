/** tooltip的出现位置 */
export type PopsTooltipPosition = "top" | "right" | "bottom" | "left";
/**
 * pops.tooltip
 */
export interface PopsToolTipDetails {
    /**
     * 目标元素
     */
    target: HTMLElement;
    /**
     * 显示的文字
     */
    content: string | (() => string);
    /**
     * 位置
     * @default "top"
     */
    position?: PopsTooltipPosition;
    /**
     * 自定义className
     *
     * + github-tooltip github的样式
     * @default ""
     */
    className?: string;
    /**
     * 是否使用fixed定位，默认是absolute
     *
     * @default false
     */
    isFixed?: boolean;
    /**
     * 是否总是显示，默认为false
     * + true 设置的triggerShowEventName、triggerCloseEventName将无效
     *        返回提供show和close函数，取消on和off
     * + false 不添加事件，只显示
     */
    alwaysShow?: boolean;
    /**
     * 延迟xxms关闭tooltip
     * @default 100
     */
    delayCloseTime?: number;
    /**
     * 触发显示事件的名称，默认mouseenter touchstart，如果是多个事件，按空格分割
     * @default  "mouseenter touchstart"
     */
    triggerShowEventName?: string;
    /**
     * 触发关闭事件的名称，默认mouseleave touchend，如果是多个事件，按空格分割
     * @default  "mouseleave touchend"
     */
    triggerCloseEventName?: string;
    /**
     * z-index
     * @default 10000
     */
    zIndex?: number | (() => number);
    /**
     * 是否唯一
     * @default false
     */
    only?: boolean;
    /**
     * 监听的事件配置
     */
    eventOption?: AddEventListenerOptions;
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
     * + 当position为left或者right，这个距离是上、下距离
     * + 当position为top或者bottom，这个距离是左、右距离
     * @default 0
     */
    otherDistance?: number;
    /**
     * （可选）自定义style
     */
    style?: string;
    /**
     * 在元素添加到页面前的事件
     *
     * 当tooltip添加到ShadowRoot内时也会触发
     * @param $shadowRoot 根元素
     * @param $shadowContainer 容器
     */
    beforeAppendToPageCallBack?: ($shadowRoot: ShadowRoot, $shadowContainer: HTMLDivElement) => void;
}
