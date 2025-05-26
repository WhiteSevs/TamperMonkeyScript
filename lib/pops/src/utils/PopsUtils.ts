import { PopsCore } from "../Core";
import type { PopsUtilsOwnObject } from "../types/main";
import { popsDOMUtils } from "./PopsDOMUtils";
import {
	clearInterval as WorkerClearInterval,
	clearTimeout as WorkerClearTimeout,
	setInterval as WorkerSetInterval,
	setTimeout as WorkerSetTimeout,
} from "worker-timers";
import AnyTouch from "any-touch";

class PopsUtils {
	/**
	 * 判断是否是window，例如window、self、globalThis
	 * @param target
	 */
	isWin(target: any) {
		if (typeof target !== "object") {
			return false;
		}
		if (target instanceof Node) {
			return false;
		}
		if (target === globalThis) {
			return true;
		}
		if (target === window) {
			return true;
		}
		if (target === self) {
			return true;
		}
		if (target === PopsCore.globalThis) {
			return true;
		}
		if (target === PopsCore.window) {
			return true;
		}
		if (target === PopsCore.self) {
			return true;
		}
		if (
			typeof (unsafeWindow as any) !== "undefined" &&
			target === (unsafeWindow as any)
		) {
			return true;
		}
		if (target?.Math?.toString() !== "[object Math]") {
			return false;
		}
		return true;
	}
	/**
	 * 判断对象是否是元素
	 * @param target
	 * @returns
	 * + true 是元素
	 * + false 不是元素
	 * @example
	 * Utils.isDOM(document.querySelector("a"))
	 * > true
	 */
	isDOM(target: any): boolean;
	isDOM(target: any): boolean {
		return target instanceof Node;
	}
	/**
	 * 删除对象上的属性
	 * @param target
	 * @param propName
	 */
	delete(target: any, propName: any) {
		if (typeof Reflect === "object" && Reflect.deleteProperty) {
			Reflect.deleteProperty(target, propName);
		} else {
			delete target[propName];
		}
	}
	/** 
     * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
     * @param target 目标数据
     * @param source 源数据
     * @param isAdd 是否可以追加键，默认false
     * @example
     * Utils.assign({"1":1,"2":{"3":3}}, {"2":{"3":4}});
     * > 
     * {
            "1": 1,
            "2": {
                "3": 4
            }
        }
     */
	assign<T1, T2 extends object, T3 extends boolean>(
		target: T1,
		source: T2,
		isAdd?: T3
	): T3 extends true ? T1 & T2 : T1;
	assign(target = {}, source = {}, isAdd = false) {
		let UtilsContext = this;
		if (source == null) {
			return target;
		}
		if (target == null) {
			target = {};
		}
		if (Array.isArray(source)) {
			let canTraverse = source.filter((item) => {
				return typeof item === "object";
			});
			if (!canTraverse.length) {
				return source;
			}
		}
		if (isAdd) {
			for (const sourceKeyName in source) {
				const targetKeyName = sourceKeyName;
				let targetValue = (target as any)[targetKeyName];
				let sourceValue = (source as any)[sourceKeyName];
				if (
					typeof sourceValue === "object" &&
					sourceValue != null &&
					sourceKeyName in target &&
					!UtilsContext.isDOM(sourceValue)
				) {
					/* 源端的值是object类型，且不是元素节点 */
					(target as any)[sourceKeyName] = UtilsContext.assign(
						targetValue,
						sourceValue,
						isAdd
					);
					continue;
				}
				(target as any)[sourceKeyName] = sourceValue;
			}
		} else {
			for (const targetKeyName in target) {
				if (targetKeyName in source) {
					// @ts-ignore
					let targetValue = target[targetKeyName];
					// @ts-ignore
					let sourceValue = source[targetKeyName];
					if (
						typeof sourceValue === "object" &&
						sourceValue != null &&
						!UtilsContext.isDOM(sourceValue) &&
						Object.keys(sourceValue).length
					) {
						/* 源端的值是object类型，且不是元素节点 */
						// @ts-ignore
						target[targetKeyName] = UtilsContext.assign(
							targetValue,
							sourceValue,
							isAdd
						);
						continue;
					}
					/* 直接赋值 */
					// @ts-ignore
					target[targetKeyName] = sourceValue;
				}
			}
		}

		return target;
	}
	/**
	 * 生成uuid
	 */
	getRandomGUID() {
		if (typeof PopsCore.globalThis?.crypto?.randomUUID === "function") {
			return PopsCore.globalThis.crypto.randomUUID();
		} else {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
				/[xy]/g,
				function (charStr) {
					var randomValue = (Math.random() * 16) | 0,
						randomCharValue =
							charStr === "x" ? randomValue : (randomValue & 0x3) | 0x8;
					return randomCharValue.toString(16);
				}
			);
		}
	}
	/**
	 * 字符串转HTMLElement
	 * @param elementString
	 * @returns
	 */
	parseTextToDOM<R extends HTMLElement>(elementString: string): R {
		/* 去除前后的换行和空格 */
		elementString = elementString
			.replace(/^[\n|\s]*/g, "")
			.replace(/[\n|\s]*$/g, "");
		let targetElement = popsDOMUtils.createElement("div", {
			innerHTML: elementString,
		});
		return targetElement.firstChild as any as R;
	}
	/**
	 * 判断元素/页面中是否包含该元素
	 * @param target 需要判断的元素
	 * @param context 默认为body
	 */
	contains(target: any): boolean;
	contains(context: any, target?: any): boolean;
	contains(context: any, target?: any): boolean {
		if (arguments.length === 1) {
			// 只判断该页面是否存在该元素
			return this.contains(
				PopsCore.document.body || PopsCore.document.documentElement,
				arguments[0]
			);
		} else {
			if (target == null) {
				return false;
			}
			if (typeof (target as any)[Symbol.iterator] === "function") {
				// 可遍历的数组
				let flag = true;
				for (const targetNode of target as any) {
					if (!context.contains(targetNode)) {
						flag = false;
						break;
					}
				}
				return flag;
			} else {
				return context.contains(target as HTMLElement);
			}
		}
	}

	/**
	 * 获取格式化后的时间
	 * @param text （可选）需要格式化的字符串或者时间戳，默认：new Date()
	 * @param formatType （可选）格式化成的显示类型，默认：yyyy-MM-dd HH:mm:ss
	 * + yyyy 年
	 * + MM 月
	 * + dd 天
	 * + HH 时 (24小时制)
	 * + hh 时 (12小时制)
	 * + mm 分
	 * + ss 秒
	 * @returns {string}	返回格式化后的时间
	 * @example
	 * Utils.formatTime("2022-08-21 23:59:00","HH:mm:ss");
	 * > '23:59:00'
	 * @example
	 * Utils.formatTime(1899187424988,"HH:mm:ss");
	 * > '15:10:13'
	 * @example
	 * Utils.formatTime()
	 * > '2023-1-1 00:00:00'
	 **/
	formatTime(text?: string | number | Date, formatType?: string): string;
	/**
	 * 获取格式化后的时间
	 * @param text （可选）需要格式化的字符串或者时间戳，默认：new Date()
	 * @param formatType （可选）格式化成的显示类型，默认：yyyy-MM-dd HH:mm:ss
	 * + yyyy 年
	 * + MM 月
	 * + dd 天
	 * + HH 时 (24小时制)
	 * + hh 时 (12小时制)
	 * + mm 分
	 * + ss 秒
	 * @returns {string}	返回格式化后的时间
	 * @example
	 * Utils.formatTime("2022-08-21 23:59:00","HH:mm:ss");
	 * > '23:59:00'
	 * @example
	 * Utils.formatTime(1899187424988,"HH:mm:ss");
	 * > '15:10:13'
	 * @example
	 * Utils.formatTime()
	 * > '2023-1-1 00:00:00'
	 **/
	formatTime(
		text?: string | number | Date,
		formatType?:
			| "yyyy-MM-dd HH:mm:ss"
			| "yyyy/MM/dd HH:mm:ss"
			| "yyyy_MM_dd_HH_mm_ss"
			| "yyyy年MM月dd日 HH时mm分ss秒"
			| "yyyy年MM月dd日 hh:mm:ss"
			| "yyyy年MM月dd日 HH:mm:ss"
			| "yyyy-MM-dd"
			| "yyyyMMdd"
			| "HH:mm:ss"
	): string;
	formatTime(text = new Date(), formatType = "yyyy-MM-dd HH:mm:ss") {
		let time = text == null ? new Date() : new Date(text);
		/**
		 * 校验时间补0
		 * @param timeNum
		 * @returns
		 */
		function checkTime(timeNum: number) {
			if (timeNum < 10) return "0" + timeNum;
			return timeNum;
		}

		/**
		 * 时间制修改 24小时制转12小时制
		 * @param hourNum 小时
		 * @returns
		 */
		function timeSystemChange(hourNum: number) {
			return hourNum > 12 ? hourNum - 12 : hourNum;
		}

		let timeRegexp = {
			yyyy: time.getFullYear(),
			/* 年 */
			MM: checkTime(time.getMonth() + 1),
			/* 月 */
			dd: checkTime(time.getDate()),
			/* 日 */
			HH: checkTime(time.getHours()),
			/* 时 (24小时制) */
			hh: checkTime(timeSystemChange(time.getHours())),
			/* 时 (12小时制) */
			mm: checkTime(time.getMinutes()),
			/* 分 */
			ss: checkTime(time.getSeconds()),
			/* 秒 */
		};
		Object.keys(timeRegexp).forEach(function (key) {
			let replaecRegexp = new RegExp(key, "g");
			formatType = formatType.replace(replaecRegexp, (timeRegexp as any)[key]);
		});
		return formatType;
	}
	/**
	 * 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
	 * @param byteSize 字节
	 * @param addType （可选）是否添加单位
	 * + true (默认) 添加单位
	 * + false 不添加单位
	 * @returns
	 * + {string} 当addType为true时，且保留小数点末尾2位
	 * + {number} 当addType为false时，且保留小数点末尾2位
	 * @example
	 * Utils.formatByteToSize("812304");
	 * > '793.27KB'
	 * @example
	 * Utils.formatByteToSize("812304",false);
	 * > 793.27
	 **/
	formatByteToSize<T extends boolean>(
		byteSize: number | string,
		addType?: T
	): T extends true ? string : number;
	formatByteToSize(byteSize: number | string, addType = true) {
		byteSize = parseInt(byteSize.toString());
		if (isNaN(byteSize)) {
			throw new TypeError("Utils.formatByteToSize 参数 byteSize 格式不正确");
		}
		let result = 0;
		let resultType = "KB";
		let sizeData: PopsUtilsOwnObject<number> = {};
		sizeData.B = 1;
		sizeData.KB = 1024;
		sizeData.MB = sizeData.KB * sizeData.KB;
		sizeData.GB = sizeData.MB * sizeData.KB;
		sizeData.TB = sizeData.GB * sizeData.KB;
		sizeData.PB = sizeData.TB * sizeData.KB;
		sizeData.EB = sizeData.PB * sizeData.KB;
		sizeData.ZB = sizeData.EB * sizeData.KB;
		sizeData.YB = sizeData.ZB * sizeData.KB;
		sizeData.BB = sizeData.YB * sizeData.KB;
		sizeData.NB = sizeData.BB * sizeData.KB;
		sizeData.DB = sizeData.NB * sizeData.KB;
		for (let key in sizeData) {
			result = byteSize / (sizeData as any)[key];
			resultType = key;
			if (sizeData.KB >= result) {
				break;
			}
		}
		new Date();
		result = result.toFixed(2) as any;
		result = addType
			? result + resultType.toString()
			: (parseFloat(result.toString()) as any);
		return result;
	}
	AnyTouch = () => {
		return AnyTouch;
	};
	/**
	 * 自动使用 Worker 执行 setTimeout
	 */
	setTimeout(callback: Function, timeout: number = 0) {
		try {
			return WorkerSetTimeout(callback, timeout);
		} catch (error) {
			return globalThis.setTimeout(callback, timeout);
		}
	}
	/**
	 * 配合 .setTimeout 使用
	 */
	clearTimeout(timeId: number | undefined) {
		try {
			if (timeId != null) {
				WorkerClearTimeout(timeId);
			}
		} catch (error) {
		} finally {
			globalThis.clearTimeout(timeId);
		}
	}
	/**
	 * 自动使用 Worker 执行 setInterval
	 */
	setInterval(callback: Function, timeout: number = 0) {
		try {
			return WorkerSetInterval(callback, timeout);
		} catch (error) {
			return globalThis.setInterval(callback, timeout);
		}
	}
	/**
	 * 配合 .setInterval 使用
	 */
	clearInterval(timeId: number | undefined) {
		try {
			if (timeId != null) {
				WorkerClearInterval(timeId);
			}
		} catch (error) {
		} finally {
			globalThis.clearInterval(timeId);
		}
	}
}

const popsUtils = new PopsUtils();

export { popsUtils };
