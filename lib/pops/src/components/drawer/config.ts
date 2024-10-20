import type { PopsDrawerDetails } from "./indexType";

export const PopsDrawerConfig = (): Required<PopsDrawerDetails> => {
	return {
		title: {
			enable: true,
			position: "center",
			text: "默认标题",
			html: false,
		},
		content: {
			text: "默认内容",
			html: false,
		},
		btn: {
			position: "flex-end",
			ok: {
				enable: true,
				size: void 0,
				icon: void 0,
				rightIcon: false,
				iconIsLoading: false,
				text: "确定",
				type: "primary",
				callback(event) {
					event.close();
				},
			},
			cancel: {
				enable: true,

				size: void 0,

				icon: void 0,
				rightIcon: false,
				iconIsLoading: false,
				text: "关闭",
				type: "default",
				callback(event) {
					event.close();
				},
			},
			other: {
				enable: false,

				size: void 0,

				icon: void 0,
				rightIcon: false,
				iconIsLoading: false,
				text: "其它按钮",
				type: "default",
				callback(event) {
					event.close();
				},
			},
			close: {
				enable: true,
				callback(event) {
					event.close();
				},
			},
		},
		mask: {
			enable: true,
			clickEvent: {
				toClose: true,
				toHide: false,
			},

			clickCallBack: void 0,
		},
		class: "",
		zIndex: 10000,
		only: false,
		direction: "right",
		size: "30%",
		lockScroll: false,
		closeOnPressEscape: true,
		openDelay: 0,
		closeDelay: 0,
		borderRadius: 0,

		style: null,
		beforeAppendToPageCallBack() {},
		forbiddenScroll: false,
	};
};
