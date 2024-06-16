import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import blockAdsCSS from "./blockAds.css?raw";
import { WeiBoHook } from "@/hook/WeiBoHook";
import { WeiBoRouter } from "@/router/WeiBoRouter";
import { WeiBoHuaTi } from "./huati/WeiBoHuaTi";
import { DOMUtils, addStyle, log, utils } from "@/env";
import { WeiBoVideo } from "./video/WeiBoVideo";
import { WeiBoDetail } from "./detail/WeiBoDetail";
import { CommonUtils } from "@/utils/CommonUtils";
import { WeiBoU } from "./u/WeiBoU";
import { WeiBoSearch } from "./search/WeiBoSearch";
import { WeiBoUnlockQuality } from "./WeiBoUnlockQuality";

const WeiBo = {
	$data: {
		weiBoUnlockQuality: new WeiBoUnlockQuality(),
	},
	init() {
		PopsPanel.execMenuOnce(
			"weibo_hijack_navigator_service_worker_register",
			() => {
				WeiBoHook.hookServiceWorkerRegister();
			}
		);

		// 不同域名不会触发Router改变，所以单独设定m.weibo.cn下监听路由改变
		if (WeiBoRouter.isHuaTi()) {
			log.info("Router: 话题");
			WeiBoHuaTi.init();
		} else if (WeiBoRouter.isMWeiBo()) {
			// 移动端微博
			log.info("Router: 移动端微博");
			PopsPanel.onceExec("weibo-m-init", () => {
				WeiBoHook.hookNetWork();
				WeiBoHook.hookApply();
				WeiBoHook.hookVueRouter();
			});
			PopsPanel.execMenuOnce("weibo_remove_ads", () => {
				// 屏蔽 广告
				addStyle(blockAdsCSS);
			});
			PopsPanel.execMenuOnce("weibo_shield_bottom_bar", () => {
				this.shieldBottomBar();
			});
			this.$data.weiBoUnlockQuality.lockVideoQuality();
			DOMUtils.ready(() => {
				PopsPanel.execMenuOnce("weibo-common-unlockVideoHigherQuality", () => {
					let lock = new utils.LockFunction(() => {
						this.$data.weiBoUnlockQuality.unlockVideoHigherQuality();
					}, 15);
					utils.mutationObserver(document.body, {
						config: {
							subtree: true,
							childList: true,
						},
						immediate: true,
						callback: () => {
							lock.run();
						},
					});
				});
			});
			if (WeiBoRouter.isMWeiBo_detail()) {
				log.info("Router: 移动端微博帖子");
				WeiBoDetail.init();
			} else if (WeiBoRouter.isMWeiBo_u()) {
				log.info("Router: 移动端微博主页");
				WeiBoU.init();
			} else if (WeiBoRouter.isMWeiBo_search()) {
				log.info("Router: 移动端微博搜索");
				WeiBoSearch.init();
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
		CommonUtils.addBlockCSS("#app div.m-tab-bar.m-bar-panel.m-container-max");
	},
};

export { WeiBo };
