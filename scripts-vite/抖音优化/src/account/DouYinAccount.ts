import { $, log, utils } from "@/env";
import { DouYinElement } from "../utils/DouYinElement";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinUtils } from "@/utils/DouYinUtils";
import { CommonUtil } from "@/utils/CommonUtil";
import { PopsPanel } from "@/setting/setting";

export const DouYinAccount = {
	/**
	 * 伪装登录
	 */
	disguiseLogin() {
		log.info("伪装登录");
		const WAIT_TIME = 20000;
		// let uid = parseInt((Math.random() * 1000000).toString());
		let uid = 114514;
		let info = {
			uid: uid,
			secUid: "",
			shortId: "",
			realName: "",
			// 昵称
			nickname: "乌萨奇",
			// 描述
			desc: "除草证3级",
			// 性别
			gender: 0,
			// 头像
			avatarUrl:
				"https://www.z4a.net/images/2025/02/28/008DOnfHgy1hxpz9zshl4g30hs0hsnpj.gif",
			avatar300Url:
				"https://www.z4a.net/images/2025/02/28/008DOnfHgy1hxpz9zshl4g30hs0hsnpj.gif",
			followStatus: 0,
			followerStatus: 0,
			// 作品数量
			awemeCount: 0,
			// 稍后再看数量
			watchLaterCount: 0,
			// 关注
			followingCount: 0,
			followerCount: 0,
			followerCountStr: "",
			// 粉丝数量
			mplatformFollowersCount: 9999999,
			// 我的喜欢的数量
			favoritingCount: 0,
			// 获赞
			totalFavorited: 9999999,
			userCollectCount: {
				logPb: {
					impr_id: "",
				},
				collectCountList: [],
				statusCode: 0,
				extra: {
					fatal_item_ids: [],
					logid: "",
					now: Date.now(),
				},
			},
			uniqueId: "",
			customVerify: "",
			// 年龄
			age: new Date().getFullYear() - 2019,
			country: "",
			province: "",
			city: "",
			district: "",
			// 学校
			school: "chiikawa",
			// 控制学校显示
			schoolVisible: 1,
			enterpriseVerifyReason: "",
			secret: 1,
			userCanceled: false,
			roomData: {},
			shareQrcodeUrl: "",
			shareInfo: void 0,
			coverAndHeadImageInfo: {
				profileCoverList: [],
			},
			roomId: 0,
			favoritePermission: 1,
			viewHistoryPermission: true,
			isGovMediaVip: false,
			isStar: false,
			hideLocation: false,
			needSpecialShowFollowerCount: false,
			continuationState: 0,
			im_role_ids: [],
			accountCertInfo: {},
			close_consecutive_chat: 0,
		};
		function getUserInfo(element: HTMLElement) {
			let userInfoList = [];
			let reactInstance = utils.getReactObj(element);
			let reactFiber = reactInstance?.reactFiber;
			let reactProps = reactInstance?.reactProps;
			if (reactFiber?.alternate?.return?.memoizedProps?.userInfo) {
				userInfoList.push(
					reactFiber?.alternate?.return?.memoizedProps?.userInfo
				);
			}
			if (reactFiber?.alternate?.return?.memoizedProps?.userInfo?.userInfo) {
				userInfoList.push(
					reactFiber?.alternate?.return?.memoizedProps?.userInfo.userInfo
				);
			}
			if (reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo) {
				userInfoList.push(
					reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo
				);
			}
			if (
				reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo?.userInfo
			) {
				userInfoList.push(
					reactFiber?.alternate?.return?.return?.memoizedProps?.userInfo
						.userInfo
				);
			}
			return userInfoList;
		}
		/**
		 * 设置登录
		 * @param element
		 */
		function setLogin(element: HTMLElement) {
			getUserInfo(element).forEach((userInfo) => {
				if (!userInfo.isLogin) {
					userInfo.info = info;
					userInfo.isLogin = true;
					userInfo.statusCode = 0;
				}
			});
		}
		DouYinElement.watchFeedVideoListChange(($os) => {
			setLogin($os);
		});
		utils
			.waitNode<HTMLDivElement>("#root div[class*='-os']", WAIT_TIME)
			.then(() => {
				let lockFn = new utils.LockFunction(() => {
					let $os = DouYinElement.getOSElement();
					if (!$os) {
						return;
					}
					setLogin($os);
				}, 70);
				utils.mutationObserver(document.body, {
					config: {
						subtree: true,
						childList: true,
					},
					immediate: true,
					callback: () => {
						lockFn.run();
					},
				});
			})
			.catch((err) => {});
		/* 直播的顶部live */
		if (DouYinRouter.isLive()) {
			log.info("伪装登录：live");
			utils
				.waitNode<HTMLDivElement>(
					`#douyin-header div:has(.dy-tip-container)`,
					WAIT_TIME
				)
				.then(() => {
					let lockFn = new utils.LockFunction(() => {
						setLogin($<HTMLDivElement>(`#douyin-header`)!);
					}, 70);
					utils.mutationObserver(document.body, {
						config: {
							subtree: true,
							childList: true,
						},
						callback: () => {
							lockFn.run();
						},
					});
				});
		} else if (DouYinRouter.isSearch()) {
			log.info("伪装登录：search");
			/* 搜索 */
			function setUserInfoBySearch($ele: HTMLElement) {
				/* 搜索页面的用户信息 */
				let $react = utils.getReactObj($ele);
				let reactFiber = $react?.reactFiber;
				let reactProps = $react?.reactProps;
				if (
					typeof reactProps?.children?.[1]?.props?.userInfo?.isLogin ===
					"boolean"
				) {
					Reflect.set(reactProps.children[1].props.userInfo, "isLogin", true);
				}
				if (typeof reactProps?.children?.[1]?.props?.isClient === "boolean") {
					Reflect.set(reactProps.children[1].props, "isClient", true);
				}
			}
			utils
				.waitNode<HTMLDivElement>("#root > div", WAIT_TIME)
				.then(($rootDiv) => {
					if (!$rootDiv) {
						log.error("#root > div获取失败");
						return;
					}
					let lockFn = new utils.LockFunction(() => {
						setUserInfoBySearch($rootDiv);
					}, 70);
					utils.mutationObserver(document, {
						config: {
							subtree: true,
							childList: true,
						},
						callback: () => {
							lockFn.run();
						},
					});
				});
		}
	},
	/**
	 * 关闭登录弹窗
	 */
	watchLoginDialogToClose() {
		log.info("监听登录弹窗并关闭");
		let result: (HTMLStyleElement | undefined)[] = [
			CommonUtil.addBlockCSS('div[id^="login-full-panel-"]'),
		];

		utils.waitNode<HTMLBodyElement>("body").then(() => {
			utils.mutationObserver(document.body, {
				config: {
					subtree: true,
					childList: true,
				},
				callback() {
					if (!PopsPanel.getValue("watchLoginDialogToClose")) {
						return;
					}
					let accountCloseBtn = $(
						'body > div[id^="login-full-panel-"] .dy-account-close'
					) as HTMLDivElement;
					if (accountCloseBtn) {
						utils
							.getReactObj(accountCloseBtn)
							?.reactProps?.onClick(new Event("click"));
					}
				},
			});
		});

		return result;
	},
};
