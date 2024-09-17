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
