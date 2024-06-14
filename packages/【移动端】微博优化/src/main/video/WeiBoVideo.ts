import { WeiBoApi } from "@/api/WeiBoApi";
import { log } from "@/env";
import { WeiBoHook } from "@/hook/WeiBoHook";
import { PopsPanel } from "@/setting/setting";
import { VueUtils } from "@/utils/VueUtils";
import { GM_addStyle } from "ViteGM";

const WeiBoVideo = {
	init() {
		WeiBoVideo.hookWebpack();
		PopsPanel.execMenu("weibo_video_shield_bottom_toolbar", () => {
			this.shieldBottomToolBar();
		});
		PopsPanel.execMenu("weibo_video_shield_hot_comments", () => {
			this.shieldHotComments();
		});
		PopsPanel.execMenu("weibo_video_shield_recommend", () => {
			this.shieldRecommend();
		});
	},
	/**
	 * 劫持webpack
	 */
	hookWebpack() {
		log.info("劫持webpack");
		WeiBoHook.hookWebpack("webpackJsonp", "chunk-common", (webpackExports) => {
			if (
				typeof webpackExports?.exports === "object" &&
				typeof webpackExports.exports["a"] === "object" &&
				typeof webpackExports.exports["a"]["gotoApp"] === "function" &&
				PopsPanel.getValue("weibo_video_webpack_gotoApp")
			) {
				log.success(["成功劫持webpack调用函数", webpackExports]);
				webpackExports.exports["a"]["gotoApp"] = function (...args: any[]) {
					log.info(["阻止唤醒App：", args]);
				};
				return webpackExports;
			}
		});
	},
	/** 【屏蔽】底部工具栏 */
	shieldBottomToolBar() {
		log.info("【屏蔽】底部工具栏");
		GM_addStyle(`
        .woo-toolBar{
            display: none !important;
        }`);
	},
	/** 【屏蔽】相关推荐 */
	shieldRecommend() {
		log.info("【屏蔽】相关推荐");
		GM_addStyle(`
        #app .woo-panel[class*="Playdetail_card_"]:nth-child(2){
            display: none !important;
        }`);
	},
	/** 【屏蔽】热门评论 */
	shieldHotComments() {
		log.info("【屏蔽】热门评论");
		GM_addStyle(`
        #app .woo-panel[class*="Playdetail_card_"]:nth-child(3){
            display: none !important;
        }`);
	},
};

export { WeiBoVideo };
