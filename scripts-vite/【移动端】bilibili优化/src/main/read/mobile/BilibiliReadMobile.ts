import { BilibiliPCData } from "@/data/BlibiliData";
import { addStyle, log } from "@/env";
import { PopsPanel } from "@/setting/panel";
import { CommonUtil } from "@/utils/CommonUtil";

export const BilibiliReadMobile = {
	init() {
		this.removeAds();
		PopsPanel.onceExec("bili-pc-read-mobile-autoExpand", () => {
			return this.autoExpand();
		});
	},
	removeAds() {
		CommonUtil.addBlockCSS(
			/* 底部的打开客户端阅读 */
			"body>.h5-download-bar"
		);
	},
	/**
	 * 自动展开
	 */
	autoExpand() {
		log.info("自动展开");
		return [
			addStyle(/*css*/ `
			${BilibiliPCData.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`),
			// 屏蔽 【展开阅读全文】
			CommonUtil.addBlockCSS(
				BilibiliPCData.className.read.mobile + " .read-more"
			),
		];
	},
};
