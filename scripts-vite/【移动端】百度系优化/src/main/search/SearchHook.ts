import { OriginPrototype, log } from "@/env";
import { BaiduHook } from "@/hook/BaiduHook";
import { PopsPanel } from "@/setting/setting";

/**
 * 处理劫持
 */
const BaiduSearchHook = {
	init() {
		PopsPanel.execMenuOnce("baidu_search_hijack__onClick", () => {
			log.success("hook: baidu onClick");
			BaiduHook.objectDefineProperty_search("baidu_search_hijack__onClick");
		});
		PopsPanel.execMenuOnce("baidu_search_hijack_openbox", () => {
			log.success("hook: window.OpenBox");
			BaiduHook.windowOpenBox();
		});
		PopsPanel.execMenuOnce("baidu_search_hijack_scheme", () => {
			log.success("hook: Function.apply => scheme");
			BaiduHook.functionApply("scheme");
		});
		PopsPanel.execMenuOnce("baidu_search_hijack_copy", () => {
			log.success("hook: Function.apply => copy");
			BaiduHook.functionApply("copy");
		});
		PopsPanel.execMenuOnce("baidu_search_hijack_setTimeout", () => {
			BaiduHook.setTimeout("getGeoLocation|loopPlay()|.videoAutoplay");
		});
	},
};

export { BaiduSearchHook };
