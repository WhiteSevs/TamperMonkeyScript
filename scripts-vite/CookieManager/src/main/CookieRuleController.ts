import { DOMUtils, log, utils } from "@/env";
import { CookieManager } from "./CookieManager";
import { CookieRule } from "./CookieRule";

export const CookieRuleController = {
	init() {
		this.execController();
		DOMUtils.ready(() => {
			this.execController();
		});
	},
	/**
	 * 执行操作
	 */
	execController() {
		for (let index = 0; index < CookieRule.$data.ruleData.length; index++) {
			const rule = CookieRule.$data.ruleData[index];
			CookieManager.queryAllCookie().then(async (cookieListResult) => {
				for (
					let cookieInfoIndex = 0;
					cookieInfoIndex < cookieListResult.length;
					cookieInfoIndex++
				) {
					let cookieInfo = cookieListResult[cookieInfoIndex];
					const cookieName = cookieInfo.name;
					const ruleCookieName = rule.data.cookieName;
					let flag = false;
					if (rule.data.enableRegExpToMatchCookieName) {
						// 使用正则来匹配Cookie名
						let regExpCookieName = new RegExp(ruleCookieName, "i");
						if (regExpCookieName.test(cookieName)) {
							flag = true;
						}
					} else {
						// 使用字符匹配Cookie名
						if (cookieName.includes(ruleCookieName)) {
							flag = true;
						}
					}
					if (flag) {
						let operationMode = rule.data.operationMode;
						if (operationMode === "delete") {
							// 删除Cookie
							CookieManager.deleteCookie(cookieInfo);
						} else if (
							operationMode === "extended" ||
							operationMode === "extended-90" ||
							operationMode === "extended-180" ||
							operationMode === "extended-360"
						) {
							// 延期Cookie
							let currentTime = Date.now();
							let oneMonth = 30 * 24 * 60 * 60 * 1000;
							let threeMonth = oneMonth * 3;
							let halfAYear = oneMonth * 6;
							let oneYear = oneMonth * 12;
							let checkTime = oneMonth;
							if (operationMode === "extended-90") {
								checkTime = threeMonth;
							} else if (operationMode === "extended-180") {
								checkTime = halfAYear;
							} else if (operationMode === "extended-360") {
								checkTime = oneYear;
							}
							let updateFlag = false;
							if (CookieManager.cookieManagerApiName === "document.cookie") {
								// 直接延期，毕竟不知道过期时间
								(cookieInfo as GMCookieInstance).expirationDate =
									currentTime + checkTime;
								updateFlag = true;
							} else if (CookieManager.cookieManagerApiName === "cookieStore") {
								let expireTime = (cookieInfo as CookieStoreData).expires;
								// 毫秒
								if (
									typeof expireTime === "number" &&
									expireTime - currentTime < checkTime
								) {
									(cookieInfo as CookieStoreData).expires =
										expireTime + checkTime;
									updateFlag = true;
								}
							} else if (CookieManager.cookieManagerApiName === "GM_cookie") {
								let expireTime = (cookieInfo as GMCookieInstance)
									.expirationDate;
								// 秒级
								if (
									typeof expireTime === "number" &&
									expireTime * 1000 - currentTime < checkTime
								) {
									(cookieInfo as GMCookieInstance).expirationDate =
										expireTime + checkTime / 1000;
									updateFlag = true;
								}
							} else {
								log.error(
									"未知的cookieManagerApiName",
									CookieManager.cookieManagerApiName
								);
							}
							if (updateFlag) {
								await CookieManager.updateCookie(cookieInfo);
							}
						}
					}
				}
			});
		}
	},
};
