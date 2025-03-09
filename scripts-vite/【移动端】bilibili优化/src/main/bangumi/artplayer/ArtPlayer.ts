import { log, utils } from "@/env";
import Artplayer from "artplayer";
import artplayerPluginDanmuku from "artplayer-plugin-danmuku";
import type Option from "artplayer/types/option";
import {
	ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY,
	artplayerPluginM4SAudioSupport,
	type ArtPlayerPluginM4SAudioSupportOption,
	type ArtPlayerPluginM4SAudioSupportResult,
} from "@/player/plugins/artplayer-plugin-bilibiliM4SAudioSupport";
import {
	ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY,
	artplayerPluginBilibiliCCSubTitle,
	type ArtPlayerPluginBilibiliSubTitleOption,
	type ArtPlayerPluginBilibiliSubTitleResult,
} from "@/player/plugins/artplayer-plugin-bilibiliCCSubtitle";
import { PopsPanel } from "@/setting/panel";
import {
	ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY,
	artplayerPluginTopToolBar,
	type ArtPlayerPluginTopToolBarOption,
	type ArtPlayerPluginTopToolBarResult,
} from "@/player/plugins/artplayer-plugin-TopToolBar";
import flvjs from "flv.js";
import { BilibiliLogUtils } from "@/utils/BilibiliLogUtils";
import type { EP_INFO } from "../TypeBangumi";
import { BlibiliBangumiPlayer } from "../BilibiliBangumiPlayer";
import { ArtPlayerDanmakuOptionHelper } from "@/player/plugins/artplayer-plugin-DanmakuHelper";
import {
	ArtPlayer_PLUGIN_EP_CHOOSE_KEY,
	artplayerPluginEpChoose,
	GenerateArtPlayerEpTitle,
	type ArtPlayerPluginEpChooseOption,
	type ArtPlayerPluginEpChooseResult,
} from "@/player/plugins/artplayer-plugin-epChoose";
import { ArtPlayerCommonOption } from "@/player/ArtPlayerCommonOption";
import {
	ArtPlayer_PLUGIN_QUALITY_KEY,
	artplayPluginQuality,
	type ArtPlayerPluginQualityOption,
	type ArtPlayerPluginQualityResult,
} from "@/player/plugins/artplayer-plugin-quality";
import { artplayerPluginToast } from "@/player/plugins/artplayer-plugin-toast";
import {
	ArtPlayer_PLUGIN_AIRBORNE_HELPER_KEY,
	artplayerPluginAirborneHelper,
	type ArtPlayerPluginAirborneHelperOption,
	type ArtPlayerPluginAirborneHelperResult,
} from "@/player/plugins/artplayer-plugin-airborneHelper";
import { artplayerPluginVideoStatistics } from "@/player/plugins/artplayer-plugin-videoStatistics";
import { ArtPlayerDanmakuCommonOption } from "@/player/ArtPlayerDanmakuCommonOption";

export type BilibiliBangumiArtPlayerOption = {
	/** 容器 */
	container: HTMLDivElement | string;
	/** 选集信息 */
	epList: EP_INFO[];
	/** 视频链接 */
	url?: string | (() => IPromise<string>);
	/** 音频链接数组信息 */
	audioList?: ArtPlayerPluginM4SAudioSupportOption["audioList"];
	/** 画质信息 */
	quality: ArtPlayerPluginQualityOption["qualityList"];
	/** 弹幕xml地址 */
	danmukuUrl: string;
	/** 视频的cid */
	cid: string | number;
	/** 视频的aid */
	aid: string | number;
	/** 视频的bvid */
	bvid?: string;
	/** 视频的ep_id */
	ep_id: string | number;
	/** 视频的标题 */
	videoTitle?: string;
	/** 空降信息 */
	clip_info_list: ArtPlayerPluginAirborneHelperOption["clip_info_list"];
	/** 是否是flv文件 */
	isFlv: boolean;
	/** flv的视频信息 */
	flvInfo: {
		/** 排序 */
		order: number;
		/** 播放地址 */
		url: string;
		/** 视频长度 */
		length: number;
		/** 文件大小 */
		size: number;
		/** 视频秒数 */
		duration: number;
	}[];
	/** flv视频总大小(byte) */
	flvTotalSize: number;
	/** flv视频总长度(ms) */
	flvTotalDuration: number;
};

const TAG_FLV = "[flvjs]：";

/**
 * 生成番剧需要的选集信息
 * @param option
 */
const generateBangumiVideoSelectSetting = (
	option: BilibiliBangumiArtPlayerOption
): ArtPlayerPluginEpChooseOption["EP_LIST"] => {
	return option.epList.map((item) => {
		return {
			isDefault:
				item.ep_id === option.ep_id &&
				item.aid === option.aid &&
				item.cid === option.cid,
			title: GenerateArtPlayerEpTitle(item.long_title, item.title),
			aid: item.aid,
			bvid: item.bvid,
			cid: item.cid,
			ep_id: item.ep_id,
			onSelect(selectItem, index) {
				BlibiliBangumiPlayer.updateArtPlayerVideoInfo(item, option.epList);
			},
		};
	});
};

export const BilibiliBangumiArtPlayer = {
	$data: {
		art: null as any as Artplayer,
		flv: null as any as flvjs.Player | null,
		/** 当前的配置项 */
		currentOption: null as any as BilibiliBangumiArtPlayerOption | null,
		from: "bangumi" as "bangumi",
	},
	/**
	 * 重置环境变量
	 */
	resetEnv(isInit: boolean) {
		if (isInit) {
			Reflect.set(this.$data, "art", null);
			Reflect.set(this.$data, "flv", null);
		}
		Reflect.set(this.$data, "currentOption", null);
	},
	/**
	 * flv播放
	 *
	 * 切换url时自动调用
	 * @param videoInfoList 可能多个，可能只有一个
	 */
	flvPlayer() {
		if (this.$data.currentOption == null) {
			console.error(TAG_FLV + "获取当前配置为空");
			return;
		}
		let flvInfoList = this.$data.currentOption.flvInfo;
		if (this.$data.flv != null || flvInfoList == null) {
			// 销毁旧的
			this.$data.flv?.detachMediaElement();
			this.$data.flv?.destroy();
		}
		let currentOption = this.$data.currentOption;
		console.log(TAG_FLV + "加载视频", flvInfoList);
		if (flvInfoList.length > 1) {
			// 多个
			this.$data.flv = flvjs.createPlayer(
				{
					type: "flv",
					filesize: currentOption.flvTotalSize,
					duration: currentOption.flvTotalDuration,
					segments: flvInfoList.map((item) => {
						return {
							url: item.url,
							duration: item.duration,
							filesize: item.size,
						};
					}),
				},
				{
					stashInitialSize: 1024 * 100,
				}
			);
		} else {
			// 1个
			this.$data.flv = flvjs.createPlayer(
				{
					type: "flv",
					url: flvInfoList[0].url,
				},
				{
					stashInitialSize: 1024 * 100,
				}
			);
		}
		// 输出流绑定
		this.$data.flv.attachMediaElement(this.$data.art.video);
		// 加载流
		this.$data.flv.load();
	},
	/**
	 * 初始化播放器
	 * @param option
	 */
	async init(option: BilibiliBangumiArtPlayerOption) {
		this.resetEnv(true);
		this.$data.currentOption = option;
		// const volume = 100;
		// 本地存储的弹幕设置
		const localArtDanmakuOption_KEY = "artplayer-bangumi-danmaku-option";
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
			/** 自定义设置列表 */
			settings: [],
			plugins: [
				artplayerPluginToast(),
				artplayPluginQuality({
					from: BilibiliBangumiArtPlayer.$data.from,
					qualityList: option.quality,
				}),
			],
		};
		if (option.isFlv) {
			// flv格式
			// 清空画质信息
			artOption.quality = [];
			// 固定播放格式
			artOption.type = "flv";
			if (option.flvInfo.length === 0) {
				BilibiliLogUtils.failToast("视频播放地址为空，无法播放！");
				return;
			}
			artOption.url = option.flvInfo[0].url;
			// 使用flvjs
			artOption.customType = {
				flv: (video, url, art) => {
					// 这里里面尽量不要用外面的变量
					// 要用的话也是用this.currentOption
					if (!flvjs.isSupported()) {
						art.notice.show = "Unsupported playback format: flv";
						return;
					}
					this.flvPlayer();
				},
			};
		} else {
			artOption.type = "mp4";
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
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

		if (PopsPanel.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")) {
			artOption.plugins!.push(
				artplayerPluginM4SAudioSupport({
					from: BilibiliBangumiArtPlayer.$data.from,
					audioList: option.audioList || [],
					showSetting: true,
				})
			);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-epChoose-enable")) {
			artOption.plugins!.push(
				artplayerPluginEpChoose({
					EP_LIST: generateBangumiVideoSelectSetting(option),
					automaticBroadcast: true,
				})
			);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")) {
			artOption.plugins!.push(
				artplayerPluginBilibiliCCSubTitle({
					from: BilibiliBangumiArtPlayer.$data.from,
					cid: option.cid,
					aid: option.aid,
					bvid: option.bvid!,
					ep_id: option.ep_id,
				})
			);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-toptoolbar-enable")) {
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

		if (PopsPanel.getValue("artplayer-plugin-bangumi-airborneHelper-enable")) {
			// 空降助手
			artOption.plugins!.push(
				artplayerPluginAirborneHelper({
					clip_info_list: option.clip_info_list,
				})
			);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-statistics-enable")) {
			artOption.plugins!.push(
				artplayerPluginVideoStatistics({
					data: [],
				})
			);
		}

		this.$data.art = new Artplayer(artOption);

		artPlayerDanmakuOptionHelper.onConfigChange(this.$data.art);
		return this.$data.art;
	},
	/**
	 * 更新新的播放信息
	 * @param art
	 * @param option
	 */
	async update(art: Artplayer, option: BilibiliBangumiArtPlayerOption) {
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
	updatePluginInfo(art: Artplayer, option: BilibiliBangumiArtPlayerOption) {
		// 更新画质
		let plugin_quality = art.plugins[
			ArtPlayer_PLUGIN_QUALITY_KEY
		] as ArtPlayerPluginQualityResult;
		plugin_quality.update({
			from: BilibiliBangumiArtPlayer.$data.from,
			qualityList: option.quality,
		});
		log.info(`更新画质`, option.quality);

		if (PopsPanel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
			// 更新弹幕信息
			art.plugins.artplayerPluginDanmuku.config({
				danmuku: option.danmukuUrl,
			});
			art.plugins.artplayerPluginDanmuku.load();
			log.info(`更新弹幕姬`, option.danmukuUrl);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")) {
			// 更新音频
			let plugin_m4sAudioSupport = art.plugins[
				ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY
			] as ArtPlayerPluginM4SAudioSupportResult;
			plugin_m4sAudioSupport.update({
				from: BilibiliBangumiArtPlayer.$data.from,
				audioList: option.audioList || [],
			});
			log.info(`更新音频`, option.audioList);
		}
		if (PopsPanel.getValue("artplayer-plugin-bangumi-epChoose-enable")) {
			// 更新选集信息
			let plugin_epChoose = art.plugins[
				ArtPlayer_PLUGIN_EP_CHOOSE_KEY
			] as ArtPlayerPluginEpChooseResult;
			plugin_epChoose.update({
				EP_LIST: generateBangumiVideoSelectSetting(option),
				automaticBroadcast: true,
			});
			log.info(`更新选集信息`, option.epList);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")) {
			// 更新字幕
			let plugin_bilibiliCCSubTitle = art.plugins[
				ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY
			] as ArtPlayerPluginBilibiliSubTitleResult;
			// 配置字幕数据
			const subTitleOption = {
				from: BilibiliBangumiArtPlayer.$data.from,
				cid: option.cid,
				aid: option.aid,
				ep_id: option.ep_id,
			} as ArtPlayerPluginBilibiliSubTitleOption;
			plugin_bilibiliCCSubTitle.update(subTitleOption);
			log.info(`更新字幕`, subTitleOption);
		}

		if (PopsPanel.getValue("artplayer-plugin-bangumi-toptoolbar-enable")) {
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

		if (PopsPanel.getValue("artplayer-plugin-bangumi-airborneHelper-enable")) {
			// 更新空降助手信息
			let plugin_airborneHelper = art.plugins[
				ArtPlayer_PLUGIN_AIRBORNE_HELPER_KEY
			] as ArtPlayerPluginAirborneHelperResult;
			plugin_airborneHelper.update({
				clip_info_list: option.clip_info_list,
			});
			log.info(`更新空降助手信息`, option.clip_info_list);
		}
	},
};
