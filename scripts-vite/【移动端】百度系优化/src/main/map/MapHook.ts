import { addStyle, DOMUtils, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";
import blockCSS from "./shield.css?raw";

export const BaiduMapHook = {
	init() {
		addStyle(blockCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenuOnce("baidu_map_hijack-element-appendChild", () => {
			log.success("hook: Element.appendChild");
			BaiduHook.elementAppendChild();
		});
		PopsPanel.execMenuOnce("baidu_map_hijack-setTimeout", () => {
			log.success("hook: window.setTimeout");
			BaiduHook.setTimeout(
				/goToDownloadOfAndrod|downloadAndrFromMarket|jumpToDownloadPage|jumpToMiddlePage|downloadIosPkg/
			);
		});
		DOMUtils.ready(function () {
			PopsPanel.execMenuOnce("baidu_map_hijack-jQuery-append", () => {
				log.success("hook: $.append");
				BaiduHook.windowJQueryAppend();
			});
		});
	},
};
