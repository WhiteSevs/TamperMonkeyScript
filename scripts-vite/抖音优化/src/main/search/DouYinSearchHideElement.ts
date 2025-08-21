import { Panel } from "@components/setting/panel";
import { $, addStyle, DOMUtils, log } from "@/env";
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
		this.resizeSearchFilterBar();
	},
	/**
	 * 把搜索结果过滤器宽度自适应
	 */
	resizeSearchFilterBar() {
		DOMUtils.ready(() => {
			let $searchFilter = $<HTMLElement>("div:has(+#search-result-container)");
			let $searchResultContainer = $<HTMLElement>("#search-result-container");
			if (!$searchFilter) {
				return;
			}
			if (!$searchResultContainer) {
				return;
			}
			let searchResultContainerWidth = DOMUtils.width($searchResultContainer);
			DOMUtils.css($searchFilter, "width", searchResultContainerWidth + "px");
		});
	},
	/**
	 * 【屏蔽】相关搜索
	 */
	shieldReleatedSearches() {
		log.info("【屏蔽】相关搜索");
		return [
			CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2)"),
			addStyle(/*css*/ `
			/* 把搜索结果宽度自适应 */
			#search-result-container{
        		width: auto !important;
			}
		`),
		];
	},
	/**
	 * 【屏蔽】AI问一问
	 */
	blockAIAsk() {
		log.info(`【屏蔽】AI问一问`);
		return CommonUtil.addBlockCSS("#search-content-area > div > div:nth-child(2) > div > div:first-child");
	},
};
