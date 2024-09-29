import { httpx, utils } from "@/env";
import { NetDiskCheckLinkValidity } from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_kuake: NetDiskCheckLinkValidityEntranceObj =
	{
		/**
		 * @param netDiskIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
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
			let sharePageJSON = utils.toJSON(postResp.data.responseText);
			if (sharePageJSON.message.includes("需要提取码")) {
				return NetDiskCheckLinkValidity.status.needAccessCode;
			} else if (sharePageJSON.message.includes("ok")) {
				// 再请求判断是否存在部分违规文件
				let stoken = sharePageJSON["data"]["stoken"];
				let getSearchParams = {
					// pr: "ucpro",
					// fr: "pc",
					// uc_param_str: "",
					pwd_id: shareCode,
					stoken: stoken,
					// pdir_fid: 0,
					// force: 0,
					// _page: 1,
					// _size: 50,
					// _fetch_banner: 1,
					_fetch_share: 1,
					// _fetch_total: 1,
					// _sort: "file_type:asc,updated_at:desc",
					// __dt: 2283,
					__t: Date.now(),
				};
				let getResponse = await httpx.get(
					`https://drive-h.quark.cn/1/clouddrive/share/sharepage/detail?${utils.toSearchParamsStr(
						getSearchParams
					)}`,
					{
						headers: {
							Accept: "application/json, text/plain, */*",
							Origin: "https://pan.quark.cn",
							Referer: "https://pan.quark.cn/",
							"User-Agent": utils.getRandomPCUA(),
						},
						allowInterceptConfig: false,
						onerror() {},
						ontimeout() {},
					}
				);
				if (
					!getResponse.status ||
					utils.isNull(getResponse.data.responseText)
				) {
					// 空的|失败的
					return NetDiskCheckLinkValidity.status.error;
				}
				// 解析json
				let detailJSON = utils.toJSON(getResponse.data.responseText);
				if (detailJSON["data"]["share"]["status"] == 1) {
					// 判断是否存在部分违规文件
					if (detailJSON["data"]["share"]["partial_violation"]) {
						return NetDiskCheckLinkValidity.status.partialViolation;
					} else {
						return NetDiskCheckLinkValidity.status.success;
					}
				} else {
					return NetDiskCheckLinkValidity.status.failed;
				}
			} else {
				return NetDiskCheckLinkValidity.status.failed;
			}
		},
	};
