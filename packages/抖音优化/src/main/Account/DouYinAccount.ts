import { log, utils } from "@/env";
import { DouYinElement } from "../Element/DouYinElement";
import { DouYinRouter } from "@/router/router";

const DouYinAccount = {
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
		DouYinElement.watchVideDataListChange(() => {
			setLogin(DouYinElement.getOSElement());
		});
		utils
			.waitNodeWithInterval("#root div[class*='-os']", WAIT_TIME)
			.then(() => {
				utils.mutationObserver(document.body, {
					config: {
						subtree: true,
						childList: true,
					},
					callback: utils.debounce(() => {
						setLogin(DouYinElement.getOSElement());
					}, 70),
				});
			});
		/* 直播的顶部live */
		if (DouYinRouter.isLive()) {
			utils
				.waitNodeWithInterval(
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
		}
	},
	/**
	 * 关闭登录弹窗
	 */
	watchLoginDialogToClose() {
		log.info("监听登录弹窗并关闭");
		DouYinElement.addShieldStyle('div[id^="login-full-panel-"]');
		utils.waitNode("body").then(() => {
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

export { DouYinAccount };
