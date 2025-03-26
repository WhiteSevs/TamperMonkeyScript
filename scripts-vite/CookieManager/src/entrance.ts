import { PopsPanel } from "@/setting/panel";
import { CookieManagerView } from "./main/CookieManagerView";
import { CookieRule } from "./main/CookieRule";
import { CookieRuleController } from "./main/CookieRuleController";

PopsPanel.init();
CookieRule.init();
CookieRuleController.init();
CookieManagerView.init();
if (import.meta.env.DEV) {
	CookieManagerView.showView();
}
