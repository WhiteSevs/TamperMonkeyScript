import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { CommonUtils } from "@/utils/CommonUtils";

/**
 * 百度健康
 */
const BaiduHeadlth = {
	init() {
		PopsPanel.execMenu("baidu_search_headlth_shield_other_info", () => {
			this.shieldOtherInfo();
		});
		PopsPanel.execMenu("baidu_search_headlth_shield_bottom_toolbar", () => {
			this.shieldServiceButtonsRow();
		});
	},
	/**
	 * 【屏蔽】底部其它信息
	 */
	shieldOtherInfo() {
		log.info("【屏蔽】底部其它信息");
		CommonUtils.addBlockCSS('article[class] > div[class^="index_container"]');
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldServiceButtonsRow() {
		log.info("【屏蔽】底部工具栏");
		CommonUtils.addBlockCSS(
			'article[class] > div[class^="index_healthServiceButtonsRow"]'
		);
	},
};

export { BaiduHeadlth };
