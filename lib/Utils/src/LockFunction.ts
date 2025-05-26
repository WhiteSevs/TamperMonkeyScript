import { Utils } from "./Utils";

class LockFunction<K extends (...args: any[]) => any | Promise<any> | void> {
	#flag: boolean = false;
	#delayTime: number = 0;
	#callback: K;
	#context: typeof Utils;
	lock: () => void;
	unlock: () => void;
	run: (...args: any[]) => Promise<void>;
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
		let that = this;
		this.#callback = callback;
		if (typeof context === "number") {
			this.#delayTime = context;
			this.#context = Utils;
		} else {
			this.#delayTime = delayTime as number;
			this.#context = context;
		}
		/**
		 * 锁
		 */
		this.lock = function () {
			that.#flag = true;
		};
		/**
		 * 解锁
		 */
		this.unlock = function () {
			Utils.workerSetTimeout(() => {
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
			await that.#callback.apply(that.#context, args);
			that.unlock();
		};
	}
}

export { LockFunction };
