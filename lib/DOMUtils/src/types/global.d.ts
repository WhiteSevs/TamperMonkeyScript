export type ParseHTMLReturnType<T1, T2> = T1 extends true
	? T2 extends true
		? Document
		: HTMLElement
	: HTMLElement;

export type DOMUtilsTargetElementType =
	| HTMLElement
	| string
	| NodeList
	| HTMLElement[];
