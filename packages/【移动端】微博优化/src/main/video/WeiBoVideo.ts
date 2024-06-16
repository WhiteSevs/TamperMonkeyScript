import { WeiBoApi } from "@/api/WeiBoApi";
import { log } from "@/env";
import { WeiBoHook } from "@/hook/WeiBoHook";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import { GM_addStyle } from "ViteGM";
import { WeiBoVideoHook } from "./WeiBoVideoHook";
import { CommonUtils } from "@/utils/CommonUtils";

const WeiBoVideo = {
	init() {
		PopsPanel.onceExec("weibo-video-init-hook", () => {
			WeiBoVideoHook.init();
		});
		PopsPanel.execMenuOnce("weibo_video_shield_bottom_toolbar", () => {
			this.shieldBottomToolBar();
		});
		PopsPanel.execMenuOnce("weibo_video_shield_hot_comments", () => {
			this.shieldHotComments();
		});
		PopsPanel.execMenuOnce("weibo_video_shield_recommend", () => {
			this.shieldRecommend();
		});
	},
	/** 【屏蔽】底部工具栏 */
	shieldBottomToolBar() {
		log.info("【屏蔽】底部工具栏");
		CommonUtils.addBlockCSS(".woo-toolBar");
	},
	/** 【屏蔽】相关推荐 */
	shieldRecommend() {
		log.info("【屏蔽】相关推荐");
		CommonUtils.addBlockCSS(
			'#app .woo-panel[class*="Playdetail_card_"]:nth-child(2)'
		);
	},
	/** 【屏蔽】热门评论 */
	shieldHotComments() {
		log.info("【屏蔽】热门评论");
		CommonUtils.addBlockCSS(
			'#app .woo-panel[class*="Playdetail_card_"]:nth-child(3)'
		);
	},
};

export { WeiBoVideo };
