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
     * 位置，默认top
     */
    position?: PopsTooltipPosition;
    /**
     * 自定义className，默认为空
     * + github-tooltip
     */
    className?: string;
    /**
     * 是否总是显示，默认为false
     * + true 设置的triggerShowEventName、triggerCloseEventName将无效
     *        返回提供show和close函数，取消on和off
     * + false 返回提供on和off，取消close函数
     */
    alwaysShow?: boolean;
    /**
     * 触发显示事件的名称，默认mouseenter touchstart，如果是多个事件，按空格分割
     */
    triggerShowEventName?: string;
    /**
     * 触发关闭事件的名称，默认mouseleave touchend，如果是多个事件，按空格分割
     */
    triggerCloseEventName?: string;
    /**
     * z-index，默认10000
     */
    zIndex?: number | (() => number);
    /**
     * 是否唯一，默认false
     */
    only?: boolean;
    /**
     * 监听的事件配置
     */
    eventOption?: AddEventListenerOptions;
    /**
     * 触发显示前的回调
     * 返回值为false可阻止显示
     */
    showBeforeCallBack?: () => boolean | void;
    /**
     * 触发显示后的回调
     */
    showAfterCallBack?: (toolTipElement: HTMLElement) => void;
    /**
     * 触发关闭前的回调
     * 返回值为false可阻止关闭
     */
    closeBeforeCallBack?: (toolTipElement: HTMLElement) => boolean | void;
    /**
     * 触发关闭后的回调
     */
    closeAfterCallBack?: (toolTipElement: HTMLElement) => void;
    /**
     * 箭头与目标的的距离，默认12.5(px)
     */
    arrowDistance?: number;
    /**
     * 其它的距离，默认0(px)
     * + 当position为left或者right，这个距离是上、下距离
     * + 当position为top或者bottom，这个距离是左、右距离
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
