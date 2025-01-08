export const DouYinRouter = {
	/**
	 * 直播
	 */
	isLive() {
		return (
			window.location.hostname === "live.douyin.com" ||
			this.isFollowLive() ||
			this.isRootLive()
		);
	},
	/**
	 * 关注-直播
	 *
	 * + /follow/live/
	 */
	isFollowLive() {
		return (
			this.isIndex() && window.location.pathname.startsWith("/follow/live/")
		);
	},
	/**
	 * 刷视频时的点击进去的直播
	 *
	 * + /root/live/
	 */
	isRootLive() {
		return this.isIndex() && window.location.pathname.startsWith("/root/live/");
	},
	/**
	 * 是否是抖音主站
	 */
	isIndex() {
		return window.location.hostname === "www.douyin.com";
	},
	/**
	 * 推荐视频
	 *
	 * + /?recommend=1
	 */
	isRecommend() {
		let searchParams = new URLSearchParams(window.location.search);
		return this.isIndex() && searchParams.has("recommend");
	},
	/**
	 * 搜索
	 *
	 * + /search/
	 * + /root/search/
	 */
	isSearch() {
		return (
			this.isIndex() &&
			(window.location.pathname.startsWith("/search/") || this.isRootSearch())
		);
	},
	/**
	 * 其它地方进去的搜索
	 *
	 * + /root/search/
	 */
	isRootSearch() {
		return (
			this.isIndex() && window.location.pathname.startsWith("/root/search/")
		);
	},
	/**
	 * 例如：知识、二次元、游戏、美食等
	 *
	 * + /channel/
	 */
	isChannel() {
		return this.isIndex() && window.location.pathname.startsWith("/channel/");
	},
	/**
	 * 精选
	 *
	 * + /discover/
	 */
	isDiscover() {
		return this.isIndex() && window.location.pathname.startsWith("/discover/");
	},
	/**
	 * 用户主页
	 *
	 * + /user/
	 */
	isUser() {
		return this.isIndex() && window.location.pathname.startsWith("/user/");
	},
	/**
	 * 单个视频，一般是分享的视频链接
	 *
	 * + /video/
	 */
	isVideo() {
		return this.isIndex() && window.location.pathname.startsWith("/video/");
	},
	/**
	 * 笔记图文
	 *
	 * + /note/
	 */
	isNote() {
		return this.isIndex() && window.location.pathname.startsWith("/note/");
	},
};
