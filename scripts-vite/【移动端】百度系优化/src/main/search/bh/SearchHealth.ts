import { PopsPanel } from "@/setting/setting";
import { addStyle, log } from "@/env";
import { CommonUtil } from "@/utils/CommonUtil";
import SearchHealthShieldCSS from "./shield.css?raw";

/**
 * 百度健康
 */
const BaiduHeadlth = {
	init() {
		addStyle(SearchHealthShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenuOnce("baidu_search_headlth_shield_other_info", () => {
			return this.shieldOtherInfo();
		});
		PopsPanel.execMenuOnce("baidu_search_headlth_shield_bottom_toolbar", () => {
			return this.shieldServiceButtonsRow();
		});
	},
	/**
	 * 【屏蔽】底部其它信息
	 */
	shieldOtherInfo() {
		log.info("【屏蔽】底部其它信息");
		return CommonUtil.addBlockCSS(
			'article[class] > div[class^="index_container"]',
			// 2024.7.31 https://m.baidu.com/bh/m/detail/ar_5737243699133678027
			'#main > div[class^="index_container"]'
		);
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldServiceButtonsRow() {
		log.info("【屏蔽】底部工具栏");
		return CommonUtil.addBlockCSS(
			'article[class] > div[class^="index_healthServiceButtonsRow"]',
			// 2024.7.31 https://m.baidu.com/bh/m/detail/ar_5737243699133678027
			'#main > div[class^="index_interactWrap"]'
		);
	},
};

export { BaiduHeadlth };
