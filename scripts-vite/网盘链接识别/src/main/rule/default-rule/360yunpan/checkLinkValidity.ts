import { DOMUtils, httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "@/main/check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_360yunpan: NetDiskCheckLinkValidityEntranceInstance =
	{
		async init(netDiskInfo) {
			const { ruleIndex, shareCode, accessCode } = netDiskInfo;
			let url = "https://www.yunpan.com/lk/surl_" + shareCode;
			let response = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
				responseType: "json",
				...NetDiskCheckLinkValidityRequestOption,
			});
			if (!response.status && utils.isNull(response.data.responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.networkError,
					data: response,
				};
			}
			let responseDoc = DOMUtils.parseHTML(
				response.data.responseText,
				true,
				true
			);
			let $errorMsg = responseDoc.querySelector<HTMLElement>(
				".page-error .error-msg"
			);
			if ($errorMsg) {
				let errorMsg = DOMUtils.text($errorMsg);
				if (errorMsg.includes("分享链接已失效")) {
					return {
						...NetDiskCheckLinkValidity.status.failed,
						data: response,
					};
				} else {
					return {
						...NetDiskCheckLinkValidity.status.unknown,
						data: response,
						tipMsg: errorMsg,
					};
				}
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: response,
			};
		},
	};
