import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { UISwitch } from "@components/setting/components/ui-switch";
import { UISelect } from "@components/setting/panel-components";

export const PanelRecommendConfig: PopsPanelContentConfig = {
  id: "panel-config-recommend",
  title: "推荐",
  views: [
    {
      text: "功能",
      type: "container",
      views: [
        UISwitch("禁止自动播放", "dy-recommend-pauseVideo", false, void 0, "3秒内禁止任何形式的播放（仅第一个视频）"),
        UISelect<string | boolean>(
          "自动连播",
          "dy-recommend-automaticContinuousPlayback",
          false,
          [
            {
              text: "无",
              value: false,
            },
            {
              text: "顺序",
              value: true,
            },
            {
              text: "顺序+合集",
              value: "Sequence+Collection",
            },
          ],
          void 0,
          "注意：请勿和推荐页面自带的<code>连播</code>功能同时使用"
        ),
        UISwitch("禁用视频满意评价", "dy-recommend-disableVideoSatisfaction", false),
      ],
    },
  ],
};
