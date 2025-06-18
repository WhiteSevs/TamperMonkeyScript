import { DOMUtils, httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_uc: NetDiskCheckLinkValidityEntranceInstance =
	{
		async init(netDiskInfo) {
			const { ruleIndex, shareCode, accessCode } = netDiskInfo;
			let response = await httpx.get("https://drive.uc.cn/s/" + shareCode, {
				headers: {
					"User-Agent": utils.getRandomAndroidUA(),
					Host: "drive.uc.cn",
					Referer: NetDiskLinkClickModeUtils.getBlankUrl({
						ruleKeyName: "uc",
						ruleIndex,
						shareCode,
						accessCode,
					}),
					Origin: "https://drive.uc.cn",
				},
				...NetDiskCheckLinkValidityRequestOption,
			});
			let responseText = response.data.responseText;
			if (!response.status && utils.isNull(responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.networkError,
					data: response,
				};
			}
			let responseDocument = DOMUtils.parseHTML(responseText, true, true);
			if (responseDocument.querySelector(".h5-page-main")) {
				// 存在错误
				let $h5PageMain =
					responseDocument.querySelector<HTMLElement>(".h5-page-main")!;
				let errorText = $h5PageMain.textContent || $h5PageMain.innerText;
				if (
					errorText.includes("失效") ||
					errorText.includes("不存在") ||
					errorText.includes("违规") ||
					errorText.includes("删除")
				) {
					return {
						...NetDiskCheckLinkValidity.status.failed,
						data: response,
					};
				} else {
					return {
						...NetDiskCheckLinkValidity.status.unknown,
						data: response,
					};
				}
			} else if (
				responseDocument.querySelector(".main-body .input-wrap input")
			) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: response,
				};
			} else {
				return {
					...NetDiskCheckLinkValidity.status.success,
					data: response,
				};
			}
		},
	};
