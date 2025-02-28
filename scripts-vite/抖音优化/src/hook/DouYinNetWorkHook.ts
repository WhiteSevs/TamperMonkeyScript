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
	init() {
		// this.userProfile();
	},
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
	 * 获取用户登录信息
	 */
	userProfile() {
		this.ajaxHooker.hook((request) => {
			let url = CommonUtil.fixUrl(request.url);
			let urlInstance = new URL(url);
			if (
				urlInstance.pathname.startsWith("/aweme/v1/web/user/profile/self/") ||
				urlInstance.pathname.startsWith(
					"/aweme/v1/web/im/resource/list/aggregation"
				) ||
				urlInstance.pathname.startsWith(
					"/aweme/v1/web/im/user/active/update/"
				) ||
				urlInstance.pathname.startsWith(
					"/aweme/v1/web/im/user/active/config/get"
				)
			) {
				request.response = (response) => {
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
			}
		});
	},
};
