import { addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtils } from "@/utils/CommonUtils";
import { VueUtils } from "@/utils/VueUtils";

export const WeiBoHome = {
	init() {
		PopsPanel.execMenuOnce("weibo-home-blockArticleAds", () => {
			this.blockArticleAds();
		});
		PopsPanel.execMenuOnce("weibo-home-blockMessageCount", () => {
			return this.blockMessageCount();
		});
	},
	/**
	 * 屏蔽隐藏在card内的微博广告
	 */
	blockArticleAds() {
		utils.mutationObserver(document, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: utils.debounce(() => {
				document
					.querySelectorAll<HTMLDivElement>(".card.m-panel")
					.forEach(($mpanel) => {
						let vueIns = VueUtils.getVue($mpanel);
						if (!vueIns) {
							return;
						}
						let cardInfo = vueIns?.$options?.propsData?.item;
						let ad_state = cardInfo?.ad_state;
						let cardText = cardInfo?.text;
						let page_title = cardInfo?.page_info?.page_title;
						if (ad_state && page_title === "微博广告") {
							$mpanel.remove();
							log.info(`移除广告card: ` + cardText);
						}
					});
			}, 150),
		});
	},
	/**
	 * 屏蔽右上角的信息红点（登录后）
	 */
	blockMessageCount() {
		return CommonUtils.addBlockCSS(".nav-right .m-bubble");
	},
};
