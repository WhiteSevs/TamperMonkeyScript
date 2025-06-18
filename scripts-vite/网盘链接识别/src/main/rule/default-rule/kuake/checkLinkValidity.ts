import { httpx, utils } from "@/env";
import {
	NetDiskCheckLinkValidity,
	NetDiskCheckLinkValidityRequestOption,
} from "../../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskLinkClickModeUtils } from "../../../link-click-mode/NetDiskLinkClickMode";

export const NetDiskCheckLinkValidity_kuake: NetDiskCheckLinkValidityEntranceInstance =
	{
		/**
		 * @param ruleIndex 网盘名称索引下标
		 * @param shareCode 分享码
		 * @param accessCode 访问码
		 */
		async init(ruleIndex: number, shareCode: string, accessCode) {
			let response = await httpx.post(
				"https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc",
				{
					data: JSON.stringify({
						pwd_id: shareCode,
						passcode: "",
					}),
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json;charset=UTF-8",
						"User-Agent": utils.getRandomPCUA(),
						Origin: "https://pan.quark.cn",
						Referer: NetDiskLinkClickModeUtils.getBlankUrl({
							ruleKeyName: "kuake",
							ruleIndex,
							shareCode,
							accessCode,
						}),
					},
					...NetDiskCheckLinkValidityRequestOption,
				}
			);
			if (!response.status && utils.isNull(response.data.responseText)) {
				return {
					...NetDiskCheckLinkValidity.status.networkError,
					data: response,
				};
			}
			let data = utils.toJSON(response.data.responseText);
			if (data.message.includes("需要提取码")) {
				return {
					...NetDiskCheckLinkValidity.status.needAccessCode,
					data: data,
				};
			} else if (data.message.includes("ok")) {
				// 再请求判断是否存在部分违规文件
				let stoken = data["data"]["stoken"];
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
						...NetDiskCheckLinkValidityRequestOption,
					}
				);
				if (
					!getResponse.status ||
					utils.isNull(getResponse.data.responseText)
				) {
					// 空的|失败的
					return {
						...NetDiskCheckLinkValidity.status.networkError,
						data: getResponse,
					};
				}
				// 解析json
				let detailJSON = utils.toJSON(getResponse.data.responseText);
				if (detailJSON["data"]["share"]["status"] == 1) {
					// 判断是否存在部分违规文件
					if (detailJSON["data"]["share"]["partial_violation"]) {
						return {
							...NetDiskCheckLinkValidity.status.partialViolation,
							data: [data, detailJSON],
						};
					} else {
						return {
							...NetDiskCheckLinkValidity.status.success,
							data: [data, detailJSON],
						};
					}
				} else {
					return {
						...NetDiskCheckLinkValidity.status.failed,
						data: [data, detailJSON],
					};
				}
			} else {
				return {
					...NetDiskCheckLinkValidity.status.failed,
					data: data,
				};
			}
		},
	};
