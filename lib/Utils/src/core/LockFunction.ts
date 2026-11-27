export class LockFunction<K extends (...args: any[]) => any | Promise<any> | void> {
  #flag: boolean = false;
  #delayTime: number = 0;
  #callback: K;
  #timeId: number | undefined = void 0;
  lock: () => void;
  unlock: () => void;
  run: <R = any>(...args: any[]) => Promise<R>;
  idleRun: <R = any>(...args: any[]) => Promise<R>;
  isLock: () => boolean;
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
  constructor(callback: K, context?: any, delayTime?: number) {
    const that = this;
    this.#callback = callback;
    if (typeof context === "number") {
      this.#delayTime = context;
    } else {
      this.#delayTime = delayTime as number;
    }
    /**
     * 锁
     */
    this.lock = function () {
      that.#flag = true;
      clearTimeout(that.#timeId);
    };
    /**
     * 解锁
     */
    this.unlock = function () {
      that.#timeId = setTimeout(() => {
        that.#flag = false;
      }, that.#delayTime);
    };
    /**
     * 判断是否被锁
     */
    this.isLock = function () {
      return that.#flag;
    };
    /**
     * 执行
     */
    this.run = async function (...args: any[]) {
      if (that.isLock()) {
        return;
      }
      that.lock();
      const result = await that.#callback.apply(this, args);
      that.unlock();
      return result;
    };
    /**
     * （空闲）执行
     */
    this.idleRun = async function (...args: any[]) {
      if (that.isLock()) {
        return;
      }
      const result2 = await new Promise<any>((resolve) => {
        if (typeof requestIdleCallback == "function") {
          requestIdleCallback(() => {
            const result = that.run(...args);
            resolve(result);
          });
        } else {
          setTimeout(() => {
            const result = that.run(...args);
            resolve(result);
          }, 0);
        }
      });
      return result2;
    };
  }
}
