export type QmsgAnimationState = {
    /** 显示中 */
    opening: string;
    /** 显示完成 */
    done: string;
    /** 关闭中 */
    closing: string;
};
export declare const QmsgAnimation: {
    /** 状态 & 动画 */
    $state: QmsgAnimationState;
    $name: {
        startNameList: string[];
        endNameList: string[];
    };
    /**
     * 是否支持动画属性
     * @private
     */
    __CAN_ANIMATION__: Boolean | undefined;
    /**
     * 是否支持动画属性
     */
    readonly CAN_ANIMATION: Boolean;
    /**
     * 获取元素上的animationName属性
     * @param element
     */
    getStyleAnimationNameValue(element: HTMLElement): any;
    /**
     * 设置元素上的animationName属性
     * @param element
     * @param animationNameValue
     */
    setStyleAnimationName(element: HTMLElement, animationNameValue?: QmsgAnimationState[keyof QmsgAnimationState]): void;
};
