import { DOMUtils, httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "@/main/check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskRule_360yunpan } from "./rule";

export const NetDiskCheckLinkValidity_360yunpan: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param ruleIndex 规则下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(ruleIndex: number, shareCode: string, AccessCodeType) {
			// let url = NetDiskLinkClickModeUtils.getBlankUrl(
			// 	NetDiskRule_360yunpan.setting.key,
			// 	ruleIndex,
			// 	shareCode,
			// 	accessCode
			// );
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
