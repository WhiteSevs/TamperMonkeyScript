import { DOMUtils, addStyle, log, utils } from "@/env";
import MobileCSS from "./mobile.css?raw";
import { DouYinSearchHideElement } from "./DouYinSearchHideElement";

export const DouYinSearch = {
	init() {
		DouYinSearchHideElement.init();
	},
	/**
	 * 手机模式
	 */
	mobileMode() {
		log.info("搜索-手机模式");
		addStyle(MobileCSS);
		/* 评论区展开才会出现 */
		utils
			.waitNode<HTMLDivElement>("#relatedVideoCard")
			.then(($relatedVideoCard) => {
				log.info("评论区展开的className：" + $relatedVideoCard.className);
				addStyle(`
				html[data-vertical-screen]
					#sliderVideo[data-e2e="feed-active-video"]
					#videoSideBar:has(#relatedVideoCard[class="${$relatedVideoCard.className}"]) {
						width: 100dvw !important;
				}`);
			});
	},
};
