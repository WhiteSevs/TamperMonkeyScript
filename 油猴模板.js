// ==UserScript==
// @name         自动生成的脚本
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
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
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1332775/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1323906/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1318702/DOMUtils.js
// ==/UserScript==

(function () {
  if (typeof unsafeWindow === "undefined") {
    unsafeWindow = globalThis;
  }
  /** @type {import("../库/pops")} */
  const pops = window.pops;
  /** @type {import("../库/Qmsg")} */
  const Qmsg = window.Qmsg;
  /** @type {import("../库/Utils")} */
  const utils = window.Utils.noConflict();
  /**@type {import("../库/DOMUtils")} */
  const DOMUtils = window.DOMUtils.noConflict();

  const log = new utils.Log(GM_info, unsafeWindow.console || console);
  /** 油猴菜单 */
  const GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });
  /* 配置控制台日志 */
  log.config({
    debug: false,
    logMaxCount: 20000,
    autoClearConsole: true,
    tag: true,
  });
  /* 配置吐司Qmsg */
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true,
  });

  /**
   * 配置面板
   */
  const PopsPanel = {
    /** 本地存储的总键名 */
    key: "GM_Panel",
    /** 属性attributes的data-key */
    attributeDataKey_Name: "data-key",
    /** 属性attributes的data-default-value */
    attributeDataDefaultValue_Name: "data-default-value",
    /** 初始化菜单 */
    initMenu() {
      this.initLocalDefaultValue();
      if (unsafeWindow.top !== unsafeWindow.self) {
        /* 不允许在iframe内重复注册 */
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          },
        },
      ]);
    },
    /** 初始化本地设置默认的值 */
    initLocalDefaultValue() {
      let content = this.getContent();
      content.forEach((item) => {
        if (!item["forms"]) {
          return;
        }
        item.forms.forEach((__item__) => {
          if (__item__.forms) {
            __item__.forms.forEach((containerItem) => {
              if (!containerItem.attributes) {
                return;
              }
              let key = containerItem.attributes[this.attributeDataKey_Name];
              let defaultValue =
                containerItem.attributes[this.attributeDataDefaultValue_Name];
              if (this.getValue(key) == null) {
                this.setValue(key, defaultValue);
              }
            });
          } else {
          }
        });
      });
    },
    /**
     * 设置值
     * @param {string} key 键
     * @param {any} value 值
     */
    setValue(key, value) {
      let localValue = GM_getValue(this.key, {});
      localValue[key] = value;
      GM_setValue(this.key, localValue);
    },
    /**
     * 获取值
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @returns {any}
     */
    getValue(key, defaultValue) {
      let localValue = GM_getValue(this.key, {});
      return localValue[key] ?? defaultValue;
    },
    /**
     * 删除值
     * @param {string} key 键
     */
    deleteValue(key) {
      let localValue = GM_getValue(this.key, {});
      delete localValue[key];
      GM_setValue(this.key, localValue);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: `${GM_info?.script?.name || ""}-设置`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        isMobile: true,
        width: "92vw",
        height: "80vh",
        drag: true,
        only: true,
      });
    },
    /**
     * 获取checkbox按钮配置
     * @param {string} text 文字
     * @param {?string} description （可选）描述
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event: InputEvent,value: boolean)=>boolean} clickCallBack （可选）点击回调
     * @returns {PopsPanelSwitchDetails}
     */
    getSwtichDetail(text, description, key, defaultValue, clickCallBack) {
      /**
       * @type {PopsPanelSwitchDetails}
       */
      let result = {
        text: text,
        type: "switch",
        description: description,
        attributes: {},
        getValue() {
          return Boolean(PopsPanel.getValue(key, defaultValue));
        },
        callback(event, value) {
          log.success(`${value ? "开启" : "关闭"} ${text}`);
          if (typeof clickCallBack === "function") {
            if (clickCallBack(event, value)) {
              return;
            }
          }
          PopsPanel.setValue(key, Boolean(value));
        },
      };
      result.attributes[this.attributeDataKey_Name] = key;
      result.attributes[this.attributeDataDefaultValue_Name] =
        Boolean(defaultValue);
      return result;
    },
    /**
     * 获取输入框配置
     * @param {string} text 文字
     * @param {string|undefined} description 描述
     * @param {string} [placeholder=""] 提示
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event:Event,value: string)=>boolean} _callback_ 输入回调
     * @returns {PopsPanelInputDetails}
     */
    getInputDetail(
      text,
      description,
      placeholder = "",
      key,
      defaultValue,
      _callback_
    ) {
      return {
        text: text,
        type: "input",
        attributes: {
          "data-key": key,
          "data-default-value": defaultValue,
        },
        description: description,
        getValue() {
          let localValue = PopsPanel.getValue(key, defaultValue);
          return localValue;
        },
        callback(event, value) {
          if (typeof _callback_ === "function") {
            if (_callback_(event, value)) {
              return;
            }
          }
          PopsPanel.setValue(key, value);
        },
        placeholder: placeholder,
      };
    },
    /**
     * 获取下拉列表配置
     * @param {string} text 文字
     * @param {string} description （可选）描述
     * @param {string} key 键
     * @param {any} defaultValue 默认值
     * @param {{
     * value: any,
     * text: string,
     * }[]} data 数据
     * @param {(event:PointerEvent, isSelectedValue: any, isSelectedText:string)=>void} selectCallBack（可选）选择的回调
     * @returns {PopsPanelSelectDetails}
     */
    getSelectDetail(
      text,
      description,
      key,
      defaultValue,
      data,
      selectCallBack
    ) {
      return {
        text: text,
        type: "select",
        description: description,
        attributes: {
          "data-key": key,
          "data-default-value": defaultValue,
        },
        getValue() {
          return PopsPanel.getValue(key, defaultValue);
        },
        callback(event, isSelectedValue, isSelectedText) {
          PopsPanel.setValue(key, isSelectedValue);
          if (typeof selectCallBack === "function") {
            selectCallBack(event, isSelectedValue, isSelectedText);
          }
        },
        data: data,
      };
    },
    /**
     * 获取配置内容
     * @returns {PopsPanelContentConfig[]}
     */
    getContent() {
      return [
        {
          id: "panel-config-",
          title: "通用",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [this.getSwtichDetail()],
            },
          ],
        },
      ];
    },
  };

  /* ---------------------入口--------------------- */
  PopsPanel.initMenu();

  /* ---------------------入口--------------------- */
})();
