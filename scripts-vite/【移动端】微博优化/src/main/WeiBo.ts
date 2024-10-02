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
import { WeiBoUserHome } from "./u/WeiBoUserHome";
import { WeiBoSearch } from "./search/WeiBoSearch";
import { WeiBoUnlockQuality } from "./WeiBoUnlockQuality";
import { WeiBoCardArticle } from "./card/WeiBoCardArticle";
import { WeiBoHome } from "./home/WeiBoHome";

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
		PopsPanel.execMenuOnce("weibo-common-clickImageToClosePreviewImage", () => {
			this.clickImageToClosePreviewImage();
		});
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
				return this.blockAds();
			});
			PopsPanel.execMenuOnce("weibo_shield_bottom_bar", () => {
				return this.shieldBottomBar();
			});
			this.$data.weiBoUnlockQuality.lockVideoQuality();
			DOMUtils.ready(() => {
				PopsPanel.execMenuOnce("weibo-common-unlockVideoHigherQuality", () => {
					this.unlockVideoHigherQuality();
				});
				PopsPanel.execMenuOnce("weibo-detail-setArticleAbsoluteTime", () => {
					WeiBoDetail.setArticleAbsoluteTime();
				});
			});
			if (WeiBoRouter.isMWeiBoHome()) {
				log.info(`Router: 移动端微博首页`);
				WeiBoHome.init();
			} else if (WeiBoRouter.isMWeiBo_detail()) {
				log.info("Router: 移动端微博帖子");
				WeiBoDetail.init();
			} else if (WeiBoRouter.isMWeiBo_userHome()) {
				log.info("Router: 移动端微博用户主页");
				WeiBoUserHome.init();
			} else if (WeiBoRouter.isMWeiBo_search()) {
				log.info("Router: 移动端微博搜索");
				WeiBoSearch.init();
			} else {
				log.error("Router: 未适配的移动端微博链接 => " + window.location.href);
			}
		} else if (WeiBoRouter.isVideo()) {
			// 视频页
			log.info("Router: 视频页");
			WeiBoVideo.init();
		} else if (WeiBoRouter.isCard()) {
			// 头条
			log.info("Router: 头条");
			if (WeiBoRouter.isCardArticle()) {
				log.info("Router: 头条文章");
				WeiBoCardArticle.init();
			} else {
				log.error("Router: 未适配头条 => " + window.location.href);
			}
		} else {
			// 未适配Router
			log.error("Router: 未适配 => " + window.location.href);
		}
	},
	/**
	 * 屏蔽 广告
	 */
	blockAds() {
		log.info(`屏蔽 广告`);
		return addStyle(blockAdsCSS);
	},
	/**
	 * 【屏蔽】底部工具栏
	 */
	shieldBottomBar() {
		log.info("【屏蔽】底部工具栏");
		return CommonUtils.addBlockCSS(
			"#app div.m-tab-bar.m-bar-panel.m-container-max"
		);
	},
	/**
	 * 解锁微博视频高画质
	 **/
	unlockVideoHigherQuality() {
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
	},
	/**
	 * 设置监听事件，监听点击预览中的图片，从而关闭预览
	 */
	clickImageToClosePreviewImage() {
		let selectorList = [".pswp .pswp__item img", ".pswp .pswp__item video"];
		selectorList.forEach((selector) => {
			DOMUtils.on(document, "click", selector, (event) => {
				let $closeButton = document.querySelector<HTMLElement>(
					".pswp .pswp__button--close"
				)!;
				if ($closeButton) {
					$closeButton.click();
				} else {
					log.warn("未找到关闭预览按钮，使用history.back()");
					window.history.back();
				}
			});
		});
	},
};

export { WeiBo };
