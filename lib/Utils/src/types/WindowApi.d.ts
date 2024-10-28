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
