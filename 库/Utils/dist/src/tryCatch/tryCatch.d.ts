/**
 *
 * @param  {...any} args
 * @returns
 */
export function TryCatch(...args: any[]): {
    (): void;
    /**
     * 配置
     * @param {{
     * log: boolean
     * }} paramDetails
     */
    config(paramDetails: {
        log: boolean;
    }): any;
    /**
     * 设置错误处理函数。
     * @param {function|string} handler 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @returns 返回 tryCatchObj 函数。
     */
    error(handler: Function | string): any;
    /**
     * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @param {function|string} callback 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param {object|null} [__context__] 待执行函数的作用域，用于apply指定
     * @returns 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
     * @throws {Error} 如果传入参数不符合要求，则会抛出相应类型的错误。
     */
    run(callback: Function | string, __context__?: object | null | undefined): any;
};
