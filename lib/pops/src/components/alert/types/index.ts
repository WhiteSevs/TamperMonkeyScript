import type {
	PopsTitleConfig,
	PopsContentConfig,
	PopsDragConfig,
	PopsCommonConfig,
	PopsButtonConfig,
} from "../../../types/components";
import type {
	PopsButtonDetails,
	PopsButtonDetailsAnyType,
} from "../../../types/button";

/**
 * pops.alert
 */
export interface PopsAlertDetails
	extends PopsTitleConfig,
		PopsContentConfig,
		PopsDragConfig,
		PopsCommonConfig {
	/**
	 * 按钮配置
	 */
	btn?: Partial<PopsButtonConfig["btn"]> & {
		/**
		 * 确定按钮
		 */
		ok?: Partial<PopsButtonDetails | PopsButtonDetailsAnyType>;
	};
}
