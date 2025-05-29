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
	/**
	 * 篡改未登录时的响应结果
	 */
	hookUserNoLoginResponse() {
		this.ajaxHooker.hook((request) => {
			// let url = CommonUtil.fixUrl(request.url);
			// let urlIns = new URL(url);
			// if (
			// 	(true &&
			// 		urlIns.pathname.startsWith("/aweme/v1/web/user/profile/self/")) ||
			// 	urlIns.pathname.startsWith(
			// 		"/aweme/v1/web/im/resource/list/aggregation"
			// 	) ||
			// 	urlIns.pathname.startsWith("/aweme/v1/web/im/user/active/update/") ||
			// 	urlIns.pathname.startsWith("/aweme/v1/web/im/user/active/config/get")
			// ) {
			// }
			// 其它hook的参数会被覆盖
			let originResponse = request.response;
			request.response = (response) => {
				originResponse && originResponse(response);
				let data = utils.toJSON(response.responseText);
				if (
					typeof data["status_code"] === "number" &&
					data["status_code"] !== 0
				) {
					data["status_code"] = 0;
					if (typeof data["status_msg"] === "string") {
						data["status_msg"] = "";
					}
				}
				if (
					typeof data?.["user_collect_count"]?.["status_code"] === "number" &&
					data?.["user_collect_count"]?.["status_code"] !== 0
				) {
					data["user_collect_count"]["status_code"] = 0;
					if (
						typeof data?.["user_collect_count"]?.["status_msg"] === "string"
					) {
						data["user_collect_count"]["status_msg"] = "";
					}
				}
				response.responseText = JSON.stringify(data);
			};
		});
	},
};
