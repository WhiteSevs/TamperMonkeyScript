import { cookieManager, httpx, log, utils } from "@/env";
import { ApiConfig } from "./ApiConfig";
import Qmsg from "qmsg";
import { ApiResponseCheck } from "./ApiResponseCheck";
import { unsafeWindow } from "ViteGM";
import { generate_a_bogus } from "@/api-utils/a_bogus";
import { generate_msToken } from "@/api-utils/msToken";

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
	/**
	 * 视频-不感兴趣
	 * @param aweme_id 视频id
	 * @param webid 浏览器id
	 */
	async dislike(aweme_id: string, webid: string) {
		let verifyFp = cookieManager.get("s_v_web_id")?.value;
		let msToken = generate_msToken();
		let uifid = cookieManager.get("UIFID")?.value;
		let postParam = {
			...ApiConfig.getCommonData(),
			aweme_id: aweme_id,
			webid: webid,
			uifid: uifid,
			verifyFp: verifyFp,
			fp: verifyFp,
			msToken: msToken,
		};
		let a_bogus = generate_a_bogus(postParam, window.navigator.userAgent);
		Reflect.set(postParam, "a_bogus", a_bogus);
		let formData = new FormData();
		formData.append("aweme_id", aweme_id);
		let response = await httpx.post(
			`${
				ApiConfig.BASE_URL
			}aweme/v1/web/commit/dislike/item/${utils.toSearchParamsStr(
				postParam,
				true
			)}`,
			{
				fetch: true,
				data: formData,
				allowInterceptConfig: false,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					uifid: uifid,
					// "x-secsdk-csrf-token": "",
				},
			}
		);
		if (!response.status) {
			log.error(response);
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (!ApiResponseCheck.isSuccess(data, false)) {
			log.error(response);
			return;
		}
		return data;
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "DouYinAwemeApi", DouYinAwemeApi);
}
