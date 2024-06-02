import { PopsPanel } from "@/setting/setting";
import { DouYinElement } from "@/utils/DouYinElement";
import { DouYinRouter } from "@/router/router";
import { GM_addStyle } from "ViteGM";
import { log } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";

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
		PopsPanel.execMenuOnce("shieldBottomQuestionButton", () => {
			this.shieldBottomQuestionButton();
		});
	},
	/**
	 * 【屏蔽】充砖石
	 */
	shieldFillingBricksAndStones() {
		log.info("【屏蔽】充砖石");
		DouYinUtils.addBlockCSS(
			'pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】充砖石");
			DouYinUtils.addBlockCSS(
				'div:has(>div>div>div>div[data-e2e="something-button"] path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
			);
		}
	},
	/**
	 * 【屏蔽】客户端
	 */
	shieldClient() {
		log.info("【屏蔽】客户端");
		DouYinUtils.addBlockCSS(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container'
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】客户端");
			DouYinUtils.addBlockCSS(
				'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])'
			);
		}
	},
	/**
	 * 【屏蔽】快捷访问
	 */
	shieldQuickAccess() {
		log.info("【屏蔽】快捷访问");
		DouYinUtils.addBlockCSS(
			'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)'
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】快捷访问");
			DouYinUtils.addBlockCSS("div:has(>div>div>.quick-access-nav-icon)");
		}
	},
	/**
	 * 【屏蔽】通知
	 */
	shieldNotifitation() {
		log.info("【屏蔽】通知");
		DouYinUtils.addBlockCSS(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】通知");
			DouYinUtils.addBlockCSS('ul:has( div>div[data-e2e="notice-entry"] )');
		}
	},
	/**
	 * 【屏蔽】私信
	 */
	shieldPrivateMessage() {
		log.info("【屏蔽】私信");
		DouYinUtils.addBlockCSS(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】私信");
			DouYinUtils.addBlockCSS('ul:has( div>div[data-e2e="im-entry"] )');
		}
	},
	/**
	 * 【屏蔽】投稿
	 */
	shieldSubmission() {
		log.info("【屏蔽】投稿");
		DouYinUtils.addBlockCSS(
			'pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】投稿");
			DouYinUtils.addBlockCSS(
				'div:has(>div >div>div[data-e2e="something-button"] path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 00-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 002.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 002.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 00-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 011.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 01-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 01-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 011.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])'
			);
		}
	},
	/**
	 * 【屏蔽】客户端提示
	 */
	shieldClientTip() {
		log.info("【屏蔽】客户端提示");
		DouYinUtils.addBlockCSS(
			/* 右上角 通知 下载客户端，实时接收消息通知 */
			'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])',
			/* 右上角 个人信息 客户端登录访问更便捷 [下载] */
			'#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])',
			/* 右上角 私信 下载客户端，实时接收好友消息 */
			'#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])'
		);
	},
	/**
	 * 【屏蔽】左侧导航栏
	 */
	shieldLeftNavigator() {
		log.info("【屏蔽】左侧导航栏");
		DouYinUtils.addBlockCSS("#douyin-navigation");
		GM_addStyle(`
		/* 修复顶部导航栏的宽度 */
		#douyin-header{
			width: 100%;
		}
		`);
	},
	/**
	 * 【屏蔽】顶部导航栏
	 */
	shieldTopNavigator() {
		log.info("【屏蔽】顶部导航栏");
		DouYinUtils.addBlockCSS("#douyin-header");
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
	/**
	 * 屏蔽底部问题按钮
	 */
	shieldBottomQuestionButton() {
		log.info("屏蔽底部问题按钮");
		DouYinUtils.addBlockCSS([
			"#douyin-sidebar",
			/* 推荐视频右下角的？按钮 */
			"#douyin-temp-sidebar",
		]);
	},
};

export { ShieldHeader };
