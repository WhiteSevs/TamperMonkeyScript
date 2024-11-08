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
 */
declare type IPromise<T> = Promise<T> | T;

/**
 * 提取数组中的元素类型
 */
declare type ExtractElementType<T> = T extends Array<infer U> ? U : never;

/**
 * 全局变量-加密库
 */
declare var CryptoJS: typeof import("@lib/CryptoJS/index");
