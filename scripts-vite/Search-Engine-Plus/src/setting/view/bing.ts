import { BACKGROUND_URL } from "@/env";
import { SearchEngineRouter } from "@/router/SearchEngineRouter";
import { UIInput, UISelect, UISlider, UISwitch } from "@components/setting/panel-components";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const Component_Bing: PopsPanelContentConfig = {
  id: "bing",
  title: "Bing搜索",
  isDefault: SearchEngineRouter.isBingSearch(),
  views: [
    {
      text: "通用",
      type: "container",
      views: [
        UISwitch("移除广告", "bing-search-removeAds", true),
        UISwitch("移除输入预测", "bing-search-removeInputPrediction"),
        UISwitch("移除输入历史记录", "bing-search-removeInputHistory"),
        UISwitch("移除输入历史记录 - 与最近的搜索相关", "bing-search-removeInputHistory-relatedToRecentSearches"),
        UISwitch("移除右侧更多搜索结果", "bing-search-removeRightMoreSearchResult", true),
        UISwitch("移除Copilot Search", "bing-search-removeCopilotSearch"),
        UISwitch("移除底部悬浮的工具栏", "bing-search-removeBottomFloatingToolbar", true),
        UISwitch("移除其它用户还搜索过/其他用户还问了以下问题", "bing-search-removeOtherUserSearch", true),
        UISwitch("移除左上角 国内版/国际版", "bing-search-removeTopLeftAreaSwtich"),
        UISwitch("移除右上角 帐户奖励和偏好设置", "bing-search-removeTopRightAccountSetting"),
        UISwitch(
          "移除约xxx个结果",
          "bing-search-removeAboutAnyResultsTip",
          false,
          void 0,
          "搜索结果最上面的提示文字和图标"
        ),
        UISwitch("移除底部 部分搜索结果未予显示", "bing-search-removeBottomPartOfSearchResultTip"),
        UISwitch("移除底部右下角 备案信息", "bing-search-removeBottomRightCopyright"),
      ],
    },
    {
      text: "显示模式优化",
      type: "container",
      views: [
        UISwitch("开启", "bing-search-showOptimization-enable", true),
        UISelect<SearchResultShowType | "">("模式", "bing-search-showOptimization-mode", "single-center", [
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
        UISwitch("启用", "bing-search-ownBackgroundImage-enable", true),
        UIInput("图片地址", "bing-search-ownBackgroundImage-url", BACKGROUND_URL, "url地址或base64图片"),
        UISlider(
          "图片透明度",
          "bing-search-ownBackgroundImage-opacity",
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
    // {
    //   type: "container",
    //   text: "搜索结果优化",
    //   views: [
    //     UISwitch("启用", "bing-search-optimizationResult-enable", true),
    //     UISwitch("新标签页打开", "bing-search-optimizationResult-openBlank", false),
    //   ],
    // },
  ],
};
