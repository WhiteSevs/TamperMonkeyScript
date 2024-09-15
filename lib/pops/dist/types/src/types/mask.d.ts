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
	clickCallBack?: (
		originalRun: () => void,
		config:
			| PopsAlertDetails
			| PopsDrawerDetails
			| PopsIframeDetails
			| PopsPromptDetails
			| PopsFolderDetails
			| PopsLoadingDetails
			| PopsPanelDetails
	) => void;
}
