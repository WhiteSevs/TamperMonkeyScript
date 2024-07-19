import type {
	PopsTitleConfig,
	PopsDragConfig,
	PopsCommonConfig,
	PopsMoreButtonConfig,
} from "../../types/components";

/**
 * pops.prompt
 */
export interface PopsPromptDetails
	extends PopsTitleConfig,
		PopsDragConfig,
		PopsMoreButtonConfig<{
			text: string;
		}>,
		PopsCommonConfig {
	/**
	 * 内容配置
	 */
	content: {
		/**
		 * 内容文字
		 */
		text: string;
		/**
		 * 是否是密码
		 */
		password?: boolean;
		/**
		 * 是否支持多行输入
		 */
		row?: boolean;
		/**
		 * 是否自动获取焦点
		 */
		focus?: boolean;
		/**
		 * 输入框内的提示文字
		 */
		placeholder?: string;
		/**
		 * （可选）文字的自定义CSS
		 */
		style?: string;
	};
}
