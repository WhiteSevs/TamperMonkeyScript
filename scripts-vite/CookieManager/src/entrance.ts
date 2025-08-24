import { PanelContent } from "@components/setting/panel-content";
import { CookieManagerView } from "./main/CookieManagerView";
import { CookieRule } from "./main/CookieRule";
import { CookieRuleController } from "./main/CookieRuleController";
import { Panel } from "@components/setting/panel";
import { Component_Rule } from "./setting/view/rule";
import { Component_Common } from "./setting/view/general";
import { PanelMenu } from "@components/setting/panel-menu";

PanelContent.addContentConfig([Component_Common, Component_Rule]);
let defaultMenuOption = PanelMenu.getMenuOption(0);
defaultMenuOption.callback = () => {
	Panel.showPanel(PanelContent.getConfig(0), void 0, void 0, true);
};
PanelMenu.updateMenuOption(defaultMenuOption);
Panel.init();
CookieManagerView.init();
CookieRule.init();
CookieRuleController.init();
if (import.meta.env.DEV) {
	CookieManagerView.showView();
}
