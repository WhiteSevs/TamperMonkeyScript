import { UISwitch } from "@components/setting/panel-components";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const SettingUI_Search: PopsPanelContentConfig = {
  id: "xhs-panel-config-search",
  title: "搜索",
  views: [
    {
      type: "container",
      text: "布局屏蔽",
      views: [UISwitch("【屏蔽】右侧AI面板", "xhs-search-blockRightAIPanel", false, void 0, "屏蔽右侧的点点ai")],
    },
  ],
};
