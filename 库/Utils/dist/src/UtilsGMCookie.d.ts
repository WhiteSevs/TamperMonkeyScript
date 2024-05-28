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
declare class UtilsGMCookie {
    /**
     * 获取单个cookie
     * @param cookieName cookie名
     */
    get(cookieName: string): UtilsGMCookieResult | undefined;
    /**
     *  获取多组Cookie
     * @param paramDetails
     * @param callback
     * + cookies object[]
     * + error string|undefined
     **/
    list(paramDetails: Partial<UtilsGMCookieListOptions>, callback?: (data: UtilsGMCookieResult[], error?: Error) => void): void;
    /**
     *  获取多组Cookie
     * @param paramDetails
     **/
    getList(paramDetails: Partial<UtilsGMCookieListOptions>): UtilsGMCookieResult[];
    /**
     * 设置Cookie
     * @param paramDetails
     * @param callback
     */
    set(paramDetails?: {}, callback?: (error?: Error) => void): void;
    /**
     * 删除Cookie
     * @param paramDetails
     * @param callback
     */
    delete(paramDetails?: {}, callback?: (error?: Error) => void): void;
}
export { UtilsGMCookie };
