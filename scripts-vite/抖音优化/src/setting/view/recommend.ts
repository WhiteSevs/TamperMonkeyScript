import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";

export const PanelRecommendConfig: PopsPanelContentConfig = {
  id: "panel-config-recommend",
  title: "推荐",
  forms: [
    {
      text: "功能",
      type: "forms",
      forms: [
        UISwitch(
          "自动连播",
          "dy-recommend-automaticContinuousPlayback",
          false,
          void 0,
          "注意：请勿和推荐页面自带的<code>连播</code>功能同时使用"
        ),
      ],
    },
  ],
};
