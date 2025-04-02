import { httpx, utils } from "@/env";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_lanzou: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"lanzou",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let urlObj = new URL(url);

			let response = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: urlObj.hostname,
					Origin: urlObj.origin,
					Referer: url,
				},
				...NetDiskCheckLinkValidityRequestOption,
			});
			if (!response.status) {
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: response,
				};
			}
			let data = response.data.responseText;
			if (utils.isNull(data)) {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: data,
				};
			} else if (data.includes("输入密码")) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: data,
				};
			} else if (data.includes("来晚啦") || data.includes("不存在")) {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: data,
				};
			} else {
				return {
					...NetDiskCheckLinkValidity.status.success,
					data: data,
				};
			}
		},
	};
