// ==UserScript==
// @name         GreasyFork优化
// @namespace    https://greasyfork.org/zh-CN/scripts/475722
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2024.3.13.19
// @description  自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮
// @author       WhiteSevs
// @license      MIT
// @icon         data:image/png;base64,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
// @match        *://greasyfork.org/*
// @run-at       document-start
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_info
// @grant        unsafeWindow
// @connect      greasyfork.org
// @require      https://update.greasyfork.org/scripts/449471/1305484/Viewer.js
// @require      https://update.greasyfork.org/scripts/462234/1322684/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1342149/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1342261/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1342148/DOMUtils.js
// ==/UserScript==

(function () {
  if (typeof unsafeWindow === "undefined") {
    unsafeWindow = globalThis;
  }
  /* -----------------↓公共配置↓----------------- */
  /**
   * @type {import("../库/Qmsg")}
   */
  const Qmsg = window.Qmsg;
  /**
   * @type {import("../库/pops")}
   */
  const pops = window.pops;
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * @type {import("../库/DOMUtils")}
   */
  const DOMUtils = window.DOMUtils.noConflict();
  Qmsg.config({
    position: "top",
    html: true,
    maxNums: 4,
    autoClose: true,
    showClose: false,
    showReverse: false,
  });
  const log = new utils.Log(GM_info, unsafeWindow.console || console);
  log.config({
    debug: false,
  });
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort() {
      Qmsg.error("请求被取消");
    },
    ontimeout() {
      Qmsg.error("请求超时");
    },
    onerror(response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror", response]);
    },
  });
  /* -----------------↑公共配置↑----------------- */

  /* -----------------↓函数区域↓----------------- */
  /**
   * GreasyFork的api
   */
  const GreasyforkApi = {
    /**
     * 获取代码搜索地址
     * @param {string} url
     * @returns {string}
     */
    getCodeSearchUrl(url) {
      return "https://greasyfork.org/zh-CN/scripts/code-search?c=" + url;
    },
    /**
     * 获取管理地址
     * @param {string} url
     * @returns {string}
     */
    getAdminUrl(url) {
      return url + "/admin";
    },
    /**
     * 从字符串中提取Id
     * @param {?string} text
     * @returns {string}
     */
    getScriptId(text) {
      return (text || window.location.pathname).match(/\/scripts\/([\d]+)/i)[1];
    },
    /**
     * 从字符串中提取用户id
     * @param {?string} text
     * @returns {string}
     */
    getUserId(text) {
      return (text || window.location.pathname).match(/\/users\/([\d]+)/i)[1];
    },
    /**
     * 从字符串中提取脚本名
     * @param {?string} text
     * @returns {?string}
     */
    getScriptName(text) {
      let pathname = window.location.pathname;
      if (text != null) {
        pathname = new URL(text).pathname;
      }
      pathname = decodeURIComponent(pathname);
      pathname = pathname.split("/");
      for (const name of pathname) {
        if (name.match(/[\d]+/)) {
          return name.match(/[\d]+-(.+)/)[1];
        }
      }
    },
    /**
     * 获取需要切换语言的Url
     */
    getSwitchLanguageUrl(localeLanguage = "zh-CN") {
      let url = window.location.origin;
      let urlSplit = window.location.pathname.split("/");
      urlSplit[1] = localeLanguage;
      url = url + urlSplit.join("/");
      url += window.location.search;
      if (window.location.search === "") {
        url += "?locale_override=1";
      } else if (!window.location.search.includes("locale_override=1")) {
        url += "&locale_override=1";
      }
      return url;
    },
    /**
     * 获取脚本统计数据
     * @param {string} scriptId
     */
    async getScriptStats(scriptId) {
      return new Promise(async (resolve) => {
        let scriptStatsRequest = await httpx.get({
          url: `https://greasyfork.org/scripts/${scriptId}/stats.json`,
          fetch: true,
          onerror() {},
          ontimeout() {},
        });
        if (!scriptStatsRequest.status) {
          resolve(false);
          return;
        }
        let scriptStatsJSON = scriptStatsRequest.data;
        resolve(scriptStatsJSON);
      });
    },
    /**
     * 解析并获取admin内的源代码同步的配置表单
     * @param {string} scriptId
     * @returns {Promise<?FormData>}
     */
    async getSourceCodeSyncFormData(scriptId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/scripts/${scriptId}/admin`,
        {
          fetch: true,
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        Qmsg.error("请求admin内容失败");
        return;
      }
      let adminHTML = getResp.data.responseText;
      let adminHTMLElement = DOMUtils.parseHTML(adminHTML, false, true);
      let formElement = adminHTMLElement.querySelector("form.edit_script");
      if (!formElement) {
        Qmsg.error("解析admin的源代码同步表单失败");
        return;
      }
      let formData = new FormData(formElement);
      return formData;
    },
    /**
     * 进行源代码同步，要求先getSourceCodeSyncFormData
     * @param {string} scriptId
     * @param {FormData} data
     * @returns {Promise<?Response>}
     */
    async sourceCodeSync(scriptId, data) {
      let postResp = await httpx.post(
        `https://greasyfork.org/zh-CN/scripts/${scriptId}/sync_update`,
        {
          fetch: true,
          data: data,
        }
      );
      log.success(postResp);
      if (!postResp.status) {
        Qmsg.error("源代码同步失败");
        return;
      }
      return postResp;
    },
    /**
     * 获取用户的信息，包括脚本列表、未上架的脚本、库
     * @returns {Promise<?{
     * id: number,
     * name: string,
     * scripts: GreasyForkScriptInfo[],
     * scriptList: GreasyForkScriptInfo[],
     * scriptLibraryList: GreasyForkScriptInfo[],
     * url: string,
     * }>}
     */
    async getUserInfo(userId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/users/${userId}.json`,
        {
          fetch: true,
        }
      );
      log.success(getResp);
      if (!getResp.status) {
        Qmsg.error("获取用户信息失败");
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      data["scriptList"] = [];
      data["scriptLibraryList"] = [];
      data["scripts"].forEach((scriptInfo) => {
        if (scriptInfo["code_url"].endsWith(".user.js")) {
          data["scriptList"].push(scriptInfo);
        } else {
          data["scriptLibraryList"].push(scriptInfo);
        }
      });
      return data;
    },
    /**
     * 获取用户的收藏集
     * @param {string} userId
     * @returns {Promise<?{
     * id: string,
     * name: string,
     * }[]>}
     */
    async getUserCollection(userId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/users/${userId}`,
        {
          fetch: true,
        }
      );
      log.info(["获取用户的收藏集", getResp]);
      if (!getResp.status) {
        Qmsg.error("获取用户的收藏集失败");
        return;
      }
      let respText = getResp.data.responseText;
      let respDocument = DOMUtils.parseHTML(respText, true, true);
      let userScriptSets = respDocument.querySelector("#user-script-sets");
      if (!userScriptSets) {
        log.error("解析Script Sets失败");
        return;
      }
      let scriptSetsIdList = [];
      userScriptSets.querySelectorAll("li").forEach((liElement) => {
        let setsUrl = liElement.querySelector("a:last-child").href;
        if (setsUrl.includes("?fav=1")) {
          /* 自带的收藏夹 */
          return;
        }
        let setsName = liElement.querySelector("a").innerText;
        let setsId = setsUrl.match(/\/sets\/([\d]+)\//)[1];
        scriptSetsIdList.push({
          id: setsId,
          name: setsName,
        });
      });

      return scriptSetsIdList;
    },
    /**
     * 获取某个收藏集的信息
     * @param {string} userId 用户id
     * @param {string} setsId 收藏集id
     * @returns {Promise<?FormData>}
     */
    async getUserCollectionInfo(userId, setsId) {
      let getResp = await httpx.get(
        `https://greasyfork.org/zh-CN/users/${userId}/sets/${setsId}/edit`,
        {
          fetch: true,
        }
      );
      if (!getResp.status) {
        Qmsg.error(`获取收藏集${setsId}失败`);
        return;
      }
      let respText = getResp.data.responseText;
      let respDocument = DOMUtils.parseHTML(respText, true, true);
      let edit_script_set_form = respDocument.querySelector(
        'form[id^="edit_script_set"]'
      );
      if (!edit_script_set_form) {
        Qmsg.error("获取表单元素#edit_script_set失败");
        return;
      }
      let formData = new FormData(edit_script_set_form);
      let csrfToken = respDocument.querySelector('meta[name="csrf-token"]');
      if (csrfToken.hasAttribute("content")) {
        let authenticity_token = csrfToken.getAttribute("content");
        formData.set("authenticity_token", authenticity_token);
      }
      return formData;
    },
    /**
     * 更新用户的某个收藏集的表单信息
     * @param {string} userId 用户id
     * @param {string} setsId 收藏集id
     * @param {string} data
     * @param {Promise<?Document>}
     */
    async updateUserSetsInfo(userId, setsId, data) {
      let postResp = await httpx.post(
        `https://greasyfork.org/zh-CN/users/${userId}/sets/${setsId}`,
        {
          fetch: true,
          headers: {
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language":
              "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            pragma: "no-cache",
          },
          fetchInit: {
            referrerPolicy: "strict-origin-when-cross-origin",
          },
          data: data,
        }
      );
      if (!postResp.status) {
        Qmsg.error("更新收藏集表单请求失败");
        return;
      }
      let respText = postResp.data.responseText;
      let respDocument = DOMUtils.parseHTML(respText, true, true);
      return respDocument;
    },
    /**
     * 切换语言
     * @param {string} url
     */
    async switchLanguage(url) {
      let getResp = await httpx.get(url, {
        fetch: true,
        headers: {
          "Upgrade-Insecure-Requests": 1,
        },
      });
      if (!getResp.status) {
        return;
      }
      log.info(getResp);
    },
  };

  /**
   * GreasyFork的css
   */
  const GreasyforkCSS = {
    UIScriptListCSS: `
        .w-script-list-item {
          padding: 10px 0;
          border-bottom: 1px solid #e5e5e5;
          font-size: 16px;
          text-align: left;
        }
        .w-script-version,
        .w-script-fan-score,
        .w-script-create-time,
        .w-script-update-time,
        .w-script-locale,
        .w-script-sync-type{
          font-size: 14px;
          color: #7c7c7c;
        }
        .w-script-fan-score {
          margin-left: unset !important;
          text-align: unset !important;
          max-width: unset !important;
        }
        .w-script-deleted{
          text-decoration: line-through;
          font-style: italic;
          color: red;
        }
        .w-script-deleted .w-script-name::before {
          content: "【删除】";
        }
    `,
    OwnCSS: `
      .whitesev-hide{
        display: none;
      }
     .whitesev-hide-important{
        display: none !important;
      }
    `,
    /**
     * 初始化
     */
    init() {
      GM_addStyle(this.OwnCSS);
    },
  };

  /**
   * 配置面板
   */
  const PopsPanel = {
    /**
     * 本地存储的总键名
     */
    key: "GM_Panel",
    /**
     * 属性attributes的data-key
     */
    attributeDataKey_Name: "data-key",
    /**
     * 属性attributes的data-default-value
     */
    attributeDataDefaultValue_Name: "data-default-value",
    /**
     * 初始化菜单
     */
    initMenu() {
      this.initLocalDefaultValue();
      if (unsafeWindow.top !== unsafeWindow.self) {
        return;
      }
      GreasyforkMenu.menu.add([
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
        {
          key: "transfer_old_data",
          text: "🔧 迁移旧数据",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.transferOldData();
          },
        },
      ]);
    },
    /**
     * 初始化本地设置默认的值
     */
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
     * @param {any} defaultValue 默认值
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
          text: `${GM_info?.script?.name || "GreasyFork优化"}-设置`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        style: GreasyforkCSS.UIScriptListCSS,
        width: pops.isPhone() ? "92vw" : "800px",
        height: pops.isPhone() ? "80vh" : "600px",
        only: true,
        drag: true,
      });
    },
    /**
     * 获取按钮配置
     * @param {string} text 文字
     * @param {string|undefined} description 描述
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event:Event,value: boolean)=>boolean} _callback_ 点击回调
     */
    getSwtichDetail(text, description, key, defaultValue, _callback_) {
      let result = {
        text: text,
        description: description,
        type: "switch",
        attributes: {},
        getValue() {
          if (PopsPanel.getValue(key) == null) {
            PopsPanel.setValue(key, Boolean(defaultValue));
          }
          return Boolean(PopsPanel.getValue(key, defaultValue));
        },
        callback(event, value) {
          log.success(`${value ? "开启" : "关闭"} ${text}`);
          if (typeof _callback_ === "function") {
            if (_callback_(event, value)) {
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
     * 获取配置内容
     * @returns {PopsPanelContentConfig[]}
     */
    getContent() {
      return [
        {
          id: "greasy-fork-panel-config-account",
          title: "账号",
          forms: [
            {
              text: "账号/密码",
              type: "forms",
              forms: [
                {
                  text: "账号",
                  type: "input",
                  attributes: {
                    "data-key": "user",
                    "data-default-value": "",
                  },
                  getValue() {
                    return PopsPanel.getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, value) {
                    PopsPanel.setValue(this.attributes["data-key"], value);
                  },
                  placeholder: "请输入账号",
                },
                {
                  text: "密码",
                  type: "input",
                  attributes: {
                    "data-key": "pwd",
                    "data-default-value": "",
                  },
                  getValue() {
                    return PopsPanel.getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, value) {
                    PopsPanel.setValue(this.attributes["data-key"], value);
                  },
                  isPassword: true,
                  placeholder: "请输入密码",
                },
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "自动登录",
                  "自动登录当前保存的账号",
                  "autoLogin",
                  true
                ),
                {
                  text: "清空账号/密码",
                  type: "button",
                  buttonIconIsLoading: false,
                  buttonType: "default",
                  buttonText: "点击清空",
                  callback(event) {
                    if (confirm("确定清空账号和密码？")) {
                      PopsPanel.deleteValue("user");
                      PopsPanel.deleteValue("pwd");
                      Qmsg.success("已清空账号/密码");
                      let $shadowRoot = event.target.getRootNode();
                      $shadowRoot.querySelector(
                        `li[data-key="user"] .pops-panel-input input`
                      ).value = "";
                      $shadowRoot.querySelector(
                        `li[data-key="pwd"] .pops-panel-input input`
                      ).value = "";
                    }
                  },
                },
                {
                  text: "源代码同步【脚本列表】",
                  type: "button",
                  buttonIconIsLoading: false,
                  buttonType: "primary",
                  buttonText: "一键同步",
                  callback(event) {
                    if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
                      PopsPanel.setValue(
                        "goto_updateSettingsAndSynchronize_scriptList",
                        true
                      );
                      if (GreasyforkMenu.getUserLinkElement()) {
                        Qmsg.success("前往用户主页");
                        window.location.href =
                          GreasyforkMenu.getUserLinkElement().href;
                      } else {
                        Qmsg.error("获取当前已登录的用户主页失败");
                      }
                      return;
                    }
                    let scriptUrlList = [];
                    document
                      .querySelectorAll(
                        "#user-script-list-section li a.script-link"
                      )
                      .forEach((item) => {
                        scriptUrlList = scriptUrlList.concat(
                          GreasyforkApi.getAdminUrl(item.href)
                        );
                      });
                    GreasyforkMenu.updateScript(scriptUrlList);
                  },
                },
                {
                  text: "源代码同步【未上架的脚本】",
                  type: "button",
                  buttonIconIsLoading: false,
                  buttonType: "primary",
                  buttonText: "一键同步",
                  callback(event) {
                    if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
                      PopsPanel.setValue(
                        "goto_updateSettingsAndSynchronize_unlistedScriptList",
                        true
                      );
                      if (GreasyforkMenu.getUserLinkElement()) {
                        Qmsg.success("前往用户主页");
                        window.location.href =
                          GreasyforkMenu.getUserLinkElement().href;
                      } else {
                        Qmsg.error("获取当前已登录的用户主页失败");
                      }
                      return;
                    }
                    let scriptUrlList = [];
                    document
                      .querySelectorAll(
                        "#user-unlisted-script-list li a.script-link"
                      )
                      .forEach((item) => {
                        scriptUrlList = scriptUrlList.concat(
                          GreasyforkApi.getAdminUrl(item.href)
                        );
                      });
                    GreasyforkMenu.updateScript(scriptUrlList);
                  },
                },
                {
                  text: "源代码同步【库】",
                  type: "button",
                  buttonIconIsLoading: false,
                  buttonType: "primary",
                  buttonText: "一键同步",
                  callback(event) {
                    if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
                      PopsPanel.setValue(
                        "goto_updateSettingsAndSynchronize_libraryScriptList",
                        true
                      );
                      if (GreasyforkMenu.getUserLinkElement()) {
                        Qmsg.success("前往用户主页");
                        window.location.href =
                          GreasyforkMenu.getUserLinkElement().href;
                      } else {
                        Qmsg.error("获取当前已登录的用户主页失败");
                      }
                      return;
                    }
                    let scriptUrlList = [];
                    document
                      .querySelectorAll(
                        "#user-library-script-list li a.script-link"
                      )
                      .forEach((item) => {
                        scriptUrlList = scriptUrlList.concat(
                          GreasyforkApi.getAdminUrl(item.href)
                        );
                      });
                    GreasyforkMenu.updateScript(scriptUrlList);
                  },
                },
              ],
            },
          ],
        },
        {
          id: "greasy-fork-panel-config-optimization",
          title: "优化",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "固定当前语言",
                  type: "select",
                  attributes: {
                    "data-key": "language-selector-locale",
                    "data-default-value": "zh-CN",
                  },
                  getValue() {
                    return PopsPanel.getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                  },
                  callback(event, isSelectedValue, isSelectedText) {
                    PopsPanel.setValue(
                      this.attributes["data-key"],
                      isSelectedValue
                    );
                  },
                  data: (function () {
                    let result = [
                      {
                        value: "",
                        text: "无",
                      },
                    ];
                    document
                      .querySelectorAll(
                        "select#language-selector-locale option"
                      )
                      .forEach((element) => {
                        let value = element.getAttribute("value");
                        if (value === "help") {
                          return;
                        }
                        let text = (
                          element.innerText || element.textContent
                        ).trim();
                        result.push({
                          value: value,
                          text: text,
                        });
                      });
                    return result;
                  })(),
                },
                PopsPanel.getSwtichDetail(
                  "美化页面元素",
                  "如button、input、textarea",
                  "beautifyPage",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "美化历史版本页面",
                  "更直观的查看版本迭代",
                  "beautifyHistoryVersionPage",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "美化上传图片按钮",
                  "放大上传区域",
                  "beautifyUploadImage",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【代码】页面添加复制代码按钮",
                  "更优雅的复制",
                  "addCopyCodeButton",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "【代码】页面快捷键",
                  "【F】键全屏、【Alt+Shift+F】键宽屏",
                  "fullScreenOptimization",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "优化图片浏览",
                  "使用Viewer浏览图片",
                  "optimizeImageBrowsing",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "覆盖图床图片跳转",
                  "配合上面的【优化图片浏览】更优雅浏览图片",
                  "overlayBedImageClickEvent",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "美化Greasyfork Beautify脚本",
                  '需安装Greasyfork Beautify脚本，<a href="https://greasyfork.org/zh-CN/scripts/446849-greasyfork-beautify" target="_blank">🖐点我安装</a>',
                  "beautifyGreasyforkBeautify",
                  true
                ),
              ],
            },
          ],
        },
        {
          id: "greasy-fork-panel-config-discussions",
          title: "论坛",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "过滤重复的评论",
                  "过滤掉重复的评论数量(≥2)",
                  "greasyfork-discussions-filter-duplicate-comments",
                  false,
                  undefined
                ),
              ],
            },
            {
              text: "过滤脚本(id)",
              type: "forms",
              forms: [
                {
                  type: "own",
                  getLiElementCallBack(liElement) {
                    let textareaDiv = DOMUtils.createElement(
                      "div",
                      {
                        className: "pops-panel-textarea",
                        innerHTML: `<textarea placeholder="请输入脚本id，每行一个"></textarea>`,
                      },
                      {
                        style: "width: 100%;",
                      }
                    );
                    let textarea = textareaDiv.querySelector("textarea");
                    const KEY = "greasyfork-discussions-filter-script";
                    textarea.value = PopsPanel.getValue(KEY, "");
                    DOMUtils.on(textarea, "input", undefined, function (event) {
                      PopsPanel.setValue(KEY, event.target.value);
                    });
                    liElement.appendChild(textareaDiv);
                    return liElement;
                  },
                },
              ],
            },
            {
              text: "过滤发布的用户(id)",
              type: "forms",
              forms: [
                {
                  type: "own",
                  getLiElementCallBack(liElement) {
                    let textareaDiv = DOMUtils.createElement(
                      "div",
                      {
                        className: "pops-panel-textarea",
                        innerHTML: `<textarea placeholder="请输入用户id，每行一个"></textarea>`,
                      },
                      {
                        style: "width: 100%;",
                      }
                    );
                    let textarea = textareaDiv.querySelector("textarea");
                    const KEY = "greasyfork-discussions-filter-post-user";
                    textarea.value = PopsPanel.getValue(KEY, "");
                    DOMUtils.on(textarea, "input", undefined, function (event) {
                      PopsPanel.setValue(KEY, event.target.value);
                    });
                    liElement.appendChild(textareaDiv);
                    return liElement;
                  },
                },
              ],
            },
            {
              text: "过滤回复的用户(id)",
              type: "forms",
              forms: [
                {
                  type: "own",
                  getLiElementCallBack(liElement) {
                    let textareaDiv = DOMUtils.createElement(
                      "div",
                      {
                        className: "pops-panel-textarea",
                        innerHTML: `<textarea placeholder="请输入用户id，每行一个"></textarea>`,
                      },
                      {
                        style: "width: 100%;",
                      }
                    );
                    let textarea = textareaDiv.querySelector("textarea");
                    const KEY = "greasyfork-discussions-filter-reply-user";
                    textarea.value = PopsPanel.getValue(KEY, "");
                    DOMUtils.on(textarea, "input", undefined, function (event) {
                      PopsPanel.setValue(KEY, event.target.value);
                    });
                    liElement.appendChild(textareaDiv);
                    return liElement;
                  },
                },
              ],
            },
          ],
        },
        {
          id: "greasy-fork-panel-config-script-list",
          title: "脚本列表",
          callback(event, rightHeaderElement, rightContainerElement) {
            Greasyfork.UIScriptList(
              "script-list",
              event,
              rightHeaderElement,
              rightContainerElement
            );
          },
          forms: [],
        },
        {
          id: "greasy-fork-panel-config-library",
          title: "库",
          callback(event, rightHeaderElement, rightContainerElement) {
            Greasyfork.UIScriptList(
              "script-library",
              event,
              rightHeaderElement,
              rightContainerElement
            );
          },
          forms: [],
        },
      ];
    },
    /**
     * 迁移旧数据
     */
    transferOldData() {
      let oldData = GM_getValue("GM_Menu_Local_Map");
      let currentData = GM_getValue(this.key, {});
      if (oldData) {
        Object.assign(currentData, oldData);
        GM_setValue(this.key, currentData);
        GM_deleteValue("GM_Menu_Local_Map");
        Qmsg.success("共迁移数据量：" + Object.keys(oldData).length);
      } else {
        Qmsg.info("不存在旧数据");
      }
    },
  };

  /**
   * GreasyFork的菜单
   */
  const GreasyforkMenu = {
    /**
     * @class
     */
    menu: new utils.GM_Menu({
      GM_getValue,
      GM_setValue,
      GM_registerMenuCommand,
      GM_unregisterMenuCommand,
    }),
    /**
     * 当前是否已登录
     */
    isLogin: false,
    /**
     * 初始化环境变量
     */
    initEnv() {
      let userLinkElement = this.getUserLinkElement();
      this.isLogin = Boolean(userLinkElement);
    },
    /**
     * 获取当前登录用户的a标签元素
     * @returns {?HTMLAnchorElement}
     */
    getUserLinkElement() {
      return document.querySelector("#nav-user-info span.user-profile-link a");
    },
    /**
     * 更新脚本
     * @param {string[]} scriptUrlList
     */
    async updateScript(scriptUrlList) {
      let getLoadingHTML = function (scriptName, progress = 1) {
        return `
        <div style="display: flex;flex-direction: column;align-items: flex-start;">
          <div style="height: 30px;line-height: 30px;">名称：${scriptName}</div>
          <div style="height: 30px;line-height: 30px;">进度：${progress}/${scriptUrlList.length}</div>
        </div>`;
      };
      if (utils.isNull(scriptUrlList)) {
        Qmsg.error("未获取到【脚本列表】");
      } else {
        let loading = Qmsg.loading(
          getLoadingHTML(GreasyforkApi.getScriptName(scriptUrlList[0])),
          {
            html: true,
          }
        );
        let successNums = 0;
        let failedNums = 0;
        for (let index = 0; index < scriptUrlList.length; index++) {
          let scriptUrl = scriptUrlList[index];
          let scriptId = GreasyforkApi.getScriptId(scriptUrl);
          log.success("更新：" + scriptUrl);
          let scriptName = GreasyforkApi.getScriptName(scriptUrl);
          loading.setHTML(getLoadingHTML(scriptName, index + 1));
          let codeSyncFormData = await GreasyforkApi.getSourceCodeSyncFormData(
            scriptId
          );
          if (codeSyncFormData) {
            let syncUpdateStatus = await GreasyforkApi.sourceCodeSync(
              scriptId,
              codeSyncFormData
            );
            if (syncUpdateStatus) {
              Qmsg.success("源代码同步成功，3秒后更新下一个");
              await utils.sleep(3000);
              successNums++;
            } else {
              Qmsg.error("源代码同步失败");
              failedNums++;
            }
          } else {
            Qmsg.error("源代码同步失败");
            failedNums++;
          }
        }
        loading.close();
        if (successNums === 0) {
          Qmsg.error("全部更新失败");
        } else {
          Qmsg.success(
            `全部更新完毕<br >
          成功：${successNums}<br >
          失败：${failedNums}<br >
          总计：${scriptUrlList.length}`,
            {
              html: true,
            }
          );
        }
      }
    },
    /**
     * 处理本地的goto事件
     */
    handleLocalGotoCallBack() {
      if (PopsPanel.getValue("goto_updateSettingsAndSynchronize_scriptList")) {
        PopsPanel.deleteValue("goto_updateSettingsAndSynchronize_scriptList");
        if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
          PopsPanel.setValue(
            "goto_updateSettingsAndSynchronize_scriptList",
            true
          );
          if (GreasyforkMenu.getUserLinkElement()) {
            Qmsg.success("前往用户主页");
            window.location.href = GreasyforkMenu.getUserLinkElement().href;
          } else {
            Qmsg.error("获取当前已登录的用户主页失败");
          }
          return;
        }
        let scriptUrlList = [];
        document
          .querySelectorAll("#user-script-list-section li a.script-link")
          .forEach((item) => {
            scriptUrlList = scriptUrlList.concat(
              GreasyforkApi.getAdminUrl(item.href)
            );
          });
        GreasyforkMenu.updateScript(scriptUrlList);
      } else if (
        PopsPanel.getValue(
          "goto_updateSettingsAndSynchronize_unlistedScriptList"
        )
      ) {
        PopsPanel.deleteValue(
          "goto_updateSettingsAndSynchronize_unlistedScriptList"
        );
        if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
          PopsPanel.setValue(
            "goto_updateSettingsAndSynchronize_unlistedScriptList",
            true
          );
          if (GreasyforkMenu.getUserLinkElement()) {
            Qmsg.success("前往用户主页");
            window.location.href = GreasyforkMenu.getUserLinkElement().href;
          } else {
            Qmsg.error("获取当前已登录的用户主页失败");
          }
          return;
        }
        let scriptUrlList = [];
        document
          .querySelectorAll("#user-unlisted-script-list li a.script-link")
          .forEach((item) => {
            scriptUrlList = scriptUrlList.concat(
              GreasyforkApi.getAdminUrl(item.href)
            );
          });
        GreasyforkMenu.updateScript(scriptUrlList);
      } else if (
        PopsPanel.getValue(
          "goto_updateSettingsAndSynchronize_libraryScriptList"
        )
      ) {
        PopsPanel.deleteValue(
          "goto_updateSettingsAndSynchronize_libraryScriptList"
        );
        if (!window.location.pathname.match(/\/.+\/users\/.+/gi)) {
          PopsPanel.setValue(
            "goto_updateSettingsAndSynchronize_libraryScriptList",
            true
          );
          if (GreasyforkMenu.getUserLinkElement()) {
            Qmsg.success("前往用户主页");
            window.location.href = GreasyforkMenu.getUserLinkElement().href;
          } else {
            Qmsg.error("获取当前已登录的用户主页失败");
          }
          return;
        }
        let scriptUrlList = [];
        document
          .querySelectorAll("#user-library-script-list li a.script-link")
          .forEach((item) => {
            scriptUrlList = scriptUrlList.concat(
              GreasyforkApi.getAdminUrl(item.href)
            );
          });
        GreasyforkMenu.updateScript(scriptUrlList);
      }
    },
  };

  /**
   * GreasyFork的业务功能
   */
  const Greasyfork = {
    /**
     * 自动登录
     */
    autoLogin() {
      utils.waitNode("span.sign-in-link a[rel=nofollow]").then(async () => {
        let user = PopsPanel.getValue("user");
        let pwd = PopsPanel.getValue("pwd");
        if (utils.isNull(user)) {
          Qmsg.error("请先在菜单中录入账号");
          return;
        }
        if (utils.isNull(pwd)) {
          Qmsg.error("请先在菜单中录入密码");
          return;
        }
        let csrfToken = document.querySelector("meta[name='csrf-token']");
        if (!csrfToken) {
          Qmsg.error("获取csrf-token失败");
          return;
        }
        let loginTip = Qmsg.loading("正在登录中...");
        let postResp = await httpx.post(
          "https://greasyfork.org/zh-CN/users/sign_in",
          {
            fetch: true,
            data: encodeURI(
              `authenticity_token=${csrfToken.getAttribute(
                "content"
              )}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&commit=登录`
            ),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        loginTip.destroy();
        if (!postResp.status) {
          log.error(postResp);
          Qmsg.error("登录失败，请在控制台查看原因");
          return;
        }
        let respText = postResp.data.responseText;
        let parseLoginHTMLNode = DOMUtils.parseHTML(respText, true, true);
        if (
          parseLoginHTMLNode.querySelectorAll(
            ".sign-out-link a[rel=nofollow][data-method='delete']"
          ).length
        ) {
          Qmsg.success("登录成功，1s后自动跳转");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          log.error(postResp);
          log.error(`当前账号:${user}`);
          log.error(`当前密码:${pwd}`);
          Qmsg.error("登录失败，可能是账号/密码错误，请在控制台查看原因");
        }
      });
    },
    /**
     * 设置代码搜索按钮(对于库)
     */
    setFindCodeSearchBtn() {
      utils.waitNode("ul#script-links li.current span").then(() => {
        let searchBtn = DOMUtils.createElement("li", {
          innerHTML: `<a href="javascript:;"><span>寻找引用</span></a>`,
        });
        DOMUtils.append(document.querySelector("ul#script-links"), searchBtn);
        DOMUtils.on(searchBtn, "click", async function () {
          let scriptId = window.location.pathname.match(/scripts\/([\d]+)/i);
          if (!scriptId) {
            log.error([scriptId, window.location.pathname]);
            Qmsg.error("获取脚本id失败");
            return;
          }
          scriptId = scriptId[scriptId.length - 1];
          window.location.href = GreasyforkApi.getCodeSearchUrl(
            `greasyfork.org/scripts/${scriptId}`
          );
        });
      });
    },
    /**
     * 添加收藏按钮
     */
    setCollectScriptBtn() {
      utils.waitNode("ul#script-links li.current span").then(() => {
        let collectBtn = DOMUtils.createElement("li", {
          innerHTML: `<a href="javascript:;"><span>收藏</span></a>`,
        });
        DOMUtils.append(document.querySelector("ul#script-links"), collectBtn);
        DOMUtils.on(collectBtn, "click", async function () {
          let scriptId = window.location.pathname.match(/scripts\/([\d]+)/i);
          if (!scriptId) {
            log.error([scriptId, window.location.pathname]);
            Qmsg.error("获取脚本id失败");
            return;
          }
          scriptId = scriptId[scriptId.length - 1];
          if (!GreasyforkMenu.isLogin) {
            Qmsg.error("请先登录账号");
            log.error("请先登录账号");
            return;
          }
          let userId = GreasyforkApi.getUserId(
            GreasyforkMenu.getUserLinkElement().href
          );
          if (userId == null) {
            Qmsg.error("获取用户id失败");
            log.error("获取用户id失败");
            return;
          }
          let loading = Qmsg.loading("获取收藏夹中...");
          let userCollection = await GreasyforkApi.getUserCollection(userId);
          loading.close();
          if (!userCollection) {
            return;
          }
          let alertHTML = "";
          userCollection.forEach((userCollectInfo) => {
            alertHTML += `
            <li class="user-collect-item" data-id="${userCollectInfo.id}" data-name="${userCollectInfo.name}">
              <div class="user-collect-name">${userCollectInfo.name}</div>
              <div class="user-collect-btn-container">
                <div class="pops-panel-button collect-add-script-id">
                  <button type="primary" data-icon="" data-righticon="">
                    <span>添加</span>
                  </button>
                </div>
                <div class="pops-panel-button collect-delete-script-id">
                  <button type="danger" data-icon="" data-righticon="">
                    <span>删除</span>
                  </button>
                </div>
              </div>
            </li>
            `;
          });
          let collectionDialog = pops.alert({
            title: {
              text: "收藏集",
              position: "center",
            },
            content: {
              html: true,
              text: `<ul>${alertHTML}</ul>`,
            },
            mask: {
              enable: true,
              clickEvent: {
                toClose: true,
              },
            },
            btn: {
              ok: {
                enable: false,
              },
            },
            width: pops.isPhone() ? "92dvw" : "500px",
            height: "auto",
            drag: true,
            only: true,
            style: `
            .pops{
              --content-max-height: 400px;
              max-height: var(--content-max-height);
            }
            .pops[type-value=alert] .pops-alert-content {
              max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
            }
            .user-collect-item{
              -webkit-user-select: none;
              user-select: none;
              padding: 5px 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px dotted #c9c9c9;
            }
            .user-collect-name{

            }
            .user-collect-item:hover{
              
            }
            .user-collect-btn-container{
              margin-left: 10px;
              display: flex;
            }
            `,
          });
          /* 添加事件 */
          DOMUtils.on(
            collectionDialog.$shadowRoot,
            "click",
            ".collect-add-script-id",
            async function (event) {
              /** @type {HTMLLIElement} */
              let currentSelectCollectInfo =
                event.target.closest(".user-collect-item");
              let setsId = currentSelectCollectInfo.dataset.id;
              let setsName = currentSelectCollectInfo.dataset.name;
              let loading = Qmsg.loading("添加中...");
              let formData = await GreasyforkApi.getUserCollectionInfo(
                userId,
                setsId
              );
              let addFormData = utils.cloneFormData(formData);
              let saveFormData = utils.cloneFormData(formData);
              addFormData.set("add-script", scriptId);
              addFormData.set("script-action", "i");
              saveFormData.append("scripts-included[]", scriptId);
              saveFormData.set("save", 1);
              let addData = Array.from(new URLSearchParams(addFormData))
                .map(
                  ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                )
                .join("&");
              let saveData = Array.from(new URLSearchParams(saveFormData))
                .map(
                  ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                )
                .join("&");
              log.info(["添加的数据", addData]);
              log.info(["保存的数据", saveData]);
              let addResult = await GreasyforkApi.updateUserSetsInfo(
                userId,
                setsId,
                addData
              );
              if (!addResult) {
                loading.close();
                return;
              }
              let changeScriptSet =
                addResult.querySelector(".change-script-set");
              let section = changeScriptSet.querySelector("section");
              let alertElement = section.querySelector(".alert");
              if (alertElement) {
                pops.alert({
                  title: {
                    text: "添加失败",
                    position: "center",
                  },
                  content: {
                    text: alertElement.innerHTML,
                    html: true,
                  },
                  mask: {
                    enable: true,
                    clickEvent: {
                      toClose: true,
                    },
                  },
                  style: `
                  .pops-alert-content{
                    font-style: italic;
                    background-color: #ffc;
                    border: none;
                    border-left: 6px solid #FFEB3B;
                    padding: .5em;
                  }
                  `,
                  drag: true,
                  dragLimit: true,
                  width: pops.isPhone() ? "88vw" : "400px",
                  height: pops.isPhone() ? "50vh" : "300px",
                });
              } else {
                await GreasyforkApi.updateUserSetsInfo(
                  userId,
                  setsId,
                  saveData
                );
                Qmsg.success("添加成功");
              }
              loading.close();
            }
          );
          /* 删除事件 */
          DOMUtils.on(
            collectionDialog.$shadowRoot,
            "click",
            ".collect-delete-script-id",
            async function (event) {
              /** @type {HTMLLIElement} */
              let currentSelectCollectInfo =
                event.target.closest(".user-collect-item");
              let setsId = currentSelectCollectInfo.dataset.id;
              let setsName = currentSelectCollectInfo.dataset.name;
              let loading = Qmsg.loading("删除中...");
              let formData = await GreasyforkApi.getUserCollectionInfo(
                userId,
                setsId
              );
              let deleteFormData = new FormData();
              let saveFormData = new FormData();
              for (const [key, value] of formData.entries()) {
                deleteFormData.append(key, value);
                if (
                  key === "scripts-included[]" &&
                  value.toString() === scriptId.toString()
                ) {
                  continue;
                }
                saveFormData.append(key, value);
              }
              deleteFormData.set("remove-scripts-included[]", scriptId);
              deleteFormData.set("remove-selected-scripts", "i");
              deleteFormData.delete("script-action");
              saveFormData.set("save", 1);
              let removeData = Array.from(new URLSearchParams(deleteFormData))
                .map(
                  ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                )
                .join("&");
              let saveData = Array.from(new URLSearchParams(saveFormData))
                .map(
                  ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
                )
                .join("&");
              log.info(["删除的数据", removeData]);
              log.info(["保存的数据", saveData]);
              let removeResult = await GreasyforkApi.updateUserSetsInfo(
                userId,
                setsId,
                removeData
              );
              if (!removeResult) {
                loading.close();
                return;
              }
              await GreasyforkApi.updateUserSetsInfo(userId, setsId, saveData);
              Qmsg.success("删除成功");
              loading.close();
            }
          );
        });
      });
    },
    /**
     * 修复图片显示问题
     */
    repairImgShow() {
      if (window.innerWidth < window.innerHeight) {
        GM_addStyle(`
        img.lum-img{
          width: 100% !important;
          height: 100% !important;
        }
        `);
      }
    },
    /**
     * 修复代码的行号显示不够问题
     * 超过1w行不会高亮代码
     */
    repairCodeLineNumber() {
      if (!window.location.pathname.split("/")?.includes("code")) {
        return;
      }
      utils
        .waitNode("#script-content div.code-container pre.prettyprint ol")
        .then((element) => {
          if (element.childElementCount >= 1000) {
            log.success(
              `当前代码行数${element.childElementCount}行，超过1000行，优化行号显示问题`
            );
            GM_addStyle(`
          pre.prettyprint{
            padding-left: 10px;
            font-family: Monaco,Consolas,'Lucida Console','Courier New',serif;
            font-size: 12px;
          }
          `);
          }
        });
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      GM_addStyle(`
      @media (max-width: 460px) {
        .lum-lightbox-image-wrapper {
            display:flex;
            overflow: auto;
            -webkit-overflow-scrolling: touch
        }
    
        .lum-lightbox-caption {
            width: 100%;
            position: absolute;
            bottom: 0
        }
    
        .lum-lightbox-position-helper {
            margin: auto
        }
    
        .lum-lightbox-inner img {
            max-width:100%;
            max-height:100%;
        }
      }
      `);
      /**
       * 查看图片
       * @param {Array} imgList
       * @param {Number} _index_
       */
      function viewIMG(imgList = [], _index_ = 0) {
        let viewerULNodeHTML = "";
        imgList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = DOMUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML,
        });
        /**
         * @type {import("../库/Viewer")}
         */
        let viewer = new Viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          },
        });
        _index_ = _index_ < 0 ? 0 : _index_;
        viewer.view(_index_);
        viewer.zoomTo(1);
        viewer.show();
      }
      /**
       * 获取<img>标签上的src属性
       * @param {HTMLElement} element
       * @returns {?string}
       */
      function getImgElementSrc(element) {
        return (
          element.getAttribute("data-src") ||
          element.getAttribute("src") ||
          element.getAttribute("alt")
        );
      }
      DOMUtils.on(document, "click", "img", function (event) {
        /**
         * @type {HTMLElement}
         */
        let imgElement = event.target;
        /* 在超链接标签里 */
        if (
          imgElement.parentElement?.localName === "a" &&
          imgElement.hasAttribute("data-screenshots")
        ) {
          return;
        }
        /* Viewer的图片浏览 */
        if (imgElement.closest(".viewer-container")) {
          return;
        }
        /* GreasFork自带的图片浏览 */
        if (imgElement.closest(".lum-lightbox-position-helper")) {
          return;
        }
        /* 判断是否是user-content内的，如果是，多图片模式 */
        let userContentElement = imgElement.closest(".user-content");
        /* 图片链接数组 */
        let imgList = [];
        /* 当前图片的下标 */
        let imgIndex = 0;
        /* 图片元素数组 */
        let imgElementList = [];
        /* 当前的图片的链接 */
        let currentImgSrc = getImgElementSrc(imgElement);
        if (currentImgSrc.startsWith("https://img.shields.io")) {
          /** shields.io的图标 */
          return;
        }
        if (userContentElement) {
          userContentElement
            .querySelectorAll("img")
            .forEach((childImgElement) => {
              imgElementList.push(childImgElement);
              let imgSrc = getImgElementSrc(childImgElement);
              if (childImgElement.parentElement?.localName === "a") {
                imgSrc =
                  childImgElement.parentElement.getAttribute("data-href") ||
                  childImgElement.parentElement.href;
              }
              imgList.push(imgSrc);
            });
          imgIndex = imgElementList.indexOf(imgElement);
          if (imgIndex === -1) {
            imgIndex = 0;
          }
        } else {
          imgList.push(currentImgSrc);
          imgIndex = 0;
        }

        log.success(["点击浏览图片👉", imgList, imgIndex]);
        viewIMG(imgList, imgIndex);
      });
      /* 把上传的图片使用自定义图片预览 */
      document.querySelectorAll(".user-screenshots").forEach((element) => {
        let linkElement = element.querySelector("a");
        let imgSrc =
          linkElement.getAttribute("data-href") ||
          linkElement.getAttribute("href");
        let imgElement = element.querySelector("img");
        imgElement.setAttribute("data-screenshots", true);
        imgElement.setAttribute("data-src", imgSrc);
        linkElement.setAttribute("href", "javascript:;");
        /* img标签添加a标签后面 */
        DOMUtils.after(linkElement, imgElement);
        /* a标签删除 */
        linkElement.remove();
      });
    },
    /**
     * 覆盖图床图片的parentElement的a标签
     */
    overlayBedImageClickEvent() {
      document.querySelectorAll(".user-content a>img").forEach((imgElement) => {
        let linkElement = imgElement.parentElement;
        let url = linkElement.getAttribute("href");
        linkElement.setAttribute("data-href", url);
        linkElement.removeAttribute("href");
        DOMUtils.on(linkElement, "click", undefined, function (event) {
          Qmsg.warning(
            `<div style="overflow-wrap: anywhere;">拦截跳转：<a href="${url}" target="_blank">${url}</a></div>`,
            {
              html: true,
              timeout: 5000,
              zIndex: utils.getMaxZIndex(),
            }
          );
        });
      });
    },
    /**
     * 脚本首页新增今日更新
     */
    async scriptHomepageAddedTodaySUpdate() {
      if (
        !window.location.pathname.includes("/scripts/") ||
        !document.querySelector("#install-area")
      ) {
        return;
      }
      let scriptStatsJSON = await GreasyforkApi.getScriptStats(
        GreasyforkApi.getScriptId()
      );
      if (!scriptStatsJSON) {
        return;
      }
      scriptStatsJSON = utils.toJSON(scriptStatsJSON.responseText);
      log.info(["统计信息", scriptStatsJSON]);
      let todayStatsJSON =
        scriptStatsJSON[utils.formatTime(undefined, "yyyy-MM-dd")];
      if (!todayStatsJSON) {
        log.error("今日份的统计信息不存在");
        return;
      }
      let update_checks = todayStatsJSON["update_checks"];
      log.info(["今日统计信息", todayStatsJSON]);
      DOMUtils.after(
        "dd.script-show-daily-installs",
        DOMUtils.createElement("dt", {
          className: "script-show-daily-update_checks",
          innerHTML: "<span>今日检查</span>",
        })
      );
      DOMUtils.after(
        "dt.script-show-daily-update_checks",
        DOMUtils.createElement("dd", {
          className: "script-show-daily-update_checks",
          innerHTML: "<span>" + update_checks + "</span>",
        })
      );
    },
    /**
     * 美化页面元素
     */
    beautifyPageElement() {
      let beautifyMarkdownCSS = `
      code{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:.85em;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}
      table{text-indent:initial}
      table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}
      code,pre{color:#333;background:0 0;font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.4;-moz-tab-size:8;-o-tab-size:8;tab-size:8;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}
      pre{padding:.8em;overflow:auto;border-radius:3px;background:#f5f5f5}
      :not(pre)>code{padding:.1em;border-radius:.3em;white-space:normal;background:#f5f5f5}
      html body{font-family:"Helvetica Neue",Helvetica,"Segoe UI",Arial,freesans,sans-serif;font-size:16px;line-height:1.6;color:#333;background-color:#fff;overflow:initial;box-sizing:border-box;word-wrap:break-word}
      html body>:first-child{margin-top:0}
      html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{line-height:1.2;margin-top:1em;margin-bottom:16px;color:#000}
      html body h1{font-size:2.25em;font-weight:300;padding-bottom:.3em}
      html body h2{font-size:1.75em;font-weight:400;padding-bottom:.3em}
      html body h3{font-size:1.5em;font-weight:500}
      html body h4{font-size:1.25em;font-weight:600}
      html body h5{font-size:1.1em;font-weight:600}
      html body h6{font-size:1em;font-weight:600}
      html body h1,html body h2,html body h3,html body h4,html body h5{font-weight:600}
      html body h5{font-size:1em}
      html body h6{color:#5c5c5c}
      html body strong{color:#000}
      html body del{color:#5c5c5c}
      html body a:not([href]){color:inherit;}
      html body a{text-decoration:underline;text-underline-offset: .2rem;}
      html body a:hover{color:#00a3f5;}
      html body img{max-width:100%}
      html body>p{margin-top:0;margin-bottom:16px;word-wrap:break-word}
      html body>ol,html body>ul{margin-bottom:16px}
      html body ol,html body ul{padding-left:2em}
      html body ol.no-list,html body ul.no-list{padding:0;list-style-type:none}
      html body ol ol,html body ol ul,html body ul ol,html body ul ul{margin-top:0;margin-bottom:0}
      html body li{margin-bottom:0}
      html body li.task-list-item{list-style:none}
      html body li>p{margin-top:0;margin-bottom:0}
      html body .task-list-item-checkbox{margin:0 .2em .25em -1.8em;vertical-align:middle}
      html body .task-list-item-checkbox:hover{cursor:pointer}
      html body blockquote{margin:16px 0;font-size:inherit;padding:0 15px;color:#5c5c5c;background-color:#f0f0f0;border-left:4px solid #d6d6d6 !important;}
      html body blockquote>:first-child{margin-top:0}
      html body blockquote>:last-child{margin-bottom:0}
      html body hr{height:4px;margin:32px 0;background-color:#d6d6d6;border:0 none}
      html body table{margin:10px 0 15px 0;border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}
      html body table th{font-weight:700;color:#000}
      html body table td,html body table th{border:1px solid #d6d6d6;padding:6px 13px}
      html body dl{padding:0}
      html body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}
      html body dl dd{padding:0 16px;margin-bottom:16px}
      html body code{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:.85em;color:#000;background-color:#f0f0f0;border-radius:3px;padding:.2em 0}
      html body code::after,html body code::before{letter-spacing:-.2em;content:"\\00a0"}
      html body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:0 0;border:0}
      html body .highlight{margin-bottom:16px}
      html body .highlight pre,html body pre{padding:1em;overflow:auto;line-height:1.45;border:#d6d6d6;border-radius:3px}
      html body .highlight pre{margin-bottom:0;word-break:normal}
      html body pre code,html body pre tt{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}
      html body pre code:after,html body pre code:before,html body pre tt:after,html body pre tt:before{content:normal}
      html body blockquote,html body dl,html body ol,html body p,html body pre,html body ul{margin-top:0;margin-bottom:16px}
      html body kbd{color:#000;border:1px solid #d6d6d6;border-bottom:2px solid #c7c7c7;padding:2px 4px;background-color:#f0f0f0;border-radius:3px}
      @media print{html body{background-color:#fff}
      html body h1,html body h2,html body h3,html body h4,html body h5,html body h6{color:#000;page-break-after:avoid}
      html body blockquote{color:#5c5c5c}
      html body pre{page-break-inside:avoid}
      html body table{display:table}
      html body img{display:block;max-width:100%;max-height:100%}
      html body code,html body pre{word-wrap:break-word;white-space:pre}
      }
      .scrollbar-style::-webkit-scrollbar{width:8px}
      .scrollbar-style::-webkit-scrollbar-track{border-radius:10px;background-color:transparent}
      .scrollbar-style::-webkit-scrollbar-thumb{border-radius:5px;background-color:rgba(150,150,150,.66);border:4px solid rgba(150,150,150,.66);background-clip:content-box}
      `;
      let beautifyButtonCSS = `
      /* 美化按钮 */
      input[type="submit"],
      button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        height: 32px;
        white-space: nowrap;
        cursor: pointer;
        /* color: #606266; */
        text-align: center;
        box-sizing: border-box;
        outline: none;
        transition: .1s;
        font-weight: 500;
        user-select: none;
        vertical-align: middle;
        -webkit-appearance: none;
        background-color: #ffffff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        padding: 8px 15px;
        font-size: 14px;
        border-radius: 4px;
      }
      
      input[type="submit"]:hover, 
      input[type="submit"]:focus,
      button:hover,
      button:focus {
          color: #409eff;
          border-color: #c6e2ff;
          background-color: #ecf5ff;
          outline: none;
      }

      input[type="url"] {
        position: relative;
        font-size: 14px;
        display: inline-flex;
        line-height: 32px;
        box-sizing: border-box;
        vertical-align: middle;
        -webkit-appearance: none;
        /* color: #606266; */
        padding: 0;
        outline: none;
        border: none;
        background: none;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        padding: 1px 11px;
        background-color: #ffffff;
        background-image: none;
        border-radius: 4px;
        cursor: text;
        transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
        transform: translateZ(0);
        box-shadow: 0 0 0 1px #dcdfe6 inset;

        width: 100%;
        width: -moz-available;
        width: -webkit-fill-available;
        width: fill-available;

      }
      
      input[type="url"]::placeholder {
          color: #a8abb2;
      }
      
      input[type="url"]:hover {
          box-shadow: 0 0 0 1px #c0c4cc inset;
      }
      
      input[type="url"]:focus {
          box-shadow: 0 0 0 1px #409eff inset;
      }
    
      `;
      let beautifyRadioCSS = `
      label.radio-label {
        font-weight: 500;
        position: relative;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        white-space: normal;
        outline: none;
        font-size: 14px;
        user-select: none;
        margin-right: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 4px;
        box-sizing: border-box;
      }
      label:has(input[type=radio]:checked),
      label:has(input[type=radio]:checked) a{
        color: #409eff;
      }
      label.radio-label input[type="radio"]{
          margin-right: 4px;
          width: 14px;
          height: 14px;
      }
      label.radio-label input[type="radio"]:checked{
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-radius: 50%;
          width: 14px;
          height: 14px;
          outline: none;
          border: 4px solid #409eff;
          cursor: pointer;
      }
      label.radio-label input[type="radio"]:checked + span{
          color: #409eff;
      }
      `;
      let beautifyTextAreaCSS = `
      textarea {
        position: relative;
        display: inline-block;
        width: 100%;
        vertical-align: bottom;
        font-size: 14px;
        position: relative;
        display: block;
        resize: vertical;
        padding: 5px 11px;
        line-height: 1.5;
        box-sizing: border-box;
        width: 100%;
        font-size: inherit;
        font-family: inherit;
        /* color: #606266; */
        background-color: #ffffff;
        background-image: none;
        -webkit-appearance: none;
        box-shadow: 0 0 0 1px #dcdfe6 inset;
        border-radius: 4px;
        transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
        border: none;
      }
      textarea:focus{
        outline: none;
        box-shadow: 0 0 0 1px #409eff inset;
      }
      `;
      /**
       * 未派上用场的CSS
       */
      let notUseBeautifyCSS = `
      .token.blockquote,.token.comment{color:#969896}
      .token.cdata{color:#183691}
      .token.doctype,.token.macro.property,.token.punctuation,.token.variable{color:#333}
      .token.builtin,.token.important,.token.keyword,.token.operator,.token.rule{color:#a71d5d}
      .token.attr-value,.token.regex,.token.string,.token.url{color:#183691}
      .token.atrule,.token.boolean,.token.code,.token.command,.token.constant,.token.entity,.token.number,.token.property,.token.symbol{color:#0086b3}
      .token.prolog,.token.selector,.token.tag{color:#63a35c}
      .token.attr-name,.token.class,.token.class-name,.token.function,.token.id,.token.namespace,.token.pseudo-class,.token.pseudo-element,.token.url-reference .token.variable{color:#795da3}
      .token.entity{cursor:help}
      .token.title,.token.title .token.punctuation{font-weight:700;color:#1d3e81}
      .token.list{color:#ed6a43}
      .token.inserted{background-color:#eaffea;color:#55a532}
      .token.deleted{background-color:#ffecec;color:#bd2c00}
      .token.bold{font-weight:700}
      .token.italic{font-style:italic}
      .language-json .token.property{color:#183691}
      .language-markup .token.tag .token.punctuation{color:#333}
      .language-css .token.function,code.language-css{color:#0086b3}
      .language-yaml .token.atrule{color:#63a35c}
      code.language-yaml{color:#183691}
      .language-ruby .token.function{color:#333}
      .language-markdown .token.url{color:#795da3}
      .language-makefile .token.symbol{color:#795da3}
      .language-makefile .token.variable{color:#183691}
      .language-makefile .token.builtin{color:#0086b3}
      .language-bash .token.keyword{color:#0086b3}
      pre[data-line]{position:relative;padding:1em 0 1em 3em}
      pre[data-line] .line-highlight-wrapper{position:absolute;top:0;left:0;background-color:transparent;display:block;width:100%}
      pre[data-line] .line-highlight{position:absolute;left:0;right:0;padding:inherit 0;margin-top:1em;background:hsla(24,20%,50%,.08);background:linear-gradient(to right,hsla(24,20%,50%,.1) 70%,hsla(24,20%,50%,0));pointer-events:none;line-height:inherit;white-space:pre}
      pre[data-line] .line-highlight:before,pre[data-line] .line-highlight[data-end]:after{content:attr(data-start);position:absolute;top:.4em;left:.6em;min-width:1em;padding:0 .5em;background-color:hsla(24,20%,50%,.4);color:#f4f1ef;font:bold 65%/1.5 sans-serif;text-align:center;vertical-align:.3em;border-radius:999px;text-shadow:none;box-shadow:0 1px #fff}
      pre[data-line] .line-highlight[data-end]:after{content:attr(data-end);top:auto;bottom:.4em}
      `;
      GM_addStyle(beautifyMarkdownCSS);
      GM_addStyle(beautifyButtonCSS);
      GM_addStyle(beautifyRadioCSS);
      GM_addStyle(beautifyTextAreaCSS);
      GM_addStyle(`
      p:has(input[type="submit"][name="update-and-sync"]){
        margin-top: 10px;
      }
      `);
      DOMUtils.ready(function () {
        let markupChoiceELement = document.querySelector(
          'a[target="markup_choice"][href*="daringfireball.net"]'
        );
        if (markupChoiceELement) {
          markupChoiceELement.parentElement.replaceChild(
            DOMUtils.createElement("span", {
              textContent: "Markdown",
            }),
            markupChoiceELement
          );
        }

        if (
          globalThis.location.pathname.endsWith("/admin") &&
          !document.querySelector('input[type="submit"][name="update-only"]')
        ) {
          GM_addStyle(`
          .indented{
            padding-left: unset;
          }
          `);
        }
      });
    },
    /**
     * 美化 历史版本 页面
     */
    beautifyHistoryVersionPage() {
      if (!globalThis.location.pathname.endsWith("/versions")) {
        return;
      }
      let displayCSS = `
      .version-number,
      .version-date,
      .version-changelog{
        display: none;
      }
      `;
      /* 美化version页面 */
      let beautifyVersionsPageCSS = `
      ul.history_versions,
      ul.history_versions li{
        width: 100%;
      }
      ul.history_versions li{
        display: flex;
        flex-direction: column;
        margin: 25px 0px;
      }
      .diff-controls input[type="radio"]:nth-child(2){
        margin-left: 5px;
      }
      .flex-align-item-center{
        display: flex;
        align-items: center;
      }
      .script-tag{
        margin-bottom: 8px;
      }
      .script-tag-version a{
        color: #656d76;
        fill: #656d76;
        text-decoration: none;
        width: fit-content;
        width: -moz-fit-content;
      }
      .script-tag-version a:hover svg{
        color: #00a3f5;
        fill: #00a3f5;
      }
      .script-tag-version a > span{
        margin-left: 0.25rem;
      }
      .script-note-box-body{
        border-radius: 0.375rem;
        border-style: solid;
        border-width: max(1px, 0.0625rem);
        border-color: #d0d7de;
        color: #1f2328;
        padding: 16px;
        overflow-wrap: anywhere;
      }
      .script-note-box-body p{
        margin-bottom: unset;
      }
      `;
      GM_addStyle(beautifyVersionsPageCSS);
      GM_addStyle(displayCSS);
      DOMUtils.ready(function () {
        let historyVersionsULElement = document.querySelector(
          "ul.history_versions"
        );
        if (!historyVersionsULElement) {
          Qmsg.error("未找到history_versions元素列表");
          return;
        }
        /* 遍历每一个版本块 */
        Array.from(historyVersionsULElement.children).forEach((liElement) => {
          /* 版本链接 */
          let versionUrl = liElement.querySelector(".version-number a").href;
          /* 版本号 */
          let versionNumber =
            liElement.querySelector(".version-number a").innerText;
          /* 更新日期 */
          let versionDate = liElement
            .querySelector(".version-date")
            .getAttribute("datetime");
          /* 更新日志 */
          let updateNote =
            liElement.querySelector(".version-changelog")?.innerHTML || "";

          let versionDateElement = DOMUtils.createElement("span", {
            className: "script-version-date",
            innerHTML: utils.formatTime(versionDate, "yyyy年MM月dd日 hh:mm:ss"),
          });
          let tagElement = DOMUtils.createElement("div", {
            className: "script-tag",
            innerHTML: `
            <div class="script-tag-version">
              <a href="${versionUrl}}" class="flex-align-item-center">
                <svg aria-label="Tag" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                  <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                </svg>
                <span>${versionNumber}</span>
              </a>
            </div>
            `,
          });
          let boxBodyElement = DOMUtils.createElement("div", {
            className: "script-note-box-body",
            innerHTML: updateNote,
          });
          liElement.appendChild(versionDateElement);
          liElement.appendChild(tagElement);
          liElement.appendChild(boxBodyElement);
        });
      });
    },
    /**
     * 美化 Greasyfork Beautify脚本
     */
    beautifyGreasyforkBeautify() {
      let compatibleBeautifyCSS = `
      #main-header{
        background-color: #670000 !important;
        background-image: linear-gradient(#670000,#990000) !important;
      }
      #site-nav-vue{
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .open-sidebar{
        border-width: 1px;
        border-radius: 3px;
        margin-right: 0;
      }
      input.search-submit{
        transform: translateY(-5%) !important;
        margin-left: 10px;
      }
      #script-content code{
        word-wrap: break-word;
      }
      .code-container ::selection {
        background-color: #3D4556 !important;
      }
      `;

      GM_addStyle(compatibleBeautifyCSS);
      if (utils.isPhone()) {
        GM_addStyle(`
        section#script-info,
        section.text-content,
        div.width-constraint table.text-content.log-table{
          margin-top: 80px;
        }
        
        div.width-constraint div.sidebarred{
          padding-top: 80px;
        }
        div.width-constraint div.sidebarred .sidebar{
          top: 80px;
        }`);
      } else {
        GM_addStyle(`
        section#script-info{
          margin-top: 10px;
        }`);
      }
    },
    /**
     * 美化上传图片
     */
    beautifyUploadImage() {
      let beautifyCSS = `
      /* 隐藏 添加： */
      label[for="discussion_comments_attributes_0_attachments"],
      label[for="comment_attachments"]{
        display: none;
      }
      input[type="file"]{
        width: 100%;
        font-size: 20px;
        background: #e2e2e2;
        padding: 40px 0px;
        border-radius: 10px;
        text-align-last: center;
      }
      `;
      GM_addStyle(beautifyCSS);
      DOMUtils.ready(function () {
        /**
         * 清空错误的提示
         * @param {HTMLElement} element
         */
        function clearErrorTip(element) {
          while (element.nextElementSibling) {
            element.parentElement.removeChild(element.nextElementSibling);
          }
        }
        let fileElementList = document.querySelectorAll('input[type="file"]');
        fileElementList.forEach((fileElement) => {
          if (fileElement.getAttribute("name") === "code_upload") {
            return;
          }
          if (
            fileElement.hasAttribute("accept") &&
            fileElement.getAttribute("accept").includes("javascript")
          ) {
            return;
          }
          DOMUtils.on(fileElement, "change", function (event) {
            clearErrorTip(event.target);
            /**
             * @type {File[]}
             */
            let chooseImageFiles = event.currentTarget.files;
            if (chooseImageFiles.length === 0) {
              return;
            }
            log.info(["选择的图片", chooseImageFiles]);
            if (chooseImageFiles.length > 5) {
              DOMUtils.after(
                fileElement,
                DOMUtils.createElement("p", {
                  textContent: `❌ 最多同时长传5张图片`,
                })
              );
            }
            /**
             * @type {File[]}
             */
            let notAllowImage = [];
            Array.from(chooseImageFiles).forEach((imageFile) => {
              if (
                imageFile.size > 204800 ||
                !imageFile.type.match(/png|gif|jpeg|webp/i)
              ) {
                notAllowImage.push(imageFile);
              }
            });
            if (notAllowImage.length === 0) {
              return;
            }
            notAllowImage.forEach((imageFile) => {
              DOMUtils.after(
                fileElement,
                DOMUtils.createElement("p", {
                  textContent: `❌ 图片：${
                    imageFile.name
                  } 大小：${utils.formatByteToSize(imageFile.size)}`,
                })
              );
            });
          });
        });
      });
    },
    /**
     * 添加复制代码按钮
     */
    addCopyCodeButton() {
      if (!window.location.pathname.endsWith("/code")) {
        return;
      }
      utils
        .waitNode("div#script-content div.code-container")
        .then((element) => {
          let copyButton = DOMUtils.createElement(
            "button",
            {
              textContent: "复制代码",
            },
            {
              style: "margin-bottom: 1em;",
            }
          );
          DOMUtils.on(copyButton, "click", async function () {
            let loading = Qmsg.loading("加载文件中...");
            let getResp = await httpx.get(
              `https://greasyfork.org/zh-CN/scripts/${GreasyforkApi.getScriptId()}.json`,
              {
                fetch: true,
                responseType: "json",
              }
            );
            if (!getResp.status) {
              loading.close();
              return;
            }
            let respJSON = utils.toJSON(getResp.data.responseText);
            let code_url = respJSON["code_url"];
            log.success(["代码地址：", code_url]);
            let scriptJS = await httpx.get(code_url);
            if (!scriptJS.status) {
              loading.close();
              return;
            }
            loading.close();
            utils.setClip(scriptJS.data.responseText);
            Qmsg.success("复制成功");
          });
          DOMUtils.before(element, copyButton);
        });
    },
    /**
     * F11全屏，代码全屏
     */
    fullScreenOptimization() {
      if (!window.location.pathname.endsWith("/code")) {
        return;
      }
      GM_addStyle(`
      .code-wide-screen{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;
        max-width: 100%;
        max-height: 100%;
        z-index: 10000;
      }
      `);
      let isFullScreen = false;
      DOMUtils.keydown(
        window,
        function (...args) {
          /**
           * @type {KeyboardEvent}
           */
          let event = args[0];
          if (event.key.toLowerCase() === "f") {
            let codeElement = document.querySelector(
              "#script-content div.code-container code"
            );
            if (event.altKey && event.shiftKey) {
              /* 宽屏 */
              utils.preventEvent(event);
              if (codeElement.classList.contains("code-wide-screen")) {
                /* 当前处于宽屏状态，退出宽屏 */
                codeElement.classList.remove("code-wide-screen");
              } else {
                /* 进入宽屏 */
                codeElement.classList.add("code-wide-screen");
              }
            } else if (
              !event.altKey &&
              !event.ctrlKey &&
              !event.shiftKey &&
              !event.metaKey
            ) {
              /* 全屏 */
              utils.preventEvent(event);
              if (isFullScreen) {
                /* 退出全屏 */
                utils.exitFullScreen(codeElement);
                isFullScreen = false;
              } else {
                /* 进入全屏 */
                utils.enterFullScreen(codeElement);
                isFullScreen = true;
              }
            }
          }
        },
        {
          capture: true,
        }
      );
    },
    /**
     * 在Markdown右上角添加复制按钮
     */
    addMarkdownCopyButton() {
      /* 不在/code页面添加Markdown复制按钮 */
      if (window.location.href.endsWith("/code")) {
        return;
      }
      GM_addStyle(`
      pre{
        position: relative;
        margin-bottom: 0px !important;
        width: 100%;
      }
      `);
      GM_addStyle(`
      .snippet-clipboard-content{
        display: flex;
        justify-content: space-between;
        background: rgb(246, 248, 250);
        margin-bottom: 16px;
      }
      .zeroclipboard-container {
        /* right: 0;
        top: 0;
        position: absolute; */
        box-sizing: border-box;
        display: flex;
        font-size: 16px;
        line-height: 24px;
        text-size-adjust: 100%;
        overflow-wrap: break-word;
        width: fit-content;
        height: fit-content;
      }
      .zeroclipboard-container svg{
          vertical-align: text-bottom;
          display: inline-block;
          overflow: visible;
          fill: currentColor;
          margin: 8px;
      }
      .zeroclipboard-container svg[aria-hidden="true"]{
        display: none;
      }
      clipboard-copy.js-clipboard-copy {
        position: relative;
        padding: 0px;
        color: rgb(36, 41, 47);
        background-color: rgb(246, 248, 250);
        transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
        transition-property: color,background-color,box-shadow,border-color;
        display: inline-block;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        user-select: none;
        border: 1px solid rgba(31, 35, 40, 0.15);
        -webkit-appearance: none;
        appearance: none;
        box-shadow: rgba(31, 35, 40, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
        margin: 8px;
        overflow-wrap: break-word;
        text-wrap: nowrap;
        border-radius: 6px;
      }
      clipboard-copy.js-clipboard-copy[success]{
        border-color: rgb(31, 136, 61);
        box-shadow: 0 0 0 0.2em rgba(52,208,88,.4);
      }
      clipboard-copy.js-clipboard-copy:hover{
        background-color: rgb(243, 244, 246);
        border-color: rgba(31, 35, 40, 0.15);
        transition-duration: .1s;
      }
      clipboard-copy.js-clipboard-copy:active{
        background-color: rgb(235, 236, 240);
        border-color: rgba(31, 35, 40, 0.15);
        transition: none;
      }
      `);
      GM_addStyle(`
      .pops-tip.github-tooltip {
        border-radius: 6px;
        padding: 6px 8px;
      }
      
      .pops-tip.github-tooltip, .pops-tip.github-tooltip .pops-tip-arrow::after {
        background: rgb(36, 41, 47);
        color: #fff;
      }
      
      .pops-tip.github-tooltip .pops-tip-arrow::after {
        width: 8px;
        height: 8px;
      }
      `);
      /**
       * 获取复制按钮元素
       * @returns {HTMLElement}
       */
      function getCopyElement() {
        let copyElement = DOMUtils.createElement("div", {
          className: "zeroclipboard-container",
          innerHTML: `
          <clipboard-copy class="js-clipboard-copy">
            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-copy">
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon-check-copy">
              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
          </clipboard-copy>
          `,
        });
        let clipboardCopyElement =
          copyElement.querySelector(".js-clipboard-copy");
        let octiconCopyElement = copyElement.querySelector(".octicon-copy");
        let octiconCheckCopyElement = copyElement.querySelector(
          ".octicon-check-copy"
        );
        DOMUtils.on(copyElement, "click", function () {
          let codeElement = copyElement.parentElement.querySelector("code");
          if (
            !codeElement &&
            copyElement.parentElement.className.includes("prettyprinted")
          ) {
            /* 在gf的/code的复制 */
            codeElement = copyElement.parentElement;
          }
          if (!codeElement) {
            Qmsg.error("未找到code元素");
            return;
          }
          utils.setClip(codeElement.innerText || codeElement.textContent);
          clipboardCopyElement.setAttribute("success", "true");
          octiconCopyElement.setAttribute("aria-hidden", true);
          octiconCheckCopyElement.removeAttribute("aria-hidden");
          let tooltip = pops.tooltip({
            target: clipboardCopyElement,
            content: "✅ 复制成功!",
            position: "left",
            className: "github-tooltip",
            alwaysShow: true,
          });
          setTimeout(() => {
            clipboardCopyElement.removeAttribute("success");
            octiconCheckCopyElement.setAttribute("aria-hidden", true);
            octiconCopyElement.removeAttribute("aria-hidden");
            tooltip.close();
          }, 2000);
        });
        return copyElement;
      }

      document.querySelectorAll("pre").forEach((preElement) => {
        let zeroclipboardElement = preElement.querySelector(
          "div.zeroclipboard-container"
        );
        if (zeroclipboardElement) {
          return;
        }
        let copyElement = getCopyElement(preElement);
        let snippetClipboardContentElement = DOMUtils.createElement("div", {
          className: "snippet-clipboard-content",
        });
        DOMUtils.before(preElement, snippetClipboardContentElement);
        snippetClipboardContentElement.appendChild(preElement);
        snippetClipboardContentElement.appendChild(copyElement);
      });
    },
    /**
     * 固定当前语言
     */
    languageSelectorLocale() {
      let localeLanguage = PopsPanel.getValue("language-selector-locale");
      let currentLocaleLanguage = window.location.pathname
        .split("/")
        .filter((item) => Boolean(item))[0];
      log.success("选择语言：" + localeLanguage);
      log.success("当前语言：" + currentLocaleLanguage);
      if (utils.isNull(localeLanguage)) {
        return;
      }
      if (localeLanguage === currentLocaleLanguage) {
        return;
      } else {
        let timer = null;
        let url = GreasyforkApi.getSwitchLanguageUrl(localeLanguage);
        GreasyforkApi.switchLanguage(url);
        log.success("新Url：" + url);
        Qmsg.loading(
          `当前语言：${currentLocaleLanguage}，3秒后切换至：${localeLanguage}`,
          {
            timeout: 3000,
            showClose: true,
            onClose() {
              clearTimeout(timer);
            },
          }
        );
        Qmsg.info("导航至：" + url, {
          timeout: 3000,
        });
        timer = setTimeout(() => {
          window.location.href = url;
        }, 3000);
      }
    },
    /**
     * 面板-脚本列表|库
     * @param {"script-list"|"script-library"} type
     * @param {Event} event
     * @param {HTMLLIElement} rightHeaderElement
     * @param {HTMLLIElement} rightContainerElement
     * @returns
     */
    async UIScriptList(type, event, rightHeaderElement, rightContainerElement) {
      if (!GreasyforkMenu.isLogin) {
        Qmsg.error("请先登录账号！");
        return;
      }
      let userLinkElement = GreasyforkMenu.getUserLinkElement();
      let userId = userLinkElement.href
        .split("/")
        .pop()
        .match(/([0-9]+)/)[0];
      let loading = pops.loading({
        mask: {
          enable: true,
        },
        parent: rightContainerElement,
        content: {
          text: "获取信息中，请稍后...",
        },
        addIndexCSS: false,
      });
      let userInfo = await GreasyforkApi.getUserInfo(userId);
      loading.close();
      if (!userInfo) {
        return;
      }
      log.info(userInfo);
      let scriptList =
        type === "script-list"
          ? userInfo["scriptList"]
          : userInfo["scriptLibraryList"];
      Qmsg.success(`获取成功，共 ${scriptList.length} 个`);
      for (const scriptInfo of scriptList) {
        let liElement = DOMUtils.createElement("li", {
          className: "w-script-list-item",
          innerHTML: `
          <div class="w-script-info">
            <div class="w-script-name">
              <a href="${scriptInfo["url"]}" target="_blank">${
            scriptInfo["name"]
          }</a>
            </div>
            <div class="w-script-fan-score">
              <p>评分：${scriptInfo["fan_score"]}</p>
            </div>
            <div class="w-script-locale">
              <p>语言：${scriptInfo["locale"]}</p>
            </div>
            <div class="w-script-version">
              <p>版本：${scriptInfo["version"]}</p>
            </div>
            <div class="w-script-update-time">
              <p>更新：${utils.getDaysDifference(
                new Date(scriptInfo["code_updated_at"]).getTime(),
                undefined,
                "auto"
              )}前</p>
            </div>
          </div>
          `,
        });
        let scriptInfoElement = liElement.querySelector(".w-script-info");
        let buttonElement = DOMUtils.createElement("div", {
          className: "pops-panel-button",
          innerHTML: `
          <button type="primary" data-icon="" data-righticon="false">
            <span>同步代码</span>
          </button>
          `,
        });
        if (scriptInfo["deleted"]) {
          /* 该脚本已给删除 */
          liElement.classList.add("w-script-deleted");
          buttonElement.querySelector("button").setAttribute("disabled", true);
        }

        DOMUtils.on(buttonElement, "click", undefined, async function () {
          log.success(["同步", scriptInfo]);
          let btn = buttonElement.querySelector("button");
          let span = buttonElement.querySelector("button span");
          let iconElement = DOMUtils.createElement(
            "i",
            {
              className: "pops-bottom-icon",
              innerHTML: pops.config.iconSVG.loading,
            },
            {
              "is-loading": true,
            }
          );
          btn.setAttribute("disabled", true);
          btn.setAttribute("data-icon", true);
          span.innerText = "同步中...";
          DOMUtils.before(span, iconElement);
          let codeSyncFormData = await GreasyforkApi.getSourceCodeSyncFormData(
            scriptInfo["id"]
          );
          if (codeSyncFormData) {
            const SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY =
              "script[script_sync_type_id]";
            if (codeSyncFormData.has(SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY)) {
              /* 1是手动同步、2是自动同步、3是webhook同步 */
              let syncTypeId = codeSyncFormData.get(
                SCRIPT_SYNC_TYPE_ID_FORMDATA_KEY
              );
              let syncMode = "";
              if (syncTypeId.toString() === "1") {
                syncMode = "手动";
              } else if (syncTypeId.toString() === "2") {
                syncMode = "自动";
              } else if (syncTypeId.toString() === "3") {
                syncMode = "webhook";
              }
              let oldSyncTypeElement = liElement.querySelector(
                ".w-script-sync-type"
              );
              if (oldSyncTypeElement) {
                oldSyncTypeElement.querySelector(
                  "p"
                ).innerText = `同步方式：${syncMode}`;
              } else {
                DOMUtils.append(
                  scriptInfoElement,
                  `
                  <div class="w-script-sync-type">
                    <p>同步方式：${syncMode}</p>
                  </div>
                  `
                );
              }
              let syncUpdateResponse = await GreasyforkApi.sourceCodeSync(
                scriptInfo["id"],
                codeSyncFormData
              );
              if (syncUpdateResponse) {
                Qmsg.success("同步成功");
              } else {
                Qmsg.error("同步失败");
              }
            } else {
              Qmsg.error("该脚本未设置同步信息");
            }
          }

          btn.removeAttribute("disabled");
          btn.removeAttribute("data-icon");
          span.innerText = "同步代码";
          iconElement.remove();
        });
        liElement.appendChild(buttonElement);
        rightContainerElement.appendChild(liElement);
      }
    },
    /**
     * 论坛-过滤
     */
    filterDiscussions() {
      const FILTER_SCRIPT_KEY = "greasyfork-discussions-filter-script";
      const FILTER_POST_USER_KEY = "greasyfork-discussions-filter-post-user";
      const FILTER_REPLY_USER_KEY = "greasyfork-discussions-filter-reply-user";
      if (!globalThis.location.pathname.includes("/discussions")) {
        return;
      }
      const filterScript = PopsPanel.getValue(FILTER_SCRIPT_KEY, "");
      const filterPostUser = PopsPanel.getValue(FILTER_POST_USER_KEY, "");
      const filterReplyUser = PopsPanel.getValue(FILTER_REPLY_USER_KEY, "");

      const filterScriptList =
        filterScript.trim() === "" ? [] : filterScript.split("\n");
      const filterPostUserList =
        filterPostUser.trim() === "" ? [] : filterPostUser.split("\n");
      const filterReplyUserList =
        filterReplyUser.trim() === "" ? [] : filterReplyUser.split("\n");

      /**
       * @type {Map<string,HTMLElement>}
       */
      const SNIPPET_MAP = new Map();

      GM_addStyle(`
      .discussion-list-container {
        --discusstion-repeat-color: #ffa700;
      }
      
      .discussion-list-container a.discussion-title[data-repeat-tip-show]::before {
        content: attr(data-repeat-tip-show);
        color: var(--discusstion-repeat-color);
        border-radius: 5px;
        border: 2px solid var(--discusstion-repeat-color);
        padding: 2px 5px;
        font-weight: 800;
        font-size: 14px;
      }
      `);
      let discussionListContainer = document.querySelectorAll(
        ".discussion-list-container"
      );

      Array.from(discussionListContainer).forEach((listContainer, index) => {
        if (!listContainer.querySelector("a.script-link")) {
          return;
        }
        const discussionInfo = {
          /** 脚本名 @type {string} */
          scriptName: listContainer.querySelector("a.script-link").innerText,
          /** 脚本主页地址 @type {string} */
          scriptUrl: listContainer.querySelector("a.script-link").href,
          /** 脚本id @type {string} */
          scriptId: GreasyforkApi.getScriptId(
            listContainer.querySelector("a.script-link").href
          ),
          /** 发布的用户名 @type {string} */
          postUserName: listContainer.querySelector("a.user-link").innerText,
          /** 发布的用户主页地址 @type {string} */
          postUserHomeUrl: listContainer.querySelector("a.user-link").href,
          /** 发布的用户id @type {string} */
          postUserId: GreasyforkApi.getUserId(
            listContainer.querySelector("a.user-link").href
          ),
          /** 发布的时间 */
          postTimeStamp: new Date(
            listContainer
              .querySelector("relative-time")
              .getAttribute("datetime")
          ),
          /** 发布的地址 @type {string} */
          snippetUrl: listContainer.querySelector("a.discussion-title").href,
          /** 发布的内容片段 @type {string} */
          snippet: listContainer.querySelector("span.discussion-snippet")
            .innerText,
          /** 回复的用户名 @type {?string} */
          replyUserName: undefined,
          /** 回复的用户主页地址 @type {?string} */
          replyUserHomeUrl: undefined,
          /** 回复的用户id @type {?string} */
          replyUserId: undefined,
          /** 回复的时间 */
          replyTimeStamp: undefined,
        };

        if (
          listContainer.querySelector(
            ".discussion-meta-item .discussion-meta-item"
          )
        ) {
          discussionInfo.replyUserName = listContainer.querySelector(
            ".discussion-meta-item .discussion-meta-item a.user-link"
          ).innerText;
          discussionInfo.replyUserHomeUrl = listContainer.querySelector(
            ".discussion-meta-item .discussion-meta-item a.user-link"
          ).href;
          discussionInfo.replyUserId = GreasyforkApi.getUserId(
            discussionInfo.replyUserHomeUrl
          );
          discussionInfo.replyTimeStamp = new Date(
            listContainer
              .querySelector(
                ".discussion-meta-item .discussion-meta-item relative-time"
              )
              .getAttribute("datetime")
          );
        }

        if (
          SNIPPET_MAP.has(discussionInfo.snippet) &&
          PopsPanel.getValue("greasyfork-discussions-filter-duplicate-comments")
        ) {
          let discussionTitleElement = SNIPPET_MAP.get(
            discussionInfo.snippet
          ).querySelector("a.discussion-title");
          discussionTitleElement.setAttribute("data-repeat-tip-show", true);
          let oldCount = 0;

          if (discussionTitleElement.hasAttribute("data-repeat-count")) {
            oldCount = parseInt(
              discussionTitleElement.getAttribute("data-repeat-count")
            );
          }
          oldCount++;
          discussionTitleElement.setAttribute("data-repeat-count", oldCount);
          discussionTitleElement.setAttribute(
            "data-repeat-tip-show",
            `已过滤：${oldCount}`
          );
          log.success([
            "过滤重复内容：" + discussionInfo.snippet,
            discussionInfo,
          ]);
          listContainer.remove();
          return;
        }

        SNIPPET_MAP.set(discussionInfo.snippet, listContainer);
        for (const filterScriptId of filterScriptList) {
          if (discussionInfo.scriptId === filterScriptId) {
            log.success([
              "过滤脚本id：" + discussionInfo.scriptId,
              discussionInfo,
            ]);
            listContainer.remove();
            return;
          }
        }

        for (const filterPostUserId of filterPostUserList) {
          if (discussionInfo.postUserId === filterPostUserId) {
            log.success([
              "过滤发布用户id：" + discussionInfo.postUserId,
              discussionInfo,
            ]);
            listContainer.remove();
            return;
          }
        }

        if (discussionInfo.replyUserName) {
          for (const filterReplyUserId of filterReplyUserList) {
            if (discussionInfo.replyUserId === filterReplyUserId) {
              log.success([
                "过滤回复用户id：" + discussionInfo.replyUserId,
                discussionInfo,
              ]);
              listContainer.remove();
              return;
            }
          }
        }
      });
    },
    /**
     * 检测gf页面是否正确加载，有时候会出现
     * We're down for maintenance. Check back again soon.
     */
    checkPage() {
      DOMUtils.ready(() => {
        if (
          document.body.firstElementChild &&
          document.body.firstElementChild.localName === "p" &&
          document.body.firstElementChild.innerText.includes(
            "We're down for maintenance. Check back again soon."
          )
        ) {
          let checkPageTime = parseInt(
            GM_getValue("greasyfork-check-page-time", 0)
          );
          if (checkPageTime && Date.now() - checkPageTime > 5 * 1000) {
            /* 上次重载时间在5秒内的话就拒绝重载 */
            Qmsg.error("5秒内拒绝反复重载");
            return;
          }
          GM_setValue("greasyfork-check-page-time", Date.now());
          window.location.reload();
        }
      });
    },
  };
  /* -----------------↑函数区域↑----------------- */

  /* -----------------↓执行入口↓----------------- */
  Greasyfork.checkPage();
  GreasyforkCSS.init();
  PopsPanel.initMenu();
  if (PopsPanel.getValue("beautifyPage")) {
    Greasyfork.beautifyPageElement();
  }
  if (PopsPanel.getValue("beautifyHistoryVersionPage")) {
    Greasyfork.beautifyHistoryVersionPage();
  }
  if (PopsPanel.getValue("beautifyGreasyforkBeautify")) {
    Greasyfork.beautifyGreasyforkBeautify();
  }
  if (PopsPanel.getValue("beautifyUploadImage")) {
    Greasyfork.beautifyUploadImage();
  }
  if (PopsPanel.getValue("fullScreenOptimization")) {
    Greasyfork.fullScreenOptimization();
  }
  DOMUtils.ready(function () {
    GreasyforkMenu.initEnv();
    if (PopsPanel.getValue("autoLogin")) {
      Greasyfork.autoLogin();
    }
    GreasyforkMenu.handleLocalGotoCallBack();
    Greasyfork.setFindCodeSearchBtn();
    Greasyfork.setCollectScriptBtn();
    Greasyfork.repairImgShow();
    Greasyfork.repairCodeLineNumber();
    if (PopsPanel.getValue("optimizeImageBrowsing")) {
      Greasyfork.optimizeImageBrowsing();
    }
    if (PopsPanel.getValue("overlayBedImageClickEvent")) {
      Greasyfork.overlayBedImageClickEvent();
    }
    Greasyfork.scriptHomepageAddedTodaySUpdate();
    if (PopsPanel.getValue("addCopyCodeButton")) {
      Greasyfork.addCopyCodeButton();
    }
    Greasyfork.addMarkdownCopyButton();
    Greasyfork.languageSelectorLocale();
    Greasyfork.filterDiscussions();
  });
  /* -----------------↑执行入口↑----------------- */
})();
