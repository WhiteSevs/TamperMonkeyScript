import { addStyle, DOMUtils, httpx, log, Qmsg, utils } from "@/env";
import { GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { BilibiliDanmaku } from "./BilibiliDanmaku";
import { PopsPanel } from "@/setting/setting";
import {
	BilibiliVideoPlayUrlQN,
	BilibiliVideoPlayUrlQN_Value,
} from "@/hook/BilibiliNetworkHook";
import { BilibiliVideoApi } from "@/api/BilibiliVideoApi";
import { BilibiliPlayerToast } from "./BilibiliPlayerToast";
import { BilibiliVideo } from "../main/video/BilibiliVideo";

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
		/** 被访问状态的className */
		__activeClassName: "gf-mplayer-right-item-active",
		/** 每一个项的className */
		__itemClassName: "gf-mplayer-right-item",
		/** 显示右侧菜单的className */
		__showMPlayerRightClassName: "gf-mplayer-right-show",
		/** 显示右侧菜单 */
		showMPlayerRight(delayTime = 50) {
			if (delayTime > 0) {
				setTimeout(() => {
					this.showMPlayerRight(0);
				}, 50);
				return;
			}
			BilibiliPlayerUI.$el.$mplayerRight.classList.add(
				this.__showMPlayerRightClassName
			);
		},
		/** 隐藏右侧菜单 */
		hideMPlayerRight() {
			BilibiliPlayerUI.$el.$mplayerRight.classList.remove(
				this.__showMPlayerRightClassName
			);
		},
		/** 清空右侧菜单 */
		clearMPlayerRight() {
			BilibiliPlayerUI.$el.$mplayerRight.innerHTML = "";
		},
		/** 设置某个项访问状态 */
		setActive($el: HTMLElement) {
			$el.classList.add(this.__activeClassName);
		},
		/** 切换某个项访问状态，并清空其它的访问状态 */
		switchActive($el: HTMLElement) {
			this.clearAllActive();
			this.setActive($el);
		},
		/** 判断该项是否是访问状态 */
		isActive($el: HTMLElement) {
			return $el.classList.contains(this.__activeClassName);
		},
		/** 清空某个项访问状态 */
		clearActive($el: HTMLElement) {
			$el.classList.remove(this.__activeClassName);
		},
		/** 清空所有项的访问状态 */
		clearAllActive() {
			BilibiliPlayerUI.$el.$mplayerRight
				.querySelectorAll("." + this.__activeClassName)
				.forEach((item) => item.classList.remove(this.__activeClassName));
		},
		/** 创建一个项 */
		createMPlayerItem(text?: string) {
			return DOMUtils.createElement("div", {
				className: this.__itemClassName,
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
				--mplayer-right-deviation: var(--mplayer-right-w);
				background: #181212;
				width: var(--mplayer-right-w) !important;
				opacity: 0.9 !important;
				visibility: visible !important;
				color: #ffffff;
				-webkit-transform: translateX(8em) !important;
				transform: translateX(8em) !important;
				z-index: 1000;
				overflow-y: auto;
				display: block;
				align-content: center;
				position: absolute;
				transition: transform .4s;
				top: 0;
				bottom: 0;
				right: 0;
			}
			.gf-mplayer-right-show{
				-webkit-transform: translateX(0) !important;
				transform: translateX(0) !important;
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
		PopsPanel.onceExec("bili-repairPlayerToastCloseBtn", () => {
			this.repairPlayerToastCloseBtn();
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
	 * @param initChooseQuality 是否初始化选择清晰度
	 */
	coverQuality(initChooseQuality?: boolean) {
		const userChooseVideoQuality_KEY = "userChooseVideoQuality";

		/**
		 * 选择某个清晰度的点击事件
		 * @param event
		 */
		let qualityItemClickEvent = async (
			itemData: {
				text: string;
				quality: number;
				isActive: boolean;
			},
			$mplayerItem?: HTMLDivElement
		) => {
			if ($mplayerItem && this.$mPlayerRight.isActive($mplayerItem)) {
				log.info(`该项已选中，无需重复点击`);
				return;
			}
			BilibiliPlayerToast.toast("切换中，请稍后");
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			let bvid = playerPromise.config.bvid;
			let cid = playerPromise.config.cid;
			if (!bvid) {
				BilibiliPlayerToast.toast("获取bvid失败");
				return;
			}
			let videoInfo = await BilibiliVideoApi.playUrl(
				{
					bvid: bvid,
					cid: cid,
					qn: itemData.quality,
					setPlatformHTML5: true,
				},
				{
					__t: Date.now(),
				}
			);
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
			if (quality != itemData.quality) {
				log.error(
					`切换画质失败，请求到的画质和切换的画质不同，切换的: ${itemData.quality}，请求到的: ${quality}`
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
				let setVideoUrlStatus = await BilibiliPlayer.setVideoUrl(url);
				if (setVideoUrlStatus.success) {
					log.success(`已成功切换至 ${itemData.text}`);
					BilibiliPlayer.$data.videoQuality.forEach((globalQualityItem) => {
						if (globalQualityItem.quality == itemData.quality) {
							globalQualityItem.isActive = true;
						} else {
							globalQualityItem.isActive = false;
						}
					});
					if ($mplayerItem) {
						this.$mPlayerRight.switchActive($mplayerItem);
					}
					BilibiliPlayerToast.toast(`已成功切换至 ${itemData.text}`);
					GM_setValue(userChooseVideoQuality_KEY, quality);
					// 设置一下弹幕参数
					BilibiliDanmaku.init();
				} else {
					log.error("切换画质失败，未成功设置video的src");
					BilibiliPlayerToast.toast("切换画质失败，" + setVideoUrlStatus.msg);
				}
			} else {
				log.error("切换画质失败，未获取到video");
				BilibiliPlayerToast.toast("切换画质失败，未获取到video");
			}

			// 已成功切换至${item.text}
			this.$mPlayerRight.hideMPlayerRight();
		};
		/**
		 * 清晰度按钮的点击事件
		 * @param event
		 */
		let qualityBtnEvent = async (event: MouseEvent | PointerEvent) => {
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
				// 已请求到清晰度信息
				qualityInfoList = [...BilibiliPlayer.$data.videoQuality];
			}

			console.log(`获取当前视频的清晰度: `, qualityInfoList);
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
					qualityItemClickEvent(item, $mplayerItem);
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
			} else {
				// 意外情况，没有一个选中的清晰度
				log.warn(`意外情况，没有一个选中的清晰度`);
			}
			this.$mPlayerRight.showMPlayerRight();
		};

		if (initChooseQuality) {
			/** 用户选择的清晰度 */
			let userChooseVideoQuality = GM_getValue<number>(
				userChooseVideoQuality_KEY
			);
			if (userChooseVideoQuality) {
				// 主动切换
				let findIndex = BilibiliPlayer.$data.videoQuality.findIndex(
					(item) => item.quality == userChooseVideoQuality && !item.isActive
				);
				if (findIndex != -1) {
					qualityItemClickEvent({
						text: BilibiliVideoPlayUrlQN_Value[userChooseVideoQuality],
						quality: userChooseVideoQuality,
						isActive: true,
					});
				}
			}
		} else {
			DOMUtils.on(
				document,
				"click",
				".mplayer-control-btn-quality",
				async (event) => {
					utils.preventEvent(event);
					qualityBtnEvent(event);
				},
				{
					capture: true,
				}
			);
		}
	},
	/**
	 * 修复toast的关闭按钮点击无效的问题
	 */
	repairPlayerToastCloseBtn() {
		DOMUtils.on(
			document,
			"click",
			".mplayer-toast.mplayer-show .mplayer-toast-close",
			(event) => {
				let $mplayerShow = (event.target as HTMLDivElement).closest(
					".mplayer-show"
				)!;
				$mplayerShow.classList.remove("mplayer-show");
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
		/**
		 * 劫持网络请求解锁的值
		 */
		hookUnlockQuality: 0,
	},
	init() {
		// 初始化清空值
		this.$data.videoQuality = [];
		this.$data.hookUnlockQuality = 0;

		this.setVideoSpeed(1);
		BilibiliPlayerUI.init();
		this.initPlayerVideoInfo();
		PopsPanel.execMenu("bili-video-playerAutoPlayVideo", () => {
			this.autoPlay();
		});
		PopsPanel.execMenu("bili-video-playerAutoPlayVideoCheckMute", () => {
			this.listenVideoMuteState();
		});
		this.mutatuinCloseOriginToast();
		setTimeout(() => {
			// 延迟一下再覆盖弹幕设置
			BilibiliDanmaku.init();
		}, 500);
	},
	/**
	 * 对视频画质清晰度初始化
	 */
	initVideoQualityInfo(quality: number) {
		this.$data.hookUnlockQuality = quality;
		// 设置当前的画质
		this.$data.videoQuality.forEach((item) => {
			if (item.quality == quality) {
				item.isActive = true;
			}
		});
	},
	/**
	 * 监听视频静音状态
	 *
	 * 如果静音了，toast一下
	 */
	async listenVideoMuteState() {
		let playerPromise = await this.$player.playerPromise();
		let $video = playerPromise.video;
		const attrKey = "data-is-listen-mute";
		if (!($video instanceof HTMLVideoElement)) {
			log.error("player.playerPromise中video不是HTMLVideoElement");
			return;
		}
		if ($video.hasAttribute(attrKey)) {
			return;
		}
		$video.setAttribute(attrKey, "true");
		log.success(`添加video的play事件监听，视频播放检测静音状态`);

		/**
		 * 视频静音检测
		 */
		function checkVideoMuted() {
			let isMute = $video.muted;
			if ($video.muted) {
				// 当前静音状态
				log.warn(`当前静音状态，Qmsg提示让用户自行选择是否取消静音`);
				let $toast = BilibiliPlayerToast.toast({
					text: "当前视频为静音状态",
					jumpText: "取消静音",
					timeout: 8000,
					showCloseBtn: true,
					jumpClickCallback(event) {
						log.info(`设置静音状态：${!isMute}`);
						BilibiliPlayer.player?.setMute(!isMute);
						$toast.close();
					},
				});
			} else {
				// 非静音
				log.info(`当前视频非静音状态`);
			}
		}
		DOMUtils.on(
			$video,
			"play",
			async (event) => {
				await utils.sleep(500);
				checkVideoMuted();
				$video.removeAttribute(attrKey);
			},
			{
				once: true,
			}
		);
		checkVideoMuted();
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
	 * 自动播放
	 */
	async autoPlay(): Promise<void> {
		return new Promise(async (resolve, reject) => {
			try {
				let playerPromise = await this.$player.playerPromise();
				await utils.sleep(500);
				log.success("player：自动播放视频");
				BilibiliPlayer.player?.play();
				await utils.sleep(500);
				PopsPanel.execMenu("bili-video-playerAutoPlayVideoFullScreen", () => {
					// 自动进入全屏
					BilibiliVideo.enterVideoFullScreen();
				});
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
	 * 根据avid或者bvid初始化视频的播放地址信息
	 *
	 * 一般用来给清晰度按钮使用
	 */
	async initPlayerVideoInfo() {
		let playerPromise = await this.$player.playerPromise();
		let bvid = playerPromise.config.bvid;
		let cid = playerPromise.config.cid;
		if (!bvid) {
			log.error("获取bvid失败");
			return;
		}
		let videoInfo = await BilibiliVideoApi.playUrl({
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
		this.initVideoQualityInfo(quality);
	},
	/**
	 * 设置视频地址
	 * @param url 视频地址
	 * @returns
	 * + true 设置成功
	 * + false 设置失败
	 */
	async setVideoUrl(url: string): Promise<{
		success: boolean;
		msg: string;
	}> {
		try {
			let getResp = await httpx.head(url, {
				fetch: true,
				fetchInit: {
					credentials: "same-origin",
				},
				allowInterceptConfig: false,
			});
			if (!getResp.status) {
				return {
					success: false,
					msg: "测试视频地址连接失败，状态码：" + getResp.data.status,
				};
			}
			let playerPromise = await BilibiliPlayer.$player.playerPromise();
			if (
				playerPromise.video &&
				playerPromise.video instanceof HTMLVideoElement
			) {
				// 同步进度
				let originVideoTime = playerPromise.video.currentTime;
				playerPromise.video.src = url;
				playerPromise.video.currentTime = originVideoTime;
				await utils.sleep(500);
				// 执行播放，不然页面会处于缓冲中...
				try {
					playerPromise.video.play();
					if (playerPromise.video.paused) {
						// 意外暂停？play again
						playerPromise.video.play();
					}
				} catch (error) {
					// 非用户点击播放的情况下调用播放会报错
					// DOMException: play() can only be initiated by a user gesture.
					log.error(error);
				}
				return {
					success: true,
					msg: "设置成功",
				};
			} else {
				return {
					success: false,
					msg: "不存在video元素",
				};
			}
		} catch (error: any) {
			log.error(error);
			return {
				success: false,
				msg: error.toString(),
			};
		}
	},
	/**
	 * 观察器监听播放器的记忆你上次看到xx 跳转
	 * 不知道是什么问题它不会自动关闭，且点击跳转无法应
	 * 那我们主动关闭它
	 */
	mutatuinCloseOriginToast() {
		let mutationObserver = utils.mutationObserver(document.documentElement, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				document
					.querySelectorAll<HTMLDivElement>(
						`.mplayer-toast:not([data-from="gm"])`
					)
					.forEach(($ele) => {
						if ($ele.hasAttribute("data-is-delay-close")) {
							return;
						}
						if ($ele.textContent?.includes("记忆你上次看到")) {
							// 主动添加延迟关闭Toast
							$ele.setAttribute("data-is-delay-close", "true");
							setTimeout(() => {
								let $close = $ele.querySelector<HTMLElement>(
									".mplayer-toast-close"
								);
								if ($close) {
									$close.click();
								} else {
									$ele.remove();
								}
							}, 3000);
						}
					});
			},
		});
		setTimeout(() => {
			// 10s后关闭观察器
			mutationObserver.disconnect();
		}, 10000);
	},
};
