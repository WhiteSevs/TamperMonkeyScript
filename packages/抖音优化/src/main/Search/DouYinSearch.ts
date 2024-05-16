import { DOMUtils, log, utils } from "@/env";
import { GM_addStyle } from "ViteGM";
import { DouYinSearchHideElement } from "./DouYinSearchHideElement";
import MobileCSS from "./mobile.css?raw";

const DouYinSearch = {
	init() {
		DouYinSearchHideElement.init();
	},
	/**
	 * 手机模式
	 */
	mobileMode() {
		log.info("搜索-手机模式");
		GM_addStyle(MobileCSS);
	},
};

export { DouYinSearch };
