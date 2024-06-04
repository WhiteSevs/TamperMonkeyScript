import { addStyle, log } from "@/env";
import AiQiChaShieldCSS from "./shield.css?raw";
import { unsafeWindow } from "ViteGM";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";

const BaiduAiQiCha = {
	init() {
		addStyle(AiQiChaShieldCSS);
		log.info("插入CSS规则");
		this.camouflageBottomPopup();
		PopsPanel.execMenu("baidu_aiqicha_shield_carousel", () => {
			this.shieldCarousel();
		});
		PopsPanel.execMenu("baidu_aiqicha_shield_industry_host_news", () => {
			this.shieldIndustryHostNews();
		});
	},
	/**
	 * 伪装为已经弹窗过了
	 */
	camouflageBottomPopup() {
		log.info("伪装为已经弹窗过了");
		unsafeWindow.localStorage.setItem(
			"coupon_bottom_popup",
			new Date().getTime().toString()
		);
	},
	/**
	 * 屏蔽轮播图
	 */
	shieldCarousel() {
		log.info("屏蔽轮播图");
		CommonUtils.addBlockCSS("div.index-banner-container.van-swipe");
	},
	/**
	 * 屏蔽行业热点新闻
	 */
	shieldIndustryHostNews() {
		log.info("屏蔽行业热点新闻");
		CommonUtils.addBlockCSS(" div.hot-news");
	},
};
export { BaiduAiQiCha };
