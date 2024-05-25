/** Utils.LockFunction */
declare interface UtilsLockFunction {
	/**
	 * @param callback 需要执行的函数
	 * @param delayTime （可选）延迟xx毫秒后解锁，默认：0
	 */
	new <K extends (...args: any[]) => any | Promise<any> | void>(
		callback: K,
		delayTime?: number
	): {
		/**
		 * 上锁
		 */
		lock: () => void;
		/**
		 * 解锁
		 */
		unlock: () => void;
		/**
		 * 执行函数
		 */
		run: () => ReturnType<K>;
	};
	/**
	 * @param callback 需要执行的函数
	 * @param context （可选）函数作用域，默认：this(Utils)
	 * @param delayTime （可选）延迟xx毫秒后解锁，默认：0
	 */
	new <K extends (...args: any[]) => any | Promise<any>>(
		callback: K,
		context?: UtilsNestedObjectWithToString,
		delayTime?: number
	): {
		/**
		 * 上锁
		 */
		lock: () => void;
		/**
		 * 解锁
		 */
		unlock: () => void;
		/**
		 * 执行函数
		 */
		run: () => ReturnType<K>;
	};
}
