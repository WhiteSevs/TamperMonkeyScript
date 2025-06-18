import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_nainiu: NetDiskCheckLinkValidityEntranceInstance =
	{
		async init(netDiskInfo) {
			const { ruleIndex, shareCode, accessCode } = netDiskInfo;
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
					...NetDiskCheckLinkValidity.status.networkError,
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
