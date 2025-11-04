import type { PopsTitleConfig, PopsDragConfig, PopsGeneralConfig } from "../../../types/components";
import type { PopsEventConfig } from "../../../types/event";
/**
 * pops.iframe的按钮点击事件回调的配置参数
 */
export type PopsIframeClickEventConfig = PopsEventConfig & {
    /**
     * iframe元素
     */
    $iframe: HTMLIFrameElement;
};
/**
 * pops.iframe
 */
export interface PopsIframeConfig extends PopsTitleConfig, PopsDragConfig, PopsGeneralConfig {
    /**
     * 加载配置
     */
    loading: {
        /**
         * 是否启用加载中的loading
         */
        enable: boolean;
        /**
         * 是否启用loading图标
         */
        icon: boolean;
        /**
         * 文字
         */
        text: string;
    };
    /**
     * 按钮配置
     */
    btn: {
        /**
         * 最小化
         */
        min: {
            /**
             * 点击的回调函数
             */
            callback: (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
        };
        /**
         * 最大化
         */
        max: {
            /**
             * 点击的回调函数
             */
            callback: (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
        };
        /**
         * 窗口化
         */
        mise: {
            /**
             * 点击的回调函数
             */
            callback: (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
        };
        /**
         * 关闭
         */
        close: {
            /**
             * 点击的回调函数
             */
            callback: (eventConfig: PopsIframeClickEventConfig, event: MouseEvent | PointerEvent) => void;
        };
    };
    /**
     * 加载的地址，默认为window.location.href
     * @default window.location.href
     */
    url?: string;
    /**
     * 右上角按钮顺序：最小化、最大化、窗口化、关闭
     * @default "min|max|mise|close"
     */
    topRightButton: string;
    /**
     * 是否启用沙箱，默认false
     * @default false
     */
    sandbox?: boolean;
    /**
     * 加载完毕的回调
     */
    loadEndCallBack?: (eventConfig: PopsIframeClickEventConfig) => void;
}
