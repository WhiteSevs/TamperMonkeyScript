import { Utils } from "./Utils";

declare interface UtilsGMCookieListResult {
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
	name: string;
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
	 *  获取Cookie
	 * @param paramDetails
	 * @param callback
	 * + cookies object[]
	 * + error string|undefined
	 **/
	list(
		paramDetails: Partial<UtilsGMCookieListResult> = {},
		callback = (resultData: UtilsGMCookieListResult[], error?: Error) => {}
	) {
		let resultData: UtilsGMCookieListResult[] = [];
		try {
			let details: Partial<UtilsGMCookieListResult> = {
				// @ts-ignore
				url: globalThis.location.href,
				domain: globalThis.location.hostname,
				name: "",
				path: "/",
			};
			details = Utils.assign(details, paramDetails);
			let cookies = document.cookie.split(";");
			cookies.forEach((item) => {
				item = item.trimStart();
				let itemName = item.split("=")[0];
				let itemValue = item.replace(new RegExp("^" + itemName + "="), "");
				let nameRegexp =
					(details.name as any) instanceof RegExp
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
					return;
				}
			});
			callback(resultData);
		} catch (error) {
			callback(resultData, error as Error);
		}
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
