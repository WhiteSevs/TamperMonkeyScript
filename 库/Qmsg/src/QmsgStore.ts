import { QmsgOption } from "./Qmsg";
import { QmsgAnimation } from "./QmsgAnimation";
import { QmsgUtils } from "./QmsgUtils";

export const QmsgStore = {
	/** 声明插件名称 */
	PLUGIN_NAME: "qmsg",
	/** 命名空间，用于css和事件 */
	NAMESPACE: "qmsg",
	/** 实例配置的固定的默认值 */
	INS_DEFAULT: {},
	/** 固定的默认值 */
	DEFAULT: <Required<QmsgOption>>{
		animation: true,
		autoClose: true,
		content: "",
		html: false,
		isHTML: false,
		position: "top",
		showClose: false,
		maxNums: 5,
		onClose: null,
		showIcon: true,
		showMoreContent: false,
		showReverse: false,
		timeout: 2500,
		type: "info",
		zIndex: 50000,
		style: "",
		customClass: "",
		isLimitWidth: false,
		limitWidthNum: 200,
		limitWidthWrap: "no-wrap",
	},
	/**
	 * 是否支持动画属性
	 */
	CAN_ANIMATION: Boolean(
		QmsgAnimation.getStyleAnimationName(document.createElement("div")) != null
	),
};
