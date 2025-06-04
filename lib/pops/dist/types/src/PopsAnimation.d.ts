export declare const PopsAnimation: {
    $data: {
        [key: string]: CSSKeyframesRule;
    };
    $flag: {
        /** 是否初始化 */
        isInit: boolean;
    };
    init(): void;
    /**
     * 判断是否存在某个动画名
     */
    hasAnim(name: string): boolean;
};
