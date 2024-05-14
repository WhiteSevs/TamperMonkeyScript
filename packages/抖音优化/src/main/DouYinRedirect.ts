import { PopsPanel } from "@/setting/setting";

export const DouYinRedirect = {
	init() {
		PopsPanel.execMenu("douyin-redirect-url-home-to-root", () => {
			this.redirectUrlHomeToRoot();
		});
	},
	/**
	 * 跳转首页到根目录
	 */
	redirectUrlHomeToRoot() {
		if (window.location.pathname === "/home") {
			window.location.href = window.location.origin;
		}
	},
};
