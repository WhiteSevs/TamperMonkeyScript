import { DOMUtils, httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_onedrive: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"onedrive",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let urlObj = new URL(url);
			let response = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: urlObj.hostname,
					Referer: url,
					Origin: urlObj.origin,
				},
				...NetDiskCheckLinkValidityRequestOption,
			});
			if (!response.status) {
				let status = response.data?.status?.toString();
				if (status === "429") {
					return {
						...NetDiskCheckLinkValidity.status.error,
						data: response,
					};
				} else if (status === "404") {
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
			let responseText = response.data.responseText;
			if (utils.isNotNull(responseText)) {
				try {
					let respDOM = DOMUtils.parseHTML(responseText, true, true);
					if (respDOM.querySelector("title")?.innerHTML?.includes("错误")) {
						return {
							...NetDiskCheckLinkValidity.status.failed,
							data: response,
						};
					}
				} catch (error) {}
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: response,
			};
		},
	};
