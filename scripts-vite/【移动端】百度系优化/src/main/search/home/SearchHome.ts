import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import SearchHomeShieldCSS from "./shield.css?raw";
import SearchHomeMinificationShieldCSS from "./minificationShield.css?raw";

const BaiduSearchHome = {
	init() {
		addStyle(SearchHomeShieldCSS);
		log.info("插入CSS规则");
		PopsPanel.execMenuOnce("baidu_search_home_homepage_minification", () => {
			return this.homepageMinification();
		});
	},
	/**
	 * 精简主页
	 */
	homepageMinification() {
		log.info("插入精简主页CSS规则");
		return addStyle(SearchHomeMinificationShieldCSS);
	},
};

export { BaiduSearchHome };
