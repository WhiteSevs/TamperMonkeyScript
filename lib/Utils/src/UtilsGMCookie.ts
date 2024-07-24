import { Utils } from "./Utils";
import { UtilsCore } from "./UtilsCore";

declare interface UtilsGMCookieResult {
	/** 为 window.location.hostname */
	domain: string;
	expirationDate: null;
	hostOnly: true;
	httpOnly: false;
	name: string;
	path: "/";
	sameSite: "unspecified";
	secure: true;
	session: false;
	value: string;
}

declare interface UtilsGMCookieListOptions {
	/** 默认为当前的url */
	url: string;
	/** 默认为当前的域名(window.location.hostname) */
	domain: string;
	/** 需要检索的Cookie的名字 */
	name: string | RegExp;
	/** 需要检索的Cookie的路径，默认为"/" */
	path: string;
}

declare interface UtilsGMCookieSetOptions {
	/** 默认为当前的url */
	url?: string;
	/** 默认为当前的域名(window.location.hostname) */
	domain?: string;
	/** 需要检索的Cookie的名字 */
	name?: string;
	/** 需要检索的Cookie的路径，默认为"/" */
	path?: string;
	/** 值 */
	value?: string | number;
	/** 确保Cookie只在通过安全协议（如HTTPS）的情况下传输 */
	secure?: boolean;
	/** 是否防止JavaScript代码访问Cookie */
	httpOnly?: boolean;
	/**  Cookie过期时间，默认为30天 */
	expirationDate?: number;
}

declare interface UtilsGMCookieDeleteOptions {
	/** 默认为当前的url */
	url: string;
	/** 需要检索的Cookie的名字 */
	name: string;
}

class UtilsGMCookie {
	/**
	 * 获取单个cookie
	 * @param cookieName cookie名
	 */
	get(cookieName: string) {
		if (typeof cookieName !== "string") {
			throw new TypeError("Utils.GMCookie.get 参数cookieName 必须为字符串");
		}

		let cookies = UtilsCore.document.cookie.split(";");
		let findValue: UtilsGMCookieResult | undefined = void 0;
		for (const cookieItem of cookies) {
			let item = cookieItem.trim();
			let itemSplit = item.split("=");
			let itemName = itemSplit[0];
			itemSplit.splice(0, 1);
			let itemValue = decodeURIComponent(itemSplit.join(""));
			if (itemName === cookieName) {
				findValue = {
					domain: UtilsCore.globalThis.location.hostname,
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
	 * @param paramDetails 配置
	 * @param callback 获取操作后的回调
	 * + cookies object[]
	 * + error string|undefined
	 **/
	list(
		paramDetails: Partial<UtilsGMCookieListOptions>,
		callback?: (data: UtilsGMCookieResult[], error?: Error) => void
	) {
		if (paramDetails == null) {
			throw new Error("Utils.GMCookie.list 参数不能为空");
		}
		let resultData: UtilsGMCookieResult[] = [];
		try {
			let details: Partial<UtilsGMCookieListOptions> = {
				url: UtilsCore.globalThis.location.href,
				domain: UtilsCore.globalThis.location.hostname,
				name: "",
				path: "/",
			};
			details = Utils.assign(details, paramDetails);
			let cookies = UtilsCore.document.cookie.split(";");
			cookies.forEach((item) => {
				item = item.trim();
				let itemSplit = item.split("=");
				let itemName = itemSplit[0];
				itemSplit.splice(0, 1);
				let itemValue = decodeURIComponent(itemSplit.join(""));
				let nameRegexp =
					(details.name as RegExp) instanceof RegExp
						? details.name
						: new RegExp("^" + details.name, "g");
				if (itemName.match(nameRegexp as RegExp)) {
					resultData.push({
						domain: UtilsCore.globalThis.location.hostname,
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
	 * @param paramDetails 配置
	 **/
	getList(
		paramDetails: Partial<UtilsGMCookieListOptions>
	): UtilsGMCookieResult[] {
		if (paramDetails == null) {
			throw new Error("Utils.GMCookie.list 参数不能为空");
		}
		let resultData: UtilsGMCookieResult[] = [];
		let details: Partial<UtilsGMCookieListOptions> = {
			url: UtilsCore.globalThis.location.href,
			domain: UtilsCore.globalThis.location.hostname,
			name: "",
			path: "/",
		};
		details = Utils.assign(details, paramDetails);
		let cookies = UtilsCore.document.cookie.split(";");
		cookies.forEach((item) => {
			item = item.trim();
			let itemSplit = item.split("=");
			let itemName = itemSplit[0];
			itemSplit.splice(0, 1);
			let itemValue = decodeURIComponent(itemSplit.join(""));
			let nameRegexp =
				(details.name as RegExp) instanceof RegExp
					? details.name
					: new RegExp("^" + details.name, "g");
			if (itemName.match(nameRegexp as RegExp)) {
				resultData.push({
					domain: UtilsCore.globalThis.location.hostname,
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
	 * @param paramDetails 配置
	 * @param callback 设置操作后的回调(成功/失败)
	 */
	set(
		paramDetails: Partial<UtilsGMCookieSetOptions>,
		callback = (error?: Error) => {}
	) {
		try {
			let details: Partial<UtilsGMCookieSetOptions> = {
				url: UtilsCore.window.location.href,
				name: "",
				value: "",
				domain: UtilsCore.window.location.hostname,
				path: "/",
				secure: true,
				httpOnly: false,
				/**
				 * Expires in 30 days
				 */
				expirationDate: Math.floor(Date.now()) + 60 * 60 * 24 * 30,
			};
			details = Utils.assign(details, paramDetails);
			let life = details.expirationDate
				? details.expirationDate
				: Math.floor(Date.now()) + 60 * 60 * 24 * 30;
			let cookieStr =
				details.name +
				"=" +
				decodeURIComponent(details.value as string) +
				";expires=" +
				(new Date(life) as any).toGMTString() +
				"; path=/";
			UtilsCore.document.cookie = cookieStr;
			callback();
		} catch (error: any) {
			callback(error);
		}
	}
	/**
	 * 删除Cookie
	 * @param paramDetails 配置
	 * @param callback 删除操作后的回调(成功/失败)
	 */
	delete(
		paramDetails: Partial<UtilsGMCookieDeleteOptions>,
		callback = (error?: Error) => {}
	) {
		try {
			let details: Partial<UtilsGMCookieDeleteOptions> = {
				url: UtilsCore.window.location.href,
				name: "",
				// @ts-ignore
				firstPartyDomain: "",
			};
			details = Utils.assign(details, paramDetails);
			let cookieStr =
				details.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			UtilsCore.document.cookie = cookieStr;
			callback();
		} catch (error: any) {
			callback(error);
		}
	}
}

export { UtilsGMCookie };
