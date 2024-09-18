import { DOMUtils, httpx, utils } from "@/env";
import { NetDiskParse } from "../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "./NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_uc: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let resp = await httpx.get("https://drive.uc.cn/s/" + shareCode, {
				headers: {
					"User-Agent": utils.getRandomAndroidUA(),
					Host: "drive.uc.cn",
					Referer: NetDiskLinkClickModeUtils.getBlankUrl(
						"uc",
						netDiskIndex,
						shareCode,
						accessCode
					),
					Origin: "https://drive.uc.cn",
				},

				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});
			let responseText = resp.data.responseText;
			if (!resp.status && utils.isNull(responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let respDoc = DOMUtils.parseHTML(responseText, true, true);
			if (respDoc.querySelector(".h5-page-main")) {
				// 存在错误
				let $h5PageMain = respDoc.querySelector<HTMLElement>(".h5-page-main")!;
				let errorText = $h5PageMain.textContent || $h5PageMain.innerText;
				if (
					errorText.includes("失效") ||
					errorText.includes("不存在") ||
					errorText.includes("违规") ||
					errorText.includes("删除")
				) {
					return NetDiskCheckLinkValidity.status.failed;
				} else {
					return NetDiskCheckLinkValidity.status.unknown;
				}
			} else if (respDoc.querySelector(".main-body .input-wrap input")) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			} else {
				return NetDiskCheckLinkValidity.status.success;
			}
		},
	};
