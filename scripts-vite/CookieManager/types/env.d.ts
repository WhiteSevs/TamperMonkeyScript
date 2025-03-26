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

declare interface GMCookieInstance {
	domain: string;
	/**
	 * 秒级时间戳
	 */
	expirationDate?: number | null;
	firstPartyDomain?: string;
	partitionKey?: {
		topLevelSite?: string;
	};
	hostOnly: boolean;
	httpOnly: boolean;
	name: string;
	path: string;
	sameSite: string;
	secure: boolean;
	session: boolean;
	value: string;
}

declare interface CookieStoreData {
	/**
	 * 记录 cookie 域名的字符串。
	 */
	domain: string;
	/**
	 * Unix 时间戳（以毫秒为单位表示），记录 cookie 的到期日期。
	 */
	expires: number;
	/**
	 * 记录 cookie 名称的字符串。
	 */
	name: string;
	/**
	 * 一个布尔值，默认为 false。将其设置为 true 指定要删除的 cookie 将是分区 cookie。
	 */
	partitioned: boolean;
	/**
	 * 记录 cookie 路径的字符串。
	 */
	path: string;
	sameSite: string;
	/**
	 * 一个布尔值，表示 cookie 是否仅在安全上下文中使用（true）或（false）。
	 */
	secure: boolean;
	/**
	 * 记录 cookie 的值的字符串。
	 */
	value: string;
}
declare interface Window {
	cookieStore: {
		delete(name: string): Promise<undefined>;
		delete(options: {
			name: string;
			domain?: string;
			path?: string;
			partitioned?: boolean;
		}): Promise<undefined>;
		get(name: string): Promise<CookieStoreData>;
		get(options: { name: string; url?: string }): Promise<CookieStoreData>;
		getAll(name?: string): Promise<CookieStoreData[]>;
		getAll(options?: {
			name: string;
			url?: string;
		}): Promise<CookieStoreData[]>;
		set(name: string, value: string): Promise<undefined>;
		set(options: {
			domain?: string;
			expires?: number;
			name: string;
			partitioned?: boolean;
			path?: string;
			sameSite?: string;
			value: string;
		}): Promise<undefined>;
		onchange(event: Event): void;
		addChangeListener(
			eventName: "change",
			listener: (event: Event) => void
		): void;
	};
}
