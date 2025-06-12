import { httpx, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { BilibiliApiResponseCheck } from "./BilibiliApiResponseCheck";
import Qmsg from "qmsg";

export const BilibiliUserApi = {
	/**
	 * 获取导航栏用户信息
	 * @param [checkCode=true] 校验返回JSON的状态码，设置false可以获取未登录状态下的wbi_img，用于请求参数处理
	 */
	async nav(checkCode: boolean = true) {
		let response = await httpx.get(
			"https://api.bilibili.com/x/web-interface/nav?web_location=333.401",
			{
				fetch: true,
				responseType: "json",
				allowInterceptConfig: false,
			}
		);
		if (!response.status) {
			log.error(response);
			Qmsg.error("获取导航栏用户信息失败，请求异常", {
				consoleLogContent: true,
			});
			return;
		}
		let data = utils.toJSON<{
			code: number;
			data: BilibiliUserNavInfoType;
			message: string;
			ttl: number;
		}>(response.data.responseText);
		if (checkCode && !BilibiliApiResponseCheck.isWebApiSuccess(data)) {
			// 未登录也会
			log.error(["获取导航栏用户信息失败：", data]);
			Qmsg.error("获取导航栏用户信息失败", {
				consoleLogContent: true,
			});
			return;
		}
		return data.data;
	},
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
