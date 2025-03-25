import { PopsPanel } from "@/setting/panel";
import { CookieManagerView } from "./main/CookieManagerView";

PopsPanel.init();
CookieManagerView.init();
if (import.meta.env.DEV) {
	CookieManagerView.showView();
}
