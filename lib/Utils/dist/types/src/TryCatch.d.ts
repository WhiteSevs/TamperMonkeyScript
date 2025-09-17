import type { UtilsTryCatchConfig, UtilsTryCatchType } from "./types/TryCatch";
export declare const TryCatch: (...args: any) => {
    /**
     *
     * @param paramDetails 配置
     * @returns
     */
    config(paramDetails: UtilsTryCatchConfig): /*elided*/ any;
    /**
     * 处理错误
     * @param handler
     */
    error(handler: ((...args: any[]) => any) | string | ((...args: any[]) => any)): /*elided*/ any;
    /**
     * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @param callback 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
     * @param __context__ 待执行函数的作用域，用于apply指定
     * @returns 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
     * @throws {Error} 如果传入参数不符合要求，则会抛出相应类型的错误。
     */
    run<A extends any[], R>(callback: ((...args: A) => R) | string | ((...args: any[]) => any), __context__?: any): UtilsTryCatchType;
};
