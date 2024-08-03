import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";

const BilibiliSearch = {
	init() {
		PopsPanel.execMenuOnce("bili-search-cover-cancel", () => {
			this.coverCancel();
		});
	},
	/**
	 * 覆盖【取消】按钮的点击事件
	 */
	coverCancel() {
		log.info("覆盖【取消】按钮的点击事件");
		DOMUtils.on(
			document,
			"click",
			"a.cancel",
			(event) => {
				log.info(`点击取消按钮`);
				utils.preventEvent(event);
				window.history.back();
			},
			{ capture: true }
		);
	},
};

export { BilibiliSearch };
