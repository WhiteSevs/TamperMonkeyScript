import { httpx, log, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";
import { NetDiskParse } from "../parse/NetDiskParse";

export const NetDiskCheckLinkValidity_lanzouyx: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let LanZouYX = new NetDiskParse.netDisk.lanzouyx();
			LanZouYX.uuid = LanZouYX.getEncodeUUID();
			LanZouYX.shareCodeId = LanZouYX.getDecodeShareCodeId(shareCode);
			let devType = 3;
			let devModel = "Chrome";
			let extra = 2;
			let timestamp = LanZouYX.getEncodeTimeStamp();
			let type = 0;

			let offset = 1;
			let limit = 60;
			let postResp = await httpx.post(
				`https://api.ilanzou.com/unproved/recommend/list?devType=${devType}&devModel=${devModel}&uuid=${LanZouYX.uuid}&extra=${extra}&timestamp=${timestamp}&shareId=${LanZouYX.shareCodeId}&type=${type}&offset=${offset}&limit=${limit}`,
				{
					headers: {
						Accept: "application/json, text/plain, */*",
						Origin: "https://www.ilanzou.com",
						Referer: "https://www.ilanzou.com/",
						"Sec-Fetch-Site": "same-site",
						Host: "api.ilanzou.com",
						"User-Agent": utils.getRandomPCUA(),
					},
					responseType: "json",
					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			if (!postResp.status) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(postResp.data.responseText);
			log.success(["获取链接信息：", data]);
			if (data["code"] !== 200) {
				return NetDiskCheckLinkValidity.status.error;
			}
			if (!data["list"].length) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
