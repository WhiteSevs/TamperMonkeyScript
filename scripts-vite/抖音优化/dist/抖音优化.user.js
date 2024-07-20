// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.7.20.23
// @author       WhiteSevs
// @description  视频过滤，包括广告、直播或自定义规则，伪装登录、屏蔽登录弹窗、自定义清晰度选择、未登录解锁画质选择、禁止自动播放、自动进入全屏、双击进入全屏、屏蔽弹幕和礼物特效、手机模式、修复进度条拖拽、自定义视频和评论区背景色等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.douyin.com/*
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

(function (Qmsg, Utils, DOMUtils, pops) {
  'use strict';

  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);
  var _key, _isWaitPress, _a;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
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
  const PanelCommonConfig = {
    id: "panel-config-common",
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
                    "debug模式",
                    "debug",
                    true,
                    void 0,
                    "移除抖音的开发者模式检测"
                  ),
                  UISwitch(
                    "伪装登录",
                    "disguiseLogin",
                    false,
                    void 0,
                    "使用随机UID进行伪装"
                  ),
                  UISwitch(
                    "initial-scale=1",
                    "dy-initialScale",
                    false,
                    void 0,
                    "可配合手机模式放大页面"
                  ),
                  UISwitch(
                    "移除<meta> apple-itunes-app",
                    "dy-apple-removeMetaAppleItunesApp",
                    true,
                    void 0,
                    "Safari使用，移除顶部横幅【Open in the 抖音 app】"
                  )
                ]
              }
            ]
          },
          {
            text: "Url重定向",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "重定向/home",
                    "douyin-redirect-url-home-to-root",
                    false,
                    void 0,
                    "/home => /"
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
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "屏蔽-通用",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】登录弹窗",
                    "watchLoginDialogToClose",
                    true,
                    void 0,
                    "屏蔽元素且自动等待元素出现并关闭登录弹窗"
                  ),
                  UISwitch(
                    "【屏蔽】底部？按钮",
                    "shieldBottomQuestionButton",
                    true,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-主框架",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】客户端提示",
                    "shieldClientTip",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】充钻石",
                    "shieldFillingBricksAndStones",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】客户端",
                    "shieldClient",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】快捷访问",
                    "shieldQuickAccess",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】通知",
                    "shieldNotifitation",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】私信",
                    "shieldPrivateMessage",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】投稿",
                    "shieldSubmission",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】壁纸",
                    "shieldWallpaper",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】左侧导航栏",
                    "shieldLeftNavigator",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】顶部导航栏",
                    "shieldTopNavigator",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-搜索",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】搜索框",
                    "shieldSearch",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】搜索框的提示",
                    "shieldSearchPlaceholder",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】猜你想搜",
                    "shieldSearchGuessYouWantToSearch",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】抖音热点",
                    "shieldSearchTiktokHotspot",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const DouYinDanmuFilter = {
    key: "douyin-live-danmu-rule",
    $data: {
      rule: [],
      isFilterAttrName: "data-is-filter"
    },
    init() {
      this.parseRule();
    },
    /**
     * 解析规则
     */
    parseRule() {
      let localRule = this.get().trim();
      let localRuleSplit = localRule.split("\n");
      localRuleSplit.forEach((item) => {
        if (item.trim() == "") return;
        item = item.trim();
        let itemRegExp = new RegExp(item.trim());
        this.$data.rule.push(itemRegExp);
      });
    },
    /**
     * 通知弹幕改变(可能是新增)
     */
    change() {
      var _a2, _b, _c, _d, _e, _f, _g;
      let danmakuQueue = Array.from(
        document.querySelectorAll("xg-danmu.xgplayer-danmu > div > div")
      );
      if (!danmakuQueue.length) {
        return;
      }
      for (let messageIndex = 0; messageIndex < danmakuQueue.length; messageIndex++) {
        let $danmuItem = danmakuQueue[messageIndex];
        if ($danmuItem.hasAttribute(this.$data.isFilterAttrName)) {
          continue;
        }
        let $messageObj = (_d = (_c = (_b = (_a2 = utils.getReactObj($danmuItem)) == null ? void 0 : _a2.reactFiber) == null ? void 0 : _b.return) == null ? void 0 : _c.memoizedProps) == null ? void 0 : _d.message;
        let message = ((_e = $messageObj == null ? void 0 : $messageObj.payload) == null ? void 0 : _e.content) || ((_g = (_f = $messageObj == null ? void 0 : $messageObj.payload) == null ? void 0 : _f.common) == null ? void 0 : _g.describe);
        for (let index = 0; index < this.$data.rule.length; index++) {
          const ruleRegExp = this.$data.rule[index];
          if (typeof message === "string") {
            if (ruleRegExp.test(message)) {
              log.info("过滤弹幕: " + message);
              $danmuItem.setAttribute(this.$data.isFilterAttrName, "true");
              domUtils.hide($danmuItem);
              break;
            }
          }
        }
      }
    },
    set(value) {
      _GM_setValue(this.key, value);
    },
    get() {
      return _GM_getValue(this.key, "");
    }
  };
  const DouYinLiveDanmuku = {
    /**
     * 弹幕过滤
     */
    filterDanmu() {
      utils.waitNode("xg-danmu.xgplayer-danmu", 1e5).then(($danmu) => {
        if (!$danmu) {
          log.error("xg-danmu.xgplayer-danmu获取失败");
          return;
        }
        log.success("弹幕过滤");
        DouYinDanmuFilter.init();
        utils.mutationObserver($danmu, {
          config: {
            childList: true,
            subtree: true
          },
          callback: () => {
            DouYinDanmuFilter.change();
          }
        });
      });
    }
  };
  const ReactUtils = {
    /**
     * 等待react某个属性并进行设置
     */
    async waitReactPropsToSet($target, propName, needSetList) {
      function getTarget() {
        let __target__ = null;
        if (typeof $target === "string") {
          __target__ = document.querySelector($target);
        } else if (typeof $target === "function") {
          __target__ = $target();
        } else if ($target instanceof HTMLElement) {
          __target__ = $target;
        }
        return __target__;
      }
      if (typeof $target === "string") {
        let $ele = await utils.waitNode($target, 1e4);
        if (!$ele) {
          return;
        }
      }
      needSetList.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkObj() {
          let target = getTarget();
          if (target == null) {
            return false;
          }
          let targetObj = utils.getReactObj(target);
          if (targetObj == null) {
            return false;
          }
          let targetObjProp = targetObj[propName];
          if (targetObjProp == null) {
            return false;
          }
          let needOwnCheck = needSetOption.check(targetObjProp);
          return Boolean(needOwnCheck);
        }
        utils.waitPropertyByInterval(
          () => {
            return getTarget();
          },
          checkObj,
          250,
          1e4
        ).then(() => {
          let target = getTarget();
          if (target == null) {
            return;
          }
          let targetObj = utils.getReactObj(target);
          if (targetObj == null) {
            return;
          }
          let targetObjProp = targetObj[propName];
          if (targetObjProp == null) {
            return;
          }
          needSetOption.set(targetObjProp);
        });
      });
    }
  };
  const DouYinUtils = {
    /**
     * 判断是否是竖屏
     *
     * window.screen.orientation.type
     * + landscape-primary 横屏
     * + portrait-primary 竖屏
     */
    isVerticalScreen() {
      return !window.screen.orientation.type.includes("landscape");
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
      return utils.addStyle(
        `${selectorList.join(",\n")}{display: none !important;}`
      );
    }
  };
  const DouYinLiveChatRoomHideElement = {
    init() {
      PopsPanel.execMenuOnce("live-shieldChatRoom", () => {
        return this.shieldChatRoom();
      });
      PopsPanel.execMenuOnce("live-shielChatRoomVipSeats", () => {
        return this.shielChatRoomVipSeats();
      });
      PopsPanel.execMenuOnce("dy-live-shieldUserLevelIcon", () => {
        return this.shieldUserLevelIcon();
      });
      PopsPanel.execMenuOnce("dy-live-shieldUserVIPIcon", () => {
        return this.shieldUserVIPIcon();
      });
      PopsPanel.execMenuOnce("dy-live-shieldUserFansIcon", () => {
        return this.shieldUserFansIcon();
      });
      PopsPanel.execMenuOnce("dy-live-shieldMessage", () => {
        return this.shieldMessage();
      });
    },
    /**
     * 【屏蔽】评论区
     */
    shieldChatRoom() {
      log.info("【屏蔽】评论区");
      return [
        DouYinUtils.addBlockCSS("#chatroom"),
        addStyle(`
            div[data-e2e="living-container"],
            div[data-e2e="living-container"] > div{
                margin-bottom: 0px !important;
            }`)
      ];
    },
    /**
     * 【屏蔽】评论区的贵宾席
     */
    shielChatRoomVipSeats() {
      log.info("【屏蔽】评论区的贵宾席");
      return [
        DouYinUtils.addBlockCSS(
          "#chatroom > div > div:has(#audiencePanelScrollId)"
        )
      ];
    },
    /**
     * 【屏蔽】用户等级图标
     */
    shieldUserLevelIcon() {
      log.info("【屏蔽】用户等级图标");
      return [
        DouYinUtils.addBlockCSS(
          '.webcast-chatroom___item span:has(>img[src*="level"])'
        )
      ];
    },
    /**
     * 【屏蔽】VIP图标
     */
    shieldUserVIPIcon() {
      log.info("【屏蔽】VIP图标");
      return [
        DouYinUtils.addBlockCSS(
          '.webcast-chatroom___item span:has(>img[src*="subscribe"])'
        )
      ];
    },
    /**
     * 【屏蔽】粉丝牌
     */
    shieldUserFansIcon() {
      log.info("【屏蔽】粉丝牌");
      return [
        DouYinUtils.addBlockCSS(
          '.webcast-chatroom___item span:has(>div[style*="fansclub"])'
        )
      ];
    },
    /**
     * 【屏蔽】信息播报
     */
    shieldMessage() {
      log.info("【屏蔽】信息播报");
      return [
        DouYinUtils.addBlockCSS(
          ".webcast-chatroom___bottom-message",
          // 上面的滚动播报，xxx加入了直播间
          '#chatroom >div>div>div:has(>div[elementtiming="element-timing"])'
        )
      ];
    }
  };
  const DouYinLiveDanmuHideElement = {
    init() {
      PopsPanel.execMenuOnce("live-shieldDanmuku", () => {
        return this.shieldDanmu();
      });
    },
    /**
     * 屏蔽弹幕
     */
    shieldDanmu() {
      log.info("屏蔽弹幕");
      return [DouYinUtils.addBlockCSS("xg-danmu.xgplayer-danmu")];
    }
  };
  const DouYinLiveHideElement = {
    init() {
      PopsPanel.execMenuOnce("live-shieldGiftColumn", () => {
        return this.shieldGiftColumn();
      });
      PopsPanel.execMenuOnce("live-shieldTopToolBarInfo", () => {
        return this.shieldTopToolBarInfo();
      });
      PopsPanel.execMenuOnce("live-shieldGiftEffects", () => {
        return this.shieldGiftEffects();
      });
      PopsPanel.execMenuOnce("live-shielYellowCar", () => {
        return this.shieldYellowCar();
      });
      DouYinLiveChatRoomHideElement.init();
      DouYinLiveDanmuHideElement.init();
    },
    /**
     * 【屏蔽】底部的礼物栏
     */
    shieldGiftColumn() {
      log.info("屏蔽底部的礼物栏");
      return [
        DouYinUtils.addBlockCSS(
          'div[data-e2e="living-container"] >div> :last-child',
          /* 全屏状态下的礼物栏 */
          'div[data-e2e="living-container"] xg-controls > div:has(div[data-e2e="gifts-container"])'
        ),
        addStyle(`
            /* 去除全屏状态下的礼物栏后，上面的工具栏bottom也去除 */
            div[data-e2e="living-container"] xg-controls xg-inner-controls:has(+div div[data-e2e="gifts-container"]){
                bottom: 0 !important;
            }`)
      ];
    },
    /**
     * 【屏蔽】顶栏信息
     * 包括直播作者、右侧的礼物展馆
     */
    shieldTopToolBarInfo() {
      log.info("【屏蔽】顶栏信息");
      return [
        DouYinUtils.addBlockCSS(
          'div[data-e2e="living-container"] > div > pace-island[id^="island_"]'
        )
      ];
    },
    /**
     * 【屏蔽】礼物特效
     */
    shieldGiftEffects() {
      log.info("【屏蔽】礼物特效");
      return [
        DouYinUtils.addBlockCSS(
          // ↓该屏蔽会把连麦的用户也屏蔽了
          // '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
          '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div:not([class*="video_layout_container"])>div)'
        )
      ];
    },
    /**
     * 【屏蔽】小黄车
     */
    shieldYellowCar() {
      log.info("【屏蔽】小黄车");
      return [
        DouYinUtils.addBlockCSS(
          '#living_room_player_container .basicPlayer  > div:has(div[data-e2e="yellowCart-container"])'
        )
      ];
    }
  };
  const VideoQualityMap = {
    auto: {
      label: "自动",
      sign: 0
    },
    ld: {
      label: "标清",
      sign: 1
    },
    sd: {
      label: "高清",
      sign: 2
    },
    hd: {
      label: "超清",
      sign: 3
    },
    uhd: {
      label: "蓝光",
      sign: 4
    },
    origin: {
      label: "潮汐海灵",
      sign: 5
    }
  };
  const DouYinLive = {
    init() {
      DouYinLiveHideElement.init();
      PopsPanel.execMenu("live-autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      PopsPanel.execMenu("live-danmu-shield-rule-enable", () => {
        DouYinLiveDanmuku.filterDanmu();
      });
      PopsPanel.execMenu("live-chooseQuality", (quality) => {
        if (quality === "auto") {
          return;
        }
        this.chooseQuality(quality);
      });
      PopsPanel.execMenu("live-unlockImageQuality", () => {
        this.unlockImageQuality();
      });
      PopsPanel.execMenuOnce("live-waitToRemovePauseDialog", () => {
        this.waitToRemovePauseDialog();
      });
      PopsPanel.execMenu("live-pauseVideo", () => {
        this.pauseVideo();
      });
      PopsPanel.execMenu("live-bgColor-enable", () => {
        PopsPanel.execMenuOnce("live-changeBackgroundColor", (value) => {
          this.changeBackgroundColor(value);
        });
      });
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      log.info("自动进入网页全屏");
      utils.waitNode(
        'xg-icon[classname] > div > div:has(path[d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])'
      ).then((element) => {
        element.click();
      });
    },
    /**
     * 选择画质
     * @param [quality="origin"] 选择的画质
     */
    chooseQuality(quality = "origin") {
      ReactUtils.waitReactPropsToSet(
        'xg-inner-controls xg-right-grid >div:has([data-e2e="quality-selector"])',
        "reactProps",
        [
          {
            check(reactObj) {
              var _a2, _b, _c, _d;
              return typeof ((_d = (_c = (_b = (_a2 = reactObj == null ? void 0 : reactObj.children) == null ? void 0 : _a2.props) == null ? void 0 : _b.children) == null ? void 0 : _c.props) == null ? void 0 : _d.qualityHandler) === "object";
            },
            set(reactObj) {
              let qualityHandler = reactObj.children.props.children.props.qualityHandler;
              let currentQualityList = qualityHandler.getCurrentQualityList();
              if (currentQualityList.includes(quality)) {
                qualityHandler.setCurrentQuality(quality);
                log.success("成功设置画质为【" + quality + "】");
              } else {
                let __quality = quality;
                Qmsg.error(
                  "当前直播没有【" + __quality + "】画质，自动选择最高画质"
                );
                currentQualityList.sort((a, b) => {
                  if (!VideoQualityMap[a]) {
                    log.error("画质【" + a + "】不存在");
                    return 0;
                  }
                  if (!VideoQualityMap[b]) {
                    log.error("画质【" + b + "】不存在");
                    return 0;
                  }
                  return VideoQualityMap[a].sign - VideoQualityMap[b].sign;
                });
                __quality = currentQualityList[currentQualityList.length - 1];
                qualityHandler.setCurrentQuality(quality);
                log.success("成功设置画质为【" + quality + "】");
              }
            }
          }
        ]
      );
    },
    /**
     * 解锁画质选择
     *
     * 未登录情况下最高选择【高清】画质
     */
    unlockImageQuality() {
      log.info("解锁画质选择");
      domUtils.on(
        document,
        "click",
        'div[data-e2e="quality-selector"] > div',
        function(event) {
          var _a2, _b;
          utils.preventEvent(event);
          let clickNode = event.target;
          try {
            let reactObj = utils.getReactObj(clickNode);
            let key = (_a2 = reactObj == null ? void 0 : reactObj.reactFiber) == null ? void 0 : _a2["key"];
            let parent = clickNode.closest("div[data-index]");
            let parentReactObj = utils.getReactObj(parent);
            let current = (_b = parentReactObj == null ? void 0 : parentReactObj.reactProps) == null ? void 0 : _b["children"]["ref"]["current"];
            log.info("当前选择的画质: " + key);
            log.info(["所有的画质: ", current.getCurrentQualityList()]);
            current.setCurrentQuality(key);
          } catch (error) {
            log.error(error);
            Qmsg.error("切换画质失败");
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 长时间无操作，已暂停播放
     * 累计节能xx分钟
     */
    waitToRemovePauseDialog() {
      log.info("监听【长时间无操作，已暂停播放】弹窗");
      function deepFindFunction(target, propName, funcName) {
        let targetValue = target[propName];
        if (typeof targetValue === "object") {
          if (typeof targetValue[funcName] === "function") {
            return targetValue[funcName];
          } else {
            return deepFindFunction(targetValue, propName, funcName);
          }
        }
      }
      function checkDialogToClose($ele, from) {
        var _a2, _b, _c, _d, _e, _f;
        if ($ele.innerText.includes("长时间无操作") && $ele.innerText.includes("暂停播放")) {
          log.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`);
          Qmsg.info(`检测${from}：出现【长时间无操作，已暂停播放】弹窗`);
          let $rect = utils.getReactObj($ele);
          if (typeof $rect.reactContainer === "object") {
            let onClose = deepFindFunction($rect.reactContainer, "child", "onClose") || ((_f = (_e = (_d = (_c = (_b = (_a2 = $rect == null ? void 0 : $rect.reactContainer) == null ? void 0 : _a2.memoizedState) == null ? void 0 : _b.element) == null ? void 0 : _c.props) == null ? void 0 : _d.children) == null ? void 0 : _e.props) == null ? void 0 : _f.onClose);
            if (typeof onClose === "function") {
              log.success(`检测${from}：调用onClose关闭弹窗`);
              Qmsg.success("调用onClose关闭弹窗");
              onClose();
            }
          }
        }
      }
      domUtils.ready(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            document.querySelectorAll(
              "body > div[elementtiming='element-timing']"
            ).forEach(($elementTiming) => {
              checkDialogToClose($elementTiming, "1");
            });
            document.querySelectorAll('body > div:not([id="root"])').forEach(($ele) => {
              checkDialogToClose($ele, "2");
            });
          }
        });
      });
    },
    /**
     * 暂停视频
     */
    pauseVideo() {
      log.info("禁止自动播放视频(直播)");
      utils.waitNode('.basicPlayer[data-e2e="basicPlayer"] video').then(($video) => {
        domUtils.on(
          $video,
          "play",
          () => {
            $video.pause();
          },
          {
            capture: true,
            once: true
          }
        );
        $video.autoplay = false;
        $video.pause();
      });
    },
    /**
     * 修改视频背景颜色
     * @param color 颜色
     */
    changeBackgroundColor(color) {
      log.info("修改视频背景颜色");
      addStyle(`
		#living_room_player_container > div,
		#chatroom > div{
			background: ${color};
		}	
		`);
    }
  };
  const PanelLiveConfig = {
    id: "panel-config-live",
    title: "直播",
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
                text: "功能",
                type: "forms",
                forms: [
                  UISelect(
                    "清晰度",
                    "live-chooseQuality",
                    "auto",
                    (() => {
                      return Object.keys(VideoQualityMap).map((key) => {
                        let item = VideoQualityMap[key];
                        return {
                          value: key,
                          text: item.label
                        };
                      });
                    })(),
                    void 0,
                    "自行选择清晰度"
                  ),
                  UISwitch(
                    "解锁画质选择",
                    "live-unlockImageQuality",
                    true,
                    void 0,
                    "未登录的情况下选择原画实际上是未登录的情况下最高选择的画质"
                  ),
                  UISwitch(
                    "自动进入网页全屏",
                    "live-autoEnterElementFullScreen",
                    false,
                    void 0,
                    "网页加载完毕后自动点击网页全屏按钮进入全屏"
                  ),
                  UISwitch(
                    "监听并关闭【长时间无操作，已暂停播放】弹窗",
                    "live-waitToRemovePauseDialog",
                    true,
                    void 0,
                    "自动监听并检测弹窗"
                  ),
                  UISwitch(
                    "禁止自动播放",
                    "live-pauseVideo",
                    false,
                    void 0,
                    "暂停直播播放"
                  )
                ]
              },
              {
                text: "视频区域背景色",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "live-bgColor-enable",
                    false,
                    void 0,
                    "自定义视频背景色"
                  ),
                  {
                    type: "own",
                    attributes: {
                      "data-key": "live-changeBackgroundColor",
                      "data-default-value": "#000000"
                    },
                    getLiElementCallBack(liElement) {
                      let $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
											<p class="pops-panel-item-left-main-text">视频背景颜色</p>
											<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
											`
                      });
                      let $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: `
											<input type="color" class="pops-color-choose" />
											`
                      });
                      let $color = $right.querySelector(
                        ".pops-color-choose"
                      );
                      $color.value = PopsPanel.getValue(
                        "live-changeBackgroundColor"
                      );
                      let $style = domUtils.createElement("style");
                      domUtils.append(document.head, $style);
                      domUtils.on(
                        $color,
                        ["input", "propertychange"],
                        (event) => {
                          log.info("选择颜色：" + $color.value);
                          $style.innerHTML = `
											#living_room_player_container > div,
											#chatroom > div{
												background: ${$color.value};
											}
											`;
                          PopsPanel.setValue(
                            "live-changeBackgroundColor",
                            $color.value
                          );
                        }
                      );
                      liElement.appendChild($left);
                      liElement.appendChild($right);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          },
          {
            text: "过滤-弹幕",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "live-danmu-shield-rule-enable",
                    false,
                    void 0,
                    "启用自定义的弹幕过滤规则"
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      textarea.value = DouYinDanmuFilter.get();
                      domUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function() {
                          DouYinDanmuFilter.set(textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
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
            text: "屏蔽-视频区域内",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】顶栏信息",
                    "live-shieldTopToolBarInfo",
                    false,
                    void 0,
                    "屏蔽元素，包括直播作者、右侧的礼物展馆"
                  ),
                  UISwitch(
                    "【屏蔽】底部的礼物栏",
                    "live-shieldGiftColumn",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】礼物特效",
                    "live-shieldGiftEffects",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】弹幕",
                    "live-shieldDanmuku",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】小黄车",
                    "live-shielYellowCar",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-聊天室",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】聊天室",
                    "live-shieldChatRoom",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】贵宾席",
                    "live-shielChatRoomVipSeats",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】用户等级图标",
                    "dy-live-shieldUserLevelIcon",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】VIP图标",
                    "dy-live-shieldUserVIPIcon",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】粉丝牌",
                    "dy-live-shieldUserFansIcon",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】信息播报",
                    "dy-live-shieldMessage",
                    false,
                    void 0,
                    "底部滚动播报的的xxx来了，xxx给主播点赞"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const DouYinElement = {
    /**
     * 观察 #slidelist的加载每条视频
     * @param callback
     */
    watchVideDataListChange(callback) {
      let $os = null;
      domUtils.ready(() => {
        utils.waitNode("#slidelist").then(($slidelist) => {
          utils.mutationObserver($slidelist, {
            config: {
              childList: true,
              subtree: true
            },
            callback: () => {
              if (!$os) {
                $os = this.getOSElement();
              }
              if (!$os) {
                log.error("watchVideDataListChange：获取osElement失败");
                return;
              }
              callback($os);
            }
          });
        });
      });
    },
    getOSElement() {
      return document.querySelector("#root div[class*='-os']") || document.querySelector("#douyin-right-container");
    }
  };
  const DouYinVideoFilter = {
    key: "douyin-shield-rule",
    $data: {
      __rule: null,
      /**
       * 解析出的规则
       */
      get rule() {
        if (DouYinVideoFilter.$data.__rule == null) {
          DouYinVideoFilter.$data.__rule = new utils.Dictionary();
        }
        return DouYinVideoFilter.$data.__rule;
      },
      /** 是否是首次加载视频 */
      isFirstLoad: true
    },
    /**
     * authorInfo.nickname:string    作者
     * authorInfo.uid:string         作者id
     * desc:string                   视频描述
     * shareInfo.shareLinkDesc:string       xxx复制链接到抖音App的识别码
     * shareInfo.shareUrl:string            网页直接看的视频链接
     * textExtra[{hashtagName: ""},...]     话题
     * videoTag[{tagName: ""},...]          视频标签
     */
    init() {
      this.parseRule();
      log.info(["当前自定义视频拦截规则: ", this.$data.rule.getItems()]);
      let firstLoadEndVideoId = null;
      DouYinElement.watchVideDataListChange(
        utils.debounce((osElement) => {
          var _a2, _b, _c, _d, _e;
          let $videoList = document.querySelector(
            '#slidelist div[data-e2e="slideList"]'
          );
          if (!$videoList) {
            log.error("未获取到视频列表元素");
            return;
          }
          let reactFiber = (_a2 = utils.getReactObj($videoList)) == null ? void 0 : _a2.reactFiber;
          if (reactFiber == null) {
            log.error(["元素上不存在reactFiber属性", $videoList]);
            return;
          }
          let videoDataList = reactFiber == null ? void 0 : reactFiber.return.memoizedProps.data;
          if (!videoDataList.length) {
            return;
          }
          if (this.$data.isFirstLoad) {
            let endVideo = videoDataList[videoDataList.length - 1];
            if (firstLoadEndVideoId == null) {
              firstLoadEndVideoId = endVideo.awemeId;
            }
            if (firstLoadEndVideoId === endVideo.awemeId) {
              return;
            }
            this.$data.isFirstLoad = false;
          }
          for (let index = 0; index < videoDataList.length; index++) {
            let videoData = videoDataList[index];
            let videoInfoTag = this.getVideoInfoTagMap(videoData);
            let flag = false;
            if (!flag) {
              if (typeof videoData["cellRoom"] === "object" && PopsPanel.getValue("shieldVideo-live")) {
                log.success("屏蔽直播: because cellRoom is not null");
                flag = true;
              }
            }
            if (!flag) {
              if (PopsPanel.getValue("shieldVideo-ads")) {
                if (videoData["isAds"]) {
                  flag = true;
                  log.success("屏蔽广告: because isAds is true");
                } else if (typeof videoData["rawAdData"] === "string" && utils.isNotNull(videoData["rawAdData"])) {
                  flag = true;
                  log.success("屏蔽广告: because rawAdData is not null");
                } else if ((_c = (_b = videoData["webRawData"]) == null ? void 0 : _b["brandAd"]) == null ? void 0 : _c["is_ad"]) {
                  flag = true;
                  log.success(
                    "屏蔽广告: because webRawData.brandAd.is_ad is true"
                  );
                } else if ((_e = (_d = videoData["webRawData"]) == null ? void 0 : _d["insertInfo"]) == null ? void 0 : _e["is_ad"]) {
                  flag = true;
                  log.success(
                    "屏蔽广告: because webRawData.insertInfo.is_ad is true"
                  );
                }
              }
            }
            if (!flag) {
              for (const [ruleKey, ruleValue] of this.$data.rule.entries()) {
                if (!(ruleKey in videoInfoTag)) {
                  continue;
                }
                let tagValue = videoInfoTag[ruleKey];
                if (tagValue != null) {
                  if (typeof tagValue === "string") {
                    flag = Boolean(tagValue.match(ruleValue));
                    if (flag) {
                      log.success([
                        "自定义屏蔽: " + ruleKey + "  " + ruleValue,
                        videoInfoTag
                      ]);
                      break;
                    }
                  } else if (typeof tagValue === "object" && Array.isArray(tagValue)) {
                    let findValue = tagValue.find(
                      (tagValueItem) => Boolean(tagValueItem.match(ruleValue))
                    );
                    if (findValue) {
                      flag = true;
                      log.success([
                        "自定义屏蔽: " + ruleKey + "  " + ruleValue,
                        videoInfoTag
                      ]);
                      break;
                    }
                  }
                }
              }
            }
            if (flag) {
              videoDataList.splice(index, 1);
              index--;
            }
          }
        }, 50)
      );
    },
    /**
     * 获取视频各个信息的字典
     */
    getVideoInfoTagMap(data) {
      var _a2, _b, _c, _d, _e, _f;
      let nickname = (_b = (_a2 = data == null ? void 0 : data["authorInfo"]) == null ? void 0 : _a2["nickname"]) == null ? void 0 : _b.toString();
      let uid = (_d = (_c = data == null ? void 0 : data["authorInfo"]) == null ? void 0 : _c["uid"]) == null ? void 0 : _d.toString();
      let desc = (_e = data == null ? void 0 : data["desc"]) == null ? void 0 : _e.toString();
      let textExtra = [];
      if (typeof (data == null ? void 0 : data["textExtra"]) === "object" && Array.isArray(data == null ? void 0 : data["textExtra"])) {
        (_f = data == null ? void 0 : data["textExtra"]) == null ? void 0 : _f.forEach((item) => {
          textExtra.push(item["hashtagName"]);
        });
      }
      let videoTag = [];
      if (typeof (data == null ? void 0 : data["videoTag"]) === "object" && Array.isArray(data == null ? void 0 : data["videoTag"])) {
        data == null ? void 0 : data["videoTag"].forEach((item) => {
          videoTag.push(item["tagName"]);
        });
      }
      return {
        nickname,
        uid,
        desc,
        textExtra,
        videoTag
      };
    },
    /**
     * 解析规则
     */
    parseRule() {
      let localRule = this.get().trim();
      let localRuleSplit = localRule.split("\n");
      localRuleSplit.forEach((item) => {
        if (utils.isNull(item)) {
          return;
        }
        let trimItem = item.trim();
        let itemSplit = trimItem.split("##");
        if (itemSplit.length < 2) {
          return;
        }
        let keyName = itemSplit[0];
        itemSplit.shift();
        let keyValue = itemSplit.join("");
        try {
          let regExpKeyValue = new RegExp(keyValue, "g");
          this.$data.rule.set(keyName, regExpKeyValue);
        } catch (error) {
          log.error(["自定义视频过滤规则-正则解析错误：" + error]);
          log.error("错误的规则：" + item);
        }
      });
    },
    set(value) {
      _GM_setValue(this.key, value);
    },
    get() {
      return _GM_getValue(this.key, "");
    }
  };
  const UIButton = function(text, description, buttonText, buttonIcon, buttonIsRightIcon, buttonIconIsLoading, buttonType, clickCallBack) {
    let result = {
      text,
      type: "button",
      description,
      buttonIcon,
      buttonIsRightIcon,
      buttonIconIsLoading,
      buttonType,
      buttonText,
      callback(event) {
        if (typeof clickCallBack === "function") {
          clickCallBack(event);
        }
      },
      afterAddToUListCallBack: void 0
    };
    return result;
  };
  class ShortCut {
    constructor(key) {
      __privateAdd(this, _key, "short-cut");
      __privateAdd(this, _isWaitPress, false);
      if (typeof key === "string") {
        __privateSet(this, _key, key);
      }
    }
    getValue(key, defaultValue) {
      let localValue = _GM_getValue(__privateGet(this, _key), []);
      if (key) {
        let findValue = localValue.find((item) => item.key === key);
        return findValue ?? defaultValue;
      } else {
        return localValue;
      }
    }
    /**
     * 设置值
     * @param key 键
     */
    setValue(key, keyName, keyValue, ohterCodeList) {
      let localValue = _GM_getValue(__privateGet(this, _key), []);
      localValue.push({
        key,
        value: {
          keyName,
          keyValue,
          ohterCodeList
        }
      });
      _GM_setValue(__privateGet(this, _key), localValue);
    }
    /**
     * 删除值
     * @param key 键
     */
    deleteValue(key) {
      let result = false;
      let localValue = _GM_getValue(__privateGet(this, _key), []);
      let findValueIndex = localValue.findIndex((item) => item["key"] === key);
      if (findValueIndex !== -1) {
        localValue.splice(findValueIndex, 1);
        result = true;
      }
      _GM_setValue(__privateGet(this, _key), localValue);
      return result;
    }
    /**
     * 获取快捷键显示的文字
     * @param key
     * @param defaultValue
     */
    getShowText(key, defaultValue) {
      let localValue = this.getValue(key);
      if (localValue) {
        let result = "";
        localValue.value.ohterCodeList.forEach((ohterCodeKey) => {
          if (localValue.key === key) {
            result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
          }
        });
        result += localValue.value.keyName;
        return result;
      } else {
        return defaultValue;
      }
    }
    /**
     * 录入快捷键
     */
    inputShortCut(key, defaultValue, callback) {
      let localValue = this.getValue(key) ?? defaultValue;
      if (localValue === defaultValue) {
        let loadingQmsg = Qmsg.loading("请按下快捷键...", {
          showClose: true,
          onClose() {
            keyboardListener.removeListen();
          }
        });
        __privateSet(this, _isWaitPress, true);
        let keyboardListener = utils.listenKeyboard(
          window,
          "keyup",
          (keyName, keyValue, ohterCodeList) => {
            let shortcutJSONString = JSON.stringify({
              keyName,
              keyValue,
              ohterCodeList
            });
            let allDetails = this.getValue();
            for (let index = 0; index < allDetails.length; index++) {
              if (shortcutJSONString === JSON.stringify(allDetails[index]["value"])) {
                Qmsg.error(
                  `快捷键 ${this.getShowText(
                  allDetails[index]["key"],
                  keyName
                )} 已被占用`
                );
                __privateSet(this, _isWaitPress, false);
                loadingQmsg.close();
                return;
              }
            }
            this.setValue(key, keyName, keyValue, ohterCodeList);
            if (typeof callback === "function") {
              callback(this.getShowText(key, defaultValue));
            }
            __privateSet(this, _isWaitPress, false);
            loadingQmsg.close();
          }
        );
      } else {
        this.deleteValue(key);
      }
      if (typeof callback === "function") {
        callback(this.getShowText(key, defaultValue));
      }
    }
    /**
     * 初始化全局键盘监听
     */
    initGlobalKeyboardListener(shortCutMap) {
      let localValue = this.getValue();
      if (!localValue.length) {
        return;
      }
      utils.listenKeyboard(
        window,
        "keydown",
        (keyName, keyValue, ohterCodeList) => {
          if (__privateGet(this, _isWaitPress)) {
            return;
          }
          localValue = this.getValue();
          let findShortcutIndex = localValue.findIndex((item) => {
            let itemValue = item["value"];
            let tempValue = {
              keyName,
              keyValue,
              ohterCodeList
            };
            if (JSON.stringify(itemValue) === JSON.stringify(tempValue)) {
              return item;
            }
          });
          if (findShortcutIndex != -1) {
            let findShortcut = localValue[findShortcutIndex];
            log.info(["调用快捷键", findShortcut]);
            if (findShortcut.key in shortCutMap) {
              shortCutMap[findShortcut.key].callback();
            }
          }
        }
      );
    }
  }
  _key = new WeakMap();
  _isWaitPress = new WeakMap();
  const MobileCSS$1 = '/* 去除顶部的padding距离 */\r\n#douyin-right-container {\r\n	padding-top: 0;\r\n}\r\n/* 放大放大顶部的综合、视频、用户等header的宽度 */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) {\r\n	width: 100vw;\r\n}\r\n/* 放大顶部的综合、视频、用户等header */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div {\r\n	transform: scale(0.8);\r\n}\r\n/* 视频宽度 */\r\nul[data-e2e="scroll-list"] {\r\n	padding: 0px 10px;\r\n}\r\n#sliderVideo {\r\n	width: -webkit-fill-available;\r\n}\r\n/* 距离是顶部导航栏的高度 */\r\n#search-content-area {\r\n	margin-top: 65px;\r\n}\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#sliderVideo {\r\n		width: 100vw;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#component-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: -webkit-fill-available;\r\n		padding-right: 0;\r\n	}\r\n}\r\n';
  const DouYinSearchHideElement = {
    init() {
      PopsPanel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
        return this.shieldReleatedSearches();
      });
    },
    /**
     * 【屏蔽】相关搜索
     */
    shieldReleatedSearches() {
      log.info("【屏蔽】相关搜索");
      return [
        DouYinUtils.addBlockCSS("#search-content-area > div > div:nth-child(2)"),
        addStyle(
          /*css*/
          `
			#search-content-area > div > div:nth-child(1) > div:nth-child(1){
				width: 100vw;
			}`
        )
      ];
    }
  };
  const DouYinSearch = {
    init() {
      DouYinSearchHideElement.init();
      PopsPanel.execMenuOnce("dy-search-disableClickToEnterFullScreen", () => {
        this.disableClickToEnterFullScreen();
      });
    },
    /**
     * 手机模式
     * (由通用统一调用，勿放在本函数的init内)
     */
    mobileMode() {
      log.info("搜索-手机模式");
      addStyle(MobileCSS$1);
      utils.waitNode("#relatedVideoCard").then(($relatedVideoCard) => {
        log.info("评论区展开的className：" + $relatedVideoCard.className);
        addStyle(
          /*css*/
          `
				html[data-vertical-screen]
					#sliderVideo[data-e2e="feed-active-video"]
					#videoSideBar:has(#relatedVideoCard[class="${$relatedVideoCard.className}"]) {
						width: 100vw !important;
				}`
        );
      });
    },
    /**
     * 禁止点击视频区域进入全屏
     */
    disableClickToEnterFullScreen() {
      log.info("搜索-禁止点击视频区域进入全屏");
      domUtils.on(
        document,
        "click",
        ".focusPanel",
        (event) => {
          var _a2;
          utils.preventEvent(event);
          let $click = event.target;
          let $parent = (_a2 = $click.parentElement) == null ? void 0 : _a2.parentElement;
          let $video = $parent.querySelector("video");
          if ($video) {
            if ($video.paused) {
              log.info(".focusPanel：播放视频");
              $video.play();
            } else {
              log.info(".focusPanel：视频暂停");
              $video.pause();
            }
          } else {
            log.error(".focusPanel未找到<video>标签");
            Qmsg.error(".focusPanel未找到<video>标签", {
              isHTML: false
            });
          }
        },
        {
          capture: true
        }
      );
      domUtils.on(
        document,
        "click",
        "xg-video-container",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let $video = $click.querySelector("video");
          if ($video) {
            if ($video.paused) {
              log.info("xg-video-container：播放视频");
              $video.play();
            } else {
              log.info("xg-video-container：视频暂停");
              $video.pause();
            }
          } else {
            log.error("xg-video-container未找到<video>标签");
            Qmsg.error("xg-video-container未找到<video>标签", {
              isHTML: false
            });
          }
        },
        {
          capture: true
        }
      );
    }
  };
  const DouYinRouter = {
    /** 直播 */
    isLive() {
      return window.location.hostname === "live.douyin.com";
    },
    /** 视频 */
    isVideo() {
      return window.location.hostname === "www.douyin.com";
    },
    /** 搜索 */
    isSearch() {
      return window.location.hostname === "www.douyin.com" && window.location.pathname.startsWith("/search");
    }
  };
  const MobileCSS = '/* 右侧工具栏放大 */\r\n.basePlayerContainer .positionBox {\r\n	bottom: 80px !important;\r\n	padding-right: 5px !important;\r\n	scale: unset !important;\r\n	transform: scale3d(1.12, 1.12, 1.12) !important;\r\n}\r\n/* 右侧工具栏的svg再放大 */\r\n.basePlayerContainer .positionBox svg {\r\n	transform: scale3d(1.12, 1.12, 1.12);\r\n}\r\n/* 重置关注按钮的scale */\r\n.basePlayerContainer\r\n	.positionBox\r\n	.dy-tip-container\r\n	div[data-e2e="feed-follow-icon"]\r\n	svg {\r\n	scale: unset !important;\r\n}\r\n/* 设备处于横向方向，即宽度大于高度。 */\r\n@media screen and (orientation: landscape) {\r\n	/* 右侧工具栏放大 */\r\n	.basePlayerContainer .positionBox {\r\n		/*transform: scale(0.95) !important;\r\n		bottom: 42px !important;*/\r\n		padding-right: 10px !important;\r\n	}\r\n}\r\n/* 该设备是纵向的，即高度大于或等于宽度 */\r\n@media screen and (orientation: portrait) {\r\n	/* /video/xxx页面 */\r\n	/* 点赞、评论、分享偏移 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		.basePlayerContainer\r\n		.positionBox {\r\n		padding-right: 30px !important;\r\n	}\r\n	/* 底部工具栏右侧的按钮 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		.xgplayer.xgplayer-pc\r\n		.xg-right-grid {\r\n		margin-right: 35px !important;\r\n	}\r\n	/* 评论区全屏 */\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		> div:has(.comment-mainContent[data-e2e="comment-list"]),\r\n	div[data-e2e="video-detail"]\r\n		.leftContainer\r\n		> div\r\n		> div:has(.comment-mainContent[data-e2e="comment-list"]) {\r\n		width: 100vw !important;\r\n	}\r\n}\r\n\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#slidelist {\r\n		width: 100vw;\r\n		height: 100vh;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: 150px;\r\n		padding-right: 0;\r\n		max-width: unset;\r\n	}\r\n	/* 搜索框获取焦点时自动放大宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]:focus) {\r\n		width: 100vw;\r\n		width: 100dvw;\r\n	}\r\n	/* 去除设置min-width超出浏览器宽度的问题 */\r\n	body {\r\n		min-width: 100% !important;\r\n	}\r\n	/* 去除设置width导致顶部工具栏超出浏览器宽度的问题 */\r\n	#douyin-right-container #douyin-header {\r\n		width: 100%;\r\n	}\r\n	/* 去除设置 */\r\n	#douyin-right-container #douyin-header > div[data-click="doubleClick"] {\r\n		min-width: 100%;\r\n	}\r\n}\r\n';
  const DouYinVideoCommentHideElement = {
    init() {
      PopsPanel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
        return this.shieldUserCommentToolBar();
      });
      PopsPanel.execMenuOnce(
        "dy-video-shieldUserCommentEveryOneAllSearch",
        () => {
          return this.shieldUserCommentEveryOneAllSearch();
        }
      );
    },
    /**
     * 【屏蔽】评论工具栏
     */
    shieldUserCommentToolBar() {
      log.info("【屏蔽】评论工具栏");
      return [DouYinUtils.addBlockCSS(".comment-input-container")];
    },
    /**
     * 【屏蔽】大家都在搜
     */
    shieldUserCommentEveryOneAllSearch() {
      log.info("【屏蔽】大家都在搜");
      return [DouYinUtils.addBlockCSS(".comment-header-with-search")];
    }
  };
  const DouYinVideoBottomToolbarHideElement = {
    init() {
      PopsPanel.execMenuOnce("shieldBottomVideoToolBar", () => {
        return this.shieldBottomVideoToolBar();
      });
      PopsPanel.execMenuOnce("dy-video-bottom-shieldVideoInfoWrap", () => {
        return this.shieldVideoInfoWrap();
      });
      PopsPanel.execMenuOnce("shieldBottomVideoToolbarDanmuContainer", () => {
        return this.shieldBottomVideoToolbarDanmuContainer();
      });
    },
    /**
     * 【屏蔽】底部视频工具栏
     */
    shieldBottomVideoToolBar() {
      log.info("【屏蔽】底部视频工具栏");
      return [
        DouYinUtils.addBlockCSS("xg-controls.xgplayer-controls"),
        // 修复底部工具栏因屏蔽导致的空白区域
        addStyle(`
			#sliderVideo[data-e2e="feed-active-video"] div:has( > div > #video-info-wrap),
			div:has( > div > pace-island > #video-info-wrap ),
			xg-video-container.xg-video-container{
				bottom: 0 !important;
			}`)
      ];
    },
    /**
     * 【屏蔽】视频信息
     */
    shieldVideoInfoWrap() {
      log.info("【屏蔽】视频信息");
      return [DouYinUtils.addBlockCSS("#video-info-wrap")];
    },
    /**
     * 【屏蔽】底部视频工具栏的弹幕容器
     */
    shieldBottomVideoToolbarDanmuContainer() {
      log.info("【屏蔽】底部视频工具栏的弹幕容器");
      return [
        DouYinUtils.addBlockCSS(
          'xg-controls xg-inner-controls .danmakuContainer[data-e2e="danmaku-container"]'
        )
      ];
    }
  };
  const DouYinVideoRightToolbarHideElement = {
    init() {
      PopsPanel.execMenuOnce("shieldPlaySwitchButton", () => {
        return this.shieldPlaySwitchButton();
      });
      PopsPanel.execMenuOnce("shieldAuthorAvatar", () => {
        return this.shieldAuthorAvatar();
      });
      PopsPanel.execMenuOnce("shieldLikeButton", () => {
        return this.shieldLikeButton();
      });
      PopsPanel.execMenuOnce("shieldCommentButton", () => {
        return this.shieldCommentButton();
      });
      PopsPanel.execMenuOnce("shieldCollectionButton", () => {
        return this.shieldCollectionButton();
      });
      PopsPanel.execMenuOnce("shieldSharenButton", () => {
        return this.shieldSharenButton();
      });
      PopsPanel.execMenuOnce("shieldRelatedRecommendationsButton", () => {
        return this.shieldRelatedRecommendationsButton();
      });
      PopsPanel.execMenuOnce("shieldMoreButton", () => {
        return this.shieldMoreButton();
      });
    },
    /**
     * 【屏蔽】切换播放
     */
    shieldPlaySwitchButton() {
      log.info("【屏蔽】切换播放");
      return [
        DouYinUtils.addBlockCSS(
          '.positionBox  .xgplayer-playswitch[data-state="normal"]',
          "div.xgplayer-playswitch",
          /* 全屏下的右侧的切换播放 */
          ".xgplayer-playswitch"
        ),
        addStyle(`
			div[data-e2e="slideList"]{
				/* 修复屏蔽后的视频宽度占据 */
				padding: 0px !important;
			}
			`)
      ];
    },
    /**
     * 【屏蔽】作者头像
     */
    shieldAuthorAvatar() {
      log.info("【屏蔽】作者头像");
      return [
        DouYinUtils.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-avatar"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="video-avatar"])'
        )
      ];
    },
    /**
     * 【屏蔽】点赞
     */
    shieldLikeButton() {
      log.info("【屏蔽】点赞");
      return [
        DouYinUtils.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-digg"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="video-player-digg"])'
        )
      ];
    },
    /**
     * 【屏蔽】评论
     */
    shieldCommentButton() {
      log.info("【屏蔽】评论");
      return [
        DouYinUtils.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="feed-comment-icon"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has([data-e2e="feed-comment-icon"])'
        )
      ];
    },
    /**
     * 【屏蔽】收藏
     */
    shieldCollectionButton() {
      log.info("【屏蔽】收藏");
      return [
        DouYinUtils.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-collect"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[data-e2e="video-player-collect"][data-e2e-state="video-player-no-collect"]'
        )
      ];
    },
    /**
     * 【屏蔽】分享
     */
    shieldSharenButton() {
      log.info("【屏蔽】分享");
      return [
        DouYinUtils.addBlockCSS(
          'div.dy-tip-container:has([data-e2e="video-player-share"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div:has(>div[data-e2e="video-player-share"])'
        )
      ];
    },
    /**
     * 【屏蔽】看相关
     */
    shieldRelatedRecommendationsButton() {
      log.info("【屏蔽】看相关");
      return [
        DouYinUtils.addBlockCSS(
          'div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          'div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])',
          // 2024.7.2 新增其它的样式匹配
          '.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          // 2024.7.15
          '.basePlayerContainer div[aria-describedby]:has(path[d="M14 8a8 8 0 0 0-8 8v4a8 8 0 0 0 8 8h8a8 8 0 0 0 8-8v-4a8 8 0 0 0-8-8h-8zm8.5 10.866a1 1 0 0 0 0-1.732l-6-3.464a1 1 0 0 0-1.5.866v6.928a1 1 0 0 0 1.5.866l6-3.464z"])',
          // 2024.7.16 移动端的屏蔽规则
          '.basePlayerContainer div[aria-describedby]:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])'
        )
      ];
    },
    /**
     * 【屏蔽】更多
     */
    shieldMoreButton() {
      log.info("【屏蔽】更多");
      return DouYinUtils.addBlockCSS(
        'div.dy-tip-container:has([data-e2e="video-play-more"])',
        // 2024.7.2 新增其它的样式匹配
        '.basePlayerContainer div[data-e2e="video-play-more"]'
      );
    }
  };
  const DouYinVideoHideElement = {
    init() {
      PopsPanel.execMenuOnce("shieldRightExpandCommentButton", () => {
        return this.shieldRightExpandCommentButton();
      });
      PopsPanel.execMenuOnce("shieldSearchFloatingBar", () => {
        return this.shieldSearchFloatingBar();
      });
      PopsPanel.execMenuOnce("shieldCloseFullScreenButton", () => {
        return this.shieldCloseFullScreenButton();
      });
      DouYinVideoBottomToolbarHideElement.init();
      DouYinVideoRightToolbarHideElement.init();
      DouYinVideoCommentHideElement.init();
    },
    /**
     * 【屏蔽】右侧的展开评论按钮
     */
    shieldRightExpandCommentButton() {
      log.info("【屏蔽】右侧的展开评论按钮");
      return [
        DouYinUtils.addBlockCSS(
          '#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
          '.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
        ),
        addStyle(`
			.basePlayerContainer .positionBox{
				padding-right: 20px !important;
			}`)
      ];
    },
    /**
     * 左上角的鼠标的快捷搜索热点的悬浮栏
     * 【屏蔽】搜索悬浮栏
     */
    shieldSearchFloatingBar() {
      log.info("【屏蔽】搜索悬浮栏");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          /* 看相关页面的 */
          "#slideMode + div",
          // 2024.7.16
          '.playerContainer .slider-video>div>div:has([data-e2e="searchbar-button"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            'div:has(>div>div+[data-e2e="searchbar-input"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】网页全屏关闭按钮
     */
    shieldCloseFullScreenButton() {
      log.info("【屏蔽】网页全屏关闭按钮");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          // 2024.7.16
          '.playerContainer .slider-video>div>div:has(path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            '#douyin-right-container div>div:has(>svg>path[d="M17.448 17.448a1.886 1.886 0 0 1-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 1 1 .552 14.78L6.332 9 .552 3.22A1.886 1.886 0 1 1 3.22.552L9 6.332l5.78-5.78a1.886 1.886 0 1 1 2.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 0 1 0 2.668z"])'
          )
        );
      }
      return result;
    }
  };
  const DouYinVideo = {
    init() {
      DouYinVideoHideElement.init();
      DouYinVideoShortcut.init();
      PopsPanel.execMenuOnce("shieldVideo", () => {
        DouYinVideoFilter.init();
      });
      PopsPanel.execMenuOnce("changeCommentToBottom", () => {
        DouYinVideo.changeCommentToBottom();
      });
      PopsPanel.execMenuOnce("fullScreen", () => {
        return this.fullScreen();
      });
      PopsPanel.execMenuOnce("parseVideo", () => {
        DouYinVideo.parseVideo();
      });
      PopsPanel.execMenu("autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      PopsPanel.execMenuOnce("dy-video-doubleClickEnterElementFullScreen", () => {
        this.doubleClickEnterElementFullScreen();
      });
      PopsPanel.execMenu("dy-video-bgColor-enable", () => {
        PopsPanel.execMenuOnce(
          "dy-video-changeBackgroundColor",
          (value) => {
            return this.changeBackgroundColor(value);
          }
        );
      });
      PopsPanel.execMenuOnce("repairProgressBar", () => {
        PopsPanel.onceExec("repairProgressBar", () => {
          this.repairVideoProgressBar();
        });
      });
      domUtils.ready(() => {
        DouYinVideo.chooseVideoDefinition(
          PopsPanel.getValue("chooseVideoDefinition")
        );
        PopsPanel.execMenuOnce("mobileMode", () => {
          this.mobileMode();
        });
      });
    },
    /**
     * 全屏
     */
    fullScreen() {
      log.info("全屏");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          /* 右侧工具栏 */
          ".slider-video .positionBox",
          /* 中间底部的视频信息（描述、作者、话题等） */
          "#video-info-wrap",
          /* 中间底部的视频控制工具栏 */
          "xg-controls.xgplayer-controls"
        )
      );
      result.push(DouYinVideoHideElement.shieldSearchFloatingBar());
      result.push(
        addStyle(
          /*css*/
          `
			/* 视频全屏 */
			xg-video-container.xg-video-container{
				bottom: 0px !important;
			}
        `
        )
      );
      return result;
    },
    /**
     * 自动进入网页全屏
     * @param [userKeyBoard=false] 是否使用键盘触发
     */
    autoEnterElementFullScreen(userKeyBoard = false) {
      if (userKeyBoard) {
        let keydownEvent = new KeyboardEvent("keydown", {
          bubbles: true,
          cancelable: true,
          key: "Y",
          code: "KeyY",
          keyCode: 89,
          which: 89
        });
        document.dispatchEvent(keydownEvent);
      } else {
        utils.waitNode(
          'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon:has([d="M9.75 8.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2H9.75zM15 11.25h-3.75a1 1 0 0 0-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 0 1-1 1z"])'
        ).then((element) => {
          log.success("自动进入网页全屏");
          element.click();
        });
      }
    },
    /**
     * 双击进入网页全屏
     */
    doubleClickEnterElementFullScreen() {
      let isDouble = false;
      log.info("注册双击进入网页全屏事件");
      let selectorList = [".newVideoPlayer", "#sliderVideo"];
      selectorList.forEach((selector) => {
        domUtils.on(
          document,
          "click",
          selector,
          (event) => {
            if (isDouble) {
              isDouble = false;
              DouYinVideo.autoEnterElementFullScreen(true);
            } else {
              isDouble = true;
              setTimeout(() => {
                isDouble = false;
              }, 250);
            }
          }
        );
      });
    },
    /**
     * 评论区修改为底部
     */
    changeCommentToBottom() {
      log.info("评论区修改为底部");
      let ATTRIBUTE_KEY2 = "data-vertical-screen";
      function autoChangeCommentPosition() {
        if (DouYinUtils.isVerticalScreen()) {
          log.success("自动判断: 竖屏");
          document.documentElement.setAttribute(ATTRIBUTE_KEY2, "true");
        } else {
          log.success("自动判断: 横屏");
          document.documentElement.removeAttribute(ATTRIBUTE_KEY2);
        }
      }
      autoChangeCommentPosition();
      addStyle(
        /*css*/
        `
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard,
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-video"] #videoSideCard #relatedVideoCard{
			display: none !important;
		}
		/* 左侧的视频宽度撑满 */
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e] .playerContainer,
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e] .playerContainer{
			width: 100% !important;
		}
		/* 右侧的评论区宽度撑满，position使用absolute */
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e="feed-active-video"] #videoSideCard:has(#relatedVideoCard){
			width: 100%;
			height: 75%;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.9);
			transition: height .15s linear !important;
			position: absolute;
		}
		`
      );
      PopsPanel.execMenuOnce(
        "douyin-video-autoCheckChangeCommentToBottom",
        () => {
          domUtils.on(window, "resize", autoChangeCommentPosition);
        }
      );
    },
    /**
     * 选择视频清晰度
     * @param [mode=0] 视频播放模式
     */
    chooseVideoDefinition(mode = 0) {
      log.info("选择视频清晰度: " + mode);
      let Definition_Key = "MANUAL_SWITCH";
      let definition = [
        {
          clarityReal: [
            "normal_1080_0",
            "normal_720_0",
            "low_720_0",
            "normal_540_0",
            "low_540_0",
            "adapt_low_540_0",
            "lower_540_0"
          ],
          done: 1,
          gearClarity: "5",
          gearName: "高清",
          gearType: 1,
          qualityType: 1
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "4",
          gearName: "清晰",
          gearType: 2,
          qualityType: 15
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "3",
          gearName: "流畅",
          gearType: 3,
          qualityType: 28
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "2",
          gearName: "极速",
          gearType: 4,
          qualityType: 21
        },
        {
          clarityReal: [
            "normal_1080_0",
            "low_540_0",
            "low_720_0",
            "normal_720_0",
            "normal_540_0",
            "adapt_low_540_0",
            "lower_540_0",
            "adapt_lowest_720_1",
            "adapt_540_1",
            "adapt_lower_540_1"
          ],
          done: 1,
          gearClarity: "0",
          gearName: "智能",
          gearType: 0
        }
      ];
      let choose = definition.find((item) => item.gearType === mode);
      function setStorage(value) {
        _unsafeWindow.sessionStorage.setItem(Definition_Key, value);
      }
      if (choose) {
        let count = 0;
        let chooseStr = JSON.stringify(choose);
        let interval = setInterval(() => {
          setStorage(chooseStr);
          count++;
          if (count >= 20) {
            clearInterval(interval);
          }
        }, 500);
        log.success("设置当前视频的清晰度: " + mode);
      } else {
        log.error("该清晰度不存在: " + mode);
      }
    },
    /**
     * 选择视频倍速
     * @param [rate="1"] 倍速
     */
    chooseVideoRate(rate = "1") {
      let Definition_Key = "player_playbackratio";
      function setRate(value = "1") {
        _unsafeWindow.sessionStorage.setItem(Definition_Key, value);
        document.querySelectorAll("xg-icon.xgplayer-playback-setting").forEach(($playbackSetting) => {
          var _a2, _b, _c, _d;
          let $container = utils.getReactObj($playbackSetting).reactContainer;
          (_d = (_c = (_b = (_a2 = $container == null ? void 0 : $container.memoizedState) == null ? void 0 : _a2.element) == null ? void 0 : _b.props) == null ? void 0 : _c.xgCase) == null ? void 0 : _d.updatePlayBackRatio();
        });
      }
      setRate(rate);
    },
    /**
     * 让下载按钮变成解析视频
     */
    parseVideo() {
      log.info("让下载按钮变成解析视频");
      function showParseInfoDialog(srcList) {
        let contentHTML = "";
        srcList.forEach((url) => {
          contentHTML += /*html*/
          `
          		<div class="douyin-video-link-item"><a href="${url}" target="_blank">${url}</a></div>
            	`;
        });
        contentHTML = /*html*/
        `<div class="douyin-video-link-container">${contentHTML}</div>`;
        __pops.alert({
          title: {
            text: "视频解析",
            position: "center"
          },
          content: {
            text: contentHTML,
            html: true
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true
            }
          },
          width: utils.isPhone() ? "88vw" : "50vw",
          height: "50vh",
          drag: true,
          dragLimit: true,
          style: (
            /*css*/
            `
                .douyin-video-link-container{

                }
                .douyin-video-link-item{
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 10px;
                }
                .douyin-video-link-item a{

                }
                `
          )
        });
      }
      domUtils.on(
        document,
        "click",
        'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
        function(event) {
          var _a2;
          let clickElement = event.target;
          let rectFiber = (_a2 = utils.getReactObj(
            clickElement.parentElement
          )) == null ? void 0 : _a2.reactFiber;
          if (!rectFiber) {
            Qmsg.error("获取rectFiber属性失败");
            return;
          }
          try {
            let playTotalAddr = [];
            let playAddr = rectFiber.return.memoizedProps.awemeInfo.video.playAddr;
            let playAddrH265 = rectFiber.return.memoizedProps.awemeInfo.video.playAddrH265;
            if (playAddr != null && Array.isArray(playAddr)) {
              playTotalAddr = playTotalAddr.concat(playAddr);
            }
            if (playAddrH265 != null && Array.isArray(playAddrH265)) {
              playTotalAddr = playTotalAddr.concat(playAddrH265);
            }
            if (!playTotalAddr.length) {
              Qmsg.error("未获取到视频的有效链接信息");
              return;
            }
            let videoInfo = playTotalAddr.map((item) => item.src);
            showParseInfoDialog(videoInfo);
          } catch (error) {
            Qmsg.error("解析视频失败");
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 手机模式
     */
    mobileMode() {
      log.info("启用手机模式");
      DouYin.initialScale();
      DouYinUtils.addBlockCSS("img#douyin-temp-sidebar");
      addStyle(MobileCSS);
      PopsPanel.onceExec("repairProgressBar", () => {
        this.repairVideoProgressBar();
      });
      if (DouYinRouter.isSearch()) {
        PopsPanel.onceExec("douyin-search-mobileMode", () => {
          DouYinSearch.mobileMode();
        });
      }
    },
    /**
     * 修复进度条按钮
     */
    repairVideoProgressBar() {
      log.info("修复进度条按钮");
      addStyle(
        /*css*/
        `
		/* 禁止触发touch事件，因为会影响到按钮点击不到 */
		xg-outer,
		xg-inners {
			pointer-events: none;
		}
		`
      );
      domUtils.on(
        document,
        "touchstart",
        "xg-progress",
        (event) => {
          let $click = event.target;
          let $xg_outer = $click.querySelector("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "6px";
          }
        },
        {
          capture: true
        }
      );
      domUtils.on(
        document,
        "touchend",
        "xg-progress",
        (event) => {
          let $click = event.target;
          let $xg_outer = $click.querySelector("xg-outer");
          if ($xg_outer) {
            $xg_outer.style.height = "";
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 修改视频背景颜色
     * @param color 颜色
     */
    changeBackgroundColor(color) {
      log.info("修改视频背景颜色");
      return addStyle(
        /*css*/
        `
		#sliderVideo > div,
		/* 推荐的直播间背景 */
		xgmask,
		/* 用户主页的视频 */
		.basePlayerContainer .imgBackground{
			background: ${color}  !important;
		}
		`
      );
    }
  };
  const DouYinVideoShortcut = {
    shortCut: new ShortCut("video-short-cut"),
    $data: {
      rateMap: ["0.75", "1", "1.25", "1.5", "1.75", "2", "3"]
    },
    init() {
      this.shortCut.initGlobalKeyboardListener(this.getShortCutMap());
    },
    getShortCutMap() {
      return {
        "dy-video-rate-low": {
          callback() {
            log.info("调用倍速 => 小");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoShortcut.$data.rateMap.findIndex(
              (rate) => {
                return rate === currentRate;
              }
            );
            if (findIndex === 0) {
              log.warn("已是最小倍速: " + currentRate);
              return;
            }
            let prevRate = DouYinVideoShortcut.$data.rateMap[findIndex - 1];
            log.info("设置倍速: " + prevRate);
            DouYinVideo.chooseVideoRate(prevRate);
          }
        },
        "dy-video-rate-up": {
          callback() {
            log.info("调用倍速 => 大");
            let currentRate = _unsafeWindow.sessionStorage.getItem("player_playbackratio") ?? "1";
            let findIndex = DouYinVideoShortcut.$data.rateMap.findIndex(
              (rate) => {
                return rate === currentRate;
              }
            );
            if (findIndex === DouYinVideoShortcut.$data.rateMap.length - 1) {
              log.warn("已是最大倍速: " + currentRate);
              return;
            }
            let nextRate = DouYinVideoShortcut.$data.rateMap[findIndex + 1];
            log.info("设置倍速: " + nextRate);
            DouYinVideo.chooseVideoRate(nextRate);
          }
        }
      };
    }
  };
  const PanelVideoConfig = {
    id: "panel-config-video",
    title: "视频",
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
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "沉浸模式",
                    "fullScreen",
                    false,
                    void 0,
                    "移除右侧工具栏、底部信息栏等"
                  ),
                  UISwitch(
                    "手机模式",
                    "mobileMode",
                    false,
                    void 0,
                    "放大文字和图标，及自动启用【initial-scale=1】和【修复进度条】功能"
                  ),
                  UISwitch(
                    "修复进度条",
                    "repairProgressBar",
                    false,
                    void 0,
                    "修复移动端不能点击拖拽和定位进度的问题(移动端使用)"
                  )
                ]
              },
              {
                text: "视频区域背景色",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "dy-video-bgColor-enable",
                    false,
                    void 0,
                    "自定义视频背景色"
                  ),
                  {
                    type: "own",
                    attributes: {
                      "data-key": "dy-video-changeBackgroundColor",
                      "data-default-value": "#000000"
                    },
                    getLiElementCallBack(liElement) {
                      let $left = domUtils.createElement("div", {
                        className: "pops-panel-item-left-text",
                        innerHTML: `
							<p class="pops-panel-item-left-main-text">视频背景颜色</p>
							<p class="pops-panel-item-left-desc-text">自定义视频背景颜色，包括评论区</p>
							`
                      });
                      let $right = domUtils.createElement("div", {
                        className: "pops-panel-item-right",
                        innerHTML: `
						    <input type="color" class="pops-color-choose" />
						    `
                      });
                      let $color = $right.querySelector(
                        ".pops-color-choose"
                      );
                      $color.value = PopsPanel.getValue(
                        "dy-video-changeBackgroundColor"
                      );
                      let $style = domUtils.createElement("style");
                      domUtils.append(document.head, $style);
                      domUtils.on(
                        $color,
                        ["input", "propertychange"],
                        (event) => {
                          log.info("选择颜色：" + $color.value);
                          $style.innerHTML = `
							#sliderVideo > div{
								background: ${$color.value};
							}
							`;
                          PopsPanel.setValue(
                            "dy-video-changeBackgroundColor",
                            $color.value
                          );
                        }
                      );
                      liElement.appendChild($left);
                      liElement.appendChild($right);
                      return liElement;
                    }
                  }
                ]
              }
            ]
          },
          {
            text: "视频",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "清晰度",
                    "chooseVideoDefinition",
                    1,
                    [
                      {
                        text: "智能",
                        value: 0
                      },
                      {
                        text: "极速",
                        value: 4
                      },
                      {
                        text: "流畅",
                        value: 3
                      },
                      {
                        text: "清晰",
                        value: 2
                      },
                      {
                        text: "高清",
                        value: 1
                      }
                    ],
                    void 0,
                    "自行选择清晰度"
                  ),
                  UISwitch(
                    "视频解析",
                    "parseVideo",
                    true,
                    void 0,
                    "分享->下载(灰色的也可点击)"
                  ),
                  UISwitch(
                    "评论区移到中间",
                    "changeCommentToBottom",
                    true,
                    void 0,
                    "修改评论区为中间弹出而非右侧区域"
                  ),
                  UISwitch(
                    "↑自适应评论区位置",
                    "douyin-video-autoCheckChangeCommentToBottom",
                    true,
                    void 0,
                    "根据window.screen.orientation.type自动判断是否开启【评论区移到中间】"
                  ),
                  UISwitch(
                    "自动进入网页全屏",
                    "autoEnterElementFullScreen",
                    false,
                    void 0,
                    "网页加载完毕后自动点击网页全屏按钮进入全屏"
                  ),
                  UISwitch(
                    "双击进入网页全屏",
                    "dy-video-doubleClickEnterElementFullScreen",
                    false,
                    void 0,
                    "双击视频自动进入网页全屏，检测间隔250ms"
                  )
                ]
              }
            ]
          },
          {
            text: "快捷键",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UIButton(
                    "倍速 -> 小",
                    "视频倍速变小",
                    () => {
                      return DouYinVideoShortcut.shortCut.getShowText(
                        "dy-video-rate-low",
                        "点击录入快捷键"
                      );
                    },
                    "keyboard",
                    false,
                    false,
                    "default",
                    (event) => {
                      var _a2;
                      let $click = event.target;
                      let spanElement = (_a2 = $click.closest(".pops-panel-button")) == null ? void 0 : _a2.querySelector("span");
                      DouYinVideoShortcut.shortCut.inputShortCut(
                        "dy-video-rate-low",
                        "点击录入快捷键",
                        (showText) => {
                          spanElement.innerHTML = showText;
                        }
                      );
                    }
                  ),
                  UIButton(
                    "倍速 -> 大",
                    "视频倍速变大",
                    () => {
                      return DouYinVideoShortcut.shortCut.getShowText(
                        "dy-video-rate-up",
                        "点击录入快捷键"
                      );
                    },
                    "keyboard",
                    false,
                    false,
                    "default",
                    (event) => {
                      var _a2;
                      let $click = event.target;
                      let spanElement = (_a2 = $click.closest(".pops-panel-button")) == null ? void 0 : _a2.querySelector("span");
                      DouYinVideoShortcut.shortCut.inputShortCut(
                        "dy-video-rate-up",
                        "点击录入快捷键",
                        (showText) => {
                          spanElement.innerHTML = showText;
                        }
                      );
                    }
                  )
                ]
              }
            ]
          },
          {
            text: "过滤-视频",
            type: "deepMenu",
            forms: [
              {
                text: '<a href="https://greasyfork.org/zh-CN/scripts/494643-%E6%8A%96%E9%9F%B3%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">点击查看规则</a>',
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "shieldVideo",
                    true,
                    void 0,
                    "开启后可启用下面的屏蔽功能"
                  ),
                  UISwitch(
                    "【屏蔽】直播",
                    "shieldVideo-live",
                    true,
                    void 0,
                    "过滤掉直播"
                  ),
                  UISwitch(
                    "【屏蔽】广告",
                    "shieldVideo-ads",
                    true,
                    void 0,
                    "过滤掉广告"
                  ),
                  {
                    type: "own",
                    getLiElementCallBack(liElement) {
                      let textareaDiv = domUtils.createElement(
                        "div",
                        {
                          className: "pops-panel-textarea",
                          innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`
                        },
                        {
                          style: "width: 100%;"
                        }
                      );
                      let textarea = textareaDiv.querySelector(
                        "textarea"
                      );
                      textarea.value = DouYinVideoFilter.get();
                      domUtils.on(
                        textarea,
                        ["input", "propertychange"],
                        utils.debounce(function() {
                          DouYinVideoFilter.set(textarea.value);
                        }, 200)
                      );
                      liElement.appendChild(textareaDiv);
                      return liElement;
                    }
                  }
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
            text: "屏蔽-视频区域内",
            type: "deepMenu",
            forms: [
              {
                text: "右侧",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】切换播放",
                    "shieldPlaySwitchButton",
                    false,
                    void 0,
                    "屏蔽元素，在右侧作者头像上方"
                  ),
                  UISwitch(
                    "【屏蔽】作者头像",
                    "shieldAuthorAvatar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】点赞",
                    "shieldLikeButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】评论",
                    "shieldCommentButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】收藏",
                    "shieldCollectionButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】分享",
                    "shieldSharenButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】看相关",
                    "shieldRelatedRecommendationsButton",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】更多",
                    "shieldMoreButton",
                    false,
                    void 0,
                    "...按钮，屏蔽元素"
                  )
                ]
              },
              {
                text: "底部",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】底部视频工具栏",
                    "shieldBottomVideoToolBar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】弹幕容器",
                    "shieldBottomVideoToolbarDanmuContainer",
                    false,
                    void 0,
                    "屏蔽元素（不包括屏蔽弹幕）"
                  ),
                  UISwitch(
                    "【屏蔽】视频信息",
                    "dy-video-bottom-shieldVideoInfoWrap",
                    false,
                    void 0,
                    "屏蔽元素，可代替【清屏】功能"
                  )
                ]
              },
              {
                text: "其它",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】右侧的展开评论按钮",
                    "shieldRightExpandCommentButton",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】搜索悬浮栏",
                    "shieldSearchFloatingBar",
                    true,
                    void 0,
                    "屏蔽元素，一般出现在左上角"
                  ),
                  UISwitch(
                    "【屏蔽】网页全屏关闭按钮",
                    "shieldCloseFullScreenButton",
                    true,
                    void 0,
                    "屏蔽元素，一般开启网页全屏后出现在左上角"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽-评论区域内",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】评论工具栏",
                    "dy-video-shieldUserCommentToolBar",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】大家都在搜",
                    "dy-video-shieldUserCommentEveryOneAllSearch",
                    false,
                    void 0,
                    "在评论区的顶部出现"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const PanelSearchConfig = {
    id: "panel-config-search",
    title: "搜索",
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
                    "禁止点击视频区域进入全屏",
                    "dy-search-disableClickToEnterFullScreen",
                    false,
                    void 0,
                    "禁止点击视频区域时会触发自动进入全屏功能"
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
                    "【屏蔽】相关搜索",
                    "douyin-search-shieldReleatedSearches",
                    false,
                    void 0,
                    "屏蔽右边的相关搜索"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareUserConfig = {
    id: "m-panel-config-share-user",
    title: "主页",
    headerTitle: "/share/user<br />主页",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "视频合集",
                    "m-dy-share-user-coverPlayletList",
                    true,
                    void 0,
                    "正确跳转视频合集页面"
                  ),
                  UISwitch(
                    "视频列表",
                    "m-dy-share-user-coverPostListContainer",
                    true,
                    void 0,
                    "正确跳转视频页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareVideoConfig = {
    id: "m-panel-config-share-video",
    title: "视频",
    headerTitle: "/share/video<br />视频",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "全局点击",
                    "m-dy-share-video-coverGlobalClick",
                    true,
                    void 0,
                    "阻止跳转至下载页"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareNoteConfig = {
    id: "m-panel-config-share-note",
    title: "笔记",
    headerTitle: "/share/note<br />笔记",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "精彩图文",
                    "m-dy-share-note-coverExcitingGraphicsAndText",
                    true,
                    void 0,
                    "正确跳转笔记页面"
                  ),
                  UISwitch(
                    "用户",
                    "m-dy-share-note-coverUser",
                    true,
                    void 0,
                    "正确跳转用户主页"
                  ),
                  UISwitch(
                    "话题",
                    "m-dy-share-note-coverHashTag",
                    true,
                    void 0,
                    "正确跳转相关话题"
                  ),
                  UISwitch(
                    "音乐",
                    "m-dy-share-note-coverMusic",
                    true,
                    void 0,
                    "正确跳转相关音乐"
                  ),
                  UISwitch(
                    "相关推荐",
                    "m-dy-share-note-coverRecommend",
                    true,
                    void 0,
                    "正确跳转笔记页面"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽元素",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】评论",
                    "m-dy-share-note-blockComment",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】相关推荐",
                    "m-dy-share-note-blockRecommend",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "m-dy-share-note-blockFooterToobar",
                    false,
                    void 0,
                    "屏蔽元素"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareChallengeConfig = {
    id: "m-panel-config-share-challenge",
    title: "话题",
    headerTitle: "/share/challenge<br />话题",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "顶部区域",
                    "m-dy-share-challenge-coverTopJump",
                    true,
                    void 0,
                    "阻止跳转至下载页面"
                  ),
                  UISwitch(
                    "视频卡片",
                    "m-dy-share-challenge-coverVideoCard",
                    true,
                    void 0,
                    "正确跳转视频页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MPanelShareMusicConfig = {
    id: "m-panel-config-share-music",
    title: "音乐",
    headerTitle: "/share/music<br />音乐",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "视频卡片",
                    "m-dy-share-music-coverVideoCard",
                    true,
                    void 0,
                    "正确跳转视频页面"
                  )
                ]
              }
            ]
          }
        ]
      }
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
          text: "⚙ 设置",
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
          key: "show_pops_m_panel_setting",
          text: "⚙ 移动端设置",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showMPanel();
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
          console.warn("请先配置键", config);
          return;
        }
        if (that.$data.data.has(key)) {
          console.warn("请检查该key(已存在): " + key);
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
     * @param valueChangeCallBack 开/关改变时的回调
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     */
    execMenuOnce(key, callback) {
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
          changeCallBack(newValue);
        }
      );
      let value = PopsPanel.getValue(key);
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
          text: `${SCRIPT_NAME}-设置`,
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
        isMobile: true,
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true
      });
    },
    /**
     * 显示移动端设置面板
     */
    showMPanel() {
      __pops.panel({
        title: {
          text: `${SCRIPT_NAME}-设置`,
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
        isMobile: true,
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true
      });
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92vw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight < 450) {
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
        PanelCommonConfig,
        PanelVideoConfig,
        PanelLiveConfig,
        PanelSearchConfig
      ];
      return configList;
    },
    /**
     * 获取配置内容
     */
    getMPanelContentConfig() {
      let configList = [
        MPanelShareUserConfig,
        MPanelShareNoteConfig,
        MPanelShareChallengeConfig,
        MPanelShareVideoConfig,
        MPanelShareMusicConfig
      ];
      return configList;
    }
  };
  const _SCRIPT_NAME_ = "抖音优化";
  const utils = Utils.noConflict();
  let domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const console$1 = _unsafeWindow.console || _monkeyWindow.console;
  const log = new utils.Log(_GM_info, console$1);
  let SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  log.config({
    debug: false,
    logMaxCount: 100,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config(
    Object.defineProperties(
      {
        html: true,
        autoClose: true,
        showClose: false,
        zIndex: 1e7
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
  const addStyle = utils.addStyle;
  const ShieldHeader = {
    init() {
      PopsPanel.execMenuOnce("shieldClientTip", () => {
        return this.shieldClientTip();
      });
      PopsPanel.execMenuOnce("shieldFillingBricksAndStones", () => {
        return this.shieldFillingBricksAndStones();
      });
      PopsPanel.execMenuOnce("shieldClient", () => {
        return this.shieldClient();
      });
      PopsPanel.execMenuOnce("shieldQuickAccess", () => {
        return this.shieldQuickAccess();
      });
      PopsPanel.execMenuOnce("shieldNotifitation", () => {
        return this.shieldNotifitation();
      });
      PopsPanel.execMenuOnce("shieldPrivateMessage", () => {
        return this.shieldPrivateMessage();
      });
      PopsPanel.execMenuOnce("shieldSubmission", () => {
        return this.shieldSubmission();
      });
      PopsPanel.execMenuOnce("shieldWallpaper", () => {
        return this.shieldWallpaper();
      });
      PopsPanel.execMenuOnce("shieldLeftNavigator", () => {
        return this.shieldLeftNavigator();
      });
      PopsPanel.execMenuOnce("shieldTopNavigator", () => {
        return this.shieldTopNavigator();
      });
      PopsPanel.execMenuOnce("shieldBottomQuestionButton", () => {
        return this.shieldBottomQuestionButton();
      });
    },
    /**
     * 【屏蔽】充钻石
     */
    shieldFillingBricksAndStones() {
      log.info("【屏蔽】充钻石");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])',
          // 2024.7.15
          'div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M5.757 12.268a6.397 6.397 0 1 1 12.793 0 6.397 6.397 0 0 1-12.793 0zm6.396-7.897a7.897 7.897 0 1 0 0 15.793 7.897 7.897 0 0 0 0-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 0 1-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 0 0 1.715.498v-1.5a1.725 1.725 0 0 1-1.715-1.735z"])',
          // 2024.7.16 更多 充钻石
          'body .semi-portal .semi-portal-inner li.semi-dropdown-item:has(a[href*="douyin_recharge"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            'div:has(>div>div>div>div[data-e2e="something-button"] path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > div:has(path[d="M5.757 12.268a6.397 6.397 0 1 1 12.793 0 6.397 6.397 0 0 1-12.793 0zm6.396-7.897a7.897 7.897 0 1 0 0 15.793 7.897 7.897 0 0 0 0-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 0 1-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 0 0 1.715.498v-1.5a1.725 1.725 0 0 1-1.715-1.735z"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          DouYinUtils.addBlockCSS(
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】客户端
     */
    shieldClient() {
      log.info("【屏蔽】客户端");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container',
          // 2024.7.15
          'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > div:has(a[download^="douyin-downloader"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          DouYinUtils.addBlockCSS(
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container:has(a)',
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class] span:has(a[download][href*="client"])',
            /* 直播 更多 客户端 */
            '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item:has(a[download][href*="client"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】快捷访问
     */
    shieldQuickAccess() {
      log.info("【屏蔽】快捷访问");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)',
          // 直播 更多里面的 快捷访问
          // '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item'
          // 2024.7.15 更新规则
          'div[id^="douyin-header-menu"] pace-island > div > div:has(.quick-access-nav-icon)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS("div:has(>div>div>.quick-access-nav-icon)")
        );
        utils.waitNode('li.semi-dropdown-item[role="menuitem"]', 1e4).then(($semi) => {
          if (!$semi) {
            return;
          }
          let observer = utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback() {
              let isFind = false;
              document.querySelectorAll('li.semi-dropdown-item[role="menuitem"]').forEach(($ele) => {
                var _a2;
                if ((_a2 = $ele.textContent) == null ? void 0 : _a2.includes("快捷访问")) {
                  isFind = true;
                  log.success("搜索-更多-快捷访问 移除元素");
                  $ele.remove();
                }
              });
              if (isFind) {
                observer.disconnect();
              }
            }
          });
        });
      }
      return result;
    },
    /**
     * 【屏蔽】通知
     */
    shieldNotifitation() {
      log.info("【屏蔽】通知");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            'ul:has( div>div[data-e2e="notice-entry"] )',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > ul:has(path[d="M12.154 4.768a5.656 5.656 0 0 0-5.644 5.285l-.407 6.172h12.102l-.407-6.172a5.657 5.657 0 0 0-5.644-5.285zm-4.148 5.383a4.156 4.156 0 0 1 8.295 0l.302 4.574H7.705l.301-4.574z"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          DouYinUtils.addBlockCSS(
            // 直播
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】私信
     */
    shieldPrivateMessage() {
      log.info("【屏蔽】私信");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])',
          // 直播
          '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】私信");
        result.push(
          DouYinUtils.addBlockCSS(
            'ul:has( div>div[data-e2e="im-entry"] )',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > ul:has([data-e2e="im-entry"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】投稿
     */
    shieldSubmission() {
      log.info("【屏蔽】投稿");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          '#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])',
          // 2024.7.15 更新规则
          'div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 0 0-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 0 0 2.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 0 0 2.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 0 0-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 0 1 1.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 0 1-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 0 1-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 0 1 1.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            'div:has(>div >div>div[data-e2e="something-button"] path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 00-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 002.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 002.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 00-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 011.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 01-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 01-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 011.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > div:has(path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 0 0-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 0 0 2.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 0 0 2.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 0 0-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 0 1 1.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 0 1-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 0 1-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 0 1 1.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          DouYinUtils.addBlockCSS(
            '#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】客户端提示
     */
    shieldClientTip() {
      log.info("【屏蔽】客户端提示");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          /* 右上角 通知 下载客户端，实时接收消息通知 */
          'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])',
          /* 右上角 个人信息 客户端登录访问更便捷 [下载] */
          '#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])',
          /* 右上角 私信 下载客户端，实时接收好友消息 */
          '#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])',
          /* 右上角 壁纸 下载客户端，使用壁纸 */
          '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container div:has(+ #wallpaper-modal)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            /* 右上角 私信 下载客户端，实时接收好友消息 */
            'div[id^="douyin-header-menu"] ul li div[data-e2e="im-entry"] div > div > div:has(>a[download*="douyin-downloader"])',
            /* 右上角 个人信息 客户端登录访问更便捷 [下载] */
            'div[id^="douyin-header-menu"] ul > div:has(>a[download*="douyin-downloader"])'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】壁纸
     */
    shieldWallpaper() {
      log.info("【屏蔽】壁纸");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          // 2024.7.15
          'div[id^="douyin-header-menu"] pace-island > div > div:has(span.semi-icon)'
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          DouYinUtils.addBlockCSS(
            'div[id^="douyin-header-"] span[aria-describedby]:has(.semi-icon)',
            // 2024.7.15
            'div[id^="douyin-header-menu"] >  div > div > div:has(span.semi-icon)'
          )
        );
      } else if (DouYinRouter.isLive()) {
        result.push(
          DouYinUtils.addBlockCSS(
            '#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container:has(span.semi-icon)',
            '#douyin-header pace-island[id^="island"] > div[class] span:has(.semi-icon)'
          )
        );
      }
      return result;
    },
    /**
     * 【屏蔽】左侧导航栏
     */
    shieldLeftNavigator() {
      log.info("【屏蔽】左侧导航栏");
      return [
        DouYinUtils.addBlockCSS("#douyin-navigation"),
        addStyle(
          /*css*/
          `
			/* 修复顶部导航栏的宽度 */
			#douyin-header{
				width: 100%;
			}`
        )
      ];
    },
    /**
     * 【屏蔽】顶部导航栏
     */
    shieldTopNavigator() {
      log.info("【屏蔽】顶部导航栏");
      let result = [];
      result.push(DouYinUtils.addBlockCSS("#douyin-header"));
      result.push(
        addStyle(
          /*css*/
          `
			/* 修复视频的高度 */
			#douyin-right-container{
				padding-top: 0px !important;
			}
		`
        )
      );
      if (DouYinRouter.isSearch()) {
        result.push(
          addStyle(
            /*css*/
            `
				/* 把搜索顶部的工具栏置顶 */
				#search-content-area > div > div:nth-child(1) > div:nth-child(1){
					top: 0;
				}`
          )
        );
      }
      return result;
    },
    /**
     * 屏蔽底部问题按钮
     */
    shieldBottomQuestionButton() {
      log.info("屏蔽底部问题按钮");
      return DouYinUtils.addBlockCSS([
        "#douyin-sidebar",
        /* 推荐视频右下角的？按钮 */
        "#douyin-temp-sidebar"
      ]);
    }
  };
  const ShieldSearch = {
    init() {
      PopsPanel.execMenuOnce("shieldSearch", () => {
        return this.shieldSearch();
      });
      PopsPanel.execMenuOnce("shieldSearchPlaceholder", () => {
        return this.shieldSearchPlaceholder();
      });
      PopsPanel.execMenuOnce("shieldSearchGuessYouWantToSearch", () => {
        return this.shieldSearchGuessYouWantToSearch();
      });
      PopsPanel.execMenuOnce("shieldSearchTiktokHotspot", () => {
        return this.shieldSearchTiktokHotspot();
      });
    },
    /**
     * 【屏蔽】搜索框
     */
    shieldSearch() {
      log.info("【屏蔽】搜索框");
      return DouYinUtils.addBlockCSS(
        '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
      );
    },
    /**
     * 【屏蔽】搜索框的提示
     */
    shieldSearchPlaceholder() {
      log.info("【屏蔽】搜索框的提示");
      let result = [];
      result.push(
        DouYinUtils.addBlockCSS(
          '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
        )
      );
      result.push(
        addStyle(
          /*css*/
          `
			#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
				color: transparent;
			}`
        )
      );
      return result;
    },
    /**
     * 【屏蔽】搜索-猜你想搜
     */
    shieldSearchGuessYouWantToSearch() {
      log.info("【屏蔽】搜索-猜你想搜");
      return DouYinUtils.addBlockCSS(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
      );
    },
    /**
     * 【屏蔽】搜索-抖音热点
     */
    shieldSearchTiktokHotspot() {
      log.info("【屏蔽】搜索-抖音热点");
      return DouYinUtils.addBlockCSS(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
      );
    }
  };
  const DouYinHook = {
    /**
     * 移除环境检测
     */
    removeEnvCheck() {
      log.info("移除环境检测");
      let originalSetInterval = _unsafeWindow.setInterval;
      _unsafeWindow.setInterval = function(callback, time) {
        let funcStr = callback.toString().trim();
        if (funcStr.includes("debugger")) {
          log.success(["拦截→", [funcStr]]);
          return;
        }
        if (funcStr.includes("checkEXp")) {
          log.success(["拦截→", [funcStr]]);
          return;
        }
        return originalSetInterval.call(this, callback, time);
      };
    }
  };
  const DouYinAccount = {
    /**
     * 伪装登录
     */
    disguiseLogin() {
      log.info("伪装登录");
      const WAIT_TIME = 2e4;
      let uid = parseInt((Math.random() * 1e6).toString());
      let notChangeInfoUid = Object.defineProperty({}, "uid", {
        value: uid,
        writable: false
      });
      function getUserInfo(element) {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
        let userInfoList = [];
        let $react = utils.getReactObj(element);
        let reactFiber = $react == null ? void 0 : $react.reactFiber;
        $react == null ? void 0 : $react.reactProps;
        if ((_c = (_b = (_a2 = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _a2.return) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.userInfo) {
          userInfoList.push(
            (_f = (_e = (_d = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _d.return) == null ? void 0 : _e.memoizedProps) == null ? void 0 : _f.userInfo
          );
        }
        if ((_j = (_i = (_h = (_g = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _g.return) == null ? void 0 : _h.memoizedProps) == null ? void 0 : _i.userInfo) == null ? void 0 : _j.userInfo) {
          userInfoList.push(
            (_m = (_l = (_k = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _k.return) == null ? void 0 : _l.memoizedProps) == null ? void 0 : _m.userInfo.userInfo
          );
        }
        if ((_q = (_p = (_o = (_n = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _n.return) == null ? void 0 : _o.return) == null ? void 0 : _p.memoizedProps) == null ? void 0 : _q.userInfo) {
          userInfoList.push(
            (_u = (_t = (_s = (_r = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _r.return) == null ? void 0 : _s.return) == null ? void 0 : _t.memoizedProps) == null ? void 0 : _u.userInfo
          );
        }
        if ((_z = (_y = (_x = (_w = (_v = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _v.return) == null ? void 0 : _w.return) == null ? void 0 : _x.memoizedProps) == null ? void 0 : _y.userInfo) == null ? void 0 : _z.userInfo) {
          userInfoList.push(
            (_D = (_C = (_B = (_A = reactFiber == null ? void 0 : reactFiber.alternate) == null ? void 0 : _A.return) == null ? void 0 : _B.return) == null ? void 0 : _C.memoizedProps) == null ? void 0 : _D.userInfo.userInfo
          );
        }
        return userInfoList;
      }
      function setLogin(element) {
        getUserInfo(element).forEach((userInfo) => {
          Object.defineProperties(userInfo, {
            info: {
              value: notChangeInfoUid,
              writable: false
            },
            isLogin: {
              value: true,
              writable: false
            }
          });
        });
      }
      DouYinElement.watchVideDataListChange(($os) => {
        setLogin($os);
      });
      utils.waitNode("#root div[class*='-os']", WAIT_TIME).then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback: utils.debounce(() => {
            let $os = DouYinElement.getOSElement();
            if (!$os) {
              return;
            }
            setLogin($os);
          }, 70)
        });
      }).catch((err) => {
      });
      if (DouYinRouter.isLive()) {
        log.info("伪装登录：live");
        utils.waitNode(
          `#douyin-header div:has(.dy-tip-container)`,
          WAIT_TIME
        ).then(() => {
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback: utils.debounce(() => {
              setLogin(
                document.querySelector(`#douyin-header`)
              );
            }, 70)
          });
        });
      } else if (DouYinRouter.isSearch()) {
        let setUserInfoBySearch = function($ele) {
          var _a2, _b, _c, _d, _e, _f, _g;
          let $react = utils.getReactObj($ele);
          $react == null ? void 0 : $react.reactFiber;
          let reactProps = $react == null ? void 0 : $react.reactProps;
          if (typeof ((_d = (_c = (_b = (_a2 = reactProps == null ? void 0 : reactProps.children) == null ? void 0 : _a2[1]) == null ? void 0 : _b.props) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin) === "boolean") {
            reactProps.children[1].props.userInfo.isLogin = true;
          }
          if (typeof ((_g = (_f = (_e = reactProps == null ? void 0 : reactProps.children) == null ? void 0 : _e[1]) == null ? void 0 : _f.props) == null ? void 0 : _g.isClient) === "boolean") {
            reactProps.children[1].props.isClient = true;
          }
        };
        log.info("伪装登录：search");
        utils.waitNode("#root > div", WAIT_TIME).then(($rootDiv) => {
          if (!$rootDiv) {
            log.error("#root > div获取失败");
            return;
          }
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback: utils.debounce((mutation, observer) => {
              setUserInfoBySearch($rootDiv);
            }, 70)
          });
        });
      }
    },
    /**
     * 关闭登录弹窗
     */
    watchLoginDialogToClose() {
      log.info("监听登录弹窗并关闭");
      DouYinUtils.addBlockCSS('div[id^="login-full-panel-"]');
      utils.waitNode("body").then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback() {
            var _a2, _b;
            let accountCloseBtn = document.querySelector(
              'body > div[id^="login-full-panel-"] .dy-account-close'
            );
            if (accountCloseBtn) {
              (_b = (_a2 = utils.getReactObj(accountCloseBtn)) == null ? void 0 : _a2.reactProps) == null ? void 0 : _b.onClick(new Event("click"));
            }
          }
        });
      });
    }
  };
  const DouYinRedirect = {
    init() {
      PopsPanel.execMenu("douyin-redirect-url-home-to-root", () => {
        this.redirectUrlHomeToRoot();
      });
    },
    /**
     * 从首页到根目录
     */
    redirectUrlHomeToRoot() {
      if (window.location.pathname === "/home") {
        log.info("从首页跳转到根目录");
        window.location.href = window.location.origin + "/?is_from_mobile_home=1&recommend=1";
      }
    }
  };
  const DouYin = {
    init() {
      DouYinRedirect.init();
      PopsPanel.execMenuOnce("debug", () => {
        DouYinHook.removeEnvCheck();
      });
      PopsPanel.execMenuOnce("watchLoginDialogToClose", () => {
        DouYinAccount.watchLoginDialogToClose();
      });
      PopsPanel.execMenuOnce("disguiseLogin", () => {
        DouYinAccount.disguiseLogin();
      });
      PopsPanel.execMenuOnce("dy-initialScale", () => {
        this.initialScale();
      });
      PopsPanel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
        this.removeMetaAppleItunesApp();
      });
      ShieldHeader.init();
      ShieldSearch.init();
      if (DouYinRouter.isLive()) {
        log.info("Router: 直播");
        DouYinLive.init();
      } else if (DouYinRouter.isVideo()) {
        log.info("Router: 推荐视频");
        DouYinVideo.init();
        if (DouYinRouter.isSearch()) {
          log.info("Router: 推荐视频-搜索");
          DouYinSearch.init();
        }
      } else {
        log.error("未知router: " + window.location.hostname);
      }
    },
    /**
     * 固定meta viewport缩放倍率为1
     */
    initialScale() {
      log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
      domUtils.ready(() => {
        let meta = domUtils.createElement(
          "meta",
          {},
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"
          }
        );
        domUtils.remove("meta[name='viewport']");
        utils.waitNode("head").then(() => {
          document.head.appendChild(meta);
        });
      });
    },
    /**
     * 移除<meta>标签name="apple-itunes-app"
     */
    removeMetaAppleItunesApp() {
      utils.waitNodeList(
        ['meta[name="apple-itunes-app"]'],
        1e4
      ).then(($metaList) => {
        if (!$metaList) {
          return;
        }
        $metaList.forEach(($meta) => {
          $meta.remove();
        });
      });
    }
  };
  const MDouYinRouter = {
    /**
     * 是否是移动端抖音
     */
    isMDouYin() {
      return window.location.host === "m.douyin.com";
    },
    /**
     * 用户主页
     */
    isShareUser() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/user/");
    },
    /**
     * 分享的视频
     */
    isShareVideo() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/video/");
    },
    /**
     * 笔记
     */
    isShareNote() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/note/");
    },
    /**
     * 音乐
     */
    isShareMusic() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/music/");
    },
    /**
     * 话题
     */
    isShareChallenge() {
      return this.isMDouYin() && window.location.pathname.startsWith("/share/challenge/");
    }
  };
  const blockCSS$4 = "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 上面屏蔽后的空白区域 */\r\n.user-card .nav-bar-placeholder,\r\n/* 视频区域底部的【打开抖音App看更多内容】 */\r\n.select-list .img-button{\r\n    display: none !important;\r\n}";
  const DouYinUrlUtils = {
    /**
     * 获取视频链接
     * @param videoId 视频id
     */
    getVideoUrl(videoId) {
      return "https://www.douyin.com/video/" + videoId;
    },
    /**
     * 获取视频合集链接
     * @param collectionId 合集id
     */
    getCollectionUrl(collectionId) {
      return "https://www.douyin.com/collection/" + collectionId;
    },
    /**
     * 获取笔记链接
     * @param noteId 笔记id
     */
    getNoteUrl(noteId) {
      return "https://www.douyin.com/note/" + noteId;
    },
    /**
     * 获取话题链接
     * @param hashTagId 话题id
     */
    getHashTagUrl(hashTagId) {
      return "https://www.douyin.com/hashtag/" + hashTagId;
    },
    /**
     * 获取用户主页链接
     * @param sec_uid
     */
    getUserHomeUrl(sec_uid) {
      return "https://www.douyin.com/user/" + sec_uid;
    },
    /**
     * 获取音乐链接
     * @param musicId 音乐id
     */
    getMusicUrl(musicId) {
      return "https://www.douyin.com/music/" + musicId;
    }
  };
  const MDouYinShareUser = {
    init() {
      addStyle(blockCSS$4);
      PopsPanel.execMenuOnce("m-dy-share-user-coverPlayletList", () => {
        this.coverPlayletList();
      });
      PopsPanel.execMenuOnce("m-dy-share-user-coverPostListContainer", () => {
        this.coverPostListContainer();
      });
    },
    /**
     * 覆盖视频合集点击事件
     */
    coverPlayletList() {
      domUtils.on(
        document,
        "click",
        ".user-playlet-list .playlet-item",
        (event) => {
          var _a2, _b, _c, _d;
          utils.preventEvent(event);
          let $click = event.target;
          let reactFiber = (_a2 = utils.getReactObj($click)) == null ? void 0 : _a2.reactFiber;
          let key = reactFiber == null ? void 0 : reactFiber.key;
          if (key == null) {
            Qmsg.error("获取视频合集key失败");
            return;
          }
          let index = reactFiber == null ? void 0 : reactFiber.index;
          if (index == null) {
            Qmsg.error("获取视频合集index失败");
            return;
          }
          let playletList = (_d = (_c = (_b = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _b.return) == null ? void 0 : _c.pendingProps) == null ? void 0 : _d.playletList;
          if (playletList == null) {
            Qmsg.error("获取视频合集playletList失败");
            return;
          }
          let currentPlaylet = playletList[index];
          let url = DouYinUrlUtils.getCollectionUrl(currentPlaylet["mix_id"]);
          window.open(url, "_blank");
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖视频列表点击事件
     */
    coverPostListContainer() {
      domUtils.on(
        document,
        "click",
        ".post-list-container .user-post-cover",
        (event) => {
          var _a2, _b, _c, _d, _e;
          utils.preventEvent(event);
          let $click = event.target;
          let reactFiber = (_a2 = utils.getReactObj($click)) == null ? void 0 : _a2.reactFiber;
          if ((_c = (_b = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _b.memoizedProps) == null ? void 0 : _c.productionUrl) {
            let url = (_e = (_d = reactFiber == null ? void 0 : reactFiber.return) == null ? void 0 : _d.memoizedProps) == null ? void 0 : _e.productionUrl;
            window.open(url, "_blank");
          } else {
            Qmsg.error("获取视频链接失败");
          }
        },
        {
          capture: true
        }
      );
    }
  };
  const blockCSS$3 = "/* 顶部 打开看看 登录 */\r\n.adapt-login-header,\r\n/* 视频描述信息区域中的 打开抖音看精彩视频 */\r\n.footer .img-button,\r\n/* 登录页面 */\r\n.login-page {\r\n	display: none !important;\r\n}\r\n";
  const beautifyCSS = ".video-container {\r\n	height: 100% !important;\r\n	margin-top: 0 !important;\r\n}\r\n.footer {\r\n	bottom: 50px !important;\r\n}\r\n.mix-info {\r\n	bottom: 0px !important;\r\n}\r\n";
  const MDouYinShareVideo = {
    init() {
      addStyle(blockCSS$3);
      addStyle(beautifyCSS);
      PopsPanel.execMenuOnce("m-dy-share-video-coverGlobalClick", () => {
        this.coverGlobalClick();
      });
    },
    /**
     * 阻止全局点击，会跳转
     */
    coverGlobalClick() {
      let selectorList = [".right-con", ".footer", ".mix-info"];
      selectorList.forEach((selector) => {
        DOMUtils.on(
          document,
          "click",
          selector,
          (event) => {
            return utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    }
  };
  const blockCSS$2 = "/* 顶部 打开看看 登录 */\r\n.container .adapt-login-header,\r\n/* 底部中间的 App内打开 */\r\n.container .float-button-con {\r\n	display: none !important;\r\n}\r\n\r\n.gallery-container {\r\n	margin-top: 10px !important;\r\n}\r\n";
  const MDouYinShareNote = {
    init() {
      addStyle(blockCSS$2);
      PopsPanel.execMenuOnce("m-dy-share-note-blockRecommend", () => {
        return this.blockRecommend();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-blockComment", () => {
        return this.blockComment();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-blockFooterToobar", () => {
        return this.blockFooterToobar();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverUser", () => {
        this.coverUser();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverHashTag", () => {
        this.coverHashTag();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverMusic", () => {
        this.coverMusic();
      });
      PopsPanel.execMenuOnce("m-dy-share-note-coverRecommend", () => {
        this.coverRecommend();
      });
      PopsPanel.execMenuOnce(
        "m-dy-share-note-coverExcitingGraphicsAndText",
        () => {
          this.coverExcitingGraphicsAndText();
        }
      );
    },
    /**
     * 【屏蔽】相关推荐
     */
    blockRecommend() {
      log.info("【屏蔽】相关推荐");
      return DouYinUtils.addBlockCSS(".recommend-con");
    },
    /**
     * 【屏蔽】评论
     */
    blockComment() {
      log.info("【屏蔽】评论");
      return DouYinUtils.addBlockCSS(".comment-con");
    },
    /**
     * 【屏蔽】底部工具栏
     */
    blockFooterToobar() {
      log.info("【屏蔽】底部工具栏");
      return DouYinUtils.addBlockCSS(".footer-con");
    },
    /**
     * 覆盖相关推荐的点击事件
     */
    coverRecommend() {
      log.info("覆盖相关推荐的点击事件");
      domUtils.on(
        document,
        "click",
        "#masonry .card",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let awemeId = rectFiber.return.memoizedProps.awemeId;
          let url = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖用户点击事件
     */
    coverUser() {
      log.info("覆盖用户点击事件");
      domUtils.on(
        document,
        "click",
        ".message-con__top",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let sec_id = rectFiber.return.return.memoizedProps.video.authorInfo.sec_uid;
          let url = DouYinUrlUtils.getUserHomeUrl(sec_id);
          window.open(url, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖话题点击事件
     */
    coverHashTag() {
      log.info("覆盖话题点击事件");
      domUtils.on(
        document,
        "click",
        ".message-con__content__body .message-con__content__body-text",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let index = rectFiber.index;
          let splitStrArr = rectFiber.return.return.return.return.memoizedProps.video.splitStrArr;
          let currentSplitStr = splitStrArr[index];
          let hashtagId = currentSplitStr["hashtagId"];
          let url = DouYinUrlUtils.getHashTagUrl(hashtagId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖音乐点击事件
     */
    coverMusic() {
      log.info("覆盖音乐点击事件");
      domUtils.on(
        document,
        "click",
        ".message-con__footer",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let musicId = rectFiber.return.return.memoizedProps.video.musicId;
          let url = DouYinUrlUtils.getMusicUrl(musicId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
    },
    /**
     * 覆盖精彩图文点击事件
     */
    coverExcitingGraphicsAndText() {
      log.info("覆盖精彩图文点击事件");
      domUtils.on(
        document,
        "click",
        ".container .related-list-con .related-note-item",
        (event) => {
          utils.preventEvent(event);
          let $click = event.target;
          let rectFiber = utils.getReactObj($click).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let itemData = rectFiber.return.memoizedProps.itemData;
          let awemeId = itemData["awemeId"];
          let url = DouYinUrlUtils.getNoteUrl(awemeId);
          window.open(url, "_blank");
        },
        { capture: true }
      );
      domUtils.on(
        document,
        "click",
        ".related-title-con",
        (event) => utils.preventEvent(event),
        { capture: true }
      );
    }
  };
  const blockCSS$1 = "/* 顶部 打开看看 登录 */\r\n.page-reflow-challenge .header,\r\n/* 底部的 打开抖音App看更多内容 */\r\n.page-reflow-challenge .bottom-btn__con {\r\n	display: none !important;\r\n}\r\n\r\n.page-reflow-challenge {\r\n	padding-top: 0 !important;\r\n}\r\n";
  const MDouYinShareChallenge = {
    init() {
      addStyle(blockCSS$1);
      PopsPanel.onceExec("m-dy-share-challenge-coverTopJump", () => {
        this.coverTopJump();
      });
      PopsPanel.execMenuOnce("m-dy-share-challenge-coverVideoCard", () => {
        this.coverVideoCard();
      });
    },
    /**
     * 阻止上面区域点击跳转至下载页面
     */
    coverTopJump() {
      log.info("阻止上面区域点击跳转至下载页面");
      domUtils.on(
        document,
        "click",
        ".challenge-body",
        (event) => {
          utils.preventEvent(event);
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖视频卡片点击事件
     */
    coverVideoCard() {
      log.info("覆盖视频卡片点击事件");
      domUtils.on(
        document,
        "click",
        "#pagelet-worklist li.item",
        (event) => {
          utils.preventEvent(event);
          let $clikc = event.target;
          let rectFiber = utils.getReactObj($clikc).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let listData = rectFiber.return.return.return.memoizedProps.listData;
          let index = rectFiber.index;
          let currentList = listData[index];
          let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
          window.open(url, "_blank");
        },
        {
          capture: true
        }
      );
    }
  };
  const blockCSS = "/* 顶部 打开App，发现更多内容 */\r\n.page-reflow-music .header,\r\n/* ↑屏蔽后的 顶部空白区域 */\r\n.page-reflow-music .banner-placeholder ,\r\n/* 底部 打开抖音App看更多内容 */\r\n.page-reflow-music .bottom-btn__con {\r\n	display: none !important;\r\n}\r\n";
  const MDouYinShareMusic = {
    init() {
      addStyle(blockCSS);
      PopsPanel.execMenuOnce("m-dy-share-music-coverVideoCard", () => {
        this.coverVideoCard();
      });
    },
    /**
     * 覆盖视频卡片点击事件
     */
    coverVideoCard() {
      log.info("覆盖视频卡片点击事件");
      domUtils.on(
        document,
        "click",
        "#pagelet-worklist li.item",
        (event) => {
          utils.preventEvent(event);
          let $clikc = event.target;
          let rectFiber = utils.getReactObj($clikc).reactFiber;
          if (!rectFiber) {
            log.error("获取reactFiber失败");
            Qmsg.error("获取reactFiber失败");
            return;
          }
          let listData = rectFiber.return.return.return.memoizedProps.listData;
          let index = rectFiber.index;
          let currentList = listData[index];
          let url = DouYinUrlUtils.getVideoUrl(currentList["aweme_id"]);
          window.open(url, "_blank");
        },
        {
          capture: true
        }
      );
    }
  };
  const MDouYin = {
    init() {
      if (MDouYinRouter.isShareUser()) {
        log.info("M-Router: 分享用户");
        MDouYinShareUser.init();
      } else if (MDouYinRouter.isShareVideo()) {
        log.info("M-Router: 分享视频");
        MDouYinShareVideo.init();
      } else if (MDouYinRouter.isShareNote()) {
        log.info("M-Router: 分享笔记");
        MDouYinShareNote.init();
      } else if (MDouYinRouter.isShareChallenge()) {
        log.info("M-Router: 分享话题");
        MDouYinShareChallenge.init();
      } else if (MDouYinRouter.isShareMusic()) {
        log.info("M-Router: 分享音乐");
        MDouYinShareMusic.init();
      } else {
        log.error("未知M-router: " + window.location.hostname);
      }
    }
  };
  PopsPanel.init();
  if (MDouYinRouter.isMDouYin()) {
    MDouYin.init();
  } else {
    DouYin.init();
  }

})(Qmsg, Utils, DOMUtils, pops);