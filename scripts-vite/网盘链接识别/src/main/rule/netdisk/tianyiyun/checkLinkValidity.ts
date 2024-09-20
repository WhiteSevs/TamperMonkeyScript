import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_tianyiyun: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let postResp = await httpx.post(
				"https://api.cloud.189.cn/open/share/getShareInfoByCodeV2.action",
				{
					data: `shareCode=${shareCode}`,
					headers: {
						Accept: "application/json;charset=UTF-8",
						"Content-Type": "application/x-www-form-urlencoded",
						"User-Agent": utils.getRandomPCUA(),
						"Sign-Type": 1,
						Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
						Origin: "https://cloud.189.cn",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			let responseText = postResp.data.responseText;
			if (!postResp.status && utils.isNull(responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			if (
				responseText.includes("ShareInfoNotFound") ||
				responseText.includes("ShareNotFound") ||
				responseText.includes("FileNotFound") ||
				responseText.includes("ShareAuditWaiting") ||
				responseText.includes("ShareExpiredError") ||
				responseText.includes("ShareAuditNotPass")
			) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			if (responseText.includes("needAccessCode")) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
