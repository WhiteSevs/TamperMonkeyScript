declare class LockFunction<K extends (...args: any[]) => any | Promise<any> | void> {
    #private;
    /**
     * @param callback 需要执行的函数
     * @param delayTime （可选）延迟xx毫秒后解锁，默认：0
     */
    constructor(callback: K, delayTime?: number);
    /**
     * @param callback 需要执行的函数
     * @param context （可选）函数作用域，默认：this(Utils)
     * @param delayTime （可选）延迟xx毫秒后解锁，默认：0
     */
    constructor(callback: K, context?: any, delayTime?: number);
    /**
     * 判断是否被锁
     */
    isLock(): boolean;
    /**
     * 锁
     */
    lock(): void;
    /**
     * 解锁
     */
    unlock(): void;
    /**
     * 执行
     */
    run(...args: any[]): Promise<void>;
}
export { LockFunction };
