import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "@/main/check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_115pan: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let response = await httpx.get(
				`https://webapi.115.com/share/snap?share_code=${shareCode}&offset=0&limit=20&receive_code=&cid=`,
				{
					headers: {
						Accept: "application/json, text/javascript, */*;",
						"User-Agent": utils.getRandomPCUA(),
						Host: "webapi.115.com",
						Referer: "https://115.com/",
						Origin: "https://115.com",
					},
					...NetDiskCheckLinkValidityRequestOption,
				}
			);
			if (!response.status) {
				if (utils.isNull(response.data.responseText)) {
					return {
						...NetDiskCheckLinkValidity.status.failed,
						data: response,
					};
				}
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: response,
				};
			}
			let data = utils.toJSON(response.data.responseText);
			if (data.state) {
				return {
					...NetDiskCheckLinkValidity.status.success,
					data: data,
				};
			}
			if (typeof data.error === "string") {
				if (data.error.includes("访问码")) {
					return {
						...NetDiskCheckLinkValidity.status.needAccessCode,
						data: data,
					};
				} else if (
					data.error.includes("链接") ||
					data.error.includes("分享已取消")
				) {
					return {
						...NetDiskCheckLinkValidity.status.failed,
						data: data,
					};
				}
			}

			return {
				...NetDiskCheckLinkValidity.status.unknown,
				data: data,
			};
		},
	};
