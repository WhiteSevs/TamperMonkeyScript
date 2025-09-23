import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const SettingUIDynamic: PopsPanelContentConfig = {
  id: "panel-dynamic",
  title: "动态",
  isDefault() {
    return BilibiliRouter.isDynamic();
  },
  forms: [
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "覆盖点击事件",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("话题", "bili-dynamic-cover-topicJump", true, void 0, "点击话题正确跳转"),
                UISwitch(
                  "header用户",
                  "bili-dynamic-cover-header",
                  true,
                  void 0,
                  "点击内容上的发布本动态的用户正确跳转个人空间"
                ),
                UISwitch("@用户", "bili-dynamic-cover-atJump", true, void 0, "点击@用户正确跳转个人空间"),
                UISwitch("引用", "bili-dynamic-cover-referenceJump", true, void 0, "点击引用的视频|用户正确跳转"),
              ],
            },
          ],
        },
      ],
    },
  ],
};
