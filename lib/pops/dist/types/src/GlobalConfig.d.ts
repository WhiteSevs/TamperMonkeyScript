type EnterReturnType<T> = null | T | (() => T);
type GlobalConfigOption = {
    style?: EnterReturnType<string>;
    zIndex?: EnterReturnType<number> | EnterReturnType<string>;
};
export declare const GlobalConfig: {
    config: GlobalConfigOption;
    /**
     * 为所有弹窗设置全局属性
     */
    setGlobalConfig(config: GlobalConfigOption): void;
    /**
     * 获取全局配置
     */
    getGlobalConfig(): {
        style?: string | undefined;
        zIndex?: string | number | undefined;
    };
};
export {};
