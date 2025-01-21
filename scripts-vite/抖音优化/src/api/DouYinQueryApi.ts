import { httpx, log, utils } from "@/env";
import { ApiConfig } from "./ApiConfig";
import Qmsg from "qmsg";
import { ApiResponseCheck } from "./ApiResponseCheck";
import { unsafeWindow } from "ViteGM";

export const DouYinQueryApi = {
	/**
	 * 获取当前登录的用户的信息
	 */
	async user() {
		let response = await httpx.get("/aweme/v1/web/query/user/", {
			fetch: true,
			data: {
				...ApiConfig.getCommonData(),
				publish_video_strategy_type: 2,
				update_version_code: ApiConfig.getCommonData()["version_code"],
				downlink: 10,
				webid: ApiConfig.getWebId(),
			},
			allowInterceptConfig: false,
		});
		if (!response.status) {
			log.error(response);
			Qmsg.error("获取用户信息失败");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			browser_name: string;
			/** 时间戳字符串 */
			create_time: string;
			firebase_instance_id: string;
			/** 用户id */
			id: string;
			/** 时间戳字符串 */
			last_time: string;
			user_agent: string;
			user_uid: string;
			user_uid_type: string;
		};
		if (!ApiResponseCheck.isSuccess(data)) {
			return;
		}

		let { user_uid } = data;
		if (typeof user_uid !== "string") {
			return;
		}
		return user_uid;
	},
	/**
	 * 获取当前的webid
	 */
	async webid() {
		let response = await httpx.get(ApiConfig.BASE_URL + "?recommend=1", {
			fetch: true,
			allowInterceptConfig: false,
		});
		if (!response.status) {
			log.error(response);
			return;
		}
		if (typeof response.data.responseText !== "string") {
			log.error(response);
			return;
		}
		let webid = response.data.responseText.match(
			/\"user_unique_id\\":\\"([\d]+)\\"/
		);
		if (webid) {
			return webid[webid.length - 1];
		} else {
			log.error(response);
		}
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "DouYinQueryApi", DouYinQueryApi);
}
