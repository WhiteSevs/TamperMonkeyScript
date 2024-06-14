import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import blockAdsCSS from "./blockAds.css?raw";
import { WeiBoHook } from "@/hook/WeiBoHook";
import { WeiBoRouter } from "@/router/WeiBoRouter";
import { WeiBoHuaTi } from "./huati/WeiBoHuaTi";
import { log } from "@/env";
import { WeiBoVideo } from "./video/WeiBoVideo";
import { WeiBoDetail } from "./WeiBoDetail";

const WeiBo = {
	init() {
		PopsPanel.execMenuOnce(
			"weibo_hijack_navigator_service_worker_register",
			() => {
				WeiBoHook.hookServiceWorkerRegister();
			}
		);

		if (WeiBoRouter.isHuaTi()) {
			log.info("Router: 话题");
			WeiBoHuaTi.init();
		} else if (WeiBoRouter.isMWeiBo()) {
			// 移动端微博
			log.info("Router: 移动端微博");
			WeiBoHook.hookNetWork();
			WeiBoHook.hookApply();
			WeiBoHook.hookVueRouter();
			PopsPanel.execMenuOnce("weibo_remove_ads", () => {
				// 屏蔽 广告
				GM_addStyle(blockAdsCSS);
			});
			PopsPanel.execMenu("weibo_shield_bottom_bar", () => {
				this.shieldBottomBar();
			});
			if (WeiBoRouter.isMWeiBoDetail()) {
				log.info("Router: 移动端微博帖子");
				WeiBoDetail.init();
			}
		} else if (WeiBoRouter.isVideo()) {
			// 视频页
			log.info("Router: 视频页");
			WeiBoVideo.init();
		} else {
			// 未适配Router
			log.error("Router: 未适配 => " + window.location.href);
		}
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldBottomBar() {
		log.info("【屏蔽】底部工具栏");
		GM_addStyle(`
        #app div.m-tab-bar.m-bar-panel.m-container-max{
            display: none !important;
        }`);
	},
};

export { WeiBo };
