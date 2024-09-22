import { GMCookie, httpx, Qmsg, utils } from "@/env";
import { BilibiliVideoPlayUrlQN } from "@/hook/BilibiliNetworkHook";

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
					avid: string;
			  })
			| (BilibliPlayUrlCommonConfig & {
					/** 视频的bv号 */
					bvid: string;
			  }),
		extraParams?: any
	) {
		let getData = {
			cid: config.cid,
			qn: config.qn ?? BilibiliVideoPlayUrlQN["1080P60 高帧率"],
			high_quality: config.high_quality ?? 1,
			fnval: config.fnval ?? 1,
			// 固定0
			fnver: config.fnver ?? 0,
			// 是否允许 4K 视频
			fourk: config.fourk ?? 1,
		};
		if (config.setPlatformHTML5) {
			// 该值是用来请求可以在移动端播放的链接的
			Reflect.set(getData, "platform", "html5");
		}
		if ("avid" in config) {
			Reflect.set(getData, "avid", config.avid);
		} else if ("bvid" in config) {
			Reflect.set(getData, "bvid", config.bvid);
		} else {
			throw new TypeError("avid or bvid must give one");
		}
		if (typeof extraParams === "object") {
			Object.assign(getData, extraParams);
		}
		let getResp = await httpx.get(
			"https://api.bilibili.com/x/player/playurl?" +
				utils.toSearchParamsStr(getData),
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
		return data["data"] as {
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
			[key: string]: any;
		};
	},
	/**
	 * 点赞视频（web端）
	 * @param config
	 */
	async like(
		config: { aid: number; like: 1 | 2 } | { bvid: string; like: 1 | 2 }
	) {
		let getData = {
			like: config.like,
			csrf: GMCookie.get("bili_jct")?.value || "",
		};
		if ("avid" in config) {
			Reflect.set(getData, "avid", config.avid);
		} else if ("bvid" in config) {
			Reflect.set(getData, "bvid", config.bvid);
		} else {
			throw new TypeError("avid or bvid must give one");
		}
		let getResp = await httpx.get(
			"https://api.bilibili.com/x/web-interface/archive/like?" +
				utils.toSearchParamsStr(getData),
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
