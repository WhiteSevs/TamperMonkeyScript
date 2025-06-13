import { unsafeWindow } from "ViteGM";
import { Baidu } from "./main/Baidu";
import { log } from "./env";
import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { PanelCommonSettingUI } from "./setting/view/common/PanelCommonSettingUI";
import { PanelSearchSettingUI } from "./setting/view/search/PanelSearchSettingUI";
import { PanelBaiJiaHaoSettingUI } from "./setting/view/baijiahao/PanelBaiJiaHaoSettingUI";
import { PanelTieBaSettingUI } from "./setting/view/tieba/PanelTieBaSettingUI";
import { PanelWenKuSettingUI } from "./setting/view/wenku/PanelWenKuSettingUI";
import { PanelBaiKeSettingUI } from "./setting/view/baike/PanelBaiKeSettingUI";
import { PanelZhiDaoSettingUI } from "./setting/view/zhidao/PanelZhiDaoSettingUI";
import { PanelFanYiSettingUI } from "./setting/view/fanyi/PanelFanYiSettingUI";
import { PanelMapSettingUI } from "./setting/view/map/PanelMapSettingUI";
import { PanelAiQiChaSettingUI } from "./setting/view/aiqicha/PanelAiQiChaSettingUI";
import { PanelHaoKanSettingUI } from "./setting/view/haokan/PanelHaoKanSettingUI";
import { PanelGraphSettingUI } from "./setting/view/graph/PanelGraphSettingUI";
import { PanelYiYanSettingUI } from "./setting/view/yiyan/PanelYiYanSettingUI";
import { PanelChatSettingUI } from "./setting/view/chat/PanelChatSettingUI";
import { PanelEasyLearnSettingUI } from "./setting/view/easylearn/PanelEasyLearnSettingUI";
import { PanelAiStudySettingUI } from "./setting/view/aistudy/PanelAiStudySettingUI";
import { PanelJingYanSettingUI } from "./setting/view/jingyan/PanelJingYanSettingUI";
import { PanelImageSettingUI } from "./setting/view/image/PanelImageSettingUI";
import { PanelXueSettingUI } from "./setting/view/xue/PanelXueSettingUI";
import { PanelPosSettingUI } from "./setting/view/pos/PanelPosSettingUI";
import { PanelPanSettingUI } from "./setting/view/pan/PanelPanSettingUI";

(() => {
	if (typeof unsafeWindow.BaiduOptimizationScriptRunCount === "number") {
		unsafeWindow.BaiduOptimizationScriptRunCount++;
		log.warn(
			"阻止脚本容器反复执行本脚本 " +
				unsafeWindow.BaiduOptimizationScriptRunCount +
				" 次"
		);
		return;
	}
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
		PanelGraphSettingUI,
		// PanelPanSettingUI,
		PanelYiYanSettingUI,
		PanelChatSettingUI,
		PanelEasyLearnSettingUI,
		PanelAiStudySettingUI,
	]);

	Panel.init();
	Baidu.init();
})();
