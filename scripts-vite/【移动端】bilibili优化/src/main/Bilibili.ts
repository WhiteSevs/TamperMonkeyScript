import "./css/block.css";
import "./css/common.css";
import BilibiliBeautifyCSS from "./css/beautify.css?raw";
import { BilibiliPCRouter, BilibiliRouter } from "@/router/BilibiliRouter";
import { BilibiliVideo } from "./video/BilibiliVideo";
import { addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliBangumi } from "./bangumi/BilibiliBangumi";
import { BilibiliSearch } from "./search/BilibiliSearch";
import { BilibiliLive } from "./live/BilibiliLive";
import { BilibiliOpus } from "./opus/BilibiliOpus";
import { BilibiliTopicDetail } from "./topic-detail/BilibiliTopicDetail";
import { BilibiliDynamic } from "./dynamic/BilibiliDynamic";
import { BilibiliHook } from "@/hook/BilibiliHook";
import { BilibiliHead } from "./head/BilibiliHead";
import { BilibiliReadMobile } from "./read/mobile/BilibiliReadMobile";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { BilibiliSpace } from "./space/BilibiliSpace";
import { VueUtils } from "@/utils/VueUtils";
import { BilibiliVueProp } from "./BilibiliVueProp";
import { BilibiliComponentDetection } from "./BilibiliComponentDetection";

const Bilibili = {
	init() {
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
			// bnagumi的
			BilibiliHook.setTimeout("void 0 !== y && document[y]");
		});
		PopsPanel.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp", () => {
			log.info("覆盖元素.launch-app-btn上的openApp");
			BilibiliHook.overRideLaunchAppBtn_Vue_openApp();
		});
		PopsPanel.execMenuOnce("bili-cover-bili-open-app-open", () => {
			log.info(`覆盖元素bili-open-app上的opener.open`);
			BilibiliHook.overRideBiliOpenApp();
		});
		PopsPanel.execMenuOnce("bili-head-beautify", () => {
			log.info("添加美化CSS");
			return addStyle(BilibiliBeautifyCSS);
		});
		PopsPanel.execMenuOnce("bili-componentDetection", () => {
			BilibiliComponentDetection.init();
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
	},
	/**
	 * 监听路由变化
	 */
	listenRouterChange() {
		utils.waitNode<HTMLDivElement>("#app").then(($app: any) => {
			let check = function (vueObj: Vue2Instance) {
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
							to: Vue2Instance["$route"],
							from: Vue2Instance["$route"],
							next: Function
						) => {
							log.info("路由变化 => 更新前", {
								to,
								from,
							});
							if (
								to["hash"] === "#/seeCommentReply" ||
								from["hash"] === "#/seeCommentReply"
							) {
								log.info("该路由变化判定为#/seeCommentReply");
								next();
								return;
							}
							if (PopsPanel.getValue("bili-repairVueRouter404")) {
								if (to.name === "space") {
									// 修复空间跳转404
									window.location.href = to.fullPath;
									return;
								}
							}
							// 前往视频页面
							if (to.fullPath.startsWith("/video")) {
								if (
									from.fullPath.startsWith("/video") &&
									PopsPanel.getValue(
										"bili-video-forceThisPageToRefreshAndRedirect"
									)
								) {
									// 强制本页刷新
									window.location.href = to.fullPath;
									return;
								} else if (
									BilibiliRouter.isHead() &&
									PopsPanel.getValue("bili-head-openVideoInNewTab")
								) {
									// 当前是首页，新标签页打开
									window.open(to.fullPath, "_blank");
									return;
								} else if (PopsPanel.getValue("bili-video-enableArtPlayer")) {
									// 启用了ArtPlayer，强制本页刷新，不然会有内存泄露
									window.location.href = to.fullPath;
									return;
								}
							} else if (to.fullPath.startsWith("/bangumi")) {
								// 前往番剧
								if (from.fullPath.startsWith("/bangumi")) {
									// 番剧=>番剧
									// 启用了ArtPlayer，强制本页刷新，不然会有内存泄露
									window.location.href = to.fullPath;
									return;
								} else if (
									BilibiliRouter.isHead() &&
									PopsPanel.getValue("bili-head-openVideoInNewTab")
								) {
									// 首页 => 番剧
									window.open(to.fullPath, "_blank");
									return;
								}
							}
							next();
						}
					);
					$app.__vue__.$router.afterEach(
						(to: Vue2Instance["$route"], from: Vue2Instance["$route"]) => {
							log.info("路由变化 => 更新后", {
								to,
								from,
							});
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
};

export { Bilibili };
