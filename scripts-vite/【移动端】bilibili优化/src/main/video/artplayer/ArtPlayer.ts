import { ArtPlayerDanmakuOptionHelper } from "@/player/plugins/artplayer-plugin-DanmakuHelper";
import Artplayer from "artplayer";
import type Option from "artplayer/types/option";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import { log, utils } from "@/env";
import {
	ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY,
	artplayerPluginM4SAudioSupport,
	type ArtPlayerPluginM4SAudioSupportOption,
	type ArtPlayerPluginM4SAudioSupportResult,
} from "@/player/plugins/artplayer-plugin-bilibiliM4SAudioSupport";
import {
	ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY,
	artplayerPluginTopToolBar,
	type ArtPlayerPluginTopToolBarOption,
	type ArtPlayerPluginTopToolBarResult,
} from "@/player/plugins/artplayer-plugin-TopToolBar";
import {
	ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY,
	artplayerPluginBilibiliCCSubTitle,
	type ArtPlayerPluginBilibiliSubTitleOption,
	type ArtPlayerPluginBilibiliSubTitleResult,
} from "@/player/plugins/artplayer-plugin-bilibiliCCSubtitle";
import type { VIDEO_EP_LIST } from "../TypeVideo";
import {
	ArtPlayer_PLUGIN_EP_CHOOSE_KEY,
	artplayerPluginEpChoose,
	GenerateArtPlayerEpTitle,
	type ArtPlayerPluginEpChooseOption,
	type ArtPlayerPluginEpChooseResult,
} from "@/player/plugins/artplayer-plugin-epChoose";
import { BilibiliVideoPlayer } from "../BilibiliVideoPlayer";
import { ArtPlayerCommonOption } from "@/player/ArtPlayerCommonOption";
import {
	ArtPlayer_PLUGIN_QUALITY_KEY,
	artplayPluginQuality,
	type ArtPlayerPluginQualityOption,
	type ArtPlayerPluginQualityResult,
} from "@/player/plugins/artplayer-plugin-quality";
import { artplayerPluginToast } from "@/player/plugins/artplayer-plugin-toast";
import { artplayerPluginVideoStatistics } from "@/player/plugins/artplayer-plugin-videoStatistics";
import { ArtPlayerDanmakuCommonOption } from "@/player/ArtPlayerDanmakuCommonOption";
import { Panel } from "@components/setting/panel";

export interface BilibiliVideoArtPlayerOption {
	/** 容器 */
	container: HTMLDivElement | string;
	/** 选集信息 */
	epList?: VIDEO_EP_LIST[];
	/** 视频链接 */
	url?: string | (() => IPromise<string>);
	poster?: string;
	/** 音频链接 */
	audioList?: ArtPlayerPluginM4SAudioSupportOption["audioList"];
	/** 画质信息 */
	quality: ArtPlayerPluginQualityOption["qualityList"];
	/** 弹幕xml地址 */
	danmukuUrl: string;
	/** 视频的aid */
	aid: string | number;
	/** 视频的bvid */
	bvid: string;
	/** 视频的cid */
	cid: string | number;
	/** 视频的标题 */
	videoTitle?: string;
}

/**
 * 生成需要的选集信息
 * @param option
 */
const generateVideoSelectSetting = (
	option: BilibiliVideoArtPlayerOption
): ArtPlayerPluginEpChooseOption["EP_LIST"] => {
	// 如果选集只有1集
	// 那么从分p中进行选取
	let epList = option.epList || [];
	if (epList.length === 1) {
		let parentEp = epList[0];
		return parentEp.pages.map((pageInfo) => {
			return {
				isDefault: pageInfo.cid === option.cid,
				title: pageInfo.part,
				aid: option.aid,
				bvid: option.bvid,
				cid: pageInfo.cid,
				onSelect(selectOption, index) {
					// 先更新为当前的cid
					parentEp.cid = pageInfo.cid;
					BilibiliVideoPlayer.updateArtPlayerVideoInfo(
						{
							aid: option.aid as number,
							bvid: option.bvid,
							cid: pageInfo.cid,
							pic: pageInfo.first_frame || "",
							title: pageInfo.part,
							epList: option.epList || [],
						},
						true
					);
				},
			};
		});
	} else {
		return epList.map((epInfo) => {
			return {
				isDefault: epInfo.aid === option.aid && epInfo.cid === option.cid,
				title: GenerateArtPlayerEpTitle(epInfo.title),
				aid: epInfo.aid,
				bvid: epInfo.bvid,
				cid: epInfo.cid,
				onSelect(selectItem, index) {
					BilibiliVideoPlayer.updateArtPlayerVideoInfo(
						{
							aid: epInfo.aid,
							bvid: epInfo.bvid,
							cid: epInfo.cid,
							pic: epInfo.arc.pic,
							title: epInfo.title,
							epList: option.epList || [],
						},
						true
					);
				},
			};
		});
	}
};

export const BilibiliVideoArtPlayer = {
	$data: {
		art: null as any as Artplayer,
		/** 当前的配置项 */
		currentOption: null as any as BilibiliVideoArtPlayerOption | null,
	},
	/**
	 * 重置环境变量
	 */
	resetEnv(isInit: boolean) {
		if (isInit) {
			Reflect.set(this.$data, "art", null);
		}
		Reflect.set(this.$data, "currentOption", null);
	},
	/**
	 * 初始化播放器
	 * @param option
	 */
	async init(option: BilibiliVideoArtPlayerOption) {
		this.resetEnv(true);
		this.$data.currentOption = option;
		// 本地存储的弹幕设置
		const localArtDanmakuOption_KEY = "artplayer-video-danmaku-option";
		const artPlayerDanmakuOptionHelper = new ArtPlayerDanmakuOptionHelper(
			localArtDanmakuOption_KEY
		);
		/**
		 * 弹幕本地配置
		 */
		const localArtDanmakuOption =
			artPlayerDanmakuOptionHelper.getLocalArtDanmakuOption();

		const artOption: Option = {
			...ArtPlayerCommonOption(),
			container: option.container,
			/** 视频封面 */
			poster: option.poster,
			/** 自定义设置列表 */
			settings: [],
			plugins: [
				artplayerPluginToast(),
				artplayPluginQuality({
					from: "video",
					qualityList: option.quality,
				}),
			],
		};
		artOption.type = "mp4";

		if (Panel.getValue("artplayer-plugin-video-danmaku-enable")) {
			artOption.plugins!.push(
				artplayerPluginDanmuku({
					...ArtPlayerDanmakuCommonOption(),
					danmuku: option.danmukuUrl,
					// 以下为非必填
					// 弹幕持续时间，范围在[1 ~ 10]
					speed: localArtDanmakuOption.speed,
					// 弹幕上下边距，支持像素数字和百分比
					margin: localArtDanmakuOption["margin"],
					// 弹幕透明度，范围在[0 ~ 1]
					opacity: localArtDanmakuOption["opacity"],
					// 弹幕可见的模式
					modes: localArtDanmakuOption["modes"],
					// 弹幕字体大小，支持像素数字和百分比
					fontSize: localArtDanmakuOption["fontSize"],
					// 弹幕是否防重叠
					antiOverlap: localArtDanmakuOption["antiOverlap"],
					// 是否同步播放速度
					synchronousPlayback: localArtDanmakuOption["synchronousPlayback"],
					// 弹幕层是否可见
					visible: localArtDanmakuOption["visible"],

					// 手动发送弹幕前的过滤器，返回 true 则可以发送，可以做存库处理
					beforeEmit(danmu) {
						return new Promise((resolve) => {
							console.log(danmu);
							setTimeout(() => {
								resolve(true);
							}, 1000);
						});
					},
				})
			);
		}

		if (Panel.getValue("artplayer-plugin-video-m4sAudioSupport-enable")) {
			artOption.plugins!.push(
				artplayerPluginM4SAudioSupport({
					from: "video",
					showSetting: true,
					audioList: option.audioList || [],
				})
			);
		}

		if (Panel.getValue("artplayer-plugin-video-epChoose-enable")) {
			artOption.plugins!.push(
				artplayerPluginEpChoose({
					EP_LIST: generateVideoSelectSetting(option),
					automaticBroadcast: true,
				})
			);
		}

		if (Panel.getValue("artplayer-plugin-video-cc-subtitle-enable")) {
			artOption.plugins!.push(
				artplayerPluginBilibiliCCSubTitle({
					from: "video",
					cid: option.cid,
					aid: option.aid,
					bvid: option.bvid!,
				})
			);
		}

		if (Panel.getValue("artplayer-plugin-video-toptoolbar-enable")) {
			artOption.plugins!.push(
				artplayerPluginTopToolBar({
					onlineInfoParams: {
						aid: option.aid,
						cid: option.cid,
						bvid: option.bvid!,
					},
					title: option.videoTitle,
					showWrap: true,
					showTitle: true,
					showOnlineTotal: true,
				})
			);
		}

		if (Panel.getValue("artplayer-plugin-video-statistics-enable")) {
			artOption.plugins!.push(
				artplayerPluginVideoStatistics({
					data: [],
				})
			);
		}

		if (Panel.getValue("bili-video-playerAutoPlayVideo")) {
			// 自动播放视频
			// 静音才能自动播放
			artOption.muted = true;
			artOption.autoplay = true;
		}

		this.$data.art = new Artplayer(artOption);

		artPlayerDanmakuOptionHelper.onConfigChange(this.$data.art);
		return this.$data.art;
	},
	/**
	 * 更新新的播放信息
	 * @param option
	 */
	async update(art: Artplayer, option: BilibiliVideoArtPlayerOption) {
		this.resetEnv(false);
		this.$data.currentOption = option;

		log.info(`更新新的播放信息`, option);
		// 暂停视频
		art.pause();
		log.info(`暂停视频`);
		// 重置播放进度
		art.currentTime = 0;
		log.info(`重置播放进度`);

		this.updatePluginInfo(art, option);

		// 播放
		art.play();
		log.info("播放");
	},
	/**
	 * 更新插件数据
	 * @param art
	 * @param option
	 */
	updatePluginInfo(art: Artplayer, option: BilibiliVideoArtPlayerOption) {
		// 更新画质
		let plugin_quality = art.plugins[
			ArtPlayer_PLUGIN_QUALITY_KEY
		] as ArtPlayerPluginQualityResult;
		plugin_quality.update({
			from: "video",
			qualityList: option.quality,
		});
		log.info(`更新画质`, option.quality);

		if (Panel.getValue("artplayer-plugin-video-danmaku-enable")) {
			// 更新弹幕信息
			art.plugins.artplayerPluginDanmuku.config({
				danmuku: option.danmukuUrl,
			});
			art.plugins.artplayerPluginDanmuku.load();
			log.info(`更新弹幕姬`, option.danmukuUrl);
		}

		if (Panel.getValue("artplayer-plugin-video-m4sAudioSupport-enable")) {
			// 更新音频
			let plugin_m4sAudioSupport = art.plugins[
				ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY
			] as ArtPlayerPluginM4SAudioSupportResult;
			plugin_m4sAudioSupport.update({
				from: "video",
				audioList: option.audioList || [],
			});
			log.info(`更新音频`, option.audioList);
		}

		if (Panel.getValue("artplayer-plugin-video-epChoose-enable")) {
			// 更新选集信息
			let plugin_epChoose = art.plugins[
				ArtPlayer_PLUGIN_EP_CHOOSE_KEY
			] as ArtPlayerPluginEpChooseResult;
			plugin_epChoose.update({
				EP_LIST: generateVideoSelectSetting(option),
				automaticBroadcast: true,
			});
			log.info(`更新选集信息`, option.epList);
		}
		if (Panel.getValue("artplayer-plugin-video-cc-subtitle-enable")) {
			// 更新字幕
			let plugin_bilibiliCCSubTitle = art.plugins[
				ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY
			] as ArtPlayerPluginBilibiliSubTitleResult;
			// 配置字幕数据
			const subTitleOption = {
				from: "video",
				aid: option.aid,
				bvid: option.bvid,
				cid: option.cid,
			} as ArtPlayerPluginBilibiliSubTitleOption;
			plugin_bilibiliCCSubTitle.update(subTitleOption);
			log.info(`更新字幕`, subTitleOption);
		}

		if (Panel.getValue("artplayer-plugin-video-toptoolbar-enable")) {
			// 更新顶部标题
			// 更新顶部在线观看人数来源
			let plugin_topToolBar = art.plugins[
				ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY
			] as ArtPlayerPluginTopToolBarResult;
			// 更新数据
			const topToolBarOption = {
				showRight: true,
				showRightFollow: true,
				showWrap: true,
				showTitle: true,
				showOnlineTotal: true,
				title: option.videoTitle,
				onlineInfoParams: {
					aid: option.aid,
					cid: option.cid,
					bvid: option.bvid!,
				},
			} as ArtPlayerPluginTopToolBarOption;
			plugin_topToolBar.update(topToolBarOption);
			log.info(`更新顶部标题`, topToolBarOption);
		}
	},
};
