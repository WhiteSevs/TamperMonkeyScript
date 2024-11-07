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
