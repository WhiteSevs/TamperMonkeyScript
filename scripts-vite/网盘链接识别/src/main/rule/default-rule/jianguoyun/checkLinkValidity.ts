import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_jianguoyun: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param ruleIndex 规则下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(ruleIndex: number, shareCode: string, accessCode) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"jianguoyun",
				ruleIndex,
				shareCode,
				accessCode
			);
			let response = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: "www.jianguoyun.com",
					Referer: NetDiskLinkClickModeUtils.getBlankUrl(
						"jianguoyun",
						ruleIndex,
						shareCode,
						accessCode
					),
					Origin: "https://www.jianguoyun.com",
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
			if (responseText.includes("<h1>啊噢！")) {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: response,
				};
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: response,
			};
		},
	};
