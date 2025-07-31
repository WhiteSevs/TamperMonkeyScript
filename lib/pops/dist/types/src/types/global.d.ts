declare module "*.css" {
	const content: string;
	export default content;
}
declare module "*.svg" {
	const content: string;
	export default content;
}

declare var unsafeWindow: Window & typeof globalThis;

declare type DeepRequired<T> = T extends Function
	? T
	: T extends object
		? T extends Node
			? T
			: {
					[K in keyof T]-?: DeepRequired<T[K]>;
				}
		: T;
