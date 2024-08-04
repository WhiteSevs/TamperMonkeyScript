import { addStyle, DOMUtils, httpx, log, utils } from "@/env";
import { unsafeWindow } from "ViteGM";
import { BilibiliDanmaku } from "./BilibiliDanmaku";
import { PopsPanel } from "@/setting/setting";
import { BilibiliVideoPlayUrlQN } from "@/hook/BilibiliNetworkHook";
import { BilibiliApi_Video } from "@/api/BilibiliApi_Video";
import { BilibiliPlayerToast } from "./BilibiliPlayerToast";

export const BilibiliPlayerUI = {
	$flag: {
		/** 是否已经添加CSS */
		isInitCSS: false,
		/** 是否已经覆盖mplayer */
		isCoverMPlayer: false,
	},
	$el: {
		/** 播放器右边菜单 */
		get $mplayerRight() {
			return document.querySelector<HTMLDivElement>(".mplayer-right")!;
		},
	},
	/** 右侧面板菜单 */
	$mPlayerRight: {
		/** 显示右侧菜单 */
		showMPlayerRight() {
			BilibiliPlayerUI.$el.$mplayerRight.style.cssText =
				"--mplayer-right-transform: -var(--mplayer-right-w);";
		},
		/** 隐藏右侧菜单 */
		hideMPlayerRight() {
			BilibiliPlayerUI.$el.$mplayerRight.style.cssText = "";
		},
		/** 清空右侧菜单 */
		clearMPlayerRight() {
			BilibiliPlayerUI.$el.$mplayerRight.innerHTML = "";
		},
		/** 设置某个项访问状态 */
		setActive($el: HTMLElement) {
			$el.classList.add("gf-mplayer-right-item-active");
		},
		/** 切换某个项访问状态，并清空其它的访问状态 */
		switchActive($el: HTMLElement) {
			this.clearAllActive();
			this.setActive($el);
		},
		/** 清空某个项访问状态 */
		clearActive($el: HTMLElement) {
			$el.classList.remove("gf-mplayer-right-item-active");
		},
		/** 清空所有项的访问状态 */
		clearAllActive() {
			BilibiliPlayerUI.$el.$mplayerRight
				.querySelectorAll(".gf-mplayer-right-item-active")
				.forEach((item) =>
					item.classList.remove("gf-mplayer-right-item-active")
				);
		},
		/** 创建一个项 */
		createMPlayerItem(text?: string) {
			return DOMUtils.createElement("div", {
				className: "gf-mplayer-right-item",
				innerHTML: text ?? "",
			});
		},
	},
	init() {
		if (!this.$flag.isInitCSS) {
			this.$flag.isInitCSS = true;
			addStyle(/*css*/ `
			.mplayer-right {
				--mplayer-right-w: 8em;
				--mplayer-right-transform: var(--mplayer-right-w);
				background: #181212;
				width: var(--mplayer-right-w) !important;
				opacity: 0.9 !important;
				visibility: visible !important;
				color: #ffffff;
				-webkit-transform: translateX(var(--mplayer-right-transform)) !important;
				transform: translateX(var(--mplayer-right-transform)) !important;
				z-index: 1000;
				overflow-y: auto;
				display: block;
				align-content: center;
			}
			.gf-mplayer-right-item{
				width: 100%;
				text-align: center;
				align-content: center;
				padding: 1em 0px;
			}
			.gf-mplayer-right-item-active {
				color: var(--bili-color);
			}
			`);
		}
		PopsPanel.execMenuOnce("bili-coverSpeedBtn", () => {
			this.coverMPlayer();
			this.coverSpeedBtn();
		});
		PopsPanel.execMenuOnce("bili-coverQuality", () => {
			this.coverMPlayer();
			this.coverQuality();
		});
	},
	/**
	 * 设置.mplayer全局点击监听，用于取消.mplayer-right
	 */
	coverMPlayer() {
		if (this.$flag.isCoverMPlayer) {
			return;
		}
		this.$flag.isCoverMPlayer = true;
		DOMUtils.on(
			document,
			"click",
			(event) => {
				let $click = event.target as HTMLElement;
				if (
					this.$el?.$mplayerRight &&
					!this.$el?.$mplayerRight?.contains($click)
				) {
					// 隐藏right栏
					this.$mPlayerRight.hideMPlayerRight();
				}
			},
			{ capture: true }
		);
	},
	/**
	 * 覆盖【倍速】按钮
	 */
	coverSpeedBtn() {
		DOMUtils.on(
			document,
			"click",
			".mplayer-control-btn-speed",
			async (event) => {
				utils.preventEvent(event);
				log.info("点击【倍速】");
				// 隐藏右侧面板
				this.$mPlayerRight.hideMPlayerRight();
				// 清空内容
				this.$mPlayerRight.clearMPlayerRight();
				// 速度
				let speedList = [
					{
						text: "5.0X",
						value: 5,
					},
					{
						text: "3.0X",
						value: 3,
					},
					{
						text: "2.0X",
						value: 2,
					},
					{
						text: "1.5X",
						value: 1.5,
					},
					{
						text: "1.25X",
						value: 1.25,
					},
					{
						text: "1.0X",
						value: 1,
					},
					{
						text: "0.75X",
						value: 0.75,
					},
					{
						text: "0.5X",
						value: 0.5,
					},
					{
						text: "0.25X",
						value: 0.25,
					},
				];
				let videoBackRate = await BilibiliPlayer.getVideoPlayBackRate();
				// 循环添加到页面中
				let $isActive: undefined | HTMLDivElement = void 0;
				speedList.forEach((item) => {
					let $mplayerItem = this.$mPlayerRight.createMPlayerItem(item.text);
					if (videoBackRate == item.value) {
						// 倍速相同，设置选中
						$isActive = $mplayerItem;
					}
					DOMUtils.on($mplayerItem, "click", async (__event__) => {
						utils.preventEvent(__event__);
						await BilibiliPlayer.setVideoSpeed(item.value);
						// 先清空访问状态
						this.$mPlayerRight.switchActive($mplayerItem);
						this.$mPlayerRight.hideMPlayerRight();
					});
					this.$el.$mplayerRight.appendChild($mplayerItem);
				});
				if ($isActive) {
					// 选中
					this.$mPlayerRight.switchActive($isActive);
					// 居中
					($isActive as HTMLDivElement).scrollIntoView({
						block: "center",
					});
				}
				this.$mPlayerRight.showMPlayerRight();
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 覆盖【清晰度】按钮
	 */
	coverQuality() {
		DOMUtils.on(
			document,
			"click",
			".mplayer-control-btn-quality",
			async (event) => {
				utils.preventEvent(event);
				log.info("点击【清晰度】");
				// 隐藏右侧面板
				this.$mPlayerRight.hideMPlayerRight();
				// 清空内容
				this.$mPlayerRight.clearMPlayerRight();

				// 清晰度
				let qualityInfoList = [] as {
					text: string;
					quality: number;
					isActive: boolean;
				}[];
				if (!BilibiliPlayer.$data.videoQuality.length) {
					// 未请求到清晰度信息
					let playerPromise = await BilibiliPlayer.$player.playerPromise();
					// 获取当前视频的清晰度
					let playerQuality = playerPromise.videoQuality;
					Object.keys(BilibiliVideoPlayUrlQN).forEach((qualityName) => {
						// @ts-ignore
						let qualityValue = BilibiliVideoPlayUrlQN[qualityName];
						qualityInfoList.push({
							text: qualityName,
							quality: qualityValue,
							isActive: playerQuality == qualityValue,
						});
					});
				} else {
					qualityInfoList = [...BilibiliPlayer.$data.videoQuality];
				}
				// 排序 画质高的为第一个，降序
				utils.sortListByProperty(qualityInfoList, (value) => {
					return value.quality;
				});
				// 循环添加到页面中
				let $isActive: undefined | HTMLDivElement = void 0;
				qualityInfoList.forEach((item) => {
					let $mplayerItem = this.$mPlayerRight.createMPlayerItem(item.text);
					if (item.isActive) {
						// 设置选中
						$isActive = $mplayerItem;
					}
					DOMUtils.on($mplayerItem, "click", async (__event__) => {
						utils.preventEvent(__event__);

						BilibiliPlayerToast.toast("切换中，请稍后");
						let playerPromise = await BilibiliPlayer.$player.playerPromise();
						let bvid = playerPromise.config.bvid;
						let cid = playerPromise.config.cid;
						if (!bvid) {
							BilibiliPlayerToast.toast("获取bvid失败");
							return;
						}
						let videoInfo = await BilibiliApi_Video.playUrl({
							bvid: bvid,
							cid: cid,
							qn: item.quality,
						});
						if (!videoInfo) {
							BilibiliPlayerToast.toast("获取视频信息失败");
							log.error("获取视频信息失败");
							return;
						}
						log.success(["切换清晰度-成功获取当前视频的具体信息", videoInfo]);
						// 当前请求获取到的画质
						// 那么durl列表中（一般只有一个）的链接就是当前画质的链接
						let quality = videoInfo.quality;
						if (
							!(
								videoInfo.durl &&
								Array.isArray(videoInfo.durl) &&
								videoInfo.durl.length > 0
							)
						) {
							log.error("请求的视频信息内没有视频地址url");
							BilibiliPlayerToast.toast("请求的视频信息内没有视频地址url");
							return;
						}
						if (quality != item.quality) {
							log.error(
								`切换画质失败，请求到的画质和切换的画质不同，切换的: ${item.quality}，请求到的: ${quality}`
							);
							BilibiliPlayerToast.toast("切换画质失败，画质不同");
							return;
						}
						let url = videoInfo.durl[0].url;
						// 请求到的和切换的画质相同，判定为请求成功
						if (
							playerPromise.video &&
							playerPromise.video instanceof HTMLVideoElement
						) {
							// 设置视频地址
							playerPromise.video.src = url;
							setTimeout(() => {
								// 执行播放，不然页面会处于缓冲中...
								playerPromise.video.play();
							}, 500);
							log.success(`已成功切换至${item.text}`);
							BilibiliPlayerToast.toast(`已成功切换至${item.text}`);
							BilibiliPlayer.$data.videoQuality.forEach((globalQualityItem) => {
								if (globalQualityItem.quality == item.quality) {
									globalQualityItem.isActive = true;
								} else {
									globalQualityItem.isActive = false;
								}
							});
							this.$mPlayerRight.clearAllActive();
							this.$mPlayerRight.switchActive($mplayerItem);
						} else {
							log.error("切换画质失败，未获取到video");
							BilibiliPlayerToast.toast("切换画质失败，未获取到video");
						}

						// 已成功切换至${item.text}
						this.$mPlayerRight.hideMPlayerRight();
					});
					this.$el.$mplayerRight.appendChild($mplayerItem);
				});

				if ($isActive) {
					// 选中
					this.$mPlayerRight.switchActive($isActive);
					// 居中
					($isActive as HTMLDivElement).scrollIntoView({
						block: "center",
					});
				}
				this.$mPlayerRight.showMPlayerRight();
			},
			{
				capture: true,
			}
		);
	},
};
export const BilibiliPlayer = {
	/** 获取player对象 */
	get player() {
		return unsafeWindow.player;
	},
	$player: {
		/** 获取player的异步结果 */
		async playerPromise() {
			await utils.waitPropertyByInterval(
				unsafeWindow,
				() => {
					return (
						typeof BilibiliPlayer.player === "object" &&
						typeof BilibiliPlayer.player?.playerPromise === "object" &&
						BilibiliPlayer.player?.playerPromise != null
					);
				},
				250,
				10000
			);
			let playerPromise = await BilibiliPlayer.player!.playerPromise;
			return playerPromise;
		},
		/** 将番剧页面的h5 player转为player对象 */
		parseBiliH5PlayerToPlayer($h5Player: any) {
			let $player = $h5Player.player;
			let options = $h5Player.options;
			let player: Partial<Player> = {
				container: $player["elem"],
				config: options,
				danmaku: $player["danmaku"],
				video: $player["video"],
				videoQuality: options["qn"],
				// @ts-ignore
				VideoInfo: {
					avid: options["aid"],
					bvid: options["bvid"],
					cid: options["cid"],
					video_type: options["video_type"],
				},
			};
			let winPlayer: Partial<Window["player"]> = {
				playerPromise: new Promise((resolve) => {
					// @ts-ignore
					resolve(player);
				}),
			};
			// @ts-ignore
			unsafeWindow.player = winPlayer;
		},
	},
	$data: {
		/** 视频清晰度信息 */
		videoQuality: <
			{
				/** 显示的文字 */
				text: string;
				/** 画质值 */
				quality: number;
				/** 当前播放的视频画质是否是这个 */
				isActive: boolean;
			}[]
		>[],
	},
	init() {
		this.$data.videoQuality = [];
		BilibiliDanmaku.init();
		this.setVideoSpeed(1);
		BilibiliPlayerUI.init();
		this.generateVideoInfo();
	},
	/**
	 * 设置视频播放倍速
	 * @param value 倍速值
	 */
	async setVideoSpeed(value: number) {
		return new Promise(async (resolve, reject) => {
			try {
				let playerPromise = await this.$player.playerPromise();
				await utils.waitPropertyByInterval(
					async () => {
						playerPromise = await BilibiliPlayer.$player.playerPromise();
						return playerPromise;
					},
					() => {
						return (
							typeof playerPromise.video != null &&
							playerPromise.video instanceof HTMLVideoElement
						);
					},
					250,
					10000
				);
				playerPromise.video.playbackRate = value;
				log.success(`设置视频播放倍速: ${value}`);
				// 更新一下弹幕配置的倍速
				// 因为不是响应式的
				let config = await BilibiliDanmaku.DanmakuCoreConfig();
				config.videoSpeed = value;
				log.success(`设置弹幕配置的视频播放倍速: ${value}`);
				resolve(true);
			} catch (error) {
				reject(error);
			}
		});
	},
	/**
	 * 获取视频播放倍速
	 */
	async getVideoPlayBackRate(): Promise<number> {
		return new Promise(async (resolve, reject) => {
			try {
				let playerPromise = await this.$player.playerPromise();
				await utils.waitPropertyByInterval(
					async () => {
						playerPromise = await BilibiliPlayer.$player.playerPromise();
						return playerPromise;
					},
					() => {
						return (
							typeof playerPromise.video != null &&
							playerPromise.video instanceof HTMLVideoElement
						);
					},
					250,
					10000
				);
				resolve(playerPromise.video.playbackRate);
			} catch (error) {
				reject(error);
			}
		});
	},
	/**
	 * 根据avid或者bvid获取视频的播放地址信息
	 *
	 * 一般用来给清晰度按钮使用
	 */
	async generateVideoInfo() {
		let playerPromise = await this.$player.playerPromise();
		let bvid = playerPromise.config.bvid;
		let cid = playerPromise.config.cid;
		if (!bvid) {
			log.error("获取bvid失败");
			return;
		}
		let videoInfo = await BilibiliApi_Video.playUrl({
			bvid: bvid,
			cid: cid,
		});
		if (!videoInfo) {
			return;
		}
		log.success(["成功获取当前视频的具体信息", videoInfo]);
		// 当前请求获取到的画质
		// 那么durl列表中（一般只有一个）的链接就是当前画质的链接
		let quality = videoInfo.quality;
		if (
			videoInfo.durl == null ||
			(Array.isArray(videoInfo.durl) && !videoInfo.durl.length)
		) {
			log.error("意外情况，获取到的视频地址信息是空的");
			return;
		}
		// 视频地址
		let url = videoInfo.durl[0].url;
		// 当前视频支持的画质，不过这里的话最高只能解锁720p
		// 也就是quality最大值是64
		let support_formats = videoInfo.support_formats;
		this.$data.videoQuality = support_formats
			.map((item) => {
				if (item.quality <= BilibiliVideoPlayUrlQN["720P 高清"]) {
					return {
						text: item.new_description,
						quality: item.quality,
						isActive: false,
					};
				}
			})
			.filter((item) => item != null);
	},
};
