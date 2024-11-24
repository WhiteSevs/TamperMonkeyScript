import type { PopsToolTipDetails } from "./indexType";

export const PopsTooltipConfig = (): DeepRequired<PopsToolTipDetails> => {
	// @ts-ignore
	return {
		useShadowRoot: true,
		target: null as any,
		content: "默认文字",
		position: "top",
		className: "",
		isFixed: false,
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
		delayCloseTime: 100,
		showArrow: true,
		arrowDistance: 12.5,
		otherDistance: 0,
		style: "",
		beforeAppendToPageCallBack() {},
	} as Required<PopsToolTipDetails>;
};
