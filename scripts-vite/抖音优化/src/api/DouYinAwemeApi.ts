import { httpx, log, utils } from "@/env";
import { ApiConfig } from "./ApiConfig";
import Qmsg from "qmsg";
import { ApiResponseCheck } from "./ApiResponseCheck";
import { unsafeWindow } from "ViteGM";

export const DouYinAwemeApi = {
	/**
	 * 获取视频配置
	 * @param aweme_id 视频id
	 */
	async detail(aweme_id: string) {
		let response = await httpx.get("/aweme/v1/web/aweme/detail/", {
			data: {
				...ApiConfig.getCommonData(),
				aweme_id: aweme_id,
			},
			fetch: true,
			allowInterceptConfig: false,
		});
		if (!response.status) {
			log.error(response);
			Qmsg.error("获取视频配置失败");
			return;
		}

		let data = utils.toJSON(response.data.responseText);
		if (!ApiResponseCheck.isSuccess(data)) {
			return;
		}
		return data;
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "DouYinAwemeApi", DouYinAwemeApi);
}
