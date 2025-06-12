import { Panel } from "@components/setting/panel";
import { WeiBo } from "./main/WeiBo";
import { PanelContent } from "@components/setting/panel-content";
import { SettingUICommon } from "./setting/view/common";
import { SettingUIHome } from "./setting/view/home";
import { SettingUIDetail } from "./setting/view/detail";
import { SettingUISearch } from "./setting/view/search";
import { SettingUIHuaTi } from "./setting/view/huati";
import { SettingUIVideo } from "./setting/view/video";
import { SettingUICardArticle } from "./setting/view/card";
import { SettingUIOther } from "./setting/view/other";

PanelContent.addContentConfig([
	SettingUICommon,
	SettingUIHome,
	SettingUIDetail,
	// SettingUIUserHome,
	SettingUISearch,
	SettingUIHuaTi,
	SettingUIVideo,
	SettingUICardArticle,
	SettingUIOther,
]);
Panel.$data.panelConfig = {
	style: /*css*/ `
        aside.pops-panel-aside{
            width: auto !important;
        }
        .pops-panel-textarea textarea{
            height: 100px;
        }`,
};
Panel.init();
WeiBo.init();
