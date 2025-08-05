import { CookieManager } from "@/main/CookieManager";

export const CookieInfoTransform = {
	/**
	 * 对编辑前的cookie信息进行值转换
	 * @param cookieInfo
	 * @param isEdit 是否是编辑
	 */
	beforeEdit(cookieInfo: GMCookieInstance, isEdit: boolean) {
		const cookieManagerApiName = CookieManager.cookieManagerApiName;
		if (cookieManagerApiName === "document.cookie") {
		}
		if (cookieManagerApiName === "cookieStore") {
			// cookieStore的返回的值是expire不是expirationDate
			// 所以赋值给expirationDate
			if (typeof (cookieInfo as any as CookieStoreData).expires === "number") {
				cookieInfo.expirationDate = (cookieInfo as any as CookieStoreData).expires;
			}
		} else if (cookieManagerApiName === "GM_cookie" || cookieManagerApiName === "GM.cookie") {
			// GM_cookie的expirationDate的格式是秒，需要转为秒用于编辑/添加
			if (isEdit) {
				if (typeof cookieInfo.expirationDate === "number") {
					cookieInfo.expirationDate = cookieInfo.expirationDate * 1000;
				}
			} else {
				// 但是添加时传入的是毫秒的时间戳
				// 不需要转换了
			}
		}
		return cookieInfo;
	},
	/**
	 * 对编辑后的cookie信息进行值转换
	 * @param cookieInfo
	 */
	afterEdit(cookieInfo: GMCookieInstance) {
		const cookieManagerApiName = CookieManager.cookieManagerApiName;
		if (cookieManagerApiName === "document.cookie") {
			// document.cookie不设置domain，使用默认值留空
			cookieInfo.domain = "";
		} else if (cookieManagerApiName === "cookieStore") {
			// 把 expirationDate 赋值给 expires
			if (typeof cookieInfo.expirationDate === "number") {
				(cookieInfo as any as CookieStoreData).expires = cookieInfo.expirationDate;
			}
		} else if (cookieManagerApiName === "GM_cookie" || cookieManagerApiName === "GM.cookie") {
			// GM_cookie的expirationDate的格式是秒，需要从毫秒转为秒
			if (typeof cookieInfo.expirationDate === "number") {
				cookieInfo.expirationDate = Math.floor(cookieInfo.expirationDate / 1000);
			}
		}
		return cookieInfo;
	},
};
