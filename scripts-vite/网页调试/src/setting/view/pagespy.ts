import { DOMUtils, pops, utils } from "@/env";
import { DebugToolConfig } from "@/main/DebugToolConfig";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UIButton } from "@components/setting/components/ui-button";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIInput } from "@components/setting/components/ui-input";
import { PanelUISize } from "@components/setting/panel-ui-size";
import { UISelect } from "@components/setting/components/ui-select";
import { GlobalSettingConfig } from "../config";
import { UIOwn } from "@components/setting/components/ui-own";

export const PanelUI_pagespy: PopsPanelContentConfig = {
  id: "debug-panel-config-pagespy",
  title: "PageSpy",
  headerTitle: `<a href='${DebugToolConfig.pageSpy.settingDocUrl}' target='_blank'>PageSpy设置</a>`,
  views: [
    {
      text: "功能",
      type: "container",
      views: [
        UIButton(
          "注意！隐私保护！",
          "",
          "了解详情",
          void 0,
          false,
          false,
          "danger",
          (event) => {
            pops.confirm({
              title: {
                text: "提示",
                position: "center",
              },
              content: {
                text: `下面默认配置的${DebugToolConfig.pageSpy.defaultConfig.api}是仅供测试使用的，其他人也可以看到你的调试信息，包括Cookie等信息，如果想用，请自己搭建一个调试端`,
              },
              btn: {
                reverse: true,
                position: "end",
                ok: {
                  text: "前往了解更多",
                  callback() {
                    window.open("https://www.pagespy.org/#/docs/faq#test-domain", "_blank");
                  },
                },
              },
              mask: {
                enable: true,
              },
              width: PanelUISize.info.width,
              height: PanelUISize.info.height,
            });
          },
          void 0
        ),
        UIButton("当前版本", "", DebugToolConfig.pageSpy.version, void 0, false, false, "primary", (event) => {
          DOMUtils.preventEvent(event);
          window.open(DebugToolConfig.pageSpy.homeUrl, "_blank");
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
                        <a href="${DebugToolConfig.pageSpy.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=pagespy" alt="page-spy-browser">
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
          "禁止在调试端运行",
          GlobalSettingConfig.pagespy_disable_run_in_debug_client.key,
          GlobalSettingConfig.pagespy_disable_run_in_debug_client.defaultValue,
          void 0,
          "调试端是下面配置的api/clientOrigin地址"
        ),
      ],
    },
    {
      text: "配置",
      type: "container",
      views: [
        UIInput(
          "api",
          GlobalSettingConfig.pagespy_api.key,
          GlobalSettingConfig.pagespy_api.defaultValue,
          "",
          void 0,
          "服务器地址的 Host"
        ),
        UIInput(
          "clientOrigin",
          GlobalSettingConfig.pagespy_clientOrigin.key,
          GlobalSettingConfig.pagespy_clientOrigin.defaultValue,
          "",
          void 0,
          "服务器地址的 Origin"
        ),
        UIInput(
          "project",
          GlobalSettingConfig.pagespy_project.key,
          GlobalSettingConfig.pagespy_project.defaultValue,
          void 0,
          void 0,
          "项目名称"
        ),
        UIInput(
          "title",
          GlobalSettingConfig.pagespy_title.key,
          GlobalSettingConfig.pagespy_title.defaultValue,
          void 0,
          void 0,
          "自定义标题"
        ),
        UISwitch(
          "autoRender",
          GlobalSettingConfig.pagespy_autoRender.key,
          GlobalSettingConfig.pagespy_autoRender.defaultValue,
          void 0,
          "自动渲染「圆形白底带 Logo」"
        ),
        UISelect(
          "enableSSL",
          GlobalSettingConfig.pagespy_enableSSL.key,
          GlobalSettingConfig.pagespy_enableSSL.defaultValue,
          [
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
          void 0,
          "是否https"
        ),
        UISwitch(
          "offline",
          GlobalSettingConfig.pagespy_offline.key,
          GlobalSettingConfig.pagespy_offline.defaultValue,
          void 0,
          `是否进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。`
        ),
        UISwitch(
          "serializeData",
          GlobalSettingConfig.pagespy_serializeData.key,
          GlobalSettingConfig.pagespy_serializeData.defaultValue,
          void 0,
          `是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看`
        ),
        UISwitch(
          "useSecret",
          GlobalSettingConfig.pagespy_useSecret.key,
          GlobalSettingConfig.pagespy_useSecret.defaultValue,
          void 0,
          `是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥`
        ),
        UIInput(
          "messageCapacity",
          GlobalSettingConfig.pagespy_messageCapacity.key,
          GlobalSettingConfig.pagespy_messageCapacity.defaultValue,
          "调试端进入房间后可以看到之前的数据量的大小",
          void 0,
          `指定 SDK 在本地最多缓存多少条数据记录`
        ),
      ],
    },
  ],
};
