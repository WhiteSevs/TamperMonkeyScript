import { CSDNRouter } from "@/router/CSDNRouter";
import { UISwitch } from "@components/setting/components/ui-switch";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const MSettingUILink: PopsPanelContentConfig = {
  id: "m-panel-link",
  title: "链接",
  isDefault() {
    return CSDNRouter.isLink();
  },
  forms: [
    {
      text: "功能",
      type: "forms",
      forms: [UISwitch("重定向链接", "m-csdn-link-jumpRedirect", true, void 0, "自动跳转至被拦截的Url链接")],
    },
  ],
};

export { MSettingUILink };
