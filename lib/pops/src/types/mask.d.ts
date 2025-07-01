import type { PopsAlertDetails } from "../components/alert/types";
import type { PopsDrawerDetails } from "../components/drawer/types";
import type { PopsFolderDetails } from "../components/folder/types";
import type { PopsIframeDetails } from "../components/iframe/types";
import type { PopsLoadingDetails } from "../components/loading/types";
import type { PopsPanelDetails } from "../components/panel/types";
import type { PopsPromptDetails } from "../components/prompt/types/index";

/**
 * 遮罩层配置
 */
export interface PopsMaskDetails {
	/**
	 * 是否启用遮罩层，默认false
	 * @default false
	 */
	enable?: boolean;
	clickEvent?: {
		/**
		 * 点击遮罩层是否触发关闭事件
		 * @default false
		 */
		toClose?: boolean;
		/**
		 * 点击遮罩层是否触发隐藏事件
		 * @default false
		 */
		toHide?: boolean;
	};
	/**
	 * 遮罩层自定义的点击事件
	 * @param originalRun 当toClose为true，它是关闭弹窗，当toHide为true，它是隐藏弹窗
	 * @param config 配置信息
	 */
	clickCallBack?:
		| ((
				originalRun: () => void | Promise<void>,
				config:
					| PopsAlertDetails
					| PopsDrawerDetails
					| PopsIframeDetails
					| PopsPromptDetails
					| PopsFolderDetails
					| PopsLoadingDetails
					| PopsPanelDetails
		  ) => void)
		| undefined
		| null;
}
