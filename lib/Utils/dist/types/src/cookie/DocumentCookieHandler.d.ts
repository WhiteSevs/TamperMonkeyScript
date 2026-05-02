import type { UtilsDocuementCookieHandlerListOptions, UtilsDocumentCookieHandlerDeleteOptions, UtilsDocumentCookieHandlerResult, UtilsDocumentCookieHandlerSetOptions, WindowApiOption } from "../types/cookie_document";
export declare class DocumentCookieHandler {
    private windowApi;
    constructor(windowApiOption?: WindowApiOption);
    /**
     * 获取Cookie分组
     */
    private getCookiesList;
    /**
     * 获取单个cookie
     * @param cookieName cookie名
     */
    get(cookieName: string): UtilsDocumentCookieHandlerResult | undefined;
    /**
     *  获取多组Cookie
     * @param option 配置
     * @param callback 获取操作后的回调
     * + cookies object[]
     * + error string|undefined
     **/
    list(option: UtilsDocuementCookieHandlerListOptions | object): {
        cookies: UtilsDocumentCookieHandlerResult[];
        error?: Error;
    };
    list(option: UtilsDocuementCookieHandlerListOptions | object, callback?: (data: UtilsDocumentCookieHandlerResult[], error?: Error) => void): void;
    /**
     * 获取多组Cookie
     * @param option 配置
     **/
    getList(option: UtilsDocuementCookieHandlerListOptions | object): UtilsDocumentCookieHandlerResult[];
    /**
     * 设置Cookie
     * @param option 配置
     * @param callback 设置操作后的回调(成功/失败)
     */
    set(option: UtilsDocumentCookieHandlerSetOptions, callback?: (error?: Error) => void): void;
    /**
     * 删除Cookie
     * @param option 配置
     * @param callback 删除操作后的回调(成功/失败)
     */
    delete(option: UtilsDocumentCookieHandlerDeleteOptions, callback?: (error?: Error) => void): void;
    /**
     * 解析cookie字符串，按`;`分割
     *
     * 例如：document.cookie
     * @param cookieStr
     */
    parseCookie(cookieStr: string): {
        key: string;
        value: string;
    }[];
}
