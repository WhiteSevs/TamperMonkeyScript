import { log } from "@/env";
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
import { DouYinElement } from "./Element/DouYinElement";

const DouYin = {
	init() {
		DouYinRedirect.init();
		PopsPanel.execMenuOnce("debug", () => {
			DouYinHook.removeEnvCheck();
		});
		PopsPanel.execMenuOnce("watchLoginDialogToClose", () => {
			DouYinAccount.watchLoginDialogToClose();
		});
		PopsPanel.execMenuOnce("shieldBottomQuestionButton", () => {
			this.shieldBottomQuestionButton();
		});
		PopsPanel.execMenuOnce("disguiseLogin", () => {
			DouYinAccount.disguiseLogin();
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
	 * 屏蔽底部问题按钮
	 */
	shieldBottomQuestionButton() {
		log.success("屏蔽底部问题按钮");
		DouYinElement.addShieldStyle([
			"#douyin-sidebar",
			/* 推荐视频右下角的？按钮 */
			"#douyin-temp-sidebar",
		]);
	},
};

export { DouYin };
