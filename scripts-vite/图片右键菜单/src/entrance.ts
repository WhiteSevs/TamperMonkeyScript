import { Image } from "@/main/image";
import { PanelContent } from "@components/setting/panel-content";
import { Component_Common } from "./setting/view/common";
import { Panel } from "@components/setting/panel";

(() => {
	PanelContent.addContentConfig([Component_Common]);
	if (!document.documentElement.hasAttribute("style")) {
		return;
	}
	if (!document.body.hasAttribute("style")) {
		return;
	}
	if (!document.body.children.length) {
		return;
	}
	if (!document.querySelector('meta[name="viewport"]')) {
		return;
	}
	Panel.init();
	Image.init();
})();
