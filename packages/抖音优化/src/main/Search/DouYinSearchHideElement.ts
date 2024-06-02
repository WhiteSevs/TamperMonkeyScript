import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "../../utils/DouYinElement";
import { log } from "@/env";
import { GM_addStyle } from "ViteGM";
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
		GM_addStyle(`
        #search-content-area > div > div:nth-child(1) > div:nth-child(1){
            width: 100dvw;
        }
        `);
	},
};

export { DouYinSearchHideElement };
