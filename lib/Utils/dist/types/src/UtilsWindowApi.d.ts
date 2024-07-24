/**
 * 配置类型
 */
export type UtilsWindowApiOption = {
    document: Document;
    window: Window & typeof globalThis;
    globalThis: typeof globalThis | Window;
    self: Window & typeof globalThis;
    top: Window;
};
export declare class UtilsWindowApi {
    /** 默认的配置 */
    private defaultApi;
    /** 使用的配置 */
    private api;
    constructor(option?: UtilsWindowApiOption);
    get document(): Document;
    get window(): Window & typeof globalThis;
    get globalThis(): typeof globalThis | Window;
    get self(): Window & typeof globalThis;
    get top(): Window;
}
