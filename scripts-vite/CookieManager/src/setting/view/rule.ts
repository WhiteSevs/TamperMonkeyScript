import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UIButton } from "@components/setting/components/ui-button";
import { CookieRule, CookieRuleData } from "@/main/CookieRule";

export const Component_Rule: PopsPanelContentConfig = {
  id: "view-rule",
  title: "规则",
  headerTitle: "Cookie操作规则",
  forms: [
    {
      type: "forms",
      text: "",
      forms: [
        UIButton("自定义规则", "操作Cookie的规则", "管理", void 0, false, false, "default", () => {
          CookieRule.showView();
        }),
      ],
    },
    {
      type: "forms",
      text: "",
      forms: [
        UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
          CookieRule.importRule();
        }),
        UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
          CookieRule.exportRule("CookieManagerRule.json");
        }),
      ],
    },
  ],
};
