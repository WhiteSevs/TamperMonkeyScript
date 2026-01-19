import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

export const SettingUILink: PopsPanelContentConfig = {
  id: "panel-link",
  title: "链接",
  isDefault() {
    return CSDNRouter.isLink();
  },
  views: [
    {
      text: "功能",
      type: "container",
      views: [UISwitch("重定向链接", "csdn-link-jumpRedirect", true, void 0, "自动跳转至被拦截的Url链接")],
    },
  ],
};
