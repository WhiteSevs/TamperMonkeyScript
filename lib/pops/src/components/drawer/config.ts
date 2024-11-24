import type { PopsDrawerDetails } from "./indexType";

export const PopsDrawerConfig = (): DeepRequired<PopsDrawerDetails> => {
	return {
		title: {
			enable: true,
			position: "center",
			text: "默认标题",
			html: false,
			style: "",
		},
		content: {
			text: "默认内容",
			html: false,
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
				type: "primary",
				callback(detail: any) {
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
				callback(detail: any) {
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
				callback(detail: any) {
					detail.close();
				},
			},
			close: {
				enable: true,
				callback(detail: any) {
					detail.close();
				},
			},
		},
		mask: {
			enable: true,
			clickEvent: {
				toClose: true,
				toHide: false,
			},
			clickCallBack: null,
		},
		useShadowRoot: true,
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
