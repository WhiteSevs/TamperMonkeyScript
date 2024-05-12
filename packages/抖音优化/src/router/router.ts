const DouYinRouter = {
	/** 直播 */
	isLive() {
		return window.location.hostname === "live.douyin.com";
	},
	/** 视频 */
	isVideo() {
		return window.location.hostname === "www.douyin.com";
	},
};

export { DouYinRouter };
