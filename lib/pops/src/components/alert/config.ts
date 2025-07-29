import type { PopsAlertDetails } from "./types";

export const PopsAlertConfig = (): DeepRequired<PopsAlertDetails> => {
	return {
		title: {
			text: "默认标题",
			position: "left",
			html: false,
			style: "",
		},
		content: {
			text: "默认内容",
			html: false,
			style: "",
		},
		btn: {
			position: "flex-end",
			ok: {
				size: void 0 as any,
				enable: true,
				icon: void 0 as any,
				rightIcon: false,
				iconIsLoading: false,
				text: "确定",
				type: "primary",
				callback: function (details: any) {
					details.close();
				},
			},
			close: {
				enable: true,
				callback: function (details: any) {
					details.close();
				},
			},
		},
		useShadowRoot: true,
		class: "",
		only: false,
		width: window.innerWidth < 550 ? "88vw" : "350px",
		height: window.innerHeight < 450 ? "70vh" : "200px",
		position: "center",
		animation: "pops-anim-fadein-zoom",
		zIndex: 10000,
		mask: {
			enable: false,
			clickEvent: {
				toClose: false,
				toHide: false,
			},
			clickCallBack: null,
		},
		drag: false,
		dragLimit: true,
		dragExtraDistance: 3,
		dragMoveCallBack() {},
		dragEndCallBack() {},
		forbiddenScroll: false,
		style: null,
		beforeAppendToPageCallBack() {},
	} as DeepRequired<PopsAlertDetails>;
};
