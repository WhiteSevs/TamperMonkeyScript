import { utils } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";

export const DouYinNetWorkHook = {
	__ajaxHooker: null as null | ReturnType<typeof utils.ajaxHooker>,
	get ajaxHooker(): ReturnType<typeof utils.ajaxHooker> {
		if (this.__ajaxHooker == null) {
			this.__ajaxHooker = utils.ajaxHooker();
		}
		return this.__ajaxHooker;
	},
	init() {},
	/**
	 * 评论区的查看评论api
	 */
	commentReply() {
		this.ajaxHooker.hook((request) => {
			let url = CommonUtil.fixUrl(request.url);
			let urlInstance = new URL(url);
			if (urlInstance.pathname.startsWith("/aweme/v1/web/comment/list/reply")) {
				urlInstance.searchParams.delete("whale_cut_token");
				urlInstance.searchParams.append("whale_cut_token", "");
				request.url = urlInstance.toString();
			}
		});
	},
};
