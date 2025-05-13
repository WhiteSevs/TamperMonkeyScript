import type { PopsLoadingDetails } from "./indexType";

export const PopsLoadingConfig = (): DeepRequired<PopsLoadingDetails> => {
	return {
		parent: document.body,
		content: {
			text: "加载中...",
			icon: "loading",
			style: "",
		},
		useShadowRoot: true,
		class: "",
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
		forbiddenScroll: false,
		isAbsolute: false,
		style: null,
		addIndexCSS: true,
	};
};
