import { BaiduRouter } from "@/router/BaiduRouter";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";

const PanelXueSettingUI: PopsPanelContentConfig = {
  id: "baidu-panel-config-xue",
  title: "知了好学",
  headerTitle: "知了好学<br />xue.baidu.com",
  isDefault() {
    return BaiduRouter.isJingYan();
  },
  scrollToDefaultView: true,
  forms: [],
};

export { PanelXueSettingUI };
