import "./block.css";
import BilibiliBeautifyCSS from "./BilibiliBeautify.css?raw";
import { BilibiliPCRouter, BilibiliRouter } from "@/router/BilibiliRouter";
import { BilibiliVideo } from "./video/BilibiliVideo";
import { addStyle, DOMUtils, log, Qmsg, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliBangumi } from "./bangumi/BilibiliBangumi";
import { BilibiliSearch } from "./search/BilibiliSearch";
import { BilibiliLive } from "./live/BilibiliLive";
import { BilibiliOpus } from "./opus/BilibiliOpus";
import { BilibiliTopicDetail } from "./topic-detail/BilibiliTopicDetail";
import { BilibiliDynamic } from "./dynamic/BilibiliDynamic";
import { BilibiliHook } from "@/hook/BilibiliHook";
import { BilibiliHead } from "./head/BilibiliHead";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { BilibiliVueProp } from "./BilibiliVueProp";
import { BilibiliReadMobile } from "./read/mobile/BilibiliReadMobile";
import { BilibiliNetworkHook } from "@/hook/BilibiliNetworkHook";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";
import { BilibiliPlayer } from "../player/BilibiliPlayer";
import "./common.css";
import { BilibiliSpace } from "./space/BilibiliSpace";
import { BilibiliUrlUtils } from "@/utils/BilibiliUrlUtils";
import { VueUtils } from "@/utils/VueUtils";

const Bilibili = {
	init() {
		BilibiliNetworkHook.init();
		BilibiliVueProp.init();
		PopsPanel.execMenuOnce("bili-allowCopy", () => {
			return addStyle(/*css*/ `
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`);
		});
		PopsPanel.onceExec("listenRouterChange", () => {
			this.listenRouterChange();
		});
		PopsPanel.execMenuOnce("bili-hookSetTimeout_autoOpenApp", () => {
			log.info("hook  window.setTimeout autoOpenApp");
			BilibiliHook.setTimeout("autoOpenApp");
			BilibiliHook.setTimeout("bilibili://");
		});
		PopsPanel.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp", () => {
			log.info("覆盖元素.launch-app-btn上的openApp");
			BilibiliHook.overRideLaunchAppBtn_Vue_openApp();
		});
		PopsPanel.execMenuOnce("bili-head-beautify", () => {
			log.info("添加美化CSS");
			addStyle(BilibiliBeautifyCSS);
		});

		if (BilibiliRouter.isVideo()) {
			log.info("Router: 视频稿件");
			BilibiliVideo.init();
		} else if (BilibiliRouter.isOpus()) {
			log.info("Router: 专栏稿件");
			BilibiliOpus.init();
		} else if (BilibiliPCRouter.isReadMobile()) {
			log.info("PC-Router: 专栏稿件");
			BilibiliReadMobile.init();
		} else if (BilibiliRouter.isDynamic()) {
			log.info("Router: 动态");
			BilibiliDynamic.init();
		} else if (BilibiliRouter.isBangumi()) {
			log.info("Router: 番剧");
			BilibiliBangumi.init();
		} else if (BilibiliRouter.isSearch()) {
			log.info("Router: 搜索");
			BilibiliSearch.init();
		} else if (BilibiliRouter.isLive()) {
			log.info("Router: 直播");
			BilibiliLive.init();
		} else if (BilibiliRouter.isTopicDetail()) {
			log.info("Router: 话题");
			BilibiliTopicDetail.init();
		} else if (BilibiliRouter.isHead()) {
			log.info("Router: 首页之类的");
			BilibiliHead.init();
		} else if (BilibiliRouter.isSpace()) {
			log.info("Router: 个人空间");
			BilibiliSpace.init();
		} else {
			log.error("该Router暂未适配，可能是首页之类：" + window.location.href);
		}

		DOMUtils.ready(() => {
			// 番剧页面没有player，而是BiliH5Player
			// 但是在.player-wrapper属性上
			// 需要点击播放才会有player属性生成
			if (BilibiliRouter.isBangumi()) {
				let isInitPlayer = false;
				VueUtils.waitVuePropToSet(
					() => document.querySelector<HTMLDivElement>(".player-wrapper"),
					[
						{
							msg: "等待获取.player-wrapper上的$0.__vue__.player.player.on_video_play",
							check(vueIns) {
								return (
									typeof vueIns?.player?.player?.on_video_play == "function"
								);
							},
							set(vueIns) {
								log.success(
									`成功覆盖.player-wrapper上的$0.__vue__.player.player.on_video_play`
								);
								let originFn = vueIns?.player?.player?.on_video_play;
								if (originFn.prototype.isHook) {
									log.warn("函数on_video_play已被hook，取消覆盖");
								}
								let on_video_play = function (
									this: any,
									$video: HTMLVideoElement
								) {
									if (!isInitPlayer) {
										isInitPlayer = true;
										BilibiliPlayer.$player.parseBiliH5PlayerToPlayer(
											vueIns.player
										);
										BilibiliPlayer.init();
									}
									return originFn.apply(this, arguments);
								};
								on_video_play.prototype.isHook = true;
								vueIns.player.player.on_video_play = on_video_play;
							},
						},
					]
				);
			} else if (BilibiliRouter.isVideo()) {
				// 视频页面
				BilibiliPlayer.init();
			}
		});
	},
	/**
	 * 监听路由变化
	 */
	listenRouterChange() {
		utils.waitNode<HTMLDivElement>("#app").then(($app: any) => {
			let check = function (vueObj: Vue2Context) {
				return typeof vueObj?.$router?.afterEach === "function";
			};
			utils.waitVueByInterval($app, check).then(() => {
				let vueObj = VueUtils.getVue($app);
				if (vueObj == null) {
					return;
				}
				if (check(vueObj)) {
					log.success("成功设置监听路由变化");
					$app.__vue__.$router.beforeEach(
						(
							to: Vue2Context["$route"],
							from: Vue2Context["$route"],
							next: Function
						) => {
							log.info([
								"路由变化 => 更新前",
								{
									to,
									from,
								},
							]);
							if (PopsPanel.getValue("bili-repairVueRouter404")) {
								if (to.name === "space") {
									// 修复空间跳转404
									window.location.href = to.fullPath;
									return;
								}
							}
							if (
								to.fullPath.startsWith("/video") &&
								from.fullPath.startsWith("/video") &&
								PopsPanel.getValue(
									"bili-video-forceThisPageToRefreshAndRedirect"
								)
							) {
								window.location.href = to.fullPath;
								return;
							}
							next();
						}
					);
					$app.__vue__.$router.afterEach(
						(to: Vue2Context["$route"], from: Vue2Context["$route"]) => {
							log.info([
								"路由变化 => 更新后",
								{
									to,
									from,
								},
							]);
							if (
								to["hash"] === "#/seeCommentReply" ||
								from["hash"] === "#/seeCommentReply"
							) {
								log.info("该路由变化判定为#/seeCommentReply，不重载");
								return;
							}
							PopsPanel.execMenu("bili-listenRouterChange", () => {
								Bilibili.init();
							});
						}
					);
				}
			});
		});
	},
	/**
	 * 重构tinyApp右上角的设置按钮图标，改为用户头像什么的
	 */
	reconfigurationTinyAppSettingButton() {
		addStyle(/*css*/ `
		.nav-bar .right{
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.gm-face{
			width: 6.4vmin;
			height: 6.4vmin;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
			margin-right: 3.2vmin;
			border-radius: 3.2vmin;
			overflow: hidden;
		}
		.gm-face-avatar{
			width: 100%;
			height: 100%;
			overflow: hidden;
		}
		.gm-face-avatar img{
			width: 100%;
			height: 100%;
			-o-object-fit: cover;
			object-fit: cover;
		}
		`);
		utils.waitNode(".nav-bar .icon-config", 10000).then(($iconConfig) => {
			if (!$iconConfig) {
				return;
			}
			$iconConfig.outerHTML = `
			<div class="gm-face">
				<div class="gm-face-avatar">
					<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
				</div>
			</div>
			`;
			/** 是否已登录 */
			let isLogin = false;
			/** 当前已登录账号的uid */
			let uid: null | string = null;
			/** 当前已登录账号的用户名 */
			let userName: null | string = null;
			let $gmFace = document.querySelector<HTMLDivElement>(".gm-face")!;
			let $img = $gmFace.querySelector<HTMLImageElement>("img")!;
			VueUtils.waitVuePropToSet("#app", [
				{
					check(vueIns) {
						return (
							typeof vueIns?.$store?.state?.common?.userInfo?.isLogin ===
							"boolean"
						);
					},
					set(vueIns) {
						isLogin = vueIns?.$store?.state?.common?.userInfo?.isLogin;
						if (isLogin) {
							uid = vueIns?.$store?.state?.common?.userInfo?.mid;
							if (uid == null) {
								log.warn(`当前是脚本设置的isLogin但其实未登录账号`);
								isLogin = false;
								return;
							}
							userName = vueIns?.$store?.state?.common?.userInfo?.uname;
							$img.src =
								vueIns?.$store?.state?.common?.userInfo?.face || $img.src;
						}
					},
				},
			]);
			DOMUtils.on($gmFace, "click", (event) => {
				utils.preventEvent(event);
				if (isLogin) {
					// 前往个人空间
					if (uid != null) {
						let url = BilibiliUrlUtils.getUserSpaceUrl(uid);
						BilibiliUtils.goToUrl(url, false);
					} else {
						Qmsg.error("获取用户id失败");
					}
				} else {
					// 前往登录
					BilibiliUtils.goToLogin(window.location.href);
				}
			});
		});
	},
};

export { Bilibili };
