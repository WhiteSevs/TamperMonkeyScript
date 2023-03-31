// ==UserScript==
// @name         自动生成的脚本
// @namespace    https://greasyfork.org/zh-CN/users/521923-whitesevs
// @version      0.1
// @description  自动生成的描述
// @author       WhiteSev
// @include      <$URL$>
// @require	     https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/jquery/3.4.1/jquery.min.js
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @grant        GM_info
// @run-at       document-start
// ==/UserScript==

(function () {
  var log = {
    /* 命名空间 */
    nameSpace: "log",
    tag: GM_info?.script?.name,
    info: function (msg, color = 0, type = "info") {
      /* #f400ff */
      let callerName = this.info?.caller?.name;
      if (type === "success") {
        callerName = this.success?.caller?.name;
      } else if (type === "error") {
        callerName = this.error?.caller?.name;
      }
      if (typeof msg === "object") {
        console.log(
          `%c[${log.tag}%c-%c${callerName}%c]%c `,
          "font-weight: bold;color: cornflowerblue",
          "font-weight: bold;color: cornflowerblue",
          "font-weight: bold;color: darkorange",
          "font-weight: bold;color: cornflowerblue",
          `color: ${color}`,
          msg
        );
      } else {
        console.log(
          `%c[${log.tag}%c-%c${callerName}%c]%c ${msg}`,
          "font-weight: bold;color: cornflowerblue",
          "font-weight: bold;color: cornflowerblue",
          "font-weight: bold;color: darkorange",
          "font-weight: bold;color: cornflowerblue",
          `color: ${color}`
        );
      }
    },
    error: function (msg, color = "red") {
      this.info(msg, color, "error");
    },
    success: function (msg, color = "blue") {
      this.info(msg, color, "success");
    },
  };

  /* 全局配置 */
  var GLOBAL_CONFIG = {
    /* 命名空间 */
    nameSpace: "GLOBAL_CONFIG",
    /* config数据 */
    data: {},
  };

  /* 在document-start就插入的CSS */
  var GLOBAL_CSS = {
    /* 命名空间 */
    nameSpace: "GLOBAL_CSS",
    /* CSS数据 */
    data: ``,
    /* 延迟添加的CSS元素列表 */
    delayCSSNode: [],
    /* 添加到页面的元素列表 */
    node: [],
    /**
     * 初始化全局CSS
     */
    init() {
      log.info("初始化全局CSS");
      this.node = [...this.node, GM_addStyle(this.data)];
    },
  };

  /* 全局执行函数，存在DOM未加载和加载完毕执行的函数 */
  var GLOBAL_RUN = {
    /* 命名空间 */
    nameSpace: "GLOBAL_RUN",
    /**
     * 初始化
     * @param {Array} domStartCallBack dom未加载回调
     * @param {Array} domReadyCallBack dom加载完毕回调
     */
    init(domStartCallBack = [], domReadyCallBack = []) {
      /* 首先加载全局CSS */
      GLOBAL_CSS.init();
      this.exec(domStartCallBack);
      /* 然后执行DOM加载完毕的函数 */
      $(() => {
        log.success("DOM加载完毕，执行回调");
        this.exec(domReadyCallBack);
      });
    },
    /**
     * 调用函数
     * @param {Function} callBackList 需要执行的函数数组
     */
    exec(callBackList = []) {
      /* 如果该函数url匹配成功执行，回调加载这个函数的CSS */
      var addGlobalCss = function () {
        if (typeof arguments[0] === "string" && arguments[0] != "") {
          GLOBAL_CSS.delayCSSNode = [
            ...GLOBAL_CSS.delayCSSNode,
            GM_addStyle(arguments[0]),
          ];
        }
      };
      callBackList.forEach((item) => {
        try {
          item(addGlobalCss);
        } catch (error) {
          log.error(error);
        }
      });
    },
  };

  /* 桌面端执行 */
  var deskTop = {
    /* 命名空间 */
    nameSpace: "deskTop",
    /* 配置 */
    config: {},
    init() {
      /* 不被执行的keyName */
      var notExecFunctionNameList = ["config", "init"];
      /* dom start执行的函数 */
      var needExecFunctionNameListByDomStart = [];
      /* dom ready执行的函数 */
      var needExecFunctionNameListByDOMReady = [];
      Object.keys(this).forEach((functionName) => {
        if (
          notExecFunctionNameList.indexOf(functionName) != -1 ||
          typeof this[functionName] != "function"
        ) {
          return;
        }
        if (functionName.toLowerCase().startsWith("domStart_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else if (functionName.toLowerCase().startsWith("domReady_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else {
          log.error(`未知不被执行的函数名字 ${functionName}`);
        }
      });
      GLOBAL_RUN.init(
        needExecFunctionNameListByDomStart,
        needExecFunctionNameListByDOMReady
      );
    },
  };

  /* 移动端执行 */
  var mobile = {
    /* 命名空间 */
    nameSpace: "mobile",
    config: {},
    init() {
      /* 不被执行的keyName */
      var notExecFunctionNameList = ["config", "init"];
      /* dom start执行的函数 */
      var needExecFunctionNameListByDomStart = [];
      /* dom ready执行的函数 */
      var needExecFunctionNameListByDOMReady = [];
      Object.keys(this).forEach((functionName) => {
        if (
          notExecFunctionNameList.indexOf(functionName) != -1 ||
          typeof this[functionName] != "function"
        ) {
          return;
        }
        if (functionName.toLowerCase().startsWith("domStart_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else if (functionName.toLowerCase().startsWith("domReady_")) {
          needExecFunctionNameListByDomStart = [
            ...needExecFunctionNameListByDomStart,
            functionName,
          ];
        } else {
          log.error(`未知不被执行的函数名字 ${functionName}`);
        }
      });
      GLOBAL_RUN.init(
        needExecFunctionNameListByDomStart,
        needExecFunctionNameListByDOMReady
      );
    },
  };
  /* 执行 桌面端初始化 */
  deskTop.init();
  /* 执行 移动端初始化 */
  mobile.init();
})();
