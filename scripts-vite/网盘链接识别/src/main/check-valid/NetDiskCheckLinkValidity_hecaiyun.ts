import { httpx, utils } from "@/env";
import { NetDiskParse } from "../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_hecaiyun: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let resp = await httpx.post(
				"https://caiyun.139.com/stapi/custom/outlink/brief",
				{
					data: "linkId=" + shareCode,
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						"User-Agent": utils.getRandomPCUA(),
						Host: "caiyun.139.com",
						Referer: NetDiskLinkClickModeUtils.getBlankUrl(
							"hecaiyun",
							netDiskIndex,
							shareCode,
							accessCode
						),
						Origin: "https://caiyun.139.com",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			if (!resp.status) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(resp.data.responseText);
			if (data.code == 0) {
				if (data.data.isPasswd === "1") {
					return NetDiskCheckLinkValidity.status.needAccessCode;
				} else {
					return NetDiskCheckLinkValidity.status.success;
				}
			} else {
				return NetDiskCheckLinkValidity.status.failed;
			}
		},
	};
