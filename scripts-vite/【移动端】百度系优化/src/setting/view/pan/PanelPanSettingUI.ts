import { BaiduRouter } from "@/router/BaiduRouter";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelPanSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-pan",
  title: "网盘",
  headerTitle: "百度网盘<br />pan.baidu.com",
  isDefault() {
    return BaiduRouter.isPan();
  },
  scrollToDefaultView: true,
  views: [],
};

export { PanelPanSettingUI };
