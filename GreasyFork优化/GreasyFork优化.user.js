// ==UserScript==
// @name         GreasyFork优化
// @namespace    https://greasyfork.org/zh-CN/scripts/475722
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2023.12.22
// @description  自动登录账号、快捷寻找自己库被其他脚本引用、更新自己的脚本列表、库、优化图片浏览、美化页面、Markdown复制按钮
// @author       WhiteSevs
// @license      MIT
// @icon         https://z1.ax1x.com/2023/12/11/piRxYqK.png
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
// @connect      greasyfork.org
// @require      https://update.greasyfork.org/scripts/449471/1249086/Viewer.js
// @require      https://update.greasyfork.org/scripts/462234/1284140/Message.js
// @require      https://update.greasyfork.org/scripts/456485/1298471/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1299890/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1296917/DOMUtils.js
// ==/UserScript==

(function () {
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
  const log = new utils.Log(GM_info);
  log.config({
    debug: false,
  });
  const httpx = new utils.Httpx(GM_xmlhttpRequest);
  httpx.config({
    onabort: function () {
      Qmsg.error("请求被取消");
    },
    ontimeout: function () {
      Qmsg.error("请求超时");
    },
    onerror: function (response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror", response]);
    },
  });
  /* -----------------↑公共配置↑----------------- */

  /* -----------------↓函数区域↓----------------- */
  /**
   * GreasyFork的配置
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
     * @param {?string} url
     * @returns {string}
     */
    getScriptId(url) {
      return (url || window.location.pathname).match(/\/scripts\/([\d]+)/i)[1];
    },
    /**
     * 从字符串中提取脚本名
     * @param {?string} url
     * @returns {?string}
     */
    getScriptName(url) {
      let pathname = window.location.pathname;
      if (url != null) {
        pathname = new URL(url).pathname;
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
     * 获取脚本统计数据
     * @param {string} scriptId
     */
    async getScriptStats(scriptId) {
      return new Promise(async (resolve) => {
        let scriptStatsRequest = await httpx.get({
          url: `https://greasyfork.org/scripts/${scriptId}/stats.json`,
          onerror: function () {},
          ontimeout: function () {},
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
      let getResp = await fetch(
        `https://greasyfork.org/zh-CN/scripts/${scriptId}/admin`
      );
      log.success(getResp);
      if (getResp.status !== 200) {
        Qmsg.error("请求admin内容失败");
        return;
      }
      let adminHTML = await getResp.text();
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
      let postResp = await fetch(
        `https://greasyfork.org/zh-CN/scripts/${scriptId}/sync_update`,
        {
          method: "POST",
          body: data,
        }
      );
      log.success(postResp);
      if (postResp.status !== 200) {
        Qmsg.error("源代码同步失败");
        return;
      }
      return postResp;
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
          text: `${GM_info?.script?.name || "CSDN|简书优化"}-设置`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        width: pops.isPhone() ? "92vw" : "800px",
        height: pops.isPhone() ? "80vh" : "600px",
        only: true,
        drag: true,
      });
    },
    /**
     * 获取按钮配置
     * @param {string} text
     * @param {string} key
     * @param {boolean} defaultValue
     * @param {?(event:Event,value: boolean)=>boolean} _callback_
     */
    getSwtichDetail(text, key, defaultValue, _callback_) {
      let result = {
        text: text,
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
                PopsPanel.getSwtichDetail("自动登录", "autoLogin", true),
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
                      document.querySelector(
                        `li[data-key="user"] .pops-panel-input input`
                      ).value = "";
                      document.querySelector(
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
                  buttonText: "点击同步",
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
                  buttonText: "点击同步",
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
                  buttonText: "点击同步",
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
                PopsPanel.getSwtichDetail("美化页面", "beautifyPage", true),
                PopsPanel.getSwtichDetail(
                  "美化上传图片按钮",
                  "beautifyUploadImage",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "代码页面添加复制代码按钮",
                  "addCopyCodeButton",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "美化Greasyfork Beautify脚本",
                  "beautifyGreasyforkBeautify",
                  true
                ),
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
                    let result = [];
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
              ],
            },
          ],
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
     * @returns {?HTMLElement}
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
  const GreasyforkBusiness = {
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
        let postResp = null;
        try {
          postResp = await fetch("https://greasyfork.org/zh-CN/users/sign_in", {
            method: "POST",
            body: encodeURI(
              `authenticity_token=${csrfToken.getAttribute(
                "content"
              )}&user[email]=${user}&user[password]=${pwd}&user[remember_me]=1&commit=登录`
            ),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
        } catch (error) {
          log.error(error);
          Qmsg.error("请求失败，请在控制台查看原因");
          return;
        }
        loginTip.destroy();
        if (!postResp.ok) {
          log.error(postResp);
          Qmsg.error("登录失败，请在控制台查看原因");
          return;
        }
        let respText = await postResp.text();
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
      DOMUtils.on(document, "click", "img", function (event) {
        let clickElement = event.target;
        /* 在超链接标签里 */
        if (clickElement?.parentElement?.localName === "a") {
          return;
        }
        /* Viewer的图片浏览 */
        if (
          clickElement?.parentElement?.className === "viewer-canvas" ||
          clickElement?.parentElement?.hasAttribute("data-viewer-action")
        ) {
          return;
        }
        /* GreasFork自带的图片浏览 */
        if (
          clickElement?.parentElement?.className ===
          "lum-lightbox-position-helper"
        ) {
          return;
        }
        let imgSrc =
          clickElement.getAttribute("src") ||
          clickElement.getAttribute("data-src") ||
          clickElement.getAttribute("alt");
        log.success(["点击浏览图片👉", imgSrc]);
        viewIMG([imgSrc]);
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
     * 美化页面markdown
     */
    beautifyPage() {
      if (!PopsPanel.getValue("beautifyPage")) {
        return;
      }
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
        white-space: nowrap;
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
      });
    },
    /**
     * 美化 Greasyfork Beautify脚本
     */
    beautifyGreasyforkBeautify() {
      if (!PopsPanel.getValue("beautifyGreasyforkBeautify")) {
        return;
      }
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
      if (!PopsPanel.getValue("beautifyUploadImage")) {
        return;
      }
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
        let clearErrorTip = function () {
          while (fileElement.nextElementSibling) {
            fileElement.parentElement.removeChild(
              fileElement.nextElementSibling
            );
          }
        };
        let fileElement = document.querySelector('input[type="file"]');
        DOMUtils.on(fileElement, "change", function (event) {
          clearErrorTip();
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
    },
    /**
     * 添加复制代码按钮
     */
    addCopyCodeButton() {
      if (!window.location.pathname.endsWith("/code")) {
        return;
      }
      if (!PopsPanel.getValue("addCopyCodeButton")) {
        return;
      }
      utils
        .waitNode("div#script-content div.code-container")
        .then((element) => {
          let copyButton = DOMUtils.createElement("button", {
            style: "margin-bottom: 1em;",
            textContent: "复制代码",
          });
          DOMUtils.on(copyButton, "click", async function () {
            let loading = Qmsg.loading("加载文件中...");
            let getResp = await httpx.get(
              `https://greasyfork.org/zh-CN/scripts/${GreasyforkApi.getScriptId()}.json`,
              {
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
      if (localeLanguage === currentLocaleLanguage) {
        return;
      } else {
        let timer = null;
        let replaceUrlRegular = new RegExp(
          `^${window.location.origin}/${currentLocaleLanguage}`
        );
        let newUrl = `${window.location.origin}/${localeLanguage}`;
        let jumpUrl = window.location.href.replace(replaceUrlRegular, newUrl);
        log.success("新Url：" + jumpUrl);
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
        Qmsg.info("导航至：" + jumpUrl);
        timer = setTimeout(() => {
          window.location.href = jumpUrl;
        }, 3000);
      }
    },
  };
  /* -----------------↑函数区域↑----------------- */

  /* -----------------↓执行入口↓----------------- */
  PopsPanel.initMenu();
  GreasyforkBusiness.beautifyPage();
  GreasyforkBusiness.beautifyGreasyforkBeautify();
  GreasyforkBusiness.beautifyUploadImage();
  DOMUtils.ready(function () {
    GreasyforkMenu.initEnv();
    if (PopsPanel.getValue("autoLogin")) {
      GreasyforkBusiness.autoLogin();
    }
    GreasyforkMenu.handleLocalGotoCallBack();
    GreasyforkBusiness.setFindCodeSearchBtn();
    GreasyforkBusiness.repairImgShow();
    GreasyforkBusiness.repairCodeLineNumber();
    GreasyforkBusiness.optimizeImageBrowsing();
    GreasyforkBusiness.scriptHomepageAddedTodaySUpdate();
    GreasyforkBusiness.addCopyCodeButton();
    GreasyforkBusiness.addMarkdownCopyButton();
    GreasyforkBusiness.languageSelectorLocale();
  });
  /* -----------------↑执行入口↑----------------- */
})();
