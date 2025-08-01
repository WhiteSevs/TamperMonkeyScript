import type { UtilsTryCatchConfig, UtilsTryCatchType } from "./types/TryCatch";

export const TryCatch = function (...args: any) {
	/* 定义变量和函数 */
	let callbackFunction = null;
	let context = null;
	let handleError = (error: Error) => {};
	let defaultDetails = {
		log: true,
	};

	const TryCatchCore = {
		/**
		 *
		 * @param paramDetails 配置
		 * @returns
		 */
		config(paramDetails: UtilsTryCatchConfig) {
			defaultDetails = Object.assign(defaultDetails, paramDetails);
			return TryCatchCore;
		},
		/**
		 * 处理错误
		 * @param handler
		 */
		error(handler: ((...args: any[]) => any) | string | Function) {
			handleError = handler as (error: Error) => void;
			return TryCatchCore;
		},
		/**
		 * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
		 * @param callback 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
		 * @param __context__ 待执行函数的作用域，用于apply指定
		 * @returns 如果函数有返回值，则返回该返回值；否则返回 tryCatchObj 函数以支持链式调用。
		 * @throws {Error} 如果传入参数不符合要求，则会抛出相应类型的错误。
		 */
		run<A extends any[], R>(
			callback: ((...args: A) => R) | string | Function,
			__context__?: any
		): UtilsTryCatchType {
			callbackFunction = callback;
			context = __context__ || this;
			let result = executeTryCatch(callbackFunction, handleError, context);
			return result !== void 0
				? result
				: (TryCatchCore as any as UtilsTryCatchType);
		},
	};

	/**
	 * 执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
	 * @param callback - 待执行函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
	 * @param handleErrorFunc - 错误处理函数，可以是 function 或者 string 类型。如果是 string 类型，则会被当做代码进行执行。
	 * @param funcThis - 待执行函数的作用域，用于apply指定
	 * @returns 如果函数有返回值，则返回该返回值；否则返回 undefined。
	 */
	function executeTryCatch<A extends any[], R>(
		callback: string | ((...args: A) => R) | Function,
		handleErrorFunc: string | ((...args: any[]) => any),
		funcThis?: any
	) {
		let result = void 0;
		try {
			if (typeof callback === "string") {
				result = new Function(callback).apply(funcThis, args);
			} else {
				result = (callback as Function).apply(funcThis, args);
			}
		} catch (error) {
			if (defaultDetails.log) {
				callback = callback as Function;
				console.log(
					`%c ${callback?.name ? callback?.name : callback + "出现错误"} `,
					"color: #f20000"
				);
				console.log(`%c 错误原因：${error}`, "color: #f20000");
				console.trace(callback);
			}
			if (handleErrorFunc) {
				if (typeof handleErrorFunc === "string") {
					result = new Function(handleErrorFunc).apply(funcThis, [
						...args,
						error,
					]);
				} else {
					result = handleErrorFunc.apply(funcThis, [...args, error]);
				}
			}
		}
		return result;
	}

	return TryCatchCore;
};
