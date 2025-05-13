import type { PopsCommonConfig, PopsContentConfig } from "../../types/components";
/**
 * pops.loading
 */
export interface PopsLoadingDetails extends Omit<PopsCommonConfig, "width" | "height" | "position" | "beforeAppendToPageCallBack"> {
    /**
     * 父元素，默认为document.body
     */
    parent: HTMLElement;
    /**
     * 内容配置
     */
    content: Omit<PopsContentConfig["content"], "html"> & {
        /**
         * 图标
         */
        icon?: string;
    };
    /**
     * （可选）添加主CSS，默认为true，当页面中存在anim覆盖时，可能会有一些样式问题，取消添加该CSS即可解决
     */
    addIndexCSS?: boolean;
    /**
     * 为pops-anim和pops-mask设置position: absolute（需要自行设置parent的position为relative）
     *
     * 它们默认的position为fixed
     * @default false
     */
    isAbsolute?: boolean;
}
