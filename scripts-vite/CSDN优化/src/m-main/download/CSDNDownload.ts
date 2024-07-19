import { addStyle, log } from "@/env";
import CSDNBlockCSS from "./block.css?raw";
import { PopsPanel } from "@/setting/setting";
import { CSDNUtils } from "@/utils/CSDNUtils";
export const M_CSDNDownload = {
	init() {
		PopsPanel.execMenu("m-csdn-download-removeAds", () => {
			addStyle(CSDNBlockCSS);
		});
		PopsPanel.execMenuOnce(
			"m-csdn-download-automaticallyExpandResourceIntroduction",
			() => {
				this.automaticallyExpandResourceIntroduction();
			}
		);
	},
	/**
	 * 自动展开资源介绍
	 */
	automaticallyExpandResourceIntroduction() {
		log.info("自动展开资源介绍");
		/* 屏蔽 展开全部 按钮 */
		CSDNUtils.addBlockCSS("label.unfold-font");
		addStyle(`
		.resource-desc{
			max-height: unset !important;
    		overflow: unset !important;
		}
		`);
	},
};
