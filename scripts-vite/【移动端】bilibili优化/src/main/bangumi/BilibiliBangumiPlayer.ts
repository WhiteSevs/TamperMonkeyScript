import {
	BilibiliBangumiApi,
	type BilibiliTypeBangumiVideoPlayeHtml5Info,
	type BilibiliTypeBangumiVideoPlayeInfo,
} from "@/api/BilibiliBangumiApi";
import { BilibiliCDNProxy } from "@/api/BilibiliCDNProxy";
import { BilibiliBangumiArtPlayer, type BilibiliBangumiArtPlayerOption } from "./artplayer/ArtPlayer";
import { VideoSoundQualityCode } from "@/video-info/AudioDict";
import { BilibiliLogUtils } from "@/utils/BilibiliLogUtils";
import type { EP_INFO, EP_LIST } from "./TypeBangumi";
import type { ArtPlayerPluginQualityOption } from "@/player/plugins/artplayer-plugin-quality";
import type { ArtPlayerPluginAirborneHelperOption } from "@/player/plugins/artplayer-plugin-airborneHelper";
import { $, DOMUtils, log, utils } from "@/env";
import { ReactUtils } from "@components/utils/ReactUtils";
import { BilibiliData } from "@/data/BlibiliData";
import { Panel } from "@components/setting/panel";

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
function handleDashVideoQualityInfo(dashInfo: {
	accept_quality: BilibiliTypeBangumiVideoPlayeInfo["accept_quality"];
	support_formats: BilibiliTypeBangumiVideoPlayeInfo["support_formats"];
	video: BilibiliTypeBangumiVideoPlayeInfo["dash"]["video"];
}) {
	let acceptVideoQualityInfoList: VideoQualityInfo[] = [];
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
		videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
		// 视频画质名称
		let qualityName = findSupportFormat?.new_description!;
		acceptVideoQualityInfoList.push({
			name: qualityName,
			url: videoUrl,
			type: dashVideoInfo.mimeType,
			id: dashVideoInfo.id,
			size: dashVideoInfo.size,
			quality: dashVideoInfo.id,
			vip: Boolean(findSupportFormat?.need_vip),
			bandwidth: dashVideoInfo.bandwidth,
			frameRate: dashVideoInfo.frameRate,
			codecid: dashVideoInfo.codecid,
			codecs: dashVideoInfo.codecs,
		});
	});

	return acceptVideoQualityInfoList;
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
 * 处理请求的数据中的画质信息
 *
 * 处理为需要的画质对应的信息
 */
const handleQueryVideoQualityData = (
	bangumiInfo: BilibiliTypeBangumiVideoPlayeInfo | BilibiliTypeBangumiVideoPlayeHtml5Info,
	userChooseVideoCodingCode?: number
): VideoQualityInfo[] => {
	let qualityInfoList: VideoQualityInfo[] = [];
	if ((bangumiInfo as BilibiliTypeBangumiVideoPlayeInfo)?.dash?.video?.length) {
		// dash
		let dashBangumiInfo = bangumiInfo as BilibiliTypeBangumiVideoPlayeInfo;
		qualityInfoList = [
			...handleDashVideoQualityInfo({
				accept_quality: dashBangumiInfo.accept_quality,
				support_formats: dashBangumiInfo.support_formats,
				video: dashBangumiInfo.dash.video,
			}),
		];
		if (qualityInfoList.length === 0) {
			// 可能是请求到的视频的编码格式没有一个符合自定义的视频编码的格式
			if (dashBangumiInfo.dash.video.length !== 0) {
				log.warn(
					`当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
				);
				qualityInfoList = [
					...handleDashVideoQualityInfo({
						accept_quality: dashBangumiInfo.accept_quality,
						support_formats: dashBangumiInfo.support_formats,
						video: dashBangumiInfo.dash.video,
					}),
				];
			}
		}
	} else {
		// mp4
		let mp4BangumiInfo = bangumiInfo as BilibiliTypeBangumiVideoPlayeHtml5Info;
		if (mp4BangumiInfo.durls.length === 0) {
			// 空的？把有的durl放进durls中
			if (mp4BangumiInfo.durl != null) {
				mp4BangumiInfo.durls.push({
					quality: mp4BangumiInfo.quality,
					durl: mp4BangumiInfo.durl,
				});
			}
		}
		mp4BangumiInfo.durls.forEach((durlInfo) => {
			if (!mp4BangumiInfo.accept_quality.includes(durlInfo.quality)) {
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
			let videoUrl = BilibiliCDNProxy.findBetterCDN(currentDurl.url, currentDurl.backup_url);
			// 处理视频host替换
			// videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
			// 视频画质名称
			let qualityName = findSupportFormat?.new_description!;
			qualityInfoList.push({
				name: qualityName,
				url: videoUrl,
				type: "audio/mp4",
				id: durlInfo.quality,
				size: currentDurl.size,
				quality: durlInfo.quality,
				vip: Boolean(findSupportFormat?.need_vip),
				bandwidth: 0,
				frameRate: "",
				codecid: 0,
				codecs: "",
			});
		});
	}

	return qualityInfoList;
};

/**
 * 生成art-player需要的参数
 *
 * 注意没有container，需要自行补上
 * @param EP_INFO 当前集的信息
 * @param EP_LIST 集数信息
 */
export const GenerateArtPlayerOption = async (EP_INFO: EP_INFO, EP_LIST: EP_LIST) => {
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
		/** 带宽 */
		bandwidth: number;
		/** 编码 */
		codecs: string;
		/** 类型 */
		mimeType: string;
	}[] = [];

	// 解析清晰度信息
	let qualityInfo: VideoQualityInfo[] = [];
	// 空降信息
	let clip_info_list: ArtPlayerPluginAirborneHelperOption["clip_info_list"] = [];
	/** 是否是flv */
	let isFlv = false;
	let flvInfo: BilibiliBangumiArtPlayerOption["flvInfo"] = [];
	let flvTotalDuration = 0;
	let flvTotalSize = 0;
	if (Panel.getValue("bili-bangumi-unlockAreaLimit")) {
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
		// 设置空降信息
		if (Array.isArray(bangumiInfo?.clip_info_list)) {
			clip_info_list = bangumiInfo.clip_info_list as ArtPlayerPluginAirborneHelperOption["clip_info_list"];
			// @ts-ignore
		} else if (Array.isArray(bangumiInfo?.clip_info)) {
			clip_info_list =
				// @ts-ignore
				bangumiInfo.clip_info as ArtPlayerPluginAirborneHelperOption["clip_info_list"];
		}

		if (bangumiInfo.type.toLowerCase() === "flv") {
			isFlv = true;
			// flv视频，使用flv.js
			// 这里的应该是剧场版的视频，多p
			bangumiInfo.durl.forEach((durlInfo) => {
				let videoUrl = BilibiliCDNProxy.findBetterCDN(durlInfo.url, durlInfo.backup_url);
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
		} else if (bangumiInfo.type.toLowerCase() === "dash" || bangumiInfo.type.toLowerCase() === "mp4") {
			// dash类型，分video和audio
			// 遍历audio
			(bangumiInfo?.dash?.audio || []).forEach((item) => {
				let audioUrl = BilibiliCDNProxy.findBetterCDN(
					item.baseUrl,
					item.base_url,
					item.baseUrl,
					item.backup_url
				);
				// 处理音频host替换
				audioUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(audioUrl);
				audioInfo.push({
					url: audioUrl,
					id: item.id,
					size: item.size,
					text: VideoSoundQualityCode[item.id] || "",
					bandwidth: item.bandwidth,
					codecs: item.codecs,
					mimeType: item.mimeType || item.mime_type,
				});
			});

			log.info(`ArtPlayer: 获取的音频信息`, audioInfo);

			// 筛选视频
			qualityInfo = qualityInfo.concat(handleQueryVideoQualityData(bangumiInfo));
			log.info(`ArtPlayer: 获取的视频画质信息`, qualityInfo);
		} else {
			BilibiliLogUtils.failToast("暂未适配的视频格式：" + bangumiInfo["format"]);
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
		// 设置空降信息
		// @ts-ignore
		if (Array.isArray(bangumiInfo?.clip_info_list)) {
			clip_info_list =
				// @ts-ignore
				bangumiInfo.clip_info_list as ArtPlayerPluginAirborneHelperOption["clip_info_list"];
		} else if (Array.isArray(bangumiInfo?.clip_info)) {
			clip_info_list = bangumiInfo.clip_info as ArtPlayerPluginAirborneHelperOption["clip_info_list"];
		}
		qualityInfo = qualityInfo.concat(handleQueryVideoQualityData(bangumiInfo));
	}

	/**
	 * 当前的画质信息列表
	 */
	const currentVideoQuality: ArtPlayerPluginQualityOption["qualityList"] = qualityInfo.map((item, index) => {
		return {
			html: item.name,
			url: item.url,
			quality: item.quality,
			mimeType: item.type,
			codecid: item.codecid,
			codecs: item.codecs,
			frameRate: item.frameRate,
			bandwidth: item.bandwidth,
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
		clip_info_list: clip_info_list,
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
				bandwidth: item.bandwidth,
				codecs: item.codecs,
				mimeType: item.mimeType,
				size: item.size,
			};
		});
	}

	return artPlayerOption;
};
export const BlibiliBangumiPlayer = {
	$data: {
		art: null as any as Artplayer,
	},
	/**
	 * 更新播放器的信息
	 */
	updateArtPlayerVideoInfo(ep_info?: EP_INFO, ep_list?: EP_LIST) {
		const that = this;
		// VueUtils.waitVuePropToSet(".player-wrapper", {
		// 	msg: "等待player-wrapper加载完成",
		// 	check(vueInstance) {
		// 		return (
		// 			typeof vueInstance?.EP_INFO?.aid === "number" &&
		// 			typeof vueInstance?.EP_INFO?.cid === "number" &&
		// 			typeof vueInstance?.EP_INFO?.ep_id === "number"
		// 		);
		// 	},
		// 	async set(vueInstance) {
		// 		const $playerWrapper = $<HTMLDivElement>(".player-wrapper")!;
		// 		if (ep_info == null) {
		// 			ep_info = vueInstance.EP_INFO as EP_INFO;
		// 		}
		// 		if (ep_list == null) {
		// 			ep_list = vueInstance.EP_LIST as EP_LIST;
		// 		}
		// 		// 生成配置信息
		// 		const artPlayerOption = await GenerateArtPlayerOption(ep_info, ep_list);
		// 		if (artPlayerOption == null) {
		// 			// 生成失败
		// 			return;
		// 		}
		// 		let $artPlayer = $<HTMLDivElement>("#artplayer");
		// 		// 如果页面不存在的话，添加到页面中
		// 		if (!$artPlayer) {
		// 			// 接下来就是添加播放器到页面中
		// 			const $artPlayerContainer = DOMUtils.createElement("div", {
		// 				className: "artplayer-container",
		// 				innerHTML: /*html*/ `
		// 				<div id="artplayer"></div>
		// 				`,
		// 			});
		// 			// 生成的art播放器
		// 			$artPlayer =
		// 				$artPlayerContainer.querySelector<HTMLDivElement>("#artplayer")!;
		// 			DOMUtils.after($playerWrapper, $artPlayerContainer);
		// 		}
		// 		// 设置container参数
		// 		artPlayerOption!.container = $artPlayer;

		// 		// 初始化artplayer播放器
		// 		if (that.$data.art == null) {
		// 			let art = await BilibiliBangumiArtPlayer.init(artPlayerOption);
		// 			if (art) {
		// 				that.$data.art = art;
		// 			} else {
		// 				return;
		// 			}
		// 			if (import.meta.hot) {
		// 				Reflect.set(window, "art", that.$data.art);
		// 			}
		// 			// 强制初始化音量为1
		// 			that.$data.art.volume = 1;
		// 		} else {
		// 			// 更新artplayer播放信息
		// 			BilibiliBangumiArtPlayer.update(that.$data.art, artPlayerOption);
		// 		}
		// 	},
		// });
		ReactUtils.waitReactPropsToSet(
			BilibiliData.className.bangumi_new + ` [class^="Player_container"]`,
			"reactFiber",
			{
				check(reactInstance) {
					return (
						typeof reactInstance?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo?.bvid ===
						"string"
					);
				},
				async set(reactInstance) {
					let epInfo = reactInstance?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo;
					const $playerWrapper = $<HTMLDivElement>("#bilibiliPlayer")!;
					if (ep_info == null) {
						ep_info = epInfo;
					}
					if (ep_list == null) {
						ep_list = [];
						let $epList = $<HTMLElement>(
							BilibiliData.className.bangumi_new + ` [class^="EpisodeList_episodeListWrap"]`
						);
						if ($epList) {
							let react = utils.getReactObj($epList);
							let epList = react?.reactFiber?.return?.memoizedState?.memoizedState?.[0]?.episodes;
							if (Array.isArray(epList)) {
								ep_list = epList;
							}
						}
					}
					// 生成配置信息
					const artPlayerOption = await GenerateArtPlayerOption(ep_info!, ep_list);
					if (artPlayerOption == null) {
						// 生成失败
						return;
					}
					let $artPlayer = $<HTMLDivElement>("#artplayer");
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
						$artPlayer = $artPlayerContainer.querySelector<HTMLDivElement>("#artplayer")!;
						DOMUtils.after($playerWrapper, $artPlayerContainer);
					}
					// 设置container参数
					artPlayerOption!.container = $artPlayer;

					// 初始化artplayer播放器
					if (that.$data.art == null) {
						let art = await BilibiliBangumiArtPlayer.init(artPlayerOption);
						if (art) {
							that.$data.art = art;
						} else {
							return;
						}
						if (import.meta.hot) {
							Reflect.set(window, "art", that.$data.art);
						}
						// 强制初始化音量为1
						that.$data.art.volume = 1;
					} else {
						// 更新artplayer播放信息
						BilibiliBangumiArtPlayer.update(that.$data.art, artPlayerOption);
					}
				},
			}
		);
	},
};
