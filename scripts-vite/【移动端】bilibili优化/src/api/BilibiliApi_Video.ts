import { httpx, utils } from "@/env";
import { BilibiliVideoPlayUrlQN } from "@/hook/BilibiliNetworkHook";

export const BilibiliApi_Video = {
	/**
	 * 获取视频播放地址，avid或bvid必须给一个
	 * + /x/player/playurl
	 */
	async playUrl(
		config:
			| {
					avid: string;
					cid: string | number;
					qn?: number;
					fnval?: number;
					fnver?: number;
					fourk?: number;
			  }
			| {
					bvid: string;
					cid: string | number;
					qn?: number;
					fnval?: number;
					fnver?: number;
					fourk?: number;
			  }
	) {
		let getData = {
			cid: config.cid,
			qn: config.qn ?? BilibiliVideoPlayUrlQN["1080P60 高帧率"],
			fnval: config.fnval ?? 1,
			fnver: config.fnver ?? 0,
			fourk: config.fourk ?? 1,
		};
		if ("avid" in config) {
			Reflect.set(getData, "avid", config.avid);
		} else if ("bvid" in config) {
			Reflect.set(getData, "bvid", config.bvid);
		} else {
			throw new TypeError("avid or bvid must give one");
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
};
