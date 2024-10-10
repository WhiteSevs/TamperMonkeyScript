import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_hecaiyun: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * 新版和彩云校验已失效
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let response = await httpx.post(
				"https://caiyun.139.com/stapi/custom/outlink/brief",
				{
					data: "linkId=" + shareCode,
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						"User-Agent": utils.getRandomPCUA(),
						Referer: NetDiskLinkClickModeUtils.getBlankUrl(
							"hecaiyun",
							netDiskIndex,
							shareCode,
							accessCode
						),
					},
					...NetDiskCheckLinkValidityRequestOption,
				}
			);
			if (!response.status) {
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: response,
				};
			}
			let data = utils.toJSON(response.data.responseText);
			if (data.code == 0) {
				if (data.data.isPasswd === "1") {
					return {
						...NetDiskCheckLinkValidity.status.needAccessCode,
						data: data,
					};
				} else {
					return {
						...NetDiskCheckLinkValidity.status.success,
						data: data,
					};
				}
			} else {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: data,
				};
			}
		},
	};
