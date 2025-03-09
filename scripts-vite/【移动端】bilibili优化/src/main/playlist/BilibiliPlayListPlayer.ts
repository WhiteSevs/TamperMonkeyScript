import { BilibiliData } from "@/data/BlibiliData";
import { $, DOMUtils, log, Qmsg } from "@/env";
import { VueUtils } from "@/utils/VueUtils";
import {
	BilibiliVideoPlayer,
	GenerateArtPlayerOption,
	type VideoInfo,
} from "../video/BilibiliVideoPlayer";
import { BilibiliVideoArtPlayer } from "../video/artplayer/ArtPlayer";
import { PopsPanel } from "@/setting/panel";

type PlayListVideoInfo = {
	/** aid */
	id: number;
	offset: number;
	/** 视频所在下标 */
	index: number;
	/** 视频简介 */
	intro: string;
	attr: number;
	tid: number;
	copy_right: number;
	cnt_info: {
		/** 收藏数 */
		collect: number;
		/** 播放量 */
		play: number;
		thumb_up: number;
		thumb_down: number;
		/** 分享量 */
		share: number;
		/** 回复量 */
		reply: number;
		/** 弹幕量 */
		danmaku: number;
		/** 投币数 */
		coin: number;
		vt: number;
		play_switch: number;
		/** 观看数 */
		view_text_1: string;
	};
	/** 视频封面 */
	cover: string;
	/** 时长 */
	duration: number;
	/** 上传时间 */
	pubtime: number;
	/** 点赞状态 */
	like_state: number;
	/** 收藏状态 */
	fav_state: number;
	page: number;
	pages: {
		/** cid */
		id: number;
		title: string;
		intro: string;
		duration: number;
		link: string;
		page: number;
		metas: {
			quality: number;
			size: number;
		}[];
		from: string;
		dimension: {
			width: number;
			height: number;
			rotate: number;
		};
	}[];
	/** 视频标题 */
	title: string;
	type: number;
	upper: {
		mid: number;
		name: string;
		face: string;
		followed: number;
		fans: number;
		vip_type: number;
		vip_statue: number;
		vip_due_date: number;
		vip_pay_type: number;
		official_role: number;
		official_title: "";
		official_desc: "";
		display_name: "";
	};
	/** scheme链接 */
	link: string;
	/** bvid */
	bv_id: string;
	/** 短链 */
	short_link: string;
	rights: {
		bp: number;
		elec: number;
		download: number;
		movie: number;
		pay: number;
		ugc_pay: number;
		hd5: number;
		no_reprint: number;
		autoplay: number;
		no_background: number;
	};
	elec_info: null;
	coin: {
		max_num: number;
		coin_number: number;
	};
	progress_percent: number;
	badge: null;
	forbid_fav: boolean;
	more_type: number;
	business_oid: number;
};

export const BilibiliPlayListPlayer = {
	$flag: {
		isWatchVideoChange: false,
	},
	$data: {
		art: null as any as Artplayer,
	},
	init() {},
	/**
	 * 更新播放信息
	 * @param videoInfo
	 * @param isEpChoose 是否是从选集内调用的
	 */
	updateArtPlayerVideoInfo(videoInfo?: VideoInfo, isEpChoose?: boolean) {
		const that = this;
		VueUtils.waitVuePropToSet(
			BilibiliData.className.playlist + " .playlist-player",
			{
				msg: "等待覆盖playlist播放器",
				check(vueInstance) {
					return (
						typeof vueInstance?.aid === "number" &&
						typeof vueInstance?.cid === "number" &&
						typeof vueInstance?.bvid === "string"
					);
				},
				async set(vueInstance) {
					// 删除旧播放器，因为它设置了autoplay，会自动播放
					$(".playlist-player .player-container")?.remove();

					let $player = $<HTMLElement>(
						BilibiliData.className.playlist + " .playlist-player"
					)!;
					let $playerContainer = $<HTMLElement>(
						BilibiliData.className.playlist
					)!;
					let playerContainerVueInstance = VueUtils.getVue($playerContainer)!;
					let { aid, cid, bvid } = vueInstance;
					let { title, cover: pic } = playerContainerVueInstance.video;
					log.info(`视频播放信息 => aid：${aid} bvid：${bvid} cid：${cid}`);
					if (videoInfo == null) {
						videoInfo = {
							aid,
							bvid,
							cid,
							pic,
							title,
						};
					}
					// 生成配置信息
					const artPlayerOption = await GenerateArtPlayerOption(videoInfo!);
					if (artPlayerOption == null) {
						// 生成失败
						return;
					}

					// 创建播放器元素
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
						$artPlayer =
							$artPlayerContainer.querySelector<HTMLDivElement>("#artplayer")!;
						DOMUtils.append($player, $artPlayerContainer);
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
						if (import.meta.hot) {
							Reflect.set(window, "art", BilibiliVideoPlayer.$data.art);
						}
						// 强制初始化音量为1
						that.$data.art.volume = 1;
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
						that.$data.art.on("video:ended", () => {
							log.info("视频播放结束，自动下一集");
							let $controlPanel = $<HTMLElement>(
								BilibiliData.className.playlist + " .control-panel"
							);
							if (!$controlPanel) {
								log.error("未找到播放列表，无法自动播放下一集");
								return;
							}
							let controlVueInstance = VueUtils.getVue($controlPanel);
							if (controlVueInstance == null) {
								log.error("未找到播放列表的Vue实例，无法自动播放下一集");
								return;
							}
							let { playMode, mediaList, videoIndex } =
								vueInstance.$store.state.playlist;
							if (videoIndex >= mediaList.length - 1) {
								log.info(`播放列表已播放完毕`);
							} else {
								let $currentVideoCard = $<HTMLElement>(
									`.video-card[index="${videoIndex}"]`
								)!;
								let currentVideoCardVueInstance =
									VueUtils.getVue($currentVideoCard)!;
								let p = currentVideoCardVueInstance.p;
								if (p >= currentVideoCardVueInstance.video.page) {
									// 切换到下一个视频卡片
									let $nextVideoCard = $<HTMLElement>(
										`.video-card[index="${videoIndex + 1}"]`
									)!;
									let nextVideoCardVueInstance =
										VueUtils.getVue($nextVideoCard)!;
									nextVideoCardVueInstance.changeVideo();
									log.info(
										`当前播放列表共：${
											mediaList.length - 1
										}个，即将播放下一个视频，第${videoIndex + 2}个`
									);
								} else {
									// 切换分集
									p++;
									currentVideoCardVueInstance.changeVideo(p);
									log.info(
										`当前播放列表共：${mediaList.length - 1}个，即将播放第${
											videoIndex + 2
										}-${p}`
									);
								}
							}
						});
					} else {
						// 更新artplayer播放信息
						await BilibiliVideoArtPlayer.update(
							that.$data.art,
							artPlayerOption
						);
					}
				},
			}
		);
		VueUtils.waitVuePropToSet(
			BilibiliData.className.playlist + " .playlist-player",
			{
				msg: "等待监听playlist播放列表改变",
				check(vueInstance) {
					return typeof vueInstance.$watch === "function";
				},
				set(vueInstance) {
					// 监听变化
					if (!that.$flag.isWatchVideoChange) {
						that.$flag.isWatchVideoChange = true;
						vueInstance.$watch("cid", (newVal, oldVal) => {
							log.info(`切换播放视频`);
							that.updateArtPlayerVideoInfo();
						});
					}
				},
			}
		);
	},
};
