import { BaiduRouter } from "@/router/BaiduRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelChatSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-chat",
  title: "AI伙伴",
  headerTitle: "搜索AI伙伴<br />chat.baidu.com",
  isDefault() {
    return BaiduRouter.isChat();
  },
  scrollToDefaultView: true,
  views: [
    {
      text: "屏蔽",
      type: "container",
      views: [UISwitch("【屏蔽】文字/图片水印", "baidu_chat_remove_ai_mask", true)],
    },
  ],
};

export { PanelChatSettingUI };
