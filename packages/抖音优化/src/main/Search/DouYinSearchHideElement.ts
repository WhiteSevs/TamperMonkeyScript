import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "../../utils/DouYinElement";
import { addStyle, log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";

const DouYinSearchHideElement = {
	init() {
		PopsPanel.execMenuOnce("douyin-search-shieldReleatedSearches", () => {
			this.shieldReleatedSearches();
		});
	},
	/**
	 * 【屏蔽】相关搜索
	 */
	shieldReleatedSearches() {
		log.info("【屏蔽】相关搜索");
		DouYinUtils.addBlockCSS("#search-content-area > div > div:nth-child(2)");
		addStyle(`
        #search-content-area > div > div:nth-child(1) > div:nth-child(1){
            width: 100dvw;
        }
        `);
	},
};

export { DouYinSearchHideElement };
