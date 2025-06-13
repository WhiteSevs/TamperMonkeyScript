import { httpx, log, utils } from "@/env";
import { ApiResponseCheck } from "./ApiResponseCheck";
import Qmsg from "qmsg";

export const CSDNArticleStatusApi = {
	/**
	 * 点赞
	 * @param articleId 文章id
	 */
	async like(articleId: string | number) {
		let response = await httpx.post(
			"https://blog.csdn.net//phoenix/web/v1/article/like",
			{
				data: {
					articleId: articleId,
				},
				processData: true,
				fetch: true,
				allowInterceptConfig: false,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);

		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("点赞失败，请求异常", response);
			Qmsg.error("点赞失败，请求异常");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			data: {
				/** 点赞量 */
				like_num: number;
				/**
				 * 当前文章的点赞状态
				 *
				 * + true 已点赞
				 * + false 未点赞
				 */
				status: boolean;
			};
		};

		return data.data;
	},
	/**
	 * 点踩
	 * @param articleId
	 */
	async bury(articleId: string | number) {
		let response = await httpx.get(
			`https://blog.csdn.net//phoenix/web/v1/article/bury`,
			{
				data: {
					articleId: articleId,
				},
				processData: true,
				fetch: true,
				allowInterceptConfig: false,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
					"User-Agent": utils.getRandomPCUA(),
				},
			}
		);
		if (
			!response.status ||
			!ApiResponseCheck.isSuccessResponse(response.data.responseText)
		) {
			log.error("点踩失败，请求异常", response);
			Qmsg.error("点踩失败，请求异常");
			return;
		}
		let data = utils.toJSON(response.data.responseText) as {
			data: {
				/** 点踩量 */
				buryCount: number;
				/**
				 * 当前文章的点踩状态
				 *
				 * + true 已点踩
				 * + false 未点踩
				 */
				status: string;
			};
		};

		return data.data;
	},
};
