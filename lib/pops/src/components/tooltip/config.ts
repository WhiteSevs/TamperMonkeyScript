import type { PopsToolTipDetails } from "./indexType";

export const PopsTooltipConfig = (): Required<PopsToolTipDetails> => {
	return {
		// @ts-ignore
		target: null,
		content: "默认文字",

		position: "top",
		className: "",
		alwaysShow: false,
		triggerShowEventName: "mouseenter touchstart",
		triggerCloseEventName: "mouseleave touchend",
		zIndex: 10000,
		only: false,
		eventOption: {
			passive: false,
			capture: true,
			once: false,
		},
		showBeforeCallBack() {},
		showAfterCallBack() {},
		closeBeforeCallBack() {},
		closeAfterCallBack() {},
		arrowDistance: 12.5,
		otherDistance: 0,

		style: "",
		beforeAppendToPageCallBack() {},
	};
};
