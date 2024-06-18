export const DouYinRouter = {
	/** 直播 */
	isLive() {
		return window.location.hostname === "live.douyin.com";
	},
	/** 视频 */
	isVideo() {
		return window.location.hostname === "www.douyin.com";
	},
	/** 搜索 */
	isSearch() {
		return (
			window.location.hostname === "www.douyin.com" &&
			window.location.pathname.startsWith("/search")
		);
	},
	/**
	 * 用户主页
	 */
	isShareUser() {
		return window.location.pathname.startsWith("/share/user/");
	},
};
