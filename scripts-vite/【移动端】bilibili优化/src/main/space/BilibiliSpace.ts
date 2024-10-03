import { DOMUtils, log, Qmsg, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUrl } from "@/utils/BilibiliUrl";
import { BilibiliUtils } from "@/utils/BilibiliUtils";
import { VueUtils } from "@/utils/VueUtils";

export const BilibiliSpace = {
	init() {
		PopsPanel.execMenuOnce("bili-space-repairRealJump", () => {
			this.repairRealJump();
		});
		PopsPanel.execMenuOnce("bili-space-coverDynamicStateCardVideo", () => {
			this.coverDynamicStateCardVideo();
		});
	},
	/**
	 * 修复视频|动态的正确跳转
	 */
	repairRealJump() {
		DOMUtils.on(
			document,
			"click",
			(event) => {
				let $click = event.target as HTMLElement;
				let $forwardingCard =
					$click.closest(".main .forwardingCard") ||
					($click.matches(".main .forwardingCard") && $click);
				if ($forwardingCard) {
					// 转发的动态
					utils.preventEvent(event);
					let dynamicId = $forwardingCard.getAttribute("id")!;
					log.info(`获取的动态id为：${dynamicId}`);
					let url = BilibiliUrl.getUserSpaceDynamicUrl(dynamicId);
					BilibiliUtils.goToUrl(url);
				}
			},
			{
				capture: true,
			}
		);
	},
	/**
	 * 覆盖动态视频的点击事件
	 */
	coverDynamicStateCardVideo() {
		log.info(`覆盖动态视频的点击事件`);
		DOMUtils.on(document, "click", ".card-content .main .wings", (event) => {
			let $wings = event.target as HTMLElement;
			let $card = $wings.closest(".card")!;
			if (!$card) {
				Qmsg.error("未找到对应的.card元素");
				return;
			}
			let vueIns = VueUtils.getVue($card);
			if (!vueIns) {
				Qmsg.error("未找到对应的vue实例");
				return;
			}
			let url = vueIns?.shareData?.default?.url;
			if (!url) {
				Qmsg.error("未找到对应的url");
				return;
			}
			BilibiliUtils.goToUrl(url);
		},{
			capture:true
		});
	},
};
