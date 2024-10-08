import { httpx, log, utils } from "@/env";
import { NetDiskParse } from "../../../parse/NetDiskParse";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_chengtong: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(netDiskIndex: number, shareCode: string, accessCode: string) {
			/* 城通通用的检查api */
			/* ref是来源 */
			let blankUrl = NetDiskLinkClickModeUtils.getBlankUrl(
				"chengtong",
				netDiskIndex,
				shareCode,
				accessCode
			);
			let blankUrlObj = new URL(blankUrl);
			/* f是文件 d是文件夹 */
			const path = blankUrlObj.pathname.split("/")[1].trim();
			let url = "";
			if (path === "f" || path === "file") {
				/* 文件 */
				url = `https://webapi.ctfile.com/getfile.php?path=${path}&f=${shareCode}&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
			} else if (path === "d" || path === "dir") {
				/* 文件夹 */
				url = `https://webapi.ctfile.com/getdir.php?path=${path}&d=${shareCode}&folder_id=&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
			} else {
				log.warn(["未知path", [netDiskIndex, shareCode, accessCode]]);
				return NetDiskCheckLinkValidity.status.unknown;
			}
			let getResp = await httpx.get(url, {
				headers: {
					Host: "webapi.ctfile.com",
					Origin: "https://url95.ctfile.com",
					Referer: blankUrl,
					Accept: "application/json, text/javascript, */*; q=0.01",
					"User-Agent": utils.getRandomPCUA(),
				},

				allowInterceptConfig: false,
				onerror() {},
				ontimeout() {},
			});
			let responseText = getResp.data.responseText;
			if (!getResp.status && utils.isNull(responseText)) {
				return NetDiskCheckLinkValidity.status.error;
			}
			let data = utils.toJSON(responseText);
			if (data["code"] === 200) {
				return NetDiskCheckLinkValidity.status.success;
			}
			if (data["code"] === 401) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			}
			if (
				data["code"] === 404 ||
				data["code"] === 503 ||
				data["code"] === 504
			) {
				return NetDiskCheckLinkValidity.status.failed;
			}
			return NetDiskCheckLinkValidity.status.unknown;
		},
	};
