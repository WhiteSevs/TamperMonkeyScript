import { GM_cookie, log, utilsCookieManager } from "@/env";
import { Panel } from "@components/setting/panel";
import { GM, unsafeWindow } from "ViteGM";
import Qmsg from "qmsg";

export type CookieManagerApiName = "document.cookie" | "cookieStore" | "GM_cookie" | "GM.cookie";

export const CookieManagerApiNameList: CookieManagerApiName[] = [
	"document.cookie",
	"cookieStore",
	"GM_cookie",
	"GM.cookie",
];

export class CookieManagerService {
	__apiName;
	/**
	 * @param apiName 强制使用Api的名称，是否使用保存的Api名称
	 */
	constructor(apiName?: CookieManagerApiName) {
		if (typeof apiName === "string") {
			if (!CookieManagerApiNameList.includes(apiName)) {
				throw new Error(`未知的apiName：${apiName}`);
			}
		}
		this.__apiName = apiName;
	}
	get cookieManagerApiName() {
		let managerApi = Panel.getValue("cookie-manager-api", "document.cookie" as CookieManagerApiName);
		return this.__apiName || managerApi;
	}
	get cookieManager() {
		if (this.cookieManagerApiName === "GM_cookie") {
			return {
				list(options: {}, callback: (cookieListResult: GmCallbackCookie[]) => void) {
					GM_cookie.list(options, (result) => {
						callback(result);
					});
				},
				set(cookieInfo: GMCookieInstance, callback: (error?: string | null) => void) {
					GM_cookie.set(<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo, (result) => {
						callback(result);
					});
				},
				delete(cookieInfo: GMCookieInstance, callback: (error?: string | null) => void) {
					GM_cookie.delete(cookieInfo, (result) => {
						callback(result);
					});
				},
			};
		} else if (this.cookieManagerApiName === "GM.cookie") {
			return {
				list(options: {}, callback: (cookieListResult: GmCallbackCookie[]) => void) {
					GM.cookie.list().then((result) => {
						callback(result);
					});
				},
				set(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
					GM.cookie
						.set(<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo)
						.then((result) => {
							callback(result ?? null);
						})
						.catch((reason) => {
							callback(reason);
						});
				},
				delete(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
					GM.cookie
						.delete(cookieInfo)
						.then((result) => {
							callback(result ?? null);
						})
						.catch((reason) => {
							callback(reason);
						});
				},
			};
		} else if (this.cookieManagerApiName === "cookieStore") {
			let cookieStore = unsafeWindow.cookieStore;
			return {
				list(options: {}, callback: (cookieListResult: CookieStoreData[]) => void) {
					cookieStore
						.getAll()
						.then((result) => {
							callback(result);
						})
						.catch((reason) => {
							log.error(reason);
							Qmsg.error(reason.toString());
						});
				},
				set(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
					cookieStore
						.set(cookieInfo)
						.then(() => {
							callback();
						})
						.catch((reason) => {
							callback(reason);
						});
				},
				delete(cookieInfo: GMCookieInstance, callback: (error?: Error | undefined | null) => void) {
					cookieStore
						.delete(cookieInfo)
						.then((result) => {
							callback();
						})
						.catch((reason) => {
							callback(reason);
						});
				},
			};
		} else {
			return utilsCookieManager;
		}
	}
	/**
	 * 查询所有Cookie
	 */
	queryAllCookie() {
		return new Promise<(GMCookieInstance | CookieStoreData)[]>((resolve, reject) => {
			try {
				this.cookieManager.list({}, (cookieListResult) => {
					let __cookieListResult__ = cookieListResult || [];
					__cookieListResult__ = __cookieListResult__.sort((a, b) => a.name.localeCompare(b.name));
					resolve(__cookieListResult__);
				});
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.toString());
				reject(error);
			}
		});
	}
	/**
	 * 清除所有Cookie
	 */
	deleteAllCookie() {
		return new Promise<{
			success: number;
			error: number;
		}>((resolve, reject) => {
			try {
				this.cookieManager.list({}, async (cookieListResult) => {
					const __cookieListResult__ = cookieListResult || [];
					const result = {
						success: 0,
						error: 0,
					};
					for (let index = 0; index < __cookieListResult__.length; index++) {
						const cookieListItem = __cookieListResult__[index];
						let deleteError = await new Promise<Error | null | undefined | string>((deleteResolve) => {
							this.deleteCookie(cookieListItem).then((deleteResult) => {
								deleteResolve(deleteResult);
							});
						});
						if (deleteError) {
							result.error++;
						} else {
							result.success++;
						}
					}
					resolve(result);
				});
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.toString());
				reject(error);
			}
		});
	}
	/**
	 * 添加Cookie
	 */
	addCookie(cookieInfo: GMCookieInstance | CookieStoreData) {
		return new Promise<string | Error | null | undefined>((resolve, reject) => {
			try {
				Reflect.deleteProperty(cookieInfo, "hostOnly");
				this.cookieManager.set(
					<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo,
					(error) => {
						if (import.meta.env.DEV) {
							log.info(["添加Cookie：" + cookieInfo.name, cookieInfo]);
						}
						resolve(error);
					}
				);
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.toString());
				reject(error);
			}
		});
	}
	/**
	 * 删除Cookie
	 */
	deleteCookie(cookieInfo: GMCookieInstance | CookieStoreData) {
		return new Promise<string | Error | null | undefined>((resolve, reject) => {
			try {
				this.cookieManager.delete(
					<NonNullableProperty<GMCookieInstance, "expirationDate">>cookieInfo,
					(error) => {
						if (import.meta.env.DEV) {
							log.info(["删除Cookie：" + cookieInfo.name, cookieInfo]);
						}
						resolve(error);
					}
				);
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.toString());
				reject(error);
			}
		});
	}
	/**
	 * 更新Cookie
	 */
	updateCookie(cookieInfo: GMCookieInstance | CookieStoreData) {
		return new Promise<string | Error | null | undefined>(async (resolve, reject) => {
			let result: any;
			try {
				if (this.cookieManagerApiName === "document.cookie" || this.cookieManagerApiName === "cookieStore") {
					// 这种获取信息不全的Api要更新Cookie先删除再设置
					let deleteError = await this.deleteCookie(cookieInfo);
					if (deleteError) {
						throw new TypeError(deleteError.toString());
					}
				}
				let addError = await this.addCookie(cookieInfo);
				if (addError) {
					throw new TypeError(addError.toString());
				}
			} catch (error: any) {
				result = error;
			} finally {
				if (import.meta.env.DEV) {
					log.info(["更新Cookie：" + cookieInfo.name, cookieInfo]);
				}
				resolve(result);
			}
		});
	}
}
