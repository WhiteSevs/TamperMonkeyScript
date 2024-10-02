// ==UserScript==
// @name         【移动端】微博优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.10.2
// @author       WhiteSevs
// @description  劫持自动跳转登录，修复用户主页正确跳转，伪装客户端，可查看名人堂日程表，解锁视频清晰度(1080p、2K、2K-60、4K、4K-60)
// @license      GPL-3.0-only
// @icon         https://favicon.yandex.net/favicon/v2/https://m.weibo.cn/?size=32
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        http*://m.weibo.cn/*
// @match        http*://huati.weibo.cn/*
// @match        http*://h5.video.weibo.com/*
// @match        http*://card.weibo.com/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.7.2/dist/index.umd.js
// @resource     ElementPlusResourceCSS  https://fastly.jsdelivr.net/npm/element-plus@2.7.2/dist/index.min.css
// @connect      m.weibo.cn
// @connect      www.weibo.com
// @connect      passport.weibo.com
// @grant        GM_addStyle
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

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const HttpxCookieManager = {
    $data: {
      /** 是否启用 */
      get enable() {
        return PopsPanel.getValue("httpx-use-cookie-enable");
      },
      /** 是否使用document.cookie */
      get useDocumentCookie() {
        return PopsPanel.getValue("httpx-use-document-cookie");
      },
      cookieRule: [
        {
          key: "httpx-cookie-weibo.com",
          hostname: /weibo.com/g
        }
      ]
    },
    /**
     * 补充cookie末尾分号
     */
    fixCookieSplit(str) {
      if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
        str += ";";
      }
      return str;
    },
    /**
     * 合并两个cookie
     */
    concatCookie(targetCookie, newCookie) {
      if (utils.isNull(targetCookie)) {
        return newCookie;
      }
      targetCookie = targetCookie.trim();
      newCookie = newCookie.trim();
      targetCookie = this.fixCookieSplit(targetCookie);
      if (newCookie.startsWith(";")) {
        newCookie = newCookie.substring(1);
      }
      return targetCookie.concat(newCookie);
    },
    /**
     * 处理cookie
     * @param details
     * @returns
     */
    handle(details) {
      if (details.fetch) {
        return;
      }
      if (!this.$data.enable) {
        return;
      }
      let ownCookie = "";
      let url = details.url;
      if (url.startsWith("//")) {
        url = window.location.protocol + url;
      }
      let urlObj = new URL(url);
      if (this.$data.useDocumentCookie && urlObj.hostname.endsWith(
        window.location.hostname.split(".").slice(-2).join(".")
      )) {
        ownCookie = this.concatCookie(ownCookie, document.cookie.trim());
      }
      for (let index = 0; index < this.$data.cookieRule.length; index++) {
        let rule = this.$data.cookieRule[index];
        if (urlObj.hostname.match(rule.hostname)) {
          let cookie = PopsPanel.getValue(rule.key);
          if (utils.isNull(cookie)) {
            break;
          }
          ownCookie = this.concatCookie(ownCookie, cookie);
        }
      }
      if (utils.isNotNull(ownCookie)) {
        if (details.headers && details.headers["Cookie"]) {
          details.headers.Cookie = this.concatCookie(
            details.headers.Cookie,
            ownCookie
          );
        } else {
          details.headers["Cookie"] = ownCookie;
        }
        log.info(["Httpx => 设置cookie:", details]);
      }
      if (details.headers && details.headers.Cookie != null && utils.isNull(details.headers.Cookie)) {
        delete details.headers.Cookie;
      }
    }
  };
  const _SCRIPT_NAME_ = "【移动端】微博优化";
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const DEBUG = false;
  log.config({
    debug: DEBUG,
    logMaxCount: 2e4,
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
  httpx.interceptors.request.use((data) => {
    HttpxCookieManager.handle(data);
    return data;
  });
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
  const WeiBoApi = {
    /**
     * 获取组件播放信息
     * @param oid 格式：xxxx:xxxxxxxxxxx
     */
    async component(oid) {
      let postParams = {
        page: "/tv/show/" + oid
      };
      let postData = {
        data: JSON.stringify({ Component_Play_Playinfo: { oid } })
      };
      let api = `https://www.weibo.com/tv/api/component?${utils.toSearchParamsStr(
      postParams
    )}`;
      let postResp = await httpx.post(api, {
        data: utils.toSearchParamsStr(postData),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded",
          Host: "www.weibo.com",
          Origin: "https://www.weibo.com",
          "Page-Referer": postParams.page,
          Referer: "https://www.weibo.com" + postParams.page,
          "User-Agent": utils.getRandomPCUA()
        }
      });
      if (!postResp.status) {
        return;
      }
      let data = utils.toJSON(postResp.data.responseText);
      if (data["code"] !== "100000") {
        Qmsg.error("获取播放信息失败");
        return;
      }
      let Component_Play_Playinfo = data["data"]["Component_Play_Playinfo"];
      return Component_Play_Playinfo;
    }
  };
  const VueUtils = {
    /**
     * 获取vue实例
     * @param element
     * @returns
     */
    getVue(element) {
      if (element == null) {
        return;
      }
      return element["__vue__"] || element["__Ivue__"] || element["__IVue__"];
    },
    /**
     * 等待vue属性并进行设置
     */
    waitVuePropToSet($target, needSetList) {
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
      if (Array.isArray(needSetList)) {
        needSetList.forEach((needSetOption) => {
          if (typeof needSetOption.msg === "string") {
            log.info(needSetOption.msg);
          }
          function checkVue() {
            let target = getTarget();
            if (target == null) {
              return false;
            }
            let vueObj = VueUtils.getVue(target);
            if (vueObj == null) {
              return false;
            }
            let needOwnCheck = needSetOption.check(vueObj);
            return Boolean(needOwnCheck);
          }
          utils.waitVueByInterval(
            () => {
              return getTarget();
            },
            checkVue,
            250,
            1e4
          ).then((result) => {
            if (!result) {
              if (typeof needSetOption.close === "function") {
                needSetOption.close();
              }
              return;
            }
            let target = getTarget();
            let vueObj = VueUtils.getVue(target);
            if (vueObj == null) {
              return;
            }
            needSetOption.set(vueObj);
          });
        });
      } else {
        this.waitVuePropToSet($target, [needSetList]);
      }
    }
  };
  const VideoQualityMap_Mobile = {
    "流畅 360P": {
      label: "流畅",
      sign: 1,
      name: "mp4_ld_mp4"
    },
    "标清 480P": {
      label: "标清",
      sign: 2,
      name: "mp4_hd_mp4"
    },
    "高清 720P": {
      label: "高清",
      sign: 3,
      name: "mp4_720p_mp4"
    }
  };
  const VideoQualityMap_PC = {
    "高清 1080P": {
      label: "超清",
      sign: 4,
      name: "mp4_1080p_mp4"
    },
    "超清 2K": {
      label: "2K",
      sign: 5,
      name: "mp4_1440p_mp4"
    },
    "超清 2K60": {
      label: "2K-60",
      sign: 6,
      name: "mp4_1440p_60fps_mp4"
    },
    "超清 4K": {
      label: "4K",
      sign: 7,
      name: "mp4_2160p_mp4"
    },
    "超清 4K60": {
      label: "4K-60",
      sign: 7,
      name: "mp4_2160p_60fps_mp4"
    }
  };
  const VideoQualityMap = {
    ...VideoQualityMap_Mobile,
    ...VideoQualityMap_PC
  };
  class WeiBoUnlockQuality {
    constructor() {
      __publicField(this, "$src", VideoQualityMap_PC);
      __publicField(this, "$data", {
        newQualityNameList: [],
        videoQualityMap: new utils.Dictionary()
      });
      this.$data.newQualityNameList = [];
      this.$data.newQualityNameList.push(...Object.keys(this.$src));
    }
    /**
     * 锁定视频清晰度
     */
    lockVideoQuality() {
      let that = this;
      log.info("锁定视频清晰度");
      VueUtils.waitVuePropToSet(".video-player .mwb-video", [
        {
          msg: "等待获取属性 __vue__.player.controlBar.addChild",
          check(vueObj) {
            return typeof vueObj.player.controlBar.addChild === "function";
          },
          set(vueObj) {
            let oldAddChild = vueObj.player.controlBar.addChild;
            let userSetQuality = PopsPanel.getValue(
              "weibo-common-lockVideoQuality"
            );
            let userSetQualitySign = -1;
            Object.keys(VideoQualityMap).find((key) => {
              if (VideoQualityMap[key].name === userSetQuality) {
                userSetQualitySign = VideoQualityMap[key].sign;
                return true;
              } else {
                return false;
              }
            });
            let ownAddChild = function(...args) {
              let name = args[0];
              if (name === "qualityButton") {
                let qualityInfo = args[1];
                log.info(["锁定视频清晰度", qualityInfo]);
                qualityInfo["qualityList"].find((item) => {
                  if (!(item.sign === 1 && that.$data.videoQualityMap.has(item.src))) {
                    return false;
                  }
                  that.$data.videoQualityMap.get(item.src).forEach((videoQualityMapInfo) => {
                    let findIndex = qualityInfo["qualityList"].findIndex(
                      (qualityItem) => {
                        return qualityItem.sign === videoQualityMapInfo.sign;
                      }
                    );
                    if (findIndex === -1) {
                      let newQuality = {
                        label: videoQualityMapInfo.label,
                        sign: videoQualityMapInfo.sign,
                        src: videoQualityMapInfo.src
                      };
                      log.success(["添加新的视频清晰度", newQuality]);
                      qualityInfo["qualityList"].push(newQuality);
                    }
                  });
                  return true;
                });
                if (userSetQualitySign !== -1) {
                  let findSign = qualityInfo["qualityList"].find(
                    (item) => item["sign"] === userSetQualitySign
                  );
                  if (findSign) {
                    qualityInfo["defaultSign"] = userSetQualitySign;
                  } else {
                    let signList = qualityInfo["qualityList"].map((item) => {
                      if (item.sign <= userSetQualitySign) {
                        return item.sign;
                      }
                    }).filter((item) => item);
                    let userSetQualitySignLower = utils.getMaxValue(...signList);
                    qualityInfo["defaultSign"] = userSetQualitySignLower;
                    log.error(
                      "该清晰度不存在，选择比该画质低的清晰度：" + userSetQualitySignLower
                    );
                  }
                } else {
                  let signList = qualityInfo["qualityList"].map(
                    (item) => item.sign
                  );
                  let maxSign = utils.getMaxValue(...signList);
                  qualityInfo["defaultSign"] = maxSign;
                }
              }
              return oldAddChild.apply(this, args);
            };
            if (oldAddChild == ownAddChild) {
              return;
            }
            vueObj.player.controlBar.addChild = ownAddChild;
            log.success("成功覆盖属性 __vue__.player.controlBar.addChild");
          }
        }
      ]);
    }
    /**
     * 解锁更多视频清晰度
     */
    async unlockVideoHigherQuality() {
      let that = this;
      let taskQueue = [];
      document.querySelectorAll(
        ".weibo-media-wraps:not([data-unlock-quality])"
      ).forEach(($ele) => {
        $ele.setAttribute("data-unlock-quality", "true");
        let taskFunc = function() {
          return new Promise((resolve, reject) => {
            VueUtils.waitVuePropToSet($ele, [
              {
                check(vueObj) {
                  var _a2, _b, _c;
                  if (typeof ((_a2 = vueObj == null ? void 0 : vueObj.item) == null ? void 0 : _a2.type) === "string" && ((_b = vueObj == null ? void 0 : vueObj.item) == null ? void 0 : _b.type) !== "video") {
                    return true;
                  }
                  return typeof ((_c = vueObj == null ? void 0 : vueObj.item) == null ? void 0 : _c.object_id) === "string";
                },
                close() {
                  resolve();
                },
                async set(vueObj) {
                  try {
                    if (vueObj.item.type !== "video") {
                      return;
                    }
                    let object_id = vueObj.item.object_id;
                    let urls = vueObj.item.urls;
                    let componentInfo = await WeiBoApi.component(object_id);
                    if (!componentInfo) {
                      return;
                    }
                    if (!componentInfo.urls) {
                      log.error("获取组件信息urls失败");
                      Qmsg.error("获取组件信息urls失败");
                      return;
                    }
                    if (typeof componentInfo.urls !== "object") {
                      log.error("组件信息urls不是一个对象");
                      Qmsg.error("组件信息urls不是一个对象");
                      return;
                    }
                    if (!Object.keys(componentInfo.urls).length) {
                      log.error("组件信息urls为空");
                      Qmsg.error("组件信息urls为空");
                      return;
                    }
                    Object.keys(componentInfo.urls).forEach((srcName) => {
                      let src = componentInfo.urls[srcName];
                      if (that.$data.newQualityNameList.includes(srcName)) {
                        let mapInfo = {
                          label: that.$src[srcName].label,
                          name: that.$src[srcName].name,
                          sign: that.$src[srcName].sign,
                          src
                        };
                        let ld_mp4_url = urls["mp4_ld_mp4"];
                        if (ld_mp4_url) {
                          if (!that.$data.videoQualityMap.has(ld_mp4_url)) {
                            that.$data.videoQualityMap.set(ld_mp4_url, [
                              mapInfo
                            ]);
                          } else {
                            let currentMapInfo = that.$data.videoQualityMap.get(ld_mp4_url);
                            currentMapInfo.push(mapInfo);
                            that.$data.videoQualityMap.set(
                              ld_mp4_url,
                              currentMapInfo
                            );
                          }
                        }
                      }
                      if (srcName in VideoQualityMap) {
                        let newSrcInfo = VideoQualityMap[srcName];
                        if (newSrcInfo.name in urls) {
                        } else {
                          log.success(["新增清晰度：", newSrcInfo]);
                          urls[newSrcInfo.name] = src;
                        }
                      } else {
                        log.error(["视频清晰度映射尚未补充", { srcName, src }]);
                      }
                    });
                  } catch (error) {
                    log.error(error);
                  } finally {
                    resolve();
                  }
                }
              }
            ]);
          });
        };
        taskQueue.push(taskFunc);
      });
      for (const taskIterator of taskQueue) {
        taskIterator();
        await utils.sleep(100);
      }
    }
  }
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
  const UITextArea = function(text, key, defaultValue, description, changeCallBack, placeholder = "", disabled) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      description,
      placeholder,
      disabled,
      getValue() {
        let localValue = PopsPanel.getValue(key, defaultValue);
        return localValue;
      },
      callback(event, value) {
        PopsPanel.setValue(key, value);
      }
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const SettingUICommon = {
    id: "weibo-panel-config-currency",
    title: "通用",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            type: "deepMenu",
            text: "Toast配置",
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
          },
          {
            type: "deepMenu",
            text: "Cookie配置",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "httpx-use-cookie-enable",
                    false,
                    void 0,
                    "启用后，将根据下面的配置进行添加cookie"
                  ),
                  UISwitch(
                    "使用document.cookie",
                    "httpx-use-document-cookie",
                    false,
                    void 0,
                    "自动根据请求的域名来获取对应的cookie"
                  ),
                  UITextArea(
                    "weibo.com",
                    "httpx-cookie-weibo.com",
                    "",
                    void 0,
                    void 0,
                    "Cookie格式：xxx=xxxx;xxx=xxxx"
                  )
                ]
              }
            ]
          }
        ]
      },
      {
        type: "forms",
        text: "",
        forms: [
          {
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISelect(
                    "视频清晰度",
                    "weibo-common-lockVideoQuality",
                    "",
                    [
                      {
                        value: "",
                        text: "自动"
                      },
                      ...(() => {
                        let result = [];
                        Object.keys(VideoQualityMap).forEach((name) => {
                          let value = VideoQualityMap[name];
                          result.push({
                            value: value.name,
                            text: name
                          });
                        });
                        return result;
                      })()
                    ],
                    void 0,
                    "设置视频清晰度，默认自动，其它的清晰度将自动被删除(强制固定选择的清晰度)"
                  ),
                  UISwitch(
                    "解锁更多清晰度",
                    "weibo-common-unlockVideoHigherQuality",
                    true,
                    void 0,
                    "自动请求PC端的视频清晰度，如果请求成功，将解锁更多的清晰度，如1080p、2K、2K-60、4K-60"
                  ),
                  UISwitch(
                    "点击图片关闭预览",
                    "weibo-common-clickImageToClosePreviewImage",
                    false,
                    void 0,
                    "当点击图片进入预览模式时，再点击当前预览的图片可退出预览"
                  )
                ]
              },
              {
                text: "函数禁用",
                type: "forms",
                forms: [
                  UISwitch(
                    "navigator.serviceWorker.register",
                    "weibo_hijack_navigator_service_worker_register",
                    true,
                    void 0,
                    "禁止注册serviceWorker"
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
                    "weibo_remove_ads",
                    true,
                    void 0,
                    "包括【登录/注册按钮】、【小程序横幅推荐】"
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "weibo_shield_bottom_bar",
                    false,
                    void 0,
                    "屏蔽聊天/关注按钮"
                  )
                ]
              }
            ]
          },
          {
            text: "拦截跳转",
            type: "deepMenu",
            forms: [
              {
                text: "注意：已登录的情况下请关闭下面的功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "api/attitudes/create",
                    "weibo_apply_attitudes_create",
                    true
                  ),
                  UISwitch(
                    "点赞",
                    "weibo_apply_likes_update",
                    true,
                    void 0,
                    "未登录时，拦截点赞跳转登录"
                  ),
                  UISwitch(
                    "评论",
                    "weibo_apply_comments_create",
                    true,
                    void 0,
                    "未登录时，拦截评论跳转登录"
                  ),
                  UISwitch(
                    "关注",
                    "weibo_apply_friendships_create",
                    true,
                    void 0,
                    "未登录时，拦截关注跳转登录"
                  ),
                  UISwitch(
                    "转发",
                    "weibo_apply_statuses_repostTimeline",
                    true,
                    void 0,
                    "未登录时，拦截查看转发数据"
                  ),
                  UISwitch(
                    "回复",
                    "weibo_apply_comments_reply",
                    true,
                    void 0,
                    "未登录时，拦截回复跳转登录"
                  ),
                  UISwitch(
                    "优化跳转主页",
                    "weibo_apply_profile_info",
                    true,
                    void 0,
                    "未登录时，正确跳转至用户主页"
                  ),
                  UISwitch(
                    "下拉加载更多评论",
                    "weibo_apply_comments_hotflow",
                    true,
                    void 0,
                    "未登录时，拦截下拉加载更多评论跳转登录"
                  ),
                  UISwitch(
                    "楼中楼下拉加载更多评论",
                    "weibo_apply_comments_hotFlowChild",
                    true,
                    void 0,
                    "未登录时，拦截下拉加载更多评论跳转登录"
                  )
                ]
              }
            ]
          },
          {
            text: "网络请求",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "/api/config",
                    "weibo_request_api_config",
                    true,
                    void 0,
                    "Api为获取用户数据，未登录时伪装为已登录"
                  ),
                  UISwitch(
                    "/comments/hot",
                    "weibo_request_comments_hot",
                    true,
                    void 0,
                    "Api为获取评论数据，未登录时伪装为成功获取评论数据"
                  ),
                  UISwitch(
                    "/status/push",
                    "weibo_request_status_push",
                    true,
                    void 0,
                    "Api为获取顶部的热点新闻信息流，这里是直接清空json"
                  )
                ]
              }
            ]
          },
          {
            text: "Vue-Router路由",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "监听路由改变",
                    "weibo-listenRouterChange",
                    true,
                    void 0,
                    "监听路由改变，动态加载功能"
                  ),
                  UISwitch(
                    "修复用户主页正确跳转",
                    "weibo_router_profile_to_user_home",
                    true,
                    void 0,
                    "可以正确跳转至用户主页"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const SettingUIHuaTi = {
    id: "weibo-panel-config-huati",
    title: "话题",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "伪装微博客户端",
            "huati_weibo_masquerade_weibo_client_app",
            true,
            void 0,
            "可以隐藏底部的【在微博内打开】"
          )
        ]
      },
      {
        text: "网络请求(不一定能劫持到)",
        type: "forms",
        forms: [
          UISwitch(
            "/ajax/super/starschedule",
            "huati_weibo_get_more_celebrity_calendar_information",
            true,
            void 0,
            "Api为获取日程数据，开启后可获取正常日程数据"
          )
        ]
      }
    ]
  };
  const SettingUIVideo = {
    id: "weibo-panel-config-video",
    title: "视频",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISelect(
            "视频清晰度",
            "weibo-video-quality",
            "",
            [
              {
                value: "",
                text: "自动"
              },
              {
                value: "mp4_ld_mp4",
                text: "流畅360p"
              },
              {
                value: "mp4_hd_mp4",
                text: "标清480p"
              },
              {
                value: "mp4_720p_mp4",
                text: "高清720p"
              },
              {
                value: "mp4_1080p_mp4",
                text: "超清1080p"
              }
            ],
            void 0,
            "设置视频清晰度，默认自动，其它的清晰度将自动被删除(强制固定选择的清晰度)"
          ),
          UISwitch(
            "解锁1080p",
            "weibo-video-unlockVideo1080p",
            true,
            void 0,
            "请求PC端的视频1080p链接，开启该功能↑选择的1080p才会生效"
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】底部工具栏",
            "weibo_video_shield_bottom_toolbar",
            true
          ),
          UISwitch("【屏蔽】相关推荐", "weibo_video_shield_recommend", true),
          UISwitch("【屏蔽】热门评论", "weibo_video_shield_hot_comments", true)
        ]
      },
      {
        text: "webpack",
        type: "forms",
        forms: [
          UISwitch(
            "gotoApp",
            "weibo_video_webpack_gotoApp",
            true,
            void 0,
            "开启后阻止唤醒Scheme"
          )
        ]
      }
    ]
  };
  const SettingUIDetail = {
    id: "weibo-panel-config-detail",
    title: "正文",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "修改发布时间显示为绝对时间",
            "weibo-detail-setArticleAbsoluteTime",
            false,
            void 0,
            "该功能全局生效包括但不限于微博正文、首页等"
          )
        ]
      }
    ]
  };
  const SettingUISearch = {
    id: "weibo-panel-config-u",
    title: "搜索",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch("自动聚焦搜索框", "weibo-search-autoFocusSearchInput", void 0)
        ]
      }
    ]
  };
  const SettingUICardArticle = {
    id: "weibo-panel-config-card-article",
    title: "头条文章",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "自动展开全文",
            "card_weibo_com__autoExpandFullArticle",
            true,
            void 0,
            "自动展开全文，屏蔽展开按钮"
          ),
          UISwitch(
            "修复文章作者主页正确跳转",
            "card_weibo_com__repairArticleUserHomeJump",
            true,
            void 0,
            "避免跳转至用户主页时需登录"
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "【屏蔽】评论",
            "card_weibo_com__blockComment",
            false,
            void 0,
            "屏蔽评论区"
          )
        ]
      }
    ]
  };
  const SettingUIHome = {
    id: "weibo-panel-config-card-article",
    title: "首页",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISwitch(
            "新增超话Tab",
            "weibo-home-addSupertalkTab",
            false,
            void 0,
            "在首页添加超话Tab，方便快速查看超话"
          )
        ]
      },
      {
        text: "屏蔽",
        type: "forms",
        forms: [
          UISwitch(
            "屏蔽信息流广告",
            "weibo-home-blockArticleAds",
            true,
            void 0,
            '夹杂在文章中间的"微博广告"'
          ),
          UISwitch(
            "屏蔽消息数量",
            "weibo-home-blockMessageCount",
            false,
            void 0,
            "即登录后右上角的消息提示数"
          )
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
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    initExtensionsMenu() {
      if (!this.isTopWindow()) {
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
      let contentConfigList = this.getPanelContentConfig();
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
      if (!(typeof key === "string" || typeof key === "object" && Array.isArray(key))) {
        throw new TypeError("key 必须是字符串或者字符串数组");
      }
      let runKeyList = [];
      if (typeof key === "object" && Array.isArray(key)) {
        runKeyList = [...key];
      } else {
        runKeyList.push(key);
      }
      let value = void 0;
      for (let index = 0; index < runKeyList.length; index++) {
        const runKey = runKeyList[index];
        if (!this.$data.data.has(runKey)) {
          log.warn(`${key} 键不存在`);
          return;
        }
        let runValue = PopsPanel.getValue(runKey);
        if (isReverse) {
          runValue = !runValue;
        }
        if (!runValue) {
          break;
        }
        value = runValue;
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
        isMobile: this.isMobile(),
        width: this.getWidth(),
        height: this.getHeight(),
        drag: true,
        only: true,
        style: (
          /*css*/
          `
			aside.pops-panel-aside{
			  width: auto !important;
			}
			.pops-panel-textarea textarea{
				height: 100px;
			}
			`
        )
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
        SettingUICommon,
        SettingUIHome,
        SettingUIDetail,
        // SettingUIUserHome,
        SettingUISearch,
        SettingUIHuaTi,
        SettingUIVideo,
        SettingUICardArticle
      ];
      return configList;
    }
  };
  const blockAdsCSS$1 = "/* 底部中间的 登录/注册按钮 */\r\n#app div.main-wrap div.login-box,\r\n /* 主内容底部的小程序横幅推荐 */\r\n #app > div.lite-page-wrap > div > div.main > div > div.wrap,\r\n /* 底部悬浮的在微博内打开 */\r\n #app .woo-frame.blog-config-page div.weibo-btn-box,\r\n /* 顶部的新闻信息流 */\r\n #app .woo-frame div.woo-panel-container.news-banner {\r\n	display: none !important;\r\n}\r\n";
  let _ajaxHooker_ = null;
  const WeiBoNetWorkHook = {
    get ajaxHooker() {
      if (_ajaxHooker_ == null) {
        log.info("启用ajaxHooker拦截网络");
        _ajaxHooker_ = utils.ajaxHooker();
        _ajaxHooker_.protect();
      }
      return _ajaxHooker_;
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
      domUtils.ready(() => {
        document.head.appendChild($link);
      });
    },
    /**
     * 将url修复，例如只有search的链接修复为
     * @param url 需要修复的链接
     * @example
     * 修复前：`/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`//xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
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
    },
    /**
     * http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：
     * 修复后：
     * @example
     * 修复前：
     * 修复后：
     */
    fixHttps(url) {
      if (url.startsWith("https://")) {
        return url;
      }
      if (!url.startsWith("http://")) {
        return url;
      }
      let urlObj = new URL(url);
      urlObj.protocol = "https:";
      return urlObj.toString();
    }
  };
  const WeiBoHook = {
    /**
     * 劫持Function.prototype.apply;
     */
    hookApply() {
      log.info("劫持Function.prototype.apply");
      let originApply = _unsafeWindow.Function.prototype.apply;
      _unsafeWindow.Function.prototype.apply = function(...args) {
        var _a2, _b;
        if (args.length !== 2) {
          return originApply.call(this, ...args);
        }
        if (args.length === 2 && !Array.isArray(args[1])) {
          return originApply.call(this, ...args);
        }
        if (typeof args[1][0] !== "string") {
          return originApply.call(this, ...args);
        }
        const ApiPath = args[1][0];
        const ApiSearchParams = (_b = (_a2 = args[1]) == null ? void 0 : _a2[1]) == null ? void 0 : _b["params"];
        if (ApiPath === "api/attitudes/create" && PopsPanel.getValue("weibo_apply_attitudes_create")) {
          log.success("拦截跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/likes/update" && PopsPanel.getValue("weibo_apply_likes_update")) {
          log.success("拦截点赞跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/comments/create" && PopsPanel.getValue("weibo_apply_comments_create")) {
          log.success("拦截评论跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/friendships/create" && PopsPanel.getValue("weibo_apply_friendships_create")) {
          log.success("拦截关注跳转登录");
          return new Promise((resolve) => {
            resolve({
              data: {}
            });
          });
        } else if (ApiPath === "api/comments/reply" && PopsPanel.getValue("weibo_apply_comments_reply")) {
          log.success("拦截回复跳转登录");
          return new Promise((resolve, reject) => {
            resolve({
              data: {
                ok: 200
              }
            });
          });
        } else if (ApiPath.startsWith("profile/info") && PopsPanel.getValue("weibo_apply_profile_info")) {
          log.success(["优化跳转xx微博主页", ApiSearchParams]);
          let uidHomeUrl = `https://weibo.com/${ApiSearchParams["uid"]}`;
          log.success("跳转微博主页：" + uidHomeUrl);
          window.location.href = uidHomeUrl;
          return null;
        } else if (ApiPath === "comments/hotflow" && PopsPanel.getValue("weibo_apply_comments_hotflow")) {
          if (!("id" in ApiSearchParams && "max_id_type" in ApiSearchParams && "mid" in ApiSearchParams) || "id" in ApiSearchParams && "max_id" in ApiSearchParams && "max_id_type" in ApiSearchParams && "mid" in ApiSearchParams) {
            log.success(["拦截下拉加载更多评论跳转登录", ApiSearchParams]);
            return new Promise((resolve) => {
              resolve({
                ok: 1,
                data: {
                  data: [],
                  total_number: 0
                }
              });
            });
          }
        } else if (ApiPath === "comments/hotFlowChild" && PopsPanel.getValue("weibo_apply_comments_hotFlowChild")) {
          if ("max_id" in ApiSearchParams && ApiSearchParams["max_id"] !== 0) {
            log.success([
              "拦截评论中的评论下拉加载更多评论跳转登录",
              ApiSearchParams
            ]);
            return new Promise((resolve) => {
              resolve({
                data: {
                  ok: 1,
                  data: [],
                  rootComment: [],
                  total_number: 0
                }
              });
            });
          }
        } else if (ApiPath === "api/statuses/repostTimeline" && PopsPanel.getValue("weibo_apply_statuses_repostTimeline")) {
          log.success(["拦截查看转发数据，因为需登录", ApiSearchParams]);
          return new Promise((resolve) => {
            resolve({
              data: {
                ok: 1,
                data: {
                  data: [],
                  total_number: 0
                }
              }
            });
          });
        } else ;
        return originApply.call(this, ...args);
      };
    },
    /**
     * 拦截网络
     */
    hookNetWork() {
      WeiBoNetWorkHook.ajaxHooker.hook(function(request) {
        let requestUrl = CommonUtils.fixUrl(request.url);
        log.info("[ajaxHookr] " + requestUrl);
        if (requestUrl.startsWith("https://m.weibo.cn/api/config") && PopsPanel.getValue("weibo_request_api_config")) {
          request.response = function(originResponse) {
            let originResponseData = utils.toJSON(originResponse.responseText);
            if (!originResponseData.data.login) {
              log.error("由于未登录，伪装为已登录状态");
              originResponseData.data.login = true;
              originResponseData.data.uid = "";
              originResponseData.preferQuickapp = 0;
              Reflect.deleteProperty(originResponseData.data, "loginUrl");
              Reflect.deleteProperty(originResponseData.data, "wx_callback");
              Reflect.deleteProperty(originResponseData.data, "wx_authorize");
              Reflect.deleteProperty(
                originResponseData.data,
                "passport_login_url"
              );
              originResponse.responseText = JSON.stringify(originResponseData);
            }
          };
        } else if (requestUrl.startsWith("https://m.weibo.cn/comments/hot") && PopsPanel.getValue("weibo_request_comments_hot")) {
          request.response = function(originResponse) {
            let originResponseData = utils.toJSON(originResponse.responseText);
            if (originResponseData.ok !== 1) {
              log.error([
                "由于尚未登录，获取不到更多评论数据",
                originResponseData
              ]);
              originResponseData = {
                ok: 1
              };
              originResponse.responseText = JSON.stringify(originResponseData);
            }
          };
        } else if (requestUrl.startsWith("https://m.weibo.cn/status/push?") && PopsPanel.getValue("weibo_request_status_push")) {
          request.response = function(originResponse) {
            let originResponseData = utils.toJSON(originResponse.responseText);
            Reflect.set(originResponse, "json", {});
            log.info([`重构/status/push响应`, originResponseData]);
            originResponse.responseText = JSON.stringify(originResponseData);
          };
        }
      });
    },
    /**
     * 劫持webpack
     * @param webpackName 当前全局变量的webpack名
     * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    hookWebpack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function(...args) {
            let _mainCoreData = args[0][0];
            if (mainCoreData == _mainCoreData || Array.isArray(mainCoreData) && Array.isArray(_mainCoreData) && JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData)) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function(..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        }
      });
    },
    /**
     * 拦截Vue Router跳转
     */
    hookVueRouter() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "等待获取属性 __vue__.$router",
          check(vueObj) {
            var _a2;
            return typeof ((_a2 = vueObj == null ? void 0 : vueObj.$router) == null ? void 0 : _a2.push) === "function";
          },
          set(vueObj) {
            log.success("拦截Vue路由跳转");
            vueObj.$router.beforeEach(
              (to, from, next) => {
                var _a2;
                if (to.name === "profile" && PopsPanel.getValue("weibo_router_profile_to_user_home")) {
                  let uid = (_a2 = to == null ? void 0 : to.params) == null ? void 0 : _a2.uid;
                  if (uid == null) {
                    log.error("获取uid失败");
                    Qmsg.error("获取uid失败");
                    return;
                  }
                  log.success(`修复跳转${uid}微博主页`);
                  let uidHomeUrl = `https://m.weibo.cn/u/${uid}`;
                  window.location.href = uidHomeUrl;
                  return;
                }
                next();
              }
            );
            vueObj.$router.afterEach((to, from) => {
              PopsPanel.execMenu("weibo-listenRouterChange", () => {
                log.info("路由更新，重载功能");
                WeiBo.init();
              });
            });
          }
        }
      ]);
    },
    /**
     * 禁止Service Worker注册
     */
    hookServiceWorkerRegister() {
      log.info("hook => navigator.serviceWorker.register");
      _unsafeWindow.Object.defineProperty(
        _unsafeWindow.navigator.serviceWorker,
        "register",
        {
          get() {
            return function(...args) {
              log.success(["劫持navigator.serviceWorker.register: ", args]);
            };
          }
        }
      );
    }
  };
  const WeiBoRouter = {
    /**
     * 移动端微博
     * @returns
     */
    isMWeiBo() {
      return globalThis.location.hostname === "m.weibo.cn";
    },
    /**
     * 移动端微博-首页
     */
    isMWeiBoHome() {
      return this.isMWeiBo() && globalThis.location.pathname === "/";
    },
    /**
     * 移动端微博-帖子
     */
    isMWeiBo_detail() {
      return this.isMWeiBo() && globalThis.location.pathname.startsWith("/detail/");
    },
    /**
     * 移动端微博-用户主页
     */
    isMWeiBo_userHome() {
      return this.isMWeiBo() && globalThis.location.pathname.startsWith("/u/");
    },
    /**
     * 移动端微博-搜索
     */
    isMWeiBo_search() {
      return this.isMWeiBo() && globalThis.location.pathname.startsWith("/search");
    },
    /**
     * 话题
     */
    isHuaTi() {
      return globalThis.location.hostname === "huati.weibo.cn";
    },
    /**
     * 视频页
     */
    isVideo() {
      return globalThis.location.hostname === "h5.video.weibo.com";
    },
    /**
     * 头条
     */
    isCard() {
      return globalThis.location.hostname === "card.weibo.com";
    },
    /**
     * 头条文章
     */
    isCardArticle() {
      return this.isCard() && globalThis.location.pathname.startsWith("/article/");
    }
  };
  const WeiBoHuaTi = {
    init() {
      PopsPanel.execMenu("huati_weibo_masquerade_weibo_client_app", () => {
        this.isWeibo();
      });
      PopsPanel.execMenuOnce(
        "huati_weibo_get_more_celebrity_calendar_information",
        () => {
          this.hookNetWorkWithGetMoreCelebrityCalendarInformation();
        }
      );
    },
    /**
     * 伪装微博
     */
    isWeibo() {
      log.info("伪装微博");
      VueUtils.waitVuePropToSet("#loadMore", [
        {
          msg: "等待设置属性 __vue__.isWeibo",
          check(vueObj) {
            return typeof vueObj.isWeibo === "boolean";
          },
          set(vueObj) {
            vueObj.isWeibo = true;
            log.success("成功设置属性 __vue__.isWeibo=true");
          }
        }
      ]);
    },
    /**
     * 劫持请求让获取更多名人日历信息
     */
    hookNetWorkWithGetMoreCelebrityCalendarInformation() {
      WeiBoNetWorkHook.ajaxHooker.hook((request) => {
        log.info(["ajaxHookr: ", request.url]);
        if (!request.url.startsWith("/ajax/super/starschedule?")) {
          return;
        }
        request.response = async (res) => {
          let getResp = await httpx.get(request.url, {
            headers: {
              Host: globalThis.location.hostname,
              Accept: "application/json, text/plain, */*",
              "X-Requested-With": "XMLHttpRequest",
              "sec-ch-ua-mobile": "?1",
              "User-Agent": utils.getRandomAndroidUA() + " Weibo (__weibo__)",
              "sec-ch-ua-platform": "Android",
              "Sec-Fetch-Site": "same-origin",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Dest": "empty",
              Referer: globalThis.location.href,
              "Accept-Encoding": "gzip, deflate, br",
              "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
            }
          });
          res.response = getResp.data.responseText;
          res.responseText = getResp.data.responseText;
        };
      });
    }
  };
  const WeiBoVideoHook = {
    init() {
      this.hookWebpack();
    },
    /**
     * 劫持webpack
     */
    hookWebpack() {
      log.info("劫持webpack");
      WeiBoHook.hookWebpack("webpackJsonp", "chunk-common", (webpackExports) => {
        if (typeof (webpackExports == null ? void 0 : webpackExports.exports) === "object" && typeof webpackExports.exports["a"] === "object" && typeof webpackExports.exports["a"]["gotoApp"] === "function" && PopsPanel.getValue("weibo_video_webpack_gotoApp")) {
          log.success(["成功劫持webpack调用函数", webpackExports]);
          webpackExports.exports["a"]["gotoApp"] = function(...args) {
            log.info(["阻止唤醒App：", args]);
          };
          return webpackExports;
        }
      });
    }
  };
  const WeiBoVideo = {
    init() {
      PopsPanel.onceExec("weibo-video-init-hook", () => {
        WeiBoVideoHook.init();
      });
      PopsPanel.execMenuOnce("weibo_video_shield_bottom_toolbar", () => {
        return this.shieldBottomToolBar();
      });
      PopsPanel.execMenuOnce("weibo_video_shield_hot_comments", () => {
        return this.shieldHotComments();
      });
      PopsPanel.execMenuOnce("weibo_video_shield_recommend", () => {
        return this.shieldRecommend();
      });
    },
    /** 【屏蔽】底部工具栏 */
    shieldBottomToolBar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtils.addBlockCSS(".woo-toolBar");
    },
    /** 【屏蔽】相关推荐 */
    shieldRecommend() {
      log.info("【屏蔽】相关推荐");
      return CommonUtils.addBlockCSS(
        '#app .woo-panel[class*="Playdetail_card_"]:nth-child(2)'
      );
    },
    /** 【屏蔽】热门评论 */
    shieldHotComments() {
      log.info("【屏蔽】热门评论");
      return CommonUtils.addBlockCSS(
        '#app .woo-panel[class*="Playdetail_card_"]:nth-child(3)'
      );
    }
  };
  const blockAdsCSS = "/* 文章内容的底部的广告 */\r\n#app .ad-wrap {\r\n	display: none !important;\r\n}\r\n";
  const WeiBoDetail = {
    init() {
      PopsPanel.onceExec("weibo-detail-blockAds", () => {
        return addStyle(blockAdsCSS);
      });
    },
    /**
     * 设置正文显示的时间为绝对时间
     */
    setArticleAbsoluteTime() {
      utils.mutationObserver(document.documentElement, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          Array.from(
            document.querySelectorAll(
              ".card.m-panel .m-text-cut .time:not([data-gm-absolute-time])"
            )
          ).forEach(($time) => {
            var _a2;
            let $card = $time.closest(".card.m-panel");
            let cardVueIns = VueUtils.getVue($card);
            if (!cardVueIns) {
              return;
            }
            let createTime = (_a2 = cardVueIns == null ? void 0 : cardVueIns.item) == null ? void 0 : _a2.created_at;
            if (typeof createTime !== "string") {
              return;
            }
            if ($time.innerText.includes("编辑")) {
              return;
            }
            let createTimeObj = new Date(createTime);
            let formatCreateTime = utils.formatTime(
              createTimeObj,
              "yyyy-MM-dd HH:mm:ss"
            );
            $time.innerText = formatCreateTime;
            $time.setAttribute("data-gm-absolute-time", "true");
          });
        }
      });
    }
  };
  const WeiBoSearch = {
    init() {
      domUtils.ready(() => {
        PopsPanel.execMenu("weibo-search-autoFocusSearchInput", () => {
          this.autoFocusSearchInput();
        });
      });
    },
    /**
     * 自动聚焦搜索框
     */
    autoFocusSearchInput() {
      log.info(`自动聚焦搜索框`);
      utils.waitNode(`.ntop-nav input[type="search"]`).then(($input) => {
        if (!$input) {
          log.error("未找到搜索框");
          Qmsg.error("未找到搜索框");
          return;
        }
        let searchParams = new URLSearchParams(window.location.search);
        if (!searchParams.has("containerid")) {
          log.warn("不存在containerid参数");
          return;
        }
        let containeridSearchParams = new URLSearchParams(
          searchParams.get("containerid")
        );
        if (containeridSearchParams.has("q")) {
          log.warn("containerid参数中存在q参数，是搜索结果页面");
          return;
        }
        log.success(
          "containerid参数中不存在q参数，所以是主搜索页面，聚焦输入框"
        );
        setTimeout(() => {
          $input.focus();
        }, 250);
      });
    }
  };
  const WeiBoCardArticle = {
    init() {
      PopsPanel.execMenuOnce("card_weibo_com__autoExpandFullArticle", () => {
        return this.autoExpandFullArticle();
      });
      PopsPanel.execMenuOnce("card_weibo_com__blockComment", () => {
        return this.blockComment();
      });
      PopsPanel.execMenuOnce("card_weibo_com__repairArticleUserHomeJump", () => {
        this.repairArticleUserHomeJump();
      });
    },
    /**
     * 自动展开全文
     */
    autoExpandFullArticle() {
      log.info("自动展开全文");
      return [
        addStyle(
          /*css*/
          `
			.m-container-max .f-art,
			.m-container-max .art-con-new{
				height: unset !important;
				overflow: unset !important;
			}    
			`
        ),
        CommonUtils.addBlockCSS(".m-container-max .f-art-opt")
      ];
    },
    /**
     * 屏蔽评论
     */
    blockComment() {
      log.info("【屏蔽】评论");
      return CommonUtils.addBlockCSS(".m-container-max .m-panel1");
    },
    /**
     * 修复文章用户主页跳转
     */
    repairArticleUserHomeJump() {
      log.info("修复文章用户主页跳转");
      domUtils.on(
        document,
        "click",
        ".m-feed .f-art-user-v2",
        (event) => {
          let $click = event.target;
          let jQueryEventName = Object.keys($click).find(
            (key) => key.startsWith("jQuery")
          );
          if (!jQueryEventName) {
            return;
          }
          utils.preventEvent(event);
          let jQueryEvent = $click[jQueryEventName];
          let data = jQueryEvent["events"]["click"][0]["data"];
          log.success(["跳转信息：", data]);
          let url = data["url"] || data["target_url"];
          window.open(url, "_blank");
        },
        {
          capture: true
        }
      );
    }
  };
  const WeiBoHome = {
    init() {
      PopsPanel.execMenuOnce("weibo-home-blockArticleAds", () => {
        this.blockArticleAds();
      });
      PopsPanel.execMenuOnce("weibo-home-blockMessageCount", () => {
        return this.blockMessageCount();
      });
      domUtils.ready(() => {
        PopsPanel.execMenuOnce("weibo-home-addSupertalkTab", () => {
          this.addSupertalkTab();
        });
      });
    },
    /**
     * 屏蔽隐藏在card内的微博广告
     */
    blockArticleAds() {
      VueUtils.waitVuePropToSet(".main-wrap", {
        check(vueIns) {
          return typeof (vueIns == null ? void 0 : vueIns.$watch) === "function";
        },
        set(vueIns) {
          vueIns.$watch(
            "list_all",
            function(newVal, oldVal) {
              var _a2;
              for (let index = 0; index < newVal.length; index++) {
                const card = newVal[index];
                let cardInfo = card == null ? void 0 : card.mblog;
                if (!cardInfo) {
                  continue;
                }
                let id = cardInfo.id;
                let ad_state = cardInfo == null ? void 0 : cardInfo.ad_state;
                let cardText = cardInfo == null ? void 0 : cardInfo.text;
                (_a2 = cardInfo == null ? void 0 : cardInfo.page_info) == null ? void 0 : _a2.page_title;
                if (ad_state) {
                  newVal.splice(index, 1);
                  index--;
                  log.info(`移除广告url：https://m.weibo.cn/detail/` + id);
                  log.info(`移除广告card：` + cardText);
                }
              }
            },
            {
              immediate: true
            }
          );
        }
      });
      return;
    },
    /**
     * 屏蔽右上角的信息红点（登录后）
     */
    blockMessageCount() {
      return CommonUtils.addBlockCSS(".nav-right .m-bubble");
    },
    /**
     * 新增Tab - 超话
     */
    addSupertalkTab() {
      VueUtils.waitVuePropToSet(".main-top", {
        check(vueObj) {
          return Array.isArray(vueObj == null ? void 0 : vueObj.tabs);
        },
        set(vueObj) {
          var _a2;
          log.success(`添加顶部Tab - 超话`);
          (_a2 = vueObj == null ? void 0 : vueObj.tabs) == null ? void 0 : _a2.push({
            children: [
              {
                api: "api/container/getIndex?containerid=100803",
                gid: "100803",
                name: "超话社区",
                type: 1
              }
            ]
          });
          VueUtils.waitVuePropToSet(".main-wrap", {
            check(vueIns) {
              return typeof (vueIns == null ? void 0 : vueIns.$watch) === "function";
            },
            set(vueIns) {
              vueIns.$watch("list_all", function(newVal, oldVal) {
                var _a3;
                if (this.cur_group["gid"] !== "100803") {
                  return;
                }
                let cur_length = this.list_cur.length;
                this.list_all.length;
                let slice_list = this.list_all.slice(cur_length);
                for (let index = 0; index < slice_list.length; index++) {
                  const slice_item = slice_list[index];
                  slice_item["hei"] = 1345;
                }
                let last_feed_id = (_a3 = slice_list[slice_list.length - 1]) == null ? void 0 : _a3["feed_id"];
                if (last_feed_id != null) {
                  this.max = last_feed_id;
                  this.since = last_feed_id;
                }
                this.list_cur = this.list_cur.concat(slice_list);
                const updateFirstScroll = () => {
                  var _a4;
                  if ((_a4 = this.$refs) == null ? void 0 : _a4.cont) {
                    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
                    this.first_scroll = this.$refs.cont.offsetHeight - clientHeight * 1.4;
                  }
                };
                let intervalCount = 0;
                let intervalId = setInterval(() => {
                  if (intervalCount > 50) {
                    clearInterval(intervalId);
                    return;
                  }
                  intervalCount++;
                  updateFirstScroll();
                }, 50);
              });
            }
          });
        }
      });
    }
  };
  const WeiBo = {
    $data: {
      weiBoUnlockQuality: new WeiBoUnlockQuality()
    },
    init() {
      PopsPanel.execMenuOnce(
        "weibo_hijack_navigator_service_worker_register",
        () => {
          WeiBoHook.hookServiceWorkerRegister();
        }
      );
      PopsPanel.execMenuOnce("weibo-common-clickImageToClosePreviewImage", () => {
        this.clickImageToClosePreviewImage();
      });
      if (WeiBoRouter.isHuaTi()) {
        log.info("Router: 话题");
        WeiBoHuaTi.init();
      } else if (WeiBoRouter.isMWeiBo()) {
        log.info("Router: 移动端微博");
        PopsPanel.onceExec("weibo-m-init", () => {
          WeiBoHook.hookNetWork();
          WeiBoHook.hookApply();
          WeiBoHook.hookVueRouter();
        });
        PopsPanel.execMenuOnce("weibo_remove_ads", () => {
          return this.blockAds();
        });
        PopsPanel.execMenuOnce("weibo_shield_bottom_bar", () => {
          return this.shieldBottomBar();
        });
        this.$data.weiBoUnlockQuality.lockVideoQuality();
        domUtils.ready(() => {
          PopsPanel.execMenuOnce("weibo-common-unlockVideoHigherQuality", () => {
            this.unlockVideoHigherQuality();
          });
          PopsPanel.execMenuOnce("weibo-detail-setArticleAbsoluteTime", () => {
            WeiBoDetail.setArticleAbsoluteTime();
          });
        });
        if (WeiBoRouter.isMWeiBoHome()) {
          log.info(`Router: 移动端微博首页`);
          WeiBoHome.init();
        } else if (WeiBoRouter.isMWeiBo_detail()) {
          log.info("Router: 移动端微博帖子");
          WeiBoDetail.init();
        } else if (WeiBoRouter.isMWeiBo_userHome()) {
          log.info("Router: 移动端微博用户主页");
        } else if (WeiBoRouter.isMWeiBo_search()) {
          log.info("Router: 移动端微博搜索");
          WeiBoSearch.init();
        } else {
          log.error("Router: 未适配的移动端微博链接 => " + window.location.href);
        }
      } else if (WeiBoRouter.isVideo()) {
        log.info("Router: 视频页");
        WeiBoVideo.init();
      } else if (WeiBoRouter.isCard()) {
        log.info("Router: 头条");
        if (WeiBoRouter.isCardArticle()) {
          log.info("Router: 头条文章");
          WeiBoCardArticle.init();
        } else {
          log.error("Router: 未适配头条 => " + window.location.href);
        }
      } else {
        log.error("Router: 未适配 => " + window.location.href);
      }
    },
    /**
     * 屏蔽 广告
     */
    blockAds() {
      log.info(`屏蔽 广告`);
      return addStyle(blockAdsCSS$1);
    },
    /**
     * 【屏蔽】底部工具栏
     */
    shieldBottomBar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtils.addBlockCSS(
        "#app div.m-tab-bar.m-bar-panel.m-container-max"
      );
    },
    /**
     * 解锁微博视频高画质
     **/
    unlockVideoHigherQuality() {
      let lock = new utils.LockFunction(() => {
        this.$data.weiBoUnlockQuality.unlockVideoHigherQuality();
      }, 15);
      utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          lock.run();
        }
      });
    },
    /**
     * 设置监听事件，监听点击预览中的图片，从而关闭预览
     */
    clickImageToClosePreviewImage() {
      let selectorList = [".pswp .pswp__item img", ".pswp .pswp__item video"];
      selectorList.forEach((selector) => {
        domUtils.on(document, "click", selector, (event) => {
          let $closeButton = document.querySelector(
            ".pswp .pswp__button--close"
          );
          if ($closeButton) {
            $closeButton.click();
          } else {
            log.warn("未找到关闭预览按钮，使用history.back()");
            window.history.back();
          }
        });
      });
    }
  };
  PopsPanel.init();
  WeiBo.init();

})(Qmsg, DOMUtils, Utils, pops);