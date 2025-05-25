import type { PopsTitleConfig, PopsContentConfig, PopsCommonConfig, PopsMoreButtonConfig } from "../../types/components";
/**
 * pops.drawer
 */
export interface PopsDrawerDetails extends PopsContentConfig, PopsMoreButtonConfig, Omit<PopsCommonConfig, "width" | "height" | "position" | "animation"> {
    /**
     * 标题
     */
    title?: Partial<PopsTitleConfig["title"]> & {
        /**
         * 是否启用
         * @default true
         */
        enable: boolean;
    };
    /**
     * 打开的方向
     * @default "right"
     */
    direction?: "top" | "bottom" | "left" | "right";
    /**
     * 窗体的大小; 当使用 number 类型时; 以像素为单位，默认为30%
     * @default "30%"
     */
    size?: string | number;
    /**
     * 是否在 Drawer 出现时将 body 滚动锁定，默认为false
     * @default false
     */
    lockScroll?: boolean;
    /**
     * 是否可以通过按下 ESC 关闭 Drawer，默认为true
     * @default true'
     */
    closeOnPressEscape?: boolean;
    /**
     * 打开的延时时间，单位毫秒，默认为0
     * @default 0
     */
    openDelay?: number;
    /**
     * 关闭的延时时间，单位毫秒，默认为0
     * @default 0
     */
    closeDelay?: number;
    /**
     * border-radius，根据direction自动适应，默认为5
     * @default 5
     */
    borderRadius?: number;
}
