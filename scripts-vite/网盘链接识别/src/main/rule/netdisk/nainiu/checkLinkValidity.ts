import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_nainiu: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let response = await httpx.get(
				`https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`,
				{
					headers: {
						"User-Agent": utils.getRandomPCUA(),
						Host: "cowtransfer.com",
						Origin: "https://cowtransfer.com",
						Referer: "https://cowtransfer.com/",
					},
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
			if (data.code != "0000") {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: data,
				};
			}
			if (data.data.needPassword && data.data.needPassword) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: data,
				};
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: data,
			};
		},
	};
