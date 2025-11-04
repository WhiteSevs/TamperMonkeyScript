import type { PopsGeneralConfig, PopsContentConfig } from "../../../types/components";
/**
 * pops.loading
 */
export interface PopsLoadingConfig extends Omit<PopsGeneralConfig, "width" | "height" | "position" | "beforeAppendToPageCallBack"> {
    /**
     * 父元素，默认为document.body
     * @default document.body || document.documentElement
     */
    $parent?: HTMLElement;
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
     * @default true
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
