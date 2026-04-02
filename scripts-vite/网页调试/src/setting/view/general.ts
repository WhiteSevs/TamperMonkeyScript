import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIInput } from "@components/setting/panel-components";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";
import { GlobalSettingConfig } from "../config";

export const PanelUI_general: PopsPanelContentConfig = {
  id: "debug-panel-config-all",
  title: "总设置",
  headerTitle: "总设置",
  views: [
    {
      text: "功能",
      type: "container",
      views: [
        UISelect(
          "调试工具",
          GlobalSettingConfig.debugTool.key,
          GlobalSettingConfig.debugTool.defaultValue,
          [
            {
              text: "Eruda",
              value: "eruda",
            },
            {
              text: "VConsole",
              value: "vconsole",
            },
            {
              text: "PageSpy",
              value: "pagespy",
            },
            {
              text: "Chii",
              value: "chii",
            },
          ],
          void 0,
          void 0
        ),
        UISwitch(
          "自动执行",
          GlobalSettingConfig.autoLoadDebugTool.key,
          GlobalSettingConfig.autoLoadDebugTool.defaultValue,
          void 0,
          "关闭后将会在脚本菜单注册按钮，有3种状态【☯ 加载并显示】、【🌑 隐藏】、【🌕 显示】"
        ),
        UISwitch(
          "允许在iframe内加载",
          GlobalSettingConfig.allowRunInIframe.key,
          GlobalSettingConfig.allowRunInIframe.defaultValue
        ),
        UIInput(
          "全局挂载调试Api",
          GlobalSettingConfig.registerDebugBridgeApi.key,
          GlobalSettingConfig.registerDebugBridgeApi.defaultValue,
          "自定义全局挂载的Api的名称，留空则为不挂载"
        ),
      ],
    },
    {
      type: "container",
      text: "其它设置",
      views: [
        UISwitch(
          "面板尺寸跟随浏览器窗口尺寸",
          "panel-ui-size-follow-browser-window",
          false,
          void 0,
          "如果开启，设置面板的宽高将使用outerWidth和outerHeight获取，如果关闭，则使用innerWidth和innerHeight获取"
        ),
      ],
    },
  ],
};
