import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const SettingUISearch: PopsPanelContentConfig = {
  id: "weibo-panel-config-u",
  title: "搜索",
  views: [
    {
      text: "功能",
      type: "container",
      views: [
        UISwitch("自动聚焦搜索框", "weibo-search-autoFocusSearchInput", void 0),
        UISwitch(
          "新增【新标签页打开】按钮",
          "weibo-search-addOpenBlankBtn",
          false,
          void 0,
          "在每个card下面的按钮区域添加该按钮，方便快速在新标签页中打开"
        ),
      ],
    },
  ],
};
