import { DOMUtils, httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_onedrive: NetDiskCheckLinkValidityEntranceInstance = {
	async init(netDiskInfo) {
		const { ruleIndex, shareCode, accessCode } = netDiskInfo;
		let url = NetDiskLinkClickModeUtils.getBlankUrl({
			ruleKeyName: "onedrive",
			ruleIndex,
			shareCode,
			accessCode,
		});
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
					...NetDiskCheckLinkValidityStatus.networkError,
					data: response,
				};
			} else if (status === "404") {
				return {
					...NetDiskCheckLinkValidityStatus.failed,
					data: response,
				};
			}
			return {
				...NetDiskCheckLinkValidityStatus.networkError,
				data: response,
			};
		}
		let responseText = response.data.responseText;
		if (utils.isNotNull(responseText)) {
			try {
				let respDOM = DOMUtils.parseHTML(responseText, true, true);
				let $title = respDOM.querySelector("title");
				if ($title) {
					let title = DOMUtils.html($title);
					if (title.includes("错误")) {
						return {
							...NetDiskCheckLinkValidityStatus.failed,
							data: response,
						};
					}
				}
			} catch (error) {}
		}
		return {
			...NetDiskCheckLinkValidityStatus.success,
			data: response,
		};
	},
};
