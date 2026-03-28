import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const PanelUserConfig: PopsPanelContentConfig = {
  id: "panel-config-user",
  title: "用户",
  views: [
    {
      text: "功能",
      type: "container",
      views: [UISwitch("显示UID", "dy-user-addShowUserUID", true, void 0, "在用户信息区域下方显示当前用户的uid")],
    },
  ],
};
