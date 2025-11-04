import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const SettingUIOther: PopsPanelContentConfig = {
  id: "weibo-panel-config-other",
  title: "其它",
  views: [
    {
      text: "微博热搜",
      type: "container",
      views: [UISwitch("新标签页打开", "weibo-hot-search-openBlank", false, void 0, "新标签页打开链接")],
    },
  ],
};
