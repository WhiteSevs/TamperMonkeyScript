const Hooks = function () {
	this.initEnv = function () {
		Function.prototype.hook = function (realFunc, hookFunc, context) {
			let _context = null; //函数上下文
			let _funcName = null; //函数名

			_context = context || window;
			_funcName = getFuncName(this);
			_context["realFunc_" + _funcName] = this;

			if (
				_context[_funcName].prototype &&
				_context[_funcName].prototype.isHooked
			) {
				console.log("Already has been hooked,unhook first");
				return false;
			}
			function getFuncName(fn) {
				// 获取函数名
				let strFunc = fn.toString();
				let _regex = /function\s+(\w+)\s*\(/;
				let patten = strFunc.match(_regex);
				if (patten) {
					return patten[1];
				}
				return "";
			}
			try {
				eval(
					"_context[_funcName] = function " +
						_funcName +
						"(){\n" +
						"let args = Array.prototype.slice.call(arguments,0);\n" +
						"let obj = this;\n" +
						"hookFunc.apply(obj,args);\n" +
						"return _context['realFunc_" +
						_funcName +
						"'].apply(obj,args);\n" +
						"};"
				);
				_context[_funcName].prototype.isHooked = true;
				return true;
			} catch (e) {
				console.log("Hook failed,check the params.");
				return false;
			}
		};
		Function.prototype.unhook = function (realFunc, funcName, context) {
			let _context = null;
			let _funcName = null;
			_context = context || window;
			_funcName = funcName;
			if (!_context[_funcName].prototype.isHooked) {
				console.log("No function is hooked on");
				return false;
			}
			_context[_funcName] = _context["realFunc" + _funcName];
			Reflect.deleteProperty(_context, "realFunc_" + _funcName);
			return true;
		};
	};
	this.cleanEnv = function () {
		if (Function.prototype.hasOwnProperty("hook")) {
			Reflect.deleteProperty(unction.prototype, "hook");
		}
		if (Function.prototype.hasOwnProperty("unhook")) {
			Reflect.deleteProperty(unction.prototype, "unhook");
		}
		return true;
	};
};

export { Hooks };
