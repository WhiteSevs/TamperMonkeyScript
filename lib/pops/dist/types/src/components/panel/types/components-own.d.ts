import type { PopsPanelGeneralConfig } from "./components-common";
/**
 * pops.panel的 own
 * 自定义的
 */
export interface PopsPanelOwnConfig extends PopsPanelGeneralConfig<PopsPanelOwnConfig> {
    /**
     * 组件类型
     */
    type: "own";
    /**
     * 生成<li>标签元素
     */
    createLIElement($li: HTMLLIElement): HTMLLIElement;
}
