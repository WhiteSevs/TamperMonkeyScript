import type { PopsPanelCommonDetails } from "./components-common";
import type { PopsPanelFormsTotalDetails } from ".";
/**
 * pops.panel的 forms
 */
export interface PopsPanelFormsDetails extends PopsPanelCommonDetails<PopsPanelFormsDetails> {
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
