import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UIButton } from "@components/setting/components/ui-button";
import { DebugToolConfig } from "@/main/DebugToolConfig";
import { DOMUtils, utils } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UISelect } from "@components/setting/components/ui-select";
import { UIInput } from "@components/setting/components/ui-input";
import { DebugToolVersionConfig } from "@/main/DebugToolVersionConfig";
import { GlobalSettingConfig } from "../config";
import { Panel } from "@components/setting/panel";

export const PanelUI_vConsole: PopsPanelContentConfig = {
  id: "debug-panel-config-vconsole",
  title: "vConsole",
  headerTitle: `<a href='${DebugToolConfig.vConsole.settingDocUrl}' target='_blank'>vConsole设置</a>`,
  forms: [
    {
      text: "功能",
      type: "forms",
      forms: [
        UIButton("当前版本", "", DebugToolConfig.vConsole.version, void 0, false, false, "primary", (event) => {
          DOMUtils.preventEvent(event);
          window.open(DebugToolConfig.vConsole.homeUrl, "_blank");
        }),
        {
          type: "own",
          getLiElementCallBack(liElement) {
            let $left = document.createElement("div");
            $left.className = "pops-panel-item-left-text";
            $left.innerHTML = /*html*/ `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `;
            let $right = document.createElement("div");
            $right.className = "pops-panel-item-right-text";
            $right.innerHTML = /*html*/ `
                        <a href="${DebugToolConfig.vConsole.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/vconsole/latest.svg?label=vConsole" alt="vConsole">
                        </a>
                        `;
            liElement.appendChild($left);
            liElement.appendChild($right);
            return liElement;
          },
        },
        UISwitch(
          "自动打开面板",
          GlobalSettingConfig.vconsole_auto_open_panel.key,
          GlobalSettingConfig.vconsole_auto_open_panel.defaultValue,
          void 0,
          "加载完毕后自动显示面板内容"
        ),
        UISelect(
          "默认展示的面板元素",
          GlobalSettingConfig.vconsole_default_show_panel_name.key,
          GlobalSettingConfig.vconsole_default_show_panel_name.defaultValue,
          [
            {
              text: "Log",
              value: "default",
            },
            {
              text: "System",
              value: "system",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_panel_system.key);
              },
            },
            {
              text: "Network",
              value: "network",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_panel_network.key);
              },
            },
            {
              text: "Element",
              value: "element",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_panel_element.key);
              },
            },
            {
              text: "Storage",
              value: "storage",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_panel_storage.key);
              },
            },
            {
              text: "Stats",
              value: "stats",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key);
              },
            },
            {
              text: "exportLog",
              value: "exportlog",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key);
              },
            },
            {
              text: "Vue",
              value: "vue",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key);
              },
            },
          ],
          void 0,
          "开启【自动打开面板】才会生效"
        ),
      ],
    },

    {
      text: "面板",
      type: "forms",
      forms: [
        UISwitch(
          "System",
          GlobalSettingConfig.vConsole_panel_system.key,
          GlobalSettingConfig.vConsole_panel_system.defaultValue,
          void 0,
          "控制台"
        ),
        UISwitch(
          "Network",
          GlobalSettingConfig.vConsole_panel_network.key,
          GlobalSettingConfig.vConsole_panel_network.defaultValue,
          void 0,
          "元素"
        ),
        UISwitch(
          "Element",
          GlobalSettingConfig.vConsole_panel_element.key,
          GlobalSettingConfig.vConsole_panel_element.defaultValue,
          void 0,
          "网络"
        ),
        UISwitch(
          "Storage",
          GlobalSettingConfig.vConsole_panel_storage.key,
          GlobalSettingConfig.vConsole_panel_storage.defaultValue,
          void 0,
          "资源"
        ),
      ],
    },
    {
      text: "配置",
      type: "forms",
      forms: [
        UISelect(
          "主题",
          GlobalSettingConfig.vConsole_theme.key,
          GlobalSettingConfig.vConsole_theme.defaultValue,
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
        UISwitch(
          "禁止Log自动滚动",
          GlobalSettingConfig.vconsole_disableLogScrolling.key,
          GlobalSettingConfig.vconsole_disableLogScrolling.defaultValue
        ),
        UISwitch(
          "显示日志的输出时间",
          GlobalSettingConfig.vconsole_showTimestamps.key,
          GlobalSettingConfig.vconsole_showTimestamps.defaultValue
        ),
        UIInput(
          "日志的上限数量",
          GlobalSettingConfig.vconsole_maxLogNumber.key,
          GlobalSettingConfig.vconsole_maxLogNumber.defaultValue,
          "请输入数字",
          void 0,
          void 0,
          true
        ),
        UIInput(
          "请求记录的上限数量",
          GlobalSettingConfig.vconsole_maxNetworkNumber.key,
          GlobalSettingConfig.vconsole_maxNetworkNumber.defaultValue,
          "请输入数字",
          void 0,
          void 0,
          true
        ),
      ],
    },
    {
      text: "Storage配置",
      type: "forms",
      forms: [
        UISwitch(
          "Cookies",
          GlobalSettingConfig.vConsole_storage_defaultStorages_cookies.key,
          GlobalSettingConfig.vConsole_storage_defaultStorages_cookies.defaultValue,
          void 0,
          "显示Cookies"
        ),
        UISwitch(
          "LocalStorage",
          GlobalSettingConfig.vConsole_storage_defaultStorages_localStorage.key,
          GlobalSettingConfig.vConsole_storage_defaultStorages_localStorage.defaultValue,
          void 0,
          "显示LocalStorage"
        ),
        UISwitch(
          "SessionStorage",
          GlobalSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key,
          GlobalSettingConfig.vConsole_storage_defaultStorages_sessionStorage.defaultValue,
          void 0,
          "显示SessionStorage"
        ),
      ],
    },
    {
      text: "插件",
      type: "forms",
      forms: [
        UISwitch(
          "vconsole-stats-plugin",
          GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key,
          GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.defaultValue,
          void 0,
          "A vConsole plugin which can show Stats in front-end."
        ),
        UISwitch(
          "vconsole-outputlog-plugin",
          GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key,
          GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.defaultValue,
          void 0,
          "使用该插件可以复制或下载console中打印的log"
        ),
        UISwitch(
          /*html*/ `
                        <a class="plugin-anchor" href="https://github.com/Zippowxk/vue-vconsole-devtools" target="_blank">
                            <img src="https://img.shields.io/npm/v/vue-vconsole-devtools/latest.svg?label=">
                        </a>
                        vue-vconsole-devtools
                    `,
          GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key,
          GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.defaultValue,
          void 0,
          `
                        v${DebugToolVersionConfig.vconsole.plugin["vue-vconsole-devtools"]}
                        <br>
                        Vue-vConsole-devtools 是一款vConsole插件，把Vue.js官方调试工具vue-devtools移植到移动端，可以直接在移动端查看调试Vue.js应用
                    `
        ),
      ],
    },
  ],
};
