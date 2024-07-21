// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.22
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.9.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.4.0/dist/index.umd.js
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var _a;
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "CSDN优化";
  const utils = Utils.noConflict();
  const domutils = DOMUtils.noConflict();
  const __pops = pops;
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
  const addStyle = utils.addStyle;
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const CSDNRouter = {
    /**
     * 判断是否是华为云联盟
     * + huaweicloud.csdn.net
     */
    isHuaWeiCloudBlog() {
      return Boolean(/huaweicloud.csdn.net/i.test(window.location.origin));
    },
    /**
     * 判断是否是博客
     * + blog.csdn.net
     */
    isBlog() {
      return Boolean(/blog.csdn.net/i.test(window.location.origin));
    },
    /**
     * 判断是否是文库
     * + wenku.csdn.net
     */
    isWenKu() {
      return Boolean(/wenku.csdn.net/i.test(window.location.origin));
    },
    /**
     * 判断是否是链接
     * + link.csdn.net
     */
    isLink() {
      return window.location.hostname === "link.csdn.net";
    },
    /**
     * 判断是否是搜索
     * + so.csdn.net
     */
    isSo() {
      return window.location.hostname === "so.csdn.net";
    },
    /**
     * 判断是否是C知道
     * + so.csdn.net/know
     * + /chat
     * + /so/ai
     */
    isSoCKnow() {
      return this.isSo() && (window.location.pathname.startsWith("/chat") || window.location.pathname.startsWith("/so/ai"));
    },
    /**
     * 判断是否是资源页面
     * + download.csdn.net
     */
    isDownload() {
      return window.location.hostname === "download.csdn.net";
    }
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallBack, getToolTipContent, description) {
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
      max
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
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
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) {
            return;
          }
        }
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
  const SettingUIBlog = {
    id: "panel-blog",
    title: "博客",
    isDefault() {
      return CSDNRouter.isBlog();
    },
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "全局屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】登录弹窗",
                    "csdn-blog-shieldLoginDialog",
                    true
                  ),
                  UISwitch(
                    "【屏蔽】左侧博客信息",
                    "csdn-blog-shieldLeftBlogContainerAside",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】右侧目录信息",
                    "csdn-blog-shieldRightDirectoryInformation",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】顶部工具栏",
                    "csdn-blog-shieldTopToolbar",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】底部的悬浮工具栏",
                    "csdn-blog-shieldBottomFloatingToolbar",
                    false
                  )
                ]
              }
            ]
          },
          {
            text: "右侧悬浮工具栏",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "csdn-blog-rightToolbarEnable",
                    true,
                    void 0,
                    "创作中心，隐藏/显示侧栏，新手引导，客服、举报..."
                  ),
                  UISwitch(
                    "【添加按钮】前往评论",
                    "csdn-blog-addGotoRecommandButton",
                    true,
                    void 0,
                    "在悬浮工具栏最后面添加"
                  ),
                  UISlider(
                    "right偏移",
                    "csdn-blog-rightToolbarRightOffset",
                    90,
                    0,
                    document.documentElement.clientWidth,
                    (event, value) => {
                      let csdnSideToolbar = document.querySelector(
                        ".csdn-side-toolbar"
                      );
                      domutils.css(csdnSideToolbar, {
                        right: value + "px"
                      });
                    },
                    (value) => {
                      return `当前：${value}px，默认：90px`;
                    }
                  ),
                  UISlider(
                    "top偏移",
                    "csdn-blog-rightToolbarTopOffset",
                    140,
                    0,
                    document.documentElement.clientHeight,
                    (event, value) => {
                      let csdnSideToolbar = document.querySelector(
                        ".csdn-side-toolbar"
                      );
                      domutils.css(csdnSideToolbar, {
                        top: value + "px"
                      });
                    },
                    (value) => {
                      return `当前：${value}px，默认：90px`;
                    }
                  )
                ]
              },
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】创作中心",
                    "csdn-blog-rightToolbarCreativeCenter",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】显示/隐藏侧栏",
                    "csdn-blog-rightToolbarShowOrSidebar",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】新手引导",
                    "csdn-blog-rightToolbarBeginnerGuidance",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】客服",
                    "csdn-blog-rightToolbarCustomerService",
                    false
                  ),
                  UISwitch("【屏蔽】举报", "csdn-blog-rightToolbarReport", false),
                  UISwitch(
                    "【屏蔽】返回顶部",
                    "csdn-blog-rightToolbarBackToTop",
                    false
                  )
                ]
              }
            ]
          },
          {
            text: "内容",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "点击代码块自动展开",
                    "csdn-blog-clickPreCodeAutomatically",
                    true,
                    void 0,
                    "当鼠标点击代码块区域时，将自动展开内容"
                  ),
                  UISwitch(
                    "自动展开代码块",
                    "csdn-blog-autoExpandCodeContent",
                    true,
                    void 0,
                    "懒人操作，免手动点击展开"
                  ),
                  UISwitch(
                    "自动展开内容",
                    "csdn-blog-autoExpandContent",
                    true,
                    void 0,
                    "懒人操作，免手动点击展开"
                  ),
                  UISwitch(
                    "全文居中",
                    "csdn-blog-articleCenter",
                    true,
                    function(event, enable) {
                      if (enable) {
                        alert(
                          "为了更好的呈现效果，请开启功能：【屏蔽】左侧博客信息、【屏蔽】右侧目录信息"
                        );
                      }
                    },
                    "自动屏蔽左侧和右侧的信息，且将文章居中"
                  ),
                  UISwitch(
                    "允许选择内容",
                    "csdn-blog-allowSelectContent",
                    true,
                    void 0
                  )
                ]
              },
              {
                text: "屏蔽",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部xx技能树",
                    "csdn-blog-shieldBottomSkillTree",
                    false
                  ),
                  UISwitch(
                    "【屏蔽】选中文字悬浮栏",
                    "csdn-blog-shieldArticleSearchTip",
                    false,
                    void 0,
                    "选中文字弹出的，例如：搜索、评论、笔记"
                  )
                ]
              }
            ]
          },
          {
            text: "评论区",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "csdn-blog-blockComment",
                    true,
                    void 0,
                    "关闭是屏蔽评论区"
                  ),
                  UISwitch("优化评论区的位置", "csdn-blog-restoreComments", true)
                ]
              }
            ]
          },
          {
            text: "底部文章",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "csdn-blog-bottomRecommendArticleEnable",
                    true,
                    void 0,
                    "关闭是屏蔽底部文章"
                  ),
                  UISwitch(
                    "标识CSDN下载",
                    "csdn-blog-identityCSDNDownload",
                    true,
                    void 0,
                    "使用红框标识"
                  ),
                  UISwitch(
                    "移除资源下载的文章",
                    "csdn-blog-removeResourceDownloadArticle",
                    false,
                    void 0,
                    "移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"
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
                    "拦截-复制的小尾巴",
                    "csdn-blog-removeClipboardHijacking",
                    true
                  ),
                  UISwitch(
                    "劫持-禁止复制",
                    "csdn-blog-unBlockCopy",
                    true,
                    void 0,
                    "允许点击复制按钮进行复制"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const SettingUILink = {
    id: "panel-link",
    title: "链接",
    isDefault() {
      return CSDNRouter.isLink();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "重定向链接",
            "csdn-link-jumpRedirect",
            true,
            void 0,
            "自动跳转至被拦截的Url链接"
          )
        ]
      }
    ]
  };
  const SettingUIHuaWeiCloud = {
    id: "panel-hua-wei-cloud",
    title: "华为云开发者联盟",
    isDefault() {
      return CSDNRouter.isHuaWeiCloudBlog();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch("自动展开全文", "csdn-hua-wei-cloud-autoExpandContent", true)
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】云开发者任务挑战活动",
            "csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",
            true
          ),
          UISwitch(
            "【屏蔽】左侧悬浮按钮",
            "csdn-hua-wei-cloud-shieldLeftFloatingButton",
            false,
            function(event, enable) {
              if (enable) {
                alert(
                  "开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】"
                );
              }
            }
          ),
          UISwitch(
            "【屏蔽】右侧栏",
            "csdn-hua-wei-cloud-blockRightColumn",
            false,
            function(event, enable) {
              if (enable) {
                alert(
                  "开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】"
                );
              }
            }
          ),
          UISwitch(
            "【屏蔽】底部推荐内容",
            "csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",
            false
          ),
          UISwitch(
            "【屏蔽】底部更多推荐",
            "csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",
            false
          )
        ]
      }
    ]
  };
  const SettingUIWenKu = {
    id: "panel-wenku",
    title: "资源",
    isDefault() {
      return CSDNRouter.isLink();
    },
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】资源推荐",
            "csdn-wenku-shieldResourceRecommend",
            false
          ),
          UISwitch(
            "【屏蔽】右侧用户信息",
            "csdn-wenku-shieldRightUserInfo",
            false
          ),
          UISwitch(
            "【屏蔽】右侧悬浮工具栏",
            "csdn-wenku-shieldRightToolBar",
            false
          )
        ]
      }
    ]
  };
  const SettingUISo = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
      return CSDNRouter.isSo();
    },
    forms: [
      {
        text: "C知道-功能",
        type: "forms",
        forms: [UISwitch("去除水印", "csdn-so-cknow-removeMaskCover", true)]
      }
    ]
  };
  const MSettingUIBlog = {
    id: "m-panel-blog",
    title: "博客",
    isDefault() {
      return CSDNRouter.isBlog();
    },
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "全局屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】广告",
                    "m-csdn-blog-removeAds",
                    true,
                    void 0,
                    "包括：登录弹窗、打开APP、ios版本提示等"
                  ),
                  UISwitch(
                    "【屏蔽】顶部Toolbar",
                    "m-csdn-blog-shieldTopToolbar",
                    false
                  )
                ]
              }
            ]
          },
          {
            text: "内容",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "允许选中文字",
                    "m-csdn-blog-allowSelectText",
                    true,
                    void 0,
                    "设置user-select: text;"
                  ),
                  UISwitch(
                    "自动展开",
                    "m-csdn-blog-autoExpandContent",
                    true,
                    void 0,
                    "包括内容、代码块"
                  ),
                  UISwitch(
                    "不限制代码块的最大高度",
                    "m-csdn-blog-notLimitCodePreMaxHeight",
                    false,
                    void 0,
                    "让代码块的高度直接被撑开"
                  )
                ]
              }
            ]
          },
          {
            text: "评论",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "m-csdn-blog-comment-enable",
                    true,
                    void 0,
                    "关闭是屏蔽评论区"
                  ),
                  UISwitch(
                    "不限制评论区的最大高度",
                    "m-csdn-blog-notLimitCommentMaxHeight",
                    true,
                    void 0,
                    "让评论区高度直接被撑开"
                  )
                ]
              }
            ]
          },
          {
            text: "底部文章",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "m-csdn-blog-bottomArticleEnable",
                    true,
                    void 0,
                    "关闭是屏蔽底部文章"
                  ),
                  UISwitch(
                    "移除资源下载",
                    "m-csdn-blog-removeResourceArticle",
                    false,
                    void 0,
                    "移除download.csdn.net、www.iteye.com、edu.csdn.net的文章链接"
                  ),
                  UISwitch(
                    "重构",
                    "m-csdn-blog-refactoringRecommendation",
                    true,
                    void 0,
                    "文章的样式统一"
                  ),
                  UISwitch(
                    "新标签页打开",
                    "m-csdn-blog-openNewTab",
                    true,
                    void 0,
                    "新标签页打开文章"
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
                    "劫持-禁止复制",
                    "m-csdn-blog-unBlockCopy",
                    true,
                    void 0,
                    "允许点击复制按钮进行复制"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MSettingUILink = {
    id: "m-panel-link",
    title: "链接",
    isDefault() {
      return CSDNRouter.isLink();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "重定向链接",
            "m-csdn-link-jumpRedirect",
            true,
            void 0,
            "自动跳转至被拦截的Url链接"
          )
        ]
      }
    ]
  };
  const MSettingUISo = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
      return CSDNRouter.isSo();
    },
    forms: [
      {
        text: "C知道-功能",
        type: "forms",
        forms: [UISwitch("去除水印", "m-csdn-so-cknow-removeMaskCover", true)]
      }
    ]
  };
  const MSettingUIWenKu = {
    id: "m-panel-wenku",
    title: "文库",
    isDefault() {
      return CSDNRouter.isWenKu();
    },
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】底部工具栏",
            "m-csdn-wenku-shieldBottomToolbar",
            false
          )
        ]
      }
    ]
  };
  const MSettingUIHuaWeiCloud = {
    id: "m-panel-hua-wei-cloud",
    title: "华为云开发者联盟",
    isDefault() {
      return CSDNRouter.isHuaWeiCloudBlog();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "自动展开全文",
            "m-csdn-hua-wei-cloud-autoExpandContent",
            true
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】底部加入社区",
            "m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",
            true
          )
        ]
      }
    ]
  };
  const MSettingUIDownload = {
    id: "m-panel-download",
    title: "资源",
    isDefault() {
      return CSDNRouter.isDownload();
    },
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "自动展开资源介绍",
            "m-csdn-download-automaticallyExpandResourceIntroduction",
            true,
            void 0,
            "屏蔽资源介绍【展开全部】按钮并展开资源介绍"
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】广告",
            "m-csdn-download-removeAds",
            true,
            void 0,
            "包括：登录弹窗、会员降价等"
          )
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
  const SettingUICommon = {
    id: "component-common",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
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
      // {
      // 	text: "Cookie配置",
      // 	type: "forms",
      // 	forms: [
      // 		UISwitch(
      // 			"启用",
      // 			"httpx-use-cookie-enable",
      // 			false,
      // 			void 0,
      // 			"启用后，将根据下面的配置进行添加cookie"
      // 		),
      // 		UISwitch(
      // 			"使用document.cookie",
      // 			"httpx-use-document-cookie",
      // 			false,
      // 			void 0,
      // 			"自动根据请求的域名来设置对应的cookie"
      // 		),
      // 		UITextArea(
      // 			"tieba.baidu.com",
      // 			"httpx-cookie-tieba.baidu.com",
      // 			"",
      // 			void 0,
      // 			void 0,
      // 			"Cookie格式：xxx=xxxx;xxx=xxxx"
      // 		),
      // 	],
      // },
    ]
  };
  const MSettingUICommon = {
    id: "component-common",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
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
      // {
      // 	text: "Cookie配置",
      // 	type: "forms",
      // 	forms: [
      // 		UISwitch(
      // 			"启用",
      // 			"httpx-use-cookie-enable",
      // 			false,
      // 			void 0,
      // 			"启用后，将根据下面的配置进行添加cookie"
      // 		),
      // 		UISwitch(
      // 			"使用document.cookie",
      // 			"httpx-use-document-cookie",
      // 			false,
      // 			void 0,
      // 			"自动根据请求的域名来设置对应的cookie"
      // 		),
      // 		UITextArea(
      // 			"tieba.baidu.com",
      // 			"httpx-cookie-tieba.baidu.com",
      // 			"",
      // 			void 0,
      // 			void 0,
      // 			"Cookie格式：xxx=xxxx;xxx=xxxx"
      // 		),
      // 	],
      // },
    ]
  };
  const __PopsPanel__ = {
    data: null,
    oneSuccessExecMenu: null,
    onceExec: null,
    listenData: null
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      get data() {
        if (__PopsPanel__.data == null) {
          __PopsPanel__.data = new utils.Dictionary();
        }
        return __PopsPanel__.data;
      },
      /**
       * 成功只执行了一次的项
       */
      get oneSuccessExecMenu() {
        if (__PopsPanel__.oneSuccessExecMenu == null) {
          __PopsPanel__.oneSuccessExecMenu = new utils.Dictionary();
        }
        return __PopsPanel__.oneSuccessExecMenu;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExec() {
        if (__PopsPanel__.onceExec == null) {
          __PopsPanel__.onceExec = new utils.Dictionary();
        }
        return __PopsPanel__.onceExec;
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
        if (__PopsPanel__.listenData == null) {
          __PopsPanel__.listenData = new utils.Dictionary();
        }
        return __PopsPanel__.listenData;
      }
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
        return;
      }
      GM_Menu.add([
        {
          key: "show_pops_panel_setting",
          text: "⚙ PC端设置",
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
          key: "m_show_pops_panel_setting",
          text: "⚙ 移动端端设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showMPanel();
          }
        },
        {
          key: "gotoCSDNCKnow",
          text: "⚙ 前往C知道",
          isStoreValue: false,
          autoReload: false,
          showText(text) {
            return text;
          },
          callback() {
            window.open("https://so.csdn.net/chat", "_blank");
          }
        }
      ]);
    },
    /** 初始化本地设置默认的值 */
    initPanelDefaultValue() {
      let that = this;
      function initDefaultValue(config) {
        if (!config["attributes"]) {
          return;
        }
        let key = config.attributes[ATTRIBUTE_KEY];
        let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
        if (key == null) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (that.$data.data.has(key)) {
          log.warn("请检查该key(已存在): " + key);
        }
        that.$data.data.set(key, defaultValue);
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
        this.getMPanelContentConfig()
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
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      let locaData = _GM_getValue(KEY, {});
      return key in locaData;
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
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenuOnce(key, callback, isReverse = false) {
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
      let resultStyleList = [];
      let pushStyleNode = (style) => {
        let __value = PopsPanel.getValue(key);
        changeCallBack(__value, style);
      };
      let changeCallBack = (currentValue, resultStyle) => {
        let resultList = [];
        if (currentValue) {
          let result = resultStyle ?? callback(currentValue, pushStyleNode);
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
          if (isReverse) {
            newValue = !newValue;
          }
          changeCallBack(newValue);
        }
      );
      let value = PopsPanel.getValue(key);
      if (isReverse) {
        value = !value;
      }
      if (value) {
        changeCallBack(value);
      }
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
          text: `${SCRIPT_NAME}-PC端设置`,
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
    showMPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-移动端设置`,
          position: "center",
          html: false,
          style: ""
        },
        content: this.getMPanelContentConfig(),
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
    isMobile() {
      return window.outerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 800) {
        return "92vw";
      } else {
        return "800px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
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
        SettingUICommon,
        SettingUIBlog,
        SettingUILink,
        SettingUIHuaWeiCloud,
        SettingUIWenKu,
        SettingUISo
      ];
      return configList;
    },
    /**
     * 获取配置内容
     */
    getMPanelContentConfig() {
      let configList = [
        MSettingUICommon,
        MSettingUIBlog,
        MSettingUILink,
        MSettingUIHuaWeiCloud,
        MSettingUIWenKu,
        MSettingUISo,
        MSettingUIDownload
      ];
      return configList;
    }
  };
  const ShieldCSS$4 = "/* 底部免费抽xxx奖品广告 */\r\ndiv.siderbar-box,\r\n/* 华为开发者联盟加入社区 */\r\ndiv.user-desc.user-desc-fix {\r\n  display: none !important;\r\n}\r\n";
  const CSDNUtils = {
    /**
     * 移除元素（未出现也可以等待出现）
     * @param selectorText 元素选择器
     */
    waitForElementToRemove(selectorText = "") {
      utils.waitNodeList(selectorText).then((nodeList) => {
        nodeList.forEach((item) => item.remove());
      });
    },
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
    }
  };
  const CSDNHuaWeiCloud = {
    init() {
      addStyle(ShieldCSS$4);
      PopsPanel.execMenuOnce(
        "csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent",
        () => {
          return this.shieldCloudDeveloperTaskChallengeEvent();
        }
      );
      PopsPanel.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      PopsPanel.execMenuOnce(
        "csdn-hua-wei-cloud-shieldLeftFloatingButton",
        () => {
          return this.shieldLeftFloatingButton();
        }
      );
      PopsPanel.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn", () => {
        return this.blockRightColumn();
      });
      PopsPanel.execMenuOnce(
        "csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom",
        () => {
          return this.blockRecommendedContentAtTheBottom();
        }
      );
      PopsPanel.execMenuOnce(
        "csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations",
        () => {
          return this.shieldTheBottomForMoreRecommendations();
        }
      );
    },
    /**
     * 自动展开内容
     */
    autoExpandContent() {
      log.info("自动展开全文");
      return [
        CSDNUtils.addBlockCSS("div.article-show-more"),
        addStyle(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`)
      ];
    },
    /**
     * 屏蔽云开发者任务挑战活动
     */
    shieldCloudDeveloperTaskChallengeEvent() {
      log.info("屏蔽云开发者任务挑战活动");
      return CSDNUtils.addBlockCSS(".luck-draw-modal-warp");
    },
    /**
     * 屏蔽左侧悬浮按钮
     */
    shieldLeftFloatingButton() {
      log.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮");
      return CSDNUtils.addBlockCSS("div.toolbar-wrapper.article-interact-bar");
    },
    /**
     * 屏蔽右侧栏
     */
    blockRightColumn() {
      log.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签");
      return CSDNUtils.addBlockCSS("div.page-home-right.dp-aside-right");
    },
    /**
     * 屏蔽底部推荐内容
     */
    blockRecommendedContentAtTheBottom() {
      log.info("屏蔽底部推荐内容");
      return CSDNUtils.addBlockCSS("div.recommend-card-box");
    },
    /**
     * 屏蔽底部更多推荐
     */
    shieldTheBottomForMoreRecommendations() {
      log.info("屏蔽底部更多推荐");
      return CSDNUtils.addBlockCSS("div.more-article");
    }
  };
  const BlogShieldCSS = ".ecommend-item-box.recommend-recommend-box,\r\n.login-mark,\r\n.opt-box.text-center,\r\n.leftPop,\r\n#csdn-shop-window,\r\n.toolbar-advert,\r\n.hide-article-box,\r\n.user-desc.user-desc-fix,\r\n.recommend-card-box,\r\n.more-article,\r\n.article-show-more,\r\n#csdn-toolbar-profile-nologin,\r\n.guide-rr-first,\r\n#recommend-item-box-tow,\r\n/* 发文章得原力分图片提示 */\r\ndiv.csdn-toolbar-creative-mp,\r\n/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */\r\n#toolBarBox div.write-guide-buttom-box,\r\n/* 觉得还不错? 一键收藏 */\r\nul.toolbox-list div.tool-active-list,\r\n/* 右边按钮组的最上面的创作话题 */\r\ndiv.csdn-side-toolbar .activity-swiper-box,\r\n.sidetool-writeguide-box .tip-box,\r\n/* 右下角的登录提示 */\r\n.passport-login-tip-container {\r\n  display: none !important;\r\n}\r\n\r\n\r\n";
  const BlogCSS = "/*.blog_container_aside,\r\n#nav {\r\n	margin-left: -45px;\r\n}\r\n.recommend-right.align-items-stretch.clearfix,\r\n.dl_right_fixed {\r\n	margin-left: 45px;\r\n}*/\r\n";
  const BlogArticleCenterCSS = '#mainBox main {\r\n	width: inherit !important;\r\n}\r\n/* 当文章向下滚动时，触发左侧信息悬浮 */\r\naside.blog_container_aside[style*="position: fixed;"] {\r\n	display: none !important;\r\n}\r\n\r\n@media (min-width: 1320px) and (max-width: 1380px) {\r\n	.nodata .container {\r\n		width: 900px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 900px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 490px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 500px;\r\n	}\r\n}\r\n\r\n@media screen and (max-width: 1320px) {\r\n	.nodata .container {\r\n		width: 760px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 760px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 490px !important;\r\n	}\r\n\r\n	.nodata .container main .toolbox-list .tool-reward {\r\n		display: none;\r\n	}\r\n\r\n	.nodata\r\n		.container\r\n		main\r\n		.more-toolbox-new\r\n		.toolbox-left\r\n		.profile-box\r\n		.profile-name {\r\n		max-width: 128px;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 420px;\r\n	}\r\n}\r\n\r\n@media screen and (min-width: 1380px) {\r\n	.nodata .container {\r\n		width: 1010px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 1010px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 490px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 560px;\r\n	}\r\n}\r\n\r\n@media (min-width: 1550px) and (max-width: 1700px) {\r\n	.nodata .container {\r\n		width: 820px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 820px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 690px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 500px;\r\n	}\r\n}\r\n\r\n@media screen and (min-width: 1700px) {\r\n	.nodata .container {\r\n		width: 1010px !important;\r\n	}\r\n\r\n	.nodata .container main {\r\n		width: 1010px;\r\n	}\r\n\r\n	.nodata .container main #pcCommentBox pre > ol.hljs-ln {\r\n		width: 690px !important;\r\n	}\r\n\r\n	.nodata .container main .articleConDownSource {\r\n		width: 560px;\r\n	}\r\n}\r\n';
  const CSDNBlogRightToolBar = {
    init() {
      PopsPanel.execMenuOnce(
        "csdn-blog-rightToolbarEnable",
        () => {
          return this.shieldRightToolbar();
        },
        true
      );
      PopsPanel.execMenuOnce("csdn-blog-rightToolbarCreativeCenter", () => {
        return this.shieldCreativeCenter();
      });
      PopsPanel.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar", () => {
        return this.shieldShowOrSidebar();
      });
      PopsPanel.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance", () => {
        return this.shieldBeginnerGuidance();
      });
      PopsPanel.execMenuOnce("csdn-blog-rightToolbarCustomerService", () => {
        return this.shieldCustomerService();
      });
      PopsPanel.execMenuOnce("csdn-blog-rightToolbarReport", () => {
        return this.shieldReport();
      });
      PopsPanel.execMenuOnce("csdn-blog-rightToolbarBackToTop", () => {
        return this.shieldBackToTop();
      });
      this.initRightToolbarOffset();
      domutils.ready(() => {
        PopsPanel.execMenuOnce("csdn-blog-addGotoRecommandButton", () => {
          this.addGotoRecommandButton();
        });
      });
    },
    /**
     * 【添加】前往评论按钮，在返回顶部的下面
     */
    addGotoRecommandButton() {
      log.info("【添加】前往评论按钮，在返回顶部的上面");
      let gotoRecommandNode = document.createElement("a");
      gotoRecommandNode.className = "option-box";
      gotoRecommandNode.setAttribute("data-type", "gorecommand");
      gotoRecommandNode.innerHTML = `<span class="show-txt" style="display:flex;opacity:100;">前往<br>评论</span>`;
      gotoRecommandNode.addEventListener("click", function() {
        let toolbarBoxElement = document.querySelector(
          "#toolBarBox"
        );
        if (!toolbarBoxElement.getClientRects().length) {
          log.error("评论区处于隐藏状态");
          return;
        }
        log.info("滚动到评论");
        let toolbarBoxOffsetTop = toolbarBoxElement.getBoundingClientRect().top + window.scrollY;
        let csdnToolBarElement = document.querySelector(
          "#csdn-toolbar"
        );
        let csdnToolBarStyles = window.getComputedStyle(csdnToolBarElement);
        let csdnToolBarHeight = csdnToolBarElement.clientHeight - parseFloat(csdnToolBarStyles.paddingTop) - parseFloat(csdnToolBarStyles.paddingBottom);
        window.scrollTo({
          top: toolbarBoxOffsetTop - csdnToolBarHeight - 8,
          left: 0,
          behavior: "smooth"
        });
      });
      utils.waitNode(".csdn-side-toolbar").then(() => {
        let targetElement = document.querySelector(
          ".csdn-side-toolbar a:nth-last-child(2)"
        );
        targetElement.parentElement.insertBefore(
          gotoRecommandNode,
          targetElement.nextSibling
        );
      });
    },
    /**
     * 初始化右侧工具栏的偏移（top、right）
     */
    initRightToolbarOffset() {
      log.info("初始化右侧工具栏的偏移（top、right）");
      addStyle(
        /*css*/
        `
        .csdn-side-toolbar{
          left: unset !important;
        }
        `
      );
      utils.waitNode(".csdn-side-toolbar").then(($sideToolbar) => {
        domutils.css($sideToolbar, {
          top: parseInt(PopsPanel.getValue("csdn-blog-rightToolbarTopOffset")) + "px",
          right: parseInt(PopsPanel.getValue("csdn-blog-rightToolbarRightOffset")) + "px"
        });
      });
    },
    /**
     * 屏蔽右侧工具栏
     */
    shieldRightToolbar() {
      log.info("屏蔽右侧工具栏");
      return CSDNUtils.addBlockCSS(`div.csdn-side-toolbar`);
    },
    /**
     * 【屏蔽】创作中心
     */
    shieldCreativeCenter() {
      log.info("【屏蔽】创作中心");
      return CSDNUtils.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box");
    },
    /**
     * 【屏蔽】显示/隐藏侧栏
     */
    shieldShowOrSidebar() {
      log.info("【屏蔽】显示/隐藏侧栏");
      return CSDNUtils.addBlockCSS(".csdn-side-toolbar a.sidecolumn");
    },
    /**
     * 【屏蔽】新手引导
     */
    shieldBeginnerGuidance() {
      log.info("【屏蔽】新手引导");
      return CSDNUtils.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="guide"]'
      );
    },
    /**
     * 【屏蔽】客服
     */
    shieldCustomerService() {
      log.info("【屏蔽】客服");
      return CSDNUtils.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="cs"]'
      );
    },
    /**
     * 【屏蔽】举报
     */
    shieldReport() {
      log.info("【屏蔽】举报");
      return CSDNUtils.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="report"]'
      );
    },
    /**
     * 【屏蔽】返回顶部
     */
    shieldBackToTop() {
      log.info("【屏蔽】返回顶部");
      return CSDNUtils.addBlockCSS(
        '.csdn-side-toolbar a.option-box[data-type="gotop"]'
      );
    }
  };
  const CSDNBlog = {
    init() {
      this.addCSS();
      CSDNBlogRightToolBar.init();
      PopsPanel.execMenuOnce("csdn-blog-articleCenter", () => {
        return this.articleCenter();
      });
      PopsPanel.execMenuOnce("csdn-blog-shieldLoginDialog", () => {
        return this.shieldLoginDialog();
      });
      PopsPanel.execMenuOnce("csdn-blog-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      PopsPanel.execMenuOnce("csdn-blog-autoExpandCodeContent", () => {
        return this.autoExpandCodeContent();
      });
      PopsPanel.execMenuOnce(
        "csdn-blog-blockComment",
        () => {
          return this.blockComment();
        },
        true
      );
      PopsPanel.execMenuOnce(
        "csdn-blog-bottomRecommendArticleEnable",
        () => {
          return this.shieldBottomRecommendArticle();
        },
        true
      );
      PopsPanel.execMenuOnce("csdn-blog-shieldBottomSkillTree", () => {
        return this.shieldBottomSkillTree();
      });
      PopsPanel.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar", () => {
        return this.shieldBottomFloatingToolbar();
      });
      PopsPanel.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside", () => {
        return this.shieldLeftBlogContainerAside();
      });
      PopsPanel.execMenuOnce("csdn-blog-shieldRightDirectoryInformation", () => {
        return this.shieldRightDirectoryInformation();
      });
      PopsPanel.execMenuOnce("csdn-blog-shieldTopToolbar", () => {
        return this.shieldTopToolbar();
      });
      PopsPanel.execMenuOnce("csdn-blog-shieldArticleSearchTip", () => {
        return this.shieldArticleSearchTip();
      });
      PopsPanel.execMenuOnce("csdn-blog-allowSelectContent", () => {
        return this.allowSelectContent();
      });
      domutils.ready(() => {
        PopsPanel.execMenuOnce("csdn-blog-removeClipboardHijacking", () => {
          this.removeClipboardHijacking();
        });
        PopsPanel.execMenuOnce("csdn-blog-unBlockCopy", () => {
          this.unBlockCopy();
        });
        PopsPanel.execMenuOnce("csdn-blog-identityCSDNDownload", () => {
          this.identityCSDNDownload();
        });
        PopsPanel.execMenuOnce("csdn-blog-clickPreCodeAutomatically", () => {
          this.clickPreCodeAutomatically();
        });
        PopsPanel.execMenuOnce("csdn-blog-restoreComments", () => {
          this.restoreComments();
        });
      });
    },
    /**
     * 添加屏蔽CSS和功能CSS
     */
    addCSS() {
      log.info("添加屏蔽CSS和功能CSS");
      return [addStyle(BlogShieldCSS), addStyle(BlogCSS)];
    },
    /**
     * 去除剪贴板劫持
     */
    removeClipboardHijacking() {
      log.info("去除剪贴板劫持");
      let $article_copyright = document.querySelector(".article-copyright");
      if ($article_copyright) {
        $article_copyright.remove();
      }
      if (_unsafeWindow.articleType) {
        _unsafeWindow.articleType = 0;
      }
      if (_unsafeWindow.csdn && _unsafeWindow.csdn.copyright && _unsafeWindow.csdn.copyright.textData) {
        _unsafeWindow.csdn.copyright.textData = "";
      }
      if (_unsafeWindow.csdn && _unsafeWindow.csdn.copyright && _unsafeWindow.csdn.copyright.htmlData) {
        _unsafeWindow.csdn.copyright.htmlData = "";
      }
    },
    /**
     * 取消禁止复制
     */
    unBlockCopy() {
      log.info("取消禁止复制");
      domutils.on(
        document,
        "click",
        function(event) {
          let $click = event.target;
          let $parent = $click.parentElement;
          if (!$click.classList.contains("hljs-button")) {
            return;
          }
          utils.preventEvent(event);
          let copyText = ($parent.innerText || $parent.textContent || "").toString();
          log.info(
            "点击复制按钮复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText)
          );
          utils.setClip(copyText);
          $click.setAttribute("data-title", "复制成功");
        },
        {
          capture: true
        }
      );
      let changeDataTitle = new utils.LockFunction(function(event) {
        let $mouse = event.target;
        if ($mouse.localName !== "pre") {
          return;
        }
        let $hljsBtn = $mouse.querySelector(".hljs-button");
        if ($hljsBtn) {
          $hljsBtn.setAttribute("data-title", "复制");
        }
      });
      domutils.on(
        document,
        ["mouseenter", "mouseleave"],
        function(event) {
          changeDataTitle.run(event);
        },
        {
          capture: true
        }
      );
      utils.waitNode("#content_views").then(($content_views) => {
        var _a2;
        if (_unsafeWindow.$) {
          (_a2 = _unsafeWindow.$("#content_views")) == null ? void 0 : _a2.unbind("copy");
        }
        domutils.on(
          $content_views,
          "copy",
          function(event) {
            utils.preventEvent(event);
            let selectText = _unsafeWindow.getSelection();
            let copyText = selectText == null ? void 0 : selectText.toString();
            log.info(
              "Ctrl+C复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText)
            );
            utils.setClip(copyText);
            return false;
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(".hljs-button").then(() => {
        setTimeout(() => {
          document.querySelectorAll(".hljs-button").forEach((element) => {
            element.removeAttribute("onclick");
            element.removeAttribute("data-report-click");
            element.setAttribute("data-title", "复制");
          });
        }, 250);
      });
    },
    /**
     * 点击代码块自动展开
     */
    clickPreCodeAutomatically() {
      log.info("点击代码块自动展开");
      document.addEventListener("click", function(event) {
        var _a2;
        let $click = event.target;
        if ($click.localName !== "pre") {
          return;
        }
        $click.style.setProperty("height", "auto");
        (_a2 = $click.querySelector(".hide-preCode-box")) == null ? void 0 : _a2.remove();
      });
    },
    /**
     * 恢复评论到正确位置
     */
    restoreComments() {
      log.info("恢复评论到正确位置-第一条评论");
      utils.waitNode(".first-recommend-box").then(($firstRecommendBox) => {
        let recommendBoxElement = document.querySelector(
          ".recommend-box.insert-baidu-box.recommend-box-style"
        );
        recommendBoxElement.insertBefore(
          $firstRecommendBox,
          recommendBoxElement.firstChild
        );
      });
      log.info("恢复评论到正确位置-第二条评论");
      utils.waitNode(".second-recommend-box").then(($secondRecommendBox) => {
        let recommendBoxElement = document.querySelector(
          ".recommend-box.insert-baidu-box.recommend-box-style"
        );
        recommendBoxElement.insertBefore(
          $secondRecommendBox,
          recommendBoxElement.firstChild
        );
      });
    },
    /**
     * 标识CSDN下载的链接
     */
    identityCSDNDownload() {
      log.info("标识CSDN下载的链接");
      document.querySelectorAll(
        ".recommend-item-box[data-url*='https://download.csdn.net/']"
      ).forEach((item) => {
        if (PopsPanel.getValue("csdn-blog-removeResourceDownloadArticle")) {
          item.remove();
        } else {
          item.querySelector(".content-box").style.setProperty("border", "2px solid red");
        }
      });
    },
    /**
     * 全文居中
     */
    articleCenter() {
      log.info("全文居中");
      return addStyle(BlogArticleCenterCSS);
    },
    /**
     * 屏蔽登录弹窗
     */
    shieldLoginDialog() {
      log.info("屏蔽登录弹窗");
      return CSDNUtils.addBlockCSS(`.passport-login-container`);
    },
    /**
     * 自动展开代码块
     */
    autoExpandCodeContent() {
      log.info("自动展开代码块");
      return [
        CSDNUtils.addBlockCSS("pre.set-code-hide .hide-preCode-box"),
        addStyle(
          /*css*/
          `
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `
        )
      ];
    },
    /**
     * 自动展开全文
     */
    autoExpandContent() {
      log.info("自动展开全文");
      return addStyle(
        /*css*/
        `
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `
      );
    },
    /**
     * 屏蔽评论区
     */
    blockComment() {
      log.info("屏蔽评论区");
      return CSDNUtils.addBlockCSS(`#pcCommentBox`);
    },
    /**
     * 屏蔽底部推荐文章
     */
    shieldBottomRecommendArticle() {
      log.info("屏蔽底部推荐文章");
      return CSDNUtils.addBlockCSS(`main > div.recommend-box`);
    },
    /**
     * 屏蔽底部xx技能树
     */
    shieldBottomSkillTree() {
      log.info("屏蔽底部xx技能树");
      return CSDNUtils.addBlockCSS(`#treeSkill`);
    },
    /**
     * 屏蔽底部悬浮工具栏
     */
    shieldBottomFloatingToolbar() {
      log.info("屏蔽底部悬浮工具栏");
      return CSDNUtils.addBlockCSS(`#toolBarBox`);
    },
    /**
     * 屏蔽左侧博客信息
     */
    shieldLeftBlogContainerAside() {
      log.info("【屏蔽】左侧博客信息");
      return CSDNUtils.addBlockCSS(`aside.blog_container_aside`);
    },
    /**
     * 【屏蔽】右侧目录信息
     */
    shieldRightDirectoryInformation() {
      log.info("【屏蔽】右侧目录信息");
      return CSDNUtils.addBlockCSS("#rightAsideConcision", "#rightAside");
    },
    /**
     * 屏蔽顶部Toolbar
     */
    shieldTopToolbar() {
      log.info("屏蔽顶部Toolbar");
      return CSDNUtils.addBlockCSS(`#toolbarBox`);
    },
    /**
     * 屏蔽文章内的选中搜索悬浮提示
     */
    shieldArticleSearchTip() {
      log.info("屏蔽文章内的选中搜索悬浮提示");
      return CSDNUtils.addBlockCSS(`#articleSearchTip`);
    },
    /**
     * 允许选择内容
     */
    allowSelectContent() {
      log.info("允许选择内容");
      return addStyle(
        /*css*/
        `
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`
      );
    }
  };
  const WenkuCSS = "#chatgpt-article-detail\r\n  > div.layout-center\r\n  > div.main\r\n  > div.article-box\r\n  > div.cont.first-show.forbid {\r\n  max-height: unset !important;\r\n  height: auto !important;\r\n  overflow: auto !important;\r\n}\r\n\r\n.forbid {\r\n  user-select: text !important;\r\n}\r\n";
  const ShieldCSS$3 = "/* wenku顶部横幅 */\r\n#app > div > div.main.pb-32 > div > div.top-bar,\r\n/* 底部展开全文 */\r\n#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open {\r\n  display: none !important;\r\n}";
  const CSDNWenKu = {
    init() {
      addStyle(WenkuCSS);
      addStyle(ShieldCSS$3);
      PopsPanel.execMenuOnce("csdn-wenku-shieldResourceRecommend", () => {
        return this.shieldResourceRecommend();
      });
      PopsPanel.execMenuOnce("csdn-wenku-shieldRightUserInfo", () => {
        return this.shieldRightUserInfo();
      });
      PopsPanel.execMenuOnce("csdn-wenku-shieldRightToolBar", () => {
        return this.shieldRightToolBar();
      });
    },
    /**
     * 【屏蔽】资源推荐
     */
    shieldResourceRecommend() {
      log.info("【屏蔽】资源推荐");
      return CSDNUtils.addBlockCSS("#recommend");
    },
    /**
     * 【屏蔽】右侧用户信息
     */
    shieldRightUserInfo() {
      log.info("【屏蔽】右侧用户信息");
      return CSDNUtils.addBlockCSS(".layout-right");
    },
    /**
     * 【屏蔽】右侧悬浮工具栏
     */
    shieldRightToolBar() {
      log.info("【屏蔽】右侧悬浮工具栏");
      return CSDNUtils.addBlockCSS(".csdn-side-toolbar");
    }
  };
  const CSDNLink = {
    init() {
      PopsPanel.execMenuOnce("csdn-link-jumpRedirect", () => {
        this.jumpRedirect();
      });
    },
    /**
     * 去除CSDN拦截其它网址的url并自动跳转
     */
    jumpRedirect() {
      if (window.location.hostname === "link.csdn.net" && window.location.search.startsWith("?target")) {
        window.stop();
        let search = window.location.search.replace(/^\?target=/gi, "");
        search = decodeURIComponent(search);
        let newURL = search;
        log.success(`跳转链接 ${newURL}`);
        window.location.href = newURL;
      }
    }
  };
  const CSDN = {
    init() {
      if (CSDNRouter.isLink()) {
        log.info("Router: 中转链接");
        CSDNLink.init();
      } else if (CSDNRouter.isHuaWeiCloudBlog()) {
        log.info("Router: 华为云联盟");
        CSDNHuaWeiCloud.init();
      } else if (CSDNRouter.isBlog()) {
        log.info("Router: 博客");
        CSDNBlog.init();
      } else if (CSDNRouter.isWenKu()) {
        log.info("Router: 文库");
        CSDNWenKu.init();
      } else {
        log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
      }
    }
  };
  const M_CSDNLink = {
    init() {
      PopsPanel.execMenuOnce("m-csdn-link-jumpRedirect", () => {
        CSDNLink.jumpRedirect();
      });
    }
  };
  const ShieldCSS$2 = "/* 右下角的 免费赢华为平板xxxx */\r\n.org-main-content .siderbar-box {\r\n  display: none !important;\r\n}\r\n";
  const M_CSDNHuaWeiCloud = {
    init() {
      addStyle(ShieldCSS$2);
      PopsPanel.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent", () => {
        return CSDNHuaWeiCloud.autoExpandContent();
      });
      PopsPanel.execMenuOnce(
        "m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity",
        () => {
          return this.blockBottomJoinTheCommunity();
        }
      );
    },
    /**
     * 【屏蔽】底部加入社区
     */
    blockBottomJoinTheCommunity() {
      log.info("【屏蔽】底部加入社区");
      return CSDNUtils.addBlockCSS(".user-desc");
    }
  };
  const ShieldCSS$1 = "#operate,.feed-Sign-span,\r\n.view_comment_box,\r\n.weixin-shadowbox.wap-shadowbox,\r\n.feed-Sign-span,\r\n.user-desc.user-desc-fix,\r\n.comment_read_more_box,\r\n#content_views pre.set-code-hide .hide-preCode-box,\r\n/* 登录弹窗 */\r\n.passport-login-container,\r\n.hljs-button[data-title='登录后复制'],\r\n.article-show-more,\r\n#treeSkill,\r\ndiv.btn_open_app_prompt_div,\r\ndiv.readall_box,\r\ndiv.aside-header-fixed,\r\ndiv.feed-Sign-weixin,\r\ndiv.ios-shadowbox {\r\n  display: none !important;\r\n}\r\n";
  const MBlogCSS = "#mainBox {\r\n  width: auto;\r\n}\r\n.user-desc.user-desc-fix {\r\n  height: auto !important;\r\n  overflow: auto !important;\r\n}\r\n.component-box .praise {\r\n  background: #ff5722;\r\n  border-radius: 5px;\r\n  padding: 0px 8px;\r\n  height: auto;\r\n}\r\n.component-box .praise,\r\n.component-box .share {\r\n  color: #fff;\r\n}\r\n.component-box a {\r\n  display: inline-block;\r\n  font-size: xx-small;\r\n}\r\n.component-box {\r\n  display: inline;\r\n  margin: 0;\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n.csdn-edu-title {\r\n  background: #4d6de1;\r\n  border-radius: 5px;\r\n  padding: 0px 8px;\r\n  height: auto;\r\n  color: #fff !important;\r\n}\r\n\r\n.GM-csdn-dl {\r\n  padding: 0.24rem 0.32rem;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  -webkit-box-pack: justify;\r\n  border-bottom: 1px solid #f5f6f7 !important;\r\n}\r\n.GM-csdn-title {\r\n  font-size: 0.3rem;\r\n  color: #222226;\r\n  letter-spacing: 0;\r\n  line-height: 0.44rem;\r\n  font-weight: 600;\r\n  /*max-height: .88rem;*/\r\n  word-break: break-all;\r\n  overflow: hidden;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n}\r\n.GM-csdn-title a {\r\n  word-break: break-all;\r\n  color: #222226;\r\n  font-weight: 600;\r\n}\r\n.GM-csdn-title em,\r\n.GM-csdn-content em {\r\n  font-style: normal;\r\n  color: #fc5531;\r\n}\r\n.GM-csdn-content {\r\n  /*max-width: 5.58rem;*/\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 1;\r\n  -webkit-box-orient: vertical;\r\n  color: #555666;\r\n  font-size: 0.24rem;\r\n  line-height: 0.34rem;\r\n  max-height: 0.34rem;\r\n  word-break: break-all;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n  margin-top: 0.16rem;\r\n}\r\n.GM-csdn-img img {\r\n  width: 2.18rem;\r\n  height: 1.58rem;\r\n  /*margin-left: .16rem*/\r\n}\r\n";
  const M_CSDNBlog = {
    init() {
      this.addCSS();
      PopsPanel.execMenuOnce("m-csdn-blog-shieldTopToolbar", () => {
        return this.shieldTopToolbar();
      });
      PopsPanel.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight", () => {
        return this.notLimitCodePreMaxHeight();
      });
      PopsPanel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
        return this.notLimitCommentMaxHeight();
      });
      PopsPanel.execMenuOnce("m-csdn-blog-allowSelectText", () => {
        return this.allowSelectText();
      });
      PopsPanel.execMenuOnce("m-csdn-blog-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      PopsPanel.execMenuOnce(
        "m-csdn-blog-bottomArticleEnable",
        () => {
          return this.blockBottomArticle();
        },
        true
      );
      PopsPanel.execMenuOnce(
        "m-csdn-blog-comment-enable",
        () => {
          return this.blockComment();
        },
        true
      );
      domutils.ready(() => {
        PopsPanel.execMenuOnce("m-csdn-blog-removeAds", () => {
          return this.removeAds();
        });
        PopsPanel.execMenuOnce("m-csdn-blog-refactoringRecommendation", () => {
          this.refactoringRecommendation();
        });
        PopsPanel.execMenuOnce("m-csdn-blog-unBlockCopy", () => {
          CSDNBlog.unBlockCopy();
        });
      });
    },
    addCSS() {
      addStyle(ShieldCSS$1);
      addStyle(MBlogCSS);
    },
    /**
     * 屏蔽顶部Toolbar
     */
    shieldTopToolbar() {
      log.info("屏蔽顶部Toolbar");
      return [
        CSDNUtils.addBlockCSS("#csdn-toolbar"),
        addStyle(
          /*css*/
          `
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`
        )
      ];
    },
    /**
     * 重构底部推荐
     */
    refactoringRecommendation() {
      function refactoring() {
        log.info("重构底部推荐");
        document.querySelectorAll(
          ".container-fluid"
        ).forEach((item) => {
          var _a2, _b;
          let url = "";
          let title = "";
          let content = "";
          let img = "";
          let isCSDNDownload = false;
          let isCSDNEduDownload = false;
          if (item.hasAttribute("data-url")) {
            url = item.getAttribute("data-url");
            title = (_a2 = item.querySelector(".recommend_title div.left")) == null ? void 0 : _a2.innerHTML;
            if (!item.querySelector(".text")) {
              return;
            }
            content = (_b = item.querySelector(".text")) == null ? void 0 : _b.innerHTML;
            if (item.querySelectorAll(".recommend-img").length) {
              item.querySelectorAll(".recommend-img").forEach((item2) => {
                img += item2.innerHTML;
              });
            }
          } else {
            log.info("节点上无data-url");
            url = item.querySelector("a[data-type]").getAttribute("href");
            title = item.querySelector(".recommend_title div.left").innerHTML;
            content = item.querySelector(".text").innerHTML;
          }
          var _URL_ = new URL(url);
          if (_URL_.host === "download.csdn.net" || _URL_.host === "www.iteye.com" && _URL_.pathname.match(/^\/resource/gi)) {
            log.info("该链接为csdn资源下载");
            isCSDNDownload = true;
            title = `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` + title;
          } else if (_URL_.origin.match(/edu.csdn.net/gi)) {
            isCSDNEduDownload = true;
            log.info("该链接为csdn学院下载");
            title = `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` + title;
          }
          item.setAttribute("class", "GM-csdn-dl");
          item.setAttribute("data-url", url);
          item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
          item.addEventListener("click", function() {
            if (PopsPanel.getValue("m-csdn-blog-openNewTab")) {
              window.open(url, "_blank");
            } else {
              window.location.href = url;
            }
          });
          if ((isCSDNDownload || isCSDNEduDownload) && PopsPanel.getValue("m-csdn-blog-removeResourceArticle")) {
            item.remove();
          }
        });
      }
      let lockFunction = new utils.LockFunction(refactoring, 50);
      utils.waitNode("#recommend").then(($recommend) => {
        log.info("重构底部推荐");
        lockFunction.run();
        utils.mutationObserver($recommend, {
          callback: () => {
            lockFunction.run();
          },
          config: { childList: true, subtree: true, attributes: true }
        });
      });
    },
    /**
     * 屏蔽底部文章
     */
    blockBottomArticle() {
      log.info("屏蔽底部文章");
      return CSDNUtils.addBlockCSS("#recommend");
    },
    /**
     * 屏蔽评论
     */
    blockComment() {
      log.info("屏蔽评论");
      return CSDNUtils.addBlockCSS("#comment");
    },
    /**
     * 去除广告
     */
    removeAds() {
      log.info("去除广告");
      CSDNUtils.waitForElementToRemove(".passport-login-container");
      CSDNUtils.waitForElementToRemove(
        ".btn_open_app_prompt_box.detail-open-removed"
      );
      CSDNUtils.waitForElementToRemove(".add-firstAd");
      CSDNUtils.waitForElementToRemove("div.feed-Sign-weixin");
      CSDNUtils.waitForElementToRemove("div.ios-shadowbox");
    },
    /**
     * 不限制代码块最大高度
     */
    notLimitCodePreMaxHeight() {
      log.info("不限制代码块最大高度");
      return addStyle(
        /*css*/
        `
        pre{
            max-height: unset !important;
        }
        `
      );
    },
    /**
     * 不限制评论区最大高度
     */
    notLimitCommentMaxHeight() {
      log.info("不限制评论区最大高度");
      return addStyle(
        /*css*/
        `
        #comment{
          max-height: none !important;
        }
      `
      );
    },
    /**
     * 允许选择文字
     */
    allowSelectText() {
      log.info("允许选择文字");
      return addStyle(
        /*css*/
        `
        #content_views,
        #content_views pre,
        #content_views pre code{
            webkit-touch-callout: text !important;
            -webkit-user-select: text !important;
            -khtml-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        `
      );
    },
    /**
     * 自动展开内容
     */
    autoExpandContent() {
      log.info("自动展开内容");
      return addStyle(
        /*css*/
        `
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `
      );
    }
  };
  const ShieldCSS = "/* 右下角的买一年送3个月的广告图标 */\r\n.blind_box {\r\n  display: none !important;\r\n}\r\n";
  const M_CSDNWenKu = {
    init() {
      addStyle(ShieldCSS);
      PopsPanel.execMenu("m-csdn-wenku-shieldBottomToolbar", () => {
        this.shieldBottomToolbar();
      });
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldBottomToolbar() {
      log.info("【屏蔽】底部工具栏");
      CSDNUtils.addBlockCSS(`.page-container > div.btn`);
    }
  };
  const CSDNBlockCSS = "/* 右下角悬浮图标 买1年送3个月 */\r\n.page-container .blind_box,\r\n/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\r\n.page-container .btn .ml-12,\r\n/* 登录弹窗 */\r\n.passport-login-container,\r\n/* 通用广告className匹配 */\r\n.ads {\r\n	display: none !important;\r\n}\r\n";
  const M_CSDNDownload = {
    init() {
      PopsPanel.execMenuOnce("m-csdn-download-removeAds", () => {
        return addStyle(CSDNBlockCSS);
      });
      PopsPanel.execMenuOnce(
        "m-csdn-download-automaticallyExpandResourceIntroduction",
        () => {
          return this.automaticallyExpandResourceIntroduction();
        }
      );
    },
    /**
     * 自动展开资源介绍
     */
    automaticallyExpandResourceIntroduction() {
      log.info("自动展开资源介绍");
      return [
        CSDNUtils.addBlockCSS("label.unfold-font"),
        addStyle(
          /*css*/
          `
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`
        )
      ];
    }
  };
  const M_CSDN = {
    init() {
      if (CSDNRouter.isLink()) {
        log.info("Router: 中转链接");
        M_CSDNLink.init();
      } else if (CSDNRouter.isHuaWeiCloudBlog()) {
        log.info("Router: 华为云联盟");
        M_CSDNHuaWeiCloud.init();
      } else if (CSDNRouter.isBlog()) {
        log.info("Router: 博客");
        M_CSDNBlog.init();
      } else if (CSDNRouter.isWenKu()) {
        log.info("Router: 文库");
        M_CSDNWenKu.init();
      } else if (CSDNRouter.isDownload()) {
        log.info("Router: 资源下载");
        M_CSDNDownload.init();
      } else {
        log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
      }
    }
  };
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
      M_CSDN.init();
    } else if (chooseMode == 2) {
      CSDN.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      M_CSDN.init();
    } else {
      log.info("自动判定为PC端");
      CSDN.init();
    }
  }

})(Qmsg, DOMUtils, Utils, pops);