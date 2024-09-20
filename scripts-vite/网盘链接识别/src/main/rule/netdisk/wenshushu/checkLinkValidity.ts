import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_wenshushu: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let postResp = await httpx.post(
				"https://www.wenshushu.cn/ap/task/mgrtask",
				{
					data: JSON.stringify({
						tid: shareCode,
					}),
					headers: {
						"Content-Type": "application/json",
						"User-Agent": utils.getRandomPCUA(),
						"x-token": "wss:7pmakczzw6i",
						Host: "www.wenshushu.cn",
						Origin: "https://www.wenshushu.cn",
						Referer: NetDiskLinkClickModeUtils.getBlankUrl(
							"wenshushu",
							netDiskIndex,
							shareCode,
							accessCode
						),
					},
					responseType: "json",

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			if (!postResp.status && utils.isNull(postResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(postResp.data.responseText);
			if (data.code !== 0) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
