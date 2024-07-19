const PopsCoreDefaultEnv: PopsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
};
const PopsCoreEnv: PopsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
};

export interface PopsCoreOption {
	document: Document;
	window: Window;
	globalThis: typeof globalThis;
	self: typeof globalThis;
}

export const PopsCore = {
	init(option?: PopsCoreOption) {
		if (!option) {
			option = Object.assign({}, PopsCoreDefaultEnv);
		}
		Object.assign(PopsCoreEnv, option);
	},
	get document() {
		return PopsCoreEnv.document;
	},
	get window() {
		return PopsCoreEnv.window;
	},
	get globalThis() {
		return PopsCoreEnv.globalThis;
	},
	get self() {
		return PopsCoreEnv.self;
	},
};
export const OriginPrototype = {
	Object: {
		defineProperty: Object.defineProperty,
	},
};
