const Log = function (
	_GM_info_ = {
		script: {
			name: "Utils.Log",
		},
	},
	console = globalThis.console
) {
	let msgColorDetails = [
		"font-weight: bold; color: cornflowerblue",
		"font-weight: bold; color: cornflowerblue",
		"font-weight: bold; color: darkorange",
		"font-weight: bold; color: cornflowerblue",
	];
	/**
	 * @type {UtilsLogOptions}
	 */
	let details = {
		tag: true,
		successColor: "#0000FF",
		errorColor: "#FF0000",
		infoColor: "0",
		warnColor: "0",
		debug: false,
		autoClearConsole: false,
		logMaxCount: 999,
	};
	let logCount = 0;
	/**
	 * 解析Error的堆栈获取实际调用者的函数名及函数所在的位置
	 * @param {string[]} stack
	 * @returns {{
	 *   name: string,
	 *   position: string,
	 * }}
	 */
	let parseErrorStack = function (stack) {
		let result = {
			name: "",
			position: "",
		};
		for (let stackString of stack) {
			stackString = stackString.trim();
			let stackFunctionName = stackString.match(/^at[\s]+(.+?)[\s]+/i);
			let stackFunctionNamePosition = stackString.match(
				/^at[\s]+.+[\s]+\((.+?)\)/i
			);
			if (stackFunctionName == null) {
				continue;
			}
			stackFunctionName = stackFunctionName[stackFunctionName.length - 1];
			stackFunctionNamePosition =
				stackFunctionNamePosition[stackFunctionNamePosition.length - 1];
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
	};
	/**
	 * 待恢复的函数或对象
	 */
	let recoveryList = [];
	/**
	 * 检测清理控制台
	 * @this {Utils.Log}
	 */
	let checkClearConsole = function () {
		logCount++;
		if (details.autoClearConsole && logCount > details.logMaxCount) {
			console.clear();
			logCount = 0;
		}
	};
	/**
	 * 输出内容
	 * @param {any} msg 需要输出的内容
	 * @param {string} color 颜色
	 * @param {string|undefined} otherStyle 其它CSS
	 * @this {Utils.Log}
	 */
	let printContent = function (msg, color, otherStyle) {
		checkClearConsole.apply(this);
		otherStyle = otherStyle || "";
		let stackSplit = new Error().stack.split("\n");
		stackSplit.splice(0, 2);
		let { name: callerName, position: callerPosition } =
			parseErrorStack(stackSplit);
		let tagName = this.tag;
		function consoleMsg(_msg_) {
			if (typeof _msg_ === "string") {
				console.log(
					`%c[${tagName}%c-%c${callerName}%c]%c %s`,
					...msgColorDetails,
					`color: ${color};${otherStyle}`,
					_msg_
				);
			} else if (typeof _msg_ === "number") {
				console.log(
					`%c[${tagName}%c-%c${callerName}%c]%c %d`,
					...msgColorDetails,
					`color: ${color};${otherStyle}`,
					_msg_
				);
			} else if (typeof _msg_ === "object") {
				console.log(
					`%c[${tagName}%c-%c${callerName}%c]%c %o`,
					...msgColorDetails,
					`color: ${color};${otherStyle}`,
					_msg_
				);
			} else {
				console.log(_msg_);
			}
		}
		if (Array.isArray(msg)) {
			msg.forEach((item) => {
				consoleMsg(item);
			});
		} else {
			consoleMsg(msg);
		}
		if (details.debug) {
			/* 如果开启调试模式，输出堆栈位置 */
			console.log(callerPosition);
		}
	};
	/**
	 * 前面的TAG标志
	 */
	this.tag = _GM_info_?.script?.name || "Utils.Log";
	/**
	 * 控制台-普通输出
	 * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param {string|undefined} color 输出的颜色
	 * @param {string|undefined} otherStyle 其它CSS
	 */
	this.info = function (msg, color = details.infoColor, otherStyle) {
		printContent.call(this, msg, color, otherStyle);
	};
	/**
	 * 控制台-警告输出
	 * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param {string|undefined} color 输出的颜色
	 * @param {string|undefined} otherStyle 其它CSS
	 */
	this.warn = function (
		msg,
		color = details.warnColor,
		otherStyle = "background: #FEF6D5;padding: 4px 6px 4px 0px;"
	) {
		printContent.call(this, msg, color, otherStyle);
	};
	/**
	 * 控制台-错误输出
	 * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param {string|undefined} color 输出的颜色
	 * @param {string|undefined} otherStyle 其它CSS
	 */
	this.error = function (msg, color = details.errorColor, otherStyle) {
		printContent.call(this, msg, color, otherStyle);
	};
	/**
	 * 控制台-成功输出
	 * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
	 * @param {string|undefined} color 输出的颜色
	 * @param {string|undefined} otherStyle 其它CSS
	 */
	this.success = function (msg, color = details.successColor, otherStyle) {
		printContent.call(this, msg, color, otherStyle);
	};
	/**
	 * 控制台-输出表格
	 * @param {object[]} msg
	 * @param {string|undefined} color 输出的颜色
	 * @param {string|undefined} otherStyle 其它CSS
	 * @example
	 * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
	 */
	this.table = function (msg, color = details.infoColor, otherStyle = "") {
		checkClearConsole.apply(this);
		let stack = new Error().stack.split("\n");
		stack.splice(0, 1);
		let errorStackParse = parseErrorStack(stack);
		let stackFunctionName = errorStackParse.name;
		let stackFunctionNamePosition = errorStackParse.position;
		let callerName = stackFunctionName;
		console.log(
			`%c[${this.tag}%c-%c${callerName}%c]%c`,
			...msgColorDetails,
			`color: ${color};${otherStyle}`
		);
		console.table(msg);
		if (details.debug) {
			console.log(stackFunctionNamePosition);
		}
	};
	/**
	 * 配置Log对象的颜色
	 * @param {UtilsLogOptions} paramDetails 配置信息
	 */
	this.config = function (paramDetails) {
		details = Object.assign(details, paramDetails);
	};
	/**
	 * 禁用输出
	 */
	this.disable = function () {
		let that = this;
		Object.keys(this)
			.filter((keyName) => Boolean(keyName.match(/info|error|success|table/)))
			.forEach((keyName) => {
				let value = {};
				value[keyName] = that[keyName];
				recoveryList = [...recoveryList, value];
				that[keyName] = () => {};
			});
	};
	/**
	 * 恢复输出
	 */
	this.recovery = function () {
		let that = this;
		recoveryList.forEach((item) => {
			let keyName = Object.keys(item);
			that[keyName] = item[keyName];
		});
		recoveryList = [];
	};
};

export { Log };
