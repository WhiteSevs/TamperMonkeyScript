import { addStyle, log } from "@/env";
import CSDNBlockCSS from "./block.css?raw";
import { PopsPanel } from "@/setting/setting";
import { CSDNUtils } from "@/utils/CSDNUtils";
export const M_CSDNDownload = {
	init() {
		PopsPanel.execMenuOnce("m-csdn-download-removeAds", () => {
			return addStyle(CSDNBlockCSS);
		});
		PopsPanel.execMenuOnce(
			"m-csdn-download-automaticallyExpandResourceIntroduction",
			() => {
				return this.automaticallyExpandResourceIntroduction();
			}
		);
	},
	/**
	 * 自动展开资源介绍
	 */
	automaticallyExpandResourceIntroduction() {
		log.info("自动展开资源介绍");
		/* 屏蔽 展开全部 按钮 */
		return [
			CSDNUtils.addBlockCSS("label.unfold-font"),
			addStyle(/*css*/ `
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`),
		];
	},
};
