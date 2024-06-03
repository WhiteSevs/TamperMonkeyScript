const BilibiliRouter = {
	/**
	 * 判断当前路径
	 * + /video/
	 */
	isVideo() {
		return window.location.pathname.startsWith("/video/");
	},
	/**
	 * 判断当前路径
	 * + /banggumi/
	 */
	isBangumi() {
		return window.location.pathname.startsWith("/bangumi/");
	},
	/**
	 * 判断当前路径
	 * + /search
	 */
	isSearch() {
		return window.location.pathname.startsWith("/search");
	},
	/**
	 * 判断当前路径
	 * + live.bilibili.com
	 */
	isLive() {
		return window.location.hostname === "live.bilibili.com";
	},
	/**
	 * 判断当前路径
	 * + /opus
	 */
	isOpus() {
		return window.location.pathname.startsWith("/opus");
	},
	/**
	 * 判断当前路径
	 * + /topic-detail
	 */
	isTopicDetail() {
		return window.location.pathname.startsWith("/topic-detail");
	},
	/**
	 * 判断当前路径
	 * + /dynamic
	 */
	isDynamic() {
		return window.location.pathname.startsWith("/dynamic");
	},
	/**
	 * 判断当前路径
	 * + /
	 * + /channel
	 */
	isHead() {
		return (
			window.location.pathname === "/" ||
			window.location.pathname.startsWith("/channel")
		);
	},
};

export { BilibiliRouter };
