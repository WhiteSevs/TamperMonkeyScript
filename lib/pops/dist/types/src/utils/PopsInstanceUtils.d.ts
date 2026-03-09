export declare const PopsInstanceUtils: {
    /**
     * 获取pops所有弹窗中的最大的z-index
     * @param deviation
     */
    getPopsMaxZIndex(deviation?: number): {
        zIndex: number;
        animElement: HTMLElement | null;
        isOverMaxZIndex: boolean;
    };
    /**
     * 排序数组
     * @param getBeforeValueFun
     * @param getAfterValueFun
     * @param sortByDesc 排序是否降序，默认降序
     */
    sortElementListByProperty<T, R>(getBeforeValueFun: (value: T) => R, getAfterValueFun: (value: T) => R, sortByDesc?: boolean): (after_obj: T, before_obj: T) => 1 | 0 | -1;
    /**
     * 是否是隐藏状态
     *
     * 检测以下项：
     *
     * + `display`: none
     * + `visibility`: hidden
     * + `opacity`: 0
     * + `使用了pops的自定义的隐藏class类`
     * @param $el 需要检测的元素
     */
    isHide($el: Element): boolean;
    /**
     * 判断元素是否是在`.pops`内
     * @param $el 目标元素
     */
    isNodeInPopsNode($el: Element): boolean;
    /**
     * 判断是否是`.pops-anim`元素
     * @param $el 目标元素
     */
    isAnimNode($el: Element): boolean;
};
