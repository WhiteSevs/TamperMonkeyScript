// ==UserScript==
// @name            网页调试
// @namespace       https://greasyfork.org/zh-CN/scripts/475228
// @supportURL      https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @version         2024.5.25
// @author          WhiteSevs
// @description     内置多种网页调试工具，包括：Eruda、vConsole、PageSpy、Chii，可在设置菜单中进行详细配置
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
// @resource        Resource_erudaMonitor             https://fastly.jsdelivr.net/npm/eruda-monitor
// @resource        Resource_erudaFeatures            https://fastly.jsdelivr.net/npm/eruda-features
// @resource        Resource_erudaTiming              https://fastly.jsdelivr.net/npm/eruda-timing
// @resource        Resource_erudaCode                https://fastly.jsdelivr.net/npm/eruda-code
// @resource        Resource_erudaBenchmark           https://fastly.jsdelivr.net/npm/eruda-benchmark
// @resource        Resource_Leaflet                  https://update.greasyfork.org/scripts/483765/1360579/Leaflet.js
// @resource        Resource_erudaGeolocation         https://fastly.jsdelivr.net/gh/WhiteSevs/eruda-geolocation/eruda-geolocation.js
// @resource        Resource_erudaOrientation         https://fastly.jsdelivr.net/gh/WhiteSevs/eruda-orientation/eruda-orientation.js
// @resource        Resource_erudaTouches             https://fastly.jsdelivr.net/npm/eruda-touches
// @resource        Resource_erudaOutlinePlugin       https://fastly.jsdelivr.net/npm/eruda-outline-plugin
// @resource        Resource_erudaPixel               https://fastly.jsdelivr.net/npm/eruda-pixel
// @resource        Resource_vConsoleVueDevtools      https://fastly.jsdelivr.net/npm/vue-vconsole-devtools@1.0.9/dist/vue_plugin.min.js
// @require         https://update.greasyfork.org/scripts/456485/1360571/pops.js
// @require         https://update.greasyfork.org/scripts/483694/1360576/Eruda-2.js
// @require         https://update.greasyfork.org/scripts/483695/1360577/vConsole-2.js
// @require         https://update.greasyfork.org/scripts/483696/1382916/PageSpy-2.js
// @require         https://update.greasyfork.org/scripts/455186/1365298/WhiteSevsUtils.js
// ==/UserScript==

(function () {
  if (typeof unsafeWindow === "undefined") {
    unsafeWindow = globalThis || window || self;
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
   * 菜单对象
   */
  const GM_Menu = new utils.GM_Menu({
    GM_getValue,
    GM_setValue,
    GM_registerMenuCommand,
    GM_unregisterMenuCommand,
  });
  /**
   * @type {Window & typeof globalThis}
   */
  let currentWin = unsafeWindow;
  let console = currentWin.console;
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
          callback() {
            PopsPanel.showPanel();
          },
        },
      ]);
    },
    isTopWindow() {
      return unsafeWindow.window.self === unsafeWindow.window.top;
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
        width: utils.isPhone() ? "92vw" : "650px",
        height: utils.isPhone() ? "80vh" : "500px",
        drag: true,
        only: true,
        zIndex: 200000000,
        style: `
        aside.pops-panel-aside{
          width: 20%;
        }
        `,
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
          console.log(`${value ? "开启" : "关闭"} ${text}`);
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
     * @param {string} text 文字
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {string} [placeholder=""] 提示
     * @param {?(event:Event,value: string)=>boolean} _callback_ 输入回调
     * @param {string|undefined} description 描述
     * @returns {PopsPanelInputDetails}
     */
    getInputDetail(
      text,
      key,
      defaultValue,
      placeholder = "",
      _callback_,
      description
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
     * 获取数字输入框配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {boolean} defaultValue 默认值
     * @param {string} [placeholder=""] 提示
     * @param {?(event:Event,value: string)=>boolean} _callback_ 输入回调
     * @param {string|undefined} description 描述
     * @returns {PopsPanelInputDetails}
     */
    getNumberInputDetail(
      text,
      key,
      defaultValue,
      placeholder = "",
      _callback_,
      description
    ) {
      let config = this.getInputDetail(
        text,
        key,
        defaultValue,
        (placeholder = ""),
        _callback_,
        description
      );
      config.isNumber = true;
      config.getValue = function () {
        let localValue = PopsPanel.getValue(key, defaultValue);
        localValue = parseInt(localValue);
        if (isNaN(localValue)) {
          return defaultValue;
        } else {
          return localValue;
        }
      };
      config.callback = function (event, value, valueAsNumber) {
        if (typeof _callback_ === "function") {
          if (_callback_(event, value)) {
            return;
          }
        }
        if (value === "") {
          PopsPanel.deleteValue(key);
          return;
        }
        if (isNaN(valueAsNumber)) {
          return;
        }
        PopsPanel.setValue(key, valueAsNumber);
      };
      return config;
    },
    /**
     * 获取下拉列表配置
     * @param {string} text 文字
     * @param {string} key 键
     * @param {any} defaultValue 默认值
     * @param {{
     * value: any,
     * text: string,
     * disable?(value: any): boolean,
     * }[]} data 数据
     * @param {string} description （可选）描述
     * @param {(event:PointerEvent, isSelectedValue: any, isSelectedText:string)=>void} selectCallBack（可选）选择的回调
     * @returns {PopsPanelSelectDetails}
     */
    getSelectDetail(
      text,
      key,
      defaultValue,
      data,
      description,
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
     */
    getContent() {
      /**
       * @type {PopsPanelContentConfig[]}
       */
      let content = [
        {
          id: "debug-panel-config-all",
          title: "总设置",
          headerTitle: "总设置",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                this.getSelectDetail(
                  "调试工具",
                  "currentDebug",
                  "eruda",
                  [
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
                    {
                      value: "chii",
                      text: "Chii",
                    },
                  ],
                  void 0,
                  void 0
                ),
                this.getSwtichDetail(
                  "允许在iframe内加载",
                  "allowRunInIframe",
                  false,
                  void 0,
                  "如果指定本脚本的容器并没有在iframe内执行本脚本，那么该功能将不会生效"
                ),
                this.getSwtichDetail(
                  "主动加载调试工具",
                  "autoLoadDebugTool",
                  true,
                  void 0,
                  "关闭后将会在脚本菜单注册按钮，有3种状态【加载并显示调试工具】、【隐藏调试工具】、【显示调试工具】"
                ),
              ],
            },
          ],
        },
        {
          id: "debug-panel-config-eruda",
          title: "Eruda",
          headerTitle:
            "<a href='https://github.com/liriliri/eruda/blob/master/README_CN.md' target='_blank'>Eruda设置</a>",
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
                  false,
                  void 0,
                  "加载完毕后自动显示面板内容"
                ),

                this.getSelectDetail(
                  "默认展示的面板元素",
                  "eruda-default-show-panel-name",
                  "console",
                  [
                    {
                      text: "Console",
                      value: "console",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-console");
                      },
                    },
                    {
                      text: "Elements",
                      value: "elements",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-elements");
                      },
                    },
                    {
                      text: "Network",
                      value: "network",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-network");
                      },
                    },
                    {
                      text: "Resources",
                      value: "resources",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-resources");
                      },
                    },
                    {
                      text: "Sources",
                      value: "sources",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-sources");
                      },
                    },
                    {
                      text: "Info",
                      value: "info",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-info");
                      },
                    },
                    {
                      text: "Snippets",
                      value: "snippets",
                      disable() {
                        return !PopsPanel.getValue("eruda-panel-snippets");
                      },
                    },
                    {
                      text: "Monitor",
                      value: "monitor",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaMonitor"
                        );
                      },
                    },
                    {
                      text: "Features",
                      value: "features",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaFeatures"
                        );
                      },
                    },
                    {
                      text: "Timing",
                      value: "timing",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaTiming"
                        );
                      },
                    },
                    {
                      text: "Code",
                      value: "code",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaCode"
                        );
                      },
                    },
                    {
                      text: "Benchmark",
                      value: "benchmark",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaBenchmark"
                        );
                      },
                    },
                    {
                      text: "Geolocation",
                      value: "geolocation",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaGeolocation"
                        );
                      },
                    },
                    {
                      text: "Orientation",
                      value: "orientation",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaOrientation"
                        );
                      },
                    },
                    {
                      text: "Touches",
                      value: "touches",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaTouches"
                        );
                      },
                    },
                    {
                      text: "Outline",
                      value: "outline",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaOutlinePlugin"
                        );
                      },
                    },
                    {
                      text: "Pixel",
                      value: "ixel",
                      disable() {
                        return !PopsPanel.getValue(
                          "eruda_plugin_Resource_erudaPixel"
                        );
                      },
                    },
                    {
                      text: "Settings",
                      value: "settings",
                    },
                  ],
                  "开启【自动打开面板】才会生效",
                  void 0
                ),
              ],
            },
            {
              text: "面板",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "Console",
                  "eruda-panel-console",
                  true,
                  void 0,
                  "控制台"
                ),
                this.getSwtichDetail(
                  "Elements",
                  "eruda-panel-elements",
                  true,
                  void 0,
                  "元素"
                ),
                this.getSwtichDetail(
                  "Network",
                  "eruda-panel-network",
                  true,
                  void 0,
                  "网络"
                ),
                this.getSwtichDetail(
                  "Resources",
                  "eruda-panel-resources",
                  true,
                  void 0,
                  "资源"
                ),
                this.getSwtichDetail(
                  "Sources",
                  "eruda-panel-sources",
                  true,
                  void 0,
                  "源代码"
                ),
                this.getSwtichDetail(
                  "Info",
                  "eruda-panel-info",
                  true,
                  void 0,
                  "信息"
                ),
                this.getSwtichDetail(
                  "Snippets",
                  "eruda-panel-snippets",
                  true,
                  void 0,
                  "拓展"
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
                  false,
                  void 0,
                  "展示页面的 fps 和内存信息"
                ),
                this.getSwtichDetail(
                  "eruda-features",
                  "eruda_plugin_Resource_erudaFeatures",
                  false,
                  void 0,
                  "浏览器特性检测"
                ),
                this.getSwtichDetail(
                  "eruda-timing",
                  "eruda_plugin_Resource_erudaTiming",
                  false,
                  void 0,
                  "展示性能资源数据"
                ),
                this.getSwtichDetail(
                  "eruda-code",
                  "eruda_plugin_Resource_erudaCode",
                  false,
                  void 0,
                  "运行 JavaScript 代码"
                ),
                this.getSwtichDetail(
                  "eruda-benchmark",
                  "eruda_plugin_Resource_erudaBenchmark",
                  false,
                  void 0,
                  "运行 JavaScript 性能测试"
                ),
                this.getSwtichDetail(
                  "eruda-geolocation",
                  "eruda_plugin_Resource_erudaGeolocation",
                  false,
                  void 0,
                  "测试地理位置接口"
                ),
                this.getSwtichDetail(
                  "eruda-orientation",
                  "eruda_plugin_Resource_erudaOrientation",
                  false,
                  void 0,
                  "测试重力感应接口"
                ),
                this.getSwtichDetail(
                  "eruda-touches",
                  "eruda_plugin_Resource_erudaTouches",
                  false,
                  void 0,
                  "(暂时无效)可视化屏幕 Touch 事件触发"
                ),
                this.getSwtichDetail(
                  "eruda-outline-plugin",
                  "eruda_plugin_Resource_erudaOutlinePlugin",
                  false,
                  void 0,
                  "给页面的元素添加边框"
                ),
                this.getSwtichDetail(
                  "eruda-pixel",
                  "eruda_plugin_Resource_erudaPixel",
                  false,
                  void 0,
                  "高精度的UI恢复辅助工具"
                ),
              ],
            },
          ],
        },
        {
          id: "debug-panel-config-vconsole",
          title: "vConsole",
          headerTitle:
            "<a href='https://github.com/Tencent/vConsole/blob/dev/README_CN.md' target='_blank'>vConsole设置</a>",
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
                  false,
                  void 0,
                  "加载完毕后自动显示面板内容"
                ),
                this.getSelectDetail(
                  "默认展示的面板元素",
                  "vconsole-default-show-panel-name",
                  "default",
                  [
                    {
                      text: "Log",
                      value: "default",
                    },
                    {
                      text: "System",
                      value: "system",
                      disable() {
                        return !PopsPanel.getValue("vConsole-panel-system");
                      },
                    },
                    {
                      text: "Network",
                      value: "network",
                      disable() {
                        return !PopsPanel.getValue("vConsole-panel-network");
                      },
                    },
                    {
                      text: "Element",
                      value: "element",
                      disable() {
                        return !PopsPanel.getValue("vConsole-panel-element");
                      },
                    },
                    {
                      text: "Storage",
                      value: "storage",
                      disable() {
                        return !PopsPanel.getValue("vConsole-panel-storage");
                      },
                    },
                    {
                      text: "Stats",
                      value: "stats",
                      disable() {
                        return !PopsPanel.getValue(
                          "vConsole_plugin_Resource_vConsole_Stats"
                        );
                      },
                    },
                    {
                      text: "exportLog",
                      value: "exportlog",
                      disable() {
                        return !PopsPanel.getValue(
                          "vConsole_plugin_Resource_vConsole_ExportLog"
                        );
                      },
                    },
                    {
                      text: "Vue",
                      value: "vue",
                      disable() {
                        return !PopsPanel.getValue(
                          "vConsole_plugin_Resource_vConsoleVueDevtools"
                        );
                      },
                    },
                  ],
                  "开启【自动打开面板】才会生效",
                  void 0
                ),
              ],
            },

            {
              text: "面板",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "System",
                  "vConsole-panel-system",
                  true,
                  void 0,
                  "控制台"
                ),
                this.getSwtichDetail(
                  "Network",
                  "vConsole-panel-network",
                  true,
                  void 0,
                  "元素"
                ),
                this.getSwtichDetail(
                  "Element",
                  "vConsole-panel-element",
                  true,
                  void 0,
                  "网络"
                ),
                this.getSwtichDetail(
                  "Storage",
                  "vConsole-panel-storage",
                  true,
                  void 0,
                  "资源"
                ),
              ],
            },
            {
              text: "配置",
              type: "forms",
              forms: [
                this.getSelectDetail(
                  "主题",
                  "vConsole-theme",
                  "light",
                  [
                    {
                      value: "auto",
                      text: "自动",
                    },
                    {
                      value: "light",
                      text: "浅色主题",
                    },
                    {
                      value: "dark",
                      text: "深色主题",
                    },
                  ],
                  void 0,
                  void 0
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
                this.getNumberInputDetail(
                  "日志的上限数量",
                  "vconsole-maxLogNumber",
                  1000,
                  "请输入数字"
                ),
                this.getNumberInputDetail(
                  "请求记录的上限数量",
                  "vconsole-maxNetworkNumber",
                  1000,
                  "请输入数字"
                ),
              ],
            },
            {
              text: "Storage配置",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "Cookies",
                  "vConsole-storage-defaultStorages-cookies",
                  true,
                  void 0,
                  "显示Cookies"
                ),
                this.getSwtichDetail(
                  "LocalStorage",
                  "vConsole-storage-defaultStorages-localStorage",
                  true,
                  void 0,
                  "显示LocalStorage"
                ),
                this.getSwtichDetail(
                  "SessionStorage",
                  "vConsole-storage-defaultStorages-sessionStorage",
                  true,
                  void 0,
                  "显示SessionStorage"
                ),
              ],
            },
            {
              text: "插件",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "vconsole-stats-plugin",
                  "vConsole_plugin_Resource_vConsole_Stats",
                  false,
                  void 0,
                  "A vConsole plugin which can show Stats in front-end."
                ),
                this.getSwtichDetail(
                  "vconsole-outputlog-plugin",
                  "vConsole_plugin_Resource_vConsole_ExportLog",
                  false,
                  void 0,
                  "使用该插件可以复制或下载console中打印的log"
                ),
                this.getSwtichDetail(
                  "vconsole-vue-devtools-plugin",
                  "vConsole_plugin_Resource_vConsoleVueDevtools",
                  false,
                  void 0,
                  "Vue-vConsole-devtools 是一款vConsole插件，把Vue.js官方调试工具vue-devtools移植到移动端，可以直接在移动端查看调试Vue.js应用"
                ),
              ],
            },
          ],
        },
        {
          id: "debug-panel-config-pagespy",
          title: "PageSpy",
          headerTitle:
            "<a href='https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md' target='_blank'>PageSpy设置</a>",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "注意！隐私保护！",
                  type: "button",
                  buttonType: "danger",
                  buttonText: "了解详情",
                  callback(event) {
                    pops.confirm({
                      title: {
                        text: "提示",
                      },
                      content: {
                        text: `下面默认配置的${GlobalDebug.pageSpyDefaultApi}是仅供测试使用的，其他人也可以看到你的调试信息，包括Cookie等信息，如果想用，请自己搭建一个调试端`,
                      },
                      btn: {
                        reverse: true,
                        position: "end",
                        ok: {
                          text: "前往了解更多",
                          callback() {
                            window.open(
                              "https://github.com/HuolalaTech/page-spy-web/wiki/%F0%9F%90%9E-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94#user-content-testjikejishucom-%E6%98%AF%E5%AE%98%E6%96%B9%E6%8F%90%E4%BE%9B%E7%9A%84%E5%9F%9F%E5%90%8D%E5%90%97%E4%B8%80%E7%9B%B4%E5%8F%AF%E4%BB%A5%E7%94%A8%E5%90%97",
                              "_blank"
                            );
                          },
                        },
                      },
                      mask: {
                        enable: true,
                      },
                    });
                  },
                },
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
                  true,
                  void 0,
                  "调试端是下面配置的api/clientOrigin地址"
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
                  "",
                  function (event, value) {
                    PopsPanel.setValue("pagespy-api", value.trim());
                  },
                  "服务器地址的 Host"
                ),
                this.getInputDetail(
                  "clientOrigin",
                  "pagespy-clientOrigin",
                  GlobalDebug.pageSpyDefaultCliennOrigin,
                  "",
                  function (event, value) {
                    PopsPanel.setValue("pagespy-clientOrigin", value.trim());
                  },
                  "服务器地址的 Origin"
                ),
                this.getInputDetail(
                  "project",
                  "pagespy-project",
                  "default",
                  void 0,
                  void 0,
                  "项目名称"
                ),
                this.getInputDetail(
                  "title",
                  "pagespy-title",
                  "--",
                  void 0,
                  void 0,
                  "自定义标题"
                ),
                this.getSwtichDetail(
                  "autoRender",
                  "pagespy-autoRender",
                  true,
                  void 0,
                  "自动渲染「圆形白底带 Logo」"
                ),
                {
                  text: "enableSSL",
                  description: "是否https",
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
        {
          id: "debug-panel-config-chii",
          title: "Chii",
          headerTitle:
            "<a href='https://github.com/liriliri/chii/blob/master/README_CN.md' target='_blank'>Chii设置</a>",
          forms: [
            {
              text: "功能",
              type: "forms",
              forms: [
                {
                  text: "调试页面",
                  type: "button",
                  buttonType: "primary",
                  buttonText: "前往",
                  disable: Boolean(
                    PopsPanel.getValue("chii-script-embedded", true)
                  ),
                  callback(event) {
                    let url = PopsPanel.getValue(
                      "chii-debug-url",
                      GlobalDebug.chiiUrl
                    );
                    window.open(url, "_blank");
                  },
                },
              ],
            },
            {
              text: "配置",
              type: "forms",
              forms: [
                this.getSwtichDetail(
                  "本页展示",
                  "chii-script-embedded",
                  true,
                  (event, value) => {
                    let $shadowRoot = event.target.getRootNode();
                    let button = $shadowRoot.querySelector(
                      "li.pops-panel-forms-container-item ul > li > .pops-panel-button button"
                    );
                    if (value) {
                      button.setAttribute("disabled", true);
                    } else {
                      button.removeAttribute("disabled");
                    }
                  },
                  "将调试器展示在同一页面中"
                ),
                this.getSwtichDetail(
                  "禁止在调试端运行",
                  "chii-disable-run-in-debug-url",
                  true,
                  void 0,
                  "调试端是下面配置的【调试页面Url】"
                ),
                this.getSwtichDetail(
                  "检测script加载",
                  "chii-check-script-load",
                  true,
                  void 0,
                  "失败会有alert提示弹出"
                ),
                this.getInputDetail(
                  "调试页面Url",
                  "chii-debug-url",
                  GlobalDebug.chiiUrl,
                  "请输入链接Url",
                  void 0,
                  "配置【调试页面】的Url"
                ),
                this.getInputDetail(
                  "来源js",
                  "chii-target-js",
                  GlobalDebug.chiiDetaultScriptJs,
                  "请输入目标js文件",
                  void 0,
                  "用于注入页面来进行调试"
                ),
              ],
            },
            {
              text: "本页展示的配置",
              type: "forms",
              forms: [
                {
                  text: "高度",
                  type: "slider",
                  description: "移动端不好拖拽，使用这个配置高度",
                  attributes: {
                    "data-key": ChiiHeight.$data.key,
                    "data-default-value": ChiiHeight.$data.winHalfHeight,
                  },
                  getValue() {
                    return ChiiHeight.getLocalHeight();
                  },
                  callback(event, value) {
                    ChiiHeight.setGMLocalHeight(value);
                    ChiiHeight.setLocalHeight(value);
                    let chiiContainer = Array.from(
                      document.querySelectorAll(".__chobitsu-hide__")
                    ).find((ele) => ele.querySelector("iframe"));
                    if (chiiContainer) {
                      chiiContainer.style.height = value + "px";
                    }
                  },
                  getToolTipContent(value) {
                    return value + "px";
                  },
                  min: 0,
                  max: ChiiHeight.$data.winHeight,
                  step: 1,
                },
              ],
            },
          ],
        },
      ];
      return content;
    },
  };

  const ChiiHeight = {
    $data: {
      key: "chii-embedded-height",
      winHeight: parseInt(globalThis.innerHeight),
      winHalfHeight: parseInt(globalThis.innerHeight / 2),
    },
    init() {
      let height = this.$data.winHalfHeight;
      if (!this.isExistGMLocalHeight()) {
        /* GM未创建或不是数字，设置值到油猴数据管理器中 */
        this.setGMLocalHeight(height);
      } else {
        height = this.getGMLocalHeight();
      }
      this.setLocalHeight(height);
    },
    isExistLocalHeight() {
      return typeof this.getLocalHeight() === "number";
    },
    /**
     *
     * @returns {number}
     */
    getLocalHeight() {
      return globalThis.localStorage.getItem(this.$data.key);
    },
    /**
     *
     * @param {number} value
     */
    setLocalHeight(value) {
      if (typeof value !== "number") {
        console.log(value);
        throw new TypeError(`${this.$data.key}的值必须是number`);
      }
      globalThis.localStorage.setItem(this.$data.key, value);
      if (this.getLocalHeight() !== value) {
        globalThis.localStorage[this.$data.key] = value;
      }
    },
    isExistGMLocalHeight() {
      return typeof this.getGMLocalHeight() === "number";
    },
    /**
     *
     * @returns {number}
     */
    getGMLocalHeight() {
      return PopsPanel.getValue(this.$data.key);
    },
    /**
     *
     * @param {number} value
     */
    setGMLocalHeight(value) {
      if (typeof value !== "number") {
        console.log(value);
        throw new TypeError(`${this.$data.key}的值必须是number`);
      }
      PopsPanel.setValue(this.$data.key, value);
    },
  };

  const vConsolePlugin = {
    State(vConsole, VConsole) {
      const Stats = function () {
        var mode = 0;
        var localPositionStorageKey = "vConsole-Plugin-Stats-Position";
        function getLocalPositionStorage() {
          return GM_getValue(localPositionStorageKey, {
            top: 0,
            left: 0,
          });
        }
        function setLocalPositionStorage(left, top) {
          GM_setValue(localPositionStorageKey, {
            left: left,
            top: top,
          });
        }
        var container = document.createElement("div");
        let oldPosition = getLocalPositionStorage();
        container.style.cssText = `position:fixed;top:${oldPosition.top}px;left:${oldPosition.left}px;cursor:pointer;opacity:0.9;z-index:10000`;
        container.addEventListener(
          "click",
          function (event) {
            event.preventDefault();
            showPanel(++mode % container.children.length);
          },
          {
            capture: true,
          }
        );
        function addPanel(panel) {
          container.appendChild(panel.dom);
          return panel;
        }

        function showPanel(id) {
          for (var i = 0; i < container.children.length; i++) {
            container.children[i].style.display = i === id ? "block" : "none";
          }

          mode = id;
        }

        function drag() {
          pops.config.Utils.drag(container, {
            dragElement: container,
            limit: true,
            extraDistance: 2,
            moveCallBack(moveElement, left, top) {
              setLocalPositionStorage(left, top);
            },
          });
        }

        var beginTime = (performance || Date).now(),
          prevTime = beginTime,
          frames = 0;

        var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
        var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));

        if (self.performance && self.performance.memory) {
          var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
        }

        showPanel(0);
        drag();
        return {
          REVISION: 16,

          dom: container,

          addPanel: addPanel,
          showPanel: showPanel,

          begin: function () {
            beginTime = (performance || Date).now();
          },

          end: function () {
            frames++;

            var time = (performance || Date).now();

            msPanel.update(time - beginTime, 200);

            if (time >= prevTime + 1000) {
              fpsPanel.update((frames * 1000) / (time - prevTime), 100);

              prevTime = time;
              frames = 0;

              if (memPanel) {
                var memory = performance.memory;
                memPanel.update(
                  memory.usedJSHeapSize / 1048576,
                  memory.jsHeapSizeLimit / 1048576
                );
              }
            }

            return time;
          },

          update: function () {
            beginTime = this.end();
          },

          // Backwards Compatibility

          domElement: container,
          setMode: showPanel,
        };
      };

      Stats.Panel = function (name, fg, bg) {
        var min = Infinity,
          max = 0,
          round = Math.round;
        var PR = round(window.devicePixelRatio || 1);

        var WIDTH = 80 * PR,
          HEIGHT = 48 * PR,
          TEXT_X = 3 * PR,
          TEXT_Y = 2 * PR,
          GRAPH_X = 3 * PR,
          GRAPH_Y = 15 * PR,
          GRAPH_WIDTH = 74 * PR,
          GRAPH_HEIGHT = 30 * PR;

        var canvas = document.createElement("canvas");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.cssText = "width:80px;height:48px";

        var context = canvas.getContext("2d");
        context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
        context.textBaseline = "top";

        context.fillStyle = bg;
        context.fillRect(0, 0, WIDTH, HEIGHT);

        context.fillStyle = fg;
        context.fillText(name, TEXT_X, TEXT_Y);
        context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

        context.fillStyle = bg;
        context.globalAlpha = 0.9;
        context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

        return {
          dom: canvas,

          update: function (value, maxValue) {
            min = Math.min(min, value);
            max = Math.max(max, value);

            context.fillStyle = bg;
            context.globalAlpha = 1;
            context.fillRect(0, 0, WIDTH, GRAPH_Y);
            context.fillStyle = fg;
            context.fillText(
              round(value) +
                " " +
                name +
                " (" +
                round(min) +
                "-" +
                round(max) +
                ")",
              TEXT_X,
              TEXT_Y
            );

            context.drawImage(
              canvas,
              GRAPH_X + PR,
              GRAPH_Y,
              GRAPH_WIDTH - PR,
              GRAPH_HEIGHT,
              GRAPH_X,
              GRAPH_Y,
              GRAPH_WIDTH - PR,
              GRAPH_HEIGHT
            );

            context.fillRect(
              GRAPH_X + GRAPH_WIDTH - PR,
              GRAPH_Y,
              PR,
              GRAPH_HEIGHT
            );

            context.fillStyle = bg;
            context.globalAlpha = 0.9;
            context.fillRect(
              GRAPH_X + GRAPH_WIDTH - PR,
              GRAPH_Y,
              PR,
              round((1 - value / maxValue) * GRAPH_HEIGHT)
            );
          },
        };
      };

      class VConsoleStatsPlugin {
        constructor(vConsole, VConsole) {
          this.vConsole = vConsole;
          this.VConsole = VConsole;
          this.dom = null;
          this.requestID = null;
          this.stats = null;
          return this.init();
        }
        init() {
          this.addStyle();
          const vConsoleStats = new this.VConsole.VConsolePlugin(
            "Stats",
            "Stats"
          );
          vConsoleStats.on("ready", () => {
            document
              .querySelectorAll(".vc-stats-buttons")
              .forEach((statusButton) => {
                statusButton.addEventListener("click", (event) => {
                  const currentType = event.target.dataset.type;
                  if (
                    currentType.toString() === "2" &&
                    !(self.performance && self.performance.memory)
                  ) {
                    console.error(
                      "浏览器不支持window.performance或者window.performance.memory"
                    );
                    return;
                  }
                  this.changePanel(currentType);
                });
              });
          });

          vConsoleStats.on("renderTab", (callback) => {
            const statsHTML = `
            <div class="vc-stats-buttons">
              <div class="vc-button-container">
                <button class="vc-stats-button" data-type="0">show FPS</button>
                <div class="vc-description">
                  <span>最后一秒渲染的帧。数字越高越好</span>
                </div>
              </div>
              <div class="vc-button-container">
                <button class="vc-stats-button" data-type="1">show MS</button>
                <div class="vc-description">
                  <span>渲染帧所需的毫秒数。数字越低越好</span>
                </div>
              </div>
              <div class="vc-button-container">
                <button class="vc-stats-button" data-type="2">show MB</button>
                <div class="vc-description">
                  <span>内存分配(MB)</span>
                  <a class="vc-link" href="https://caniuse.com/mdn-api_performance_memory" target="_blank">performance.memory兼容性查看</a>
                  <span>Chrome启用方式: --enable-precise-memory-info</span>
                </div>
              </div>
            </div>`;
            callback(statsHTML);
          });

          vConsoleStats.on("addTool", (callback) => {
            const buttons = [
              {
                name: "Show Stats",
                onClick: this.show,
              },
              {
                name: "Close Stats",
                onClick: this.close,
              },
            ];
            callback(buttons);
          });
          this.vConsole.addPlugin(vConsoleStats);
          return vConsoleStats;
        }

        addStyle = (target) => {
          if (target == null) {
            target = document.head || document.body || document.documentElement;
          }
          const cssNode = document.createElement("style");
          cssNode.setAttribute("type", "text/css");
          cssNode.innerHTML = `
          .vc-stats-button{
              margin: 10px 10px;
              background-color: #fbf9fe;
              padding: 2px 4px;
              cursor: pointer;
              border-radius: 4px;
              border: 1px solid;
          }
          .vc-button-container{
            display: flex;
            align-items: center;
          }
          .vc-description{
            display: flex;
            flex-direction: column;
          }
          .vc-description a.vc-link{
            color: blue;
          }`;
          target.appendChild(cssNode);
        };
        show = () => {
          if (!this.stats) {
            this.stats = new Stats();
            this.stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
            this.dom = this.stats.dom;
            document.body.appendChild(this.dom);
            this.requestID = requestAnimationFrame(this.loop);
          }
        };

        changePanel = (type) => {
          if (!this.stats) {
            this.show();
          }
          this.stats.setMode(Number(type));
        };

        loop = () => {
          this.stats.update();
          this.requestID = requestAnimationFrame(this.loop);
        };

        close = () => {
          if (this.requestID) {
            cancelAnimationFrame(this.requestID);
          }
          if (this.dom) {
            document.body.removeChild(this.dom);
          }

          this.stats = null;
          this.requestID = null;
          this.dom = null;
        };
      }

      return new VConsoleStatsPlugin(vConsole, VConsole);
    },
    exportLog(vConsole, VConsole) {
      class VConsoleOutputLogsPlugin {
        constructor(vConsole, VConsole, logItemSelector) {
          this.vConsole = vConsole;
          this.VConsole = VConsole;
          this.$ = vConsole.$;
          this.dom = null;
          this.logItemSelector =
            logItemSelector || ".vc-content #__vc_plug_default .vc-log-row";
          return this.init();
        }

        init() {
          const vConsoleExportLogs = new this.VConsole.VConsolePlugin(
            "exportLog",
            "exportLog"
          );

          vConsoleExportLogs.on("ready", () => {
            console.log("[vConsole-exportlog-plugin] -- load");
          });
          vConsoleExportLogs.on("renderTab", (callback) => {
            const html = `<div class="vconsole-exportlog">
            </div>`;
            callback(html);
          });
          vConsoleExportLogs.on("addTool", (callback) => {
            const buttons = [
              {
                name: "exportLogs",
                onClick: this.export,
              },
              {
                name: "copyLogs",
                onClick: this.copyText,
              },
            ];
            callback(buttons);
          });
          this.vConsole.addPlugin(vConsoleExportLogs);
          return vConsoleExportLogs;
        }
        funDownload = (content, filename) => {
          var eleLink = document.createElement("a");
          eleLink.download = filename;
          eleLink.style.display = "none";
          var blob = new Blob([content]);
          eleLink.href = URL.createObjectURL(blob);
          document.body.appendChild(eleLink);
          eleLink.click();
          document.body.removeChild(eleLink);
        };
        getAllLogContent = () => {
          let logRowsElement = document.querySelectorAll(this.logItemSelector);
          let logText = "";
          for (let index = 0; index < logRowsElement.length; index++) {
            const ele = logRowsElement[index];
            logText += `${ele.textContent}\n`;
          }
          return logText;
        };
        export = () => {
          let logText = this.getAllLogContent();
          this.funDownload(
            logText,
            `${
              new Date().toLocaleDateString() +
              " " +
              new Date().toLocaleTimeString()
            }.log`
          );
        };
        copyText = () => {
          let logText = this.getAllLogContent();
          utils.setClip(logText);
        };
      }
      return new VConsoleOutputLogsPlugin(vConsole, VConsole);
    },
  };
  /**
   * 全局调试
   */
  const GlobalDebug = {
    $data: {
      /** 当前的调试工具是否已执行 */
      isLoadDebugTool: false,
      /** 当前已执行的调试工具名 */
      loadDebugToolName: void 0,
    },
    $ele: {
      /** 隐藏调试工具的style元素 */
      hideDebugToolCSSNode: void 0,
    },
    erudaVersion: "3.0.1",
    vConsoleVersion: "3.15.1",
    pageSpyVersion: "1.8.9",
    pageSpyDefaultApi: "test.jikejishu.com",
    pageSpyDefaultCliennOrigin: "https://test.jikejishu.com",
    chiiUrl: "https://chii.liriliri.io/",
    chiiDetaultScriptJs: "//chii.liriliri.io/target.js",
    iframeUrlList: [],
    /**
     * 处理当在iframe内加载时，是否允许执行，如果允许，那么把url添加到菜单中
     */
    handleIframe() {
      if (PopsPanel.isTopWindow()) {
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
      console.log(`网页调试：当前使用的调试工具【${currentDebugTool}】`);
      if (currentDebugTool === "vconsole") {
        /* vConsole */
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "vconsole";
        this.vConsole();
      } else if (currentDebugTool === "pagespy") {
        /* PageSpy */
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "pagespy";
        this.pageSpy();
      } else if (currentDebugTool === "eruda") {
        /* eruda */
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "eruda";
        this.eruda();
      } else if (currentDebugTool === "chii") {
        /* chii */
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "chii";
        this.chii();
      } else {
        console.error("当前未配置该调试工具的运行");
      }
    },
    /**
     * 在脚本菜单中添加控制当前的调试工具状态的菜单按钮
     */
    addControlDebugToolScriptMenu() {
      if (!PopsPanel.isTopWindow()) {
        console.warn("不在iframe内重复添加菜单按钮");
        return;
      }
      let menuData = {
        key: "debug_tool_show_hide_control",
        text: "☯ 加载并显示调试工具",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: (data) => {
          changeMenu(data);
        },
      };
      /**
       *
       * @param {UtilsGMMenuClickCallBackData} data
       */
      const changeMenu = (data) => {
        if (GlobalDebug.$data.isLoadDebugTool) {
          /* 状态：已加载 */
          if (GlobalDebug.$ele.hideDebugToolCSSNode) {
            /* 状态：已加载且添加了隐藏CSS */
            /* 进行移除隐藏CSS */
            /* 菜单状态：【隐藏调试工具】 */
            this.showDebugTool();
            menuData.text = "🌑 隐藏调试工具";
            GM_Menu.update(menuData);
          } else {
            /* 状态：已加载且未添加隐藏CSS */
            /* 进行添加隐藏CSS */
            /* 菜单状态：【显示调试工具】 */
            this.hideDebugTool();
            menuData.text = "🌕 显示调试工具";
            GM_Menu.update(menuData);
          }
        } else {
          /* 状态：未加载，加载并显示 */
          /* 进行执行调试工具 */
          /* 菜单状态：【隐藏调试工具】 */
          this.showDebugTool();
          menuData.text = "🌑 隐藏调试工具";
          GM_Menu.update(menuData);
        }
      };
      GM_Menu.add(menuData);
    },
    /**
     * 判断页面中是否已存在隐藏调试工具的CSS元素节点
     * @returns
     */
    hasHideDebugToolCSSNode() {
      return document.documentElement.contains(this.$ele.hideDebugToolCSSNode);
    },
    /**
     * 创建隐藏调试工具的CSS元素
     * @returns
     */
    createHideDebugToolCSSNode() {
      let cssNode = document.createElement("style");
      cssNode.setAttribute("type", "text/css");
      cssNode.setAttribute("data-from", "hide-debug-tool");
      cssNode.innerHTML = `
        #eruda{
          display: none !important;
        }
        #__vconsole{
          display: none !important;
        }
        #__pageSpy{
          display: none !important;
        }
        .__chobitsu-hide__ > iframe,
        .__chobitsu-hide__:has(iframe){
          display: none !important;
        }
        `;
      return cssNode;
    },
    /**
     * 隐藏当前的调试工具
     */
    hideDebugTool() {
      if (this.$ele.hideDebugToolCSSNode == null) {
        console.log("未创建隐藏【调试工具】的style元素 => 创建元素");
        this.$ele.hideDebugToolCSSNode = this.createHideDebugToolCSSNode();
      }
      if (!this.hasHideDebugToolCSSNode()) {
        console.log("页面不存在隐藏【调试工具】的style元素 => 添加元素");
        document.documentElement.appendChild(this.$ele.hideDebugToolCSSNode);
      }
    },
    /**
     * 显示当前的调试工具
     */
    showDebugTool() {
      if (this.$ele.hideDebugToolCSSNode) {
        console.log("页面存在隐藏【调试工具】的style元素 => 移除元素");
        document.documentElement.removeChild(this.$ele.hideDebugToolCSSNode);
        this.$ele.hideDebugToolCSSNode = null;
      }
      if (!this.$data.isLoadDebugTool) {
        console.log("尚未运行【调试工具】 => 运行调试工具");
        this.runDebugTool();
      }
    },
    eruda() {
      initEruda("Eruda", currentWin);
      let Eruda = currentWin.Eruda;
      if (!Eruda) {
        alert("调试工具【eruda】注册全局失败，请反馈开发者");
        return;
      }
      let inintPanelList = [];
      if (PopsPanel.getValue("eruda-panel-console")) {
        inintPanelList.push("console");
      }
      if (PopsPanel.getValue("eruda-panel-elements")) {
        inintPanelList.push("elements");
      }
      if (PopsPanel.getValue("eruda-panel-network")) {
        inintPanelList.push("network");
      }
      if (PopsPanel.getValue("eruda-panel-resources")) {
        inintPanelList.push("resources");
      }
      if (PopsPanel.getValue("eruda-panel-sources")) {
        inintPanelList.push("sources");
      }
      if (PopsPanel.getValue("eruda-panel-info")) {
        inintPanelList.push("info");
      }
      if (PopsPanel.getValue("eruda-panel-snippets")) {
        inintPanelList.push("snippets");
      }
      GlobalDebug.erudaVersion = Eruda.version;
      Eruda.init({
        tool: inintPanelList,
      });
      console.log(`eruda当前版本：${Eruda.version}`);
      console.log(`eruda项目地址：https://github.com/liriliri/eruda`);
      console.log("eruda的全局变量名: Eruda");
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaMonitor")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaMonitor"));
          Eruda.add(erudaMonitor);
        } catch (error) {
          console.error("插件【eruda-monitor】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaFeatures")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaFeatures"));
          Eruda.add(erudaFeatures);
        } catch (error) {
          console.error("插件【eruda-features】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaTiming")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaTiming"));
          Eruda.add(erudaTiming);
        } catch (error) {
          console.error("插件【eruda-timing】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaCode")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaCode"));
          Eruda.add(erudaCode);
        } catch (error) {
          console.error("插件【eruda-code】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaBenchmark")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaBenchmark"));
          Eruda.add(erudaBenchmark);
        } catch (error) {
          console.error("插件【eruda-benchmark】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaGeolocation")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_Leaflet"));
          currentWin.eval(GM_getResourceText("Resource_erudaGeolocation"));
          Eruda.add(erudaGeolocation);
        } catch (error) {
          console.error("插件【eruda-geolocation】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaOrientation")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaOrientation"));
          Eruda.add(erudaOrientation);
        } catch (error) {
          console.error("插件【eruda-orientation】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaTouches")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaTouches"));
          Eruda.add(erudaTouches);
        } catch (error) {
          console.error("插件【eruda-touches】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaOutlinePlugin")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaOutlinePlugin"));
          Eruda.add(erudaOutlinePlugin);
        } catch (error) {
          console.error("插件【eruda-outline-plugin】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda_plugin_Resource_erudaPixel")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_erudaPixel"));
          Eruda.add(erudaPixel);
        } catch (error) {
          console.error("插件【eruda-pixel】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("eruda-auto-open-panel")) {
        let defaultShowName = PopsPanel.getValue(
          "eruda-default-show-panel-name",
          ""
        );
        Eruda.show();
        setTimeout(() => {
          Eruda.show(defaultShowName);
        }, 250);
      }
    },
    vConsole() {
      initVConsole("VConsole", currentWin);
      let VConsole = currentWin.VConsole;
      if (!VConsole) {
        alert("调试工具【vConsole】注册全局失败，请反馈开发者");
        return;
      }
      let initPanelList = [];
      if (PopsPanel.getValue("vConsole-panel-system")) {
        initPanelList.push("system");
      }
      if (PopsPanel.getValue("vConsole-panel-network")) {
        initPanelList.push("network");
      }
      if (PopsPanel.getValue("vConsole-panel-element")) {
        initPanelList.push("element");
      }
      if (PopsPanel.getValue("vConsole-panel-storage")) {
        initPanelList.push("storage");
      }
      let theme = "light";
      if (PopsPanel.getValue("vConsole-theme") === "auto") {
        if (utils.isThemeDark()) {
          theme = "dark";
        }
      } else {
        theme = PopsPanel.getValue("vConsole-theme");
      }
      let defaultStorages = [];
      if (PopsPanel.getValue("vConsole-storage-defaultStorages-cookies")) {
        defaultStorages.push("cookies");
      }
      if (PopsPanel.getValue("vConsole-storage-defaultStorages-localStorage")) {
        defaultStorages.push("localStorage");
      }
      if (
        PopsPanel.getValue("vConsole-storage-defaultStorages-sessionStorage")
      ) {
        defaultStorages.push("sessionStorage");
      }
      let vConsole = new VConsole({
        defaultPlugins: initPanelList,
        theme: "light",
        onReady() {
          if (PopsPanel.getValue("vconsole-auto-open-panel")) {
            vConsole.show();
          }
        },
        disableLogScrolling: PopsPanel.getValue("vconsole-disableLogScrolling"),
        log: {
          maxLogNumber: PopsPanel.getValue("vconsole-maxLogNumber", 1000),
          showTimestamps: PopsPanel.getValue("vconsole-showTimestamps"),
          maxNetworkNumber: PopsPanel.getValue(
            "vconsole-maxNetworkNumber",
            1000
          ),
        },
        storage: {
          defaultStorages: defaultStorages,
        },
      });
      GlobalDebug.vConsoleVersion = vConsole.version;
      unsafeWindow.vConsole = vConsole;
      console.log(`VConsole当前版本：${vConsole.version}`);
      console.log(`VConsole项目地址：https://github.com/Tencent/vConsole`);
      console.log("VConsole的实例化的全局变量名: vConsole");
      if (PopsPanel.getValue("vConsole_plugin_Resource_vConsole_Stats")) {
        try {
          vConsolePlugin.State(vConsole, VConsole);
        } catch (error) {
          console.error("插件【vconsole-stats-plugin】加载失败，原因：", error);
        }
      }
      if (PopsPanel.getValue("vConsole_plugin_Resource_vConsole_ExportLog")) {
        try {
          vConsolePlugin.exportLog(vConsole, VConsole);
        } catch (error) {
          console.error(
            "插件【vconsole-outputlog-plugin】加载失败，原因：",
            error
          );
        }
      }
      if (PopsPanel.getValue("vConsole_plugin_Resource_vConsoleVueDevtools")) {
        try {
          currentWin.eval(GM_getResourceText("Resource_vConsoleVueDevtools"));
          const Devtools = currentWin.vueVconsoleDevtools;
          Devtools.initPlugin(vConsole);
        } catch (error) {
          console.error(
            "插件【vconsole-vue-devtools-plugin】加载失败，原因：",
            error
          );
        }
      }

      if (PopsPanel.getValue("vconsole-auto-open-panel")) {
        let defaultShowName = PopsPanel.getValue(
          "vconsole-default-show-panel-name",
          "default"
        );
        vConsole.show();
        setTimeout(() => {
          vConsole.showPlugin(defaultShowName);
        }, 250);
      }
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
      let __pageSpy__ = new initPageSpy(currentWin);
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
      console.log($pageSpy);
      GlobalDebug.pageSpyVersion = unsafeWindow.$pageSpy.version;
      console.log("PageSpy全局变量：$pageSpy");
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
          goToDebugElement.className = "page-spy-content__btn";
          goToDebugElement.innerHTML = "前往调试";
          goToRoomListElement.className = "page-spy-content__btn";
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
    chii() {
      let debugUrl = PopsPanel.getValue("chii-debug-url", this.chiiUrl);
      if (
        window.location.href.startsWith(debugUrl) &&
        PopsPanel.getValue("chii-disable-run-in-debug-url", true)
      ) {
        console.log("禁止在调试端运行");
        return;
      }
      ChiiHeight.init();
      if (PopsPanel.getValue("chii-check-script-load")) {
        function checkChiiScriptLoad(event) {
          if (event.target === scriptNode) {
            globalThis.alert(
              `调试工具【Chii】脚本加载失败
              可能原因1：CSP策略阻止了加载第三方域的js文件
              可能原因2：目标js无效`
            );
            unsafeWindow.removeEventListener("error", checkChiiScriptLoad, {
              capture: true,
            });
          }
        }
        unsafeWindow.addEventListener("error", checkChiiScriptLoad, {
          capture: true,
        });
      }
      let scriptJsUrl = PopsPanel.getValue(
        "chii-target-js",
        this.chiiDetaultScriptJs
      );
      let scriptEmbedded = PopsPanel.getValue("chii-script-embedded", true);
      let scriptNode = document.createElement("script");
      scriptNode.src = scriptJsUrl;
      scriptNode.setAttribute("type", "application/javascript");
      if (scriptEmbedded) {
        scriptNode.setAttribute("embedded", true);
      }
      (document.head || document.body || document.documentElement).appendChild(
        scriptNode
      );
    },
  };
  PopsPanel.initMenu();
  if (GlobalDebug.handleIframe()) {
    if (PopsPanel.getValue("autoLoadDebugTool")) {
      GlobalDebug.runDebugTool();
    } else {
      GlobalDebug.addControlDebugToolScriptMenu();
    }
  }
})();
