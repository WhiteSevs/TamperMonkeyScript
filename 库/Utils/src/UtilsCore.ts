declare interface UtilsCoreOption {
	document: Document;
	window: Window;
	globalThis: typeof globalThis;
	self: typeof globalThis;
	top: Window;
}


const UtilsCoreDefaultEnv: UtilsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
	top: top as Window,
};
const UtilsCoreEnv: UtilsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
	top: top as Window,
};
const UtilsCore = {
	init(option?: UtilsCoreOption) {
		if (!option) {
			option = Object.assign({}, UtilsCoreDefaultEnv);
		}
		Object.assign(UtilsCoreEnv, option);
	},
	get document() {
		return UtilsCoreEnv.document;
	},
	get window() {
		return UtilsCoreEnv.window;
	},
	get globalThis() {
		return UtilsCoreEnv.globalThis;
	},
	get self() {
		return UtilsCoreEnv.self;
	},
	get top() {
		return UtilsCoreEnv.top;
	},
};

export { UtilsCore };
