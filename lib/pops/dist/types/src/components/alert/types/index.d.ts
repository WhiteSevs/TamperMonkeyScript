import type { PopsTitleConfig, PopsContentConfig, PopsDragConfig, PopsGeneralConfig, PopsButtonConfig } from "../../../types/components";
import type { PopsGlobalButtonConfig, PopsButtonConfigAnyType } from "../../../types/button";
/**
 * pops.alert
 */
export interface PopsAlertConfig extends PopsTitleConfig, PopsContentConfig, PopsDragConfig, PopsGeneralConfig {
    /**
     * 按钮配置
     */
    btn?: Partial<PopsButtonConfig["btn"]> & {
        /**
         * 确定按钮
         */
        ok?: Partial<PopsGlobalButtonConfig | PopsButtonConfigAnyType>;
    };
}
