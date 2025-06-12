import { WebSiteDebug } from "@/main/WebSiteDebug";
import { Panel } from "@components/setting/panel";
import { PanelContent } from "@components/setting/panel-content";
import { PanelUI_globalSetting } from "./setting/view/global-setting";
import { PanelUI_eruda } from "./setting/view/eruda";
import { PanelUI_vConsole } from "./setting/view/vConsole";
import { PanelUI_pagespy } from "./setting/view/pagespy";
import { PanelUI_chii } from "./setting/view/chii";

PanelContent.addContentConfig([
	PanelUI_globalSetting,
	PanelUI_eruda,
	PanelUI_vConsole,
	PanelUI_pagespy,
	PanelUI_chii,
]);
Panel.$data.panelConfig = {
	style: /*css*/ `
				aside.pops-panel-aside{
					width: 20%;
				}
				.plugin-anchor{
					text-decoration: none;
					display: inline-flex;
    				vertical-align: text-bottom;
				}
			`,
};
Panel.init();
WebSiteDebug.init();
