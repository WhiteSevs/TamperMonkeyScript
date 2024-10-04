import { addStyle, DOMUtils, log, utils } from "@/env";
import artPlayerCSS from "./artplayer/index.css?raw";
import artPlayerCommonCSS from "@/player/player.css?raw";
import { VueUtils } from "@/utils/VueUtils";
import {
	BilibiliVideoApi,
	type TypeBilibiliVideoInfo_m4s,
	type TypeBilibiliVideoInfo_mp4,
} from "@/api/BilibiliVideoApi";
import { PopsPanel } from "@/setting/setting";
import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { VideoArtPlayerVideoConfig } from "./artplayer/ArtPlayerVideoConfig";
import { VideoSoundQualityCode } from "@/video-info/AudioDict";
import {
	BilibiliVideoArtPlayer,
	type BilibiliVideoArtPlayerOption,
} from "./artplayer/ArtPlayer";
import type Artplayer from "artplayer";
import { unsafeWindow } from "ViteGM";
import type { VIDEO_EP_LIST } from "./TypeVideo";
import type { ArtPlayerPluginQualityOption } from "@/player/plugins/artplayer-plugin-quality";

type VideoInfo = {
	/** 视频的bvid */
	aid: number;
	/** 视频bvid（必须）其实可以aid，但是好像没有该数据 */
	bvid: string;
	/** 视频cid（必须） */
	cid: number;
	/** 视频封面图 */
	pic: string;
	/** 视频标题 */
	title: string;
	/** 分p信息 */
	epList?: VIDEO_EP_LIST[];
};

type VideoQualityInfo = {
	/** 画质文字 */
	name: string;
	/** 链接 */
	url: string;
	/** 文件类型 */
	type: string;
	/** 画质代码 */
	id: number;
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
		accept_quality: TypeBilibiliVideoInfo_m4s["accept_quality"];
		support_formats: TypeBilibiliVideoInfo_m4s["support_formats"];
		video: TypeBilibiliVideoInfo_m4s["dash"]["video"];
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
		videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
		// 视频画质名称
		let qualityName = findSupportFormat?.new_description!;
		result.push({
			name: qualityName,
			url: videoUrl,
			type: dashVideoInfo.mimeType,
			id: dashVideoInfo.id,
			quality: dashVideoInfo.id,
			vip: false,
		});
	});

	return result;
}
/**
 * 生成artPlayer配置信息
 */
const GenerateArtPlayerOption = async (option: VideoInfo) => {
	// m4s的音频信息
	const audioInfo: {
		/** 链接 */
		url: string;
		/** 画质代码 */
		id: number;
		/** 画质显示文字 */
		text: string;
	}[] = [];
	// 解析清晰度信息
	let qualityInfo: VideoQualityInfo[] = [];

	if (PopsPanel.getValue("bili-video-playType", "mp4") === "mp4") {
		// mp4类型
		const videoPlayInfo = (await BilibiliVideoApi.playUrl({
			bvid: option.bvid,
			cid: option.cid,
			fnval: 1,
			fnver: 0,
			fourk: 1,
			high_quality: 1,
			qn: 127,
			setPlatformHTML5: true,
		})) as TypeBilibiliVideoInfo_mp4;
		log.info(videoPlayInfo);

		if (!videoPlayInfo) {
			// 未获取到信息
			return;
		}
		// if (
		// 	Array.isArray(videoPlayInfo?.durls) &&
		// 	videoPlayInfo.durls.length === 0
		// ) {
		// 	// 空的？把有的durl放进durls中
		// 	if (videoPlayInfo.durl != null) {
		// 		videoPlayInfo.durls.push({
		// 			quality: videoPlayInfo.quality,
		// 			durl: videoPlayInfo.durl,
		// 		});
		// 	}
		// }
		// 貌似一般只有一个画质的视频结果，直接取最大的
		let currentDurl = videoPlayInfo["durl"][0];
		//  找到画质代码对应的文字名称
		let findSupportFormat = videoPlayInfo.support_formats.find(
			(formatsItem) => formatsItem.quality === videoPlayInfo.quality
		);
		// 视频url
		let videoUrl = BilibiliCDNProxy.findBetterCDN(
			currentDurl.url,
			currentDurl.url || currentDurl.backup_url?.[0]!
		);
		// 处理视频host替换
		// videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
		// 视频画质名称
		let qualityName = findSupportFormat?.new_description!;
		qualityInfo.push({
			name: qualityName,
			url: videoUrl,
			type: "audio/mp4",
			id: videoPlayInfo.quality,
			quality: videoPlayInfo.quality,
			vip: false,
		});
	} else {
		// m4s类型
		const videoPlayInfo = (await BilibiliVideoApi.playUrl({
			bvid: option.bvid,
			cid: option.cid,
			fnval: 16 | 1024 | 2048,
			fnver: 0,
			fourk: 1,
			high_quality: 1,
			qn: 127,
			setPlatformHTML5: false,
		})) as TypeBilibiliVideoInfo_m4s;
		log.info(videoPlayInfo);

		if (!videoPlayInfo) {
			// 没获取到
			return;
		}

		// 获取用户选择的视频编码
		let userChooseVideoCodingCode =
			VideoArtPlayerVideoConfig.getUserChooseVideoCodingCode();
		// flv类型已经弃用，现在只有mp4和m4s
		// dash类型，分video和audio
		// 遍历audio
		videoPlayInfo.dash.audio.forEach((item) => {
			let audioUrl = BilibiliCDNProxy.findBetterCDN(
				item.baseUrl,
				item.base_url,
				item.baseUrl,
				item.backup_url
			);
			if (PopsPanel.getValue("bili-video-uposServerSelect-applyAudio")) {
				// 给音频也替换
				audioUrl = BilibiliCDNProxy.replaceVideoCDN(audioUrl);
			}
			audioInfo.push({
				url: audioUrl,
				id: item.id,
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
					accept_quality: videoPlayInfo.accept_quality,
					support_formats: videoPlayInfo.support_formats,
					video: videoPlayInfo.dash.video,
				},
				{
					codecid: userChooseVideoCodingCode,
				}
			),
		];

		if (qualityInfo.length === 0) {
			// 可能是请求到的视频的编码格式没有一个符合自定义的视频编码的格式
			if (videoPlayInfo.dash.video.length !== 0) {
				log.warn(
					`当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
				);
				qualityInfo = [];
				qualityInfo = [
					...filterDashVideoQualityInfo(
						{
							accept_quality: videoPlayInfo.accept_quality,
							support_formats: videoPlayInfo.support_formats,
							video: videoPlayInfo.dash.video,
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
	}

	/**
	 * 当前的画质信息列表
	 *
	 * 优先最高画质
	 */
	const currentVideoQuality: ArtPlayerPluginQualityOption["qualityList"] =
		qualityInfo.map((item, index) => {
			return {
				quality: item.quality,
				html: item.name,
				url: item.url,
			};
		});

	const artPlayerOption: BilibiliVideoArtPlayerOption = {
		// @ts-ignore
		container: null,
		epList: option.epList,
		audioUrl: null,
		url: "",
		poster: option.pic,
		aid: option.aid,
		bvid: option.bvid,
		cid: option.cid,
		videoTitle: option.title,
		danmukuUrl: `https://api.bilibili.com/x/v1/dm/list.so?oid=${option.cid}`,
		quality: currentVideoQuality,
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

export const BilibiliVideoPlayer = {
	$data: {
		art: null as any as Artplayer,
	},
	init() {
		PopsPanel.execMenu("bili-video-enableArtPlayer", () => {
			this.coverVideoPlayer();
		});
	},
	/**
	 * 覆盖播放器
	 */
	coverVideoPlayer() {
		if (document.querySelector("#artplayer")) {
			log.warn("已存在播放器，更新播放信息");
		} else {
			addStyle(/*css*/ `
            /* 隐藏原本的播放器 */
			#app .video .m-video-player .player-container{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}

			`);
			let controlsPadding = PopsPanel.getValue(
				"bili-video-artplayer-controlsPadding-left-right",
				0
			);
			if (controlsPadding != 0) {
				addStyle(/*css*/ `
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					.art-video-player .art-bottom{
						padding-left: ${controlsPadding}px !important;
						padding-right: ${controlsPadding}px !important;
					}
				}
				`);
			}
		}
		this.updateArtPlayerVideoInfo();
	},
	/**
	 * 更新播放信息
	 * @param videoInfo
	 * @param isEpChoose 是否是从选集内调用的
	 */
	updateArtPlayerVideoInfo(videoInfo?: VideoInfo, isEpChoose?: boolean) {
		let that = this;
		VueUtils.waitVuePropToSet("#app .video .m-video-player", {
			msg: "等待m-video-player加载完成",
			check(vueInstance) {
				if (!isEpChoose && BilibiliVideoArtPlayer.$data.currentOption != null) {
					// 暂停视频 等待页面参数更新完毕
					BilibiliVideoArtPlayer.$data.art.pause();
					return (
						typeof vueInstance?.info?.aid === "number" &&
						BilibiliVideoArtPlayer.$data.currentOption.aid !==
							vueInstance.info.aid &&
						typeof vueInstance?.info?.bvid === "string" &&
						typeof vueInstance?.info?.cid === "number"
					);
				} else {
					return (
						typeof vueInstance?.info?.aid === "number" &&
						typeof vueInstance?.info?.bvid === "string" &&
						typeof vueInstance?.info?.cid === "number"
					);
				}
			},
			async set(vueInstance) {
				const $mVideoPlayer = document.querySelector<HTMLDivElement>(
					"#app .video .m-video-player"
				)!;
				let { aid, bvid, cid, pic, title } = vueInstance.info;

				let epInfoList = [];
				// 获取页面中的分集信息
				const $seasonNew = document.querySelector<HTMLElement>(
					".m-video-season-new"
				);
				if ($seasonNew && VueUtils.getVue($seasonNew)) {
					let seasonVueIns = VueUtils.getVue($seasonNew)!;
					let videoList = seasonVueIns?.videoList;
					if (Array.isArray(videoList)) {
						epInfoList = videoList;
					}
				}
				if (videoInfo == null) {
					// 如果是空值，那应该是页面切换的
					// 如果有值，那应该是切换分集的，先预留这个接口
					videoInfo = {
						aid,
						bvid,
						cid,
						pic,
						title,
						epList: epInfoList,
					};
				}
				log.info(`视频播放信息 => aid：${aid} bvid：${bvid} cid：${cid}`);
				// 生成配置信息
				const artPlayerOption = await GenerateArtPlayerOption(videoInfo);
				if (artPlayerOption == null) {
					// 生成失败
					return;
				}

				// 创建播放器元素
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
					DOMUtils.append($mVideoPlayer, $artPlayerContainer);
				}
				// 设置container参数
				artPlayerOption!.container = $artPlayer;

				// 初始化artplayer播放器
				if (BilibiliVideoPlayer.$data.art == null) {
					let art = await BilibiliVideoArtPlayer.init(artPlayerOption);
					if (art) {
						BilibiliVideoPlayer.$data.art = art;
					} else {
						return;
					}
					if (import.meta.hot) {
						Reflect.set(unsafeWindow, "art", BilibiliVideoPlayer.$data.art);
					}
					// 强制初始化音量为1
					BilibiliVideoPlayer.$data.art.volume = 1;
					that.$data.art.once("ready", () => {
						PopsPanel.execMenu(
							"bili-video-playerAutoPlayVideoFullScreen",
							async () => {
								log.info(`自动进入全屏`);
								that.$data.art.fullscreen = true;
								that.$data.art.once("fullscreenError", () => {
									log.warn(
										"未成功进入全屏，需要用户交互操作，使用网页全屏代替"
									);
									that.$data.art.fullscreenWeb = true;
								});
							}
						);
					});
				} else {
					// 更新artplayer播放信息
					await BilibiliVideoArtPlayer.update(
						BilibiliVideoPlayer.$data.art,
						artPlayerOption
					);
				}

				// 如果开启了滚动固钉tab，当滚动到底部推荐视频进行切换视频时，当前视频paddingTop是0，会导致视频不能归位
				// 需要重置paddingTop
				$mVideoPlayer.style.paddingTop = "";
			},
		});
	},
};
