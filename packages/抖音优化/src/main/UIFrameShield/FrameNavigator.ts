import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/main/Element/DouYinElement";
import { DouYinRouter } from "@/router/router";
import { GM_addStyle } from "ViteGM";
import { log } from "@/env";

/** 顶部屏蔽 */
const ShieldHeader = {
	init() {
		PopsPanel.execMenu("shieldClientTip", () => {
			this.shieldClientTip();
		});
		PopsPanel.execMenu("shieldFillingBricksAndStones", () => {
			this.shieldFillingBricksAndStones();
		});
		PopsPanel.execMenu("shieldClient", () => {
			this.shieldClient();
		});
		PopsPanel.execMenu("shieldQuickAccess", () => {
			this.shieldQuickAccess();
		});
		PopsPanel.execMenu("shieldNotifitation", () => {
			this.shieldNotifitation();
		});
		PopsPanel.execMenu("shieldPrivateMessage", () => {
			this.shieldPrivateMessage();
		});
		PopsPanel.execMenu("shieldSubmission", () => {
			this.shieldSubmission();
		});
		PopsPanel.execMenu("shieldLeftNavigator", () => {
			this.shieldLeftNavigator();
		});
		PopsPanel.execMenu("shieldTopNavigator", () => {
			this.shieldTopNavigator();
		});
	},
	/**
	 * 【屏蔽】充砖石
	 */
	shieldFillingBricksAndStones() {
		log.info("【屏蔽】充砖石");
		DouYinElement.addShieldStyle(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
		);
	},
	/**
	 * 【屏蔽】客户端
	 */
	shieldClient() {
		log.info("【屏蔽】客户端");
		DouYinElement.addShieldStyle(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container'
		);
	},
	/**
	 * 【屏蔽】快捷访问
	 */
	shieldQuickAccess() {
		log.info("【屏蔽】快捷访问");
		DouYinElement.addShieldStyle(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)'
		);
	},
	/**
	 * 【屏蔽】通知
	 */
	shieldNotifitation() {
		log.info("【屏蔽】通知");
		DouYinElement.addShieldStyle(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
		);
	},
	/**
	 * 【屏蔽】私信
	 */
	shieldPrivateMessage() {
		log.info("【屏蔽】私信");
		DouYinElement.addShieldStyle(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
		);
	},
	/**
	 * 【屏蔽】投稿
	 */
	shieldSubmission() {
		log.info("【屏蔽】投稿");
		DouYinElement.addShieldStyle(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
		);
	},
	/**
	 * 【屏蔽】客户端提示
	 */
	shieldClientTip() {
		log.info("【屏蔽】客户端提示");
		DouYinElement.addShieldStyle(
			'#douyin-header div[data-e2e="im-entry"] div.popShadowAnimation:first-child',
			"#douyin-header ul div.userMenuPanelShadowAnimation:first-child"
		);
	},
	/**
	 * 【屏蔽】左侧导航栏
	 */
	shieldLeftNavigator() {
		log.info("【屏蔽】左侧导航栏");
		DouYinElement.addShieldStyle("#douyin-navigation");
		GM_addStyle(`
		/* 修复顶部导航栏的宽度 */
		#douyin-header{
			width: 100%;
		}
		`)
	},
	/**
	 * 【屏蔽】顶部导航栏
	 */
	shieldTopNavigator() {
		log.info("【屏蔽】顶部导航栏");
		DouYinElement.addShieldStyle("#douyin-header");
		if (DouYinRouter.isSearch()) {
			/* 搜索页面 */
			GM_addStyle(`
			/* 把搜索顶部的工具栏置顶 */
			#search-content-area > div > div:nth-child(1) > div:nth-child(1){
				top: 0;
			}
			`);
		}
	},
};

export { ShieldHeader };
