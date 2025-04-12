import { QmsgOption } from "./Qmsg";
import { QmsgConfig } from "./QmsgConfig";
import { QmsgInstanceStorage } from "./QmsgInstanceStorage";
import { QmsgMsg } from "./QmsgInstance";
import {
	clearInterval,
	clearTimeout,
	setInterval,
	setTimeout,
} from "worker-timers";

export interface QmsgItemInfo {
	config: string;
	instance: QmsgMsg;
	uuid: string;
}

export const QmsgUtils = {
	/**
	 * 生成带插件名的名称
	 * @param args
	 */
	getNameSpacify(...args: string[]): string {
		let result = QmsgConfig.NAMESPACE;
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
	mergeArgs(content: any = "", config?: object): QmsgOption {
		let opts = {} as QmsgOption;
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
	 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
	 * @param option 配置项
	 */
	judgeReMsg(option: QmsgOption): QmsgMsg {
		option = option || {};
		let optionString = JSON.stringify(option);
		/* 寻找已生成的实例是否存在配置相同的 */
		let findQmsgItemInfo = QmsgInstanceStorage.QmsgList.find((item) => {
			return item.config === optionString;
		});
		let QmsgInstance = findQmsgItemInfo?.instance;
		if (QmsgInstance == null) {
			/* 不存在，创建个新的 */
			let uuid = QmsgUtils.getUUID();
			let QmsgItemInfo = <QmsgItemInfo>{
				uuid: uuid,
				config: optionString,
				instance: new QmsgMsg(option, uuid),
			};
			QmsgInstanceStorage.QmsgList.push(QmsgItemInfo);
			let QmsgListLength = QmsgInstanceStorage.QmsgList.length;
			let maxNums = QmsgItemInfo.instance.getSetting().maxNums;
			/**
			 * 关闭多余的消息
			 */
			if (QmsgListLength > maxNums) {
				for (let index = 0; index < QmsgListLength - maxNums; index++) {
					let item = QmsgInstanceStorage.QmsgList[index];
					item && item.instance.getSetting().autoClose && item.instance.close();
				}
			}
			findQmsgItemInfo = QmsgItemInfo;
			QmsgInstance = QmsgItemInfo.instance;
		} else {
			if (!QmsgInstance.getRepeatNum()) {
				QmsgInstance.setRepeatNum(2);
			} else {
				if (QmsgInstance.getRepeatNum() >= 99) {
					/* pass */
				} else {
					QmsgInstance.setRepeatNumIncreasing();
				}
			}
			QmsgInstance.setMsgCount();
		}
		if (QmsgInstance) {
			QmsgInstance.$Qmsg.setAttribute(
				"data-count",
				QmsgInstance?.getRepeatNum().toString()
			);
		} else {
			throw new TypeError("QmsgInstance is null");
		}

		return QmsgInstance;
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
		let __obj__ = Object.assign({}, obj);
		Object.keys(__obj__).forEach((keyName) => {
			let objValue = (__obj__ as any)[keyName];
			Object.defineProperty(__obj__, keyName, {
				get() {
					let findIndex = other_objs.findIndex((other_obj) => {
						// 判断其他对象中是否有该属性
						return other_obj!.hasOwnProperty.call(other_obj, keyName);
					});
					if (findIndex !== -1) {
						return (other_objs as any)[findIndex][keyName];
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
				throw new TypeError("trustedTypes is not defined");
			}
		}
	},
};
