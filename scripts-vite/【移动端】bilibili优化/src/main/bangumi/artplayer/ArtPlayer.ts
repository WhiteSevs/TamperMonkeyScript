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
import { PopsPanel } from "@/setting/setting";
import { BilibiliVideoCodingCode } from "@/api/BilibiliApiConfig";
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
			settings: [
				{
					name: "video-playback-codeid",
					html: "播放策略",
					tooltip: "默认",
					icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
					selector: [
						{
							default: true,
							html: "默认",
							value: BilibiliVideoCodingCode["AV1"],
						},
						{
							html: "AV1",
							value: BilibiliVideoCodingCode["AV1"],
						},
						{
							html: "HEVC",
							value: BilibiliVideoCodingCode["HEVC"],
						},
						{
							html: "AVC",
							value: BilibiliVideoCodingCode["AVC"],
						},
					],
					onSelect: function (item) {
						PopsPanel.setValue("bili-bangumi-videoCodingCode", item.value);
						return item.html;
					},
				},
			],
			plugins: [
				artplayerPluginToast(),
				artplayPluginQuality({
					from: "bangumi",
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
					danmuku: option.danmukuUrl,
					// 以下为非必填
					speed: localArtDanmakuOption.speed, // 弹幕持续时间，范围在[1 ~ 10]
					margin: localArtDanmakuOption["margin"], // 弹幕上下边距，支持像素数字和百分比
					opacity: localArtDanmakuOption["opacity"], // 弹幕透明度，范围在[0 ~ 1]
					color: "#FFFFFF", // 默认弹幕颜色，可以被单独弹幕项覆盖
					mode: 0, // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
					modes: localArtDanmakuOption["modes"], // 弹幕可见的模式
					fontSize: localArtDanmakuOption["fontSize"], // 弹幕字体大小，支持像素数字和百分比
					antiOverlap: localArtDanmakuOption["antiOverlap"], // 弹幕是否防重叠
					synchronousPlayback: localArtDanmakuOption["synchronousPlayback"], // 是否同步播放速度
					mount: undefined, // 弹幕发射器挂载点, 默认为播放器控制栏中部
					heatmap: true, // 是否开启热力图
					width: 800, // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
					points: [], // 热力图数据
					filter: (danmu) => danmu.text.length <= 100, // 弹幕载入前的过滤器
					beforeVisible: () => true, // 弹幕显示前的过滤器，返回 true 则可以发送
					visible: localArtDanmakuOption["visible"], // 弹幕层是否可见
					emitter: false, // 是否开启弹幕发射器
					maxLength: 50, // 弹幕输入框最大长度, 范围在[1 ~ 1000]
					lockTime: 3, // 输入框锁定时间，范围在[1 ~ 60]
					theme: utils.isThemeDark() ? "dark" : "light", // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效
					// OPACITY: {}, // 不透明度配置项
					// FONT_SIZE: {}, // 弹幕字号配置项
					// MARGIN: {}, // 显示区域配置项
					// SPEED: {}, // 弹幕速度配置项
					// COLOR: [], // 颜色列表配置项

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
					from: "bangumi",
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
					from: "bangumi",
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
		let videoUrl = "";
		if (typeof option.url === "string") {
			videoUrl = option.url;
		} else if (typeof option.url === "function") {
			let url = await option.url();
			videoUrl = url;
		}
		log.info([`更新新的播放信息`, option]);
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
			from: "bangumi",
			qualityList: option.quality,
		});
		log.info([`更新画质`, option.quality]);

		// 更新音频
		let plugin_m4sAudioSupport = art.plugins[
			ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY
		] as ArtPlayerPluginM4SAudioSupportResult;
		plugin_m4sAudioSupport.update({
			from: "bangumi",
			audioList: option.audioList || [],
		});
		log.info([`更新音频`, option.audioList]);

		// 更新字幕
		let plugin_bilibiliCCSubTitle = art.plugins[
			ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY
		] as ArtPlayerPluginBilibiliSubTitleResult;
		// 配置字幕数据
		const subTitleOption = {
			from: "bangumi",
			cid: option.cid,
			aid: option.aid,
			ep_id: option.ep_id,
		} as ArtPlayerPluginBilibiliSubTitleOption;
		plugin_bilibiliCCSubTitle.update(subTitleOption);
		log.info([`更新字幕`, subTitleOption]);

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
		log.info([`更新顶部标题`, topToolBarOption]);

		// 更新选集信息
		let plugin_epChoose = art.plugins[
			ArtPlayer_PLUGIN_EP_CHOOSE_KEY
		] as ArtPlayerPluginEpChooseResult;
		plugin_epChoose.update({
			EP_LIST: generateBangumiVideoSelectSetting(option),
			automaticBroadcast: true,
		});
		log.info([`更新选集信息`, option.epList]);

		// 更新弹幕信息
		art.plugins.artplayerPluginDanmuku.config({
			danmuku: option.danmukuUrl,
		});
		art.plugins.artplayerPluginDanmuku.load();
		log.info([`更新弹幕姬`, option.danmukuUrl]);
	},
};
