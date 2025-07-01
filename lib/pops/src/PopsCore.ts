interface PopsCoreOption {
	document: Document;
	window: Window;
	globalThis: typeof globalThis;
	self: typeof globalThis;
}

const PopsCoreDefaultEnv: PopsCoreOption = {
	document: document,
	window: window,
	globalThis: globalThis,
	self: self,
};

const PopsCoreEnv: PopsCoreOption = Object.assign({}, PopsCoreDefaultEnv);

const PopsCore = {
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

const OriginPrototype = {
	Object: {
		defineProperty: Object.defineProperty,
	},
};

export { PopsCoreOption, PopsCore, OriginPrototype };
