/**
 * 
 * @param  {...any} args 
 * @returns 
 */
const TryCatch = function (...args) {
	/* 定义变量和函数 */
	let callbackFunction = null;
	let context = null;
	let handleError = null;
	let defaultDetails = {
		log: true,
	};
	/**
	 * @function tryCatchObj
	 * @description 空函数，用于链式调用。
	 */
	function tryCatchObj() {}

	/**
	 * 配置
	 * @param {{
	 * log: boolean
	 * }} paramDetails
	 */
	tryCatchObj.config = function (paramDetails) {
		defaultDetails = Utils.assign(defaultDetails, paramDetails);
		return tryCatchObj;
	};
	/**
	 * 设置错误处理函数。
	 * @param {function|string} handler 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
	 * @returns 返回 tryCatchObj 函数。
	 */
	tryCatchObj.error = function (handler) {
		handleError = handler;
		return tryCatchObj;
	};

	/**
	 * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
	 * @param {function|string} callback 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
	 * @param {object|null} [__context__] 待执行函数的作用域，用于apply指定
	 * @returns 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
	 * @throws {Error} 如果传入参数不符合要求，则会抛出相应类型的错误。
	 */
	tryCatchObj.run = function (callback, __context__) {
		callbackFunction = callback;
		context = __context__;
		let result = executeTryCatch(callbackFunction, handleError, context);
		return result !== void 0 ? result : tryCatchObj;
	};

	/**
	 * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
	 * @param {function|string} callback - 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
	 * @param {function|string|null} handleErrorFunc - 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
	 * @param {object|null} funcThis - 待执行函数的作用域，用于apply指定
	 * @returns {any|undefined} - 如果函数有返回值，则返回该返回值；否则返回 undefined。
	 */
	function executeTryCatch(callback, handleErrorFunc, funcThis) {
		let result = void 0;
		try {
			if (typeof callback === "string") {
				(function () {
					eval(callback);
				}).apply(funcThis, args);
			} else {
				result = callback.apply(funcThis, args);
			}
		} catch (error) {
			if (defaultDetails.log) {
				console.log(
					`%c ${callback?.name ? callback?.name : callback + "出现错误"} `,
					"color: #f20000"
				);
				console.log(`%c 错误原因：${error}`, "color: #f20000");
				console.trace(callback);
			}
			if (handleErrorFunc) {
				if (typeof handleErrorFunc === "string") {
					result = function () {
						return eval(handleErrorFunc);
					}.apply(funcThis, [...args, error]);
				} else {
					result = handleErrorFunc.apply(funcThis, [...args, error]);
				}
			}
		}
		return result;
	}

	// 返回 tryCatchObj 函数
	return tryCatchObj;
};


export {
    TryCatch
}