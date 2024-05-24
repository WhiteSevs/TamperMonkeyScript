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
declare class UtilsGMCookie {
    /**
     *  获取Cookie
     * @param paramDetails
     * @param callback
     * + cookies object[]
     * + error string|undefined
     **/
    list(paramDetails?: Partial<UtilsGMCookieListResult>, callback?: (resultData: UtilsGMCookieListResult[], error?: Error) => void): void;
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
