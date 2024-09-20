import { DOMUtils, httpx, utils } from "@/env";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_onedrive: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"onedrive",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let urlObj = new URL(url);
			let getResp = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: urlObj.hostname,
					Referer: url,
					Origin: urlObj.origin,
				},

				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});
			if (!getResp.status) {
				let status = getResp.data?.status?.toString();
				if (status === "429") {
					return NetDiskCheckLinkValidity.status.error;
				} else if (status === "404") {
					return NetDiskCheckLinkValidity.status.failed;
				}
				return NetDiskCheckLinkValidity.status.error;
			}
			let responseText = getResp.data.responseText;
			if (utils.isNotNull(responseText)) {
				try {
					let respDOM = DOMUtils.parseHTML(responseText, true, true);
					if (respDOM.querySelector("title")?.innerHTML?.includes("错误")) {
						return NetDiskCheckLinkValidity.status.failed;
					}
				} catch (error) {}
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
