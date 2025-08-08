import { Panel } from "@components/setting/panel";
import { addStyle, log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { CommonUtil } from "@components/utils/CommonUtil";

export const DouYinSearchHideElement = {
	init() {
		Panel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
			return this.shieldReleatedSearches();
		});
		Panel.execMenuOnce("douyin-search-blockAIAsk", () => {
			return this.blockAIAsk();
		});
	},
	/**
	 * 【屏蔽】相关搜索
	 */
	shieldReleatedSearches() {
		log.info("【屏蔽】相关搜索");
		return [CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2)")];
	},
	/**
	 * 【屏蔽】AI问一问
	 */
	blockAIAsk() {
		log.info(`【屏蔽】AI问一问`);
		return CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2) > div > div:first-child");
	},
};
