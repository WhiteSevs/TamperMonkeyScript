import { BilibiliRouter } from "@/router/BilibiliRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const SettingUIOpus: PopsPanelContentConfig = {
  id: "panel-opus",
  title: "专栏",
  isDefault() {
    return BilibiliRouter.isOpus();
  },
  forms: [
    {
      text: "",
      type: "forms",
      forms: [
        {
          text: "功能",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch(
                  "自动展开阅读全文",
                  "bili-opus-automaticallyExpandToReadFullText",
                  true,
                  void 0,
                  "屏蔽【展开阅读全文】按钮并自动处理全文高度"
                ),
              ],
            },
          ],
        },
        {
          text: "变量设置",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("autoOpenApp", "bili-opus-variable-autoOpenApp", true, void 0, "autoOpenApp函数置空"),
                UISwitch("go404", "bili-opus-variable-go404", true, void 0, "go404函数置空，可禁止前往404页面"),
                UISwitch("handleFallback", "bili-opus-variable-handleFallback", true, void 0, "禁止前往404页面"),
              ],
            },
          ],
        },
        {
          text: "覆盖点击事件",
          type: "deepMenu",
          forms: [
            {
              text: "",
              type: "forms",
              forms: [
                UISwitch("话题", "bili-opus-cover-topicJump", true, void 0, "点击话题正确跳转"),
                UISwitch(
                  "header用户",
                  "bili-opus-cover-header",
                  true,
                  void 0,
                  "点击内容上的发布本动态的用户正确跳转个人空间"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};
