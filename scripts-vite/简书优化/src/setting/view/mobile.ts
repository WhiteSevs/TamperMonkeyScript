import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

const SettingUIMobile: PopsPanelContentConfig = {
  id: "jianshu-panel-config-mobile",
  title: "移动端",
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
                UISwitch("自动展开全文", "JianShuAutoExpandFullText_Mobile", true),
                UISwitch("重定向链接", "JianShuAutoJumpRedirect_Mobile", true, void 0, "自动跳转简书拦截的Url链接"),
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
                UISwitch("【屏蔽】底部推荐阅读", "JianShuremoveFooterRecommendRead", false),
                UISwitch("【屏蔽】评论区", "JianShuShieldUserCommentsMobile", false),
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
                UISwitch("拦截-剪贴板", "JianShuRemoveClipboardHijacking_Mobile", true, void 0, "去除禁止复制"),
                UISwitch(
                  "劫持-唤醒/跳转App",
                  "JianShuHijackSchemeScriptLabel_Mobile",
                  true,
                  void 0,
                  "去除简书唤醒调用App"
                ),
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { SettingUIMobile };
