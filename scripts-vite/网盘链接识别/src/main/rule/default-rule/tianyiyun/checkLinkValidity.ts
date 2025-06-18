import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";

export const NetDiskCheckLinkValidity_tianyiyun: NetDiskCheckLinkValidityEntranceInstance =
	{
		async init(netDiskInfo) {
			const { ruleIndex, shareCode, accessCode } = netDiskInfo;
			let response = await httpx.post(
				"https://api.cloud.189.cn/open/share/getShareInfoByCodeV2.action",
				{
					data: `shareCode=${shareCode}`,
					headers: {
						Accept: "application/json;charset=UTF-8",
						"Content-Type": "application/x-www-form-urlencoded",
						"User-Agent": utils.getRandomPCUA(),
						"Sign-Type": 1,
						Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
						Origin: "https://cloud.189.cn",
					},
					...NetDiskCheckLinkValidityRequestOption,
				}
			);
			let responseText = response.data.responseText;
			if (!response.status && utils.isNull(responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.networkError,
					data: response,
				};
			}
			if (
				responseText.includes("ShareInfoNotFound") ||
				responseText.includes("ShareNotFound") ||
				responseText.includes("FileNotFound") ||
				responseText.includes("ShareAuditWaiting") ||
				responseText.includes("ShareExpiredError") ||
				responseText.includes("ShareAuditNotPass")
			) {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: response,
				};
			}
			if (responseText.includes("needAccessCode")) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: response,
				};
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: response,
			};
		},
	};
