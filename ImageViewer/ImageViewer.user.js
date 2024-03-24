// ==UserScript==
// @name         ImageViewer
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         data:image/png;base64,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
// @version      2024.3.24
// @description  Viewer看图工具，支持图片翻转、旋转、缩放
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        *://*/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-end
// @require      https://update.greasyfork.org/scripts/449471/1305484/Viewer.js
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1348320/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1347753/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1344519/DOMUtils.js
// ==/UserScript==

(function () {
  if(typeof unsafeWindow === "undefined"){
    unsafeWindow = globalThis;
  }
  /** @type {import("../库/pops")} */
  const pops = window.pops;
  /** @type {import("../库/Viewer")} */
  const Viewer = window.Viewer;
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
        isMobile: false,
        drag: true,
        only: true,
      });
    },
    /**
     * 获取checkbox按钮配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?string} description （可选）描述
     * @param {?(event: InputEvent,value: boolean)=>boolean} clickCallBack （可选）点击回调
     * @returns {PopsPanelSwitchDetails}
     */
    getSwtichDetail(text, key, defaultValue, description, clickCallBack) {
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
     * 获取下拉列表配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {any} defaultValue 默认值
     * @param {{
     * value: any,
     * text: string,
     * }[]} data 数据
     * @param {string} description （可选）描述
     * @param {(event:PointerEvent, isSelectedValue: any, isSelectedText:string)=>void} selectCallBack（可选）选择的回调
     * @returns {PopsPanelSelectDetails}
     */
    getSelectDetail(
      text,
      key,
      defaultValue,
      data,
      description,
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
          return GM_getValue(key, defaultValue);
        },
        callback(event, isSelectedValue, isSelectedText) {
          GM_setValue(key, isSelectedValue);
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
              forms: [
                this.getSwtichDetail(
                  "默认规则",
                  "user-rule-default-enable",
                  true,
                  "如果当前网站没有设置规则，那么使用默认规则"
                ),
              ],
            },
          ],
        },
      ];
    },
  };

  const ImageViewer = {
    /**
     * 查看图片
     * @param {string[]} imageUrlList 图片链接Url
     * @param {number} index 需要查看图片的下标，默认0
     */
    viewIMG(imageUrlList, index = 0) {
      log.info(["查看图片", [imageUrlList, index]]);
      let viewerULHTML = "";
      imageUrlList.forEach((item) => {
        viewerULHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
      });
      let viewerULElement = DOMUtils.createElement("ul", {
        innerHTML: viewerULHTML,
      });
      let viewer = new Viewer(viewerULElement, {
        inline: false,
        url: "data-src",
        zIndex: utils.getMaxZIndex() + 100,
        hidden: () => {
          viewer.destroy();
        },
      });
      index = parseInt(index);
      if (isNaN(index) || index < 0) {
        index = 0;
      }
      viewer.view(index);
      viewer.zoomTo(1);
      viewer.show();
    },
  };

  const ImageUtils = {
    /**
     * 获取<img>标签上的src属性
     * @param {HTMLImageElement} element
     * @returns {?string}
     */
    getImageElementUrl(element) {
      function isStringNull(target) {
        return (
          target.trim() === "null" ||
          target.trim() === "undefined" ||
          target.trim() === ""
        );
      }
      if (element == null) {
        return;
      }
      if (typeof element === "string" && isStringNull(element)) {
        return;
      }
      let url = "";
      if (isStringNull(url)) {
        if (element.hasAttribute("data-src")) {
          url = element.getAttribute("data-src");
        }
      }
      if (isStringNull(url)) {
        if (element.hasAttribute("src")) {
          url = element.getAttribute("src");
        }
      }
      if (isStringNull(url)) {
        if (element.hasAttribute("alt")) {
          url = element.getAttribute("alt");
        }
      }
      if (isStringNull(url)) {
        return;
      }
      return url;
    },
  };

  const WebSiteRule = {
    /**
     * 默认规则
     * @type {ImageViewerHandleClickEventRule}
     */
    defaultRule: {
      url: "*://*/*",
      selector: "img",
      mode: "handleClickEvent",
      isPreventDefault: true,
      clickEvent: `
      let imageElement = event.target;
      let url = this.ImageUtils.getImageElementUrl(imageElement);
      resolve({
        "isView": true,
        "imageList": [url],
      });
      `,
    },
    /**
     * 本地存储的用户规则
     * @type {ImageViewerRule[]}
     */
    userRule: GM_getValue("user-rule", []),
    /**
     * 当前筛选出的匹配的规则
     * @type {ImageViewerRule[]}
     */
    currentRule: [],
    /**
     * 初始化用户自定义的规则
     */
    initUserRule() {
      /* 筛选出当前网站的规则 */
      log.info("正在匹配当前网站规则...");
      this.userRule.forEach((rule, index) => {
        if (utils.isNull(rule)) {
          log.error(["改规则不存在匹配Url", [rule, index]]);
          return;
        }
        let urlPattern = new RegExp(rule.url, "gi");
        if (!urlPattern.test(window.location.href)) {
          return;
        }
        this.currentRule.push(rule);
      });

      if (
        this.currentRule.length === 0 &&
        PopsPanel.getValue("user-rule-default-enable")
      ) {
        /* 没有规则，使用默认规则 */
        this.currentRule.push(this.defaultRule);
      }
      log.success(["当前的看图规则", this.currentRule]);
      this.currentRule.forEach((rule) => {
        if (rule.mode === "handleClickEvent") {
          this.handleClickEvent(rule);
        } else if (rule.mode === "handleElement") {
          this.handleElement(rule);
        } else {
          log.error(["未知模式的规则", rule]);
        }
      });
    },
    /**
     * 处理点击事件
     * @param {ImageViewerHandleClickEventRule} rule
     */
    handleClickEvent(rule) {
      function setClickEvent(context) {
        DOMUtils.on(
          context,
          "click",
          rule.selector,
          async function (event) {
            /* 阻止默认事件触发 */
            if (rule.isPreventDefault) {
              utils.preventEvent(event);
            }
            const targetElement = event.target;
            /* Viewer的图片浏览 */
            if (
              targetElement instanceof HTMLImageElement &&
              targetElement.closest(".viewer-container")
            ) {
              return;
            }
            /* 图片列表 */
            let imageList = [];
            /* 图片列表下标 */
            let imageIndex = 0;
            if (typeof rule.clickEvent === "string") {
              const asyncUserClickEvent = function (event) {
                return new Promise((resolve, reject) => {
                  let userClickEvent = new Function(
                    "event",
                    "resolve",
                    "reject",
                    rule.clickEvent
                  ).bind({
                    ImageUtils: ImageUtils,
                    utils: utils,
                    DOMUtils: DOMUtils,
                  });
                  userClickEvent(event, resolve, reject);
                });
              };
              let result = await asyncUserClickEvent(event);
              if (!Boolean(result["isView"])) {
                return;
              }
              if (
                result["imageList"] != null &&
                Array.isArray(result["imageList"])
              ) {
                /* 覆盖当前的图片列表 */
                imageList = result["imageList"];
              }
              if (typeof result["imageIndex"] === "number") {
                imageIndex = result["imageIndex"];
                if (imageIndex < 0 || imageIndex >= imageList.length) {
                  /* 下标不在范围内，重置为0 */
                  imageIndex = 0;
                }
              }
            }
            ImageViewer.viewIMG(imageList, imageIndex);
          },
          {
            capture: true,
          }
        );
      }
      if (typeof rule.context === "string") {
        utils.waitNode(rule.context).then((contextElement) => {
          if (rule.useSelector === "querySelector") {
            setClickEvent(document.querySelector(rule.context));
          } else {
            setClickEvent(document.querySelectorAll(rule.context));
          }
        });
      } else {
        setClickEvent(document);
      }
    },
    /**
     * 处理元素
     * @param {ImageViewerHandleElementRule} rule
     */
    handleElement(rule) {},
  };

  /* ---------------------入口--------------------- */
  PopsPanel.initMenu();
  WebSiteRule.initUserRule();
  /* ---------------------入口--------------------- */
})();
