import { log, utils } from "@/env";
import { M3U8Rule } from "@/main/M3U8Rule";
import { CommonUtils } from "@/utils/CommonUtils";
import type { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker";

export const NetWorkHook = {
	get ajaxHooker(): UtilsAjaxHookResult {
		// @ts-ignore
		if (this.__ajaxHooker == null) {
			// @ts-ignore
			this.__ajaxHooker = utils.ajaxHooker();
		}
		// @ts-ignore
		return this.__ajaxHooker as UtilsAjaxHookResult;
	},
	hook() {
		this.ajaxHooker.hook((request) => {
			let url = CommonUtils.fixUrl(request.url);
			try {
				let urlObj = new URL(url);
				let pathName = urlObj.pathname;
				if (!pathName.endsWith(".m3u8")) {
					return;
				}
				request.response = (response) => {
					let m3u8Text = response.responseText;
					if (m3u8Text.trim() === "") {
						return;
					}
					let handlerM3U8Text = M3U8Rule.runRule(m3u8Text);
					response.responseText = handlerM3U8Text;
				};
			} catch (error) {
				log.error("m3u8过滤器 hook network出错", error);
			}
		});
	},
	unhook() {
		this.ajaxHooker.unhook();
	},
};
