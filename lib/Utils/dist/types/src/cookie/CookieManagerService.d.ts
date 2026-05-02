import type { CookieConstructOptions, CookieManagerApiName, CookieManagerDeleteOptions, CookieManagerGetOptions, CookieManagerSetOptions } from "../types/cookie";
import type { CookieStoreData } from "../types/cookie_store";
import { type GmCallbackCookie, type GMCookieInstance } from "../types/gm_cookie";
import { DocumentCookieHandler } from "./DocumentCookieHandler";
export declare class CookieManagerService {
    __defaultCookieHandler: CookieManagerApiName;
    __option: CookieConstructOptions;
    /**
     * @param apiName 强制使用Api的名称，是否使用保存的Api名称
     */
    constructor(option?: CookieConstructOptions);
    /**
     * 所有操作Cookie的函数类型集合
     */
    get totalCookieManagerApiNameList(): CookieManagerApiName[];
    /**
     * 当前操作Cookie的函数
     */
    get baseCookieHandler(): CookieManagerApiName;
    /**
     * 获取Cookie管理函数体
     */
    get cookieManager(): DocumentCookieHandler | {
        list(options: object, callback: (cookieListResult: GmCallbackCookie[]) => void): void;
        set(cookieInfo: GMCookieInstance, callback: (error?: string | null) => void): void;
        delete(cookieInfo: GMCookieInstance, callback: (error?: string | null) => void): void;
    } | {
        list(_options: object, callback: (cookieListResult: GmCallbackCookie[]) => void): void;
        set(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void): void;
        delete(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void): void;
    } | {
        list(_options: object, callback: (cookieListResult: CookieStoreData[]) => void): void;
        set(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void): void;
        delete(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void): void;
    };
    /**
     * 判断是否支持`GM_cookie`
     */
    get isSupportGM_cookie(): boolean;
    /**
     * 判断是否支持`GM.cookie`
     */
    get isSupportGM_async_cookie(): boolean;
    /**
     * 判断页面是否支持CookieStore
     */
    get isSupportCookieStore(): boolean;
    /**
     * 重载配置
     * @param option
     */
    setOptions(option: CookieConstructOptions): void;
    /**
     * 查询所有Cookie
     */
    listAll(): Promise<(CookieStoreData | GMCookieInstance)[]>;
    /**
     * 清除所有Cookie
     * @param filter 自定义过滤条件，返回`true`则不清除
     */
    clear(filter?: (cookieInfo: GmCallbackCookie | CookieStoreData) => boolean | void): Promise<{
        /**
         * 成功的数量
         */
        success: number;
        /**
         * 失败的数量
         */
        error: number;
        /**
         * 忽略的数量
         */
        ignore: number;
    }>;
    /**
     * 获取单个Cookie
     * @param cookieInfo
     */
    get(cookieInfo: string | CookieManagerGetOptions, callback?: (error: string | Error | null | undefined) => void): Promise<CookieStoreData | GMCookieInstance | null | undefined>;
    /**
     * 添加Cookie
     * @param cookieInfo
     * @param callback
     */
    add(cookieInfo: CookieManagerSetOptions, callback?: (error: string | Error | null | undefined) => void): Promise<string | Error | null | undefined>;
    /**
     * 删除Cookie
     * @param cookieInfo
     * @param callback
     */
    delete(cookieInfo: CookieManagerDeleteOptions | string, callback?: (error: string | Error | null | undefined) => void): Promise<string | Error | null | undefined>;
    /**
     * 更新Cookie
     * @param cookieInfo
     * @param callback
     */
    update(cookieInfo: CookieManagerSetOptions, callback?: (error: string | Error | null | undefined) => void): Promise<string | Error | null | undefined>;
}
