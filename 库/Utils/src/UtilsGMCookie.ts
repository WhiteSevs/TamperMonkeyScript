import { Utils } from "./Utils";

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
	/**  */
	secure?: boolean;
	/**  */
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

		let cookies = document.cookie.split(";");
		let findValue: UtilsGMCookieResult | undefined = void 0;
		for (const cookieItem of cookies) {
			let item = cookieItem.trim();
			let itemSplit = item.split("=");
			let itemName = itemSplit[0];
			itemSplit.splice(0, 1);
			let itemValue = decodeURIComponent(itemSplit.join(""));
			if (itemName === cookieName) {
				findValue = {
					domain: globalThis.location.hostname,
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
	 * @param paramDetails
	 * @param callback
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
				url: globalThis.location.href,
				domain: globalThis.location.hostname,
				name: "",
				path: "/",
			};
			details = Utils.assign(details, paramDetails);
			let cookies = document.cookie.split(";");
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
						domain: globalThis.location.hostname,
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
	 * @param paramDetails
	 **/
	getList(
		paramDetails: Partial<UtilsGMCookieListOptions>
	): UtilsGMCookieResult[] {
		if (paramDetails == null) {
			throw new Error("Utils.GMCookie.list 参数不能为空");
		}
		let resultData: UtilsGMCookieResult[] = [];
		let details: Partial<UtilsGMCookieListOptions> = {
			url: globalThis.location.href,
			domain: globalThis.location.hostname,
			name: "",
			path: "/",
		};
		details = Utils.assign(details, paramDetails);
		let cookies = document.cookie.split(";");
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
					domain: globalThis.location.hostname,
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
	 * @param paramDetails
	 * @param callback
	 */
	set(paramDetails = {}, callback = (error?: Error) => {}) {
		try {
			let details: Partial<UtilsGMCookieSetOptions> = {
				url: window.location.href,
				name: "",
				value: "",
				domain: window.location.hostname,
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
			document.cookie = cookieStr;
			callback();
		} catch (error) {
			callback(error as Error);
		}
	}
	/**
	 * 删除Cookie
	 * @param paramDetails
	 * @param callback
	 */
	delete(paramDetails = {}, callback = (error?: Error) => {}) {
		try {
			let details: Partial<UtilsGMCookieDeleteOptions> = {
				url: window.location.href,
				name: "",
				// @ts-ignore
				firstPartyDomain: "",
			};
			details = Utils.assign(details, paramDetails);
			let cookieStr =
				details.name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
			document.cookie = cookieStr;
			callback();
		} catch (error) {
			callback(error as Error);
		}
	}
}

export { UtilsGMCookie };
