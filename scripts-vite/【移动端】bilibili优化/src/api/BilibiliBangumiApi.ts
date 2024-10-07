import { httpx, log, utils } from "@/env";
import { BilibiliApiProxy } from "./BilibiliCDNProxy";
import { BilibiliLogUtils } from "@/utils/BilibiliLogUtils";
import {
	BilibiliApiConfig,
	type BilibiliFailResponse,
} from "./BilibiliApiConfig";
import { BilibiliResponseCheck } from "./BilibiliResponseCheck";

/**
 * 番剧视频播放地址信息
 */
export type BilibiliTypeBangumiVideoPlayeInfo = {
	accept_description: string[];
	accept_format: string;
	/** 允许的清晰度 */
	accept_quality: number[];
	/** 跳过片头|片尾信息的数据 */
	clip_info_list: {
		/**
		 * 跳过片头|片尾的类型
		 *
		 * + CLIP_TYPE_ED
		 */
		clipType: string;
		/** @default 0 */
		materialNo: number;
		/** toast开始弹出的事件 */
		start: number;
		/** 跳到的目的地时间 */
		end: number;
		/** toast信息 */
		toastText: string;
	}[];
	/**
	 * format为flv时存在该属性
	 */
	durl: {
		ahead: string;
		/** 备用播放地址 */
		backup_url: string[];
		/** 大小 */
		length: number;
		/** 一般是空的 */
		md5: string;
		/** flv视频排序 */
		order: number;
		/** 文件大小 */
		size: number;
		/** 播放地址 */
		url: string;
		vhead: string;
	}[];
	/** dash的播放数据 */
	dash: {
		/** 音频信息 */
		audio: {
			/** 链接信息 */
			backupUrl: string[];
			/** 链接信息 */
			backup_url: string[];
			/** 链接信息 */
			baseUrl: string;
			/** 链接信息 */
			base_url: string;
			/** 编码格式，一般是0 */
			codecid: number;
			/** 编码格式描述 */
			codecs: string;
			/** 音质代码 */
			id: number;
			/** 类型，一般是audio/mp4 */
			mimeType: string;
			/** 类型，一般是audio/mp4 */
			mime_type: string;
			/** 文件大小 */
			size: number;
		}[];
		/** 杜比音质 */
		dolby: {
			audio: {}[];
			type: 0 | 1;
		};
		/** 视频信息 */
		video: {
			/** 链接信息 */
			backupUrl: string[];
			/** 链接信息 */
			backup_url: string[];
			/** 编码格式 */
			codecid: number;
			/** 编码格式描述 */
			codecs: string;
			/** 链接信息 */
			baseUrl: string;
			/** 链接信息 */
			base_url: string;
			/** 画质代码 */
			id: number;
			/** 类型，一般是video/mp4 */
			mimeType: string;
			/** 类型，一般是video/mp4 */
			mime_type: string;
			/** 文件大小 */
			size: number;
		}[];
	};
	/** 实际请求到的最高的清晰度 */
	quality: number;
	/** 支持的清晰度 */
	support_formats: {
		/** 画质的文字描述 */
		description: string;
		/** 新版-画质的文字描述 */
		new_description: string;
		display_desc: string;
		format: string;
		/** 是否可以预览 */
		has_preview: false;
		/** 是否需要登录才能看 */
		need_login: true;
		/** 是否需要会员才能看 */
		need_vip: true;
		/** 清晰度 */
		quality: number;
		sub_description: string;
		superscript: string;
	}[];
	/** 相应的视频类型 */
	format: "hdflv2" | "flv" | "mp4";
	/** 一般用DASH */
	type: "DASH" | "FLV" | "MP4";
	vip_status: number;
	vip_type: number;
};

/**
 * 番剧视频播放地址信息-html5
 */
export type BilibiliTypeBangumiVideoPlayeHtml5Info = {
	accept_description: BilibiliTypeBangumiVideoPlayeInfo["accept_description"];
	accept_format: BilibiliTypeBangumiVideoPlayeInfo["accept_format"];
	/** 允许的清晰度 */
	accept_quality: BilibiliTypeBangumiVideoPlayeInfo["accept_quality"];
	/** 跳过的信息 */
	clip_info: {
		clipType: number;
		/** toast开始弹出的事件 */
		start: number;
		/** 跳到的目的地时间 */
		end: number;
	}[];
	/** 默认的清晰度 */
	quality: number;
	/** 播放数据，一般只有一个，清晰度是quality的值，播放host是mcdn */
	durl: {
		/** 备用播放地址，可能是空的 */
		backup_url: string[];
		/** 文件大小 */
		size: number;
		/** 播放地址 */
		url: string;
	}[];
	/** 多个播放数据 */
	durls: {
		/** 清晰度 */
		quality: number;
		/** 播放数据，一般只有一个，播放host是mcdn */
		durl: BilibiliTypeBangumiVideoPlayeHtml5Info["durl"];
	}[];
	/** 支持的清晰度 */
	support_formats: BilibiliTypeBangumiVideoPlayeInfo["support_formats"];
	/** 一般用MP4 */
	type: string;
	/** 视频编码 */
	video_codecid: number;
};

export const BilibiliBangumiApi = {
	/**
	 * 轮询获取番剧播放地址
	 */
	async getPlayUrl(option: {
		/** 视频的aid */
		avid: string | number;
		/** 视频的cid */
		cid: string | number;
		/** 视频的ep_id */
		ep_id: string | number;
		/** 清晰度 */
		qn?: number;
		fnval?: number;
	}) {
		/**
		 * 请求的参数
		 */
		let searchParamsData = {
			avid: "",
			cid: "",
			ep_id: "",
			// 8K 超高清
			qn: 127,
			/** 固定值 */
			fnver: 0,
			// dash且需求 av1 编码且需求 8K 分辨率
			fnval: 16 | 1024 | 2048,
			// mp4格式
			// fnval: 1,
			/** 是否允许4K视频 */
			fourk: 1,
		};
		searchParamsData = utils.assign(searchParamsData, option);
		// 获取解析服务器列表
		let serverHostList = BilibiliApiProxy.getBangumiProxyHost();
		log.info(`番剧播放地址请求数据`);
		let failReponseJSON = [];
		let result: BilibiliTypeBangumiVideoPlayeInfo | void = void 0;
		/** 请求地址 */
		const urlPath = "/pgc/player/web/playurl";
		log.info(`请求路径：${urlPath}`);
		for (let index = 0; index < serverHostList.length; index++) {
			// 服务器host
			const serverHostInfo = serverHostList[index];
			const serverHost = serverHostInfo.host;
			/** 代理服务器的请求参数 */
			const proxyServerSearchParamsData = {};
			if (serverHost !== BilibiliApiConfig.web_host) {
				// 不是默认的host，加上上面的参数
				/** 发送给代理服务器的 */
				utils.assign(
					proxyServerSearchParamsData,
					BilibiliApiProxy.getBangumiProxySearchParam({
						area: serverHostInfo.area,
					}),
					true
				);
				log.info(`代理服务器数据: ${JSON.stringify(serverHostInfo)}`);
				log.info(
					`代理服务器请求参数：${JSON.stringify(
						BilibiliLogUtils.filteringSensitiveSearchParamData(
							proxyServerSearchParamsData
						)
					)}`
				);
			}
			let url = `https://${serverHost}${urlPath}?${utils.toSearchParamsStr(
				searchParamsData
			)}&${utils.toSearchParamsStr(proxyServerSearchParamsData)}`;
			let getResponse = await httpx.get(url, {
				responseType: "json",
				fetch: false,
				allowInterceptConfig: false,
				headers: {
					Referer: "https://www.bilibili.com/",
				},
			});
			if (!getResponse.status) {
				log.error(`代理服务器：${serverHost} 请求失败`);
				continue;
			}
			// 数据json
			let responseData = utils.toJSON(getResponse.data.responseText);
			if (import.meta.hot) {
				console.log(responseData);
			}
			let responseResult =
				responseData.result as BilibiliTypeBangumiVideoPlayeInfo;
			if (
				!BilibiliResponseCheck.isWebApiSuccess(responseData) ||
				BilibiliResponseCheck.isAreaLimit(responseData)
			) {
				// 检测请求的数据是否是成功的
				// 是否是区域限制
				log.error(
					`请求失败，当前代理服务器：${serverHost} ${JSON.stringify(
						responseData
					)}`
				);
				failReponseJSON.push(responseData);
				continue;
			}

			// 成功获取
			result = responseData.result as BilibiliTypeBangumiVideoPlayeInfo;
			break;
		}
		if (result == null) {
			BilibiliLogUtils.failToast(failReponseJSON);
		}
		return result;
	},
	/**
	 * 获取番剧播放地址-html5，获取的是mp4的
	 */
	async getPlayUrlHTML5(option: {
		/** 视频的aid */
		avid: string | number;
		/** 视频的cid */
		cid: string | number;
		/** 视频的ep_id */
		ep_id: string | number;
	}) {
		/**
		 * 请求的参数
		 */
		let searchParamsData = {
			avid: "",
			cid: "",
			ep_id: "",
			bsource: "",
			// qn: 116,
			// fnver: 0,
			// fnval: 1,
			// fourk: 1,
			// from_client: "BROWSER",
			// drm_tech_type: 2,
		};

		searchParamsData = utils.assign(searchParamsData, option);
		log.info(`（原版api）番剧播放地址请求数据`);
		/** 请求地址 */
		const urlPath = "/pgc/player/web/playurl/html5";

		let url = `https://${
			BilibiliApiConfig.web_host
		}${urlPath}?${utils.toSearchParamsStr(searchParamsData)}`;

		let getResponse = await httpx.get(url, {
			responseType: "json",
			fetch: true,
			headers: {
				Host: "www.bilibili.com",
				Referer: "https://www.bilibili.com",
			},
		});

		if (!getResponse.status) {
			return;
		}
		// 数据json
		let responseData = utils.toJSON(getResponse.data.responseText);
		if (import.meta.hot) {
			console.log(responseData);
		}
		if (!BilibiliResponseCheck.isWebApiSuccess(responseData)) {
			// 检测请求的数据是否是成功的
			BilibiliLogUtils.failToast(responseData);
			return;
		}
		let responseResult =
			responseData.result as BilibiliTypeBangumiVideoPlayeHtml5Info;
		return responseResult;
	},
};
