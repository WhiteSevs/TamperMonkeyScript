import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_xunlei: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			let postResponse = await httpx.post(
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
					...NetDiskCheckLinkValidityRequestOption,
				}
			);
			if (
				!postResponse.status &&
				utils.isNull(postResponse.data.responseText)
			) {
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: postResponse,
				};
			}
			let postResponseData = utils.toJSON(postResponse.data.responseText);
			let token = postResponseData["captcha_token"];
			let getResponse = await httpx.get(
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
					...NetDiskCheckLinkValidityRequestOption,
				}
			);

			if (!getResponse.status && utils.isNull(getResponse.data.responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.error,
					data: [postResponse, getResponse],
				};
			}
			let responseText = getResponse.data.responseText;
			if (
				responseText.includes("NOT_FOUND") ||
				responseText.includes("SENSITIVE_RESOURCE") ||
				responseText.includes("EXPIRED") ||
				responseText.includes("DELETED")
			) {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: getResponse,
				};
			} else if (responseText.includes("PASS_CODE_EMPTY")) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: getResponse,
				};
			}
			return {
				...NetDiskCheckLinkValidity.status.success,
				data: getResponse,
			};
		},
	};
