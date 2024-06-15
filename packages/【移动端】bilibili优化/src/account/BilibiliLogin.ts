import { TVKeyInfo } from "@/common/config";
import { appSign } from "@/common/sign";
import { httpx, utils, GMCookie, Qmsg, log } from "@/env";
import { isWebApiSuccess } from "@/utils/BilibiliUtils";

export const BilibiliLogin = {
	/**
	 * 获取登录二维码信息（TV端）
	 * https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/login/login_action/QR.md#%E7%94%B3%E8%AF%B7%E4%BA%8C%E7%BB%B4%E7%A0%81(TV%E7%AB%AF)
	 */
	async getQrCodeInfo() {
		let Api =
			"https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code";
		let postData = {
			appkey: TVKeyInfo.appkey,
			local_id: "0",
			csrf: GMCookie.get("bili_jct")?.value || "",
			ts: "0",
		};
		let sign = appSign(postData, TVKeyInfo.appkey, TVKeyInfo.appsec);
		let postResp = await httpx.post(
			Api,
			{
				data: utils.toSearchParamsStr({
					...postData,
					sign,
				}),
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				responseType: "json",
				fetch: true,
			}
			// sign: 'e134154ed6add881d28fbdf68653cd9c',
		);
		log.info(postResp);
		if (!postResp.status) {
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		if (data.code !== 0) {
			Qmsg.error(data.message);
			return;
		}
		return data.data as {
			/** 二维码内容 url	 */
			url: string;
			/** 扫码登录秘钥 */
			auth_code: string;
		};
	},
	async poll(auth_code: string) {
		let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/poll";
		let postData = {
			appkey: TVKeyInfo.appkey,
			auth_code,
			local_id: "0",
			ts: "0",
		};
		let sign = appSign(postData, TVKeyInfo.appkey, TVKeyInfo.appsec);
		let postResp = await httpx.post(Api, {
			data: utils.toSearchParamsStr({
				...postData,
				sign,
			}),
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			responseType: "json",
			fetch: true,
		});
		if (!postResp.status) {
			return { success: false, message: "网络错误", action: void 0 };
		}
		const json = utils.toJSON(postResp.data.responseText);
		const msgMap: Record<string, string> = {
			"0": "成功",
			"-3": "API校验密匙错误",
			"-400": "请求错误",
			"-404": "啥都木有",
			"86038": "二维码已失效",
			"86039": "二维码尚未确认",
			"86090": "二维码已扫码未确认",
		};

		if (!isWebApiSuccess(json)) {
			const code = json.code.toString();
			const message = json.message || msgMap[code] || "未知错误";

			// 二维码已失效
			if (code === "86038") {
				return { success: false, message, action: "refresh" };
			}
			// 无操作, 等待扫码
			if (code === "86039" || code === "86090") {
				return { success: false, message, action: "wait" };
			}

			// errors
			return { success: false, message, action: void 0 };
		}

		const accessKey = json.data.access_token;
		const accessKeyExpireAt = Date.now() + json.data.expires_in * 1000;
		return {
			success: true,
			message: "获取成功",
			accessKey,
			accessKeyExpireAt,
		};
	},
};
