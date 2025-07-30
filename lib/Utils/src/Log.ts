import type { UtilsLogOptions } from "./types/Log";

export class Log {
	/** 是否禁用输出的flag */
	#disable: boolean = false;
	/** 前面的TAG标志 */
	tag: string = "Utils.Log";
	/* 使用的console函数 */
	#console: Console = null as any;
	/* 当前输出的数量 */
	#logCount = 0;
	/* 配置 */
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
	 * 颜色配置
	 */
	#msgColorDetails = [
		"font-weight: bold; color: cornflowerblue",
		"font-weight: bold; color: cornflowerblue",
		"font-weight: bold; color: darkorange",
		"font-weight: bold; color: cornflowerblue",
	];
	/**
	 * @param __GM_info 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}，或者直接是一个字符串，用作tag名
	 * @param console 可指定console对象为unsafeWindow下的console或者是油猴window下的console
	 */
	constructor(
		__GM_info?:
			| {
					script: {
						name: string;
					};
			  }
			| string,
		console: Console = window.console
	) {
		if (typeof __GM_info === "string") {
			this.tag = __GM_info;
		} else if (
			typeof __GM_info === "object" &&
			typeof __GM_info?.script?.name === "string"
		) {
			this.tag = __GM_info.script.name;
		}
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
			/* 获取最后一个，因为第一个是包含了at  */
			let stackFunctionName =
				stackFunctionNameMatch[stackFunctionNameMatch.length - 1];
			let stackFunctionNamePosition =
				stackFunctionNamePositionMatch[
					stackFunctionNamePositionMatch.length - 1
				];
			if (
				stackFunctionName === "" ||
				stackFunctionName.match(
					/^(Utils\.|)Log(\.|)|.<anonymous>$|^Function.each|^NodeList.forEach|^k.fn.init.each/g
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
	private printContent(msg: any[], color: string, otherStyle?: string) {
		this.checkClearConsole();
		otherStyle = otherStyle || "";
		let stackSplit = new Error()!.stack!.split("\n");
		stackSplit.splice(0, 2);
		let { name: callerName, position: callerPosition } =
			this.parseErrorStack(stackSplit);
		let tagName = this.tag;
		let that = this;

		/** tag的html输出格式 */
		let tagNameHTML = `%c[${tagName}%c`;
		/** 调用的函数名的html输出格式 */
		let callerNameHTML = `%c${callerName}%c]%c`;
		callerName.trim() !== "" && (callerNameHTML = "-" + callerNameHTML);
		/**
		 * 输出消息到控制台
		 * @param message
		 */
		function consoleMsg(message: any) {
			if (typeof message === "string") {
				that.#console.log(
					`${tagNameHTML}${callerNameHTML} %s`,
					...that.#msgColorDetails,
					`color: ${color};${otherStyle}`,
					message
				);
			} else if (typeof message === "number") {
				that.#console.log(
					`${tagNameHTML}${callerNameHTML} %d`,
					...that.#msgColorDetails,
					`color: ${color};${otherStyle}`,
					message
				);
			} else if (typeof message === "object") {
				that.#console.log(
					`${tagNameHTML}${callerNameHTML} %o`,
					...that.#msgColorDetails,
					`color: ${color};${otherStyle}`,
					message
				);
			} else {
				that.#console.log(message);
			}
		}
		if (Array.isArray(msg)) {
			for (let index = 0; index < msg.length; index++) {
				consoleMsg(msg[index]);
			}
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
	 * @param args 需要输出的内容
	 * @example
	 * log.info("输出信息","输出信息2","输出信息3","输出")
	 */
	info(...args: any[]) {
		if (this.#disable) return;
		this.printContent(args, this.#details.infoColor);
	}
	/**
	 * 控制台-警告输出
	 * @param args 需要输出的内容
	 * @example
	 * log.warn("输出警告","输出警告2","输出警告3","输出警告4")
	 */
	warn(...args: any[]) {
		if (this.#disable) return;
		this.printContent(
			args,
			this.#details.warnColor,
			"background: #FEF6D5;padding: 4px 6px 4px 0px;"
		);
	}
	/**
	 * 控制台-错误输出
	 * @param args 需要输出的内容
	 * @example
	 * log.error("输出错误","输出错误2","输出错误3","输出错误4")
	 */
	error(...args: any[]) {
		if (this.#disable) return;
		this.printContent(args, this.#details.errorColor);
	}
	/**
	 * 控制台-成功输出
	 * @param args 需要输出的内容
	 * @example
	 * log.success("输出成功")
	 */
	success(...args: any[]) {
		if (this.#disable) return;
		this.printContent(args, this.#details.successColor);
	}
	/**
	 * 控制台-输出表格
	 * @param msg 需要输出的内容
	 * @example
	 * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
	 */
	table(msg: any[]) {
		if (this.#disable) return;
		this.checkClearConsole();
		let stack = new Error()!.stack!.split("\n");
		stack.splice(0, 1);
		let errorStackParse = this.parseErrorStack(stack);
		/** 堆栈函数名 */
		let stackFunctionName = errorStackParse.name;
		/** 堆栈位置 */
		let stackFunctionNamePosition = errorStackParse.position;
		let callerName = stackFunctionName;
		this.#console.log(
			`%c[${this.tag}%c-%c${callerName}%c]%c`,
			...this.#msgColorDetails,
			`color: ${this.#details.infoColor};`
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
