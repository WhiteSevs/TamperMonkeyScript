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
};
