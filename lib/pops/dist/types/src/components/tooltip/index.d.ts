import type { PopsToolTipConfig } from "./types/index";
type ToolTipEventTypeName = "MouseEvent" | "TouchEvent";
export declare class ToolTip {
    $el: {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot | HTMLElement;
        $toolTip: HTMLElement;
        $content: HTMLElement;
        $arrow: HTMLElement;
    };
    $data: {
        config: Required<PopsToolTipConfig>;
        guid: string;
        timeId_close_TouchEvent: number[];
        timeId_close_MouseEvent: number[];
    };
    constructor(config: Required<PopsToolTipConfig>, guid: string, ShadowInfo: {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot | HTMLElement;
    });
    init(): void;
    /**
     * 创建提示元素
     */
    createToolTip(): {
        $toolTipContainer: HTMLDivElement;
        $toolTipArrow: HTMLElement;
        $toolTipContent: HTMLElement;
    };
    /**
     * 获取提示的内容
     */
    getContent(): string;
    /**
     * 修改提示的内容
     * @param text
     */
    changeContent(text?: string): void;
    /**
     * 获取z-index
     */
    getZIndex(): number;
    /**
     * 动态修改z-index
     */
    changeZIndex(): void;
    /**
     * 计算 提示框的位置
     * @param event 触发的事件
     * @param targetElement 目标元素
     * @param arrowDistance 箭头和目标元素的距离
     * @param otherDistance 其它位置的偏移
     */
    calcToolTipPosition(targetElement: HTMLElement, arrowDistance: number, otherDistance: number, event?: MouseEvent | TouchEvent | PointerEvent): {
        TOP: {
            left: number;
            top: number;
            arrow: string;
            motion: string;
        };
        RIGHT: {
            left: number;
            top: number;
            arrow: string;
            motion: string;
        };
        BOTTOM: {
            left: number;
            top: number;
            arrow: string;
            motion: string;
        };
        LEFT: {
            left: number;
            top: number;
            arrow: string;
            motion: string;
        };
        FOLLOW: {
            left: number;
            top: number;
            arrow: string;
            motion: string;
        };
    };
    /**
     * 动态修改tooltip的位置
     */
    changePosition(event?: MouseEvent | TouchEvent | PointerEvent): void;
    /**
     * 事件绑定
     */
    onEvent(): void;
    /**
     * 取消事件绑定
     */
    offEvent(): void;
    /**
     * 添加关闭的timeId
     * @param type
     * @param timeId
     */
    addCloseTimeoutId(type: ToolTipEventTypeName, timeId: number): void;
    /**
     * 清除延迟的timeId
     * @param type 事件类型
     */
    clearCloseTimeoutId(type: ToolTipEventTypeName, timeId?: number): void;
    /**
     * 显示提示框
     */
    show(...args: any[]): void;
    /**
     * 绑定 显示事件
     */
    onShowEvent(): void;
    /**
     * 取消绑定 显示事件
     */
    offShowEvent(): void;
    /**
     * 关闭提示框
     */
    close(...args: any[]): void;
    /**
     * 绑定 关闭事件
     */
    onCloseEvent(): void;
    /**
     * 取消绑定 关闭事件
     */
    offCloseEvent(): void;
    /**
     * 销毁元素
     */
    destory(): void;
    /**
     * 动画结束事件
     */
    toolTipAnimationFinishEvent(): void;
    /**
     * 监听tooltip的动画结束
     */
    onToolTipAnimationFinishEvent(): void;
    /**
     * 取消tooltip监听动画结束
     */
    offToolTipAnimationFinishEvent(): void;
    /**
     * 鼠标|触摸进入事件
     */
    toolTipMouseEnterEvent(): void;
    /**
     * 监听鼠标|触摸事件
     */
    onToolTipMouseEnterEvent(): void;
    /**
     * 取消监听事件 - 鼠标|触摸
     */
    offToolTipMouseEnterEvent(): void;
    /**
     * 离开事件 - 鼠标|触摸
     */
    toolTipMouseLeaveEvent(event: MouseEvent | PointerEvent): void;
    /**
     * 监听离开事件 - 鼠标|触摸
     */
    onToolTipMouseLeaveEvent(): void;
    /**
     * 取消监听离开事件 - 鼠标|触摸
     */
    offToolTipMouseLeaveEvent(): void;
}
export type PopsTooltipResult<T extends PopsToolTipConfig> = {
    guid: string;
    config: T;
    $shadowContainer: HTMLDivElement;
    $shadowRoot: ShadowRoot;
    toolTip: typeof ToolTip.prototype;
};
export declare const PopsTooltip: {
    init(__config__: PopsToolTipConfig): {
        guid: string;
        config: {
            $target: HTMLElement;
            content: string | (() => string);
            isDiffContent: boolean;
            position: import("./types/index").PopsTooltipPosition;
            className: string | string[] | (() => string | string[]);
            isFixed: boolean;
            alwaysShow: boolean;
            delayCloseTime: number;
            onShowEventName: string;
            onCloseEventName: string;
            eventOption: {
                once: boolean;
                passive: boolean;
                capture: boolean;
            };
            showBeforeCallBack: ($toolTip: HTMLElement) => false | void;
            showAfterCallBack: ($toolTip: HTMLElement) => void;
            closeBeforeCallBack: ($toolTip: HTMLElement) => false | void;
            closeAfterCallBack: ($toolTip: HTMLElement) => void;
            showArrow: boolean;
            arrowDistance: number;
            otherDistance: number;
            useShadowRoot: boolean;
            only: boolean;
            zIndex: IFunction<number>;
            style: string | null;
            beforeAppendToPageCallBack: ($shadowRoot: ShadowRoot | HTMLElement, $shadowContainer: HTMLDivElement) => void;
        };
        $shadowContainer: HTMLDivElement;
        $shadowRoot: HTMLDivElement | ShadowRoot;
        toolTip: ToolTip;
    };
};
export {};
