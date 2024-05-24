// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.5.24
// @author       WhiteSevs
// @description  过滤广告、过滤直播、可自定义过滤视频的屏蔽关键字、伪装登录、直播屏蔽弹幕、礼物特效等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.douyin.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1382424/pops.js
// @require      https://cdn.jsdelivr.net/npm/qmsg@1.0.8/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/utils@1.0.1/dist/index.umd.js
// @require      https://cdn.jsdelivr.net/npm/@whitesev/domutils@1.0.3/dist/index.umd.js
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

(function (Qmsg, Utils, DOMUtils) {
  'use strict';

  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    member.set(obj, value);
    return value;
  };
  var _a, _key, _isWaitPress;
  var _GM_addStyle = /* @__PURE__ */ (() => typeof GM_addStyle != "undefined" ? GM_addStyle : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "抖音优化";
  const utils = Utils.noConflict();
  let domUtils = DOMUtils.noConflict();
  const pops = _monkeyWindow.pops || _unsafeWindow.pops;
  const console$1 = _unsafeWindow.console || _monkeyWindow.console;
  const log = new utils.Log(_GM_info, console$1);
  let SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  log.config({
    debug: false,
    logMaxCount: 100,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const UISwitch = function(text, description, key, defaultValue, clickCallBack) {
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
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "debug模式",
            "移除抖音的开发者模式检测",
            "debug",
            false
          ),
          UISwitch(
            "伪装登录",
            "使用随机UID进行伪装",
            "disguiseLogin",
            false
          )
        ]
      },
      {
        text: "Url重定向",
        type: "forms",
        forms: [
          UISwitch(
            "重定向/home",
            "/home => /",
            "douyin-redirect-url-home-to-root",
            false
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】登录弹窗",
            "屏蔽元素且自动等待元素出现并关闭登录弹窗",
            "watchLoginDialogToClose",
            true
          ),
          UISwitch(
            "【屏蔽】底部？按钮",
            "屏蔽元素",
            "shieldBottomQuestionButton",
            true
          )
        ]
      },
      {
        text: "主框架-屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】客户端提示",
            "屏蔽元素",
            "shieldClientTip",
            true
          ),
          UISwitch(
            "【屏蔽】充砖石",
            "屏蔽元素",
            "shieldFillingBricksAndStones",
            false
          ),
          UISwitch("【屏蔽】客户端", "屏蔽元素", "shieldClient", false),
          UISwitch(
            "【屏蔽】快捷访问",
            "屏蔽元素",
            "shieldQuickAccess",
            false
          ),
          UISwitch(
            "【屏蔽】通知",
            "屏蔽元素",
            "shieldNotifitation",
            false
          ),
          UISwitch(
            "【屏蔽】私信",
            "屏蔽元素",
            "shieldPrivateMessage",
            false
          ),
          UISwitch("【屏蔽】投稿", "屏蔽元素", "shieldSubmission", false),
          UISwitch(
            "【屏蔽】左侧导航栏",
            "屏蔽元素",
            "shieldLeftNavigator",
            false
          ),
          UISwitch(
            "【屏蔽】顶部导航栏",
            "屏蔽元素",
            "shieldTopNavigator",
            false
          )
        ]
      },
      {
        text: "搜索-屏蔽",
        type: "forms",
        forms: [
          UISwitch("【屏蔽】搜索框", "屏蔽元素", "shieldSearch", false),
          UISwitch(
            "【屏蔽】搜索框的提示",
            "屏蔽元素",
            "shieldSearchPlaceholder",
            false
          ),
          UISwitch(
            "【屏蔽】猜你想搜",
            "屏蔽元素",
            "shieldSearchGuessYouWantToSearch",
            false
          ),
          UISwitch(
            "【屏蔽】抖音热点",
            "屏蔽元素",
            "shieldSearchTiktokHotspot",
            false
          )
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
      domUtils.ready(() => {
        utils.waitAnyNode("#slidelist").then((slidelist) => {
          let osElement = this.getOSElement();
          utils.mutationObserver(slidelist, {
            config: {
              childList: true,
              subtree: true
            },
            callback: () => {
              callback(osElement);
            }
          });
        });
      });
    },
    getOSElement() {
      return document.querySelector("#root div[class*='-os']") || document.querySelector("#douyin-right-container");
    },
    /**
     * 添加屏蔽CSS
     * @param args
     */
    addShieldStyle(...args) {
      let selectorList = [];
      if (args.length === 0) {
        return;
      }
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") {
        return;
      }
      args.forEach((selector) => {
        if (Array.isArray(selector)) {
          selectorList.push(...selector);
        } else {
          selectorList.push(selector);
        }
      });
      _GM_addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    }
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
        if (item.trim() == "")
          return;
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
     * 屏蔽弹幕
     */
    shieldDanmu() {
      log.success("屏蔽弹幕");
      DouYinElement.addShieldStyle("xg-danmu.xgplayer-danmu");
    },
    /**
     * 弹幕过滤
     */
    filterDanmu() {
      utils.waitNodeWithInterval("xg-danmu.xgplayer-danmu", 1e5).then(($danmu) => {
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
  const PanelLiveConfig = {
    id: "panel-config-live",
    title: "直播",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "自动进入网页全屏",
            "网页加载完毕后自动点击网页全屏按钮进入全屏",
            "live-autoEnterElementFullScreen",
            false
          ),
          UISwitch(
            "解锁画质选择",
            "未登录的情况下选择原画实际上是未登录的情况下最高选择的画质",
            "live-unlockImageQuality",
            true
          )
        ]
      },
      {
        text: "视频区域内-屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】顶栏信息",
            "屏蔽元素，包括直播作者、右侧的礼物展馆",
            "live-shieldTopToolBarInfo",
            false
          ),
          UISwitch(
            "【屏蔽】底部的礼物栏",
            "屏蔽元素",
            "live-shieldGiftColumn",
            false
          ),
          UISwitch(
            "【屏蔽】礼物特效",
            "屏蔽元素",
            "live-shieldGiftEffects",
            false
          ),
          UISwitch(
            "【屏蔽】弹幕",
            "屏蔽元素",
            "live-shieldDanmuku",
            false
          )
        ]
      },
      {
        text: "聊天室-屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】聊天室",
            "屏蔽元素",
            "live-shieldChatRoom",
            false
          ),
          UISwitch(
            "【屏蔽】贵宾席",
            "屏蔽元素",
            "live-shielChatRoomVipSeats",
            false
          ),
          UISwitch(
            "【屏蔽】用户等级图标",
            "屏蔽元素",
            "dy-live-shieldUserLevelIcon",
            false
          ),
          UISwitch(
            "【屏蔽】VIP图标",
            "屏蔽元素",
            "dy-live-shieldUserVIPIcon",
            false
          ),
          UISwitch(
            "【屏蔽】粉丝牌",
            "屏蔽元素",
            "dy-live-shieldUserFansIcon",
            false
          ),
          UISwitch(
            "【屏蔽】信息播报",
            "底部滚动播报的的xxx来了，xxx给主播点赞",
            "dy-live-shieldMessage",
            false
          )
        ]
      },
      {
        text: "弹幕屏蔽规则(可正则)",
        type: "forms",
        forms: [
          UISwitch(
            "启用",
            "启用弹幕屏蔽规则",
            "live-danmu-shield-rule-enable",
            false
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
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const DouYinVideoFilter = {
    key: "douyin-shield-rule",
    $data: {
      rule: new utils.Dictionary(),
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
          var _a2;
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
                log.success("屏蔽直播: cellRoom is not null");
                flag = true;
              }
            }
            if (!flag) {
              if (videoData["isAds"] && PopsPanel.getValue("shieldVideo-ads")) {
                log.success("屏蔽广告: isAds is true");
                flag = true;
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
        }, 150)
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
  const DouYinVideoHideElement = {
    init() {
      PopsPanel.execMenu("shieldRightExpandCommentButton", () => {
        this.shieldRightExpandCommentButton();
      });
      PopsPanel.execMenu("shieldSearchFloatingBar", () => {
        this.shieldSearchFloatingBar();
      });
      PopsPanel.execMenu("shieldCloseFullScreenButton", () => {
        this.shieldCloseFullScreenButton();
      });
      PopsPanel.execMenu("shieldPlaySwitchButton", () => {
        this.shieldPlaySwitchButton();
      });
      PopsPanel.execMenu("shieldAuthorAvatar", () => {
        this.shieldAuthorAvatar();
      });
      PopsPanel.execMenu("shieldLikeButton", () => {
        this.shieldLikeButton();
      });
      PopsPanel.execMenu("shieldCommentButton", () => {
        this.shieldCommentButton();
      });
      PopsPanel.execMenu("shieldCollectionButton", () => {
        this.shieldCollectionButton();
      });
      PopsPanel.execMenu("shieldSharenButton", () => {
        this.shieldSharenButton();
      });
      PopsPanel.execMenu("shieldRelatedRecommendationsButton", () => {
        this.shieldRelatedRecommendationsButton();
      });
      PopsPanel.execMenu("shieldMoreButton", () => {
        this.shieldMoreButton();
      });
      PopsPanel.execMenu("shieldBottomVideoToolBar", () => {
        this.shieldBottomVideoToolBar();
      });
    },
    /**
     * 【屏蔽】右侧的展开评论按钮
     */
    shieldRightExpandCommentButton() {
      log.info("【屏蔽】右侧的展开评论按钮");
      DouYinElement.addShieldStyle(
        '#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
        '.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
      );
      _GM_addStyle(`
		.basePlayerContainer .positionBox{
			padding-right: 20px !important;
		}
    	`);
    },
    /**
     * 左上角的鼠标的快捷搜索热点的悬浮栏
     * 【屏蔽】搜索悬浮栏
     */
    shieldSearchFloatingBar() {
      log.info("【屏蔽】搜索悬浮栏");
      DouYinElement.addShieldStyle(
        '.slider-video div:has([data-e2e="searchbar-button"])',
        'div:has(>div > svg[class] >  defs [d="M0 0h24v24H0z"]',
        'div[data-e2e="feed-active-video"] + div:has(>div>div>div > input[data-e2e="searchbar-input"])',
        /* 看相关页面的 */
        "#slideMode + div",
        /* 搜索页面的 */
        'div:has(>div>div+input[data-e2e="searchbar-input"])'
      );
    },
    /**
     * 【屏蔽】网页全屏关闭按钮
     */
    shieldCloseFullScreenButton() {
      log.info("【屏蔽】网页全屏关闭按钮");
      DouYinElement.addShieldStyle(
        '#sliderVideo[data-e2e="feed-active-video"] div.slider-video > div:has(path[d="M17.448 17.448a1.886 1.886 0 01-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 11.552 14.78L6.332 9 .552 3.22A1.886 1.886 0 113.22.552L9 6.332l5.78-5.78a1.886 1.886 0 112.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 010 2.668z"])'
      );
    },
    /**
     * 【屏蔽】切换播放
     */
    shieldPlaySwitchButton() {
      log.info("【屏蔽】切换播放");
      DouYinElement.addShieldStyle(
        '.positionBox  .xgplayer-playswitch[data-state="normal"]',
        "div.xgplayer-playswitch",
        /* 全屏下的右侧的切换播放 */
        ".xgplayer-playswitch"
      );
      _GM_addStyle(`
		div[data-e2e="slideList"]{
			/* 修复屏蔽后的视频宽度占据 */
			padding: 0px !important;
		}
		`);
    },
    /**
     * 【屏蔽】作者头像
     */
    shieldAuthorAvatar() {
      log.info("【屏蔽】作者头像");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has([data-e2e="video-avatar"])'
      );
    },
    /**
     * 【屏蔽】点赞
     */
    shieldLikeButton() {
      log.info("【屏蔽】点赞");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has([data-e2e="video-player-digg"])'
      );
    },
    /**
     * 【屏蔽】评论
     */
    shieldCommentButton() {
      log.info("【屏蔽】评论");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has([data-e2e="feed-comment-icon"])'
      );
    },
    /**
     * 【屏蔽】收藏
     */
    shieldCollectionButton() {
      log.info("【屏蔽】收藏");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has([data-e2e="video-player-collect"])'
      );
    },
    /**
     * 【屏蔽】分享
     */
    shieldSharenButton() {
      log.info("【屏蔽】分享");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has([data-e2e="video-player-share"])'
      );
    },
    /**
     * 【屏蔽】看相关
     */
    shieldRelatedRecommendationsButton() {
      log.info("【屏蔽】看相关");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
        'div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])'
      );
    },
    /**
     * 【屏蔽】更多
     */
    shieldMoreButton() {
      log.info("【屏蔽】更多");
      DouYinElement.addShieldStyle(
        'div.dy-tip-container:has([data-e2e="video-play-more"])'
      );
    },
    /**
     * 【屏蔽】底部视频工具栏
     */
    shieldBottomVideoToolBar() {
      log.info("【屏蔽】底部视频工具栏");
      DouYinElement.addShieldStyle("xg-controls.xgplayer-controls");
      _GM_addStyle(`
		div:has( > div > pace-island > #video-info-wrap ),
		xg-video-container.xg-video-container{
			bottom: 0 !important;
		}
  		`);
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
    }
  };
  const DouYinSearchHideElement = {
    init() {
      PopsPanel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
        this.shieldReleatedSearches();
      });
    },
    /**
     * 【屏蔽】相关搜索
     */
    shieldReleatedSearches() {
      log.info("【屏蔽】相关搜索");
      DouYinElement.addShieldStyle(
        "#search-content-area > div > div:nth-child(2)"
      );
      _GM_addStyle(`
        #search-content-area > div > div:nth-child(1) > div:nth-child(1){
            width: 100dvw;
        }
        `);
    }
  };
  const MobileCSS$1 = '/* 去除顶部的padding距离 */\r\n#douyin-right-container {\r\n	padding-top: 0;\r\n}\r\n/* 放大放大顶部的综合、视频、用户等header的宽度 */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) {\r\n	width: 100dvw;\r\n}\r\n/* 放大顶部的综合、视频、用户等header */\r\n#search-content-area > div > div:nth-child(1) > div:nth-child(1) > div {\r\n	transform: scale(0.8);\r\n}\r\n/* 视频宽度 */\r\nul[data-e2e="scroll-list"] {\r\n	padding: 0px 10px;\r\n}\r\n#sliderVideo {\r\n	width: -webkit-fill-available;\r\n}\r\n/* 距离是顶部导航栏的高度 */\r\n#search-content-area {\r\n	margin-top: 65px;\r\n}\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#sliderVideo {\r\n		width: 100dvw;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#component-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: -webkit-fill-available;\r\n		padding-right: 0;\r\n	}\r\n}\r\n\r\n';
  const DouYinSearch = {
    init() {
      DouYinSearchHideElement.init();
    },
    /**
     * 手机模式
     */
    mobileMode() {
      log.info("搜索-手机模式");
      _GM_addStyle(MobileCSS$1);
      utils.waitNode("#relatedVideoCard").then(($relatedVideoCard) => {
        log.info("评论区展开的className：" + $relatedVideoCard.className);
        _GM_addStyle(`
			html[data-vertical-screen]
				#sliderVideo[data-e2e="feed-active-video"]
				#videoSideBar:has(#relatedVideoCard[class="${$relatedVideoCard.className}"]) {
					width: 100dvw !important;
			}
			`);
      });
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
  const DouYinVideoComment = {
    init() {
      PopsPanel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
        this.shieldUserCommentToolBar();
      });
      PopsPanel.execMenuOnce(
        "dy-video-shieldUserCommentEveryOneAllSearch",
        () => {
          this.shieldUserCommentEveryOneAllSearch();
        }
      );
    },
    /**
     * 【屏蔽】评论工具栏
     */
    shieldUserCommentToolBar() {
      log.info("【屏蔽】评论工具栏");
      DouYinElement.addShieldStyle(".comment-input-container");
    },
    /**
     * 【屏蔽】大家都在搜
     */
    shieldUserCommentEveryOneAllSearch() {
      log.info("【屏蔽】大家都在搜");
      DouYinElement.addShieldStyle(".comment-header-with-search");
    }
  };
  const MobileCSS = '/* 右侧工具栏放大 */\r\n.basePlayerContainer .positionBox {\r\n	scale: unset !important;\r\n	bottom: 80px !important;\r\n	padding-right: 5px !important;\r\n	transform: scale(1.12) !important;\r\n}\r\n/* 图标再放大 */\r\n.basePlayerContainer .positionBox svg {\r\n	transform: scale(1.12);\r\n}\r\n/* 重置关注按钮的scale */\r\n.basePlayerContainer\r\n	.positionBox\r\n	.dy-tip-container\r\n	div[data-e2e="feed-follow-icon"]\r\n	svg {\r\n	scale: unset;\r\n}\r\n/* 设备处于横向方向，即宽度大于高度。 */\r\n@media screen and (orientation: landscape) {\r\n	/* 右侧工具栏放大 */\r\n	.basePlayerContainer .positionBox {\r\n		/*transform: scale(0.95) !important;\r\n		bottom: 42px !important;*/\r\n		padding-right: 10px !important;\r\n	}\r\n}\r\n/* 该设备是纵向的，即高度大于或等于宽度 */\r\n@media screen and (orientation: portrait) {\r\n}\r\n\r\n/* 调整视频列表的宽度 */\r\n@media screen and (max-width: 550px) {\r\n	#slidelist {\r\n		width: 100dvw;\r\n		height: 100dvh;\r\n	}\r\n	/* 调整顶部搜索框的宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]) {\r\n		width: 150px;\r\n		padding-right: 0;\r\n		max-width: unset;\r\n	}\r\n	/* 搜索框获取焦点时自动放大宽度 */\r\n	#douyin-header\r\n		div[data-click="doubleClick"]\r\n		> div[data-click="doubleClick"]\r\n		> div:has(input[data-e2e="searchbar-input"]:focus) {\r\n		width: 100dvw;\r\n	}\r\n	/* 去除设置min-width超出浏览器宽度的问题 */\r\n	body {\r\n		min-width: 100% !important;\r\n	}\r\n	/* 去除设置width导致顶部工具栏超出浏览器宽度的问题 */\r\n	#douyin-right-container #douyin-header {\r\n		width: 100%;\r\n	}\r\n	/* 去除设置 */\r\n	#douyin-right-container #douyin-header > div[data-click="doubleClick"] {\r\n		min-width: 100%;\r\n	}\r\n}\r\n';
  const DouYinVideo = {
    init() {
      DouYinVideoHideElement.init();
      DouYinVideoShortcut.init();
      DouYinVideoComment.init();
      PopsPanel.execMenu("shieldVideo", () => {
        DouYinVideoFilter.init();
      });
      PopsPanel.execMenu("changeCommentToBottom", () => {
        DouYinVideo.changeCommentToBottom();
      });
      PopsPanel.execMenu("fullScreen", () => {
        this.fullScreen();
      });
      PopsPanel.execMenu("parseVideo", () => {
        DouYinVideo.parseVideo();
      });
      PopsPanel.execMenu("autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      PopsPanel.execMenu("dy-video-doubleClickEnterElementFullScreen", () => {
        this.doubleClickEnterElementFullScreen();
      });
      domUtils.ready(() => {
        DouYinVideo.chooseVideoDefinition(
          PopsPanel.getValue("chooseVideoDefinition")
        );
        PopsPanel.execMenu("mobileMode", () => {
          this.mobileMode();
        });
      });
    },
    /**
     * 全屏
     */
    fullScreen() {
      log.info("全屏");
      DouYinElement.addShieldStyle(
        /* 右侧工具栏 */
        ".slider-video .positionBox",
        /* 中间底部的视频信息（描述、作者、话题等） */
        "#video-info-wrap",
        /* 中间底部的视频控制工具栏 */
        "xg-controls.xgplayer-controls"
      );
      DouYinVideoHideElement.shieldSearchFloatingBar();
      _GM_addStyle(`
        /* 视频全屏 */
        xg-video-container.xg-video-container{
            bottom: 0px !important;
        }
        `);
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      utils.waitNode(
        'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon:has([d="M9.75 8.5a2 2 0 00-2 2v11a2 2 0 002 2h12.5a2 2 0 002-2v-11a2 2 0 00-2-2H9.75zM15 11.25h-3.75a1 1 0 00-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 01-1 1z"])'
      ).then((element) => {
        log.success("自动进入网页全屏");
        element.click();
      });
    },
    /**
     * 双击进入网页全屏
     */
    doubleClickEnterElementFullScreen() {
      let isDouble = false;
      log.info("注册双击进入网页全屏事件");
      domUtils.on(
        document,
        "click",
        "#sliderVideo",
        () => {
          if (isDouble) {
            isDouble = false;
            DouYinVideo.autoEnterElementFullScreen();
          } else {
            isDouble = true;
            setTimeout(() => {
              isDouble = false;
            }, 250);
          }
        }
      );
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
      _GM_addStyle(`
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard{
			display: none !important;
		}
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e] .playerContainer,
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e] .playerContainer{
			width: 100% !important;
		}
		html[${ATTRIBUTE_KEY2}] #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
		html[${ATTRIBUTE_KEY2}] #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard){
			width: 100%;
			height: 75%;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.9);
			transition: height .15s linear !important;
			position: absolute;
		}
		`);
      if (PopsPanel.getValue("douyin-video-autoCheckChangeCommentToBottom")) {
        domUtils.on(window, "resize", autoChangeCommentPosition);
      }
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
        document.querySelectorAll(
          "xg-icon.xgplayer-playback-setting"
        ).forEach(($playbackSetting) => {
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
          contentHTML += `
          <div class="douyin-video-link-item"><a href="${url}" target="_blank">${url}</a></div>
            `;
        });
        contentHTML = `<div class="douyin-video-link-container">${contentHTML}</div>`;
        pops.alert({
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
          width: "50dvw",
          height: "50dvh",
          drag: true,
          dragLimit: true,
          style: `
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
      log.success("启用手机模式");
      let meta = domUtils.createElement(
        "meta",
        {},
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"
        }
      );
      document.querySelectorAll("meta[name='viewport']").forEach((ele) => ele.remove());
      document.head.appendChild(meta);
      DouYinElement.addShieldStyle("img#douyin-temp-sidebar");
      _GM_addStyle(MobileCSS);
      if (DouYinRouter.isSearch()) {
        PopsPanel.onceExec("douyin-search-mobileMode", () => {
          DouYinSearch.mobileMode();
        });
      }
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
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "沉浸模式",
            "移除右侧工具栏、底部信息栏等",
            "fullScreen",
            false
          ),
          UISwitch("手机模式", "放大各种文字和图标", "mobileMode", false)
        ]
      },
      {
        text: "视频",
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
            "分享->下载(灰色的也可点击)",
            "parseVideo",
            false
          ),
          UISwitch(
            "评论区移到中间",
            "修改评论区为中间弹出而非右侧区域",
            "changeCommentToBottom",
            true
          ),
          UISwitch(
            "↑自适应评论区位置",
            "根据window.screen.orientation.type自动判断是否开启【评论区移到中间】",
            "douyin-video-autoCheckChangeCommentToBottom",
            false
          ),
          UISwitch(
            "自动进入网页全屏",
            "网页加载完毕后自动点击网页全屏按钮进入全屏",
            "autoEnterElementFullScreen",
            false
          ),
          UISwitch(
            "双击进入网页全屏",
            "双击视频自动进入网页全屏，检测间隔250ms",
            "dy-video-doubleClickEnterElementFullScreen",
            false
          )
        ]
      },
      {
        text: "快捷键",
        type: "forms",
        forms: [
          UIButton(
            "倍速 -> 小",
            "视频倍速变小",
            () => {
              return DouYinVideoShortcut.shortCut.getShowText(
                "dy-video-rate-low",
                "暂无快捷键"
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
                "暂无快捷键",
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
                "暂无快捷键"
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
                "暂无快捷键",
                (showText) => {
                  spanElement.innerHTML = showText;
                }
              );
            }
          )
        ]
      },
      {
        text: "视频区域内-屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】右侧的展开评论按钮",
            "屏蔽元素",
            "shieldRightExpandCommentButton",
            true
          ),
          UISwitch(
            "【屏蔽】搜索悬浮栏",
            "屏蔽元素，一般出现在左上角",
            "shieldSearchFloatingBar",
            true
          ),
          UISwitch(
            "【屏蔽】网页全屏关闭按钮",
            "屏蔽元素，一般开启网页全屏后出现在左上角",
            "shieldCloseFullScreenButton",
            true
          ),
          UISwitch(
            "【屏蔽】切换播放",
            "屏蔽元素，在右侧作者头像上方",
            "shieldPlaySwitchButton",
            false
          ),
          UISwitch(
            "【屏蔽】作者头像",
            "屏蔽元素",
            "shieldAuthorAvatar",
            false
          ),
          UISwitch("【屏蔽】点赞", "屏蔽元素", "shieldLikeButton", false),
          UISwitch(
            "【屏蔽】评论",
            "屏蔽元素",
            "shieldCommentButton",
            false
          ),
          UISwitch(
            "【屏蔽】收藏",
            "屏蔽元素",
            "shieldCollectionButton",
            false
          ),
          UISwitch(
            "【屏蔽】分享",
            "屏蔽元素",
            "shieldSharenButton",
            false
          ),
          UISwitch(
            "【屏蔽】看相关",
            "屏蔽元素",
            "shieldRelatedRecommendationsButton",
            false
          ),
          UISwitch("【屏蔽】更多", "...按钮，屏蔽元素", "shieldMoreButton", false),
          UISwitch(
            "【屏蔽】底部视频工具栏",
            "屏蔽元素",
            "shieldBottomVideoToolBar",
            false
          )
        ]
      },
      {
        text: "评论区域内-屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】评论工具栏",
            "屏蔽元素",
            "dy-video-shieldUserCommentToolBar",
            false
          ),
          UISwitch(
            "【屏蔽】大家都在搜",
            "在评论区的顶部出现",
            "dy-video-shieldUserCommentEveryOneAllSearch",
            false
          )
        ]
      },
      {
        text: "视频过滤规则(可正则)",
        type: "forms",
        forms: [
          UISwitch(
            "启用",
            "开启后可启用下面的屏蔽功能",
            "shieldVideo",
            true
          ),
          UISwitch(
            "【屏蔽】直播",
            "过滤掉直播",
            "shieldVideo-live",
            true
          ),
          UISwitch("【屏蔽】广告", "过滤掉广告", "shieldVideo-ads", true),
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
  };
  const PanelSearchConfig = {
    id: "panel-config-search",
    title: "搜索",
    forms: [
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】相关搜索",
            "屏蔽右边的相关搜索",
            "douyin-search-shieldReleatedSearches",
            false
          )
        ]
      }
    ]
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      data: new utils.Dictionary(),
      /**
       * 成功只执行了一次的项
       */
      oneSuccessExecMenu: new utils.Dictionary(),
      /**
       * 成功只执行了一次的项
       */
      onceExec: new utils.Dictionary(),
      /** 脚本名，一般用在设置的标题上 */
      scriptName: SCRIPT_NAME,
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
      listenData: new utils.Dictionary()
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
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        for (let formItemIndex = 0; formItemIndex < rightContentConfigList.length; formItemIndex++) {
          let rightContentConfigItem = rightContentConfigList[formItemIndex];
          if (rightContentConfigItem.forms) {
            let childFormConfigList = rightContentConfigItem.forms;
            for (let formChildConfigIndex = 0; formChildConfigIndex < childFormConfigList.length; formChildConfigIndex++) {
              initDefaultValue(childFormConfigList[formChildConfigIndex]);
            }
          } else {
            initDefaultValue(rightContentConfigItem);
          }
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
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
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
      let value = PopsPanel.getValue(key);
      if (value) {
        if (this.$data.oneSuccessExecMenu.has(key)) {
          return;
        }
        callback(value);
        this.$data.oneSuccessExecMenu.set(key, 1);
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
      pops.panel({
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
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92dvw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight < 450) {
        return "80dvh";
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
    }
  };
  const ShieldHeader = {
    init() {
      PopsPanel.execMenu("shieldClientTip", () => {
        this.shieldClientTip();
      });
      PopsPanel.execMenu("shieldFillingBricksAndStones", () => {
        this.shieldFillingBricksAndStones();
      });
      PopsPanel.execMenu("shieldClient", () => {
        this.shieldClient();
      });
      PopsPanel.execMenu("shieldQuickAccess", () => {
        this.shieldQuickAccess();
      });
      PopsPanel.execMenu("shieldNotifitation", () => {
        this.shieldNotifitation();
      });
      PopsPanel.execMenu("shieldPrivateMessage", () => {
        this.shieldPrivateMessage();
      });
      PopsPanel.execMenu("shieldSubmission", () => {
        this.shieldSubmission();
      });
      PopsPanel.execMenu("shieldLeftNavigator", () => {
        this.shieldLeftNavigator();
      });
      PopsPanel.execMenu("shieldTopNavigator", () => {
        this.shieldTopNavigator();
      });
    },
    /**
     * 【屏蔽】充砖石
     */
    shieldFillingBricksAndStones() {
      log.info("【屏蔽】充砖石");
      DouYinElement.addShieldStyle(
        'pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】充砖石");
        DouYinElement.addShieldStyle(
          'div:has(>div>div>div>div[data-e2e="something-button"] path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
        );
      }
    },
    /**
     * 【屏蔽】客户端
     */
    shieldClient() {
      log.info("【屏蔽】客户端");
      DouYinElement.addShieldStyle(
        'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container'
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】客户端");
        DouYinElement.addShieldStyle(
          'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])'
        );
      }
    },
    /**
     * 【屏蔽】快捷访问
     */
    shieldQuickAccess() {
      log.info("【屏蔽】快捷访问");
      DouYinElement.addShieldStyle(
        'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)'
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】快捷访问");
        DouYinElement.addShieldStyle("div:has(>div>div>.quick-access-nav-icon)");
      }
    },
    /**
     * 【屏蔽】通知
     */
    shieldNotifitation() {
      log.info("【屏蔽】通知");
      DouYinElement.addShieldStyle(
        'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】通知");
        DouYinElement.addShieldStyle(
          'ul:has( div>div[data-e2e="notice-entry"] )'
        );
      }
    },
    /**
     * 【屏蔽】私信
     */
    shieldPrivateMessage() {
      log.info("【屏蔽】私信");
      DouYinElement.addShieldStyle(
        'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】私信");
        DouYinElement.addShieldStyle('ul:has( div>div[data-e2e="im-entry"] )');
      }
    },
    /**
     * 【屏蔽】投稿
     */
    shieldSubmission() {
      log.info("【屏蔽】投稿");
      DouYinElement.addShieldStyle(
        'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
      );
      if (DouYinRouter.isSearch()) {
        log.info("搜索-【屏蔽】投稿");
        DouYinElement.addShieldStyle(
          'div:has(>div >div>div[data-e2e="something-button"] path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 00-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 002.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 002.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 00-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 011.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 01-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 01-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 011.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])'
        );
      }
    },
    /**
     * 【屏蔽】客户端提示
     */
    shieldClientTip() {
      log.info("【屏蔽】客户端提示");
      DouYinElement.addShieldStyle(
        // '#douyin-header div[data-e2e="im-entry"] div.popShadowAnimation:first-child',
        // "#douyin-header ul div.userMenuPanelShadowAnimation:first-child",
        /* 鼠标悬浮在通知，出现在上面的，下载客户端，实时接收消息通知 */
        'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])'
      );
    },
    /**
     * 【屏蔽】左侧导航栏
     */
    shieldLeftNavigator() {
      log.info("【屏蔽】左侧导航栏");
      DouYinElement.addShieldStyle("#douyin-navigation");
      _GM_addStyle(`
		/* 修复顶部导航栏的宽度 */
		#douyin-header{
			width: 100%;
		}
		`);
    },
    /**
     * 【屏蔽】顶部导航栏
     */
    shieldTopNavigator() {
      log.info("【屏蔽】顶部导航栏");
      DouYinElement.addShieldStyle("#douyin-header");
      if (DouYinRouter.isSearch()) {
        _GM_addStyle(`
			/* 把搜索顶部的工具栏置顶 */
			#search-content-area > div > div:nth-child(1) > div:nth-child(1){
				top: 0;
			}
			`);
      }
    }
  };
  const ShieldSearch = {
    init() {
      PopsPanel.execMenu("shieldSearch", () => {
        this.shieldSearch();
      });
      PopsPanel.execMenu("shieldSearchPlaceholder", () => {
        this.shieldSearchPlaceholder();
      });
      PopsPanel.execMenu("shieldSearchGuessYouWantToSearch", () => {
        this.shieldSearchGuessYouWantToSearch();
      });
      PopsPanel.execMenu("shieldSearchTiktokHotspot", () => {
        this.shieldSearchTiktokHotspot();
      });
    },
    /**
     * 【屏蔽】搜索框
     */
    shieldSearch() {
      log.info("【屏蔽】搜索框");
      DouYinElement.addShieldStyle(
        '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
      );
    },
    /**
     * 【屏蔽】搜索框的提示
     */
    shieldSearchPlaceholder() {
      log.info("【屏蔽】搜索框的提示");
      DouYinElement.addShieldStyle(
        '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
      );
      _GM_addStyle(`
		#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
			color: transparent;
		}
		`);
    },
    /**
     * 【屏蔽】搜索-猜你想搜
     */
    shieldSearchGuessYouWantToSearch() {
      log.info("【屏蔽】搜索-猜你想搜");
      DouYinElement.addShieldStyle(
        'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
        'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
      );
    },
    /**
     * 【屏蔽】搜索-抖音热点
     */
    shieldSearchTiktokHotspot() {
      log.info("【屏蔽】搜索-抖音热点");
      DouYinElement.addShieldStyle(
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
      DouYinElement.watchVideDataListChange(() => {
        setLogin(DouYinElement.getOSElement());
      });
      utils.waitNodeWithInterval("#root div[class*='-os']", WAIT_TIME).then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true
          },
          callback: utils.debounce(() => {
            setLogin(DouYinElement.getOSElement());
          }, 70)
        });
      }).catch((err) => {
      });
      if (DouYinRouter.isLive()) {
        log.info("伪装登录：live");
        utils.waitNodeWithInterval(
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
        utils.waitNodeWithInterval("#root > div", WAIT_TIME).then(() => {
          utils.mutationObserver(document.body, {
            config: {
              subtree: true,
              childList: true
            },
            callback: utils.debounce((mutation, observer) => {
              setUserInfoBySearch(
                document.querySelector("#root > div")
              );
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
      DouYinElement.addShieldStyle('div[id^="login-full-panel-"]');
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
  const DouYinLiveChatRoom = {
    init() {
      PopsPanel.execMenu("live-shieldChatRoom", () => {
        this.shieldChatRoom();
      });
      PopsPanel.execMenu("live-shielChatRoomVipSeats", () => {
        this.shielChatRoomVipSeats();
      });
      PopsPanel.execMenu("dy-live-shieldUserLevelIcon", () => {
        this.shieldUserLevelIcon();
      });
      PopsPanel.execMenu("dy-live-shieldUserVIPIcon", () => {
        this.shieldUserVIPIcon();
      });
      PopsPanel.execMenu("dy-live-shieldUserFansIcon", () => {
        this.shieldUserFansIcon();
      });
      PopsPanel.execMenu("dy-live-shieldMessage", () => {
        this.shieldMessage();
      });
    },
    /**
     * 【屏蔽】评论区
     */
    shieldChatRoom() {
      log.info("【屏蔽】评论区");
      DouYinElement.addShieldStyle("#chatroom");
      _GM_addStyle(`
		div[data-e2e="living-container"],
		div[data-e2e="living-container"] > div{
			margin-bottom: 0px !important;
		}`);
    },
    /**
     * 【屏蔽】评论区的贵宾席
     */
    shielChatRoomVipSeats() {
      log.info("【屏蔽】评论区的贵宾席");
      DouYinElement.addShieldStyle(
        "#chatroom > div > div:has(#audiencePanelScrollId)"
      );
    },
    /**
     * 【屏蔽】用户等级图标
     */
    shieldUserLevelIcon() {
      log.info("【屏蔽】用户等级图标");
      DouYinElement.addShieldStyle(
        '.webcast-chatroom___item span:has(>img[src*="level"])'
      );
    },
    /**
     * 【屏蔽】VIP图标
     */
    shieldUserVIPIcon() {
      log.info("【屏蔽】VIP图标");
      DouYinElement.addShieldStyle(
        '.webcast-chatroom___item span:has(>img[src*="subscribe"])'
      );
    },
    /**
     * 【屏蔽】粉丝牌
     */
    shieldUserFansIcon() {
      log.info("【屏蔽】粉丝牌");
      DouYinElement.addShieldStyle(
        '.webcast-chatroom___item span:has(>div[style*="fansclub"])'
      );
    },
    /**
     * 【屏蔽】信息播报
     */
    shieldMessage() {
      log.info("【屏蔽】信息播报");
      DouYinElement.addShieldStyle(".webcast-chatroom___bottom-message");
    }
  };
  const DouYinLive = {
    init() {
      PopsPanel.execMenu("live-autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      PopsPanel.execMenu("live-shieldGiftColumn", () => {
        this.shieldGiftColumn();
      });
      PopsPanel.execMenu("live-shieldTopToolBarInfo", () => {
        this.shieldTopToolBarInfo();
      });
      PopsPanel.execMenu("live-shieldGiftEffects", () => {
        this.shieldGiftEffects();
      });
      PopsPanel.execMenu("live-shieldDanmuku", () => {
        DouYinLiveDanmuku.shieldDanmu();
      });
      PopsPanel.execMenu("live-danmu-shield-rule-enable", () => {
        DouYinLiveDanmuku.filterDanmu();
      });
      PopsPanel.execMenu("live-unlockImageQuality", () => {
        this.unlockImageQuality();
      });
      DouYinLiveChatRoom.init();
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      log.success("自动进入网页全屏");
      utils.waitNode(
        'xg-icon[classname] > div > div:has(path[d="M9.75 8.5a2 2 0 00-2 2v11a2 2 0 002 2h12.5a2 2 0 002-2v-11a2 2 0 00-2-2H9.75zM15 11.25h-3.75a1 1 0 00-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 01-1 1z"])'
      ).then((element) => {
        element.click();
      });
    },
    /**
     * 【屏蔽】底部的礼物栏
     */
    shieldGiftColumn() {
      log.success("屏蔽底部的礼物栏");
      DouYinElement.addShieldStyle(
        'div[data-e2e="living-container"] >div> :last-child'
      );
    },
    /**
     * 【屏蔽】顶栏信息
     * 包括直播作者、右侧的礼物展馆
     */
    shieldTopToolBarInfo() {
      log.success("【屏蔽】顶栏信息");
      DouYinElement.addShieldStyle(
        'div[data-e2e="living-container"] > div > pace-island[id^="island_"]'
      );
    },
    /**
     * 【屏蔽】礼物特效
     */
    shieldGiftEffects() {
      log.success("【屏蔽】礼物特效");
      DouYinElement.addShieldStyle(
        '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
      );
    },
    /**
     * 解锁画质选择
     *
     * 未登录情况下最高选择【高清】画质
     */
    unlockImageQuality() {
      log.success("解锁画质选择");
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
      PopsPanel.execMenuOnce("shieldBottomQuestionButton", () => {
        this.shieldBottomQuestionButton();
      });
      PopsPanel.execMenuOnce("disguiseLogin", () => {
        DouYinAccount.disguiseLogin();
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
          log.info("Router: 搜索");
          DouYinSearch.init();
        }
      } else {
        log.error("未知router: " + window.location.hostname);
      }
    },
    /**
     * 屏蔽底部问题按钮
     */
    shieldBottomQuestionButton() {
      log.success("屏蔽底部问题按钮");
      DouYinElement.addShieldStyle([
        "#douyin-sidebar",
        /* 推荐视频右下角的？按钮 */
        "#douyin-temp-sidebar"
      ]);
    }
  };
  PopsPanel.init();
  DouYin.init();

})(Qmsg, Utils, DOMUtils);