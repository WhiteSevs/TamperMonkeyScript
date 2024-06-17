import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { Api_getPdData } from "../apiType/TiebaPostApiType";

interface TiebaPostApubthreadDetails {
	/**
	 * 评论的内容
	 */
	content: string;
	/**
	 * 吧id
	 * + __vue__.forum.id
	 */
	fid: number | string;
	/**
	 * 帖子的pid
	 */
	pid: number | string;
	/**
	 * 帖子的tid
	 */
	tid: number | string;
	/**
	 * 吧名
	 * + __vue__.forum.name
	 */
	forumName: string;
	/**
	 * 必须，当前用户的tbs
	 */
	tbs: string;
}

export const TiebaPostApi = {
	/**
	 * 评论帖子
	 */
	async apubthread(details: TiebaPostApubthreadDetails) {
		let api = "https://tieba.baidu.com/mo/q/apubthread";
		let data = {
			co: details.content,
			fid: details.fid,
			/**
			 * 不知道具体值
			 */
			src: 1,
			pid: details.pid,
			z: details.tid,
			word: details.forumName,
			/**
			 * 客户端
			 */
			client_type: "wap_smart",
			tbs: details.tbs,
			/**
			 * 不知道具体值
			 */
			come_from: 1,
		};
		let formdata = utils.toFormData(data);
		let postResp = await httpx.post(api, {
			data: formdata,
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				Host: "tieba.baidu.com",
				Origin: "https://tieba.baidu.com",
				"X-Requested-With": "XMLHttpRequest",
			},
			fetch: true,
		});
		if (!postResp.status) {
			return;
		}
		let postData = utils.toJSON(postResp.data.responseText);
		log.info(["发表回复", postData]);
		if (postData["no"] != 0) {
			Qmsg.error("发表回复失败");
			log.error("发表回复失败");
			return;
		}
		return postData["data"] as any;
	},
	/**
	 * 删除评论
	 */
	async deleteCommit(data: {
		/**
		 * 贴吧tbs值 PageData.tbs
		 */
		tbs: string;
		/**
		 * 当前吧名 PageData.forum.forum_name
		 */
		kw: string;
		/**
		 * threadId PageData.thread.thread_id
		 */
		fid: number | string;
		/**
		 * threadId PageData.thread.thread_id
		 */
		tid: number | string;
		/**
		 * 本回复的id comment_id
		 */
		pid: number | string;
	}) {
		let api = "https://tieba.baidu.com/f/commit/post/delete";
		let postData = {
			// 可能还有个是lzl
			commit_fr: "pb",
			// 编码
			ie: "utf-8",
			// 贴吧tbs值 PageData.tbs
			tbs: data.tbs,
			// 当前吧名 PageData.forum.forum_name
			kw: data.kw,
			// forumId PageData.forum.forum_id
			fid: data.fid,
			// threadId PageData.thread.thread_id
			tid: data.tid,
			// 是否是会员删除？
			is_vipdel: 1,
			// 本回复的id comment_id
			pid: data.pid,
			// ???不知道是什么
			is_finf: 1,
		};
		let resp = await httpx.post(api, {
			fetch: true,
			data: utils.toSearchParamsStr(postData),
			headers: {
				Accept: "application/json, text/javascript, */*; q=0.01",
				"X-Requested-With": "XMLHttpRequest",
				Host: "tieba.baidu.com",
				Referer: "https://tieba.baidu.com",
				"User-Agent": utils.getRandomPCUA(),
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			},
		});
		if (!resp.status) {
			return;
		}
		log.info(["删除回复的情况：", resp]);
		let respData = utils.toJSON<{
			no: number;
			err_code: number;
			error: null | string;
			data: string[];
		}>(resp.data.responseText);
		if (respData.no !== 0) {
			Qmsg.error(respData.error);
			return;
		}
		return true;
	},
	/**
	 * 获取评论数据
	 * @param kz 帖子id
	 * @param [pn=1] 评论页码
	 * @param [rn=10] 每页评论数量
	 * @param [only_post=1]
	 */
	async getPbData(
		kz: number,
		pn: number = 1,
		rn: number = 10,
		only_post: number = 1
	) {
		let searchParamsData = {
			pn: pn,
			rn: rn,
			only_post: only_post,
			kz: kz,
		};
		let Api = "https://tieba.baidu.com/mg/p/getPbData";
		let getResp = await httpx.get(
			Api + "?" + utils.toSearchParamsStr(searchParamsData),
			{
				fetch: true,
				headers: {
					Accept: "application/json, text/plain, */*",
					"Referer-Asyn": "",
					"X-Requested-With": "XMLHttpRequest",
				},
			}
		);
		if (!getResp.status) {
			return;
		}
		let data = utils.toJSON(getResp.data.responseText);
		if (data["errno"] !== 0) {
			return;
		}
		let page = data["data"]["page"] as {
			current_page: number;
			/** 1有更多 0没有 */
			has_more: number;
			offset: number;
			page_size: number;
			req_num: number;
			total_num: number;
			total_page: number;
		};
		let post_list = data["data"]["post_list"] as Api_getPdData[];
		return {
			page: page,
			post_list: post_list,
		};
	},
	/**
	 * 上传图片
	 */
	async cooluploadpic(imageFile: File) {
		let postData = {
			pic: imageFile,
		};
		let searchParamsData = {
			fr: "smallapp",
			from_zt: 1,
			r: 0.10027896050957352,
		};
		let Api = "https://tieba.baidu.com/mo/q/cooluploadpic";
		let postResp = await httpx.post(
			Api + "?" + utils.toSearchParamsStr(searchParamsData),
			{
				fetch: true,
				data: utils.toFormData(postData),
				headers: {
					Accept: "application/json, text/plain, */*",
				},
			}
		);
		if (!postResp.status) {
			return;
		}
		let data = utils.toJSON(postResp.data.responseText);
		if (data["no"] !== 0) {
			return;
		}
		return {
			upload_img_info: data["data"]["upload_img_info"] as string,
			upload_img_url: data["data"]["upload_img_url"] as string,
			view_img_url_auth: data["data"]["view_img_url_auth"] as string,
		};
	},
};
