export class Hooks {
  /**
   * 在Function原型上添加自定义方法.hook和.unhook
   */
  initEnv() {
    (Function.prototype as any).hook = function (_: any, hookFunc: any, context: Window & typeof globalThis) {
      let _context = null; //函数上下文
      let _funcName = null; //函数名

      _context = context || window;
      _funcName = getFuncName(this);
      (_context as any)[`realFunc_${_funcName}`] = this;

      if ((_context[_funcName] as any).prototype && (_context[_funcName] as any).prototype.isHooked) {
        console.log("Already has been hooked,unhook first");
        return false;
      }
      function getFuncName(fn: any) {
        // 获取函数名
        const strFunc = fn.toString();
        const _regex = /function\s+(\w+)\s*\(/;
        const patten = strFunc.match(_regex);
        if (patten) {
          return patten[1];
        }
        return "";
      }
      try {
        new Function(
          "_context",
          "_funcName",
          "hookFunc",
          `_context[_funcName] = function ${_funcName}() {
        let args = Array.prototype.slice.call(arguments, 0);
        let obj = this;
        hookFunc.apply(obj, args);
        return _context['realFunc_${_funcName}'].apply(obj, args);
    };`
        )(_context, _funcName, hookFunc);
        (_context as any)[_funcName].prototype.isHooked = true;
        return true;
      } catch (e) {
        console.log("Hook failed,check the params.", e);
        return false;
      }
    };
    (Function.prototype as any).unhook = function (_: any, funcName: any, context: Window & typeof globalThis) {
      let _context = null;
      let _funcName = null;
      _context = context || window;
      _funcName = funcName;
      if (!(_context[_funcName] as any).prototype.isHooked) {
        console.log("No function is hooked on");
        return false;
      }
      (_context[_funcName] as any) = (_context as any)[`realFunc${_funcName}`];
      Reflect.deleteProperty(_context, `realFunc_${_funcName}`);
      return true;
    };
  }
  /**
   * 删除在Function原型上添加的自定义方法.hook和.unhook
   */
  cleanEnv() {
    if (Object.prototype.hasOwnProperty.call(Function.prototype, "hook")) {
      Reflect.deleteProperty(Function.prototype, "hook");
    }
    if (Object.prototype.hasOwnProperty.call(Function.prototype, "unhook")) {
      Reflect.deleteProperty(Function.prototype, "unhook");
    }
    return true;
  }
}
