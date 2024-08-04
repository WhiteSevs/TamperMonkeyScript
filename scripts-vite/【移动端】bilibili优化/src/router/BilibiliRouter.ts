export const BilibiliRouter = {
	/**
	 * 视频页面
	 * + /video/
	 */
	isVideo() {
		return window.location.pathname.startsWith("/video/");
	},
	/**
	 * 番剧
	 * + /banggumi/
	 */
	isBangumi() {
		return window.location.pathname.startsWith("/bangumi/");
	},
	/**
	 * 搜索
	 * + /search
	 */
	isSearch() {
		return window.location.pathname.startsWith("/search");
	},
	/**
	 * 直播
	 * + live.bilibili.com
	 */
	isLive() {
		return window.location.hostname === "live.bilibili.com";
	},
	/**
	 * 专栏稿件
	 * + /opus
	 */
	isOpus() {
		return window.location.pathname.startsWith("/opus");
	},
	/**
	 * 话题
	 * + /topic-detail
	 */
	isTopicDetail() {
		return window.location.pathname.startsWith("/topic-detail");
	},
	/**
	 * 动态
	 * + /dynamic
	 */
	isDynamic() {
		return window.location.pathname.startsWith("/dynamic");
	},
	/**
	 * 首页
	 * + /
	 * + /channel
	 */
	isHead() {
		return (
			window.location.pathname === "/" ||
			window.location.pathname.startsWith("/channel")
		);
	},
	/**
	 * 个人空间
	 * + /space
	 */
	isSpace() {
		return window.location.pathname.startsWith("/space");
	},
};

export const BilibiliPCRouter = {
	/**
	 * 桌面端
	 */
	isPC() {
		return window.location.hostname === "www.bilibili.com";
	},
	/**
	 * 应该是动态？
	 */
	isReadMobile() {
		return this.isPC() && window.location.pathname.startsWith("/read/mobile");
	},
};
