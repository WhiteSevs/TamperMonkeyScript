import { log, utils } from "@/env";
import { DouYinElement } from "../utils/DouYinElement";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinUtils } from "@/utils/DouYinUtils";

export const DouYinAccount = {
	/**
	 * 伪装登录
	 */
	disguiseLogin() {
		log.info("伪装登录");
		const WAIT_TIME = 20000;
		let uid = parseInt((Math.random() * 1000000).toString());
		let notChangeInfoUid = Object.defineProperty({}, "uid", {
			value: uid,
			writable: false,
		});
		function getUserInfo(element: HTMLElement) {
			let userInfoList = [];
			let $react = utils.getReactObj(element);
			let reactFiber = $react?.reactFiber;
			let reactProps = $react?.reactProps;
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
				Object.defineProperties(userInfo, {
					info: {
						value: notChangeInfoUid,
						writable: false,
					},
					isLogin: {
						value: true,
						writable: false,
					},
				});
			});
		}
		DouYinElement.watchVideDataListChange(($os) => {
			setLogin($os);
		});
		utils
			.waitNode<HTMLDivElement>("#root div[class*='-os']", WAIT_TIME)
			.then(() => {
				utils.mutationObserver(document.body, {
					config: {
						subtree: true,
						childList: true,
					},
					callback: utils.debounce(() => {
						let $os = DouYinElement.getOSElement();
						if (!$os) {
							return;
						}
						setLogin($os);
					}, 70),
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
					utils.mutationObserver(document.body, {
						config: {
							subtree: true,
							childList: true,
						},
						callback: utils.debounce(() => {
							setLogin(
								document.querySelector(`#douyin-header`) as HTMLDivElement
							);
						}, 70),
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
					utils.mutationObserver(document.body, {
						config: {
							subtree: true,
							childList: true,
						},
						callback: utils.debounce((mutation, observer) => {
							setUserInfoBySearch($rootDiv);
						}, 70),
					});
				});
		}
	},
	/**
	 * 关闭登录弹窗
	 */
	watchLoginDialogToClose() {
		log.info("监听登录弹窗并关闭");
		DouYinUtils.addBlockCSS('div[id^="login-full-panel-"]');
		utils.waitNode<HTMLBodyElement>("body").then(() => {
			utils.mutationObserver(document.body, {
				config: {
					subtree: true,
					childList: true,
				},
				callback() {
					let accountCloseBtn = document.querySelector(
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
	},
};
