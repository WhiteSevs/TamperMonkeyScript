import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const Component_Search: PopsPanelContentConfig = {
  id: "component-search",
  title: "搜索",
  forms: [
    {
      type: "forms",
      text: "",
      forms: [
        UISwitch("显示搜索历史", "mt-search-showSearchHistory", true, void 0, "自动记住搜索历史并显示"),
        UISwitch("修复清空按钮", "mt-search-repairClearBtn", true, void 0, "修复点击清空按钮不清空输入框的问题"),
        UISwitch("搜索框自动获取焦点", "mt-search-searchInputAutoFocus", true, void 0, ""),
      ],
    },
  ],
};
