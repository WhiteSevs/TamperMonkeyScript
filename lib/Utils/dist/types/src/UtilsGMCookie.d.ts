import type { UtilsGMCookieDeleteOptions, UtilsGMCookieListOptions, UtilsGMCookieResult, UtilsGMCookieSetOptions, WindowApiOption } from "./types/UtilsGMCookie";
declare class UtilsGMCookie {
    private windowApi;
    constructor(windowApiOption?: WindowApiOption);
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
