import { BilibiliPCData } from "@/data/BlibiliData";
import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { BilibiliUtils } from "@/utils/BilibiliUtils";

export const BilibiliReadMobile = {
	init() {
		PopsPanel.onceExec("bili-pc-read-mobile-autoExpand", () => {
			this.autoExpand();
		});
	},
	/**
	 * 自动展开
	 */
	autoExpand() {
		log.info("自动展开");
		addStyle(`
        ${BilibiliPCData.className.read.mobile} .limit{
            overflow: unset !important;
            max-height: unset !important;
        }`);
		// 屏蔽 【展开阅读全文】
		BilibiliUtils.addBlockCSS(
			BilibiliPCData.className.read.mobile + " .read-more"
		);
	},
};
