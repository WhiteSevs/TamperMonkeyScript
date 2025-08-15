import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";
import { NetDiskCheckLinkValidityStatus } from "@/main/check-valid/NetDiskCheckLinkValidityStatus";

export const NetDiskCheckLinkValidity_weiyun: NetDiskCheckLinkValidityEntranceInstance = {
	async init(netDiskInfo) {
		const { ruleIndex, shareCode, accessCode } = netDiskInfo;
		let url = NetDiskLinkClickModeUtils.getBlankUrl({
			ruleKeyName: "weiyun",
			ruleIndex,
			shareCode,
			accessCode,
		});
		let response = await httpx.get(url, {
			headers: {
				"User-Agent": utils.getRandomPCUA(),
				Host: "share.weiyun.com",
				Origin: "https://share.weiyun.com",
				Referer: url,
			},
			...NetDiskCheckLinkValidityRequestOption,
		});

		if (!response.status && utils.isNull(response.data.responseText)) {
			return {
				...NetDiskCheckLinkValidityStatus.networkError,
				data: response,
			};
		}
		let responseText = response.data.responseText;
		if (
			responseText.includes("已删除") ||
			responseText.includes("已被删除") ||
			responseText.includes("已经删除") ||
			responseText.includes("违反相关法规") ||
			responseText.includes("已过期") ||
			responseText.includes("目录无效")
		) {
			return {
				...NetDiskCheckLinkValidityStatus.failed,
				data: response,
			};
		}
		if (
			responseText.includes('"need_pwd":1') ||
			(responseText.includes('"pwd":"') && !responseText.includes('"pwd":""'))
		) {
			return {
				...NetDiskCheckLinkValidityStatus.needAccessCode,
				data: response,
			};
		}
		return {
			...NetDiskCheckLinkValidityStatus.success,
			data: response,
		};
	},
};
