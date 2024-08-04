// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.8.4.23
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/449471/1413235/Viewer.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.0/dist/index.umd.js
// @connect      edith.xiaohongshu.com
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, Utils, DOMUtils, pops) {
  'use strict';

  var _a;
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "小红书优化";
  const utils = Utils.noConflict();
  const domutils = DOMUtils.noConflict();
  const __pops = pops;
  const Viewer = _monkeyWindow.Viewer || _unsafeWindow.Viewer;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 1e3,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false
      },
      {
        position: {
          get() {
            return PopsPanel.getValue("qmsg-config-position", "bottom");
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue("qmsg-config-maxnums", 5);
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue("qmsg-config-showreverse", true);
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
            return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
          }
        }
      }
    )
  );
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data;
  });
  httpx.config({
    logDetails: DEBUG
  });
  ({
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty
    },
    Function: {
      apply: _unsafeWindow.Function.prototype.apply,
      call: _unsafeWindow.Function.prototype.call
    },
    Element: {
      appendChild: _unsafeWindow.Element.prototype.appendChild
    },
    setTimeout: _unsafeWindow.setTimeout
  });
  const addStyle = utils.addStyle.bind(utils);
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const UISwitch = function(text, key, defaultValue, clickCallBack, description) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      getValue() {
        return Boolean(PopsPanel.getValue(key, defaultValue));
      },
      callback(event, value) {
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        PopsPanel.setValue(key, Boolean(value));
      },
      afterAddToUListCallBack: void 0
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const MSettingUI_Home = {
    id: "little-red-book-panel-config-home",
    title: "主页",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持点击事件",
                    "little-red-book-repariClick",
                    true,
                    void 0,
                    "可阻止点击跳转至下载页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MSettingUI_Notes = {
    id: "little-red-book-panel-config-note",
    title: "笔记",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "视频笔记",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "优化视频描述",
                    "little-red-book-optimizeVideoNoteDesc",
                    true,
                    void 0,
                    "让视频描述可以滚动显示更多"
                  ),
                  UISwitch(
                    "【屏蔽】作者热门笔记",
                    "little-red-book-shieldAuthorHotNote",
                    true,
                    void 0,
                    "建议开启"
                  ),
                  UISwitch(
                    "【屏蔽】热门推荐",
                    "little-red-book-shieldHotRecommendNote",
                    true,
                    void 0,
                    "建议开启"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "优化评论浏览",
                    "little-red-book-optimizeCommentBrowsing",
                    true,
                    void 0,
                    "加载评论，未登录最多查看1页评论(注：楼中楼评论已失效，api无法获取楼中楼评论，需要请求头X-T、X-S、X-B3-Traceid)"
                  ),
                  UISwitch(
                    "优化图片浏览",
                    "little-red-book-optimizeImageBrowsing",
                    true,
                    void 0,
                    "更方便的浏览图片"
                  ),
                  UISwitch(
                    "允许复制",
                    "little-red-book-allowCopy",
                    true,
                    void 0,
                    "可以复制笔记的内容"
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持webpack-弹窗",
                    "little-red-book-hijack-webpack-mask",
                    true,
                    void 0,
                    "如：打开App弹窗、登录弹窗"
                  ),
                  UISwitch(
                    "劫持webpack-唤醒App",
                    "little-red-book-hijack-webpack-scheme",
                    true,
                    void 0,
                    "禁止跳转商店小红书详情页/小红书"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const UISelect = function(text, key, defaultValue, data, callback, description) {
    let selectData = [];
    if (typeof data === "function") {
      selectData = data();
    } else {
      selectData = data;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        PopsPanel.setValue(key, isSelectedValue);
        if (typeof callback === "function") {
          callback(event, isSelectedValue, isSelectedText);
        }
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const SettingUI_Common = {
    id: "xhs-panel-config-common",
    title: "通用",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "允许复制",
                    "pc-xhs-allowCopy",
                    true,
                    void 0,
                    "可以选择文字并复制"
                  ),
                  UISwitch(
                    "新标签页打开文章",
                    "pc-xhs-open-blank-article",
                    false,
                    void 0,
                    "点击文章不会在本页展开，会打开新标签页"
                  )
                ]
              }
            ]
          },
          {
            text: "搜索",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "新标签页打开-搜索按钮",
                    "pc-xhs-search-open-blank-btn",
                    false,
                    void 0,
                    "点击右边的搜索按钮直接新标签页打开搜索内容"
                  ),
                  UISwitch(
                    "新标签页打开-回车键",
                    "pc-xhs-search-open-blank-keyboard-enter",
                    false,
                    void 0,
                    "按下回车键直接新标签页打开搜索内容"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】广告",
                    "pc-xhs-shieldAd",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】登录弹窗",
                    "pc-xhs-shield-login-dialog",
                    true,
                    void 0,
                    "屏蔽会自动弹出的登录弹窗"
                  ),
                  UISwitch(
                    "【屏蔽】选择文字弹出的搜索提示",
                    "pc-xhs-shield-select-text-search-position",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】顶部工具栏",
                    "pc-xhs-shield-topToolbar",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持Vue",
                    "pc-xhs-hook-vue",
                    false,
                    void 0,
                    "恢复__vue__属性"
                  )
                ]
              }
            ]
          },
          {
            text: "Toast配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "Toast位置",
                    "qmsg-config-position",
                    "bottom",
                    [
                      {
                        value: "topleft",
                        text: "左上角"
                      },
                      {
                        value: "top",
                        text: "顶部"
                      },
                      {
                        value: "topright",
                        text: "右上角"
                      },
                      {
                        value: "left",
                        text: "左边"
                      },
                      {
                        value: "center",
                        text: "中间"
                      },
                      {
                        value: "right",
                        text: "右边"
                      },
                      {
                        value: "bottomleft",
                        text: "左下角"
                      },
                      {
                        value: "bottom",
                        text: "底部"
                      },
                      {
                        value: "bottomright",
                        text: "右下角"
                      }
                    ],
                    (event, isSelectValue, isSelectText) => {
                      log.info("设置当前Qmsg弹出位置" + isSelectText);
                    },
                    "Toast显示在页面九宫格的位置"
                  ),
                  UISelect(
                    "最多显示的数量",
                    "qmsg-config-maxnums",
                    3,
                    [
                      {
                        value: 1,
                        text: "1"
                      },
                      {
                        value: 2,
                        text: "2"
                      },
                      {
                        value: 3,
                        text: "3"
                      },
                      {
                        value: 4,
                        text: "4"
                      },
                      {
                        value: 5,
                        text: "5"
                      }
                    ],
                    void 0,
                    "限制Toast显示的数量"
                  ),
                  UISwitch(
                    "逆序弹出",
                    "qmsg-config-showreverse",
                    false,
                    void 0,
                    "修改Toast弹出的顺序"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallBack, getToolTipContent, description, step) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") {
          return getToolTipContent(value);
        } else {
          return `${value}`;
        }
      },
      callback(event, value) {
        if (typeof changeCallBack === "function") {
          if (changeCallBack(event, value)) {
            return;
          }
        }
        PopsPanel.setValue(key, value);
      },
      min,
      max,
      step
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const SettingUI_Article = {
    id: "xhs-panel-config-article",
    title: "笔记",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "笔记宽屏",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "pc-xhs-article-fullWidth",
                    false,
                    void 0,
                    `让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`
                  ),
                  UISlider(
                    "占据范围",
                    "pc-xhs-article-fullWidth-widthSize",
                    90,
                    30,
                    100,
                    (event, value) => {
                      let $noteContainer = document.querySelector("#noteContainer");
                      if (!$noteContainer) {
                        log.error("未找到笔记容器");
                        return;
                      }
                      $noteContainer.style.width = `${value}vw`;
                    },
                    (value) => {
                      return `${value}%，默认：90%`;
                    },
                    "调整笔记页面占据的页面范围"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MSettingUI_Common = {
    id: "little-red-book-panel-config-common",
    title: "通用",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "Toast配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "Toast位置",
                    "qmsg-config-position",
                    "bottom",
                    [
                      {
                        value: "topleft",
                        text: "左上角"
                      },
                      {
                        value: "top",
                        text: "顶部"
                      },
                      {
                        value: "topright",
                        text: "右上角"
                      },
                      {
                        value: "left",
                        text: "左边"
                      },
                      {
                        value: "center",
                        text: "中间"
                      },
                      {
                        value: "right",
                        text: "右边"
                      },
                      {
                        value: "bottomleft",
                        text: "左下角"
                      },
                      {
                        value: "bottom",
                        text: "底部"
                      },
                      {
                        value: "bottomright",
                        text: "右下角"
                      }
                    ],
                    (event, isSelectValue, isSelectText) => {
                      log.info("设置当前Qmsg弹出位置" + isSelectText);
                    },
                    "Toast显示在页面九宫格的位置"
                  ),
                  UISelect(
                    "最多显示的数量",
                    "qmsg-config-maxnums",
                    3,
                    [
                      {
                        value: 1,
                        text: "1"
                      },
                      {
                        value: 2,
                        text: "2"
                      },
                      {
                        value: 3,
                        text: "3"
                      },
                      {
                        value: 4,
                        text: "4"
                      },
                      {
                        value: 5,
                        text: "5"
                      }
                    ],
                    void 0,
                    "限制Toast显示的数量"
                  ),
                  UISwitch(
                    "逆序弹出",
                    "qmsg-config-showreverse",
                    false,
                    void 0,
                    "修改Toast弹出的顺序"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】广告",
                    "little-red-book-shieldAd",
                    true,
                    void 0,
                    "如：App内打开"
                  ),
                  UISwitch(
                    "【屏蔽】底部搜索发现",
                    "little-red-book-shieldBottomSearchFind",
                    true,
                    void 0,
                    "建议开启"
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "little-red-book-shieldBottomToorBar",
                    true,
                    void 0,
                    "建议开启"
                  )
                ]
              }
            ]
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持Vue",
                    "little-red-book-hijack-vue",
                    false,
                    void 0,
                    "恢复__vue__属性"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      __data: null,
      __oneSuccessExecMenu: null,
      __onceExec: null,
      __listenData: null,
      /**
       * 菜单项的默认值
       */
      get data() {
        if (PopsPanel.$data.__data == null) {
          PopsPanel.$data.__data = new utils.Dictionary();
        }
        return PopsPanel.$data.__data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (PopsPanel.$data.__oneSuccessExecMenu == null) {
          PopsPanel.$data.__oneSuccessExecMenu = new utils.Dictionary();
        }
        return PopsPanel.$data.__oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (PopsPanel.$data.__onceExec == null) {
          PopsPanel.$data.__onceExec = new utils.Dictionary();
        }
        return PopsPanel.$data.__onceExec;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    /** 监听器 */
    $listener: {
      /**
       * 值改变的监听器
       */
      get listenData() {
        if (PopsPanel.$data.__listenData == null) {
          PopsPanel.$data.__listenData = new utils.Dictionary();
        }
        return PopsPanel.$data.__listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ 移动端-设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPanel();
          }
        },
        {
          key: "show_pops_panel_setting",
          text: "⚙ PC-设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showPCPanel();
          }
        }
      ]);
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config.attributes) {
          return;
        }
        let needInitConfig = {};
        let key = config.attributes[ATTRIBUTE_KEY];
        if (key != null) {
          needInitConfig[key] = config.attributes[ATTRIBUTE_DEFAULT_VALUE];
        }
        let __attr_init__ = config.attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          let __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        let initMoreValue = config.attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (initMoreValue && typeof initMoreValue === "object") {
          Object.assign(needInitConfig, initMoreValue);
        }
        let needInitConfigList = Object.keys(needInitConfig);
        if (!needInitConfigList.length) {
          log.warn(["请先配置键", config]);
          return;
        }
        needInitConfigList.forEach((__key) => {
          let __defaultValue = needInitConfig[__key];
          if (that.$data.data.has(__key)) {
            log.warn("请检查该key(已存在): " + __key);
          }
          that.$data.data.set(__key, __defaultValue);
        });
      }
      function loopInitDefaultValue(configList) {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
          }
        }
      }
      let contentConfigList = this.getPanelContentConfig().concat(
        this.getPCPanelContentConfig()
      );
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
          loopInitDefaultValue(rightContentConfigList);
        }
      }
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      locaData[key] = value;
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, value);
      }
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let locaData = _GM_getValue(KEY, {});
      let localValue = locaData[key];
      if (localValue == null) {
        if (this.$data.data.has(key)) {
          return this.$data.data.get(key);
        }
        return defaultValue;
      }
      return localValue;
    },
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let locaData = _GM_getValue(KEY, {});
      let oldValue = locaData[key];
      Reflect.deleteProperty(locaData, key);
      _GM_setValue(KEY, locaData);
      if (this.$listener.listenData.has(key)) {
        this.$listener.listenData.get(key).callback(key, oldValue, void 0);
      }
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      let deleteKey = null;
      for (const [key, value] of this.$listener.listenData.entries()) {
        if (value.id === listenerId) {
          deleteKey = key;
          break;
        }
      }
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
    },
    /**
     * 主动触发菜单值改变的回调
     * @param key 菜单键
     * @param newValue 想要触发的新值，默认使用当前值
     * @param oldValue 想要触发的旧值，默认使用当前值
     */
    triggerMenuValueChange(key, newValue, oldValue) {
      if (this.$listener.listenData.has(key)) {
        let listenData = this.$listener.listenData.get(key);
        if (typeof listenData.callback === "function") {
          let value = this.getValue(key);
          let __newValue = value;
          let __oldValue = value;
          if (typeof newValue !== "undefined" && arguments.length > 1) {
            __newValue = newValue;
          }
          if (typeof oldValue !== "undefined" && arguments.length > 2) {
            __oldValue = oldValue;
          }
          listenData.callback(key, __oldValue, __newValue);
        }
      }
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (isReverse) {
        value = !value;
      }
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
     * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
     */
    execMenuOnce(key, callback, getValueFn, handleValueChangeFn) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      if (this.$data.oneSuccessExecMenu.has(key)) {
        return;
      }
      this.$data.oneSuccessExecMenu.set(key, 1);
      let __getValue = () => {
        let localValue = PopsPanel.getValue(key);
        return typeof getValueFn === "function" ? getValueFn(key, localValue) : localValue;
      };
      let resultStyleList = [];
      let dynamicPushStyleNode = ($style) => {
        let __value = __getValue();
        let dynamicResultList = [];
        if ($style instanceof HTMLStyleElement) {
          dynamicResultList = [$style];
        } else if (Array.isArray($style)) {
          dynamicResultList = [
            ...$style.filter(
              (item) => item != null && item instanceof HTMLStyleElement
            )
          ];
        }
        if (__value) {
          resultStyleList = resultStyleList.concat(dynamicResultList);
        } else {
          for (let index = 0; index < dynamicResultList.length; index++) {
            let $css = dynamicResultList[index];
            $css.remove();
            dynamicResultList.splice(index, 1);
            index--;
          }
        }
      };
      let changeCallBack = (currentValue) => {
        let resultList = [];
        if (currentValue) {
          let result = callback(currentValue, dynamicPushStyleNode);
          if (result instanceof HTMLStyleElement) {
            resultList = [result];
          } else if (Array.isArray(result)) {
            resultList = [
              ...result.filter(
                (item) => item != null && item instanceof HTMLStyleElement
              )
            ];
          }
        }
        for (let index = 0; index < resultStyleList.length; index++) {
          let $css = resultStyleList[index];
          $css.remove();
          resultStyleList.splice(index, 1);
          index--;
        }
        resultStyleList = [...resultList];
      };
      this.addValueChangeListener(
        key,
        (__key, oldValue, newValue) => {
          let __newValue = newValue;
          if (typeof handleValueChangeFn === "function") {
            __newValue = handleValueChangeFn(__key, newValue, oldValue);
          }
          changeCallBack(__newValue);
        }
      );
      let value = __getValue();
      if (value) {
        changeCallBack(value);
      }
    },
    /**
     * 父子菜单联动，自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key 菜单键
     * @param childKey 子菜单键
     * @param callback 回调
     * @param replaceValueFn 用于修改mainValue，返回undefined则不做处理
     */
    execInheritMenuOnce(key, childKey, callback, replaceValueFn) {
      let that = this;
      const handleInheritValue = (key2, childKey2) => {
        let mainValue = that.getValue(key2);
        let childValue = that.getValue(childKey2);
        if (typeof replaceValueFn === "function") {
          let changedMainValue = replaceValueFn(mainValue, childValue);
          if (changedMainValue !== void 0) {
            return changedMainValue;
          }
        }
        return mainValue;
      };
      this.execMenuOnce(
        key,
        callback,
        () => {
          return handleInheritValue(key, childKey);
        },
        () => {
          return handleInheritValue(key, childKey);
        }
      );
      this.execMenuOnce(
        childKey,
        () => {
        },
        () => false,
        () => {
          this.triggerMenuValueChange(key);
          return false;
        }
      );
    },
    /**
     * 根据key执行一次
     * @param key
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExec.has(key)) {
        return;
      }
      callback();
      this.$data.onceExec.set(key, 1);
    },
    /**
     * 显示设置面板
     */
    showPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-移动端设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true
      });
    },
    /**
     * 显示设置面板
     */
    showPCPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getPCPanelContentConfig(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
            toHide: false
          }
        },
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true
      });
    },
    /**
     * 判断是否是移动端
     */
    isMobile() {
      return window.innerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.innerWidth < 550) {
        return "92vw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.innerHeight > 450) {
        return "80vh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        MSettingUI_Common,
        MSettingUI_Home,
        MSettingUI_Notes
      ];
      return configList;
    },
    /**
     * 获取配置内容
     */
    getPCPanelContentConfig() {
      let configList = [
        SettingUI_Common,
        SettingUI_Article
      ];
      return configList;
    }
  };
  const XHS_Hook = {
    /**
     * 劫持webpack
     * 笔记的
     */
    webpackChunkranchi() {
      let originObject = void 0;
      let webpackName = "webpackChunkranchi";
      Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          originObject = newValue;
          const oldPush = originObject.push;
          originObject.push = function(...args) {
            args[0][0];
            if (typeof args[0][1] === "object") {
              Object.keys(args[0][1]).forEach((keyName, index) => {
                if (typeof args[0][1][keyName] === "function" && args[0][1][keyName].toString().includes("是否打开小红书App?") && PopsPanel.getValue("little-red-book-hijack-webpack-mask")) {
                  log.success(["成功劫持各种弹窗/遮罩层：" + keyName]);
                  args[0][1][keyName] = function() {
                  };
                } else if (typeof args[0][1][keyName] === "function" && args[0][1][keyName].toString().startsWith(
                  "function(e,n,t){t.d(n,{Z:function(){return y}});"
                ) && args[0][1][keyName].toString().includes("jumpToApp") && PopsPanel.getValue("little-red-book-hijack-webpack-scheme")) {
                  let oldFunc = args[0][1][keyName];
                  args[0][1][keyName] = function(...args_1) {
                    log.success(["成功劫持scheme唤醒", args_1]);
                    let oldD = args_1[2].d;
                    args_1[2].d = function(...args_2) {
                      var _a2;
                      if (args_2.length === 2 && typeof ((_a2 = args_2[1]) == null ? void 0 : _a2["Z"]) === "function") {
                        let oldZ = args_2[1]["Z"];
                        if (oldZ.toString() === "function(){return y}") {
                          args_2[1]["Z"] = function(...args_3) {
                            let result = oldZ.call(this, ...args_3);
                            if (typeof result === "function" && result.toString().includes("jumpToApp")) {
                              return function() {
                                return {
                                  jumpToApp(data) {
                                    var _a3;
                                    log.success(["拦截唤醒", data]);
                                    if ((_a3 = data["deeplink"]) == null ? void 0 : _a3.startsWith(
                                      "xhsdiscover://user/"
                                    )) {
                                      let userId = data["deeplink"].replace(
                                        /^xhsdiscover:\/\/user\//,
                                        ""
                                      );
                                      let userHomeUrl = `https://www.xiaohongshu.com/user/profile/${userId}`;
                                      window.open(userHomeUrl, "_blank");
                                    }
                                  }
                                };
                              };
                            }
                            return result;
                          };
                        }
                      }
                      oldD.call(this, ...args_2);
                    };
                    oldFunc.call(this, ...args_1);
                  };
                }
              });
            }
            return oldPush.call(this, ...args);
          };
        }
      });
    },
    /**
     * 劫持vue，恢复属性__Ivue__
     */
    webPackVue() {
      let originApply = _unsafeWindow.Function.prototype.apply;
      let isHijack = false;
      _unsafeWindow.Function.prototype.apply = function(...args) {
        var _a2, _b, _c, _d, _e, _f;
        const result = originApply.call(this, ...args);
        if (!isHijack && args.length === 2 && ((_a2 = args[0]) == null ? void 0 : _a2.addRoute) && ((_b = args[0]) == null ? void 0 : _b.currentRoute) && ((_c = args[0]) == null ? void 0 : _c.getRoutes) && ((_d = args[0]) == null ? void 0 : _d.hasRoute) && ((_e = args[0]) == null ? void 0 : _e.install) && ((_f = args[0]) == null ? void 0 : _f.removeRoute)) {
          isHijack = true;
          let __vue__ = args[1][0];
          log.success(["成功劫持vue，version版本：", __vue__.version]);
          __vue__["mixin"]({
            mounted: function() {
              this.$el["__Ivue__"] = this;
            }
          });
        }
        return result;
      };
    }
  };
  const MXiaoHongShuSheldCSS = "/* 底部的App内打开 */\r\n.bottom-button-box,\r\n/* 顶部的打开看看 */\r\n.nav-bar-box,\r\n/* 首页-顶部的打开看看 */\r\n.launch-app-container {\r\n  display: none !important;\r\n}\r\n";
  const ScriptRouter = {
    /**
     * 判断是否是笔记页面
     */
    isNotePage() {
      return globalThis.location.pathname.startsWith("/discovery/item/");
    },
    /**
     * 判断是否是用户主页页面
     */
    isUserHomePage() {
      return globalThis.location.pathname.startsWith("/user/profile/");
    },
    /**
     * 判断是否是主页
     */
    isHomePage() {
      return globalThis.location.href === "https://www.xiaohongshu.com/" || globalThis.location.href === "https://www.xiaohongshu.com";
    },
    /**
     * 判断是否是搜索页面
     */
    isSearchPage() {
      return globalThis.location.pathname.startsWith("/search_result/");
    }
  };
  const XHS_BASE_URL = "https://edith.xiaohongshu.com";
  const XHSApi = {
    /**
     * 获取页信息
     */
    async getPageInfo(note_id, cursor = "", top_comment_id = "", image_formats = "jpg,webp") {
      const Api = `/api/sns/web/v2/comment/page`;
      const SearchParamsData = {
        note_id,
        cursor,
        top_comment_id,
        image_formats
      };
      const SearchParams = Api + "?" + utils.toSearchParamsStr(SearchParamsData);
      let getResp = await httpx.get(`${XHS_BASE_URL}${SearchParams}`, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomPCUA(),
          Origin: "https://www.xiaohongshu.com",
          Referer: "https://www.xiaohongshu.com/"
          // "X-S": signInfo.xs,
          // "X-T": signInfo.xt,
        }
      });
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else if (data["code"] === -101) {
        return;
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    /**
     * 获取楼中楼页信息
     */
    async getLzlPageInfo(note_id = "", root_comment_id = "", num = 10, cursor = "", image_formats = "jpg,webp,avif", top_comment_id = "") {
      const Api = `/api/sns/web/v2/comment/sub/page`;
      let ApiData = {
        note_id,
        root_comment_id,
        num,
        cursor,
        image_formats,
        top_comment_id
      };
      Api + "?" + utils.toSearchParamsStr(ApiData);
      let url = `${XHS_BASE_URL}${Api}?${utils.toSearchParamsStr(ApiData)}`;
      let getResp = await httpx.get(url, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Host: "edith.xiaohongshu.com",
          Origin: "https://www.xiaohongshu.com",
          Referer: "https://www.xiaohongshu.com/"
          // "X-S": signInfo.xs,
          // "X-T": signInfo.xt,
          // "X-S-Common": signInfo.xsCommon,
          // "X-B3-Traceid": signInfo.traceId,
        },
        onerror() {
        }
      });
      if (!getResp.status) {
        if (getResp.data.status === 406 && utils.isNotNull(getResp.data.responseText)) {
          let errorData = utils.toJSON(getResp.data.responseText);
          if (errorData["code"] == -1) {
            Qmsg.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败");
          } else {
            Qmsg.error("获取楼中楼信息失败");
          }
        } else {
          Qmsg.error("请求异常");
        }
        log.error(["获取楼中楼信息失败", getResp]);
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取楼中楼页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    /**
     * 获取搜索推荐内容
     * @param searchText
     */
    async getSearchRecommend(searchText) {
      let getResp = await httpx.get(
        `https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${searchText}`,
        {
          fetch: true
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (!(data.success || data.code === 1e3)) {
        return;
      }
      return data.data.sug_items;
    }
  };
  const CommonUtils = {
    /**
     * 添加屏蔽CSS
     * @param args
     * @example
     * addBlockCSS("")
     * addBlockCSS("","")
     * addBlockCSS(["",""])
     */
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) {
        return;
      }
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") {
        return;
      }
      args.forEach((selector) => {
        if (Array.isArray(selector)) {
          selectorList = selectorList.concat(selector);
        } else {
          selectorList.push(selector);
        }
      });
      return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    /**
     * 设置GM_getResourceText的style内容
     * @param resourceMapData 资源数据
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtils.addLinkNode(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     */
    async addLinkNode(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domutils.ready(() => {
        document.head.appendChild($link);
      });
      return $link;
    },
    /**
     * 将url修复，例如只有search的链接/sss/xxx?sss=xxxx
     * @param url 需要修复的链接
     */
    fixUrl(url) {
      url = url.trim();
      if (url.match(/^http(s|):\/\//i)) {
        return url;
      } else {
        if (!url.startsWith("/")) {
          url += "/";
        }
        url = window.location.origin + url;
        return url;
      }
    }
  };
  const MXHS_ArticleShield = {
    /**
     * 允许复制
     */
    allowCopy() {
      log.info("允许复制");
      return addStyle(
        /*css*/
        `
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `
      );
    },
    /**
     * 屏蔽底部搜索发现
     */
    shieldBottomSearchFind() {
      log.info("屏蔽底部搜索发现");
      return CommonUtils.addBlockCSS(
        ".hotlist-container",
        /* 一大块空白区域 */
        ".safe-area-bottom.margin-placeholder"
      );
    },
    /**
     * 屏蔽底部工具栏
     */
    shieldBottomToorBar() {
      log.info("屏蔽底部工具栏");
      return CommonUtils.addBlockCSS(".engage-bar-container");
    },
    /**
     * 屏蔽视频笔记的作者热门笔记
     */
    shieldAuthorHotNote() {
      log.info("屏蔽视频笔记的作者热门笔记");
      return CommonUtils.addBlockCSS(
        ".user-notes-box.user-notes-clo-layout-container"
      );
    },
    /**
     * 屏蔽视频笔记的热门推荐
     */
    shieldHotRecommendNote() {
      log.info("屏蔽视频笔记的热门推荐");
      return CommonUtils.addBlockCSS("#new-note-view-container .recommend-box");
    }
  };
  const MXHS_VideoArticle = {
    init() {
    },
    /**
     * 优化视频笔记的描述（可滚动）
     */
    optimizeVideoNoteDesc() {
      log.info("优化视频笔记的描述（可滚动）");
      return addStyle(
        /*css*/
        `
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`
      );
    }
  };
  const MXHS_Article = {
    init() {
      if (PopsPanel.getValue("little-red-book-hijack-webpack-mask") || PopsPanel.getValue("little-red-book-hijack-webpack-scheme")) {
        log.info("劫持webpack");
        XHS_Hook.webpackChunkranchi();
      }
      PopsPanel.execMenuOnce("little-red-book-shieldBottomSearchFind", () => {
        return MXHS_ArticleShield.shieldBottomSearchFind();
      });
      PopsPanel.execMenuOnce("little-red-book-shieldBottomToorBar", () => {
        return MXHS_ArticleShield.shieldBottomToorBar();
      });
      PopsPanel.execMenuOnce("little-red-book-optimizeImageBrowsing", () => {
        MXHS_Article.optimizeImageBrowsing();
      });
      PopsPanel.execMenuOnce("little-red-book-optimizeVideoNoteDesc", () => {
        return MXHS_VideoArticle.optimizeVideoNoteDesc();
      });
      PopsPanel.execMenuOnce("little-red-book-shieldAuthorHotNote", () => {
        return MXHS_ArticleShield.shieldAuthorHotNote();
      });
      PopsPanel.execMenuOnce("little-red-book-shieldHotRecommendNote", () => {
        return MXHS_ArticleShield.shieldHotRecommendNote();
      });
      domutils.ready(function() {
        PopsPanel.execMenu("little-red-book-optimizeCommentBrowsing", () => {
          MXHS_Article.optimizeCommentBrowsing();
        });
      });
    },
    /**
     * 优化评论浏览
     */
    optimizeCommentBrowsing() {
      log.info("优化评论浏览");
      const Comments = {
        QmsgLoading: void 0,
        scrollFunc: void 0,
        noteData: {},
        commentData: {},
        emojiMap: {},
        emojiNameList: [],
        currentCursor: void 0,
        commentContainer: void 0,
        init() {
          var _a2;
          this.emojiMap = ((_a2 = utils.toJSON(_unsafeWindow.localStorage.getItem("redmoji"))) == null ? void 0 : _a2["redmojiMap"]) || {};
          this.emojiNameList = Object.keys(this.emojiMap);
          this.scrollFunc = new utils.LockFunction(this.scrollEvent, this);
          Comments.noteData = _unsafeWindow["__INITIAL_STATE__"].noteData.data.noteData;
          Comments.commentData = _unsafeWindow["__INITIAL_STATE__"].noteData.data.commentData;
          log.info(["笔记数据", Comments.noteData]);
          log.info(["评论数据", Comments.commentData]);
        },
        /**
         *
         * @param data
         * @returns
         */
        getCommentHTML(data) {
          return (
            /*html*/
            `
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${data.user_id}">
							<img src="${data.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${data.user_id}" class="little-red-book-comments-author-name" target="_blank">
								${data.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${data.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${utils.formatTime(
            data.create_time
          )}</span>
								<span class="little-red-book-comments-location">${data.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `
          );
        },
        /**
         * 获取内容元素
         * @param {object} data
         * @returns
         */
        getCommentElement(data) {
          var _a2, _b;
          let content = data["content"];
          let create_time = data["create_time"] || parseInt(data["time"]);
          let id = data["id"];
          let ip_location = data["ip_location"] || data["ipLocation"];
          let sub_comment_has_more = data["sub_comment_has_more"];
          let sub_comment_count = parseInt(data["sub_comment_count"]) || 0;
          let sub_comment_cursor = data["sub_comment_cursor"];
          let sub_comments = data["sub_comments"] || data["subComments"];
          let user_avatar = (data["user_info"] || data["user"])["image"];
          let user_nickname = (data["user_info"] || data["user"])["nickname"];
          let user_id = ((_a2 = data == null ? void 0 : data["user_info"]) == null ? void 0 : _a2["user_id"]) || ((_b = data == null ? void 0 : data["user"]) == null ? void 0 : _b["userId"]);
          content = Comments.converContent(content);
          let commentItemElement = domutils.createElement("div", {
            className: "little-red-book-comments-item",
            innerHTML: (
              /*html*/
              `
					<div class="little-red-book-comments-parent">
					${Comments.getCommentHTML({
              user_id,
              user_avatar,
              user_nickname,
              content,
              create_time,
              ip_location
            })}
					</div>
					`
            )
          });
          if (sub_comment_has_more && Array.isArray(sub_comments)) {
            sub_comments.forEach((subCommentInfo) => {
              let subCommentElement = domutils.createElement("div", {
                className: "little-red-book-comments-reply-container",
                innerHTML: Comments.getCommentHTML({
                  user_id: subCommentInfo["user_info"]["user_id"],
                  user_avatar: subCommentInfo["user_info"]["image"],
                  user_nickname: subCommentInfo["user_info"]["nickname"],
                  content: Comments.converContent(subCommentInfo["content"]),
                  create_time: subCommentInfo["create_time"],
                  ip_location: subCommentInfo["ip_location"]
                })
              });
              commentItemElement.appendChild(subCommentElement);
            });
            if (sub_comment_count !== sub_comments.length) {
              let endReplyCount = sub_comment_count - sub_comments.length;
              let lzlCursor = sub_comment_cursor;
              let showMoreElement = domutils.createElement("div", {
                className: "little-red-book-comments-reply-show-more",
                innerText: `展开 ${endReplyCount} 条回复`
              });
              async function showMoreEvent() {
                let QmsgLoading = Qmsg.loading("加载中，请稍后...");
                let pageInfo = await XHSApi.getLzlPageInfo(
                  Comments.noteData["id"],
                  id,
                  10,
                  lzlCursor,
                  void 0
                );
                QmsgLoading.close();
                if (!pageInfo) {
                  return;
                }
                lzlCursor = pageInfo.cursor;
                endReplyCount = endReplyCount - pageInfo.comments.length;
                showMoreElement.innerText = `展开 ${endReplyCount} 条回复`;
                pageInfo.comments.forEach((subCommentInfo) => {
                  let subCommentElement = domutils.createElement("div", {
                    className: "little-red-book-comments-reply-container",
                    innerHTML: Comments.getCommentHTML({
                      user_id: subCommentInfo["user_info"]["user_id"],
                      user_avatar: subCommentInfo["user_info"]["image"],
                      user_nickname: subCommentInfo["user_info"]["nickname"],
                      content: Comments.converContent(subCommentInfo["content"]),
                      create_time: subCommentInfo["create_time"],
                      ip_location: subCommentInfo["ip_location"]
                    })
                  });
                  domutils.before(showMoreElement, subCommentElement);
                });
                if (!pageInfo.has_more) {
                  domutils.off(
                    showMoreElement,
                    "click",
                    void 0,
                    showMoreEvent,
                    {
                      capture: true
                    }
                  );
                  showMoreElement.remove();
                }
              }
              domutils.on(showMoreElement, "click", void 0, showMoreEvent, {
                capture: true
              });
              commentItemElement.appendChild(showMoreElement);
            }
          }
          return commentItemElement;
        },
        /**
         * 转换内容字符串中的emoji
         */
        converContent(content) {
          Comments.emojiNameList.forEach((emojiName) => {
            if (content.includes(emojiName)) {
              content = content.replaceAll(
                emojiName,
                /*html*/
                `<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${Comments.emojiMap[emojiName]}">`
              );
            }
          });
          return content;
        },
        /**
         * 滚动事件
         */
        async scrollEvent() {
          if (!utils.isNearBottom(window.innerHeight / 3)) {
            return;
          }
          if (this.QmsgLoading == null) {
            this.QmsgLoading = Qmsg.loading("加载中，请稍后...");
          }
          let pageInfo = await XHSApi.getPageInfo(
            Comments.noteData["id"],
            Comments.currentCursor
          );
          if (this.QmsgLoading) {
            this.QmsgLoading.close();
            this.QmsgLoading = void 0;
          }
          if (!pageInfo) {
            return;
          }
          Comments.currentCursor = pageInfo.cursor;
          pageInfo.comments.forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            Comments.commentContainer.appendChild(commentItemElement);
          });
          if (!pageInfo.has_more) {
            Qmsg.info("已加载全部评论");
            Comments.removeScrollEventListener();
            return;
          }
        },
        /**
         * 添加滚动监听
         */
        addSrollEventListener() {
          log.success("添加滚动监听事件");
          domutils.on(document, "scroll", void 0, Comments.scrollFunc.run, {
            capture: true,
            once: false,
            passive: true
          });
        },
        /**
         * 移除滚动监听
         */
        removeScrollEventListener() {
          log.success("移除滚动监听事件");
          domutils.off(document, "scroll", void 0, Comments.scrollFunc.run, {
            capture: true
          });
        }
      };
      utils.waitNode(".narmal-note-container").then(async () => {
        log.info("优化评论浏览-笔记元素出现");
        let noteViewContainer = document.querySelector(
          ".note-view-container"
        );
        let loading = Qmsg.loading("获取评论中，请稍后...");
        let commentContainer = domutils.createElement("div", {
          className: "little-red-book-comments-container",
          innerHTML: (
            /*html*/
            `
                <style>
                    .little-red-book-comments-parent {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                    }
                    
                    .little-red-book-comments-reply-container {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                        padding-left: 52px;
                    }
                    .little-red-book-comments-container {
                        background: #fff;
                        position: relative;
                        padding: 8px 8px;
                    }
                    
                    .little-red-book-comments-item {
                        position: relative;
                    }
                    
                    .little-red-book-comments-avatar {
                        flex: 0 0 auto;
                    }
                    
                    .little-red-book-comments-avatar img {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 100%;
                        border: 1px solid rgba(0,0,0,0.08);
                        object-fit: cover;
                        width: 40px;
                        height: 40px;
                    }
                    .little-red-book-comments-content-wrapper {
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;
                        flex-grow: 1;
                    }
                    
                    .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
                    
                    a.little-red-book-comments-author-name {
                        line-height: 18px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-content {
                        margin-top: 4px;
                        line-height: 140%;
                        color: #333;
                    }
                    
                    .little-red-book-comments-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size: 12px;
                        line-height: 16px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-info-date {
                        margin: 8px 0;
                    }
                    
                    span.little-red-book-comments-location {
                        margin-left: 4px;
                        line-height: 120%;
                    }
                    img.little-red-book-note-content-emoji {
                        margin: 0 1px;
                        height: 16px;
                        transform: translateY(2px);
                        position: relative;
                    }
                    .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                        width: 24px;
                        height: 24px;
                    }
                    .little-red-book-comments-total{
                        font-size: 14px;
                        color: rgba(51,51,51,0.6);
                        margin-left: 8px;
                        margin-bottom: 12px;
                    }
                    .little-red-book-comments-reply-show-more {
                    padding-left: calc(52px + 24px + 12px);
                    height: 32px;
                    line-height: 32px;
                    color: #13386c;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 14px;
                    }
                </style>
          `
          )
        });
        Comments.commentContainer = commentContainer;
        Comments.init();
        let totalElement = domutils.createElement("div", {
          className: "little-red-book-comments-total",
          innerHTML: `共 ${Comments.noteData["comments"]} 条评论`
        });
        commentContainer.appendChild(totalElement);
        let pageInfo = await XHSApi.getPageInfo(Comments.noteData["id"]);
        await utils.sleep(800);
        if (pageInfo) {
          Comments.currentCursor = pageInfo.cursor;
          pageInfo.comments.forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            commentContainer.appendChild(commentItemElement);
          });
          if (pageInfo.has_more) {
            Comments.addSrollEventListener();
          }
        } else if (Comments.commentData && Comments.commentData["comments"]) {
          log.info("从固定的评论中加载");
          Comments.commentData["comments"].forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            commentContainer.appendChild(commentItemElement);
          });
        }
        loading.close();
        domutils.append(noteViewContainer, commentContainer);
      });
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      log.info("优化图片浏览");
      function viewIMG(imgSrcList = [], index = 0) {
        let viewerULNodeHTML = "";
        imgSrcList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = domutils.createElement("ul", {
          innerHTML: viewerULNodeHTML
        });
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          }
        });
        index = index < 0 ? 0 : index;
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      }
      domutils.on(document, "click", ".note-image-box", function(event) {
        let clickElement = event.target;
        let imgElement = clickElement.querySelector("img");
        let imgList = [];
        let imgBoxList = [];
        if (clickElement.closest(".onix-carousel-item")) {
          imgBoxList = Array.from(
            clickElement.closest(".onix-carousel-item").parentElement.querySelectorAll("img")
          );
        } else {
          imgBoxList = [imgElement];
        }
        let index = imgBoxList.findIndex((value) => {
          return value == imgElement;
        });
        imgBoxList.forEach((element) => {
          let imgSrc = element.getAttribute("src") || element.getAttribute("data-src") || element.getAttribute("alt");
          if (imgSrc) {
            imgList.push(imgSrc);
          }
        });
        log.success(["点击浏览图片👉", imgList[index]]);
        viewIMG(imgList, index);
      });
    }
  };
  const MXHS_Home = {
    init() {
      domutils.ready(() => {
        PopsPanel.execMenuOnce("little-red-book-repariClick", () => {
          MXHS_Home.repariClick();
        });
      });
    },
    /**
     * 修复正确的点击跳转-用户主页
     * 点啥都不好使，都会跳转至下载页面
     */
    repariClick() {
      log.info("修复正确的点击跳转");
      domutils.on(
        document,
        "click",
        void 0,
        function(event) {
          var _a2, _b, _c, _d, _e;
          let clickElement = event.target;
          log.info(["点击的按钮元素", clickElement]);
          if ((_a2 = clickElement == null ? void 0 : clickElement.className) == null ? void 0 : _a2.includes("follow-btn")) {
            log.success("点击-关注按钮");
          } else if (clickElement == null ? void 0 : clickElement.closest("button.reds-button.message-btn")) {
            log.success("点击-私信按钮");
          } else if (clickElement == null ? void 0 : clickElement.closest("div.reds-tab-item")) {
            log.success("点击-笔记/收藏按钮");
          } else if (clickElement == null ? void 0 : clickElement.closest("section.reds-note-card")) {
            log.success("点击-笔记卡片");
            let sectionElement = clickElement == null ? void 0 : clickElement.closest(
              "section.reds-note-card"
            );
            let note_id = sectionElement.getAttribute("id") || ((_d = (_c = (_b = utils.toJSON(sectionElement.getAttribute("impression"))) == null ? void 0 : _b["noteTarget"]) == null ? void 0 : _c["value"]) == null ? void 0 : _d["noteId"]);
            if (note_id) {
              window.open(
                `https://www.xiaohongshu.com/discovery/item/${(_e = clickElement == null ? void 0 : clickElement.closest("section.reds-note-card")) == null ? void 0 : _e.getAttribute("id")}`,
                "_blank"
              );
            } else {
              Qmsg.error("获取笔记note_id失败");
            }
          }
          utils.preventEvent(event);
          return false;
        },
        {
          capture: true
        }
      );
    }
  };
  const MXHS = {
    init() {
      PopsPanel.execMenu("little-red-book-hijack-vue", () => {
        log.info("劫持页面的Vue");
        XHS_Hook.webPackVue();
      });
      PopsPanel.execMenuOnce("little-red-book-shieldAd", () => {
        log.info("注入默认屏蔽CSS");
        return addStyle(MXiaoHongShuSheldCSS);
      });
      PopsPanel.execMenuOnce("little-red-book-allowCopy", () => {
        return MXHS.allowCopy();
      });
      if (ScriptRouter.isNotePage()) {
        MXHS_Article.init();
      } else if (ScriptRouter.isUserHomePage()) {
        MXHS_Home.init();
      }
    },
    /**
     * 允许复制
     */
    allowCopy() {
      log.info("允许复制文字");
      return addStyle(`
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `);
    }
  };
  const XHSShieldCSS = "";
  const XHS_Shield = {
    init() {
      PopsPanel.execMenuOnce("pc-xhs-shieldAd", () => {
        return addStyle(XHSShieldCSS);
      });
      PopsPanel.execMenuOnce("pc-xhs-shield-select-text-search-position", () => {
        return this.shieldSelectTextVisibleSearchPosition();
      });
      PopsPanel.execMenuOnce("pc-xhs-shield-topToolbar", () => {
        return this.shieldTopToolbar();
      });
      domutils.ready(() => {
        PopsPanel.execMenuOnce("pc-xhs-shield-login-dialog", () => {
          this.shieldLoginContainer();
        });
      });
    },
    /**
     * 屏蔽登录弹窗显示
     */
    shieldLoginContainer() {
      log.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");
      CommonUtils.addBlockCSS(".login-container");
      utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true
        },
        callback: () => {
          let $close = document.querySelector(
            ".login-container .icon-btn-wrapper"
          );
          if ($close) {
            $close.click();
            log.success("登录弹窗出现，关闭");
          }
        }
      });
    },
    /**
     * 屏蔽选择文字弹出的搜索提示
     */
    shieldSelectTextVisibleSearchPosition() {
      log.info("屏蔽选择文字弹出的搜索提示");
      return CommonUtils.addBlockCSS(".search-position");
    },
    /**
     * 【屏蔽】顶部工具栏
     */
    shieldTopToolbar() {
      log.info("【屏蔽】顶部工具栏");
      return [
        CommonUtils.addBlockCSS("#headerContainer"),
        addStyle(
          /*css*/
          `
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`
        )
      ];
    }
  };
  const XHSUrlApi = {
    /**
     * 获取搜索链接
     * @param searchText 
     * @returns 
     */
    getSearchUrl(searchText) {
      return `https://www.xiaohongshu.com/search_result?keyword=${searchText}&source=web_explore_feed`;
    }
  };
  const XHS_Article = {
    init() {
      if (PopsPanel.getValue("pc-xhs-search-open-blank-btn") || PopsPanel.getValue("pc-xhs-search-open-blank-keyboard-enter")) {
        this.optimizationSearch();
      }
      PopsPanel.execMenuOnce("pc-xhs-article-fullWidth", () => {
        return this.fullWidth();
      });
    },
    /**
     * 优化搜索
     */
    optimizationSearch() {
      function blankSearchText(searchText, isBlank = true) {
        {
          let $searchText = document.querySelector("#search-input");
          if ($searchText) {
            let searchText2 = $searchText.value;
            let searchUrl = XHSUrlApi.getSearchUrl(searchText2);
            log.info("搜索内容: " + searchText2);
            window.open(searchUrl, isBlank ? "_blank" : "_self");
          } else {
            Qmsg.error("未找到搜索的输入框");
          }
        }
      }
      utils.waitNode("#search-input").then(($searchInput) => {
        $searchInput.placeholder = "搜索小红书";
        PopsPanel.execMenu("pc-xhs-search-open-blank-keyboard-enter", () => {
          utils.listenKeyboard(
            $searchInput,
            "keydown",
            (keyName, keyValue, otherCodeList, event) => {
              if (keyName === "Enter" && !otherCodeList.length) {
                log.info("按下回车键");
                utils.preventEvent(event);
                $searchInput.blur();
                blankSearchText();
              }
            }
          );
        });
      });
      utils.waitNode("#search-input + .input-button .search-icon").then(($searchIconBtn) => {
        PopsPanel.execMenu("pc-xhs-search-open-blank-btn", () => {
          domutils.on(
            $searchIconBtn,
            "click",
            (event) => {
              utils.preventEvent(event);
              log.info("点击搜索按钮");
              blankSearchText();
            },
            {
              capture: true
            }
          );
        });
      });
    },
    /**
     * 笔记宽屏
     */
    fullWidth() {
      log.info("笔记宽屏");
      let noteContainerWidth = PopsPanel.getValue(
        "pc-xhs-article-fullWidth-widthSize",
        90
      );
      return addStyle(
        /*css*/
        `
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100vw !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${noteContainerWidth}vw;
		}
		`
      );
    }
  };
  const XHS = {
    init() {
      PopsPanel.execMenu("pc-xhs-hook-vue", () => {
        XHS_Hook.webPackVue();
      });
      PopsPanel.execMenu("pc-xhs-allowCopy", () => {
        XHS.allowPCCopy();
      });
      PopsPanel.execMenu("pc-xhs-open-blank-article", () => {
        XHS.openBlankArticle();
      });
      XHS_Shield.init();
      XHS_Article.init();
    },
    /**
     * 允许复制
     */
    allowPCCopy() {
      log.success("允许复制文字");
      domutils.on(
        _unsafeWindow,
        "copy",
        void 0,
        function(event) {
          utils.preventEvent(event);
          let selectText = _unsafeWindow.getSelection();
          if (selectText) {
            utils.setClip(selectText.toString());
          } else {
            log.error("未选中任何内容");
          }
          return false;
        },
        {
          capture: true
        }
      );
    },
    /**
     * 新标签页打开文章
     */
    openBlankArticle() {
      log.success("新标签页打开文章");
      domutils.on(
        document,
        "click",
        ".feeds-container .note-item",
        function(event) {
          utils.preventEvent(event);
          let $click = event.target;
          let $url = $click.querySelector("a[href]");
          if ($url && $url.href) {
            log.info("跳转文章: " + $url.href);
            window.open($url.href, "_blank");
          } else {
            Qmsg.error("未找到文章链接");
          }
        },
        {
          capture: true
        }
      );
    }
  };
  addStyle(
    /*css*/
    `
.qmsg svg.animate-turn {
    fill: none;
}
`
  );
  PopsPanel.init();
  let isMobile = utils.isPhone();
  let CHANGE_ENV_SET_KEY = "change_env_set";
  let chooseMode = _GM_getValue(CHANGE_ENV_SET_KEY);
  GM_Menu.add({
    key: CHANGE_ENV_SET_KEY,
    text: `⚙ 自动: ${isMobile ? "移动端" : "PC端"}`,
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      if (chooseMode == null) {
        return text;
      }
      return text + ` 手动: ${chooseMode == 1 ? "移动端" : chooseMode == 2 ? "PC端" : "未知"}`;
    },
    callback: () => {
      let allowValue = [0, 1, 2];
      let chooseText = window.prompt(
        "请输入当前脚本环境判定\n\n自动判断: 0\n移动端: 1\nPC端: 2",
        "0"
      );
      if (!chooseText) {
        return;
      }
      let chooseMode2 = parseInt(chooseText);
      if (isNaN(chooseMode2)) {
        Qmsg.error("输入的不是规范的数字");
        return;
      }
      if (!allowValue.includes(chooseMode2)) {
        Qmsg.error("输入的值必须是0或1或2");
        return;
      }
      if (chooseMode2 == 0) {
        _GM_deleteValue(CHANGE_ENV_SET_KEY);
      } else {
        _GM_setValue(CHANGE_ENV_SET_KEY, chooseMode2);
      }
    }
  });
  if (chooseMode != null) {
    log.info(`手动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
    if (chooseMode == 1) {
      MXHS.init();
    } else if (chooseMode == 2) {
      XHS.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      MXHS.init();
    } else {
      log.info("自动判定为PC端");
      XHS.init();
    }
  }

})(Qmsg, Utils, DOMUtils, pops);