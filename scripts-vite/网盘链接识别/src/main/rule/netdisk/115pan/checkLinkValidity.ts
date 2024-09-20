import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "@/main/check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_115pan: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let getResp = await httpx.get(
				`https://webapi.115.com/share/snap?share_code=${shareCode}&offset=0&limit=20&receive_code=&cid=`,
				{
					headers: {
						Accept: "application/json, text/javascript, */*;",
						"User-Agent": utils.getRandomPCUA(),
						Host: "webapi.115.com",
						Referer: "https://115.com/",
						Origin: "https://115.com",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			if (!getResp.status) {
				if (utils.isNull(getResp.data.responseText)) {
					return NetDiskCheckLinkValidity.status.failed;
				}
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(getResp.data.responseText);
			if (data.state) {
				return NetDiskCheckLinkValidity.status.success;
			}
			if (typeof data.error === "string") {
				if (data.error.includes("访问码")) {
					return NetDiskCheckLinkValidity.status.needAccessCode;
				} else if (
					data.error.includes("链接") ||
					data.error.includes("分享已取消")
				) {
					return NetDiskCheckLinkValidity.status.failed;
				}
			}

			return NetDiskCheckLinkValidity.status.unknown;
		},
	};
