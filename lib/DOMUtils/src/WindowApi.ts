import type { WindowApiOption } from "./types/WindowApi";

export class WindowApi {
	/** 默认的配置 */
	private defaultApi: Required<WindowApiOption> = {
		document: document,
		window: window,
		globalThis: globalThis,
		self: self,
		top: top!,
	};
	/** 使用的配置 */
	private api: Required<WindowApiOption>;
	constructor(option?: WindowApiOption) {
		if (option) {
			if (option.globalThis == null) {
				option.globalThis = option.window;
			}
			if (option.self == null) {
				option.self = option.window;
			}
		}
		if (!option) {
			option = Object.assign({}, this.defaultApi);
		}
		// @ts-ignore
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
