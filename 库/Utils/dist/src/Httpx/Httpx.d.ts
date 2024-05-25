export function Httpx(__xmlHttpRequest__: any): void;
export class Httpx {
    constructor(__xmlHttpRequest__: any);
    /**
     * 覆盖当前配置
     * @param {HttpxDetailsConfig} details
     */
    config: (details?: HttpxDetailsConfig) => void;
    /**
     * 修改xmlHttpRequest
     * @param {Function} httpRequest 网络请求函数
     */
    setXMLHttpRequest: (httpRequest: Function) => void;
    /**
     * GET 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    get: (...args: (HttpxDetails | string)[]) => Promise<HttpxAsyncResult<any>>;
    /**
     * POST 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    post: (...args: (HttpxDetails | string)[]) => Promise<HttpxAsyncResult<any>>;
    /**
     * HEAD 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    head: (...args: (HttpxDetails | string)[]) => Promise<HttpxAsyncResult<any>>;
    /**
     * OPTIONS 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    options: (...args: (HttpxDetails | string)[]) => Promise<HttpxAsyncResult<any>>;
    /**
     * DELETE 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    delete: (...args: (HttpxDetails | string)[]) => Promise<HttpxAsyncResult<any>>;
    /**
     * PUT 请求
     * @param {...HttpxDetails|string} args
     * @returns {Promise< HttpxAsyncResult >}
     */
    put: (...args: (HttpxDetails | string)[]) => Promise<HttpxAsyncResult<any>>;
}
