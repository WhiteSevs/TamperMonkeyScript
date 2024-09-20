import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_nainiu: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let getResp = await httpx.get(
				"https://cowtransfer.com/core/api/transfer/share?uniqueUrl=" +
					shareCode,
				{
					headers: {
						"User-Agent": utils.getRandomPCUA(),
						Host: "cowtransfer.com",
						Origin: "https://cowtransfer.com/",
						Referer: "https://cowtransfer.com/",
					},
				}
			);
			if (!getResp.status && utils.isNull(getResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(getResp.data.responseText);
			if (data.code != "0000") {
				return NetDiskCheckLinkValidity.status.failed;
			}
			if (data.data.needPassword && data.data.needPassword) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
