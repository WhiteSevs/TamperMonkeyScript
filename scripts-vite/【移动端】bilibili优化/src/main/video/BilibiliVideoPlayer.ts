import { $, addStyle, DOMUtils, log, utils } from "@/env";
import artPlayerCSS from "./artplayer/index.css?raw";
import artPlayerCommonCSS from "@/player/player.css?raw";
import { VueUtils } from "@components/utils/VueUtils";
import { BilibiliVideoApi } from "@/api/BilibiliVideoApi";
import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { VideoSoundQualityCode } from "@/video-info/AudioDict";
import { BilibiliVideoArtPlayer, type BilibiliVideoArtPlayerOption } from "./artplayer/ArtPlayer";
import type Artplayer from "artplayer";
import { unsafeWindow } from "ViteGM";
import type { VIDEO_EP_LIST, VIDEO_PART } from "./TypeVideo";
import type { ArtPlayerPluginQualityOption } from "@/player/plugins/artplayer-plugin-quality";
import { BilibiliData } from "@/data/BlibiliData";
import { Panel } from "@components/setting/panel";

export type VideoInfo = {
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

export type VideoQualityInfo = {
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
	/** 帧率信息 */
	frameRate: string;
	/** 编码id */
	codecid: number;
	/** 编码信息 */
	codecs: string;
	/** 码率 */
	bandwidth: number;
};

/**
 * 从请求的信息中过滤出需要的视频信息
 */
export function handleDashVideoQualityInfo(dashInfo: {
	accept_quality: TypeBilibiliVideoInfo_m4s["accept_quality"];
	support_formats: TypeBilibiliVideoInfo_m4s["support_formats"];
	video: TypeBilibiliVideoInfo_m4s["dash"]["video"];
}) {
	let result: VideoQualityInfo[] = [];
	dashInfo.video.forEach((dashVideoInfo) => {
		if (!dashInfo.accept_quality.includes(dashVideoInfo.id)) {
			// 必须是允许的画质
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
			type: dashVideoInfo.mimeType || dashVideoInfo.mime_type,
			id: dashVideoInfo.id,
			quality: dashVideoInfo.id,
			vip: false,
			codecid: dashVideoInfo.codecid,
			codecs: dashVideoInfo.codecs,
			frameRate: dashVideoInfo.frameRate || dashVideoInfo.frame_rate,
			bandwidth: dashVideoInfo.bandwidth,
		});
	});

	return result;
}

/**
 * 生成artPlayer配置信息
 */
export const GenerateArtPlayerOption = async (option: VideoInfo) => {
	// m4s的音频信息
	const audioInfo: {
		/** 链接 */
		url: string;
		/** 画质代码 */
		id: number;
		/** 画质显示文字 */
		text: string;
		/** 编码格式描述 */
		codecs: TypeBilibiliVideoInfo_m4s["dash"]["audio"]["0"]["codecs"];
		/** 类型，一般是audio/mp4 */
		mimeType: TypeBilibiliVideoInfo_m4s["dash"]["audio"]["0"]["mimeType"];
		/** 带宽 */
		bandwidth: TypeBilibiliVideoInfo_m4s["dash"]["audio"]["0"]["bandwidth"];
		/** 文件大小 */
		size: number;
	}[] = [];
	// 解析清晰度信息
	let qualityInfo: VideoQualityInfo[] = [];

	if (Panel.getValue("bili-video-playType", "mp4") === "mp4") {
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
		log.info(["视频播放地址信息：", videoPlayInfo]);

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
			codecid: videoPlayInfo.video_codecid,
			quality: videoPlayInfo.quality,
			vip: false,
			codecs: "",
			frameRate: "",
			bandwidth: 0,
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
		log.info(["视频播放地址信息：", videoPlayInfo]);

		if (!videoPlayInfo) {
			// 没获取到
			return;
		}
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
			// 给音频也替换
			audioUrl = BilibiliCDNProxy.replaceVideoCDN(audioUrl, true);
			audioInfo.push({
				url: audioUrl,
				id: item.id,
				text: VideoSoundQualityCode[item.id] || "",
				codecs: item.codecs,
				mimeType: item.mimeType,
				bandwidth: item.bandwidth,
				size: 0,
			});
		});

		// 按音频质量排序（降序）
		audioInfo.sort((leftItem, rightItem) => {
			return rightItem.id - leftItem.id;
		});
		log.info(`ArtPlayer: 获取的音频信息`, audioInfo);

		// 处理视频
		qualityInfo = [
			...handleDashVideoQualityInfo({
				accept_quality: videoPlayInfo.accept_quality,
				support_formats: videoPlayInfo.support_formats,
				video: videoPlayInfo.dash.video,
			}),
		];

		log.info(`ArtPlayer: 获取的视频画质信息`, qualityInfo);
	}

	/**
	 * 当前的画质信息列表
	 *
	 * 优先最高画质
	 */
	const currentVideoQuality: ArtPlayerPluginQualityOption["qualityList"] = qualityInfo.map((item, index) => {
		return {
			quality: item.quality,
			html: item.name,
			url: item.url,
			codecid: item.codecid,
			codecs: item.codecs,
			frameRate: item.frameRate,
			mimeType: item.type,
			bandwidth: item.bandwidth,
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
				codecs: item.codecs,
				mimeType: item.mimeType,
				bandwidth: item.bandwidth,
				size: item.size,
			};
		});
	}

	return artPlayerOption;
};

export const BilibiliVideoPlayer = {
	$data: {
		art: null as any as (typeof Artplayer)["prototype"],
	},
	init() {
		Panel.execMenu("bili-video-enableArtPlayer", () => {
			this.coverVideoPlayer();
		});
	},
	/**
	 * 覆盖播放器
	 */
	coverVideoPlayer() {
		if ($("#artplayer")) {
			log.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");
		} else {
			log.info(`覆盖播放器`);
			addStyle(/*css*/ `
            /* 隐藏原本的播放器 */
			${BilibiliData.className.video} .m-video-player .player-container,
			${BilibiliData.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}

			`);
			let controlsPadding = Panel.getValue("bili-video-artplayer-controlsPadding-left-right", 0);
			if (controlsPadding != 0) {
				addStyle(/*css*/ `
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${controlsPadding}px !important;
						padding-right: ${controlsPadding}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${controlsPadding}px;
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
		let queryMVideoPlayer = () => {
			return (
				$<HTMLElement>(BilibiliData.className.video + " .m-video-player") ||
				$<HTMLElement>(BilibiliData.className.mVideo + " .m-video-player")
			);
		};
		VueUtils.waitVuePropToSet(queryMVideoPlayer, {
			msg: "等待m-video-player加载完成",
			check(vueInstance) {
				if (!isEpChoose && BilibiliVideoArtPlayer.$data.currentOption != null) {
					// 暂停视频 等待页面参数更新完毕
					BilibiliVideoArtPlayer.$data.art.pause();
					return (
						typeof vueInstance?.info?.aid === "number" &&
						BilibiliVideoArtPlayer.$data.currentOption.aid !== vueInstance.info.aid &&
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
				const $mVideoPlayer = queryMVideoPlayer()!;
				// info中获取似乎有滞后性，对分p的视频不起作用
				let { aid, bvid, cid, pic, title } = vueInstance;
				aid = aid || vueInstance.info.aid;
				bvid = bvid || vueInstance.info.bvid;
				cid = cid || vueInstance.info.cid;
				pic = pic || vueInstance.info.pic;
				title = title || vueInstance.info.title;

				/** 分集信息 */
				let epInfoList: VIDEO_EP_LIST[] = [];
				// 获取页面中的分集信息
				const $seasonNew = $<HTMLElement>(".m-video-season-new");
				// 获取页面中的分p信息
				const $partNew = $<HTMLElement>(".m-video-part-new");
				if ($seasonNew && VueUtils.getVue($seasonNew)) {
					// 分集 > 分p信息
					let seasonVueIns = VueUtils.getVue($seasonNew)!;
					let videoList = seasonVueIns?.videoList;
					if (Array.isArray(videoList)) {
						epInfoList = videoList;
					}
				} else if ($partNew && VueUtils.getVue($partNew)) {
					// 分p信息
					let partVueIns = VueUtils.getVue($partNew)!;
					let info = partVueIns?.info;
					let currentPage = partVueIns?.p;
					let pages = partVueIns?.pages || partVueIns?.info?.pages;
					// 将分p数据和info合并为EP_LIST数据
					if (Array.isArray(pages)) {
						epInfoList.push({
							season_id: 0,
							section_id: 0,
							id: 0,
							aid: aid || info.aid,
							bvid: bvid || info.bvid,
							cid: cid || info.cid,
							title: title || info.title,
							attribute: 0,
							arc: {
								aid: aid || info.aid,
								videos: info?.videos,
								type_id: 0,
								type_name: "",
								copyright: info?.copyright,
								pic: info?.pic,
								title: info?.title,
								pubdate: info?.pubdate,
								ctime: info?.ctime,
								desc: info?.desc,
								state: info?.state,
								duration: info?.duration,
								rights: info?.rights,
								author: info?.owner,
								stat: info?.stat,
								dynamic: info?.dynamic,
								dimension: info?.dimension,
								desc_v2: info?.desc_v2,
								is_chargeable_season: info?.is_chargeable_season,
								is_blooper: info?.is_blooper,
								enable_vt: info?.enable_vt,
								vt_display: info?.vt_display,
							},
							page: info?.pages?.[currentPage],
							pages: info?.pages,
						});
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
				let $artPlayer = $<HTMLDivElement>("#artplayer");
				// 如果页面不存在的话，添加到页面中
				if (!$artPlayer) {
					// 接下来就是添加播放器到页面中
					const $artContainer = DOMUtils.createElement("div", {
						className: "artplayer-container",
						innerHTML: /*html*/ `
								<div id="artplayer"></div>
							`,
					});
					// 生成的art播放器
					$artPlayer = $artContainer.querySelector<HTMLDivElement>("#artplayer")!;
					DOMUtils.append($mVideoPlayer, $artContainer);
				}

				// 设置container参数
				artPlayerOption!.container = $artPlayer;

				// 初始化artplayer播放器
				if (that.$data.art == null) {
					let art = await BilibiliVideoArtPlayer.init(artPlayerOption);
					if (art) {
						that.$data.art = art;
					} else {
						return;
					}
					// 强制初始化音量为1
					that.$data.art.volume = 1;
					that.$data.art.once("ready", () => {
						Panel.execMenu("bili-video-playerAutoPlayVideoFullScreen", async () => {
							log.info(`自动进入全屏`);
							that.$data.art.fullscreen = true;
							that.$data.art.once("fullscreenError", () => {
								log.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替");
								that.$data.art.fullscreenWeb = true;
							});
						});
					});
				} else {
					// 检测页面中的artplayer是否还存在
					const $artContainer = $<HTMLElement>(".artplayer-container");
					if ($artContainer && !$artContainer.contains(that.$data.art.template.$container)) {
						// 可能是切换网页时移除了该dom
						log.warn("artplayer-container的artplayer被移除了，重新添加元素");
						DOMUtils.empty($artContainer);
						DOMUtils.append($artContainer, that.$data.art.template.$container);
					}
					// 更新artplayer播放信息
					await BilibiliVideoArtPlayer.update(that.$data.art, artPlayerOption);
				}

				// 如果开启了滚动固钉tab，当滚动到底部推荐视频进行切换视频时，当前视频paddingTop是0，会导致视频不能归位
				// 需要重置paddingTop
				$mVideoPlayer.style.paddingTop = "";
			},
		});
	},
};

if (import.meta.env.DEV) {
	Reflect.set(unsafeWindow, "BilibiliVideoPlayer", BilibiliVideoPlayer);
}
