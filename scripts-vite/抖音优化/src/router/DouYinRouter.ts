export const DouYinRouter = {
	/** 直播 */
	isLive() {
		return (
			window.location.hostname === "live.douyin.com" || this.isFollowLive()
		);
	},
	/** 关注-直播 */
	isFollowLive() {
		return (
			this.isIndex() && window.location.pathname.startsWith("/follow/live/")
		);
	},
	/**
	 * 是否是抖音主站
	 */
	isIndex() {
		return window.location.hostname === "www.douyin.com";
	},
	/** 视频 */
	isVideo() {
		return this.isIndex();
	},
	/** 搜索 */
	isSearch() {
		return (
			this.isIndex() &&
			(window.location.pathname.startsWith("/search") ||
				window.location.pathname.startsWith("/root/search"))
		);
	},
	/**
	 * 用户主页
	 */
	isUser() {
		return this.isIndex() && window.location.pathname.startsWith("/user");
	},
};
