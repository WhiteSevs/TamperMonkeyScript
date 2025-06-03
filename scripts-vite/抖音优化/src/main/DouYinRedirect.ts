import { log } from "@/env";
import { PopsPanel } from "@/setting/panel";

export const DouYinRedirect = {
	init() {
		PopsPanel.execMenu("douyin-redirect-url-home-to-root", () => {
			this.redirectUrlHomeToRoot();
		});
	},
	/**
	 * 从首页到根目录
	 */
	redirectUrlHomeToRoot() {
		if (window.location.pathname === "/home") {
			log.info("从首页跳转到根目录");
			window.location.href =
				window.location.origin + "/?is_from_mobile_home=1&recommend=1";
		}
	},
};
