import { BACKGROUND_URL } from "@/env";
import { SearchEngineRouter } from "@/router/SearchEngineRouter";
import { UIInput, UISelect, UISlider, UISwitch } from "@components/setting/panel-components";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const Component_Google: PopsPanelContentConfig = {
  id: "google",
  title: "Google搜索",
  isDefault: SearchEngineRouter.isGoogle(),
  views: [
    {
      text: "功能",
      type: "container",
      views: [UISwitch("伪装百度", "google-search-imitateBaidu", false)],
    },
    {
      type: "container",
      text: "屏蔽",
      views: [
        UISwitch("移除广告", "google-search-removeAds", true),
        UISwitch("移除AI概览", "google-search-removeAIOverview", false),
        UISwitch("移除右侧栏", "google-search-removeRightPanel", true),
        UISwitch("移除「用户还搜索了」", "google-search-removeRelatedSearch", true),
        UISwitch("移除「相关问题」", "google-search-removeQuestions", true),
      ],
    },
    {
      text: "显示模式优化",
      type: "container",
      views: [
        UISwitch("开启", "google-search-showOptimization-enable", true),
        UISelect<SearchResultShowType | "">("模式", "google-search-showOptimization-mode", "single-center", [
          {
            text: "无",
            value: "",
          },
          {
            text: "单列居中",
            value: "single-center",
          },
          {
            text: "双列居中",
            value: "double-column-center",
          },
          {
            text: "三列居中",
            value: "three-column-center",
          },
          {
            text: "四列居中",
            value: "four-column-center",
          },
        ]),
      ],
    },
    {
      type: "container",
      text: "自定义背景图",
      views: [
        UISwitch("启用", "google-search-ownBackgroundImage-enable", false),
        UIInput("图片地址", "google-search-ownBackgroundImage-url", BACKGROUND_URL, "url地址或base64图片"),
        UISlider(
          "图片透明度",
          "google-search-ownBackgroundImage-opacity",
          0.8,
          0,
          1,
          void 0,
          void 0,
          "值越低越透明",
          0.1
        ),
      ],
    },
    {
      type: "container",
      text: "搜索结果优化",
      views: [
        UISwitch("启用", "google-search-optimizationResult-enable", true),
        UISwitch("新标签页打开", "google-search-optimizationResult-openBlank", true),
        // UISwitch("移除广告", "google-search-optimizationResult-removeAds", true),
        // UISwitch("链接重定向", "google-search-optimizationResult-redirect", true),
      ],
    },
  ],
};
