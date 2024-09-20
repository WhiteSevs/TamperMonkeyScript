import { httpx, utils } from "@/env";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_lanzou: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"lanzou",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let urlObj = new URL(url);

			let getResp = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: urlObj.hostname,
					Origin: urlObj.origin,
					Referer: url,
				},
				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});
			if (!getResp.status) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = getResp.data.responseText;
			if (utils.isNull(data)) {
				return NetDiskCheckLinkValidity.status.failed;
			} else if (data.includes("输入密码")) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			} else if (data.includes("来晚啦") || data.includes("不存在")) {
				return NetDiskCheckLinkValidity.status.failed;
			} else {
				return NetDiskCheckLinkValidity.status.success;
			}
		},
	};
