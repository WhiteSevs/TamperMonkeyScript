const LockFunction = function (callback, context, delayTime = 0) {
	let flag = false;
	let that = this;
	context = context || this;
	/**
	 * 锁
	 */
	this.lock = function () {
		flag = true;
	};
	/**
	 * 解锁
	 */
	this.unlock = function () {
		setTimeout(() => {
			flag = false;
		}, delayTime);
	};
	/**
	 * 执行
	 */
	this.run = async function (...args) {
		if (flag) {
			return;
		}
		that.lock();
		await callback.apply(context, args);
		that.unlock();
	};
};


export {
    LockFunction
}