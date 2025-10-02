import { UISwitch } from "@components/setting/components/ui-switch";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types";

export const Component_Common: PopsPanelContentConfig = {
  id: "view-general",
  title: "通用",
  forms: [
    {
      type: "forms",
      text: "功能",
      forms: [
        UISwitch("默认规则", "user-rule-default-enable", true, void 0, "如果当前网站没有设置规则，那么使用默认规则"),
      ],
    },
  ],
};
