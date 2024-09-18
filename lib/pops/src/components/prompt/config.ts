import type { PopsPromptDetails } from "./indexType";

export const PopsPromptConfig = (): Required<PopsPromptDetails> => {
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

				size: void 0,

				icon: void 0,
				rightIcon: false,
				iconIsLoading: false,
				text: "确定",
				type: "success",
				callback(event) {
					console.log(event);
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
					console.log(event);
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
					console.log(event);
					event.close();
				},
			},
			close: {
				enable: true,
				callback(event) {
					console.log(event);
					event.close();
				},
			},
		},
		class: "",
		only: false,
		width: "350px",
		height: "200px",
		position: "center",
		animation: "pops-anim-fadein-zoom",
		zIndex: 10000,
		mask: {
			enable: false,
			clickEvent: {
				toClose: false,
				toHide: false,
			},

			clickCallBack: void 0,
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
