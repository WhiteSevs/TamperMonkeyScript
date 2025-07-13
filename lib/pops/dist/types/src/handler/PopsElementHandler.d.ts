import type { PopsSupportAnimDetails, PopsSupportBottomBtnDetails, PopsSupportContentDetails, PopsSupportHeaderTitleDetails, PopsSupportAnimDetailsType, PopsSupportBottomBtnDetailsType, PopsSupportContentDetailsType, PopsSupportHeaderTitleDetailsType } from "../types/main";
export declare const PopsElementHandler: {
    /**
     * 获取遮罩层HTML
     * @param guid
     * @param zIndex z-index
     * @param style
     */
    getMaskHTML(guid: string, zIndex?: number, style?: string): string;
    /**
     * 获取动画层HTML
     * @param guid
     * @param type
     * @param config
     * @param html
     * @param bottomBtnHTML
     * @param zIndex
     */
    getAnimHTML(guid: string, type: PopsSupportAnimDetailsType, config: PopsSupportAnimDetails[keyof PopsSupportAnimDetails], html: string | undefined, bottomBtnHTML: string | undefined, zIndex: number): string;
    /**
     * 获取顶部按钮层HTML
     * @param type
     * @param config
     */
    getHeaderBtnHTML(type: PopsSupportHeaderTitleDetailsType, config: PopsSupportHeaderTitleDetails[keyof PopsSupportHeaderTitleDetails]): string;
    /**
     * 获取底部按钮层HTML
     * @param type
     * @param config
     */
    getBottomBtnHTML(type: PopsSupportBottomBtnDetailsType, config: Omit<PopsSupportBottomBtnDetails[keyof PopsSupportBottomBtnDetails], "content">): string;
    /**
     * 获取标题style
     * @param type 弹窗类型
     * @param config 弹窗配置
     */
    getHeaderStyle(type: PopsSupportHeaderTitleDetailsType, config: PopsSupportHeaderTitleDetails[keyof PopsSupportHeaderTitleDetails]): {
        headerStyle: string;
        headerPStyle: string;
    };
    /**
     * 获取内容style
     * @param type 弹窗类型
     * @param config 弹窗配置
     */
    getContentStyle(type: PopsSupportContentDetailsType, config: PopsSupportContentDetails[keyof PopsSupportContentDetails]): {
        contentStyle: string;
        contentPStyle: string;
    };
    /**
     * 将html转换成元素
     * @param html
     */
    parseElement<T extends HTMLElement>(html: string): T;
};
