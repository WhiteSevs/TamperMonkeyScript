import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_wenshushu: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let response = await httpx.post(
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
					...NetDiskCheckLinkValidityRequestOption,
				}
			);
			if (!response.status && utils.isNull(response.data.responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: response,
				};
			}
			let data = utils.toJSON(response.data.responseText);
			if (data.code !== 0) {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: data,
				};
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: data,
			};
		},
	};
