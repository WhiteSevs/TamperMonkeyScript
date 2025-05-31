import { DOMUtils, httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_uc: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param ruleIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(ruleIndex: number, shareCode: string, accessCode: AccessCodeType) {
			let response = await httpx.get("https://drive.uc.cn/s/" + shareCode, {
				headers: {
					"User-Agent": utils.getRandomAndroidUA(),
					Host: "drive.uc.cn",
					Referer: NetDiskLinkClickModeUtils.getBlankUrl(
						"uc",
						ruleIndex,
						shareCode,
						accessCode
					),
					Origin: "https://drive.uc.cn",
				},
				...NetDiskCheckLinkValidityRequestOption,
			});
			let responseText = response.data.responseText;
			if (!response.status && utils.isNull(responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.error,
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
