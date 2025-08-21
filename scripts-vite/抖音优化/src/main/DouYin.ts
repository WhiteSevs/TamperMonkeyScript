import { $$, addStyle, DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { BlockTopNavigator } from "./block-frame/blockTopNavigator";
import { BlockSearchFrame } from "./block-frame/blockSearchFrame";
import { DouYinHook } from "../hook/DouYinHook";
import { DouYinAccount } from "../account/DouYinAccount";
import { DouYinVideoPlayer } from "./video/DouYinVideoPlayer";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinLive } from "./live/DouYinLive";
import { DouYinRedirect } from "./DouYinRedirect";
import { DouYinSearch } from "./search/DouYinSearch";
import { BlockLeftNavigator } from "./block-frame/blockLeftNavigator";
import { DouYinGestureBackClearHash } from "./DouYinGestureBackConfig";
import blockCSS from "./css/block.css?raw";
import { DouYinUser } from "./user/DouYinUser";
import { DouYinVideo } from "./video/DouYinVideo";
import { DouYinChannel } from "./channel/DouYinChannel";
import { DouYinVideoFilter } from "./video/DouYinVideoFilter";
import { DouYinNote } from "./note/DouYinNote";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { DouYinRecommend } from "./recommend/DouYinRecommend";

export const DouYin = {
	init() {
		Panel.onceExec("dy-global-block-css", () => {
			return this.removeAds();
		});
		DouYinGestureBackClearHash();
		DouYinHook.init();
		DouYinVideoFilter.init();
		DouYinNetWorkHook.init();
		DouYinRedirect.init();
		Panel.execMenuOnce("watchLoginDialogToClose", () => {
			DouYinAccount.watchLoginDialogToClose();
		});
		Panel.execMenuOnce("disguiseLogin", () => {
			DouYinAccount.disguiseLogin();
		});
		Panel.execMenuOnce("dy-initialScale", () => {
			this.initialScale();
		});
		Panel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
			this.removeMetaAppleItunesApp();
		});
		BlockLeftNavigator.init();
		BlockTopNavigator.init();
		BlockSearchFrame.init();

		Panel.execMenuOnce("dy-common-listenRouterChange", () => {
			this.listenRouterChange();
		});

		if (DouYinRouter.isLive()) {
			log.info("Router: 直播");
			DouYinLive.init();
		} else if (DouYinRouter.isIndex()) {
			DouYinVideoPlayer.init();

			if (DouYinRouter.isRecommend()) {
				log.info(`Router: 推荐`);
				DouYinRecommend.init();
			} else if (DouYinRouter.isSearch()) {
				log.info("Router: 搜索");
				DouYinSearch.init();
			} else if (DouYinRouter.isUser()) {
				log.info(`Router: 用户页面`);
				DouYinUser.init();
			} else if (DouYinRouter.isVideo()) {
				log.info(`Router: 单个视频页面`);
				DouYinVideo.init();
			} else if (DouYinRouter.isChannel()) {
				log.info(`Router: Channel页面`);
				DouYinChannel.init();
			} else if (DouYinRouter.isNote()) {
				log.info(`Router:  笔记页面`);
				DouYinNote.init();
			} else {
				log.warn("子router: " + window.location.href);
			}
		} else {
			log.error("未适配router: " + window.location.href);
		}
	},
	/**
	 * 移除ads
	 */
	removeAds() {
		utils
			.waitNode<HTMLElement>(
				() =>
					DOMUtils.selector<HTMLElement>(
						'#douyin-navigation [data-e2e="douyin-navigation"] > div > div > div:regexp("下载抖音精选|条条都是宝藏视频")'
					),
				10000
			)
			.then(($el) => {
				if (!$el) {
					return;
				}
				DOMUtils.remove($el);
			});
		return [addStyle(blockCSS)];
	},
	/**
	 * 固定meta viewport缩放倍率为1
	 */
	initialScale() {
		log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
		DOMUtils.ready(() => {
			let meta = DOMUtils.createElement(
				"meta",
				{},
				{
					name: "viewport",
					content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
				}
			);
			DOMUtils.remove("meta[name='viewport']");
			utils.waitNode("head").then(() => {
				document.head.appendChild(meta);
			});
		});
	},
	/**
	 * 移除<meta>标签name="apple-itunes-app"
	 */
	removeMetaAppleItunesApp() {
		utils
			.waitNodeList<NodeListOf<HTMLMeterElement>>(['meta[name="apple-itunes-app"]'], 10000)
			.then(($metaList) => {
				if (!$metaList) {
					return;
				}
				$metaList.forEach(($meta) => {
					$meta.remove();
				});
			});
	},
	/**
	 * 监听Router重载
	 */
	listenRouterChange() {
		log.info(`监听Router重载`);
		DOMUtils.on(window, "wb_url_change", (event) => {
			let currentUrl = window.location.href;
			log.info(`Router Change：` + currentUrl);
			this.init();
		});
	},
};
