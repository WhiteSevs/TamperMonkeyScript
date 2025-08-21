/**
 * 配置类型
 */
export type WindowApiOption = {
	document: Document;
	window: Window & typeof globalThis;
	globalThis?: typeof globalThis | Window;
	self?: Window & typeof globalThis;
	top: Window;
	setTimeout: Window["setTimeout"];
	setInterval: Window["setInterval"];
	clearTimeout: Window["clearTimeout"];
	clearInterval: Window["clearInterval"];
};
