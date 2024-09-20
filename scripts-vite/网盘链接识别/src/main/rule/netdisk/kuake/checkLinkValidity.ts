import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_kuake: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let url =
				"https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc";
			let postResp = await httpx.post(url, {
				data: JSON.stringify({
					pwd_id: shareCode,
					passcode: "",
				}),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json;charset=UTF-8",
					"User-Agent": utils.getRandomPCUA(),
					Origin: "https://pan.quark.cn",
					Referer: NetDiskLinkClickModeUtils.getBlankUrl(
						"kuake",
						netDiskIndex,
						shareCode,
						accessCode
					),
				},

				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});
			if (!postResp.status && utils.isNull(postResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(postResp.data.responseText);
			if (data.message.includes("需要提取码")) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			} else if (data.message.includes("ok")) {
				return NetDiskCheckLinkValidity.status.success;
			} else {
				return NetDiskCheckLinkValidity.status.failed;
			}
		},
	};
