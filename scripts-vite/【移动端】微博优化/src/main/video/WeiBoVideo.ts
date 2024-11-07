import { WeiBoApi } from "@/api/WeiBoApi";
import { log } from "@/env";
import { WeiBoHook } from "@/hook/WeiBoHook";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import { GM_addStyle } from "ViteGM";
import { WeiBoVideoHook } from "./WeiBoVideoHook";
import { CommonUtil } from "@/utils/CommonUtil";

const WeiBoVideo = {
	init() {
		PopsPanel.onceExec("weibo-video-init-hook", () => {
			WeiBoVideoHook.init();
		});
		PopsPanel.execMenuOnce("weibo_video_shield_bottom_toolbar", () => {
			return this.shieldBottomToolBar();
		});
		PopsPanel.execMenuOnce("weibo_video_shield_hot_comments", () => {
			return this.shieldHotComments();
		});
		PopsPanel.execMenuOnce("weibo_video_shield_recommend", () => {
			return this.shieldRecommend();
		});
	},
	/** 【屏蔽】底部工具栏 */
	shieldBottomToolBar() {
		log.info("【屏蔽】底部工具栏");
		return CommonUtil.addBlockCSS(".woo-toolBar");
	},
	/** 【屏蔽】相关推荐 */
	shieldRecommend() {
		log.info("【屏蔽】相关推荐");
		return CommonUtil.addBlockCSS(
			'#app .woo-panel[class*="Playdetail_card_"]:nth-child(2)'
		);
	},
	/** 【屏蔽】热门评论 */
	shieldHotComments() {
		log.info("【屏蔽】热门评论");
		return CommonUtil.addBlockCSS(
			'#app .woo-panel[class*="Playdetail_card_"]:nth-child(3)'
		);
	},
};

export { WeiBoVideo };
