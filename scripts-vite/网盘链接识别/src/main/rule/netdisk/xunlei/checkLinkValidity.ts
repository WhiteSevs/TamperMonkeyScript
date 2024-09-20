import { httpx, utils } from "@/env";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_xunlei: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let postResp = await httpx.post(
				"https://xluser-ssl.xunlei.com/v1/shield/captcha/init",
				{
					data: JSON.stringify({
						client_id: "Xqp0kJBXWhwaTpB6",
						device_id: "925b7631473a13716b791d7f28289cad",
						action: "get:/drive/v1/share",
						meta: {
							package_name: "pan.xunlei.com",
							client_version: "1.45.0",
							captcha_sign: "1.fe2108ad808a74c9ac0243309242726c",
							timestamp: "1645241033384",
						},
					}),
					headers: {
						"User-Agent": utils.getRandomPCUA(),
						Host: "pan.xunlei.com",
						Referer: NetDiskLinkClickModeUtils.getBlankUrl(
							"xunlei",
							netDiskIndex,
							shareCode,
							accessCode
						),
						Origin: "https://pan.xunlei.com",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);
			if (!postResp.status && utils.isNull(postResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(postResp.data.responseText);
			let token = data["captcha_token"];
			let getResp = await httpx.get(
				"https://api-pan.xunlei.com/drive/v1/share?share_id=" + shareCode,
				{
					headers: {
						"User-Agent": utils.getRandomPCUA(),
						Host: "pan.xunlei.com",
						Referer: NetDiskLinkClickModeUtils.getBlankUrl(
							"xunlei",
							netDiskIndex,
							shareCode,
							accessCode
						),
						Origin: "https://pan.xunlei.com",
						"x-captcha-token": token,
						"x-client-id": "Xqp0kJBXWhwaTpB6",
						"x-device-id": "925b7631473a13716b791d7f28289cad",
					},

					allowInterceptConfig: false,
					onerror() {},
					ontimeout() {},
				}
			);

			if (!getResp.status && utils.isNull(getResp.data.responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let responseText = getResp.data.responseText;
			if (
				responseText.includes("NOT_FOUND") ||
				responseText.includes("SENSITIVE_RESOURCE") ||
				responseText.includes("EXPIRED") ||
				responseText.includes("DELETED")
			) {
				return NetDiskCheckLinkValidity.status.failed;
			} else if (responseText.includes("PASS_CODE_EMPTY")) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			}
			return NetDiskCheckLinkValidity.status.success;
		},
	};
