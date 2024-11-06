/**
 * 配置类型
 */
export type WindowApiOption = {
	document: Document;
	window: Window & typeof globalThis;
	globalThis?: typeof globalThis | Window;
	self?: Window & typeof globalThis;
	top: Window;
};
