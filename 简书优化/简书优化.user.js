// ==UserScript==
// @name         简书优化
// @icon         https://www.jianshu.com/favicon.ico
// @namespace    https://greasyfork.org/zh-CN/scripts/485483
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version      2024.3.15.14.59
// @license      MIT
// @description  支持手机端和PC端，屏蔽广告，优化浏览体验，自动跳转拦截的URL
// @author       WhiteSevs
// @match        *://*.jianshu.com/*
// @match        *://*.jianshu.io/*
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_info
// @grant        unsafeWindow
// @run-at       document-start
// @require      https://update.greasyfork.org/scripts/456485/1343308/pops.js
// @require      https://update.greasyfork.org/scripts/455186/1343307/WhiteSevsUtils.js
// @require      https://update.greasyfork.org/scripts/465772/1343306/DOMUtils.js
// ==/UserScript==

(function () {
  if(typeof unsafeWindow === "undefined"){
    unsafeWindow = globalThis;
  }
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
  const log = new utils.Log(GM_info, unsafeWindow.console || console);
  log.config({
    autoClearConsole: false,
  });
  const GM_addStyle = utils.GM_addStyle;
  /**
   * 菜单
   */
  const GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });
  /**
   * 移除元素（未出现也可以等待出现）
   * @param {string} selectorText 元素选择器
   */
  const waitForElementToRemove = function (selectorText = "") {
    utils.waitNodeList(selectorText).then((nodeList) => {
      nodeList.forEach((item) => {
        item.remove();
      });
    });
  };

  const Optimization = {
    jianshu: {
      /**
       * 函数入口
       */
      init() {
        if (utils.isPhone()) {
          log.success("简书-移动端");
          this.Mobile.run();
        } else {
          log.success("简书-桌面端");
          this.PC.run();
        }
      },
      PC: {
        /**
         * 添加屏蔽CSS
         */
        addCSS() {
          GM_addStyle(`
            .download-app-guidance,
            .call-app-btn,
            .collapse-tips,
            .note-graceful-button,
            .app-open,
            .header-wrap,
            .recommend-wrap.recommend-ad,
            .call-app-Ad-bottom,
            #recommended-notes p.top-title span.more,
            #homepage .modal,
            button.index_call-app-btn,
            span.note__flow__download,
            .download-guide,
            #footer,
            .comment-open-app-btn-wrap,
            .nav.navbar-nav + div,
            .self-flow-ad,
            #free-reward-panel,
            div[id*='AdFive'],
            #index-aside-download-qrbox,
            .baidu-app-download-2eIkf_1,
            /* 底部的"小礼物走一走，来简书关注我"、赞赏支持和更多精彩内容，就在简书APP */
            div[role="main"] > div > section:first-child > div:nth-last-child(2),
            /* 它的内部是script标签，可能影响部分评论之间的高度问题 */
            div.adad_container{
              display:none !important;
            }
            body.reader-day-mode.normal-size {
              overflow: auto !important;
            }
            .collapse-free-content{
              height:auto !important;
            }
            .copyright{
              color:#000 !important;
            }
            #note-show .content .show-content-free .collapse-free-content:after{
              background-image:none !important;
            }
            footer > div > div{
              justify-content: center;
            }
            /* 修复底部最后编辑于：。。。在某些套壳浏览器上的错位问题 */
            #note-show .content .show-content-free .note-meta-time{
              margin-top: 0px !important;
            }
            `);
        },
        /**
         * 全文居中
         */
        articleCenter() {
          log.success("全文居中");
          GM_addStyle(`
            div[role=main] aside,
            div._3Pnjry{
              display: none !important;
            }
            div._gp-ck{
              width: 100% !important;
            }`);
          waitForElementToRemove("div[role=main] aside");
          waitForElementToRemove("div._3Pnjry");
          utils.waitNodeList("div._gp-ck").then((nodeList) => {
            nodeList.forEach((item) => {
              item.style["width"] = "100%";
            });
          });
        },
        /**
         * 去除剪贴板劫持
         */
        removeClipboardHijacking() {
          log.success("去除剪贴板劫持");
          const stopNativePropagation = (event) => {
            event.stopPropagation();
          };
          window.addEventListener("copy", stopNativePropagation, true);
          document.addEventListener("copy", stopNativePropagation, true);
        },
        /**
         * 自动展开全文
         */
        autoExpandFullText() {
          utils
            .waitNode(`div#homepage div[class*="dialog-"]`)
            .then((element) => {
              element.style["visibility"] = "hidden";
              utils.mutationObserver(element, {
                callback: (mutations) => {
                  if (mutations.length == 0) {
                    return;
                  }
                  if (mutations.target.style["display"] != "none") {
                    log.success("自动展开全文");
                    document
                      .querySelector(
                        'div#homepage div[class*="dialog-"] .cancel'
                      )
                      ?.click();
                  }
                },
                config: {
                  /* 子节点的变动（新增、删除或者更改） */
                  childList: false,
                  /* 属性的变动 */
                  attributes: true,
                  /* 节点内容或节点文本的变动 */
                  characterData: true,
                  /* 是否将观察器应用于该节点的所有后代节点 */
                  subtree: true,
                },
              });
            });
        },
        /**
         * 去除简书拦截其它网址的url并自动跳转
         */
        jumpRedirect() {
          if (window.location.pathname === "/go-wild") {
            /* 禁止简书拦截跳转 */
            window.stop();
            let search = window.location.href.replace(
              window.location.origin + "/",
              ""
            );
            search = decodeURIComponent(search);
            let newURL = search
              .replace(/^go-wild\?ac=2&url=/gi, "")
              .replace(/^https:\/\/link.zhihu.com\/\?target\=/gi, "");
            window.location.href = newURL;
          }
        },
        /**
         * 屏蔽相关文章
         */
        shieldRelatedArticles() {
          log.success("屏蔽相关文章");
          GM_addStyle(`
            div[role="main"] > div > section:nth-child(2){
              display: none !important;
            }
            `);
        },
        /**
         * 屏蔽评论区
         */
        shieldUserComments() {
          log.success("屏蔽评论区");
          GM_addStyle(`
            div#note-page-comment{
              display: none !important;
            }
            `);
        },
        /**
         * 屏蔽底部推荐阅读
         */
        shieldRecommendedReading() {
          log.success("屏蔽底部推荐阅读");
          GM_addStyle(`
            div[role="main"] > div > section:last-child{
              display: none !important;
            }
            `);
        },
        run() {
          this.addCSS();
          if (PopsPanel.getValue("JianShuAutoJumpRedirect_PC")) {
            Optimization.jianshu.PC.jumpRedirect();
          }
          if (PopsPanel.getValue("JianShuRemoveClipboardHijacking")) {
            this.removeClipboardHijacking();
          }
          if (PopsPanel.getValue("JianShuAutoExpandFullText")) {
            this.autoExpandFullText();
          }
          if (PopsPanel.getValue("JianShuArticleCenter")) {
            this.articleCenter();
          }
          if (PopsPanel.getValue("JianShuShieldRelatedArticles")) {
            this.shieldRelatedArticles();
          }
          if (PopsPanel.getValue("JianShuShieldUserComments")) {
            this.shieldUserComments();
          }
          if (PopsPanel.getValue("JianShuShieldRecommendedReading")) {
            this.shieldRecommendedReading();
          }
        },
      },
      Mobile: {
        addCSS() {
          Optimization.jianshu.PC.addCSS();
        },
        /**
         * 手机-屏蔽底部推荐阅读
         */
        removeFooterRecommendRead() {
          log.success("屏蔽底部推荐阅读");
          GM_addStyle(`
            #recommended-notes{
              display: none !important;
            }`);
        },
        /**
         * 处理原型
         */
        handlePrototype() {
          log.success("处理原型添加script标签");
          let originalAppendChild = Node.prototype.appendChild;
          Node.prototype.appendChild = function (element) {
            /* 允许添加的元素localName */
            let allowElementLocalNameList = ["img"];
            /* 不允许script标签加载包括jianshu.io的js资源，会让简书跳到广告页面 */
            if (
              element.src &&
              !element.src.includes("jianshu.io") &&
              !allowElementLocalNameList.includes(element.localName)
            ) {
              log.success(["禁止添加的元素", element]);
              return null;
            } else {
              return originalAppendChild.call(this, element);
            }
          };
        },
        /**
         * 屏蔽评论区
         */
        shieldUserComments() {
          log.success("屏蔽评论区");
          GM_addStyle(`
            #comment-main{
              display: none !important;
            }
            `);
        },
        run() {
          this.addCSS();
          if (PopsPanel.getValue("JianShuAutoJumpRedirect_Mobile")) {
            Optimization.jianshu.PC.jumpRedirect();
          }
          if (PopsPanel.getValue("JianShuHijackSchemeScriptLabel_Mobile")) {
            this.handlePrototype();
          }
          if (PopsPanel.getValue("JianShuRemoveClipboardHijacking_Mobile")) {
            Optimization.jianshu.PC.removeClipboardHijacking();
          }

          if (PopsPanel.getValue("JianShuAutoExpandFullText_Mobile")) {
            Optimization.jianshu.PC.autoExpandFullText();
          }
          if (PopsPanel.getValue("JianShuremoveFooterRecommendRead")) {
            this.removeFooterRecommendRead();
          }
          if (PopsPanel.getValue("JianShuShieldUserCommentsMobile")) {
            this.shieldUserComments();
          }
        },
      },
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
          text: `${GM_info?.script?.name || "简书优化"}-设置`,
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
     * @param {string} text 文字
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {?(event:Event,value: boolean)=>boolean} _callback_ 点击回调
     * @param {string|undefined} description 描述
     */
    getSwtichDetail(text, key, defaultValue, _callback_, description) {
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
          if (typeof _callback_ === "function") {
            if (_callback_(event, value)) {
              return;
            }
          }
          PopsPanel.setValue(key, value);
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
          id: "jianshu-panel-config-pc",
          title: "桌面端",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部推荐阅读",
                  "JianShuShieldRecommendedReading",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】评论区",
                  "JianShuShieldUserComments",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】相关文章",
                  "JianShuShieldRelatedArticles",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "全文居中",
                  "JianShuArticleCenter",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "自动展开全文",
                  "JianShuAutoExpandFullText",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "重定向链接",
                  "JianShuAutoJumpRedirect_PC",
                  true,
                  undefined,
                  "自动跳转简书拦截的Url链接"
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "拦截-剪贴板",
                  "JianShuRemoveClipboardHijacking",
                  true,
                  undefined,
                  "去除禁止复制"
                ),
              ],
            },
          ],
        },
        {
          id: "jianshu-panel-config-mobile",
          title: "移动端",
          forms: [
            {
              text: "屏蔽",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "【屏蔽】底部推荐阅读",
                  "JianShuremoveFooterRecommendRead",
                  false
                ),
                PopsPanel.getSwtichDetail(
                  "【屏蔽】评论区",
                  "JianShuShieldUserCommentsMobile",
                  false
                ),
              ],
            },
            {
              text: "功能",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "自动展开全文",
                  "JianShuAutoExpandFullText_Mobile",
                  true
                ),
                PopsPanel.getSwtichDetail(
                  "重定向链接",
                  "JianShuAutoJumpRedirect_Mobile",
                  true,
                  undefined,
                  "自动跳转简书拦截的Url链接"
                ),
              ],
            },
            {
              text: "劫持/拦截",
              type: "forms",
              forms: [
                PopsPanel.getSwtichDetail(
                  "拦截-剪贴板",
                  "JianShuRemoveClipboardHijacking_Mobile",
                  true,
                  undefined,
                  "去除禁止复制"
                ),
                PopsPanel.getSwtichDetail(
                  "劫持-唤醒/跳转App",
                  "JianShuHijackSchemeScriptLabel_Mobile",
                  true,
                  undefined,
                  "去除简书唤醒调用App"
                ),
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
        alert("共迁移数据量：" + Object.keys(oldData).length);
      } else {
        alert("不存在旧数据");
      }
    },
  };

  PopsPanel.initMenu();

  Optimization.jianshu.init();
})();
