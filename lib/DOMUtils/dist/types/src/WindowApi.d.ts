import type { WindowApiOption } from "./types/WindowApi";
export declare class WindowApi {
    /** 默认的配置 */
    private defaultApi;
    /** 使用的配置 */
    private api;
    constructor(option?: WindowApiOption);
    get document(): Document;
    get window(): Window & typeof globalThis;
    get globalThis(): typeof globalThis | Window;
    get self(): Window & typeof globalThis;
    get top(): Window;
    get setTimeout(): typeof setTimeout;
    get clearTimeout(): typeof clearTimeout;
    get setInterval(): typeof setInterval;
    get clearInterval(): typeof clearInterval;
}
