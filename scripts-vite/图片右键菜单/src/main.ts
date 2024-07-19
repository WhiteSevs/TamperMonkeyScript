import { PopsPanel } from "@/setting/setting";
import { Image } from "@/main/image";

(() => {
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
	PopsPanel.init();
	Image.init();
})();
