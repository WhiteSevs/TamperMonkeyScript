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
				fetch: true,
				allowInterceptConfig: false,
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);
		log.info(response);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("获取收藏夹信息失败，请求异常");
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
		sourceId: number;
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
				headers: {
					"Content-Type": "application/json",
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			}
		);
		log.info(response);
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
	 * 检查收藏夹信息
	 * @param url
	 * @returns
	 * + true 已收藏
	 * + false 未收藏
	 */
	async checkFavoriteByUrl(url: string) {
		debugger;
		let response = await httpx.get(
			`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl`,
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
		log.info(response);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("检查收藏夹状态失败，请求异常");
			Qmsg.error("检查收藏夹状态失败，请求异常");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			data: {
				[folderId: string]: number;
			};
			msg: string;
			total: number;
			code: number;
		};
		return data.data;
	},
	/**
	 * 创建收藏夹
	 */
	async createFolder(config: {
		name: string;
		source: "blog";
		description: string;
		isPrivate: 0 | 1;
		isDefault: 0 | 1;
		username: string;
	}) {
		let response = await httpx.post(
			`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder`,
			{
				data: config,
				fetch: true,
				headers: {
					Accept: "application/json, text/javascript, */*; q=0.01",
					"Content-Type": "application/json",
					"User-Agent": utils.getRandomPCUA(),
				},
				allowInterceptConfig: false,
			}
		);
		log.info(response);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			Qmsg.error("创建收藏夹失败");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			data: {
				id: number;
				name: string;
				favoriteNum: number;
				followNum: number;
				username: string;
				description: string;
				isPrivate: number;
				createdAt: null;
				updatedAt: null;
				createTime: null;
				updateTime: null;
				isDefault: 1;
			};
			msg: string;
			total: number;
			code: number;
		};

		return data.data;
	},
};
