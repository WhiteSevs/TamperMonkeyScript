import { addStyle, DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BlockTopNavigator } from "./block-frame/blockTopNavigator";
import { BlockSearchFrame } from "./block-frame/blockSearchFrame";
import { DouYinHook } from "../hook/DouYinHook";
import { DouYinAccount } from "../account/DouYinAccount";
import { DouYinVideo } from "./video/DouYinVideo";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinLive } from "./Live/DouYinLive";
import { DouYinRedirect } from "./DouYinRedirect";
import { DouYinSearch } from "./search/DouYinSearch";
import { BlockLeftNavigator } from "./block-frame/blockLeftNavigator";
import { DouYinNetWorkHook } from "@/hook/DouYinNetWorkHook";
import { DouYinGestureBackClearHash } from "./DouYinGestureBackConfig";
import blockCSS from "./css/block.css?raw";
import { DouYinFollowingApi } from "@/api/DouYinFollowingApi";
import { DouYinQueryApi } from "@/api/DouYinQueryApi";
import { DouYinUser } from "./user/DouYinUser";

export const DouYin = {
	init() {
		addStyle(blockCSS);
		DouYinGestureBackClearHash();
		DouYinHook.init();
		// DouYinNetWorkHook.init();
		DouYinRedirect.init();
		PopsPanel.execMenuOnce("watchLoginDialogToClose", () => {
			DouYinAccount.watchLoginDialogToClose();
		});
		PopsPanel.execMenuOnce("disguiseLogin", () => {
			DouYinAccount.disguiseLogin();
		});
		PopsPanel.execMenuOnce("dy-initialScale", () => {
			this.initialScale();
		});
		PopsPanel.execMenu("dy-apple-removeMetaAppleItunesApp", () => {
			this.removeMetaAppleItunesApp();
		});
		BlockLeftNavigator.init();
		BlockTopNavigator.init();
		BlockSearchFrame.init();
		if (DouYinRouter.isLive()) {
			log.info("Router: 直播");
			DouYinLive.init();
		} else if (DouYinRouter.isIndex()) {
			if (DouYinRouter.isVideo()) {
				// 通用的
				log.info("Router: 视频页面");
				DouYinVideo.init();
			}

			if (DouYinRouter.isSearch()) {
				log.info("Router: 搜索");
				DouYinSearch.init();
			} else if (DouYinRouter.isUser()) {
				log.info(`Router: 用户页面`);
				DouYinUser.init();
			} else {
				log.error("未适配router: " + window.location.hostname);
			}
		} else {
			log.error("未适配router: " + window.location.hostname);
		}
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
					content:
						"width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
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
			.waitNodeList<NodeListOf<HTMLMeterElement>>(
				['meta[name="apple-itunes-app"]'],
				10000
			)
			.then(($metaList) => {
				if (!$metaList) {
					return;
				}
				$metaList.forEach(($meta) => {
					$meta.remove();
				});
			});
	},
};
