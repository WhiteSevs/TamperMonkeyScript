import "./Bilibili.css";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import { BilibiliVideo } from "./video/BilibiliVideo";
import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliBangumi } from "./bangumi/BilibiliBangumi";
import { BilibiliSearch } from "./search/BilibiliSearch";
import { BilibiliLive } from "./live/BilibiliLive";
import { GM_addStyle } from "ViteGM";
import { BilibiliOpus } from "./opus/BilibiliOpus";
import { BilibiliTopicDetail } from "./topic-detail/BilibiliTopicDetail";
import { BilibiliDynamic } from "./dynamic/BilibiliDynamic";
import { BilibiliHook } from "@/hook/BilibiliHook";

const Bilibili = {
	init() {
		PopsPanel.execMenu("bili-setLogin", () => {
			this.setLogin();
		});
		PopsPanel.execMenu("bili-setIsClient", () => {
			this.setIsClient();
		});
		PopsPanel.execMenu("bili-setTinyApp", () => {
			this.setTinyApp();
		});
		PopsPanel.execMenuOnce("bili-listenRouterChange", () => {
			this.listenRouterChange();
		});
		PopsPanel.execMenuOnce("bili-hookSetTimeout_autoOpenApp", () => {
			log.info("hook  window.setTimeout autoOpenApp");
			BilibiliHook.setTimeout("autoOpenApp");
		});
		PopsPanel.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp", () => {
			log.info("覆盖元素.launch-app-btn上的openApp");
			BilibiliHook.overRideLaunchAppBtn_Vue_openApp();
		});
		if (BilibiliRouter.isVideo()) {
			log.info("Router: 视频稿件");
			BilibiliVideo.init();
		} else if (BilibiliRouter.isOpus()) {
			log.info("Router: 专栏稿件");
			BilibiliOpus.init();
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
		} else {
			log.error("该Router暂未适配");
		}
	},
	/**
	 * 设置登录
	 *
	 * + __vue__.$store.state.common.noCallApp: `true`
	 * + __vue__.$store.state.common.userInfo.isLogin: `true`
	 */
	setLogin() {
		utils.waitNode<HTMLDivElement>("#app").then(($app) => {
			let check = function (__vue__: any) {
				return (
					__vue__ != null &&
					typeof __vue__?.$store?.state?.common?.noCallApp === "boolean" &&
					typeof __vue__?.$store?.state?.common?.userInfo?.isLogin === "boolean"
				);
			};
			utils.waitVueByInterval($app, check, 250, 10000).then(() => {
				if (check(($app as any).__vue__)) {
					log.success("成功设置参数 noCallApp isLogin");
					($app as any).__vue__.$store.state.common.noCallApp = true;
					($app as any).__vue__.$store.state.common.userInfo.isLogin = true;
				}
			});
		});
	},
	/**
	 * 设置为客户端(不确定是否有用)
	 *
	 * + __vue__.$store.state.video.isClient: `true`
	 * + __vue__.$store.state.opus.isClient: `true`
	 * + __vue__.$store.state.playlist.isClient: `true`
	 */
	setIsClient() {
		utils.waitNode<HTMLDivElement>("#app").then(($app) => {
			let check = function (__vue__: any) {
				return (
					__vue__ != null &&
					typeof __vue__?.$store?.state?.video?.isClient === "boolean" &&
					typeof __vue__?.$store?.state?.opus?.isClient === "boolean" &&
					typeof __vue__?.$store?.state?.playlist?.isClient === "boolean"
				);
			};
			utils.waitVueByInterval($app, check, 250, 10000).then(() => {
				if (check(($app as any).__vue__)) {
					($app as any).__vue__.$store.state.video.isClient = true;
					($app as any).__vue__.$store.state.opus.isClient = true;
					($app as any).__vue__.$store.state.playlist.isClient = true;
				}
			});
		});
	},
	/**
	 * 设置为微应用(可以看评论且视频稿件变大)
	 *
	 * + __vue__.$store.state.common.tinyApp `true`
	 */
	setTinyApp() {
		utils.waitNode<HTMLDivElement>("#app").then(($app: any) => {
			let check = function (__vue__: any) {
				return typeof __vue__?.$store?.state?.common?.tinyApp === "boolean";
			};
			utils.waitVueByInterval($app, check, 250, 10000).then(() => {
				if (check($app.__vue__)) {
					$app.__vue__.$store.state.common.tinyApp = true;
					log.success("成功设置参数 tinyApp");
					setTimeout(() => {
						if (!document.querySelector("#bilibiliPlayer video")) {
							let checkInitPlayer = function (__vue__: any) {
								return typeof __vue__?.initPlayer === "function";
							};
							utils
								.waitNode<HTMLDivElement>(".m-video-player")
								.then(($videoPlayer: any) => {
									utils
										.waitVueByInterval(
											$videoPlayer,
											checkInitPlayer,
											250,
											10000
										)
										.then(() => {
											if (checkInitPlayer($videoPlayer.__vue__)) {
												log.success("成功调用函数 initPlayer()");
												$videoPlayer.__vue__.initPlayer();
											}
										});
								});
						}
					}, 2000);
				}
			});
		});
		if (BilibiliRouter.isVideo()) {
			PopsPanel.onceExec(
				"bili-video-repair-bottom-recommend-video-margin-top",
				() => {
					GM_addStyle(`
                /* 修复一下底部推荐视频的margin-top */
                .m-video-bottom-tab .v-switcher__content--multi{
                    margin-top: 34vmin;
                }
                `);
				}
			);
		}
	},
	/**
	 * 监听路由变化
	 */
	listenRouterChange() {
		utils.waitNode<HTMLDivElement>("#app").then(($app: any) => {
			let check = function (__vue__: any) {
				return typeof __vue__?.$router?.afterEach === "function";
			};
			utils.waitVueByInterval($app, check).then(() => {
				if (check($app.__vue__)) {
					log.success("成功设置监听路由变化");
					$app.__vue__.$router.afterEach((to: any, from: any) => {
						log.success(["路由变化", [to, from]]);
						Bilibili.init();
					});
				}
			});
		});
	},
};

export { Bilibili };
