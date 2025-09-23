import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { BilibiliCDNServerList } from "@/api/BilibiliCDNServerList";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UIInput } from "@components/setting/components/ui-input";
import { UISelect } from "@components/setting/components/ui-select";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const SettingUILive: PopsPanelContentConfig = {
  id: "panel-live",
  title: "直播",
  isDefault() {
    return BilibiliRouter.isLive();
  },
  forms: [
    {
      text: "",
      type: "forms",
      forms: [
        {
          type: "deepMenu",
          text: "功能",
          forms: [
            {
              text: "加速CDN设置（dash）",
              type: "forms",
              forms: [
                UISwitch("启用", "bili-live-cdn-hook", false, void 0, "开启后，劫持请求并替换返回的视频流CDN"),
                UISelect(
                  "直播视频流-UPOS服务器设置",
                  "bili-live-uposServerSelect",
                  BilibiliCDNServerList[0].host,
                  BilibiliCDNServerList.map((item) => {
                    return {
                      text: item.name,
                      value: item.host,
                    };
                  }),
                  void 0,
                  "设置视频流的服务器，可加快视频加载速度"
                ),
                UIInput(
                  "直播视频流-自定义UPOS服务器",
                  "bili-live-uposServerSelect-own",
                  "",
                  "自定义的服务器优先级大于上面选择的服务器",
                  void 0,
                  "请输入upos服务器的域名"
                ),
              ],
            },
          ],
        },
        {
          text: "屏蔽",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("【屏蔽】聊天室", "bili-live-block-chatRoom", false, void 0, "直接不显示底部的聊天室"),
                UISwitch(
                  "【屏蔽】xxx进入直播间",
                  "bili-live-block-brush-prompt",
                  false,
                  void 0,
                  "直接不显示底部的xxx进入直播间"
                ),
                UISwitch(
                  "【屏蔽】控制面板",
                  "bili-live-block-control-panel",
                  false,
                  void 0,
                  "屏蔽底部的发个弹幕、送礼"
                ),
              ],
            },
          ],
        },
        {
          text: "劫持/拦截",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch(
                  "阻止open-app-btn元素点击事件触发",
                  "bili-live-prevent-openAppBtn",
                  true,
                  void 0,
                  "开启后可不跳转至唤醒App页面"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { SettingUILive };
