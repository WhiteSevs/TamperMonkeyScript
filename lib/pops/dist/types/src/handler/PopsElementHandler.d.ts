import type { PopsSupportAnimConfig, PopsSupportAnimConfigType, PopsSupportBottomButtonConfig, PopsSupportBottomButtonConfigType, PopsSupportContentConfig, PopsSupportContentConfigType, PopsSupportHeaderTitleConfig, PopsSupportHeaderTitleConfigType } from "../types/main";
export declare const PopsElementHandler: {
    /**
     * 获取遮罩层HTML
     * @param guid
     * @param zIndex z-index
     * @param style
     */
    createMask(guid: string, zIndex?: number, style?: string): string;
    /**
     * 获取动画层HTML
     * @param guid
     * @param type
     * @param config
     * @param html
     * @param bottomBtnHTML
     * @param zIndex
     */
    createAnim(guid: string, type: PopsSupportAnimConfigType, config: PopsSupportAnimConfig[keyof PopsSupportAnimConfig], html: string | undefined, bottomBtnHTML: string | undefined, zIndex: number): string;
    /**
     * 获取顶部按钮层HTML
     * @param type
     * @param config
     */
    createHeader(type: PopsSupportHeaderTitleConfigType, config: PopsSupportHeaderTitleConfig[keyof PopsSupportHeaderTitleConfig]): string;
    /**
     * 获取标题style
     * @param type 弹窗类型
     * @param config 弹窗配置
     */
    createHeaderStyle(type: PopsSupportHeaderTitleConfigType, config: PopsSupportHeaderTitleConfig[keyof PopsSupportHeaderTitleConfig]): {
        headerStyle: string;
        headerPStyle: string;
    };
    /**
     * 获取底部按钮层HTML
     * @param type
     * @param config
     */
    createBottom(type: PopsSupportBottomButtonConfigType, config: Omit<PopsSupportBottomButtonConfig[keyof PopsSupportBottomButtonConfig], "content">): string;
    /**
     * 获取内容style
     * @param type 弹窗类型
     * @param config 弹窗配置
     */
    createContentStyle(type: PopsSupportContentConfigType, config: PopsSupportContentConfig[keyof PopsSupportContentConfig]): {
        contentStyle: string;
        contentPStyle: string;
    };
    /**
     * 将html转换成元素
     * @param html
     */
    parseElement<T extends HTMLElement>(html: string): T;
    /**
     * 添加样式元素
     */
    addStyle($parent: HTMLElement | ShadowRoot, style?: string | null): HTMLStyleElement | undefined;
    /**
     * 添加在浅色模式下生效的style元素
     */
    addLightStyle($parent: HTMLElement | ShadowRoot, style?: string | null): HTMLStyleElement | undefined;
    /**
     * 添加在深色模式下生效的style元素
     */
    addDarkStyle($parent: HTMLElement | ShadowRoot, style?: string | null): HTMLStyleElement | undefined;
};
