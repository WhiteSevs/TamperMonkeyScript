type ParseHTMLReturnType<T1, T2> = T1 extends true
	? T2 extends true
		? Document
		: HTMLElement
	: HTMLElement;

declare interface DOMUtilsCoreOption {
	document: Document;
	window: Window;
	globalThis: typeof globalThis;
	self: typeof globalThis;
}
