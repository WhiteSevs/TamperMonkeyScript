import {
	BilibiliBangumiApi,
	type BilibiliTypeBangumiVideoPlayeInfo,
} from "@/api/BilibiliBangumiApi";
import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { BilibiliBangumi } from "./BilibiliBangumi";
import { unsafeWindow } from "ViteGM";
import { VueUtils } from "@/utils/VueUtils";
import { DOMUtils, log } from "@/env";
import {
	BilibiliBangumiArtPlayer,
	type BilibiliBangumiArtPlayerOption,
} from "./artplayer/ArtPlayer";
import { PopsPanel } from "@/setting/setting";
import { BangumiArtPlayerVideoConfig } from "./artplayer/ArtPlayerVideoConfig";
import { VideoSoundQualityCode } from "@/video-info/VideoDict";
import { BilibiliLogUtils } from "@/utils/BilibiliLogUtils";
import type { quality } from "artplayer/types/quality";
import type { EP_INFO, EP_LIST } from "./TypeBangumi";

type VideoQualityInfo = {
	/** 画质文字 */
	name: string;
	/** 链接 */
	url: string;
	/** 文件类型 */
	type: string;
	/** 画质代码 */
	id: number;
	/** 文件大小 */
	size: number;
	/** 画质代码 */
	quality: number;
	/** 是否需要会员 */
	vip: boolean;
};
/**
 * 对获取视频的信息的数组中过滤掉重复的画质
 * @param arr
 */
function filterArrayWithMaxSize<T>(arr: T[]): T[] {
	// 创建一个对象用来存储每个id对应的最大size的对象
	const map = {};
	// 遍历输入数组
	arr.forEach((item) => {
		// 如果当前id没有被记录过，或者新对象的size比已记录的大，则更新记录
		// @ts-ignore
		if (!map[item.id] || item.size > map[item.id].size) {
			// @ts-ignore
			map[item.id] = item;
		}
	});
	// 从map中提取结果数组
	const result = Object.values(map);
	// @ts-ignore
	return result;
}
/**
 * 从请求的信息中过滤出需要的视频信息
 */
function filterDashVideoQualityInfo(
	dashInfo: {
		accept_quality: BilibiliTypeBangumiVideoPlayeInfo["accept_quality"];
		support_formats: BilibiliTypeBangumiVideoPlayeInfo["support_formats"];
		video: BilibiliTypeBangumiVideoPlayeInfo["dash"]["video"];
	},
	config: {
		/** 需要的视频编码 */
		codecid?: number;
	}
) {
	let result: VideoQualityInfo[] = [];
	dashInfo.video.forEach((dashVideoInfo) => {
		if (!dashInfo.accept_quality.includes(dashVideoInfo.id)) {
			// 必须是允许的画质
			return;
		}
		if (config.codecid != null && dashVideoInfo.codecid !== config.codecid) {
			// 必须是允许的编码格式
			return;
		}
		//  找到画质代码对应的文字名称
		let findSupportFormat = dashInfo.support_formats.find(
			(formatsItem) => formatsItem.quality === dashVideoInfo.id
		);
		// 视频url
		let videoUrl = BilibiliCDNProxy.findBetterCDN(
			dashVideoInfo.base_url,
			dashVideoInfo.baseUrl,
			dashVideoInfo.backup_url,
			dashVideoInfo.backupUrl
		);
		// 处理视频host替换
		videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
		// 视频画质名称
		let qualityName = findSupportFormat?.new_description!;
		result.push({
			name: qualityName,
			url: videoUrl,
			type: dashVideoInfo.mimeType,
			id: dashVideoInfo.id,
			size: dashVideoInfo.size,
			quality: dashVideoInfo.id,
			vip: Boolean(findSupportFormat?.need_vip),
		});
	});

	return result;
}

/**
 * 生成番剧标题
 * @param ep_id 第xx集，一般是EP_INFO.title
 * @param title 视频标题，一般是EP_INFO.long_title
 */
export const GenerateVideoTitle = (ep_id: string | number, title: string) => {
	return `第${ep_id}话 ${title}`;
};

/**
 * 生成art-player需要的参数
 *
 * 注意没有container，需要自行补上
 * @param EP_INFO 当前集的信息
 * @param EP_LIST 集数信息
 */
export const GenerateArtPlayerOption = async (
	EP_INFO: EP_INFO,
	EP_LIST: EP_LIST
) => {
	const { aid, bvid, cid, ep_id, title, long_title } = EP_INFO;
	log.info(`解析番剧信息 aid:${aid} cid:${cid} ep_id:${ep_id}`);
	const videoTitle = GenerateVideoTitle(title, long_title);

	// 解析下音频信息
	const audioInfo: {
		/** 链接 */
		url: string;
		/** 画质代码 */
		id: number;
		/** 画质显示文字 */
		text: string;
		/** 文件大小 */
		size: number;
	}[] = [];

	// 解析清晰度信息
	let qualityInfo: VideoQualityInfo[] = [];
	/** 是否是flv */
	let isFlv = false;
	let flvInfo: BilibiliBangumiArtPlayerOption["flvInfo"] = [];
	let flvTotalDuration = 0;
	let flvTotalSize = 0;
	if (PopsPanel.getValue("bili-bangumi-unlockAreaLimit")) {
		// 启用解除区域限制

		// 请求番剧信息
		const bangumiInfo = await BilibiliBangumiApi.getPlayUrl({
			avid: aid,
			cid,
			ep_id,
		});
		if (!bangumiInfo) {
			// 没获取到
			return;
		}

		// 遍历视频
		let userChooseVideoCodingCode =
			BangumiArtPlayerVideoConfig.getUserChooseVideoCodingCode();

		if (bangumiInfo.type.toLowerCase() === "flv") {
			isFlv = true;
			// flv视频，使用flv.js
			// 这里的应该是剧场版的视频，多p
			bangumiInfo.durl.forEach((durlInfo) => {
				let videoUrl = BilibiliCDNProxy.findBetterCDN(
					durlInfo.url,
					durlInfo.backup_url
				);
				// 处理视频host替换
				videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
				flvTotalDuration += durlInfo.length;
				flvTotalSize += durlInfo.size;
				flvInfo.push({
					order: durlInfo.order,
					url: videoUrl,
					duration: durlInfo.length,
					length: durlInfo.length,
					size: durlInfo.size,
				});
			});
		} else if (
			bangumiInfo.type.toLowerCase() === "dash" ||
			bangumiInfo.type.toLowerCase() === "mp4"
		) {
			// dash类型，分video和audio
			// 遍历audio
			bangumiInfo.dash.audio.forEach((item) => {
				let audioUrl = BilibiliCDNProxy.findBetterCDN(
					item.baseUrl,
					item.base_url,
					item.baseUrl,
					item.backup_url
				);
				if (PopsPanel.getValue("bili-bangumi-uposServerSelect-applyAudio")) {
					// 给音频也替换
					audioUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(audioUrl);
				}
				audioInfo.push({
					url: audioUrl,
					id: item.id,
					size: item.size,
					text: VideoSoundQualityCode[item.id] || "",
				});
			});

			// 按音频质量排序（降序）
			audioInfo.sort((leftItem, rightItem) => {
				return rightItem.id - leftItem.id;
			});
			log.info([`ArtPlayer: 获取的音频信息`, audioInfo]);

			// 筛选视频
			qualityInfo = [
				...filterDashVideoQualityInfo(
					{
						accept_quality: bangumiInfo.accept_quality,
						support_formats: bangumiInfo.support_formats,
						video: bangumiInfo.dash.video,
					},
					{
						codecid: userChooseVideoCodingCode,
					}
				),
			];

			if (qualityInfo.length === 0) {
				// 可能是请求到的视频的编码格式没有一个符合自定义的视频编码的格式
				if (bangumiInfo.dash.video.length !== 0) {
					log.warn(
						`当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
					);
					qualityInfo = [];
					qualityInfo = [
						...filterDashVideoQualityInfo(
							{
								accept_quality: bangumiInfo.accept_quality,
								support_formats: bangumiInfo.support_formats,
								video: bangumiInfo.dash.video,
							},
							{}
						),
					];
				}
			}

			// 过滤掉重复画质
			qualityInfo = filterArrayWithMaxSize(qualityInfo);
			// 按画质排序（降序）
			qualityInfo.sort((leftItem, rightItem) => {
				return rightItem.quality - leftItem.quality;
			});
			log.info([`ArtPlayer: 获取的视频画质信息`, qualityInfo]);
		} else {
			BilibiliLogUtils.failToast(
				"暂未适配的视频格式：" + bangumiInfo["format"]
			);
			return;
		}
	} else {
		// 未启用解除区域限制，数据从html5获取
		// 请求番剧信息
		const bangumiInfo = await BilibiliBangumiApi.getPlayUrlHTML5({
			avid: aid,
			cid,
			ep_id,
		});
		if (!bangumiInfo) {
			// 未获取到信息
			return;
		}
		if (bangumiInfo.durls.length === 0) {
			// 空的？把有的durl放进durls中
			if (bangumiInfo.durl != null) {
				bangumiInfo.durls.push({
					quality: bangumiInfo.quality,
					durl: bangumiInfo.durl,
				});
			}
		}
		bangumiInfo.durls.forEach((durlInfo) => {
			if (!bangumiInfo.accept_quality.includes(durlInfo.quality)) {
				// 必须是允许的画质
				return;
			}
			if (!durlInfo.durl.length) {
				// durl内必须有数据
				// 一般有且一个
				return;
			}
			let currentDurl = durlInfo["durl"][0];
			//  找到画质代码对应的文字名称
			let findSupportFormat = bangumiInfo.support_formats.find(
				(formatsItem) => formatsItem.quality === durlInfo.quality
			);
			// 视频url
			let videoUrl = BilibiliCDNProxy.findBetterCDN(
				currentDurl.url,
				currentDurl.backup_url
			);
			// 处理视频host替换
			// videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
			// 视频画质名称
			let qualityName = findSupportFormat?.new_description!;
			qualityInfo.push({
				name: qualityName,
				url: videoUrl,
				type: "audio/mp4",
				id: durlInfo.quality,
				size: currentDurl.size,
				quality: durlInfo.quality,
				vip: Boolean(findSupportFormat?.need_vip),
			});
		});
	}

	/**
	 * 当前的画质信息列表
	 */
	const currentVideoQuality: quality[] = qualityInfo.map((item, index) => {
		return {
			default: index === 0,
			html: item.name,
			url: item.url,
		};
	});
	const artPlayerOption: BilibiliBangumiArtPlayerOption = {
		// @ts-ignore
		container: null,
		epList: EP_LIST,
		cid: cid,
		aid: aid,
		bvid: bvid,
		ep_id: ep_id,
		videoTitle: videoTitle,
		danmukuUrl: `https://api.bilibili.com/x/v1/dm/list.so?oid=${cid}`,
		quality: currentVideoQuality,
		isFlv: isFlv,
		flvInfo: flvInfo,
		flvTotalDuration: flvTotalDuration,
		flvTotalSize: flvTotalSize,
	};
	// 设置默认播放画质
	// 这里应该是选择用户选择的画质
	// 如果不存在
	// 优先使用最高的画质
	artPlayerOption.url = qualityInfo?.[0]?.url;
	if (audioInfo.length) {
		// 如果存在音频，则设置m4s的音频
		artPlayerOption.audioList = audioInfo.map((item, index) => {
			return {
				isDefault: index === 0,
				url: item.url,
				soundQualityCode: item.id,
				soundQualityCodeText: item.text,
			};
		});
	}

	return artPlayerOption;
};
export const BlibiliBangumiPlayer = {
	/**
	 * 更新播放器的信息
	 */
	updateArtPlayerVideoInfo(ep_info?: EP_INFO, ep_list?: EP_LIST) {
		VueUtils.waitVuePropToSet(".player-wrapper", {
			msg: "等待player-wrapper加载完成",
			check(vueInstance) {
				return (
					typeof vueInstance?.EP_INFO?.aid === "number" &&
					typeof vueInstance?.EP_INFO?.cid === "number" &&
					typeof vueInstance?.EP_INFO?.ep_id === "number"
				);
			},
			async set(vueInstance) {
				const $playerWrapper =
					document.querySelector<HTMLDivElement>(".player-wrapper")!;
				if (ep_info == null) {
					ep_info = vueInstance.EP_INFO as EP_INFO;
				}
				if (ep_list == null) {
					ep_list = vueInstance.EP_LIST as EP_LIST;
				}
				// 生成配置信息
				const artPlayerOption = await GenerateArtPlayerOption(ep_info, ep_list);
				if (artPlayerOption == null) {
					// 生成失败
					return;
				}
				let $artPlayer = document.querySelector<HTMLDivElement>("#artplayer");
				// 如果页面不存在的话，添加到页面中
				if (!$artPlayer) {
					// 接下来就是添加播放器到页面中
					const $artPlayerContainer = DOMUtils.createElement("div", {
						className: "artplayer-container",
						innerHTML: /*html*/ `
						<div id="artplayer"></div>
						`,
					});
					// 生成的art播放器
					$artPlayer =
						$artPlayerContainer.querySelector<HTMLDivElement>("#artplayer")!;
					DOMUtils.after($playerWrapper, $artPlayerContainer);
				}
				// 设置container参数
				artPlayerOption!.container = $artPlayer;
				// 初始化artplayer播放器
				if (BilibiliBangumi.$data.art == null) {
					let art = await BilibiliBangumiArtPlayer.init(artPlayerOption);
					if (art) {
						BilibiliBangumi.$data.art = art;
					} else {
						return;
					}
					if (import.meta.hot) {
						Reflect.set(unsafeWindow, "art", BilibiliBangumi.$data.art);
					}
					BilibiliBangumi.$data.art.on("restart", (url) => {
						// 切换播放地址
						// 看看切换的播放地址是不是当前的画质列表内的地址
						// 如果是,记住选择的画质
						let findQuality = artPlayerOption.quality.find((item) => {
							return item.url === url;
						});
						if (findQuality) {
							log.info(["切换画质：", findQuality]);
						}
					});
					// 强制初始化音量为1
					BilibiliBangumi.$data.art.volume = 1;
				} else {
					// 更新artplayer播放信息
					BilibiliBangumiArtPlayer.update(
						BilibiliBangumi.$data.art,
						artPlayerOption
					);
				}
			},
		});
	},
};
