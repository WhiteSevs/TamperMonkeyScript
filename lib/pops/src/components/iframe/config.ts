import type { PopsIframeDetails } from "./indexType";

export const PopsIframeConfig = (): DeepRequired<PopsIframeDetails> => {
	return {
		title: {
			position: "center",
			text: "",
			html: false,
			style: "",
		},
		loading: {
			enable: true,
			icon: true,
			text: "",
		},
		class: "",
		url: window.location.href,
		only: false,
		zIndex: 10000,
		mask: {
			enable: false,
			clickEvent: {
				toClose: false,
				toHide: false,
			},
			clickCallBack: null,
		},
		animation: "pops-anim-fadein-zoom",
		position: "center",
		drag: true,
		dragLimit: true,
		dragExtraDistance: 3,
		dragMoveCallBack() {},
		dragEndCallBack() {},
		width: "300px",
		height: "250px",
		topRightButton: "min|max|mise|close",
		sandbox: false,
		forbiddenScroll: false,
		loadEndCallBack() {},
		btn: {
			min: {
				callback() {},
			},
			max: {
				callback() {},
			},
			mise: {
				callback() {},
			},
			close: {
				callback() {},
			},
		},

		style: null,
		beforeAppendToPageCallBack() {},
	};
};
