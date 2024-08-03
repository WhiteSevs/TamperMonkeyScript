import { PopsPanel } from "@/setting/setting";
import { DouYinRouter } from "@/router/DouYinRouter";
import { addStyle, log, utils } from "@/env";
import { DouYinUtils } from "@/utils/DouYinUtils";

/** 顶部导航栏屏蔽 */
export const BlockTopNavigator = {
	init() {
		PopsPanel.execInheritMenuOnce(
			"shieldTopNavigator",
			"search-shieldTopNavigator",
			() => {
				return this.shieldTopNavigator();
			},
			(mainValue, childValue) => {
				if (DouYinRouter.isSearch()) {
					if (childValue == 1) {
						// 开
						return true;
					} else if (childValue == 0) {
						// 关
						return false;
					} else {
						// 跟随主设置
					}
				}
			}
		);
		PopsPanel.execMenuOnce("shieldClientTip", () => {
			return this.shieldClientTip();
		});
		PopsPanel.execMenuOnce("shieldFillingBricksAndStones", () => {
			return this.shieldFillingBricksAndStones();
		});
		PopsPanel.execMenuOnce("shieldClient", () => {
			return this.shieldClient();
		});
		PopsPanel.execMenuOnce("shieldQuickAccess", () => {
			return this.shieldQuickAccess();
		});
		PopsPanel.execMenuOnce("shieldNotifitation", () => {
			return this.shieldNotifitation();
		});
		PopsPanel.execMenuOnce("shieldPrivateMessage", () => {
			return this.shieldPrivateMessage();
		});
		PopsPanel.execMenuOnce("shieldSubmission", () => {
			return this.shieldSubmission();
		});
		PopsPanel.execMenuOnce("shieldWallpaper", () => {
			return this.shieldWallpaper();
		});
		PopsPanel.execMenuOnce("shieldBottomQuestionButton", () => {
			return this.shieldBottomQuestionButton();
		});
	},
	/**
	 * 【屏蔽】顶部导航栏
	 */
	shieldTopNavigator() {
		log.info("【屏蔽】顶部导航栏");
		let result = [];
		result.push(DouYinUtils.addBlockCSS("#douyin-header"));
		result.push(
			addStyle(/*css*/ `
			/* 修复视频的高度 */
			#douyin-right-container{
				padding-top: 0px !important;
			}
		`)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				addStyle(/*css*/ `
				/* 把搜索顶部的工具栏置顶 */
				#search-content-area > div > div:nth-child(1) > div:nth-child(1){
					top: 0;
				}`)
			);
		}

		return result;
	},
	/**
	 * 【屏蔽】充钻石
	 */
	shieldFillingBricksAndStones() {
		log.info("【屏蔽】充钻石");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				'#douyin-right-container pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])',
				// 2024.7.15
				'div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M5.757 12.268a6.397 6.397 0 1 1 12.793 0 6.397 6.397 0 0 1-12.793 0zm6.396-7.897a7.897 7.897 0 1 0 0 15.793 7.897 7.897 0 0 0 0-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 0 1-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 0 0 1.715.498v-1.5a1.725 1.725 0 0 1-1.715-1.735z"])',
				// 2024.7.16 更多 充钻石
				'body .semi-portal .semi-portal-inner li.semi-dropdown-item:has(a[href*="douyin_recharge"])'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS(
					'div:has(>div>div>div>div[data-e2e="something-button"] path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])', // 2024.7.15
					'div[id^="douyin-header-menu"] >  div > div > div:has(path[d="M5.757 12.268a6.397 6.397 0 1 1 12.793 0 6.397 6.397 0 0 1-12.793 0zm6.396-7.897a7.897 7.897 0 1 0 0 15.793 7.897 7.897 0 0 0 0-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 0 1-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 0 0 1.715.498v-1.5a1.725 1.725 0 0 1-1.715-1.735z"])'
				)
			);
		} else if (DouYinRouter.isLive()) {
			// 直播页面
			result.push(
				DouYinUtils.addBlockCSS(
					// 直播
					'#douyin-header pace-island[id^="island"] > div[class]:not([data-click]):has(div[data-e2e="something-button"]) > :has(path[d="M5.757 12.268a6.397 6.397 0 1112.793 0 6.397 6.397 0 01-12.793 0zm6.396-7.897a7.897 7.897 0 100 15.793 7.897 7.897 0 000-15.793zm2.127 3.52v-.497h-1.5v6.462h.001c0 .854-.685 1.536-1.517 1.536a1.527 1.527 0 01-1.517-1.536c0-.854.685-1.536 1.517-1.536v-1.5c-1.672 0-3.017 1.365-3.017 3.036 0 1.67 1.345 3.036 3.017 3.036s3.017-1.365 3.017-3.036h-.001v-3.228a3.184 3.184 0 001.715.498v-1.5a1.725 1.725 0 01-1.715-1.735z"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】客户端
	 */
	shieldClient() {
		log.info("【屏蔽】客户端");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				'#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container',
				// 2024.7.15
				'div[id^="douyin-header-menu"] pace-island > div > div[aria-describedby]:has(a[download^="douyin-downloader"])'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS(
					'div:has(> div[data-e2e="something-button"] path[d="M18.404 19.018h-12v-1.5h12v1.5zM11.654 13.457v-8.19h1.5v8.19l3.22-3.22 1.06 1.061-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5 1.06-1.06 3.22 3.22z"])',
					// 2024.7.15
					'div[id^="douyin-header-menu"] >  div > div > div:has(a[download^="douyin-downloader"])'
				)
			);
		} else if (DouYinRouter.isLive()) {
			// 直播页面
			result.push(
				DouYinUtils.addBlockCSS(
					// 直播
					'#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) .dy-tip-container:has(a)',
					// 直播
					'#douyin-header pace-island[id^="island"] > div[class] span:has(a[download][href*="client"])',
					/* 直播 更多 客户端 */
					'.semi-portal-inner .semi-dropdown-content .semi-dropdown-item:has(a[download][href*="client"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】快捷访问
	 */
	shieldQuickAccess() {
		log.info("【屏蔽】快捷访问");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				'header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(.quick-access-nav-icon)',
				// 直播 更多里面的 快捷访问
				// '.semi-portal-inner .semi-dropdown-content .semi-dropdown-item'
				// 2024.7.15 更新规则
				'div[id^="douyin-header-menu"] pace-island > div > div:has(.quick-access-nav-icon)'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS("div:has(>div>div>.quick-access-nav-icon)")
			);
			utils
				.waitNode('li.semi-dropdown-item[role="menuitem"]', 10000)
				.then(($semi) => {
					if (!$semi) {
						return;
					}
					let observer = utils.mutationObserver(document.body, {
						config: {
							subtree: true,
							childList: true,
						},
						callback() {
							let isFind = false;
							document
								.querySelectorAll('li.semi-dropdown-item[role="menuitem"]')
								.forEach(($ele) => {
									if ($ele.textContent?.includes("快捷访问")) {
										isFind = true;
										log.success("搜索-更多-快捷访问 移除元素");
										$ele.remove();
									}
								});
							if (isFind) {
								observer.disconnect();
							}
						},
					});
				});
		} else if (DouYinRouter.isLive()) {
			// 直播页面
		}
		return result;
	},
	/**
	 * 【屏蔽】通知
	 */
	shieldNotifitation() {
		log.info("【屏蔽】通知");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				'#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS(
					'ul:has( div>div[data-e2e="notice-entry"] )',
					// 2024.7.15
					'div[id^="douyin-header-menu"] >  div > div > ul:has(path[d="M12.154 4.768a5.656 5.656 0 0 0-5.644 5.285l-.407 6.172h12.102l-.407-6.172a5.657 5.657 0 0 0-5.644-5.285zm-4.148 5.383a4.156 4.156 0 0 1 8.295 0l.302 4.574H7.705l.301-4.574z"])'
				)
			);
		} else if (DouYinRouter.isLive()) {
			// 直播页面
			result.push(
				DouYinUtils.addBlockCSS(
					// 直播
					'#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(path[d="M9.905 19.407h4.5v-1.5h-4.5v1.5z"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】私信
	 */
	shieldPrivateMessage() {
		log.info("【屏蔽】私信");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				'#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])',
				// 直播
				'#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > ul:has(div[data-e2e="im-entry"])'
			)
		);
		if (DouYinRouter.isSearch()) {
			log.info("搜索-【屏蔽】私信");
			result.push(
				DouYinUtils.addBlockCSS(
					'ul:has( div>div[data-e2e="im-entry"] )',
					// 2024.7.15
					'div[id^="douyin-header-menu"] >  div > div > ul:has([data-e2e="im-entry"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】投稿
	 */
	shieldSubmission() {
		log.info("【屏蔽】投稿");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				'#douyin-right-container pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])',
				// 2024.7.15 更新规则
				'div[id^="douyin-header-menu"] pace-island > div > div:has(path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 0 0-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 0 0 2.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 0 0 2.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 0 0-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 0 1 1.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 0 1-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 0 1-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 0 1 1.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS(
					'div:has(>div >div>div[data-e2e="something-button"] path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 00-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 002.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 002.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 00-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 011.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 01-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 01-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 011.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])',
					// 2024.7.15
					'div[id^="douyin-header-menu"] >  div > div > div:has(path[d="M11.349 5.17h-.033c-1.068 0-1.915 0-2.598.054-.698.056-1.29.172-1.832.441a4.75 4.75 0 0 0-2.14 2.14c-.269.542-.386 1.134-.441 1.832-.055.683-.055 1.53-.055 2.599v.064c0 1.069 0 1.916.055 2.599.055.698.172 1.29.441 1.831a4.75 4.75 0 0 0 2.14 2.14c.542.27 1.134.386 1.832.442.683.055 1.53.055 2.598.055H12.684c1.068 0 1.915 0 2.598-.055.698-.056 1.29-.172 1.832-.442a4.75 4.75 0 0 0 2.14-2.14c.269-.541.386-1.133.441-1.831.055-.683.055-1.53.055-2.599v-.064c0-1.069 0-1.916-.055-2.599-.055-.698-.172-1.29-.441-1.832a4.75 4.75 0 0 0-2.14-2.14c-.542-.269-1.134-.385-1.832-.441-.683-.055-1.53-.055-2.598-.055h-1.335zM7.554 7.008c.299-.149.676-.241 1.284-.29.616-.05 1.403-.05 2.51-.05h1.303c1.108 0 1.895 0 2.511.05.608.049.985.141 1.284.29a3.25 3.25 0 0 1 1.464 1.464c.15.3.241.676.29 1.284.05.616.05 1.403.05 2.51 0 1.109 0 1.896-.05 2.512-.049.608-.14.985-.29 1.284a3.25 3.25 0 0 1-1.464 1.464c-.299.149-.676.241-1.284.29-.616.05-1.403.05-2.51.05h-1.303c-1.108 0-1.895 0-2.511-.05-.608-.049-.985-.141-1.284-.29a3.25 3.25 0 0 1-1.464-1.464c-.15-.3-.242-.676-.29-1.284-.05-.616-.05-1.403-.05-2.511s0-1.895.05-2.511c.048-.608.14-.985.29-1.284a3.25 3.25 0 0 1 1.464-1.464zm3.696 8.259v-2.25H9v-1.5h2.25v-2.25h1.5v2.25H15v1.5h-2.25v2.25h-1.5z"])'
				)
			);
		} else if (DouYinRouter.isLive()) {
			// 直播页面
			result.push(
				DouYinUtils.addBlockCSS(
					'#douyin-header pace-island[id^="island"] > div[class]:has(div[data-e2e="something-button"]) > :has(ul[data-e2e="cooperate-list"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】客户端提示
	 */
	shieldClientTip() {
		log.info("【屏蔽】客户端提示");
		let result = [];

		result.push(
			DouYinUtils.addBlockCSS(
				/* 右上角 通知 下载客户端，实时接收消息通知 */
				'ul li div[data-e2e="something-button"] + div div:has(>a[download*="douyin-downloader"])',
				/* 右上角 个人信息 客户端登录访问更便捷 [下载] */
				'#douyin-header pace-island[id^="island_"] ul > div:has(>a[class][download])',
				/* 右上角 私信 下载客户端，实时接收好友消息 */
				'#douyin-header pace-island[id^="island_"] ul[class] li div[data-e2e="im-entry"]  div>div div div:has(a[download][href])',
				/* 右上角 壁纸 下载客户端，使用壁纸 */
				'#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container div:has(+ #wallpaper-modal)'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS(
					/* 右上角 私信 下载客户端，实时接收好友消息 */
					'div[id^="douyin-header-menu"] ul li div[data-e2e="im-entry"] div > div > div:has(>a[download*="douyin-downloader"])',
					/* 右上角 个人信息 客户端登录访问更便捷 [下载] */
					'div[id^="douyin-header-menu"] ul > div:has(>a[download*="douyin-downloader"])'
				)
			);
		}
		return result;
	},
	/**
	 * 【屏蔽】壁纸
	 */
	shieldWallpaper() {
		log.info("【屏蔽】壁纸");
		let result = [];
		result.push(
			DouYinUtils.addBlockCSS(
				// 2024.7.15
				'div[id^="douyin-header-menu"] pace-island > div > div:has(span.semi-icon)'
			)
		);
		if (DouYinRouter.isSearch()) {
			// 搜索页面
			result.push(
				DouYinUtils.addBlockCSS(
					'div[id^="douyin-header-"] span[aria-describedby]:has(.semi-icon)',
					// 2024.7.15
					'div[id^="douyin-header-menu"] >  div > div > div:has(span.semi-icon)'
				)
			);
		} else if (DouYinRouter.isLive()) {
			// 直播页面
			result.push(
				DouYinUtils.addBlockCSS(
					'#douyin-header header div[id^="douyin-header-menu"] pace-island[id^="island_"] .dy-tip-container:has(span.semi-icon)',
					'#douyin-header pace-island[id^="island"] > div[class] span:has(.semi-icon)'
				)
			);
		}
		return result;
	},
	/**
	 * 屏蔽底部问题按钮
	 */
	shieldBottomQuestionButton() {
		log.info("屏蔽底部问题按钮");
		return DouYinUtils.addBlockCSS([
			"#douyin-sidebar",
			/* 推荐视频右下角的？按钮 */
			"#douyin-temp-sidebar",
		]);
	},
};
