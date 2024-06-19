import { PopsPanel } from "@/setting/setting";
import { log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";

export const DouYinVideoComment = {
	init() {
		PopsPanel.execMenuOnce("dy-video-shieldUserCommentToolBar", () => {
			this.shieldUserCommentToolBar();
		});
		PopsPanel.execMenuOnce(
			"dy-video-shieldUserCommentEveryOneAllSearch",
			() => {
				this.shieldUserCommentEveryOneAllSearch();
			}
		);
	},
	/**
	 * 【屏蔽】评论工具栏
	 */
	shieldUserCommentToolBar() {
		log.info("【屏蔽】评论工具栏");
		DouYinUtils.addBlockCSS(".comment-input-container");
	},
	/**
	 * 【屏蔽】大家都在搜
	 */
	shieldUserCommentEveryOneAllSearch() {
		log.info("【屏蔽】大家都在搜");
		DouYinUtils.addBlockCSS(".comment-header-with-search");
	},
};
