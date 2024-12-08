import { GMCookie, httpx, log, Qmsg, utils } from "@/env";
import { BilibiliApiRequestCheck } from "./BilibiliApiRequestCheck";
import { BilibiliApiConfig } from "./BilibiliApiConfig";
import { BilibiliApiResponseCheck } from "./BilibiliApiResponseCheck";
import { VideoQualityNameMap } from "@/video-info/VideoDict";

type BilibliPlayUrlCommonConfig = {
	cid: string | number;
	/** 画质 */
	qn?: number;
	/** 视频清晰度选择 */
	high_quality?: number;
	fnval?: number;
	/** 固定0 */
	fnver?: number;
	/** 是否允许 4K 视频 */
	fourk?: number;
	/** 该值用于移动端html5播放，如果删除，虽然通过其它办法可以获取到，但是无法播放，因为源会鉴权referer为www.bilibili.com */
	setPlatformHTML5?: boolean;
};

type TypeBilibiliVideoInfo = {
	accept_description: string[];
	accept_format: string;
	/** 允许的清晰度 */
	accept_quality: number[];
	/** 画质 */
	quality: number;
	/** 支持解锁的画质列表 */
	support_formats: {
		codecs: null;
		/** 描述 */
		display_desc: string;
		/** 类型如flv */
		format: string;
		/** 文字，一般用这个显示 */
		new_description: string;
		/** 画质值 */
		quality: number;
		superscript: string;
	}[];
};

export type TypeBilibiliVideoInfo_mp4 = TypeBilibiliVideoInfo & {
	format: string;
	from: string;
	/** 播放地址信息列表 */
	durl: {
		ahead: string;
		/** 备用url */
		backup_url: string[] | null;
		length: number;
		order: number;
		/** 视频大小 */
		size: number;
		/** 链接 */
		url: string;
		vhead: string;
	}[];
	/**  */
	timelength: number;
	/** 视频编码 */
	video_codecid: number;
	[key: string]: any;
};

export type TypeBilibiliVideoInfo_m4s = TypeBilibiliVideoInfo & {
	dash: {
		audio: {
			SegmentBase: {
				Initialization: string;
				indexRange: string;
			};
			/** 链接信息 */
			backupUrl: string[];
			/** 链接信息 */
			backup_url: string[];
			/** 带宽 */
			bandwidth: number;
			/** 链接信息 */
			baseUrl: string;
			/** 链接信息 */
			base_url: TypeBilibiliVideoInfo_m4s["dash"]["audio"][0]["baseUrl"];
			/** 编码格式，一般是0 */
			codecid: number;
			/** 编码格式描述 */
			codecs: string;
			/** 帧率信息 */
			frameRate: "";
			/** 帧率信息 */
			frame_rate: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["frameRate"];
			height: 0;
			/** 音质代码 */
			id: number;
			/** 类型，一般是audio/mp4 */
			mimeType: string;
			/** 类型，一般是audio/mp4 */
			mime_type: string;
			/** 文件大小（视频没有） */
			// size: number;
			sar: "";
			segment_base: TypeBilibiliVideoInfo_m4s["dash"]["audio"][0]["SegmentBase"];
			startWithSap: 0;
			start_with_sap: TypeBilibiliVideoInfo_m4s["dash"]["audio"][0]["startWithSap"];
			width: 0;
		}[];
		dolby: {
			audio: null;
			type: number;
		};
		duration: number;
		minBufferTime: number;
		min_buffer_time: number;
		video: {
			SegmentBase: {
				Initialization: string;
				indexRange: string;
			};
			/** 链接信息 */
			backupUrl: string[];
			/** 链接信息 */
			backup_url: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["backupUrl"];
			/** 带宽 */
			bandwidth: number;
			/** 链接信息 */
			baseUrl: string;
			/** 链接信息 */
			base_url: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["baseUrl"];
			/** 编码格式 */
			codecid: number;
			/** 编码格式描述 */
			codecs: string;
			/** 帧率信息 */
			frameRate: string;
			/** 帧率信息 */
			frame_rate: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["frameRate"];
			/** 视频高度 */
			height: number;
			/** 画质代码 */
			id: number;
			/** 类型，一般是video/mp4 */
			mimeType: string;
			/** 类型，一般是video/mp4 */
			mime_type: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["mimeType"];
			/** 文件大小 */
			// size: number;
			/** 1:1 */
			sar: string;
			segment_base: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["SegmentBase"];
			/** @default 1 */
			startWithSap: number;
			/** @default 1 */
			start_with_sap: TypeBilibiliVideoInfo_m4s["dash"]["video"][0]["startWithSap"];
			/** 视频宽度 */
			width: number;
		}[];
	};
	format: "flv";
	from: "local";
	last_play_cid: number;
	last_play_time: number;
	timelength: number;
	/** 视频编码 */
	video_codecid: number;
	[key: string]: any;
};
export const BilibiliVideoApi = {
	/**
	 * 获取视频播放地址，avid或bvid必须给一个
	 * + /x/player/playurl
	 * @param config
	 * @param extraParams 额外参数，一般用于hook network参数内的判断
	 */
	async playUrl(
		config:
			| (BilibliPlayUrlCommonConfig & {
					/** 视频的av号 */
					aid: string;
			  })
			| (BilibliPlayUrlCommonConfig & {
					/** 视频的bv号 */
					bvid: string;
			  }),
		extraParams?: any
	) {
		let searchParamsData = {
			cid: config.cid,
			qn: config.qn ?? VideoQualityNameMap["1080P60 高帧率"],
			high_quality: config.high_quality ?? 1,
			fnval: config.fnval ?? 1,
			// 固定0
			fnver: config.fnver ?? 0,
			// 是否允许 4K 视频
			fourk: config.fourk ?? 1,
		};
		if (config.setPlatformHTML5) {
			// 该值是用来请求可以在移动端播放的链接的
			Reflect.set(searchParamsData, "platform", "html5");
		}
		BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(
			searchParamsData,
			config
		);
		if (typeof extraParams === "object") {
			Object.assign(searchParamsData, extraParams);
		}
		let getResp = await httpx.get(
			"https://api.bilibili.com/x/player/playurl?" +
				utils.toSearchParamsStr(searchParamsData),
			{
				responseType: "json",
				fetch: true,
			}
		);
		if (!getResp.status) {
			return;
		}
		let data = utils.toJSON(getResp.data.responseText);
		if (data["code"] !== 0) {
			return;
		}
		return data["data"] as
			| TypeBilibiliVideoInfo_mp4
			| TypeBilibiliVideoInfo_m4s;
	},
	/**
	 * 获取视频在线观看人数
	 * + /x/player/online/total
	 */
	async onlineTotal(
		config:
			| {
					aid: number | string;
					cid: number | string;
			  }
			| {
					bvid: string;
					cid: number | string;
			  }
	) {
		let searchParamsData = {
			cid: config.cid,
		};
		BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(
			searchParamsData,
			config
		);
		let httpxResponse = await httpx.get(
			`https://${
				BilibiliApiConfig.web_host
			}/x/player/online/total?${utils.toSearchParamsStr(searchParamsData)}`,
			{
				responseType: "json",
				fetch: true,
			}
		);
		if (!httpxResponse.status) {
			return;
		}
		let data = utils.toJSON(httpxResponse.data.responseText);
		if (!BilibiliApiResponseCheck.isWebApiSuccess(data)) {
			log.error(`获取在线观看人数失败: ${JSON.stringify(data)}`);
		}

		return data["data"] as {
			/** 展示所有终端总计人数 */
			total: string;
			/** 展示web端实时在线人数 */
			count: string;
			/** 数据显示控制 */
			show_switch: {
				total: boolean;
				count: boolean;
			};
		};
	},
	/**
	 * 点赞视频（web端）
	 * @param config
	 */
	async like(
		config: { aid: number; like: 1 | 2 } | { bvid: string; like: 1 | 2 }
	) {
		let searchParamsData = {
			like: config.like,
			csrf: GMCookie.get("bili_jct")?.value || "",
		};

		BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(
			searchParamsData,
			config
		);
		let getResp = await httpx.get(
			"https://api.bilibili.com/x/web-interface/archive/like?" +
				utils.toSearchParamsStr(searchParamsData),
			{
				fetch: true,
			}
		);
		if (!getResp.status) {
			return false;
		}
		let data = utils.toJSON(getResp.data.responseText);
		const code = data["code"];
		if (code === 0) {
			return true;
		}
		if (code === -101) {
			Qmsg.error("账号未登录");
		} else if (code === -111) {
			Qmsg.error("csrf校验失败");
		} else if (code === -400) {
			Qmsg.error("请求错误");
		} else if (code === -403) {
			Qmsg.error("账号异常");
		} else if (code === 10003) {
			Qmsg.error("不存在该稿件");
		} else if (code === 65004) {
			Qmsg.error("取消点赞失败");
		} else if (code === 65006) {
			Qmsg.warning("重复点赞");
		} else {
			Qmsg.error("未知错误：" + data["message"]);
		}
		return false;
	},
};
