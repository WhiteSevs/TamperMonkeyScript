const DOMUtilsCoreDefaultEnv: DOMUtilsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
};
const DOMUtilsCoreEnv: DOMUtilsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
};
const DOMUtilsCore = {
	init(option?: DOMUtilsCoreOption) {
		if (!option) {
			option = Object.assign({}, DOMUtilsCoreDefaultEnv);
		}
		Object.assign(DOMUtilsCoreEnv, option);
	},
	get document() {
		return DOMUtilsCoreEnv.document;
	},
	get window() {
		return DOMUtilsCoreEnv.window;
	},
	get globalThis() {
		return DOMUtilsCoreEnv.globalThis;
	},
	get self() {
		return DOMUtilsCoreEnv.self;
	},
};

export { DOMUtilsCore };
