import type { PopsGeneralConfig, PopsDragConfig } from "../types/components";
type NullOrFunctionReturnType<T> = null | undefined | IFunction<T>;
type GlobalConfigOption = {
    style?: NullOrFunctionReturnType<string>;
    zIndex?: NullOrFunctionReturnType<number | string>;
} & Partial<PopsGeneralConfig> & Partial<PopsDragConfig>;
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
        style?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<(IFunction<string> & string) | null | undefined, "zIndex"> | undefined;
        zIndex?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<((IFunction<string | number> | null) & IFunction<number>) | undefined, "zIndex"> | undefined;
        useShadowRoot?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<boolean | undefined, "zIndex"> | undefined;
        class?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<string | undefined, "zIndex"> | undefined;
        only?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<boolean | undefined, "zIndex"> | undefined;
        width?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<string | undefined, "zIndex"> | undefined;
        height?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<string | undefined, "zIndex"> | undefined;
        position?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<import("../types/position").PopsPosition | undefined, "zIndex"> | undefined;
        animation?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<false | import("../types/animation").PopsAnimation | undefined, "zIndex"> | undefined;
        mask?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<import("../types/mask").PopsMaskConfig | undefined, "zIndex"> | undefined;
        forbiddenScroll?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<boolean | undefined, "zIndex"> | undefined;
        lightStyle?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<string | null | undefined, "zIndex"> | undefined;
        darkStyle?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<string | null | undefined, "zIndex"> | undefined;
        stopKeyDownEventPropagation?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<boolean | undefined, "zIndex"> | undefined;
        emitter?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<import("../event/EventEmiter").EventEmiter<import("../types/EventEmitter").CustomEventMap> | null | undefined, "zIndex"> | undefined;
        drag?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<boolean | undefined, "zIndex"> | undefined;
        dragLimit?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<boolean | undefined, "zIndex"> | undefined;
        dragExtraDistance?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<number | undefined, "zIndex"> | undefined;
        dragMoveCallBack?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<((moveElement: HTMLElement, left: number, top: number) => void) | undefined, "zIndex"> | undefined;
        dragEndCallBack?: {
            zIndex: GlobalConfigOption["zIndex"];
        } | Omit<((moveElement: HTMLElement, left: number, top: number) => void) | undefined, "zIndex"> | undefined;
    };
};
export {};
