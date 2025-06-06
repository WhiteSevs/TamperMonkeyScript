import { CommonUtil } from "./CommonUtil";
import type {
	UtilsGMCookieDeleteOptions,
	UtilsGMCookieListOptions,
	UtilsGMCookieResult,
	UtilsGMCookieSetOptions,
	WindowApiOption,
} from "./types/UtilsGMCookie";

export class UtilsGMCookie {
	private windowApi = {
		window: window,
		document: document,
	};
	constructor(windowApiOption?: WindowApiOption) {
		if (windowApiOption) {
			this.windowApi = Object.assign({}, windowApiOption);
		}
	}
	/**
	 * 获取Cookie分组
	 */
	private getCookiesList() {
		if (this.windowApi.document.cookie.trim() === "") {
			return [];
		}
		return this.windowApi.document.cookie.split(";");
	}
	/**
	 * 获取单个cookie
	 * @param cookieName cookie名
	 */
	get(cookieName: string) {
		if (typeof cookieName !== "string") {
			throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");
		}
		let cookies = this.getCookiesList();
		let findValue: UtilsGMCookieResult | undefined = void 0;
		for (const cookieItem of cookies) {
			let item = cookieItem.trim();
			let itemSplit = item.split("=");
			let itemName = itemSplit[0];
			itemSplit.splice(0, 1);
			let itemValue = decodeURIComponent(itemSplit.join(""));
			if (itemName === cookieName) {
				findValue = {
					domain: this.windowApi.window.location.hostname,
					expirationDate: null,
					hostOnly: true,
					httpOnly: false,
					name: cookieName,
					path: "/",
					sameSite: "unspecified",
					secure: true,
					session: false,
					value: itemValue,
				};
				break;
			}
		}
		return findValue;
	}
	/**
	 *  获取多组Cookie
	 * @param option 配置
	 * @param callback 获取操作后的回调
	 * + cookies object[]
	 * + error string|undefined
	 **/
	list(
		option: UtilsGMCookieListOptions | {},
		callback?: (data: UtilsGMCookieResult[], error?: Error) => void
	) {
		if (option == null) {
			throw new Error("Utils.GMCookie.list 参数不能为空");
		}
		let resultData: UtilsGMCookieResult[] = [];
		try {
			let defaultOption: Required<UtilsGMCookieListOptions> = {
				url: this.windowApi.window.location.href,
				domain: this.windowApi.window.location.hostname,
				name: "",
				path: "/",
			};
			defaultOption = CommonUtil.assign(defaultOption, option);
			let cookies = this.getCookiesList();
			cookies.forEach((item) => {
				item = item.trim();
				let itemSplit = item.split("=");
				let itemName = itemSplit[0];
				itemSplit.splice(0, 1);
				let itemValue = decodeURIComponent(itemSplit.join(""));
				let nameRegexp =
					(defaultOption.name as RegExp) instanceof RegExp
						? defaultOption.name
						: new RegExp("^" + defaultOption.name, "g");
				if (itemName.match(nameRegexp as RegExp)) {
					resultData.push({
						domain: this.windowApi.window.location.hostname,
						expirationDate: null,
						hostOnly: true,
						httpOnly: false,
						name: itemName,
						path: "/",
						sameSite: "unspecified",
						secure: true,
						session: false,
						value: itemValue,
					});
				}
			});
			if (typeof callback === "function") {
				callback(resultData);
			}
		} catch (error) {
			if (typeof callback === "function") {
				callback(resultData, error as Error);
			}
		}
	}
	/**
	 *  获取多组Cookie
	 * @param option 配置
	 **/
	getList(option: UtilsGMCookieListOptions | {}): UtilsGMCookieResult[] {
		if (option == null) {
			throw new Error("Utils.GMCookie.list 参数不能为空");
		}
		let resultData: UtilsGMCookieResult[] = [];
		let defaultOption: Required<UtilsGMCookieListOptions> = {
			url: this.windowApi.window.location.href,
			domain: this.windowApi.window.location.hostname,
			name: "",
			path: "/",
		};
		defaultOption = CommonUtil.assign(defaultOption, option);
		let cookies = this.getCookiesList();
		cookies.forEach((item) => {
			item = item.trim();
			let itemSplit = item.split("=");
			let itemName = itemSplit[0];
			itemSplit.splice(0, 1);
			let itemValue = decodeURIComponent(itemSplit.join(""));
			let nameRegexp =
				(defaultOption.name as RegExp) instanceof RegExp
					? defaultOption.name
					: new RegExp("^" + defaultOption.name, "g");
			if (itemName.match(nameRegexp as RegExp)) {
				resultData.push({
					domain: this.windowApi.window.location.hostname,
					expirationDate: null,
					hostOnly: true,
					httpOnly: false,
					name: itemName,
					path: "/",
					sameSite: "unspecified",
					secure: true,
					session: false,
					value: itemValue,
				});
			}
		});
		return resultData;
	}
	/**
	 * 设置Cookie
	 * @param option 配置
	 * @param callback 设置操作后的回调(成功/失败)
	 */
	set(option: UtilsGMCookieSetOptions, callback?: (error?: Error) => void) {
		let errorInfo;
		try {
			let defaultOption: Required<UtilsGMCookieSetOptions> = {
				url: this.windowApi.window.location.href,
				name: "",
				value: "",
				domain: "",
				path: "/",
				secure: true,
				httpOnly: false,
				/**
				 * Expires in 30 days
				 */
				expirationDate: Math.floor(Date.now()) + 60 * 60 * 24 * 30,
			};
			defaultOption = CommonUtil.assign(defaultOption, option);
			let life = defaultOption.expirationDate
				? defaultOption.expirationDate
				: Math.floor(Date.now()) + 60 * 60 * 24 * 30;
			let cookieStr =
				defaultOption.name +
				"=" +
				decodeURIComponent(defaultOption.value as string) +
				";expires=" +
				(new Date(life) as any).toGMTString() +
				"; path=/";
			if (CommonUtil.isNull(defaultOption.domain)) {
				cookieStr += "; domain=" + defaultOption.domain;
			}
			this.windowApi.document.cookie = cookieStr;
		} catch (error: any) {
			errorInfo = error;
		} finally {
			if (typeof callback === "function") {
				callback(errorInfo);
			}
		}
	}
	/**
	 * 删除Cookie
	 * @param option 配置
	 * @param callback 删除操作后的回调(成功/失败)
	 */
	delete(
		option: UtilsGMCookieDeleteOptions,
		callback?: (error?: Error) => void
	) {
		let errorInfo;
		try {
			let defaultOption: Required<UtilsGMCookieDeleteOptions> = {
				url: this.windowApi.window.location.href,
				name: "",
				path: "/",
				firstPartyDomain: "",
			};
			defaultOption = CommonUtil.assign(defaultOption, option);
			let cookieStr = `${defaultOption.name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${defaultOption.path}`;
			if (CommonUtil.isNull(defaultOption.firstPartyDomain)) {
				cookieStr += `; domain=${defaultOption.firstPartyDomain};`;
			}
			this.windowApi.document.cookie = cookieStr;
		} catch (error: any) {
			errorInfo = error;
		} finally {
			if (typeof callback === "function") {
				callback(errorInfo);
			}
		}
	}
	/**
	 * 解析cookie字符串
	 * 例如：document.cookie
	 * @param cookieStr
	 */
	parseCookie(cookieStr: string) {
		if (cookieStr.trim() === "") {
			return [];
		}
		let cookies = cookieStr.split(";");
		let result: { key: string; value: string }[] = [];
		for (const cookieItem of cookies) {
			let item = cookieItem.trim();
			let itemSplit = item.split("=");
			let itemName = itemSplit[0];
			itemSplit.splice(0, 1);
			let itemValue = decodeURIComponent(itemSplit.join(""));
			result.push({
				key: itemName,
				value: itemValue,
			});
		}
		return result;
	}
}
