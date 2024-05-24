declare var unsafeWindow: Window & typeof globalThis;

type JSTypeMap = {
	string: string;
	number: number;
	boolean: boolean;
	object: object;
	symbol: symbol;
	bigint: bigint;
	undefined: undefined;
	null: null;
};

type JSTypeNames = keyof JSTypeMap;

type ArgsType<T extends JSTypeNames[]> = {
	[I in keyof T]: JSTypeMap[T[I]];
};

/**
 * 空对象
 *
 * 类似
 * {
 *  "xxx": string,
 * }
 */
declare interface UtilsNestedObjectWithToString<V extends any> {
	[key: string]: V | NestedObjectWithToString<V>;
	toString(): string;
}
declare interface AnyObject {
	[key: string]: any | AnyObject;
	toString(): string;
}

declare interface Vue2Context extends AnyObject {
	_isVue: true;
	$options: UtilsNestedObjectWithToString;
	$parent: Vue2Context;
	$root: Vue2Context;
	$children: Vue2Context[];
	$vnode: UtilsNestedObjectWithToString;
	$slots: UtilsNestedObjectWithToString;
	$scopedSlots: UtilsNestedObjectWithToString;
	$attrs: UtilsNestedObjectWithToString;
	$listeners: UtilsNestedObjectWithToString;
	$store: UtilsNestedObjectWithToString;
	$watch: (
		key: string | string[],
		handler: (this: any, newVal: any, oldVal: any) => void,
		options?: {
			immediate?: boolean;
			deep?: boolean;
		}
	) => void;
	$el: Element;
}
