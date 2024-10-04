import { addStyle, log, utils } from "@/env";
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
				let searchParams = new URLSearchParams(window.location.search);
				if (searchParams.has("cid")) {
					// 楼中楼的，要按照数据顺序来
					let $litePageWrap =
						document.querySelector<HTMLElement>(".lite-page-wrap")!;
					let litePageWrapVueIns = VueUtils.getVue($litePageWrap);
					if (litePageWrapVueIns) {
						let curWeiboData = litePageWrapVueIns?.curWeiboData;
						let $timeList = Array.from(
							document.querySelectorAll<HTMLElement>(
								".card .card-main .m-box .time:not([data-gm-absolute-time])"
							)
						);
						if ($timeList.length === curWeiboData.commentLists.length + 1) {
							// 数量和获取到的数量一致
							$timeList.forEach(($time, index) => {
								if (index === 0) {
									// 根评论
									let createTimeObj = new Date(
										curWeiboData.rootComment.created_at
									);
									let formatCreateTime = utils.formatTime(
										createTimeObj,
										"yyyy-MM-dd HH:mm:ss"
									);
									$time.innerText = formatCreateTime;
								} else {
									// 子评论
									let createTimeObj = new Date(
										curWeiboData.commentLists[index - 1].created_at
									);
									let formatCreateTime = utils.formatTime(
										createTimeObj,
										"yyyy-MM-dd HH:mm:ss"
									);
									$time.innerText = formatCreateTime;
								}
								$time.setAttribute("data-gm-absolute-time", "true");
							});
						} else {
							if ($timeList.length !== 0) {
								log.warn("楼中楼时间设置失败，数量不一致");
							}
						}
					}
				}
			},
		});
	},
};
