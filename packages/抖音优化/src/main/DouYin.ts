import { log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { ShieldHeader } from "./UIFrameShield/ShieldHeader";
import { ShieldSearch } from "./UIFrameShield/ShieldSearch";
import { DouYinHook } from "./Hook/DouYinHook";
import { DouYinAccount } from "./Account/DouYinAccount";
import { DouYinVideo } from "./Video/DouYinVideo";
import { DouYinRouter } from "@/router/router";
import { DouYinLive } from "./Live/DouYinLive";
import { DouYinRedirect } from "./DouYinRedirect";

const DouYin = {
	init() {
		DouYinRedirect.init();
		PopsPanel.execMenu("debug", () => {
			DouYinHook.removeEnvCheck();
		});
		PopsPanel.execMenu("disguiseLogin", () => {
			DouYinAccount.disguiseLogin();
		});
		PopsPanel.execMenu("watchLoginDialogToClose", () => {
			DouYinAccount.watchLoginDialogToClose();
		});
		ShieldHeader.init();
		ShieldSearch.init();

		if (DouYinRouter.isLive()) {
			log.info("Router: 直播");
			DouYinLive.init();
		} else if (DouYinRouter.isVideo()) {
			log.info("Router: 推荐视频");
			DouYinVideo.init();
		} else {
			log.error("未知router: " + window.location.hostname);
		}
	},
};

export { DouYin };
