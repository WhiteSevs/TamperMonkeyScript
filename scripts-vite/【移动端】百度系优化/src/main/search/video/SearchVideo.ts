import { log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { CommonUtil } from "@/utils/CommonUtil";
import Qmsg from "qmsg";

// 屏蔽元素
export const BaiduSearchVideoBlockNode = {
	init() {
		PopsPanel.execMenuOnce(
			"baidu-search-video-blockBottomRecommendVideo",
			() => {
				return this.blockBottomRecommendVideo();
			}
		);
	},
	/**
	 * 【屏蔽】底部推荐视频
	 */
	blockBottomRecommendVideo() {
		log.info("【屏蔽】底部推荐视频");
		return CommonUtil.addBlockCSS(".short-mini-wrapper");
	},
};

export const BaiduSearchVideo = {
	init() {
		BaiduSearchVideoBlockNode.init();
		PopsPanel.execMenuOnce("baidu-search-video-autoJumpToOriginUrl", () => {
			this.autoJumpToOriginUrl();
		});
	},
	/**
	 * 自动跳转至原网页
	 */
	autoJumpToOriginUrl() {
		utils
			.waitNode<HTMLAnchorElement>(".sfc-video-page-info-showurl", 10000)
			.then(($showUrl) => {
				if (!$showUrl) {
					log.error("未找到.sfc-video-page-info-showurl元素");
					Qmsg.error("未找到.sfc-video-page-info-showurl元素");
					return;
				}
				let url = $showUrl.getAttribute("data-url") || $showUrl.href;
				if (utils.isNull(url)) {
					log.error("获取原网页Url失败");
					Qmsg.error("获取原网页Url失败");
					return;
				}
				window.location.href = url;
			});
	},
};
