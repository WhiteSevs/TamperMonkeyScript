import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";
import { UISwitch } from "@components/setting/components/ui-switch";

export const PanelHotConfig: PopsPanelContentConfig = {
  id: "panel-config-hot",
  title: "热点榜",
  views: [
    {
      text: "布局屏蔽",
      type: "container",
      views: [UISwitch("【屏蔽】右侧抖音热榜", "dy-hot-blockRightHotList")],
    },
  ],
};
