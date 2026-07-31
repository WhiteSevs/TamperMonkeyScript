import { BACKGROUND_URL } from "@/env";
import { SearchEngineRouter } from "@/router/SearchEngineRouter";
import { UIInput, UISelect, UISlider, UISwitch } from "@components/setting/panel-components";
import type { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index.js";

export const Component_Baidu: PopsPanelContentConfig = {
  id: "baidu",
  title: "百度搜索",
  isDefault: SearchEngineRouter.isBaiduSearch(),
  views: [
    {
      text: "通用",
      type: "container",
      views: [
        UISwitch("移除广告", "baidu-search-removeAds", true),
        UISwitch("移除右侧栏", "baidu-search-removeRightPanel", true),
        UISwitch("移除大家都在搜", "baidu-search-removeEveryOneSearch", true),
        UISwitch("移除相关搜索", "baidu-search-removeRelatedSearch", true),
        UISwitch("移除选中文本弹窗", "baidu-search-removeSelectTextDialog", true),
      ],
    },
    {
      text: "显示模式优化",
      type: "container",
      views: [
        UISwitch("开启", "baidu-search-showOptimization-enable", true),
        UISelect<SearchResultShowType | "">("模式", "baidu-search-showOptimization-mode", "single-center", [
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
        UISwitch("启用", "baidu-search-ownBackgroundImage-enable", true),
        UIInput("图片地址", "baidu-search-ownBackgroundImage-url", BACKGROUND_URL, "url地址或base64图片"),
        UISlider(
          "图片透明度",
          "baidu-search-ownBackgroundImage-opacity",
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
        UISwitch("启用", "baidu-search-optimizationResult-enable", true, void 0, "开启后下面的功能才会生效"),
        UISwitch("移除广告", "baidu-search-optimizationResult-removeAds", true),
        UISwitch("链接重定向", "baidu-search-optimizationResult-redirect", true),
        UISwitch("添加favicon", "baidu-search-optimizationResult-addFavicon", true),
        UISwitch("标识非安全的链接", "baidu-search-optimizationResult-markUnsafeLink", true),
      ],
    },
  ],
};
