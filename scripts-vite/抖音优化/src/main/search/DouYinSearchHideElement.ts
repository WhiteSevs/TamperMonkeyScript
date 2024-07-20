import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";

export const DouYinSearchHideElement = {
	init() {
		PopsPanel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
			return this.shieldReleatedSearches();
		});
	},
	/**
	 * 【屏蔽】相关搜索
	 */
	shieldReleatedSearches() {
		log.info("【屏蔽】相关搜索");
		return [
			DouYinUtils.addBlockCSS("#search-content-area > div > div:nth-child(2)"),
			addStyle(/*css*/ `
			#search-content-area > div > div:nth-child(1) > div:nth-child(1){
				width: 100vw;
			}`),
		];
	},
};
