export declare interface UtilsCoreOption {
	document: Document;
	window: Window | typeof globalThis;
	globalThis: Window | typeof globalThis;
	self: Window | typeof globalThis;
	top: Window | typeof globalThis;
}

const UtilsCoreDefaultEnv: UtilsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
	top: top!,
};
const UtilsCoreEnv: UtilsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
	top: top!,
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
