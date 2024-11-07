import { utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";
import type { UtilsAjaxHookResult } from "@whitesev/utils/dist/types/src/types/ajaxHooker";

export const DouYinNetWorkHook = {
	get ajaxHooker(): UtilsAjaxHookResult {
		// @ts-ignore
		if (this.__ajaxHooker == null) {
			// @ts-ignore
			this.__ajaxHooker = new utils.ajaxHooker();
		}
		// @ts-ignore
		return this.__ajaxHooker as any;
	},
	init() {},
	/**
	 * 回复请求
	 */
	commentReply() {
		this.ajaxHooker.hook((request) => {
			let url = CommonUtil.fixUrl(request.url);
			let urlObj = new URL(url);
			if (urlObj.pathname.startsWith("/aweme/v1/web/comment/list/reply")) {
				urlObj.searchParams.delete("whale_cut_token");
				urlObj.searchParams.append("whale_cut_token", "");
				request.url = urlObj.toString();
			}
		});
	},
};
