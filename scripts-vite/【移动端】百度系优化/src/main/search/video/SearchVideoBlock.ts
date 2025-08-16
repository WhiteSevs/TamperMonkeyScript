import { addStyle, log } from "@/env";
import blockCSS from "./block.css?raw";
import { Panel } from "@components/setting/panel";
import { CommonUtil } from "@components/utils/CommonUtil";
// 屏蔽元素
export const BaiduSearchVideoBlock = {
	init() {
		addStyle(blockCSS);
		Panel.execMenuOnce("baidu-search-video-blockBottomRecommendVideo", () => {
			return this.blockBottomRecommendVideo();
		});
	},
	/**
	 * 【屏蔽】底部推荐视频
	 */
	blockBottomRecommendVideo() {
		log.info("【屏蔽】底部推荐视频");
		return CommonUtil.addBlockCSS(".short-mini-wrapper");
	},
};
