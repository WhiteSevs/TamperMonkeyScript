import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const SettingUISo: PopsPanelContentConfig = {
  id: "panel-so",
  title: "搜索",
  isDefault() {
    return CSDNRouter.isSo();
  },
  views: [
    {
      text: "C知道-功能",
      type: "container",
      views: [UISwitch("去除水印", "csdn-so-cknow-removeMaskCover", true)],
    },
  ],
};
