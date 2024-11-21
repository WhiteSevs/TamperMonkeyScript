import { httpx, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { BilibiliApiResponseCheck } from "./BilibiliApiResponseCheck";

export const BilibiliUserApi = {
	/**
	 * 获取用户空间动态
	 * @param mid 用户id
	 * @param offset 分页偏移，默认是""
	 */
	async space(mid: number | string, offset: string = "") {
		let response = await httpx.get(
			"https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space",
			{
				data: {
					host_mid: mid,
					offset: offset,
				},
				fetch: true,
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (!BilibiliApiResponseCheck.isWebApiSuccess(data)) {
			return;
		}
		return data["data"] as BilibiliUserSpaceInfoType;
	},
	/**
	 * 查询用户关注明细
	 * @param mid 用户id
	 * @param pn 页码 默认为 1
	 * @param ps 每页项数 默认为 50
	 */
	async following(mid: number | string, pn: number = 1, ps: number = 50) {
		let response = await httpx.get(
			"https://api.bilibili.com/x/relation/followings",
			{
				data: {
					vmid: mid,
					ps: ps,
					pn: pn,
				},
				fetch: true,
			}
		);
		if (!response.status) {
			return;
		}
		let data = utils.toJSON(response.data.responseText);
		if (!BilibiliApiResponseCheck.isWebApiSuccess(data)) {
			return data["message"] as string;
		}

		return data["data"] as {
			/** 关注总数 */
			total: number;
			re_version: number;
			/** 明细列表 */
			list: BilibiliUserFollowingInfoType[];
		};
	},
};

if (import.meta.hot) {
	Reflect.set(unsafeWindow, "BilibiliUserApi", BilibiliUserApi);
}
