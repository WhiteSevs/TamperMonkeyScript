import type { PopsLoadingDetails } from "./indexType";

export const PopsLoadingConfig = (): Required<PopsLoadingDetails> => {
	return {
		parent: document.body,
		content: {
			text: "加载中...",
			icon: "loading",
			style: "",
		},
		class: "",
		only: false,
		zIndex: 10000,
		mask: {
			enable: false,
			clickEvent: {
				toClose: false,
				toHide: false,
			},

			clickCallBack: void 0,
		},
		animation: "pops-anim-fadein-zoom",
		forbiddenScroll: false,

		style: null,
		addIndexCSS: true,
	};
};
