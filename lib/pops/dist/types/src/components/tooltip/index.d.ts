import type { PopsToolTipDetails } from "./indexType";
export declare class ToolTip {
    $el: {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot;
        $toolTip: HTMLElement;
        $content: HTMLElement;
        $arrow: HTMLElement;
    };
    $data: {
        config: Required<PopsToolTipDetails>;
        guid: string;
        timeId_show: number[];
        timeId_close: number[];
    };
    constructor(config: Required<PopsToolTipDetails>, guid: string, ShadowInfo: {
        $shadowContainer: HTMLDivElement;
        $shadowRoot: ShadowRoot;
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
     * 获取 提示框的位置
     * @param targetElement 目标元素
     * @param arrowDistance 箭头和目标元素的距离
     * @param otherDistance 其它位置的偏移
     */
    getPosition(targetElement: HTMLElement, arrowDistance: number, otherDistance: number): {
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
    };
    /**
     * 动态修改tooltip的位置
     */
    changePosition(): void;
    /**
     * 事件绑定
     */
    onEvent(): void;
    /**
     * 取消事件绑定
     */
    offEvent(): void;
    /**
     * 显示提示框
     */
    show(): void;
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
    animationFinishEvent(): void;
    /**
     * 监听动画结束
     */
    onAnimationFinishEvent(): void;
    /**
     * 取消监听动画结束
     */
    offAnimationFinishEvent(): void;
    /**
     * 当鼠标|手触摸
     */
    onMouseEnterEvent(): void;
    /**
     * 当鼠标|手离开，开始当前动画
     */
    onMouseLeaveEvent(): void;
}
export type PopsTooltipResult<T extends PopsToolTipDetails> = {
    guid: string;
    config: T;
    $shadowContainer: HTMLDivElement;
    $shadowRoot: ShadowRoot;
    toolTip: typeof ToolTip.prototype;
};
export declare class PopsTooltip {
    constructor(details: PopsToolTipDetails);
}
