// ==UserScript==
// @name         抖音优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         data:image/png;base64,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
// @version      2024.4.11
// @description  过滤广告、过滤直播、可自定义过滤视频的屏蔽关键字、伪装登录、直播屏蔽弹幕、礼物特效等
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        http*://*.douyin.com/*
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
// @require      https://update.greasyfork.org/scripts/456485/1357649/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1355010/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1344519/DOMUtils.js
// ==/UserScript==

(function () {
  if (typeof unsafeWindow === "undefined") {
    unsafeWindow = globalThis || window;
  }
  /** @type {import("../库/pops")} */
  const pops = window.pops;
  /** @type {import("../库/Qmsg")} */
  const Qmsg = window.Qmsg;
  /** @type {import("../库/Utils")} */
  const utils = window.Utils.noConflict();
  /**@type {import("../库/DOMUtils")} */
  const DOMUtils = window.DOMUtils.noConflict();
  const console = unsafeWindow.console || window.console;

  const log = new utils.Log(GM_info, console);
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
    logMaxCount: 100,
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
     * 自动判断菜单是否启用，然后执行回调
     * @param {string} key
     * @param {Function} callback
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
     * 显示设置面板
     */
    showPanel() {
      pops.panel({
        title: {
          text: `${GM_info?.script?.name || "抖音优化"}-设置`,
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
        width: utils.isPhone() ? "92dvw" : "550px",
        height: utils.isPhone() ? "80dvh" : "450px",
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
     * disable?: ()=>boolean,
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
          id: "panel-config-common",
          title: "通用",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                this.getSelectDetail(
                  "清晰度",
                  "自行选择清晰度",
                  "chooseVideoDefinition",
                  1,
                  [
                    {
                      text: "智能",
                      value: 0,
                    },
                    {
                      text: "极速",
                      value: 4,
                    },
                    {
                      text: "流畅",
                      value: 3,
                    },
                    {
                      text: "清晰",
                      value: 2,
                    },
                    {
                      text: "高清",
                      value: 1,
                    },
                  ]
                ),
                this.getSwtichDetail(
                  "debug模式",
                  "移除抖音的开发者模式检测",
                  "debug",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "伪装登录",
                  "使用随机UID进行伪装",
                  "disguiseLogin",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "视频解析",
                  "分享->下载(灰色的也可点击)",
                  "parseVideo",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "自动进入网页全屏",
                  "网页加载完毕后自动点击网页全屏按钮进入全屏",
                  "autoEnterElementFullScreen",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "评论区移到中间",
                  "修改评论区为中间弹出而非右侧区域",
                  "changeCommentToBottom",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "网页全屏净化",
                  "移除右侧工具栏、底部信息栏等",
                  "fullScreen",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "手机模式",
                  "放大各种文字和图标",
                  "mobileMode",
                  false,
                  void 0
                ),
              ],
            },
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【屏蔽】登录弹窗",
                  "屏蔽元素且自动等待元素出现并关闭登录弹窗",
                  "watchLoginDialogToClose",
                  true,
                  void 0
                ),
              ],
            },
            {
              text: "主框架-屏蔽",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【屏蔽】客户端提示",
                  "屏蔽元素",
                  "shieldClientTip",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】充砖石",
                  "屏蔽元素",
                  "shieldFillingBricksAndStones",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】客户端",
                  "屏蔽元素",
                  "shieldClient",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】快捷访问",
                  "屏蔽元素",
                  "shieldQuickAccess",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】通知",
                  "屏蔽元素",
                  "shieldNotifitation",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】私信",
                  "屏蔽元素",
                  "shieldPrivateMessage",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】投稿",
                  "屏蔽元素",
                  "shieldSubmission",
                  false,
                  void 0
                ),
              ],
            },
            {
              text: "视频区域内-屏蔽",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【屏蔽】右侧的展开评论按钮",
                  "屏蔽元素",
                  "shieldRightExpandCommentButton",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】搜索悬浮栏",
                  "屏蔽元素，一般出现在左上角",
                  "shieldSearchFloatingBar",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】网页全屏关闭按钮",
                  "屏蔽元素，一般开启网页全屏后出现在左上角",
                  "shieldCloseFullScreenButton",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】切换播放",
                  "屏蔽元素，在右侧作者头像上方",
                  "shieldPlaySwitchButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】作者头像",
                  "屏蔽元素",
                  "shieldAuthorAvatar",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】点赞",
                  "屏蔽元素",
                  "shieldLikeButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】评论",
                  "屏蔽元素",
                  "shieldCommentButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】收藏",
                  "屏蔽元素",
                  "shieldCollectionButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】分享",
                  "屏蔽元素",
                  "shieldSharenButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】看相关",
                  "屏蔽元素",
                  "shieldRelatedRecommendationsButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】更多",
                  "屏蔽元素",
                  "shieldMoreButton",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】底部视频工具栏",
                  "屏蔽元素",
                  "shieldBottomVideoToolBar",
                  false,
                  void 0
                ),
              ],
            },
            {
              text: "搜索-屏蔽",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【屏蔽】搜索框",
                  "屏蔽元素",
                  "shieldSearch",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】搜索框的提示",
                  "屏蔽元素",
                  "shieldSearchPlaceholder",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】猜你想搜",
                  "屏蔽元素",
                  "shieldSearchGuessYouWantToSearch",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】抖音热点",
                  "屏蔽元素",
                  "shieldSearchTiktokHotspot",
                  false,
                  void 0
                ),
              ],
            },
          ],
        },
        {
          id: "panel-config-shield",
          title: "屏蔽",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "启用",
                  "开启后可启用下面的屏蔽功能",
                  "shieldVideo",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】直播",
                  "过滤掉直播",
                  "shieldVideo-live",
                  true,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】广告",
                  "过滤掉广告",
                  "shieldVideo-ads",
                  true,
                  void 0
                ),
              ],
            },
            {
              text: "规则(可正则)",
              type: "forms",
              forms: [
                {
                  type: "own",
                  getLiElementCallBack(liElement) {
                    let textareaDiv = DOMUtils.createElement(
                      "div",
                      {
                        className: "pops-panel-textarea",
                        innerHTML: `<textarea placeholder="请输入屏蔽规则，每行一个" style="height:350px;"></textarea>`,
                      },
                      {
                        style: "width: 100%;",
                      }
                    );
                    let textarea = textareaDiv.querySelector("textarea");
                    textarea.value = DouYinShieldVideo.get();
                    DOMUtils.on(
                      textarea,
                      ["input", "propertychange"],
                      void 0,
                      utils.debounce(function () {
                        DouYinShieldVideo.set(textarea.value);
                      }, 200)
                    );
                    liElement.appendChild(textareaDiv);
                    return liElement;
                  },
                },
              ],
            },
          ],
        },
        {
          id: "panel-config-live",
          title: "直播",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "自动进入网页全屏",
                  "网页加载完毕后自动点击网页全屏按钮进入全屏",
                  "live-autoEnterElementFullScreen",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "解锁画质选择",
                  "未登录的情况下选择原画实际上是未登录的情况下最高选择的画质",
                  "live-unlockImageQuality",
                  true,
                  void 0
                ),
              ],
            },
            {
              text: "视频区域内-屏蔽",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【屏蔽】顶栏信息",
                  "屏蔽元素，包括直播作者、右侧的礼物展馆",
                  "live-shieldTopToolBarInfo",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】底部的礼物栏",
                  "屏蔽元素",
                  "live-shieldGiftColumn",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】礼物特效",
                  "屏蔽元素",
                  "live-shieldGiftEffects",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】弹幕",
                  "屏蔽元素",
                  "live-shieldDanmuku",
                  false,
                  void 0
                ),
              ],
            },
            {
              text: "聊天室-屏蔽",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "【屏蔽】聊天室",
                  "屏蔽元素",
                  "live-shieldChatRoom",
                  false,
                  void 0
                ),
                this.getSwtichDetail(
                  "【屏蔽】贵宾席",
                  "屏蔽元素",
                  "live-shielChatRoomVipSeats",
                  false,
                  void 0
                ),
              ],
            },
          ],
        },
      ];
    },
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
  };

  const DouYinElement = {
    /**
     * 观察 #slidelist的加载每条视频
     * @param {(osElement: HTMLDivElement)=>void} callback
     */
    watch_slidelist(callback) {
      DOMUtils.ready(() => {
        utils.waitAnyNode("#slidelist").then((slidelist) => {
          let osElement =
            document.querySelector(".windows-os") ||
            document.querySelector(".linux-os") ||
            document.querySelector("#douyin-right-container");
          utils.mutationObserver(slidelist, {
            config: {
              childList: true,
              subtree: true,
              attributes: true,
            },
            callback: () => {
              callback(osElement);
            },
          });
        });
      });
    },

    /**
     * 添加屏蔽CSS
     * @param {...any[]} selector
     */
    addShieldStyle(selector) {
      let selectorList = [];
      if (arguments.length === 0) {
        console.log(arguments);
        return;
      }
      if (arguments.length > 1) {
        this.addShieldStyle(Array.from(arguments));
        return;
      }
      if (typeof selector === "string") {
        this.addShieldStyle([selector]);
        return;
      }
      selector.forEach((item) => {
        if (Array.isArray(item)) {
          selectorList = [...selectorList, ...item];
        } else {
          selectorList.push(item);
        }
      });
      GM_addStyle(`${selectorList.join(",")}{
          display: none !important;
          }`);
    },
  };

  const DouYinShieldVideo = {
    key: "douyin-shield-rule",
    $data: {
      /**
       * @type {UtilsDictionaryConstructor<string,string>}
       */
      rule: new utils.Dictionary(),
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
      DouYinElement.watch_slidelist((osElement) => {
        let slideListChild = document.querySelector(
          '#slidelist div[data-e2e="slideList"]'
        );
        let videoData =
          utils.getReactObj(slideListChild).reactFiber.return.memoizedProps
            .data;
        let shieldTagMap = [
          {
            key: "nickname",
            get(data) {
              return data?.["authorInfo"]?.["nickname"]?.toString();
            },
          },
          {
            key: "uid",
            get(data) {
              return data?.["authorInfo"]?.["uid"]?.toString();
            },
          },
          {
            key: "desc",
            get(data) {
              return data?.["desc"]?.toString();
            },
          },
          {
            key: "textExtra",
            get(data) {
              if (
                typeof data?.["textExtra"] === "object" &&
                Array.isArray(data?.["textExtra"])
              ) {
                let result = [];
                data?.["textExtra"].forEach((item) => {
                  result.push(item["hashtagName"]);
                });
                return result;
              }
            },
          },
          {
            key: "videoTag",
            get(data) {
              if (
                typeof data?.["videoTag"] === "object" &&
                Array.isArray(data?.["videoTag"])
              ) {
                let result = [];
                data?.["videoTag"].forEach((item) => {
                  result.push(item["tagName"]);
                });
                return result;
              }
            },
          },
        ];
        for (let index = 0; index < videoData.length; index++) {
          let videoItem = videoData[index];
          let flag = false;
          if (
            typeof videoItem["cellRoom"] === "object" &&
            PopsPanel.getValue("shieldVideo-live")
          ) {
            log.success(["屏蔽直播", videoItem["cellRoom"]]);
            flag = true;
          }
          if (videoItem["isAds"] && PopsPanel.getValue("shieldVideo-ads")) {
            log.success(["屏蔽广告", videoItem["isAds"]]);
            flag = true;
          }
          this.$data.rule.forEach((ruleValue, ruleKey) => {
            let ruleRegExpValue = new RegExp(ruleValue, "g");
            for (const shieldTag of shieldTagMap) {
              if (ruleKey === shieldTag["key"]) {
                let value = shieldTag.get(videoItem);
                if (typeof value === "string") {
                  flag = Boolean(value.match(ruleRegExpValue));
                  if (flag) {
                    log.success([
                      "自定义屏蔽: " + ruleKey + " " + videoItem["desc"],
                    ]);
                  }
                } else if (typeof value === "object" && Array.isArray(value)) {
                  for (const valueIterator of value) {
                    if (valueIterator.match(ruleRegExpValue)) {
                      flag = true;
                      log.success([
                        "自定义屏蔽: " + ruleKey + " " + videoItem["desc"],
                      ]);
                      break;
                    }
                  }
                }
              }
              if (flag) {
                break;
              }
            }
          });
          if (flag) {
            videoData.splice(index, 1);
            index--;
          }
        }
      });
    },
    parseRule() {
      let localRule = this.get().trim();
      let localRuleSplit = localRule.split("\n");
      localRuleSplit.forEach((item) => {
        let itemSplit = item.split("##");
        if (itemSplit.length < 2) {
          return;
        }
        let keyName = itemSplit[0];
        let keyValue = itemSplit[1];
        this.$data.rule.set(keyName, keyValue);
      });
    },
    set(value) {
      GM_setValue(this.key, value);
    },
    get() {
      return GM_getValue(this.key, "");
    },
  };

  const DouYin = {
    init() {
      PopsPanel.execMenu("debug", () => {
        this.debug();
      });
      PopsPanel.execMenu("disguiseLogin", () => {
        this.disguiseLogin();
      });
      PopsPanel.execMenu("watchLoginDialogToClose", () => {
        this.watchLoginDialogToClose();
      });
      PopsPanel.execMenu("changeCommentToBottom", () => {
        this.changeCommentToBottom();
      });
      PopsPanel.execMenu("fullScreen", () => {
        this.fullScreen();
      });
      PopsPanel.execMenu("mobileMode", () => {
        DOMUtils.ready(() => {
          this.mobileMode();
        });
      });
      PopsPanel.execMenu("chooseVideoDefinition", (value) => {
        DOMUtils.ready(() => {
          this.chooseVideoDefinition(value);
        });
      });
      PopsPanel.execMenu("parseVideo", () => {
        this.parseVideo();
      });
      PopsPanel.execMenu("autoEnterElementFullScreen", () => {
        this.autoEnterElementFullScreen();
      });
      this.shieldHeader.init();
      this.shieldVideo.init();
      this.shieldSearch.init();
    },
    shieldHeader: {
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
      },
      /**
       * 【屏蔽】充砖石
       */
      shieldFillingBricksAndStones() {
        DouYinElement.addShieldStyle(
          'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
        );
      },
      /**
       * 【屏蔽】客户端
       */
      shieldClient() {
        DouYinElement.addShieldStyle(
          'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container'
        );
      },
      /**
       * 【屏蔽】快捷访问
       */
      shieldQuickAccess() {
        DouYinElement.addShieldStyle(
          'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)'
        );
      },
      /**
       * 【屏蔽】通知
       */
      shieldNotifitation() {
        DouYinElement.addShieldStyle(
          'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
        );
      },
      /**
       * 【屏蔽】私信
       */
      shieldPrivateMessage() {
        DouYinElement.addShieldStyle(
          'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
        );
      },
      /**
       * 【屏蔽】投稿
       */
      shieldSubmission() {
        DouYinElement.addShieldStyle(
          'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
        );
      },
      /**
       * 【屏蔽】客户端提示
       */
      shieldClientTip() {
        DouYinElement.addShieldStyle(
          '#douyin-header div[data-e2e="im-entry"] div.popShadowAnimation:first-child',
          "#douyin-header ul div.userMenuPanelShadowAnimation:first-child"
        );
      },
    },
    shieldVideo: {
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
        DouYinElement.addShieldStyle(
          '#sliderVideo[data-e2e="feed-active-video"] > div > div > button[type="button"]',
          '.playerContainer button[type=button] svg > g[filter] > path[d="M21.316 29.73a1.393 1.393 0 01-1.97 0l-5.056-5.055a1.393 1.393 0 010-1.97l.012-.011 5.044-5.045a1.393 1.393 0 011.97 1.97l-4.07 4.071 4.07 4.071a1.393 1.393 0 010 1.97z"]'
        );
        GM_addStyle(`
        .basePlayerContainer .positionBox{
            padding-right: 20px !important;
        }
        `);
      },
      /**
       * 左上角的鼠标的快捷搜索热点的悬浮栏
       */
      shieldSearchFloatingBar() {
        DouYinElement.addShieldStyle(
          '.slider-video div:has([data-e2e="searchbar-button"])',
          'div:has(>div > svg[class] >  defs [d="M0 0h24v24H0z"]',
          'div[data-e2e="feed-active-video"] + div:has(>div>div>div > input[data-e2e="searchbar-input"])'
        );
      },
      /**
       * 【屏蔽】网页全屏关闭按钮
       */
      shieldCloseFullScreenButton() {
        DouYinElement.addShieldStyle(
          '#sliderVideo[data-e2e="feed-active-video"] div.slider-video > div:has(path[d="M17.448 17.448a1.886 1.886 0 01-2.668 0L9 11.668l-5.78 5.78A1.886 1.886 0 11.552 14.78L6.332 9 .552 3.22A1.886 1.886 0 113.22.552L9 6.332l5.78-5.78a1.886 1.886 0 112.668 2.668L11.668 9l5.78 5.78a1.886 1.886 0 010 2.668z"])'
        );
      },
      /**
       * 【屏蔽】切换播放
       */
      shieldPlaySwitchButton() {
        DouYinElement.addShieldStyle(
          '.positionBox  .xgplayer-playswitch[data-state="normal"]',
          "div.xgplayer-playswitch"
        );
      },
      /**
       * 【屏蔽】作者头像
       */
      shieldAuthorAvatar() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has([data-e2e="video-avatar"])'
        );
      },
      /**
       * 【屏蔽】点赞
       */
      shieldLikeButton() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has([data-e2e="video-player-digg"])'
        );
      },
      /**
       * 【屏蔽】评论
       */
      shieldCommentButton() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has([data-e2e="feed-comment-icon"])'
        );
      },
      /**
       * 【屏蔽】收藏
       */
      shieldCollectionButton() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has([data-e2e="video-player-collect"])'
        );
      },
      /**
       * 【屏蔽】分享
       */
      shieldSharenButton() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has([data-e2e="video-player-share"])'
        );
      },
      /**
       * 【屏蔽】看相关
       */
      shieldRelatedRecommendationsButton() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has(path[d="M14 8a8 8 0 00-8 8v4a8 8 0 008 8h8a8 8 0 008-8v-4a8 8 0 00-8-8h-8zm8.5 10.866a1 1 0 000-1.732l-6-3.464a1 1 0 00-1.5.866v6.928a1 1 0 001.5.866l6-3.464z"])',
          'div.dy-tip-container:has(path[d=" M-4,-10 C-4,-10 4,-10 4,-10 C8.418000221252441,-10 12,-6.418000221252441 12,-2 C12,-2 12,2 12,2 C12,6.418000221252441 8.418000221252441,10 4,10 C4,10 -4,10 -4,10 C-8.418000221252441,10 -12,6.418000221252441 -12,2 C-12,2 -12,-2 -12,-2 C-12,-6.418000221252441 -8.418000221252441,-10 -4,-10z M4.5,0.8659999966621399 C5.166999816894531,0.48100000619888306 5.166999816894531,-0.48100000619888306 4.5,-0.8659999966621399 C4.5,-0.8659999966621399 -1.5,-4.329999923706055 -1.5,-4.329999923706055 C-2.1670000553131104,-4.715000152587891 -3,-4.234000205993652 -3,-3.4639999866485596 C-3,-3.4639999866485596 -3,3.4639999866485596 -3,3.4639999866485596 C-3,4.234000205993652 -2.1670000553131104,4.715000152587891 -1.5,4.329999923706055 C-1.5,4.329999923706055 4.5,0.8659999966621399 4.5,0.8659999966621399z"])'
        );
      },
      /**
       * 【屏蔽】更多
       */
      shieldMoreButton() {
        DouYinElement.addShieldStyle(
          'div.dy-tip-container:has([data-e2e="video-play-more"])'
        );
      },
      /**
       * 【屏蔽】底部视频工具栏
       */
      shieldBottomVideoToolBar() {
        DouYinElement.addShieldStyle("xg-controls.xgplayer-controls");
        GM_addStyle(`
      div:has( > div > pace-island > #video-info-wrap ),
      xg-video-container.xg-video-container{
        bottom: 0 !important;
      }
      `);
      },
    },
    shieldSearch: {
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
        DouYinElement.addShieldStyle(
          '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div:has(input[data-e2e="searchbar-input"])'
        );
      },
      /**
       * 【屏蔽】搜索框的提示
       */
      shieldSearchPlaceholder() {
        DouYinElement.addShieldStyle(
          '#douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div div:has( + input[data-e2e="searchbar-input"])'
        );
        GM_addStyle(`
    #douyin-header div[data-click="doubleClick"] > div[data-click="doubleClick"] > div input[data-e2e="searchbar-input"]::placeholder{
      color: transparent;
    }
    `);
      },
      /**
       * 【屏蔽】搜索-猜你想搜
       */
      shieldSearchGuessYouWantToSearch() {
        DouYinElement.addShieldStyle(
          'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-guess-container"])',
          'button[data-e2e="searchbar-button"] + div div[data-e2e="search-guess-container"]'
        );
      },
      /**
       * 【屏蔽】搜索-抖音热点
       */
      shieldSearchTiktokHotspot() {
        DouYinElement.addShieldStyle(
          'button[data-e2e="searchbar-button"] + div div:has( + div[data-e2e="search-hot-container"])',
          'button[data-e2e="searchbar-button"] + div div[data-e2e="search-hot-container"]'
        );
      },
    },
    /**
     * 调试模式
     *
     * 处理setInterval
     */
    debug() {
      let originalSetInterval = unsafeWindow.setInterval;
      unsafeWindow.setInterval = function (callback, time) {
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
    },
    /**
     * 伪装登录
     */
    disguiseLogin() {
      function setLogin(osElement) {
        utils.getReactObj(
          osElement
        ).reactFiber.alternate.return.memoizedProps.userInfo.info = {
          uid: parseInt(Math.random() * 1000000),
        };
        utils.getReactObj(
          osElement
        ).reactFiber.alternate.return.memoizedProps.userInfo.isLogin = true;
      }
      DouYinElement.watch_slidelist((osElement) => {
        setLogin(osElement);
      });
    },
    /**
     * 关闭登录弹窗
     */
    watchLoginDialogToClose() {
      DouYinElement.addShieldStyle('div[id^="login-full-panel-"]');
      utils.waitNode("body").then(() => {
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true,
          },
          callback() {
            let accountCloseBtn = document.querySelector(
              'body > div[id^="login-full-panel-"] .dy-account-close'
            );
            if (accountCloseBtn) {
              utils
                .getReactObj(accountCloseBtn)
                .reactProps.onClick(new Event("click"));
            }
          },
        });
      });
    },
    /**
     * 评论区修改为底部
     */
    changeCommentToBottom() {
      DouYinElement.addShieldStyle(
        '#sliderVideo[data-e2e="feed-video"] #videoSideBar #relatedVideoCard'
      );
      GM_addStyle(`
        #sliderVideo[data-e2e] .playerContainer,
        #slideMode[data-e2e] .playerContainer{
            width: 100% !important;
        }
        #sliderVideo[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard),
        #slideMode[data-e2e="feed-active-video"] #videoSideBar:has(#relatedVideoCard){
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
    },
    /**
     * 全屏
     */
    fullScreen() {
      DouYinElement.addShieldStyle(
        /* 右侧工具栏 */
        ".slider-video .positionBox",
        /* 中间底部的视频信息（描述、作者、话题等） */
        "#video-info-wrap",
        /* 中间底部的视频控制工具栏 */
        "xg-controls.xgplayer-controls"
      );
      this.shieldSearchFloatingBar();
      GM_addStyle(`
        /* 视频全屏 */
        xg-video-container.xg-video-container{
            bottom: 0px !important;
        }
        `);
    },
    /**
     * 手机模式
     */
    mobileMode() {
      let meta = DOMUtils.createElement(
        "meta",
        {},
        {
          name: "viewport",
          content:
            "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
        }
      );
      document
        .querySelectorAll("meta[name='viewport']")
        .forEach((ele) => ele.remove());
      document.head.appendChild(meta);
    },
    /**
     * 选择视频清晰度
     */
    chooseVideoDefinition(mode = 0) {
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
            "lower_540_0",
          ],
          done: 1,
          gearClarity: "5",
          gearName: "高清",
          gearType: 1,
          qualityType: 1,
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
            "adapt_lower_540_1",
          ],
          done: 1,
          gearClarity: "4",
          gearName: "清晰",
          gearType: 2,
          qualityType: 15,
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
            "adapt_lower_540_1",
          ],
          done: 1,
          gearClarity: "3",
          gearName: "流畅",
          gearType: 3,
          qualityType: 28,
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
            "adapt_lower_540_1",
          ],
          done: 1,
          gearClarity: "2",
          gearName: "极速",
          gearType: 4,
          qualityType: 21,
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
            "adapt_lower_540_1",
          ],
          done: 1,
          gearClarity: "0",
          gearName: "智能",
          gearType: 0,
        },
      ];
      let choose = definition.find((item) => item.gearType === mode);
      function setStorage(value) {
        unsafeWindow.sessionStorage.setItem(Definition_Key, value);
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
     * 让下载按钮变成解析视频
     */
    parseVideo() {
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
            position: "center",
          },
          content: {
            text: contentHTML,
            html: true,
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
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
          `,
        });
      }
      DOMUtils.on(
        document,
        "click",
        'div[data-e2e="video-share-container"] div[data-inuser="false"] button + div',
        function (event) {
          let rectFiber = utils.getReactObj(
            event.target.parentElement
          ).reactFiber;
          if (!rectFiber) {
            Qmsg.error("获取rectFiber属性失败");
            return;
          }
          try {
            let playTotalAddr = [];
            let playAddr =
              rectFiber.return.memoizedProps.awemeInfo.video.playAddr;
            let playAddrH265 =
              rectFiber.return.memoizedProps.awemeInfo.video.playAddrH265;
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
          capture: true,
        }
      );
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      utils
        .waitNode(
          'xg-icon[data-e2e="xgplayer-page-full-screen"] .xgplayer-icon:has([d="M9.75 8.5a2 2 0 00-2 2v11a2 2 0 002 2h12.5a2 2 0 002-2v-11a2 2 0 00-2-2H9.75zM15 11.25h-3.75a1 1 0 00-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 01-1 1z"])'
        )
        .then((element) => {
          element.click();
        });
    },
  };

  /**
   * 直播画质
   * webcast_local_quality
   * + ld 标清
   * + sd 高清
   * + hd 超清
   * + origin 袁华
   *
   * 弹幕设置
   * DanmaSetting_GiftAndPackage
   * {
   *   "__tea_cache_tokens_随机4位数字["uuid"]_playRoom.split(",")[0]": {
   *        expired: Date.now(), # 过期时间
   *        giftOn: false, # 送礼信息
   *        packageOn: false, # 福袋口令
   *    }
   * }
   */
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
        this.shieldDanmuku();
      });
      PopsPanel.execMenu("live-unlockImageQuality", () => {
        this.unlockImageQuality();
      });
      this.chatRoom.init();
    },
    chatRoom: {
      init() {
        PopsPanel.execMenu("live-shieldChatRoom", () => {
          this.shieldChatRoom();
        });
        PopsPanel.execMenu("live-shielChatRoomVipSeats", () => {
          this.shielChatRoomVipSeats();
        });
      },
      /**
       * 【屏蔽】评论区
       */
      shieldChatRoom() {
        DouYinElement.addShieldStyle("#chatroom");
        GM_addStyle(`
        div[data-e2e="living-container"],
        div[data-e2e="living-container"] > div{
          margin-bottom: 0px !important;
        }`);
      },
      /**
       * 【屏蔽】评论区的贵宾席
       */
      shielChatRoomVipSeats() {
        DouYinElement.addShieldStyle(
          "#chatroom > div > div:has(#audiencePanelScrollId)"
        );
      },
    },
    /**
     * 自动进入网页全屏
     */
    autoEnterElementFullScreen() {
      utils
        .waitNode(
          'xg-icon[classname] > div > div:has(path[d="M9.75 8.5a2 2 0 00-2 2v11a2 2 0 002 2h12.5a2 2 0 002-2v-11a2 2 0 00-2-2H9.75zM15 11.25h-3.75a1 1 0 00-1 1V16h2v-2.75H15v-2zm5.75 9.5H17v-2h2.75V16h2v3.75a1 1 0 01-1 1z"])'
        )
        .then((element) => {
          element.click();
        });
    },
    /**
     * 【屏蔽】底部的礼物栏
     */
    shieldGiftColumn() {
      DouYinElement.addShieldStyle(
        'div[data-e2e="living-container"] >div> :last-child'
      );
    },
    /**
     * 【屏蔽】顶栏信息
     * 包括直播作者、右侧的礼物展馆
     */
    shieldTopToolBarInfo() {
      DouYinElement.addShieldStyle(
        'div[data-e2e="living-container"] > div > pace-island[id^="island_"]'
      );
    },
    /**
     * 【屏蔽】礼物特效
     */
    shieldGiftEffects() {
      DouYinElement.addShieldStyle(
        '.basicPlayer[data-e2e="basicPlayer"]  pace-island[id^="island_"]:has(>div>div>div)'
      );
    },
    /**
     * 【屏蔽】弹幕
     */
    shieldDanmuku() {
      DouYinElement.addShieldStyle("xg-danmu.xgplayer-danmu");
    },
    /**
     * 解锁画质选择
     *
     * 未登录情况下最高选择【高清】画质
     */
    unlockImageQuality() {
      DOMUtils.on(
        document,
        "click",
        'div[data-e2e="quality-selector"] > div',
        function (event) {
          utils.preventEvent(event);
          try {
            let reactObj = utils.getReactObj(event.target);
            let key = reactObj["reactFiber"]["key"];
            let parent = event.target.closest("div[data-index]");
            let parentReactObj = utils.getReactObj(parent);
            let current =
              parentReactObj["reactProps"]["children"]["ref"]["current"];
            log.info("当前选择的画质: " + key);
            log.info(["所有的画质: ", current.getCurrentQualityList()]);
            /* getCurrentQuality */
            /* getCurrentQualityList */
            /* setCurrentQuality */
            current.setCurrentQuality(key);
          } catch (error) {
            log.error(error);
            Qmsg.error("切换画质失败");
          }
        },
        {
          capture: true,
        }
      );
    },
  };

  /* ---------------------入口--------------------- */
  PopsPanel.initMenu();
  if (DouYinRouter.isLive()) {
    log.info("Router: 直播");
    DouYinLive.init();
  } else if (DouYinRouter.isVideo()) {
    log.info("Router: 推荐视频");
    PopsPanel.execMenu("shieldVideo", () => {
      DouYinShieldVideo.init();
    });
    DouYin.init();
  } else {
    log.error("未知router: " + window.location.hostname);
  }

  /* ---------------------入口--------------------- */
})();
