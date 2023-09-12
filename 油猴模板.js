// ==UserScript==
// @name         自动生成的脚本
// @namespace    https://greasyfork.org/zh-CN/users/521923-whitesevs
// @icon         https://favicon.yandex.net/favicon/v2/<$URL$>
// @version      0.1
// @description  自动生成的描述
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        <$URL$>
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://greasyfork.org/scripts/455186-whitesevsutils/code/WhiteSevsUtils.js?version=1249087
// @require      https://greasyfork.org/scripts/465772-domutils/code/DOMUtils.js?version=1249091
// ==/UserScript==

(function () {
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * @type {import("../库/DOMUtils")}
   */
  const DOMUtils = window.DOMUtils.noConflict();
  const log = new utils.Log(GM_info);

  /* 全局配置 */
  const GLOBAL_CONFIG = {
    /* 命名空间 */
    nameSpace: "GLOBAL_CONFIG",
    /* config数据 */
    data: {},
  };

  /* 在document-start就插入的CSS */
  const GLOBAL_CSS = {
    /* 命名空间 */
    nameSpace: "GLOBAL_CSS",
    /* CSS数据 */
    data: [
      {
        /* 添加的CSS */
        css: ``,
        /* 该CSS的作用或描述 */
        desc: "",
      },
    ],
    /* 延迟添加的CSS元素列表 */
    delayCSSNode: [],
    /* 添加到页面的元素列表 */
    node: [],
    /**
     * 初始化全局CSS
     */
    init() {
      this.data.forEach((item) => {
        this.node = [...this.node, GM_addStyle(item.css)];
      });
      t;
    },
  };

  /* 全局执行函数，存在DOM未加载和加载完毕执行的函数 */
  const GLOBAL_RUN = {
    /* 命名空间 */
    nameSpace: "GLOBAL_RUN",
    /**
     * 初始化
     * @param {Array} domStartCallBack dom未加载回调
     * @param {Array} domReadyCallBack dom加载完毕回调
     */
    init(domStartCallBack = [], domReadyCallBack = []) {
      /* 注册window函数 */
      GLOBAL_WINDOW.init();
      /* 注册全局CSS */
      GLOBAL_CSS.init();
      /* 注册menu菜单 */
      GLOBAL_GM_MENU.init();
      /* 执行document-start时需要执行的函数 */
      this.exec(domStartCallBack);
      $(() => {
        /* 执行document-ready时需要执行的函数 */
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
          let addCSSNode = GM_addStyle(arguments[0]);
          GLOBAL_CSS.delayCSSNode = [...GLOBAL_CSS.delayCSSNode, addCSSNode];
          return addCSSNode;
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

  /* 全局通用API函数 */
  const GLOBAL_API = {};

  /* 注册到window的全局函数，比如替换GM_addStyle */
  const GLOBAL_WINDOW = {
    init() {
      Object.keys(this).forEach((keyName) => {
        if (keyName.toLowerCase() === "init") {
          return;
        }
        window[keyName] = this[keyName];
      });
    },
  };

  /* 注册到tampermonkey的菜单项 */
  const GLOBAL_GM_MENU = {
    /* GM_Menu对象 */
    _gm_menu_: null,
    /* 点击后自动刷新网页 */
    _auto_reload_: false,
    /* 初始化 */
    init() {
      let notExecFunctionNameList = ["init", "get"];
      let menuJSON = {};
      Object.keys(this).forEach((keyName) => {
        if (notExecFunctionNameList.indexOf(keyName) !== -1) {
          return;
        }
        if (this[keyName].checkRegister && this[keyName].checkRegister()) {
          menuJSON[keyName] = this[keyName];
          delete menuJSON[keyName]["checkRegister"];
        }
      });
      this._gm_menu_ = new utils.GM_Menu(
        menuJSON,
        this._auto_reload_,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand
      );
    },
    /* 根据自己设置的key获取值 */
    get(gmKeyName) {
      return this._gm_menu_.get(gmKeyName);
    },
    /* Your code here... */
  };

  /* 桌面端执行，设置的函数开头必须为domStart_或者domReady_ */
  /* 每个函数都会传入一个添加CSS的函数，调用该函数添加CSS，不直接使用GM_addStyle了 */
  const ENTRANCE_DESKTOP = {
    /* 命名空间 */
    nameSpace: "ENTRANCE_DESKTOP",
    /* 配置 */
    config: {},
    init() {
      /* 不被执行的keyName */
      let notExecFunctionNameList = ["config", "init"];
      /* dom start执行的函数 */
      let needExecFunctionNameListByDomStart = [];
      /* dom ready执行的函数 */
      let needExecFunctionNameListByDOMReady = [];
      Object.keys(this).forEach((functionName) => {
        if (
          notExecFunctionNameList.indexOf(functionName) !== -1 ||
          typeof this[functionName] !== "function"
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
          log.error(`不被执行的函数名字 ${functionName}`);
        }
      });
      GLOBAL_RUN.init(
        needExecFunctionNameListByDomStart,
        needExecFunctionNameListByDOMReady
      );
    },
    /* 通用接口-复用 */
    api: {},
  };

  /* 移动端执行，设置的函数开头必须为domStart_或者domReady_ */
  /* 每个函数都会传入一个添加CSS的函数，调用该函数添加CSS，不直接使用GM_addStyle了 */
  const ENTRANCE_MOBILE = {
    /* 命名空间 */
    nameSpace: "ENTRANCE_MOBILE",
    config: {},
    init() {
      /* 不被执行的keyName */
      let notExecFunctionNameList = ["config", "init"];
      /* dom start执行的函数 */
      let needExecFunctionNameListByDomStart = [];
      /* dom ready执行的函数 */
      let needExecFunctionNameListByDOMReady = [];
      Object.keys(this).forEach((functionName) => {
        if (
          notExecFunctionNameList.indexOf(functionName) !== -1 ||
          typeof this[functionName] !== "function"
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
          log.error(`不被执行的函数名字 ${functionName}`);
        }
      });
      GLOBAL_RUN.init(
        needExecFunctionNameListByDomStart,
        needExecFunctionNameListByDOMReady
      );
    },
    /* 通用接口-复用 */
    api: {},
  };
  /* 执行 桌面端初始化 */
  ENTRANCE_DESKTOP.init();
  /* 执行 移动端初始化 */
  ENTRANCE_MOBILE.init();
})();
