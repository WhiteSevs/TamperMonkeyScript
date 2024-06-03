import "./Bilibili.css";
import BilibiliBeautifyCSS from "./BilibiliBeautify.css?raw";
import { BilibiliRouter } from "@/router/BilibiliRouter";
import { BilibiliVideo } from "./video/BilibiliVideo";
import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliBangumi } from "./bangumi/BilibiliBangumi";
import { BilibiliSearch } from "./search/BilibiliSearch";
import { BilibiliLive } from "./live/BilibiliLive";
import { BilibiliOpus } from "./opus/BilibiliOpus";
import { BilibiliTopicDetail } from "./topic-detail/BilibiliTopicDetail";
import { BilibiliDynamic } from "./dynamic/BilibiliDynamic";
import { BilibiliHook } from "@/hook/BilibiliHook";
import { BilibiliHead } from "./head/BilibiliHead";
import { GM_addStyle } from "ViteGM";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";
import { BilibiliUtils } from "@/utils/BilibiliUtils";

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
		PopsPanel.execMenuOnce("bili-head-beautify", () => {
			log.info("添加美化CSS");
			GM_addStyle(BilibiliBeautifyCSS);
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
		} else if (BilibiliRouter.isHead()) {
			log.info("Router: 首页之类的");
			BilibiliHead.init();
		} else {
			log.error("该Router暂未适配，可能是首页之类：" + window.location.href);
		}
	},
	/**
	 * 设置登录
	 *
	 * + $store.state.common.noCallApp
	 * + $store.state.common.userInfo.isLogin
	 * + $store.state.loginInfo.isLogin
	 */
	setLogin() {
		utils.waitNode<HTMLDivElement>("#app").then(($app) => {
			BilibiliUtils.waitVuePropToSet($app, [
				{
					msg: "设置参数 $store.state.common.noCallApp",
					check(vueObj: Vue2Context) {
						return (
							typeof vueObj?.$store?.state?.common?.noCallApp === "boolean"
						);
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数 $store.state.common.noCallApp=true");
						vueObj.$store.state.common.noCallApp = true;
					},
				},
				{
					msg: "设置参数 $store.state.common.userInfo.isLogin",
					check(vueObj: Vue2Context) {
						return (
							typeof vueObj?.$store?.state?.common?.userInfo?.isLogin ===
							"boolean"
						);
					},
					set(vueObj: Vue2Context) {
						log.success(
							"成功设置参数 $store.state.common.userInfo.isLogin=true"
						);
						vueObj.$store.state.common.userInfo.isLogin = true;
					},
				},
				{
					msg: "设置参数 $store.state.loginInfo.isLogin",
					check(vueObj: Vue2Context) {
						return (
							typeof vueObj?.$store?.state?.loginInfo?.isLogin === "boolean"
						);
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数 $store.state.loginInfo.isLogin=true");
						vueObj.$store.state.loginInfo.isLogin = true;
					},
				},
			]);
		});
	},
	/**
	 * 设置为客户端(不确定是否有用)
	 *
	 * + $store.state.video.isClient
	 * + $store.state.opus.isClient
	 * + $store.state.playlist.isClient
	 * + $store.state.ver.bili
	 * + $store.state.ver.biliVer 2333333
	 */
	setIsClient() {
		utils.waitNode<HTMLDivElement>("#app").then(($app) => {
			BilibiliUtils.waitVuePropToSet($app, [
				{
					msg: "设置参数 $store.state.video.isClient",
					check(vueObj: Vue2Context) {
						return (
							typeof typeof vueObj?.$store?.state?.video?.isClient === "boolean"
						);
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数 $store.state.video.isClient=true");
						vueObj.$store.state.video.isClient = true;
					},
				},
				{
					msg: "设置参数 $store.state.opus.isClient=true",
					check(vueObj: Vue2Context) {
						return typeof vueObj?.$store?.state?.opus?.isClient === "boolean";
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数 $store.state.opus.isClient");
						vueObj.$store.state.opus.isClient = true;
					},
				},
				{
					msg: "设置参数  $store.state.playlist.isClient",
					check(vueObj: Vue2Context) {
						return (
							typeof vueObj?.$store?.state?.playlist?.isClient === "boolean"
						);
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数  $store.state.playlist.isClient=true");
						vueObj.$store.state.playlist.isClient = true;
					},
				},
				{
					msg: "设置参数  $store.state.ver.bili",
					check(vueObj: Vue2Context) {
						return typeof vueObj?.$store?.state?.ver?.bili === "boolean";
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数  $store.state.ver.bili=true");
						vueObj.$store.state.ver.bili = true;
					},
				},
				{
					msg: "设置参数  $store.state.ver.biliVer",
					check(vueObj: Vue2Context) {
						return typeof vueObj?.$store?.state?.ver?.biliVer === "number";
					},
					set(vueObj: Vue2Context) {
						log.success("成功设置参数  $store.state.ver.biliVer=2333333");
						vueObj.$store.state.ver.biliVer = 2333333;
					},
				},
			]);
		});
	},
	/**
	 * 设置为微应用(可以看评论且视频稿件变大)
	 *
	 * + __vue__.$store.state.common.tinyApp `true`
	 */
	setTinyApp() {
		utils.waitNode<HTMLDivElement>("#app").then(($app: any) => {
			log.info("设置tinyApp");
			let check = function (vueObj: any) {
				return typeof vueObj?.$store?.state?.common?.tinyApp === "boolean";
			};
			utils.waitVueByInterval($app, check, 250, 10000).then(() => {
				let vueObj = BilibiliUtils.getVue($app);
				if (check(vueObj)) {
					vueObj.$store.state.common.tinyApp = true;
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
