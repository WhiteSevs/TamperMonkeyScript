import { httpx, log, Qmsg, utils } from "@/env";
import { ApiResponseCheck } from "./ApiResponseCheck";

export type CSDNFavoriteDataOption = {
	IsDefault: number;
	Description: string;
	FavoriteNum: number;
	CreatedAt: string;
	CheckStatus: null;
	FollowNum: number;
	UpdatedAt: string;
	IsFavorite: boolean;
	Name: string;
	FavoriteId: number;
	Username: string;
	ID: number;
	IsPrivate: number;
};

export const CSDNFavoriteApi = {
	/**
	 * 获取收藏夹信息
	 * @param url 当前url
	 */
	async folderListWithCheck(url: string) {
		let response = await httpx.get(
			`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck`,
			{
				data: {
					url: url,
				},
				processData: true,
				fetch: true,
				allowInterceptConfig: false,
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("获取收藏夹信息失败，请求异常", response);
			Qmsg.error("获取收藏夹信息失败");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			data: {
				result: CSDNFavoriteDataOption[];
			};
		};

		return data.data.result;
	},
	/**
	 * 添加到某个收藏夹
	 */
	async addFavoriteInFolds(requestData: {
		/** 文章链接 */
		url: string;
		/** 来源 */
		source: "blog";
		/** 资源id */
		sourceId: 136138157;
		/** 文章作者 */
		author: string;
		/** 文章标题 */
		title: string;
		/** 文章描述 */
		description: string;
		/** 添加来源-pc */
		fromType: "PC";
		/** 当前登录的用户名 */
		username: string;
		/** 收藏夹id */
		folderIdList: number[];
	}) {
		let response = await httpx.post(
			"https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",
			{
				fetch: true,
				data: requestData,
				processData: true,
				headers: {
					"Content-Type": "application/json",
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			}
		);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("添加收藏失败，请求异常", response);
			Qmsg.error("添加收藏失败，请求异常");
			return;
		}
		return true;
	},
	/**
	 * 检查收藏夹是否成功收藏
	 * @param url
	 */
	async checkFavoriteByUrl(url: string) {
		let response = await httpx.get(
			"https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl",
			{
				data: {
					url: url,
				},
				fetch: true,
				allowInterceptConfig: false,
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("检查收藏夹状态失败，请求异常", response);
			Qmsg.error("检查收藏夹状态失败，请求异常");
			return false;
		}
		let data = utils.toJSON(response.data.responseText);
		let findValue = Array.from<number>(Object.values(data["data"])).find(
			(item) => item != 0
		);
		if (findValue) {
			return false;
		} else {
			return true;
		}
	},
};
