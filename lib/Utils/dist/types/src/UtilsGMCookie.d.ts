import type { UtilsGMCookieDeleteOptions, UtilsGMCookieListOptions, UtilsGMCookieResult, UtilsGMCookieSetOptions, WindowApiOption } from "./types/UtilsGMCookie";
export declare class UtilsGMCookie {
    private windowApi;
    constructor(windowApiOption?: WindowApiOption);
    /**
     * 获取单个cookie
     * @param cookieName cookie名
     */
    get(cookieName: string): UtilsGMCookieResult | undefined;
    /**
     *  获取多组Cookie
     * @param option 配置
     * @param callback 获取操作后的回调
     * + cookies object[]
     * + error string|undefined
     **/
    list(option: UtilsGMCookieListOptions | {}, callback?: (data: UtilsGMCookieResult[], error?: Error) => void): void;
    /**
     *  获取多组Cookie
     * @param option 配置
     **/
    getList(option: UtilsGMCookieListOptions | {}): UtilsGMCookieResult[];
    /**
     * 设置Cookie
     * @param option 配置
     * @param callback 设置操作后的回调(成功/失败)
     */
    set(option: UtilsGMCookieSetOptions, callback?: (error?: Error) => void): void;
    /**
     * 删除Cookie
     * @param option 配置
     * @param callback 删除操作后的回调(成功/失败)
     */
    delete(option: UtilsGMCookieDeleteOptions, callback?: (error?: Error) => void): void;
    /**
     * 解析cookie字符串
     * 例如：document.cookie
     * @param cookieStr
     */
    parseCookie(cookieStr: string): {
        key: string;
        value: string;
    }[];
}
