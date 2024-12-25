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
declare type IPromise<T> = T | Promise<T>;

/**
 * 提取数组中的元素类型
 */
declare type ExtractElementType<T> = T extends Array<infer U> ? U : never;

/**
 * 修复无法识别.vue文件的问题
 */
declare module "*.vue" {
	import { defineComponent } from "vue";
	const Component: ReturnType<typeof defineComponent>;
	export default Component;
}


/**
 * 全局变量-加密库
 */
declare var CryptoJS: typeof import("@lib/CryptoJS/index");
