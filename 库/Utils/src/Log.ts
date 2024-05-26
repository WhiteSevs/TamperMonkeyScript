import type { AnyObject } from ".";

/** Utils.Log的初始化配置 */
declare interface UtilsLogOptions {
	/** 是否输出Tag，false的话其它的颜色也不输出，默认为true */
	tag: boolean;
	/** log.success的颜色，默认#0000FF */
	successColor: string;
	/** log.warn的颜色，默认0 */
	warnColor: string;
	/** log.error的颜色，默认#FF0000 */
	errorColor: string;
	/** log.info的颜色，默认0 */
	infoColor: string;
	/** 是否开启debug模式，true会在控制台每次调用时输出调用函数的所在位置，false不会输出位置，默认false */
	debug: boolean;
	/** 当console输出超过logMaxCount数量自动清理控制台，默认false */
	autoClearConsole: boolean;
	/** console输出的最高数量，autoClearConsole开启则生效，默认999 */
	logMaxCount: number;
}

class Log {
	/** 前面的TAG标志 */
	#disable: boolean = false;
	tag: string = "";
	#console: Console = null as any;
	#logCount = 0;
	#details: UtilsLogOptions = {
		tag: true,
		successColor: "#0000FF",
		errorColor: "#FF0000",
		infoColor: "0",
		warnColor: "0",
		debug: false,
		autoClearConsole: false,
		logMaxCount: 999,
	};
	/**
	 * 待恢复的函数或对象
	 */
	#recoveryList = [];
	#msgColorDetails = [
		"font-weight: bold; color: cornflowerblue",
		"font-weight: bold; color: cornflowerblue",
		"font-weight: bold; color: darkorange",
		"font-weight: bold; color: cornflowerblue",
	];
	/**
	 * @param _GM_info_ 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}
	 * @param console 可指定console对象为unsafeWindow下的console或者是油猴window下的console
	 */
	constructor(
		_GM_info_: {
			script: {
				name: string;
			};
		} = {
			script: {
				name: "Utils.Log",
			},
		},
		console: Console = global.console
	) {
		this.tag = _GM_info_.script.name;
		this.#console = console;
	}

	/**
	 * 解析Error的堆栈获取实际调用者的函数名及函数所在的位置
	 * @param stack
	 */
	private parseErrorStack(stack: string[]) {
		let result = {
			name: "",
			position: "",
		};
		for (let stackString of stack) {
			stackString = stackString.trim();
			let stackFunctionNameMatch = stackString.match(/^at[\s]+(.+?)[\s]+/i);
			let stackFunctionNamePositionMatch = stackString.match(
				/^at[\s]+.+[\s]+\((.+?)\)/i
			);
			if (stackFunctionNameMatch == null) {
				continue;
			}
			if (stackFunctionNamePositionMatch == null) {
				continue;
			}
			let stackFunctionName =
				stackFunctionNameMatch[stackFunctionNameMatch.length - 1];
			let stackFunctionNamePosition =
				stackFunctionNamePositionMatch[
					stackFunctionNamePositionMatch.length - 1
				];
			if (
				stackFunctionName === "" ||
				stackFunctionName.match(
					new RegExp(
						"(^Utils.Log.|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each)",
						"g"
					)
				)
			) {
				continue;
			} else {
				result.name = stackFunctionName;
				result.position = stackFunctionNamePosition;
				break;
			}
		}
		if (result.position === "") {
			let lastStackString = stack[stack.length - 1].trim();
			if (lastStackString.startsWith("at chrome-extension://")) {
				let lastStackMatch = lastStackString.match(/^at[\s]+(.+)/);
				if (lastStackMatch) {
					result.position = lastStackMatch[lastStackMatch.length - 1];
				}
			}
		}
		if (result.position === "") {
			result.position = stack[stack.length - 1].trim().replace(/^at[\s]*/g, "");
		}
		return result;
	}
	/**
	 * 检测清理控制台
	 */
	private checkClearConsole() {
		this.#logCount++;
		if (
			this.#details.autoClearConsole &&
			this.#logCount > this.#details.logMaxCount
		) {
			this.#console.clear();
			this.#logCount = 0;
		}
	}

	/**
	 * 输出内容
	 * @param msg 需要输出的内容
	 * @param color 颜色
	 * @param otherStyle 其它CSS
	 */
	private printContent(msg: any, color: string, otherStyle?: string) {
		this.checkClearConsole.apply(this);
		otherStyle = otherStyle || "";
		let stackSplit = new Error()!.stack!.split("\n");
		stackSplit.splice(0, 2);
		let { name: callerName, position: callerPosition } =
			this.parseErrorStack(stackSplit);
		let tagName = this.tag;
		let that = this;
		function consoleMsg(_msg_: any) {
			if (typeof _msg_ === "string") {
				that.#console.log(
					`%c[${tagName}%c-%c${callerName}%c]%c %s`,
					...that.#msgColorDetails,
					`color: ${color};${otherStyle}`,
					_msg_
				);
			} else if (typeof _msg_ === "number") {
				that.#console.log(
					`%c[${tagName}%c-%c${callerName}%c]%c %d`,
					...that.#msgColorDetails,
					`color: ${color};${otherStyle}`,
					_msg_
				);
			} else if (typeof _msg_ === "object") {
				that.#console.log(
					`%c[${tagName}%c-%c${callerName}%c]%c %o`,
					...that.#msgColorDetails,
					`color: ${color};${otherStyle}`,
					_msg_
				);
			} else {
				that.#console.log(_msg_);
			}
		}
		if (Array.isArray(msg)) {
			msg.forEach((item) => {
				consoleMsg(item);
			});
		} else {
			consoleMsg(msg);
		}
		if (this.#details.debug) {
			/* 如果开启调试模式，输出堆栈位置 */
			this.#console.log(callerPosition);
		}
	}
	/**
	 * 控制台-普通输出
	 * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param color 输出的颜色
	 * @param otherStyle 其它CSS
	 */
	info(msg: any, color: string = this.#details.infoColor, otherStyle?: string) {
		if (this.#disable) return;
		this.printContent.call(this, msg, color, otherStyle);
	}
	/**
	 * 控制台-警告输出
	 * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param color 输出的颜色
	 * @param otherStyle 其它CSS
	 */
	warn(
		msg: any,
		color = this.#details.warnColor,
		otherStyle = "background: #FEF6D5;padding: 4px 6px 4px 0px;"
	) {
		if (this.#disable) return;
		this.printContent.call(this, msg, color, otherStyle);
	}
	/**
	 * 控制台-错误输出
	 * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param color 输出的颜色
	 * @param otherStyle 其它CSS
	 */
	error(msg: any, color = this.#details.errorColor, otherStyle?: string) {
		if (this.#disable) return;
		this.printContent.call(this, msg, color, otherStyle);
	}
	/**
	 * 控制台-成功输出
	 * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param color 输出的颜色
	 * @param otherStyle 其它CSS
	 */
	success(msg: any, color = this.#details.successColor, otherStyle?: string) {
		if (this.#disable) return;
		this.printContent.call(this, msg, color, otherStyle);
	}
	/**
	 * 控制台-输出表格
	 * @param msg
	 * @param color 输出的颜色
	 * @param otherStyle 其它CSS
	 * @example
	 * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
	 */
	table(msg: AnyObject[], color = this.#details.infoColor, otherStyle = "") {
		if (this.#disable) return;
		this.checkClearConsole.apply(this);
		let stack = new Error()!.stack!.split("\n");
		stack.splice(0, 1);
		let errorStackParse = this.parseErrorStack(stack);
		let stackFunctionName = errorStackParse.name;
		let stackFunctionNamePosition = errorStackParse.position;
		let callerName = stackFunctionName;
		this.#console.log(
			`%c[${this.tag}%c-%c${callerName}%c]%c`,
			...this.#msgColorDetails,
			`color: ${color};${otherStyle}`
		);
		this.#console.table(msg);
		if (this.#details.debug) {
			this.#console.log(stackFunctionNamePosition);
		}
	}
	/**
	 * 配置Log对象的颜色
	 * @param paramDetails 配置信息
	 */
	config(paramDetails: Partial<UtilsLogOptions>) {
		this.#details = Object.assign(this.#details, paramDetails);
	}
	/** 禁用输出 */
	disable() {
		this.#disable = true;
	}
	/** 恢复输出 */
	recovery() {
		this.#disable = false;
	}
}

export { Log };
