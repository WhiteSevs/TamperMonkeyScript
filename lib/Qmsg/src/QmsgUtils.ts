import { QmsgDefaultConfig } from "./QmsgDefaultConfig";
import {
	clearInterval,
	clearTimeout,
	setInterval,
	setTimeout,
} from "worker-timers";
import type { QmsgConfig } from "./QmsgConfig";

export const QmsgUtils = {
	/**
	 * 生成带插件名的名称
	 * @param args
	 */
	getNameSpacify(...args: string[]): string {
		let result = QmsgDefaultConfig.NAMESPACE;
		for (let index = 0; index < args.length; ++index) {
			result += "-" + args[index];
		}
		return result;
	},
	/**
	 * 判断字符是否是数字
	 * @param text 需要判断的字符串
	 */
	isNumber(text: string): boolean {
		let isNumberPattern = /^\d+$/;
		return isNumberPattern.test(text);
	},
	/**
	 * 获取唯一性的UUID
	 */
	getUUID(): string {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (value) {
				let randValue = (Math.random() * 16) | 0,
					newValue = value == "x" ? randValue : (randValue & 0x3) | 0x8;
				return newValue.toString(16);
			}
		);
	},
	/**
	 * 合并参数为配置信息，用于创建Msg实例
	 * @param content 文本内容
	 * @param config 配置
	 */
	mergeArgs(content: any = "", config?: object): QmsgConfig {
		let opts = {} as QmsgConfig;
		if (arguments.length === 0) {
			return opts;
		}
		if (config != null) {
			// 传入了2个参数
			// string object
			// object object
			opts.content = content;
			if (typeof config === "object" && config != null) {
				return Object.assign(opts, config);
			}
		} else {
			// 传入了1个参数
			// object
			// string
			if (typeof content === "object" && content != null) {
				return Object.assign(opts, content);
			} else {
				opts.content = content;
			}
		}
		return opts;
	},
	/**
	 * 转换为动态对象
	 * @param obj 需要配置的对象
	 * @param other_obj 获取的其它对象
	 */
	toDynamicObject<T1 extends any, T2 extends any[]>(
		obj: T1,
		...other_objs: T2
	): T1 & (T2 extends Array<infer U> ? U : never) {
		let __obj__ = Object.assign({}, obj ?? {});
		Object.keys(__obj__).forEach((keyName) => {
			// @ts-ignore
			let objValue = __obj__[keyName];
			Object.defineProperty(__obj__, keyName, {
				get() {
					let findIndex = other_objs.findIndex((other_obj) => {
						// 判断其他对象中是否有该属性
						return (
							typeof other_obj === "object" &&
							other_obj != null &&
							other_obj.hasOwnProperty.call(other_obj, keyName)
						);
					});
					if (findIndex !== -1) {
						// @ts-ignore
						let other_objValue = other_objs[findIndex][keyName];
						return other_objValue;
					} else {
						return objValue;
					}
				},
				set(newValue) {
					objValue = newValue;
				},
			});
		});
		return __obj__ as any;
	},
	/**
	 * 自动使用 Worker 执行 setTimeout
	 */
	setTimeout(callback: Function, timeout: number) {
		try {
			return setTimeout(callback, timeout);
		} catch (error) {
			return globalThis.setTimeout(callback, timeout);
		}
	},
	/**
	 * 配合 QmsgUtils.setTimeout 使用
	 */
	clearTimeout(timeId: number | undefined) {
		try {
			if (timeId != null) {
				clearTimeout(timeId);
			}
		} catch (error) {
		} finally {
			globalThis.clearTimeout(timeId);
		}
	},
	/**
	 * 自动使用 Worker 执行 setInterval
	 */
	setInterval(callback: Function, timeout: number) {
		try {
			return setInterval(callback, timeout);
		} catch (error) {
			return globalThis.setInterval(callback, timeout);
		}
	},
	/**
	 * 配合 QmsgUtils.setInterval 使用
	 */
	clearInterval(timeId: number | undefined) {
		try {
			if (timeId != null) {
				clearInterval(timeId);
			}
		} catch (error) {
		} finally {
			globalThis.clearInterval(timeId);
		}
	},
	/**
	 * 设置安全的html
	 */
	setSafeHTML($el: Element, text: string) {
		// 创建 TrustedHTML 策略（需 CSP 允许）
		try {
			$el.innerHTML = text;
		} catch (error) {
			// @ts-ignore
			if (globalThis.trustedTypes) {
				// @ts-ignore
				const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
					createHTML: (html: string) => html,
				});
				$el.innerHTML = policy.createHTML(text);
			} else {
				throw new Error("QmsgUtils trustedTypes is not defined");
			}
		}
	},
};
