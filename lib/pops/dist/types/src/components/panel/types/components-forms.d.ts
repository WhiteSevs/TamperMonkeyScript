import type { PopsPanelCommonDetails } from "./components-common";
import type { PopsPanelFormsTotalDetails } from ".";
/**
 * pops.panel的 forms
 */
export interface PopsPanelFormsDetails extends PopsPanelCommonDetails<PopsPanelFormsDetails> {
    /**
     * （可选）className属性
     */
    className?: string;
    /**
     * （可选）自定义元素属性
     */
    attributes?: {
        [key: string]: any;
    };
    /**
     * （可选）自定义属性
     */
    props?: {
        [K in keyof HTMLElement]?: HTMLElement[K];
    };
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 是否进行折叠
     */
    isFold?: boolean;
    /**
     * 类型
     */
    type: "forms";
    /**
     * 子配置
     */
    forms: PopsPanelFormsTotalDetails[];
}
