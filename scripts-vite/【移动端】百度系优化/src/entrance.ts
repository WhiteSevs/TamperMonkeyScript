import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { unsafeWindow } from "ViteGM";
import { log } from "./env";
import { Baidu } from "./main/Baidu";
import { PanelAiQiChaSettingUI } from "./setting/view/aiqicha/PanelAiQiChaSettingUI";
import { PanelAiStudySettingUI } from "./setting/view/aistudy/PanelAiStudySettingUI";
import { PanelBaiJiaHaoSettingUI } from "./setting/view/baijiahao/PanelBaiJiaHaoSettingUI";
import { PanelBaiKeSettingUI } from "./setting/view/baike/PanelBaiKeSettingUI";
import { PanelChatSettingUI } from "./setting/view/chat/PanelChatSettingUI";
import { PanelCommonSettingUI } from "./setting/view/common/PanelCommonSettingUI";
import { PanelEasyLearnSettingUI } from "./setting/view/easylearn/PanelEasyLearnSettingUI";
import { PanelFanYiSettingUI } from "./setting/view/fanyi/PanelFanYiSettingUI";
import { PanelHaoKanSettingUI } from "./setting/view/haokan/PanelHaoKanSettingUI";
import { PanelMapSettingUI } from "./setting/view/map/PanelMapSettingUI";
import { PanelSearchSettingUI } from "./setting/view/search/PanelSearchSettingUI";
import { PanelTieBaSettingUI } from "./setting/view/tieba/PanelTieBaSettingUI";
import { PanelWenKuSettingUI } from "./setting/view/wenku/PanelWenKuSettingUI";
import { PanelYiYanSettingUI } from "./setting/view/yiyan/PanelYiYanSettingUI";
import { PanelZhiDaoSettingUI } from "./setting/view/zhidao/PanelZhiDaoSettingUI";

if (typeof unsafeWindow.BaiduOptimizationScriptRunCount === "number") {
  unsafeWindow.BaiduOptimizationScriptRunCount++;
  log.warn("阻止脚本容器反复执行本脚本 " + unsafeWindow.BaiduOptimizationScriptRunCount + " 次");
} else {
  unsafeWindow.BaiduOptimizationScriptRunCount = 0;

  PanelContent.addContentConfig([
    PanelCommonSettingUI,
    PanelSearchSettingUI,
    PanelBaiJiaHaoSettingUI,
    PanelTieBaSettingUI,
    PanelWenKuSettingUI,
    // PanelJingYanSettingUI,
    PanelBaiKeSettingUI,
    PanelZhiDaoSettingUI,
    PanelFanYiSettingUI,
    // PanelImageSettingUI,
    PanelMapSettingUI,
    // PanelXueSettingUI,
    PanelAiQiChaSettingUI,
    // PanelPosSettingUI,
    PanelHaoKanSettingUI,
    // PanelGraphSettingUI,
    // PanelPanSettingUI,
    PanelYiYanSettingUI,
    PanelChatSettingUI,
    PanelEasyLearnSettingUI,
    PanelAiStudySettingUI,
  ]);
  Panel.init();
  Baidu.init();
}
