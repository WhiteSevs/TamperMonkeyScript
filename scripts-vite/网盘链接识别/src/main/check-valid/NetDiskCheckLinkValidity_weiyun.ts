import { httpx, utils } from "@/env";
import { NetDiskParse } from "../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_weiyun: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url = NetDiskLinkClickModeUtils.getBlankUrl(
				"weiyun",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let getResp = await httpx.get(url, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
					Host: "share.weiyun.com",
					Origin: "https://share.weiyun.com",
					Referer: url,
				},

				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});

			if (!getResp.status && utils.isNull(getResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let respText = getResp.data.responseText;
			if (
				respText.includes("已删除") ||
				respText.includes("违反相关法规") ||
				respText.includes("已过期") ||
				respText.includes("已经删除") ||
				respText.includes("目录无效")
			) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			if (respText.includes('"need_pwd":1') || respText.includes('"pwd":"')) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
