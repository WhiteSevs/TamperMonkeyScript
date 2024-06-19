export const MDouYinRouter = {
	/**
	 * 是否是移动端抖音
	 */
	isMDouYin() {
		return window.location.host === "m.douyin.com";
	},
	/**
	 * 用户主页
	 */
	isShareUser() {
		return (
			this.isMDouYin() && window.location.pathname.startsWith("/share/user/")
		);
	},
	/**
	 * 分享的视频
	 */
	isShareVideo() {
		return (
			this.isMDouYin() && window.location.pathname.startsWith("/share/video/")
		);
	},
};
