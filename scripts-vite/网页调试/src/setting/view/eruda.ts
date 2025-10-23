import { DebugToolConfig } from "@/main/DebugToolConfig";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UIButton } from "@components/setting/components/ui-button";
import { DOMUtils, utils } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UISelect } from "@components/setting/components/ui-select";
import { DebugToolVersionConfig } from "@/main/DebugToolVersionConfig";
import { GlobalSettingConfig } from "../config";
import { Panel } from "@components/setting/panel";
import { UIOwn } from "@components/setting/components/ui-own";

export const PanelUI_eruda: PopsPanelContentConfig = {
  id: "debug-panel-config-eruda",
  title: "Eruda",
  headerTitle: `<a href='${DebugToolConfig.eruda.settingDocUrl}' target='_blank'>Eruda设置</a>`,
  forms: [
    {
      text: "功能",
      type: "forms",
      forms: [
        UIButton("当前版本", "", DebugToolConfig.eruda.version, void 0, false, false, "primary", (event) => {
          DOMUtils.preventEvent(event);
          window.open(DebugToolConfig.eruda.homeUrl, "_blank");
        }),
        UIOwn(
          ($li) => {
            const $left = DOMUtils.createElement("div", {
              className: "pops-panel-item-left-text",
              innerHTML: /*html*/ `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `,
            });
            const $right = DOMUtils.createElement("div", {
              className: "pops-panel-item-right-text",
              innerHTML: /*html*/ `
                        <a href="${DebugToolConfig.eruda.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/eruda/latest.svg?label=eruda" alt="eruda">
                        </a>
                        `,
            });
            $li.appendChild($left);
            $li.appendChild($right);
            return $li;
          },
          void 0,
          {
            text: "最新版本",
          }
        ),
        UISwitch(
          "自动打开面板",
          GlobalSettingConfig.eruda_auto_open_panel.key,
          GlobalSettingConfig.eruda_auto_open_panel.defaultValue,
          void 0,
          "加载完毕后自动显示面板内容"
        ),
        UISelect(
          "默认展示的面板元素",
          GlobalSettingConfig.eruda_default_show_panel_name.key,
          GlobalSettingConfig.eruda_default_show_panel_name.defaultValue,
          [
            {
              text: "Console",
              value: "console",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_console.key);
              },
            },
            {
              text: "Elements",
              value: "elements",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_elements.key);
              },
            },
            {
              text: "Network",
              value: "network",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_network.key);
              },
            },
            {
              text: "Resources",
              value: "resources",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_resources.key);
              },
            },
            {
              text: "Sources",
              value: "sources",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_sources.key);
              },
            },
            {
              text: "Info",
              value: "info",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_info.key);
              },
            },
            {
              text: "Snippets",
              value: "snippets",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_panel_snippets.key);
              },
            },
            {
              text: "Monitor",
              value: "monitor",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key);
              },
            },
            {
              text: "Features",
              value: "features",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key);
              },
            },
            {
              text: "Timing",
              value: "timing",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key);
              },
            },
            {
              text: "Code",
              value: "code",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key);
              },
            },
            {
              text: "Benchmark",
              value: "benchmark",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key);
              },
            },
            {
              text: "Geolocation",
              value: "geolocation",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key);
              },
            },
            {
              text: "Orientation",
              value: "orientation",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key);
              },
            },
            {
              text: "Touches",
              value: "touches",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key);
              },
            },
            {
              text: "Outline",
              value: "outline",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key);
              },
            },
            {
              text: "Pixel",
              value: "pixel",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key);
              },
            },
            {
              text: "Vue",
              value: "vue",
              disable() {
                return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key);
              },
            },
            {
              text: "Settings",
              value: "settings",
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
          "Console",
          GlobalSettingConfig.eruda_panel_console.key,
          GlobalSettingConfig.eruda_panel_console.defaultValue,
          void 0,
          "控制台"
        ),
        UISwitch(
          "Elements",
          GlobalSettingConfig.eruda_panel_elements.key,
          GlobalSettingConfig.eruda_panel_elements.defaultValue,
          void 0,
          "元素"
        ),
        UISwitch(
          "Network",
          GlobalSettingConfig.eruda_panel_network.key,
          GlobalSettingConfig.eruda_panel_network.defaultValue,
          void 0,
          "网络"
        ),
        UISwitch(
          "Resources",
          GlobalSettingConfig.eruda_panel_resources.key,
          GlobalSettingConfig.eruda_panel_resources.defaultValue,
          void 0,
          "资源"
        ),
        UISwitch(
          "Sources",
          GlobalSettingConfig.eruda_panel_sources.key,
          GlobalSettingConfig.eruda_panel_sources.defaultValue,
          void 0,
          "源代码"
        ),
        UISwitch(
          "Info",
          GlobalSettingConfig.eruda_panel_info.key,
          GlobalSettingConfig.eruda_panel_info.defaultValue,
          void 0,
          "信息"
        ),
        UISwitch(
          "Snippets",
          GlobalSettingConfig.eruda_panel_snippets.key,
          GlobalSettingConfig.eruda_panel_snippets.defaultValue,
          void 0,
          "拓展"
        ),
      ],
    },
    {
      text: "插件",
      type: "forms",
      forms: [
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-monitor" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-monitor/latest.svg?label=">
                    </a>
                    eruda-monitor
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-monitor"]}
						<br>
						展示页面的 fps 和内存信息
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-features" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-features/latest.svg?label=">
                    </a>
                    eruda-features
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-features"]}
						<br>
						浏览器特性检测
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-timing" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-timing/latest.svg?label=">
                    </a>
                    eruda-timing
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig["eruda"]["plugin"]["eruda-timing"]}
						<br>
						展示性能资源数据
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-code" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-code/latest.svg?label=">
                    </a>
                    eruda-code
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaCode.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-code"]}
						<br>
						运行 JavaScript 代码
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-benchmark" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-benchmark/latest.svg?label=">
                    </a>
                    eruda-benchmark
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-benchmark"]}
						<br>
						运行 JavaScript 性能测试
                    `
        ),
        UISwitch(
          "eruda-geolocation",
          GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.defaultValue,
          void 0,
          "测试地理位置接口"
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-orientation" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-orientation/latest.svg?label=">
                    </a>
                    eruda-orientation
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-orientation"]}
						<br>
						测试重力感应接口
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-vue" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-vue/latest.svg?label=">
                    </a>
                    eruda-vue
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaVue.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-vue"]}
						<br>
						Vue调试工具
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-touches" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-touches/latest.svg?label=">
                    </a>
                    eruda-touches
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-touches"]}
						<br>
						可视化屏幕 Touch 事件触发
                    `
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/pomelo-chuan/eruda-outline-plugin" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-outline-plugin/latest.svg?label=">
                    </a>
                    eruda-outline-plugin
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-outline-plugin"]}
						<br>
						给页面的元素添加边框
					`
        ),
        UISwitch(
          /*html*/ `
                    <a class="plugin-anchor" href="https://github.com/Faithree/eruda-pixel" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-pixel/latest.svg?label=">
                    </a>
                    eruda-pixel
                    `,
          GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key,
          GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.defaultValue,
          void 0,
          `
						v${DebugToolVersionConfig.eruda.plugin["eruda-pixel"]}
						<br>
						高精度的UI恢复辅助工具
                    `
        ),
      ],
    },
  ],
};
