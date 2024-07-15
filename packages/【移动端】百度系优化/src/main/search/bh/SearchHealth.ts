import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { CommonUtils } from "@/utils/CommonUtils";
import SearchHealthShieldCSS from "./shield.css?raw";

/**
 * 百度健康
 */
const BaiduHeadlth = {
	init() {
		addStyle(SearchHealthShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenuOnce("baidu_search_headlth_shield_other_info", () => {
			this.shieldOtherInfo();
		});
		PopsPanel.execMenuOnce("baidu_search_headlth_shield_bottom_toolbar", () => {
			this.shieldServiceButtonsRow();
		});
	},
	/**
	 * 【屏蔽】底部其它信息
	 */
	shieldOtherInfo() {
		log.info("【屏蔽】底部其它信息");
		return CommonUtils.addBlockCSS(
			'article[class] > div[class^="index_container"]'
		);
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldServiceButtonsRow() {
		log.info("【屏蔽】底部工具栏");
		return CommonUtils.addBlockCSS(
			'article[class] > div[class^="index_healthServiceButtonsRow"]'
		);
	},
};

export { BaiduHeadlth };
