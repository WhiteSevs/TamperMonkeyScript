import { addStyle, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import blockAdsCSS from "./blockAds.css?raw";
import { VueUtils } from "@/utils/VueUtils";
export const WeiBoDetail = {
	init() {
		PopsPanel.onceExec("weibo-detail-blockAds", () => {
			return addStyle(blockAdsCSS);
		});
	},
	/**
	 * 设置正文显示的时间为绝对时间
	 */
	setArticleAbsoluteTime() {
		utils.mutationObserver(document.documentElement, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				Array.from(
					document.querySelectorAll<HTMLElement>(
						".card.m-panel .m-text-cut .time:not([data-gm-absolute-time])"
					)
				).forEach(($time) => {
					let $card = $time.closest(".card.m-panel") as HTMLElement;
					let cardVueIns = VueUtils.getVue($card);
					if (!cardVueIns) {
						return;
					}
					let createTime = cardVueIns?.item?.created_at;
					if (typeof createTime !== "string") {
						return;
					}
					if ($time.innerText.includes("编辑")) {
						return;
					}
					let createTimeObj = new Date(createTime);
					let formatCreateTime = utils.formatTime(
						createTimeObj,
						"yyyy-MM-dd HH:mm:ss"
					);
					$time.innerText = formatCreateTime;
					$time.setAttribute("data-gm-absolute-time", "true");
				});
				// 评论区的
				Array.from(
					document.querySelectorAll<HTMLElement>(
						".comment-content .card .m-box .time:not([data-gm-absolute-time])"
					)
				).forEach(($time) => {
					let $card = $time.closest(".card") as HTMLElement;
					let $cardParent = $card.parentElement as HTMLElement;
					let cardVueIns =
						VueUtils.getVue($card) || VueUtils.getVue($cardParent);
					if (!cardVueIns) {
						return;
					}
					let createTime = cardVueIns?.item?.created_at;
					if (typeof createTime !== "string") {
						return;
					}
					let createTimeObj = new Date(createTime);
					let formatCreateTime = utils.formatTime(
						createTimeObj,
						"yyyy-MM-dd HH:mm:ss"
					);
					$time.innerText = `${formatCreateTime} ${
						cardVueIns?.item?.source || ""
					}`;
					$time.setAttribute("data-gm-absolute-time", "true");
				});
			},
		});
	},
};
