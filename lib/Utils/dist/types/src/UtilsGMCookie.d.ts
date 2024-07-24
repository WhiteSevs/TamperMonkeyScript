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
declare class UtilsGMCookie {
    /**
     * 获取单个cookie
     * @param cookieName cookie名
     */
    get(cookieName: string): UtilsGMCookieResult | undefined;
    /**
     *  获取多组Cookie
     * @param paramDetails 配置
     * @param callback 获取操作后的回调
     * + cookies object[]
     * + error string|undefined
     **/
    list(paramDetails: Partial<UtilsGMCookieListOptions>, callback?: (data: UtilsGMCookieResult[], error?: Error) => void): void;
    /**
     *  获取多组Cookie
     * @param paramDetails 配置
     **/
    getList(paramDetails: Partial<UtilsGMCookieListOptions>): UtilsGMCookieResult[];
    /**
     * 设置Cookie
     * @param paramDetails 配置
     * @param callback 设置操作后的回调(成功/失败)
     */
    set(paramDetails: Partial<UtilsGMCookieSetOptions>, callback?: (error?: Error) => void): void;
    /**
     * 删除Cookie
     * @param paramDetails 配置
     * @param callback 删除操作后的回调(成功/失败)
     */
    delete(paramDetails: Partial<UtilsGMCookieDeleteOptions>, callback?: (error?: Error) => void): void;
}
export { UtilsGMCookie };
