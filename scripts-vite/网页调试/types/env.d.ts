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



declare type ToolVersionInfo = {
	eruda: {
		version: string;
		plugin: {
			"eruda-monitor": string;
			"eruda-features": string;
			"eruda-timing": string;
			"eruda-code": string;
			"eruda-benchmark": string;
			"eruda-orientation": string;
			"eruda-vue": string;
			"eruda-touches": string;
			"eruda-outline-plugin": string;
			"eruda-pixel": string;
		};
	};
	vconsole: {
		version: string;
		plugin: {
			"vue-vconsole-devtools": string;
		};
	};
	"@huolala-tech/page-spy-browser": {
		version: string;
	};
	[key: string]: any;
};


declare const initEruda: Function;
declare const initPageSpy: any;
declare const initVConsole: any;
declare const erudaMonitor: any;
declare const erudaFeatures: any;
declare const erudaTiming: any;
declare const erudaCode: any;
declare const erudaBenchmark: any;
declare const erudaGeolocation: any;
declare const erudaOrientation: any;
declare const erudaTouches: any;
declare const erudaOutlinePlugin: any;
declare const erudaPixel: any;
declare const erudaVue: any;
declare interface Window {
	Eruda: any;
	VConsole: any;
	vConsole: any;
	vueVconsoleDevtools: any;
	$pageSpy: any;
}
