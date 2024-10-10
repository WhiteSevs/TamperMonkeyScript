import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_baidu: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"baidu",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let response = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: "pan.baidu.com",
					Referer: url,
					Origin: "https://pan.baidu.com",
				},
				...NetDiskCheckLinkValidityRequestOption,
			});
			let responseText = response.data.responseText;
			if (!response.status) {
				if (utils.isNull(responseText)) {
					return {
						...NetDiskCheckLinkValidity.status.error,
						data: response,
					};
				}
			}
			if (response.data.finalUrl.includes("404.html")) {
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: response,
				};
			}
			if (responseText.includes("过期时间：")) {
				return {
					...NetDiskCheckLinkValidity.status.success,
					data: response,
				};
			} else if (responseText.includes("输入提取")) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: response,
				};
			} else if (
				responseText.includes("不存在") ||
				responseText.includes("已失效")
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
		},
	};
