/**
 * 空对象
 *
 * 类似
 * {
 *  "xxx": string,
 * }
 */
type NestedObjectWithToString = {
	[key: string]: any | NestedObjectWithToString;
	toString(): any;
};

/**
 * Promise的兼容类型
 *
 * 它是返回提供的类型或Promise包裹的类型
 */
declare type IPromise<T> = Promise<T> | T;

/**
 * 提取数组中的元素类型
 */
declare type ExtractElementType<T> = T extends Array<infer U> ? U : never;

declare interface Window {
	$: any;
	jQuery: any;
	comiis_recommend_key: number;
	uid: string;
	allowrecommend: string;
	tid: number;
	username: string;
	textarea_scrollHeight: Function;
	comiis_addsmilies?: Function;
	evalscript: Function;
	comiis_delthread: Function;
	Watermark: typeof import("@lib/js-watermark/index");
	showWindow: Function;
}
