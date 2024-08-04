import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUrlUtils } from "@/utils/BilibiliUrlUtils";
import { BilibiliUtils } from "@/utils/BilibiliUtils";

export const BilibiliSpace = {
	init() {
		PopsPanel.execMenuOnce("bili-space-repairRealJump", () => {
			this.repairRealJump();
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
					let url = BilibiliUrlUtils.getUserSpaceDynamicUrl(dynamicId);
					BilibiliUtils.goToUrl(url);
				}
			},
			{
				capture: true,
			}
		);
	},
};
