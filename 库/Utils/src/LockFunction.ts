import { Utils } from "./Utils";

class LockFunction<K extends (...args: any[]) => any | Promise<any> | void> {
	#flag: boolean = false;
	#delayTime: number = 0;
	#callback: K;
	#context: typeof Utils;
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
		this.#callback = callback;
		if (typeof context === "number") {
			this.#delayTime = context;
			this.#context = Utils;
		} else {
			this.#delayTime = delayTime as number;
			this.#context = context;
		}
	}
	/**
	 * 判断是否被锁
	 */
	isLock() {
		return this.#flag;
	}
	/**
	 * 锁
	 */
	lock() {
		this.#flag = true;
	}
	/**
	 * 解锁
	 */
	unlock() {
		setTimeout(() => {
			this.#flag = false;
		}, this.#delayTime);
	}
	/**
	 * 执行
	 */
	async run(...args: any[]) {
		if (this.isLock()) {
			return;
		}
		this.lock();
		await this.#callback.apply(this.#context, args);
		this.unlock();
	}
}

export { LockFunction };
