import type { PopsPromptDetails } from "./types/index";

export const PopsPromptConfig = (): DeepRequired<PopsPromptDetails> => {
	return {
		title: {
			text: "默认标题",
			position: "left",
			html: false,
			style: "",
		},
		content: {
			text: "",
			select: false,
			password: false,
			row: false,
			focus: true,
			placeholder: "默认提示",
			style: "",
		},
		btn: {
			merge: false,
			mergeReverse: false,
			reverse: false,
			position: "flex-end",
			ok: {
				enable: true,
				size: void 0 as any,
				icon: void 0 as any,
				rightIcon: false,
				iconIsLoading: false,
				text: "确定",
				type: "success",
				callback(detail) {
					detail.close();
				},
			},
			cancel: {
				enable: true,
				size: void 0 as any,
				icon: void 0 as any,
				rightIcon: false,
				iconIsLoading: false,
				text: "关闭",
				type: "default",
				callback(detail) {
					detail.close();
				},
			},
			other: {
				enable: false,
				size: void 0 as any,
				icon: void 0 as any,
				rightIcon: false,
				iconIsLoading: false,
				text: "其它按钮",
				type: "default",
				callback(detail) {
					detail.close();
				},
			},
			close: {
				enable: true,
				callback(detail) {
					detail.close();
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
	};
};
