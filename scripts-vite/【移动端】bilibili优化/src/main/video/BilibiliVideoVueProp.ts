import { BilibiliData } from "@/data/BlibiliData";
import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { unsafeWindow } from "ViteGM";
import { BilibiliPlayer, BilibiliPlayerUI } from "../BilibiliPlayer";
import { BilibiliDanmaku } from "../BilibiliDanmaku";

export const BilibiliVideoVueProp = {
	$data: {
		isInitPlayer: false,
		isUnlockUpower: false,
	},
	init() {
		PopsPanel.execMenu("bili-video-initPlayer", () => {
			this.initPlayer();
		});
		PopsPanel.execMenu("bili-video-setVideoPlayer", () => {
			this.setVideoPlayer();
		});
		PopsPanel.execMenu("bili-video-unlockUpower", () => {
			this.unlockUpower();
		});
	},
	/**
	 * 设置了某些vue属性后，会导致视频不出现播放按钮
	 */
	initPlayer() {
		if (this.$data.isInitPlayer) {
			return;
		}
		this.$data.isInitPlayer = true;
		let that = this;
		utils
			.waitNode<HTMLDivElement>("#bilibiliPlayer", 3000)
			.then(async ($bilibiliPlayer) => {
				if (!$bilibiliPlayer) {
					/* 该元素不存在，可能不是/video */
					that.$data.isInitPlayer = false;
					return;
				}
				await utils.sleep(300);
				let playerClassName = "m-video-player";
				BilibiliUtils.waitVuePropToSet("." + playerClassName, [
					{
						msg: "等待设置参数 fullScreenCallApp",
						check(vueObj) {
							return typeof vueObj?.fullScreenCallApp === "boolean";
						},
						set(vueObj) {
							vueObj.fullScreenCallApp = false;
							log.success("成功设置参数 fullScreenCallApp=false");
						},
					},
					{
						msg: "等待设置参数 gameMode",
						check(vueObj) {
							return typeof vueObj?.gameMode === "boolean";
						},
						set(vueObj) {
							vueObj.gameMode = true;
							log.success("成功设置参数 gameMode=true");
						},
					},
					{
						msg: "等待获取函数 initPlayer()",
						check(vueObj) {
							return typeof vueObj?.initPlayer === "function";
						},
						set(vueObj) {
							that.$data.isInitPlayer = false;
							function intervalCheck() {
								let intervalId: number | undefined | NodeJS.Timeout = void 0;
								let timeoutId: number | undefined | NodeJS.Timeout = void 0;
								let checkCount = 1;
								let isSuccess = false;
								let lockFunc = new utils.LockFunction(async () => {
									let $playerVideo = document.querySelector<HTMLVideoElement>(
										"#bilibiliPlayer video"
									);
									let $posterImg = document.querySelector<HTMLImageElement>(
										"#bilibiliPlayer img.mplayer-poster"
									);
									if ($playerVideo && $posterImg && $posterImg.src !== "") {
										isSuccess = true;
										BilibiliPlayer!.player?.off("restart_call_app");
										BilibiliPlayer!.player?.off("force_call_app_show");
										log.success("<video>标签和视频封面图已成功初始化");
										await utils.sleep(1000);
										PopsPanel.execMenu(
											["bili-coverQuality", "bili-rememberUserChooseQuality"],
											() => {
												BilibiliPlayerUI.coverQuality(true);
											}
										);
										BilibiliPlayer.init();
										return;
									}
									if ((unsafeWindow as any).BPlayerMobile == null) {
										/* 未加载player播放器，主动引入script标签 */
										log.error("未加载player播放器，主动引入script标签");
										await BilibiliUtils.loadScript(
											"https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2876316"
										);
										await utils.sleep(300);
									}
									try {
										vueObj.initPlayer(true);
									} catch (error) {
										log.error(error);
										try {
											log.info(`强制重载player播放器失败，使用普通调用`);
											vueObj.initPlayer();
										} catch (error) {
											log.error(error);
										}
									}
									log.success(
										"第 " +
											checkCount +
											" 次未检测到视频，调用初始化视频函数 initPlayer()"
									);
									await utils.sleep(300);
									BilibiliPlayer!.player?.off("restart_call_app");
									BilibiliPlayer!.player?.off("force_call_app_show");
									checkCount++;
								});
								intervalId = setInterval(async () => {
									await lockFunc.run();
									if (isSuccess) {
										clearTimeout(timeoutId);
										clearInterval(intervalId);
									}
								}, 600);
								timeoutId = setTimeout(() => {
									log.warn("检测视频超时5s，取消检测");
									clearInterval(intervalId);
								}, 5000);
							}
							intervalCheck();
						},
					},
				]);
			});
	},

	/**
	 * + __vue__.info.is_upower_exclusive=false
	 * + __vue__.info.is_upower_play=false
	 * + __vue__.info.is_upower_preview=false
	 */
	unlockUpower() {
		BilibiliUtils.waitVuePropToSet(BilibiliData.className.video, [
			{
				msg: "设置属性 __vue__.info.is_upower_exclusive",
				check(vueObj) {
					return typeof vueObj?.info?.is_upower_exclusive === "boolean";
				},
				set(vueObj) {
					vueObj.info.is_upower_exclusive = false;
					log.success("成功设置属性  __vue__.info.is_upower_exclusive=false");
				},
			},
			{
				msg: "设置属性 __vue__.info.is_upower_play",
				check(vueObj) {
					return typeof vueObj?.info?.is_upower_play === "boolean";
				},
				set(vueObj) {
					vueObj.info.is_upower_play = false;
					log.success("成功设置属性  __vue__.info.is_upower_play=false");
				},
			},
			{
				msg: "设置属性 __vue__.info.is_upower_preview",
				check(vueObj) {
					return typeof vueObj?.info?.is_upower_preview === "boolean";
				},
				set(vueObj) {
					vueObj.info.is_upower_preview = false;
					BilibiliVideoVueProp.initPlayer();
					log.success("成功设置属性  __vue__.info.is_upower_preview=false");
				},
			},
		]);
	},

	/**
	 * 修改视频播放器设置参数
	 *
	 * + __vue__.playBtnNoOpenApp: `true`
	 * + __vue__.playBtnOpenApp: `false`
	 * + __vue__.coverOpenApp: `false`
	 */
	setVideoPlayer() {
		BilibiliUtils.waitVuePropToSet(
			BilibiliData.className.video + " .m-video-player",
			[
				{
					msg: "设置参数 playBtnNoOpenApp",
					check(vueObj) {
						return typeof vueObj.playBtnNoOpenApp === "boolean";
					},
					set(vueObj) {
						vueObj.playBtnNoOpenApp = true;
						log.success("成功设置参数 playBtnNoOpenApp=true");
					},
				},
				{
					msg: "设置参数 playBtnOpenApp",
					check(vueObj) {
						return typeof vueObj.playBtnOpenApp === "boolean";
					},
					set(vueObj) {
						vueObj.playBtnOpenApp = false;
						log.success("成功设置参数 playBtnOpenApp=false");
					},
				},
				{
					msg: "设置参数 coverOpenApp",
					check(vueObj) {
						return typeof vueObj.coverOpenApp === "boolean";
					},
					set(vueObj) {
						vueObj.coverOpenApp = false;
						log.success("成功设置参数 coverOpenApp=false");
					},
				},
			]
		);
	},
};
