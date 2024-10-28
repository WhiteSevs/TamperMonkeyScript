export interface UtilsGMCookieResult {
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

export interface UtilsGMCookieListOptions {
	/** 默认为当前的url */
	url: string;
	/** 默认为当前的域名(window.location.hostname) */
	domain: string;
	/** 需要检索的Cookie的名字 */
	name: string | RegExp;
	/** 需要检索的Cookie的路径，默认为"/" */
	path: string;
}

export interface UtilsGMCookieSetOptions {
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

export interface UtilsGMCookieDeleteOptions {
	/** 默认为当前的url */
	url: string;
	/** 需要检索的Cookie的名字 */
	name: string;
}

export interface WindowApiOption {
	window: Window & typeof globalThis;
	document: Document;
}
