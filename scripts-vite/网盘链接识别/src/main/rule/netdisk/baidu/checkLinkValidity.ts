import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
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
					Accept:
						"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
					"accept-encoding": "gzip, deflate, br, zstd",
					"accept-language": "zh-CN,zh;q=0.9",
					"User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36`,
					Host: "pan.baidu.com",
					Referer: `https://pan.baidu.com/share/init?surl=${shareCode}&pwd=${accessCode}`,
					"sec-ch-ua":
						'"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": '"Windows"',
					"sec-fetch-dest": "document",
					"sec-fetch-mode": "navigate",
					"sec-fetch-site": "same-origin",
					"sec-fetch-user": "?1",
					"Upgrade-Insecure-Requests": "1",
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
