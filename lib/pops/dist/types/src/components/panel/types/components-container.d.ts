import type { PopsPanelGeneralConfig } from "./components-common";
import type { PopsPanelViewConfig } from ".";
/**
 * pops.panel的 container
 */
export interface PopsPanelContainerConfig extends PopsPanelGeneralConfig<PopsPanelContainerConfig> {
    /**
     * 类型
     */
    type: "container";
    /**
     * 显示在左边的文字
     */
    text: string;
    /**
     * 是否进行折叠
     * @default false
     */
    isFold?: boolean;
    /**
     * 子配置
     */
    views: PopsPanelViewConfig[];
}
