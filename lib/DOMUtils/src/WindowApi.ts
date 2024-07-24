/**
 * 配置类型
 */
export type UtilsWindowApiOption = {
	document: Document;
	window: Window & typeof globalThis;
	globalThis: typeof globalThis | Window;
	self: Window & typeof globalThis;
	top: Window;
};

export class WindowApi {
	/** 默认的配置 */
	private defaultApi: UtilsWindowApiOption = {
		document: document,
		window: window,
		globalThis: globalThis,
		self: self,
		top: top!,
	};
	/** 使用的配置 */
	private api: UtilsWindowApiOption;
	constructor(option?: UtilsWindowApiOption) {
		if (!option) {
			option = Object.assign({}, this.defaultApi);
		}
		this.api = Object.assign({}, option);
	}
	get document() {
		return this.api.document;
	}
	get window() {
		return this.api.window;
	}
	get globalThis() {
		return this.api.globalThis;
	}
	get self() {
		return this.api.self;
	}
	get top() {
		return this.api.top;
	}
}
