import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "../Element/DouYinElement";
import { log } from "@/env";

const DouYinVideoComment = {
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
		DouYinElement.addShieldStyle(".comment-input-container");
	},
	/**
	 * 【屏蔽】大家都在搜
	 */
	shieldUserCommentEveryOneAllSearch() {
		log.info("【屏蔽】大家都在搜");
		DouYinElement.addShieldStyle(".comment-header-with-search");
	},
};

export { DouYinVideoComment };
