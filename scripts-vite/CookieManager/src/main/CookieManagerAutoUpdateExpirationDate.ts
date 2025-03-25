export const CookieManagerAutoUpdateExpirationDate = {
	/**
	 * 获取某个域名下的自动延长Cookie的信息
	 */
	getWebSiteAutoUpdateCookieInfo(hostname: string) {},
	/**
	 * 添加自动更新过期时间
	 */
	addAutoUpdate(cookieInfo: GMCookieInstance) {},
	/**
	 * 移除添加的自动更新过期时间
	 */
	removeAutoUpdate(cookieInfo: GMCookieInstance) {},
};
