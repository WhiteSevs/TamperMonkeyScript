export function LockFunction(callback: any, context: any, delayTime?: number): void;
export class LockFunction {
    constructor(callback: any, context: any, delayTime?: number);
    /**
     * 锁
     */
    lock: () => void;
    /**
     * 解锁
     */
    unlock: () => void;
    /**
     * 执行
     */
    run: (...args: any[]) => Promise<void>;
}
