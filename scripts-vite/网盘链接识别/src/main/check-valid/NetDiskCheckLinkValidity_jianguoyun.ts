import { httpx, utils } from "@/env";
import { NetDiskParse } from "../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_jianguoyun: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"jianguoyun",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let getResp = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: "www.jianguoyun.com",
					Referer: NetDiskLinkClickModeUtils.getBlankUrl(
						"jianguoyun",
						netDiskIndex,
						shareCode,
						accessCode
					),
					Origin: "https://www.jianguoyun.com",
				},

				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});
			let responseText = getResp.data.responseText;
			if (!getResp.status && utils.isNull(responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			if (responseText.includes("<h1>啊噢！")) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
