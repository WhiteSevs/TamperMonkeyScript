import { addStyle } from "@/env";
import { PopsPanel } from "@/setting/setting";
import blockAdsCSS from "./blockAds.css?raw";
export const WeiBoDetail = {
	init() {
		PopsPanel.onceExec("weibo-detail-blockAds", () => {
			return addStyle(blockAdsCSS);
		});
	},
};
