import type { HttpxHookErrorData, HttpxRequestOption, HttpxResponse, HttpxResponseData, HttpxPromise, HttpxInitOption } from "./types/Httpx";
declare class Httpx {
    #private;
    private GM_Api;
    private HttpxRequestHook;
    private HttpxResponseHook;
    private HttpxRequestOption;
    private HttpxCallBack;
    private HttpxRequest;
    /**
     * 实例化
     * @param option 初始化配置
     */
    constructor(option?: Partial<HttpxInitOption>);
    /**
     * 覆盖当前配置
     * @param option
     */
    config(option?: Partial<HttpxInitOption>): void;
    /**
     * 拦截器
     */
    interceptors: {
        /**
         * 请求拦截器
         */
        request: {
            context: Httpx;
            /**
             * 添加拦截器
             * @param fn 设置的请求前回调函数，如果返回配置，则使用返回的配置，如果返回null|undefined，则阻止请求
             */
            use(fn: <T extends Required<HttpxRequestOption>>(details: T) => void | T | Promise<void | T>): string | undefined;
            /**
             * 移除拦截器
             * @param id 通过use返回的id
             */
            eject(id: string): boolean;
            /**
             * 移除所有拦截器
             */
            ejectAll(): void;
        };
        /**
         * 响应拦截器
         */
        response: {
            context: Httpx;
            /**
             * 添加拦截器
             * @param successFn 设置的响应后回调函数，如果返回响应，则使用返回的响应，如果返回null|undefined，则阻止响应
             * + 2xx 范围内的状态码都会触发该函数
             * @param errorFn 设置的响应后回调函数，如果返回响应，则使用返回的响应，如果返回null|undefined，则阻止响应
             * + 超出 2xx 范围的状态码都会触发该函数
             */
            use(successFn?: <T extends HttpxResponseData<HttpxRequestOption>>(response: T, details: HttpxRequestOption) => void | T, errorFn?: <T extends HttpxHookErrorData>(data: T) => void | T | Promise<void | T>): string | undefined;
            /**
             * 移除拦截器
             * @param id 通过use返回的id
             */
            eject(id: string): boolean;
            /**
             * 移除所有拦截器
             */
            ejectAll(): void;
        };
    };
    /**
     * 修改xmlHttpRequest
     * @param httpRequest 网络请求函数
     */
    setXMLHttpRequest(httpRequest: Function): void;
    /**
     * GET 请求
     * @param url 网址
     */
    get<T extends HttpxRequestOption>(url: string): HttpxPromise<HttpxResponse<T>>;
    /**
     * GET 请求
     * @param details 配置
     */
    get<T extends HttpxRequestOption>(details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * GET 请求
     * @param url 网址
     * @param details 配置
     */
    get<T extends HttpxRequestOption>(url: string, details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * POST 请求
     * @param details 配置
     */
    post<T extends HttpxRequestOption>(details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * POST 请求
     * @param url 网址
     */
    post<T extends HttpxRequestOption>(url: string): HttpxPromise<HttpxResponse<T>>;
    /**
     * POST 请求
     * @param url 网址
     * @param details 配置
     */
    post<T extends HttpxRequestOption>(url: string, details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * HEAD 请求
     * @param details 配置
     */
    head<T extends HttpxRequestOption>(details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * HEAD 请求
     * @param url 网址
     */
    head<T extends HttpxRequestOption>(url: string): HttpxPromise<HttpxResponse<T>>;
    /**
     * HEAD 请求
     * @param url 网址
     * @param details 配置
     */
    head<T extends HttpxRequestOption>(url: string, details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * OPTIONS 请求
     * @param details 配置
     */
    options<T extends HttpxRequestOption>(details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * OPTIONS 请求
     * @param url 网址
     */
    options<T extends HttpxRequestOption>(url: string): HttpxPromise<HttpxResponse<T>>;
    /**
     * OPTIONS 请求
     * @param url 网址
     * @param details 配置
     */
    options<T extends HttpxRequestOption>(url: string, details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * DELETE 请求
     * @param details 配置
     */
    delete<T extends HttpxRequestOption>(details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * DELETE 请求
     * @param url 网址
     */
    delete<T extends HttpxRequestOption>(url: string): HttpxPromise<HttpxResponse<T>>;
    /**
     * DELETE 请求
     * @param url 网址
     * @param details 配置
     */
    delete<T extends HttpxRequestOption>(url: string, details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * PUT 请求
     * @param details 配置
     */
    put<T extends HttpxRequestOption>(details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * PUT 请求
     * @param url 网址
     */
    put<T extends HttpxRequestOption>(url: string): HttpxPromise<HttpxResponse<T>>;
    /**
     * PUT 请求
     * @param url 网址
     * @param details 配置
     */
    put<T extends HttpxRequestOption>(url: string, details: T): HttpxPromise<HttpxResponse<T>>;
    /**
     * 发送请求
     * @param details 配置
     * @param beforeRequestOption 处理请求前的配置
     */
    request<T extends HttpxRequestOption>(details: T, beforeRequestOption?: (option: Required<T>) => void): HttpxPromise<HttpxResponse<T>>;
}
export { Httpx };
