import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_123pan: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let getResp = await httpx.get(
				"https://www.123pan.com/api/share/info?shareKey=" + shareCode,
				{
					headers: {
						"User-Agent": utils.getRandomPCUA(),
						Host: "www.123pan.com",
						Origin: "https://www.123pan.com/",
						Referer: "https://www.123pan.com/",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
					responseType: "json",
				}
			);
			if (!getResp.status && utils.isNull(getResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(getResp.data.responseText);
			if (
				getResp.data.responseText.includes("分享页面不存在") ||
				data["code"] !== 0
			) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			if (data["data"]["HasPwd"]) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
