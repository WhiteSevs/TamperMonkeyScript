import type { PopsCommonConfig } from "./types/components";
type EnterReturnType<T> = null | T | (() => T);
type GlobalConfigOption = {
    style?: EnterReturnType<string>;
    zIndex?: EnterReturnType<number> | EnterReturnType<string>;
} & Partial<PopsCommonConfig>;
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
        useShadowRoot?: boolean | undefined;
        class?: string | undefined;
        only?: boolean | undefined;
        width?: string | undefined;
        height?: string | undefined;
        position?: import("./types/position").PopsPosition | undefined;
        animation?: import("./types/animation").PopsAnimation | undefined;
        mask?: import("./types/mask").PopsMaskDetails | undefined;
        forbiddenScroll?: boolean | undefined;
        beforeAppendToPageCallBack?: void;
    };
};
export {};
