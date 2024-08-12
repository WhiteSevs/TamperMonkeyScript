import { httpx, log, utils } from "@/env";
import Qmsg from "qmsg";
import { Api_getPdData } from "../types/TiebaPostApiType";
import { CommonUtils } from "@/utils/CommonUtils";

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
			/**
			 * 回复的内容
			 */
			co: details.content,
			fid: details.fid,
			/**
			 * 不知道具体值
			 */
			src: 1,
			pid: details.pid,
			/**
			 * 帖子id
			 */
			z: details.tid,
			/**
			 * 当前吧名
			 */
			word: details.forumName,
			/**
			 * 客户端
			 * "pc_web" | "wap_smart" | "mini_program"
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
	 * @param imageFile 图片文件
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
	/**
	 * 上传图片(PC端)
	 * @param searchParamsData 查询参数
	 */
	async uploadphotos(searchParamsData: {
		/** tbs值 */
		tbs: string;
		fid: string | number;
		picWaterType?: number;
		imageFile: File;
	}) {
		// 水印类型，这里是无水印
		const picWaterType = searchParamsData.picWaterType ?? 1039999;
		const postFormData = new FormData();
		postFormData.set("file", searchParamsData.imageFile);
		let url = `https://uploadphotos.baidu.com/upload/pic?tbs=${searchParamsData.tbs}&fid=${searchParamsData.fid}&picWaterType=${picWaterType}`;
		let postResp = await httpx.post(url, {
			data: postFormData,
			headers: {
				Accept: "*/*",
				Host: "uploadphotos.baidu.com",
				Origin: "https://tieba.baidu.com",
				Referer: "https://tieba.baidu.com/",
			},
		});
		if (!postResp.status) {
			return;
		}
		let result = utils.toJSON(postResp.data.responseText);
		if (result.no !== 0) {
			log.error("上传图片失败");
			Qmsg.error("上传图片失败");
			return;
		}
		let info = result["info"] as {
			cur_time: null;
			err_no: 0;
			full_datalen: number;
			full_sign0: null;
			full_sign1: null;
			/** 完整图片的高度 */
			fullpic_height: number;
			/** 完整图片的宽度 */
			fullpic_width: number;
			/** 图片域名，例如："tiebapic.baidu.com" */
			host: string;
			/** 图片地址 */
			pic_ab_url_auth: string;
			/** 图片描述，例如：image_emoticon22 */
			pic_desc: string;
			/** 图片id */
			pic_id: string;
			/** 加密后的图片id */
			pic_id_encode: string;
			/** 图片类型 */
			pic_type: 4;
			/** 可以直接在浏览器查看的图片链接，后面带查询参数tbpicau */
			pic_url_auth: string;
			/** 需要校验Referer */
			pic_url_no_auth: string;
			/** 带水印的图片地址 */
			pic_water: string;
		};
		if (typeof info.pic_ab_url_auth === "string") {
			// 转https
			info.pic_ab_url_auth = CommonUtils.fixHttps(info.pic_ab_url_auth);
		}
		if (typeof info.pic_url_auth === "string") {
			// 转https
			info.pic_url_auth = CommonUtils.fixHttps(info.pic_url_auth);
		}
		if (typeof info.pic_url_auth === "string") {
			// 转https
			info.pic_url_auth = CommonUtils.fixHttps(info.pic_url_auth);
		}
		if (typeof info.pic_water === "string") {
			// 转https
			info.pic_water = CommonUtils.fixHttps(info.pic_water);
		}
		return info;
	},
};
