// ==UserScript==
// @name            网页调试
// @namespace       https://greasyfork.org/zh-CN/scripts/475228
// @supportURL      https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version         2024.1.2
// @author          WhiteSevs
// @description     内置多种网页调试工具，包括：Eruda、vConsole、PageSpy，可在设置菜单中进行详细配置
// @icon            data:image/png;base64,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
// @license         MIT
// @match           *://*/*
// @run-at          document-start
// @grant           unsafeWindow
// @grant           GM_registerMenuCommand
// @grant           GM_unregisterMenuCommand
// @grant           GM_info
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_setClipboard
// @grant           GM_getResourceText
// @resource        Resource_erudaMonitor         https://fastly.jsdelivr.net/npm/eruda-monitor
// @resource        Resource_erudaFeatures        https://fastly.jsdelivr.net/npm/eruda-features
// @resource        Resource_erudaTiming          https://fastly.jsdelivr.net/npm/eruda-timing
// @resource        Resource_erudaCode            https://fastly.jsdelivr.net/npm/eruda-code
// @resource        Resource_erudaBenchmark       https://fastly.jsdelivr.net/npm/eruda-benchmark
// @resource        Resource_erudaGeolocation     https://fastly.jsdelivr.net/npm/eruda-geolocation
// @resource        Resource_erudaOrientation     https://fastly.jsdelivr.net/npm/eruda-orientation
// @resource        Resource_erudaTouches         https://fastly.jsdelivr.net/npm/eruda-touches
// @require         https://update.greasyfork.org/scripts/456485/1305152/pops.js
// @require         https://update.greasyfork.org/scripts/483694/1305163/Eruda-2.js
// @require         https://update.greasyfork.org/scripts/483695/1305166/vConsole-2.js
// @require         https://update.greasyfork.org/scripts/483696/1305167/PageSpy-2.js
// @require         https://update.greasyfork.org/scripts/455186/1303409/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  /**
   * @type {import("../库/Utils")}
   */
  const utils = window.Utils.noConflict();
  /**
   * 菜单对象
   */
  let GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });
  /**
   * @type {Window}
   */
  let currentWin = this || self;
  try {
    /* 处理eruda的log劫持失败问题 */
    Object.defineProperty(window, "window", {
      get() {
        return currentWin;
      },
    });
  } catch (error) {
    currentWin.console.warn("当前可能不在TamperMonkey环境中");
  }
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
          text: `${GM_info?.script?.name || "网页调试"}`,
          position: "center",
        },
        content: this.getContent(),
        mask: {
          enable: true,
          clickEvent: {
            toClose: true,
          },
        },
        width: "92vw",
        height: "80vh",
        drag: true,
        only: true,
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
          return Boolean(PopsPanel.getValue(key, defaultValue));
        },
        callback(event, value) {
          currentWin.console.log(`${value ? "开启" : "关闭"} ${text}`);
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
     * 获取输入框配置
     * @param {string} text
     * @param {string} key
     * @param {boolean} defaultValue
     * @param {string} [placeholder=""]
     * @param {?(event:Event,value: string)=>boolean} _callback_
     */
    getInputDetail(text, key, defaultValue, placeholder = "", _callback_) {
      return {
        text: text,
        type: "input",
        attributes: {
          "data-key": key,
          "data-default-value": defaultValue,
        },
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
     * 获取配置内容
     */
    getContent() {
      return [
        {
          id: "debug-panel-config-all",
          title: "总设置",
          headerTitle: "总设置",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "调试工具",
                  type: "select",
                  attributes: {
                    "data-key": "currentDebug",
                    "data-default-value": "eruda",
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
                  data: [
                    {
                      value: "eruda",
                      text: "Eruda",
                    },
                    {
                      value: "vconsole",
                      text: "VConsole",
                    },
                    {
                      value: "pagespy",
                      text: "PageSpy",
                    },
                  ],
                },
                this.getSwtichDetail(
                  "允许在iframe内运行",
                  "allowRunInIframe",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "debug-panel-config-eruda",
          title: "Eruda",
          headerTitle: "Eruda设置",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "版本",
                  type: "button",
                  attributes: {
                    "data-key": "eruda-version",
                    "data-default-value": GlobalDebug.erudaVersion,
                  },
                  buttonType: "primary",
                  buttonText: GlobalDebug.erudaVersion,
                  callback(event) {
                    window.open("https://github.com/liriliri/eruda", "_blank");
                  },
                },
                this.getSwtichDetail(
                  "自动打开面板",
                  "eruda-auto-open-panel",
                  false
                ),
                this.getInputDetail(
                  "默认展示的面板元素",
                  "eruda-default-show-panel-name",
                  "Console",
                  "请输入面板",
                  function (event, value) {
                    PopsPanel.setValue(
                      this.attributes["data-key"],
                      value.trim()
                    );
                  }
                ),
              ],
            },
            {
              text: "插件",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "eruda-monitor",
                  "eruda_plugin_Resource_erudaMonitor",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-features",
                  "eruda_plugin_Resource_erudaFeatures",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-timing",
                  "eruda_plugin_Resource_erudaTiming",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-code",
                  "eruda_plugin_Resource_erudaCode",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-benchmark",
                  "eruda_plugin_Resource_erudaBenchmark",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-geolocation",
                  "eruda_plugin_Resource_erudaGeolocation",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-orientation",
                  "eruda_plugin_Resource_erudaOrientation",
                  false
                ),
                this.getSwtichDetail(
                  "eruda-touches",
                  "eruda_plugin_Resource_erudaTouches",
                  false
                ),
              ],
            },
          ],
        },
        {
          id: "debug-panel-config-vconsole",
          title: "vConsole",
          headerTitle: "vConsole设置",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "版本",
                  type: "button",
                  attributes: {
                    "data-key": "vconsole-version",
                    "data-default-value": GlobalDebug.vConsoleVersion,
                  },
                  buttonType: "primary",
                  buttonText: GlobalDebug.vConsoleVersion,
                  callback(event) {
                    window.open(
                      "https://github.com/Tencent/vConsole",
                      "_blank"
                    );
                  },
                },
                this.getSwtichDetail(
                  "自动打开面板",
                  "vconsole-auto-open-panel",
                  false
                ),
                this.getSwtichDetail(
                  "禁止Log自动滚动",
                  "vconsole-disableLogScrolling",
                  false
                ),
                this.getSwtichDetail(
                  "显示日志的输出时间",
                  "vconsole-showTimestamps",
                  false
                ),
                {
                  text: "日志的上限数量",
                  type: "input",
                  attributes: {
                    "data-key": "vconsole-maxLogNumber",
                    "data-default-value": 1000,
                  },
                  getValue() {
                    let localValue = PopsPanel.getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                    localValue = parseInt(localValue);
                    if (isNaN(localValue)) {
                      return this.attributes["data-default-value"];
                    } else {
                      return localValue;
                    }
                  },
                  callback(event, value) {
                    let inputValue = parseInt(value);
                    if (isNaN(inputValue)) {
                      return;
                    }
                    PopsPanel.setValue(this.attributes["data-key"], inputValue);
                  },
                  placeholder: "请输入数字",
                  isNumber: true,
                },
                {
                  text: "请求记录的上限数量",
                  type: "input",
                  attributes: {
                    "data-key": "vconsole-maxNetworkNumber",
                    "data-default-value": 1000,
                  },
                  getValue() {
                    let localValue = PopsPanel.getValue(
                      this.attributes["data-key"],
                      this.attributes["data-default-value"]
                    );
                    localValue = parseInt(localValue);
                    if (isNaN(localValue)) {
                      return this.attributes["data-default-value"];
                    } else {
                      return localValue;
                    }
                  },
                  callback(event, value) {
                    let inputValue = parseInt(value);
                    if (isNaN(inputValue)) {
                      return;
                    }
                    PopsPanel.setValue(this.attributes["data-key"], inputValue);
                  },
                  placeholder: "请输入数字",
                  isNumber: true,
                },
              ],
            },
          ],
        },
        {
          id: "debug-panel-config-pagespy",
          title: "PageSpy",
          headerTitle: "PageSpy设置",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "版本",
                  type: "button",
                  attributes: {
                    "data-key": "pagespy-version",
                    "data-default-value": GlobalDebug.pageSpyVersion,
                  },
                  buttonType: "primary",
                  buttonText: GlobalDebug.pageSpyVersion,
                  callback(event) {
                    window.open(
                      "https://github.com/HuolalaTech/page-spy-web",
                      "_blank"
                    );
                  },
                },
                this.getSwtichDetail(
                  "禁止在调试端运行",
                  "pagespy-disable-run-in-debug-client",
                  true
                ),
              ],
            },
            {
              text: "配置",
              type: "forms",
              forms: [
                this.getInputDetail(
                  "api",
                  "pagespy-api",
                  GlobalDebug.pageSpyDefaultApi,
                  "请输入api地址",
                  function (event, value) {
                    PopsPanel.setValue(
                      this.attributes["data-key"],
                      value.trim()
                    );
                  }
                ),
                this.getInputDetail(
                  "clientOrigin",
                  "pagespy-clientOrigin",
                  GlobalDebug.pageSpyDefaultCliennOrigin,
                  "请输入clientOrigin地址",
                  function (event, value) {
                    PopsPanel.setValue(
                      this.attributes["data-key"],
                      value.trim()
                    );
                  }
                ),
                this.getInputDetail(
                  "project",
                  "pagespy-project",
                  "default",
                  "请输入project"
                ),
                this.getInputDetail(
                  "title",
                  "pagespy-title",
                  "--",
                  "请输入title"
                ),
                this.getSwtichDetail(
                  "自动渲染「圆形白底带 Logo」",
                  "pagespy-autoRender",
                  true
                ),
                {
                  text: "enableSSL",
                  type: "select",
                  attributes: {
                    "data-key": "pagespy-enableSSL",
                    "data-default-value": true,
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
                  data: [
                    {
                      value: null,
                      text: "默认(自动分析)",
                    },
                    {
                      value: true,
                      text: "开启",
                    },
                    {
                      value: false,
                      text: "关闭",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
    },
  };

  /**
   * 全局调试
   */
  const GlobalDebug = {
    erudaVersion: "3.0.1",
    vConsoleVersion: "3.15.1",
    pageSpyVersion: "1.4.10",
    pageSpyDefaultApi: "test.jikejishu.com",
    pageSpyDefaultCliennOrigin: "https://test.jikejishu.com",
    iframeUrlList: [],
    /**
     * 处理当在iframe内加载时，是否允许执行，如果允许，那么把url添加到菜单中
     */
    handleIframe() {
      if (top === self) {
        return true;
      }
      if (!PopsPanel.getValue("allowRunInIframe")) {
        return false;
      }
      this.iframeUrlList.push(window.location.href);
      top.console.log("iframe信息：" + window.location.href);
      GM_Menu.add({
        key: "iframeUrl",
        text: window.location.href,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback() {
          GM_setClipboard(window.location.href);
        },
      });
      return true;
    },
    /**
     * 执行当前的调试工具
     */
    runDebugTool() {
      /* 当前的调试工具，默认为eruda */
      let currentDebugTool = PopsPanel.getValue("currentDebug");
      currentDebugTool = currentDebugTool.toString().toLowerCase();
      currentWin.console.log("currentDebugTool：" + currentDebugTool);
      if (currentDebugTool === "vconsole") {
        /* vConsole */
        GlobalDebug.vConsole();
      } else if (currentDebugTool === "pagespy") {
        /* PageSpy */
        GlobalDebug.pageSpy();
      } else {
        /* eruda */
        GlobalDebug.eruda();
      }
    },
    eruda() {
      initEruda("Eruda", currentWin);
      let eruda = currentWin.Eruda;
      if (!eruda) {
        alert("调试工具【eruda】注册全局失败，请反馈开发者");
        return;
      }
      GlobalDebug.erudaVersion = eruda.version;
      eruda.init();
      currentWin.console.log(`eruda当前版本：${eruda.version}`);
      currentWin.console.log(
        `eruda项目地址：https://github.com/liriliri/eruda`
      );
      unsafeWindow._eruda_ = eruda;
      currentWin.console.log("eruda的全局变量名：_eruda_");
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaMonitor")) {
        try {
          eval(GM_getResourceText("Resource_erudaMonitor"));
          eruda.add(erudaMonitor);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaFeatures")) {
        try {
          eval(GM_getResourceText("Resource_erudaFeatures"));
          eruda.add(erudaFeatures);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaTiming")) {
        try {
          eval(GM_getResourceText("Resource_erudaTiming"));
          eruda.add(erudaTiming);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaCode")) {
        try {
          eval(GM_getResourceText("Resource_erudaCode"));
          eruda.add(erudaCode);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaBenchmark")) {
        try {
          eval(GM_getResourceText("Resource_erudaBenchmark"));
          eruda.add(erudaBenchmark);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaGeolocation")) {
        try {
          eval(GM_getResourceText("Resource_erudaGeolocation"));
          eruda.add(erudaGeolocation);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaOrientation")) {
        try {
          eval(GM_getResourceText("Resource_erudaOrientation"));
          eruda.add(erudaOrientation);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaTouches")) {
        try {
          eval(GM_getResourceText("Resource_erudaTouches"));
          eruda.add(erudaTouches);
        } catch (error) {
          currentWin.console.error("👆加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda-auto-open-panel")) {
        let defaultShowName = PopsPanel.getValue(
          "eruda-default-show-panel-name",
          ""
        );
        eruda.show();
        setTimeout(() => {
          eruda.show(defaultShowName);
        }, 250);
      }
    },
    vConsole() {
      initVConsole("VConsole", currentWin);
      let vConsole = currentWin.VConsole;
      if (!vConsole) {
        alert("调试工具【vConsole】注册全局失败，请反馈开发者");
        return;
      }
      let vconsole = new vConsole({
        defaultPlugins: ["system", "network", "element", "storage"],
        theme: "light",
        disableLogScrolling: PopsPanel.getValue("vconsole-disableLogScrolling"),
        maxLogNumber: PopsPanel.getValue("vconsole-maxLogNumber"),
        onReady() {
          if (PopsPanel.getValue("vconsole-auto-open-panel")) {
            vconsole.show();
          }
        },
      });
      GlobalDebug.vConsoleVersion = vconsole.version;
      vconsole.setOption(
        "log.showTimestamps",
        PopsPanel.getValue("vconsole-showTimestamps")
      );
      vconsole.setOption(
        "log.maxLogNumber",
        PopsPanel.getValue("vconsole-maxLogNumber", 1000)
      );
      vconsole.setOption(
        "log.maxNetworkNumber",
        PopsPanel.getValue("vconsole-maxNetworkNumber", 1000)
      );
      currentWin.console.log(`VConsole当前版本：${vconsole.version}`);
      currentWin.console.log(
        `VConsole项目地址：https://github.com/Tencent/vConsole`
      );
      unsafeWindow._vConsole_ = vconsole;
      currentWin.console.log("VConsole的全局变量名：_vConsole_");
    },
    pageSpy() {
      let api = PopsPanel.getValue(
        "pagespy-api",
        GlobalDebug.pageSpyDefaultApi
      );
      let clientOrigin = PopsPanel.getValue(
        "pagespy-clientOrigin",
        GlobalDebug.pageSpyDefaultCliennOrigin
      );
      if (PopsPanel.getValue("pagespy-disable-run-in-debug-client")) {
        if (window.location.hostname.includes(api)) {
          return;
        }
        if (window.location.origin.includes(clientOrigin)) {
          return;
        }
      }
      let __pageSpy__ = initPageSpy();
      if (!__pageSpy__) {
        alert("调试工具【PageSpy】获取失败，请反馈开发者");
        return;
      }
      let $pageSpy = new __pageSpy__({
        // SDK 会从引入的路径自动分析并决定 Server 的地址（api）和调试端的地址（clientOrigin）
        // 假设你从 https://example.com/page-spy/index.min.js 引入，那么 SDK 会在内部设置：
        //   - api: "example.com"
        //   - clientOrigin: "https://example.com"
        // 如果你的服务部署在别处，就需要在这里手动指定去覆盖。
        api: api,
        clientOrigin: clientOrigin,

        // project 作为信息的一种聚合，可以在调试端房间列表进行搜索
        project: PopsPanel.getValue("pagespy-project", true),

        // title 供用户提供自定义参数，可以用于区分当前调试的客户端
        // 对应的信息显示在每个调试连接面板的「设备id」下方
        title: PopsPanel.getValue("pagespy-title", true),

        // 指示 SDK 初始化完成，是否自动在客户端左下角渲染「圆形白底带 Logo」的控件
        // 如果设置为 false, 可以调用 window.$pageSpy.render() 手动渲染
        autoRender: PopsPanel.getValue("pagespy-autoRender", true),

        // 手动指定 PageSpy 服务的 scheme。
        // 这在 SDK 无法正确分析出 scheme 可以使用，例如 PageSpy 的浏览器插件
        // 是通过 chrome-extension://xxx/sdk/index.min.js 引入 SDK，这会
        // 被 SDK 解析成无效的 "chrome-extension://" 并回退到 ["http://", "ws://"]。
        //   - （默认）传值 undefined 或者 null：SDK 会自动分析；
        //   - 传递 boolean 值：
        //     - true：SDK 将通过 ["https://", "wss://"] 访问 PageSpy 服务
        //     - false：SDK 将通过 ["http://", "ws://"] 访问 PageSpy 服务
        enableSSL: PopsPanel.getValue("pagespy-enableSSL", true),
      });
      unsafeWindow.$pageSpy = $pageSpy;
      currentWin.console.log($pageSpy);
      GlobalDebug.pageSpyVersion = unsafeWindow.$pageSpy.version;
      currentWin.console.log("PageSpy全局变量：$pageSpy");
      utils
        .waitPropertyByInterval(
          unsafeWindow.$pageSpy,
          function () {
            return unsafeWindow.$pageSpy.root != null;
          },
          250,
          10000
        )
        .then(() => {
          /**
           * @type {HTMLElement}
           */
          let contentElement =
            unsafeWindow.$pageSpy.root.querySelector(".page-spy-content");
          let goToRoomListElement = document.createElement("div");
          let goToDebugElement = document.createElement("div");
          goToDebugElement.className = "page-spy-content__ok";
          goToDebugElement.innerHTML = "前往调试";
          goToRoomListElement.className = "page-spy-content__ok";
          goToRoomListElement.innerHTML = "前往房间列表";
          goToDebugElement.addEventListener(
            "click",
            function () {
              window.open(
                `${clientOrigin}/#/devtools?version=${encodeURIComponent(
                  unsafeWindow.$pageSpy.name
                )}&address=${encodeURIComponent(
                  unsafeWindow.$pageSpy.address
                )}`,
                "_blank"
              );
            },
            {
              capture: true,
            }
          );
          goToRoomListElement.addEventListener(
            "click",
            function () {
              window.open(`${clientOrigin}/#/room-list`, "_blank");
            },
            {
              capture: true,
            }
          );
          contentElement.appendChild(goToRoomListElement);
          contentElement.appendChild(goToDebugElement);
        });
    },
  };

  PopsPanel.initMenu();
  if (GlobalDebug.handleIframe()) {
    GlobalDebug.runDebugTool();
  }
})();
