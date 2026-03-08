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
    /**
     * 带动画的进入元素
     * @param $el 当前元素
     * @param $next 切换的元素
     * @param option 配置
     */
    createSwitchElementWithAnimation($el: HTMLElement, $next: HTMLElement, option: {
        /**
         * 是否使用动画
         * @default true
         */
        useAnimation?: boolean;
        /**
         * 动画配置
         *
         * + `duration`: 默认`220`
         * + `easing`: 默认`"ease-in-out"`
         */
        animOptions?: KeyframeAnimationOptions;
        /** 为$next内部添加元素 */
        enterToAddElementCallback: () => IPromise<void>;
        /** 退出时移除$next元素 */
        exitToRemoveElementCallback?: () => IPromise<void>;
    }): {
        /**
         * 进入
         */
        enter(): Promise<void>;
        /**
         * 退出
         */
        exit(): Promise<void>;
    };
};
