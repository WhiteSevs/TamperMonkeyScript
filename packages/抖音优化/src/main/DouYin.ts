import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { ShieldHeader } from "./UIFrameShield/FrameNavigator";
import { ShieldSearch } from "./UIFrameShield/FrameSearch";
import { DouYinHook } from "./Hook/DouYinHook";
import { DouYinAccount } from "./Account/DouYinAccount";
import { DouYinVideo } from "./Video/DouYinVideo";
import { DouYinRouter } from "@/router/router";
import { DouYinLive } from "./Live/DouYinLive";
import { DouYinRedirect } from "./DouYinRedirect";
import { DouYinSearch } from "./Search/DouYinSearch";
import { DouYinElement } from "../utils/DouYinElement";
import { DouYinUtils } from "@/utils/DouYinUtils";

const DouYin = {
	init() {
		DouYinRedirect.init();
		PopsPanel.execMenuOnce("debug", () => {
			DouYinHook.removeEnvCheck();
		});
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
		ShieldHeader.init();
		ShieldSearch.init();
		if (DouYinRouter.isLive()) {
			log.info("Router: 直播");
			DouYinLive.init();
		} else if (DouYinRouter.isVideo()) {
			log.info("Router: 推荐视频");
			DouYinVideo.init();
			if (DouYinRouter.isSearch()) {
				log.info("Router: 搜索");
				DouYinSearch.init();
			}
		} else {
			log.error("未知router: " + window.location.hostname);
		}
	},
	/**
	 * 固定meta viewport缩放倍率为1
	 */
	initialScale() {
		log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
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

export { DouYin };
