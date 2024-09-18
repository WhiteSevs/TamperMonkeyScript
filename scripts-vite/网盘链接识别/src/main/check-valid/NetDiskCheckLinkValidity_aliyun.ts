import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_aliyun: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let postResp = await httpx.post(
				"https://api.aliyundrive.com/adrive/v3/share_link/get_share_by_anonymous?share_id=" +
					shareCode,
				{
					data: JSON.stringify({
						share_id: shareCode,
					}),
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
						"User-Agent": utils.getRandomPCUA(),
						Referer: "https://www.aliyundrive.com/",
						Origin: "https://www.aliyundrive.com",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			let data = utils.toJSON(postResp.data.responseText);
			if (!postResp.status && utils.isNull(data)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			if (
				data["code"] === "ParamFlowException" ||
				data["code"] === "NotFound.ShareLink" ||
				data["code"] === "ShareLink.Cancelled"
			) {
				return NetDiskCheckLinkValidity.status.failed;
			} else if (data["file_count"] === 0 || data["file_infos"]?.length === 0) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
