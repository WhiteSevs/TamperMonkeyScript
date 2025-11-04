import { BilibiliRouter } from "@/router/BilibiliRouter";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const SettingUISpace: PopsPanelContentConfig = {
  id: "panel-space",
  title: "个人空间",
  isDefault() {
    return BilibiliRouter.isSpace();
  },
  views: [
    {
      text: "",
      type: "container",
      views: [
        {
          text: "功能",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch(
                  "修复正确跳转",
                  "bili-space-repairRealJump",
                  true,
                  void 0,
                  "修复视频|动态的正确跳转，避免跳转404"
                ),
              ],
            },
          ],
        },
        {
          text: "覆盖点击事件",
          type: "deepMenu",
          views: [
            {
              text: "",
              type: "container",
              views: [
                UISwitch(
                  "动态视频",
                  "bili-space-coverDynamicStateCardVideo",
                  true,
                  void 0,
                  "点击发布动态的视频可正常跳转至该视频"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
